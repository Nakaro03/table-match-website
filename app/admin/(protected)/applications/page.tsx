import { ApplicationTable } from "@/components/admin/application-table"
import { requireAdmin } from "@/lib/admin"
import { kindLabels, statusOptions } from "@/lib/admin-labels"
import { listApplications } from "@/lib/admin-data"

export const dynamic = "force-dynamic"

export default async function ApplicationsPage({ searchParams }: { searchParams: Promise<{ status?: string; kind?: string; q?: string }> }) {
  const filters = await searchParams
  const admin = await requireAdmin()
  const rows = await listApplications(admin, { status: filters.status, kind: filters.kind, query: filters.q })
  return <>
    <p className="font-mono text-xs font-bold tracking-[0.18em] text-primary">APPLICATIONS</p><h1 className="mt-2 text-3xl font-black">申込一覧</h1>
    <form className="my-7 grid gap-3 border-2 border-slate-950 bg-white p-4 sm:grid-cols-[1fr_180px_180px_auto]">
      <input name="q" defaultValue={filters.q} placeholder="氏名・会社名・受付番号で検索" className="border border-slate-400 px-3 py-2" />
      <select name="kind" defaultValue={filters.kind} className="border border-slate-400 px-3 py-2"><option value="">すべての種別</option>{Object.entries(kindLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
      <select name="status" defaultValue={filters.status} className="border border-slate-400 px-3 py-2"><option value="">すべての状態</option>{statusOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
      <button className="bg-slate-950 px-5 py-2 font-bold text-white">絞り込む</button>
    </form>
    <p className="mb-3 text-sm font-bold">{rows.length}件</p><ApplicationTable rows={rows} />
  </>
}
