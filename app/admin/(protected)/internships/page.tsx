import Link from "next/link"
import { requireAdmin } from "@/lib/admin"
import { listApplications } from "@/lib/admin-data"
import { statusLabels } from "@/lib/admin-labels"

export const dynamic = "force-dynamic"

const columns = [["submitted", "reviewing"], ["contacted"], ["confirmed"], ["completed", "cancelled", "withdrawn"]]
const columnLabels = ["応募・確認中", "面談・連絡", "参加確定", "完了・終了"]

export default async function InternshipsPage() {
  const admin = await requireAdmin()
  const rows = (await listApplications(admin, { kind: "internship" }))
  return <><p className="font-mono text-xs font-bold tracking-widest text-primary">INTERNSHIP PIPELINE</p><h1 className="mt-2 text-3xl font-black">インターン管理</h1><p className="mt-2 text-sm text-slate-500">応募から参加確定までの進行状況を並べて確認できます。</p><div className="mt-7 grid gap-4 xl:grid-cols-4">{columns.map((statuses, index) => { const items = rows.filter((row) => statuses.includes(row.status)); return <section key={columnLabels[index]} className="border-2 border-slate-950 bg-slate-100"><h2 className="flex justify-between bg-slate-950 px-4 py-3 font-bold text-white"><span>{columnLabels[index]}</span><span>{items.length}</span></h2><div className="space-y-3 p-3">{items.map((row) => <Link key={row.id} href={`/admin/applications/${row.id}`} className="block border border-slate-300 bg-white p-4 hover:border-primary"><p className="font-bold">{row.people?.name ?? "—"}</p><p className="mt-1 text-xs text-slate-500">{row.people?.email}</p><p className="mt-3 text-xs font-bold text-primary">{statusLabels[row.status]}</p></Link>)}{!items.length && <p className="py-6 text-center text-xs text-slate-400">該当なし</p>}</div></section>})}</div></>
}
