import Link from "next/link"
import { requireAdmin } from "@/lib/admin"
import { listApplications } from "@/lib/admin-data"
import { kindLabels, statusLabels } from "@/lib/admin-labels"

export const dynamic = "force-dynamic"

export default async function AdminCalendarPage() {
  const admin = await requireAdmin()
  const rows = (await listApplications(admin)).filter((row) => !["cancelled", "withdrawn"].includes(row.status))
  const grouped = rows.reduce((groups, row) => {
    const key = row.opportunities?.title ?? "企画未設定"
    const current = groups.get(key) ?? []
    current.push(row)
    groups.set(key, current)
    return groups
  }, new Map<string, typeof rows>())
  return <><p className="font-mono text-xs font-bold tracking-widest text-primary">SCHEDULE</p><h1 className="mt-2 text-3xl font-black">開催・参加予定</h1><p className="mt-2 text-sm text-slate-500">イベント、会社見学、インターンごとに参加予定者を確認します。</p><div className="mt-7 space-y-5">{Array.from(grouped.entries()).map(([title, applications]) => <section key={title} className="border-2 border-slate-950 bg-white"><div className="flex justify-between bg-slate-950 px-5 py-3 text-white"><h2 className="font-black">{title}</h2><span>{applications.length}件</span></div><div className="divide-y">{applications.map((row) => <Link key={row.id} href={`/admin/applications/${row.id}`} className="grid gap-2 px-5 py-4 hover:bg-yellow-50 sm:grid-cols-[1fr_150px_130px]"><span className="font-bold">{row.applicant_type === "student" ? row.people?.name : row.company_contacts?.organizations?.name}</span><span className="text-sm">{kindLabels[row.application_kind]}</span><span className="text-sm font-bold">{statusLabels[row.status]}</span></Link>)}</div></section>)}</div></>
}
