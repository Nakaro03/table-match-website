import Link from "next/link"
import { notFound } from "next/navigation"
import { addApplicationNote, updateApplicationStatus, updateAttendance } from "@/app/actions/admin"
import { canAccessRegion, requireAdmin } from "@/lib/admin"
import { formatDateTime, kindLabels, statusLabels, statusOptions } from "@/lib/admin-labels"
import { createServiceClient } from "@/lib/supabase/server"

export const dynamic = "force-dynamic"

function TextList({ values }: { values?: string[] | null }) {
  return values?.length ? <div className="flex flex-wrap gap-2">{values.map((value) => <span key={value} className="bg-slate-100 px-2 py-1 text-xs font-bold">{value}</span>)}</div> : <span>—</span>
}

function DataItem({ label, children, sensitive = false }: { label: string; children: React.ReactNode; sensitive?: boolean }) {
  return <div className={`border-b border-slate-200 py-3 ${sensitive ? "bg-orange-50 px-3" : ""}`}><dt className="text-xs font-bold text-slate-500">{label}{sensitive && "（要配慮）"}</dt><dd className="mt-1 whitespace-pre-wrap break-words text-sm font-medium">{children || "—"}</dd></div>
}

export default async function ApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const admin = await requireAdmin()
  const service = createServiceClient()
  const { data: application } = await service.from("applications").select(`
    *, opportunities(title,region,location,start_at), people(*,student_profiles(*)),
    company_contacts(*,organizations(*)), consent_records(*), attendance_records(*),
    application_notes(id,body,created_at,author_id)
  `).eq("id", id).single()
  if (!application || !canAccessRegion(admin, (application.opportunities as { region?: string } | null)?.region)) notFound()

  const person = application.people as Record<string, unknown> | null
  const profile = (person?.student_profiles ?? null) as Record<string, unknown> | null
  const contact = application.company_contacts as Record<string, unknown> | null
  const organization = (contact?.organizations ?? null) as Record<string, unknown> | null
  const opportunity = application.opportunities as Record<string, unknown> | null
  const notes = (application.application_notes ?? []) as Array<{ id: string; body: string; created_at: string; author_id: string }>
  const consents = (application.consent_records ?? []) as Array<{ id: string; consent_type: string; granted: boolean; captured_at: string; policy_version: string }>
  const attendance = application.attendance_records as { result?: string; checked_in_at?: string } | null
  const metadata = (application.metadata ?? {}) as Record<string, string>
  const isStudent = application.applicant_type === "student"

  return <>
    <Link href="/admin/applications" className="text-sm font-bold text-primary underline">← 申込一覧へ</Link>
    <div className="mt-5 flex flex-wrap items-start justify-between gap-4"><div><p className="font-mono text-xs font-bold tracking-widest text-slate-500">{application.application_code}</p><h1 className="mt-2 text-3xl font-black">{String(isStudent ? person?.name ?? "学生申込" : organization?.name ?? contact?.name ?? "企業申込")}</h1><p className="mt-2 text-sm text-slate-500">{formatDateTime(application.submitted_at)} 受付</p></div><span className="bg-action-yellow px-4 py-2 text-sm font-black">{statusLabels[application.status] ?? application.status}</span></div>

    <div className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-6">
        <section className="border-2 border-slate-950 bg-white p-5"><h2 className="text-lg font-black">申込者情報</h2><dl className="mt-3 grid gap-x-6 md:grid-cols-2">
          {isStudent ? <><DataItem label="氏名">{String(person?.name ?? "")}</DataItem><DataItem label="フリガナ">{String(person?.kana ?? "")}</DataItem><DataItem label="電話番号">{String(person?.phone ?? "")}</DataItem><DataItem label="メール">{String(person?.email ?? "")}</DataItem><DataItem label="学校名">{String(profile?.school ?? "")}</DataItem><DataItem label="学部・学科 / 学年">{[profile?.faculty, profile?.grade].filter(Boolean).join(" / ")}</DataItem></> : <><DataItem label="会社・団体名">{String(organization?.name ?? "")}</DataItem><DataItem label="業種">{String(organization?.industry ?? "")}</DataItem><DataItem label="担当者">{String(contact?.name ?? "")}</DataItem><DataItem label="部署・役職">{String(contact?.department_role ?? "")}</DataItem><DataItem label="電話番号">{String(contact?.phone ?? "")}</DataItem><DataItem label="メール">{String(contact?.email ?? "")}</DataItem><DataItem label="所在地">{String(organization?.address ?? "")}</DataItem><DataItem label="Webサイト">{String(organization?.website_url ?? "")}</DataItem></>}
        </dl></section>

        <section className="border-2 border-slate-950 bg-white p-5"><h2 className="text-lg font-black">参加内容・要望</h2><dl className="mt-3">
          <DataItem label="対象企画">{String(opportunity?.title ?? "")}</DataItem><DataItem label="申込種別">{kindLabels[application.application_kind] ?? application.application_kind}</DataItem><DataItem label="参加目的"><TextList values={application.purposes} /></DataItem>
          {isStudent ? <><DataItem label="関心業界"><TextList values={application.interest_industries} /></DataItem><DataItem label="話したい企業">{application.desired_companies}</DataItem><DataItem label="不安・事前相談">{application.concern}</DataItem><DataItem label="必要な配慮" sensitive>{application.accommodations}</DataItem><DataItem label="参加可能時期・条件">{[metadata.availableFrom, metadata.availability, metadata.workStyle].filter(Boolean).join("\n")}</DataItem><DataItem label="志望動機・経験したいこと">{[metadata.motivation, metadata.desiredExperience].filter(Boolean).join("\n")}</DataItem></> : <><DataItem label="希望する学生像">{application.desired_students}</DataItem><DataItem label="参加予定者">{application.attendees}</DataItem><DataItem label="インターン内容">{[metadata.internshipTitle, metadata.internshipDescription, metadata.internshipPeriod, metadata.compensation].filter(Boolean).join("\n")}</DataItem></>}
          <DataItem label="その他の要望">{application.requests}</DataItem>
        </dl></section>

        <section className="border-2 border-slate-950 bg-white p-5"><h2 className="text-lg font-black">同意履歴</h2><div className="mt-4 overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b text-left"><th className="py-2">項目</th><th>同意</th><th>版</th><th>取得日時</th></tr></thead><tbody>{consents.map((consent) => <tr key={consent.id} className="border-b"><td className="py-2">{consent.consent_type}</td><td>{consent.granted ? "はい" : "いいえ"}</td><td>{consent.policy_version}</td><td>{formatDateTime(consent.captured_at)}</td></tr>)}</tbody></table></div></section>
      </div>

      <aside className="space-y-6">
        <section className="border-2 border-slate-950 bg-white p-5"><h2 className="font-black">対応状況を更新</h2><form action={updateApplicationStatus} className="mt-4 space-y-3"><input type="hidden" name="applicationId" value={id} /><select name="status" defaultValue={application.status} className="w-full border border-slate-500 px-3 py-2">{statusOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select><button className="w-full bg-slate-950 px-4 py-2.5 font-bold text-white">保存</button></form></section>
        <section className="border-2 border-slate-950 bg-white p-5"><h2 className="font-black">出欠</h2><p className="mt-2 text-sm text-slate-500">現在: {attendance?.result === "attended" ? "参加" : attendance?.result === "no_show" ? "欠席" : "未登録"}</p><form action={updateAttendance} className="mt-4 flex gap-2"><input type="hidden" name="applicationId" value={id} /><button name="result" value="attended" className="flex-1 bg-primary px-3 py-2 text-sm font-bold text-white">参加</button><button name="result" value="no_show" className="flex-1 border border-slate-500 px-3 py-2 text-sm font-bold">欠席</button></form></section>
        <section className="border-2 border-slate-950 bg-white p-5"><h2 className="font-black">運営メモ</h2><form action={addApplicationNote} className="mt-4"><input type="hidden" name="applicationId" value={id} /><textarea name="body" required maxLength={2000} rows={4} placeholder="連絡内容や引継ぎ事項" className="w-full border border-slate-500 p-3 text-sm" /><button className="mt-2 w-full bg-slate-950 px-4 py-2.5 font-bold text-white">メモを追加</button></form><div className="mt-5 space-y-3">{notes.map((note) => <article key={note.id} className="bg-slate-100 p-3 text-sm"><p className="whitespace-pre-wrap">{note.body}</p><p className="mt-2 text-xs text-slate-500">{formatDateTime(note.created_at)}</p></article>)}</div></section>
      </aside>
    </div>
  </>
}
