import Link from "next/link"
import { ArrowRight, Building2, CalendarCheck, Users } from "lucide-react"
import { requireAdmin } from "@/lib/admin"
import { listApplications } from "@/lib/admin-data"
import { ApplicationTable } from "@/components/admin/application-table"

export const dynamic = "force-dynamic"

export default async function AdminDashboardPage() {
  const admin = await requireAdmin()
  const rows = await listApplications(admin)
  const cards = [
    { label: "全申込", value: rows.length, icon: Users },
    { label: "新規・確認中", value: rows.filter((row) => ["submitted", "reviewing"].includes(row.status)).length, icon: CalendarCheck },
    { label: "参加確定", value: rows.filter((row) => row.status === "confirmed").length, icon: CalendarCheck },
    { label: "企業申込", value: rows.filter((row) => row.applicant_type === "company").length, icon: Building2 },
  ]
  return <>
    <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-xs font-bold tracking-[0.18em] text-primary">DASHBOARD</p><h1 className="mt-2 text-3xl font-black">申込状況</h1><p className="mt-2 text-sm text-slate-500">{admin.displayName}さんの閲覧範囲で集計しています。</p></div><Link href="/admin/applications" className="flex items-center gap-2 bg-slate-950 px-4 py-3 text-sm font-bold text-white">すべて見る<ArrowRight className="h-4 w-4" /></Link></div>
    <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{cards.map(({ label, value, icon: Icon }, i) => <div key={label} className={`border-2 border-slate-950 p-5 ${i === 1 ? "bg-action-yellow" : "bg-white"}`}><Icon className="h-5 w-5" /><p className="mt-5 text-4xl font-black">{value}</p><p className="mt-1 text-sm font-bold">{label}</p></div>)}</div>
    <h2 className="mb-4 mt-10 text-xl font-black">最近の申込</h2><ApplicationTable rows={rows.slice(0, 10)} />
  </>
}
