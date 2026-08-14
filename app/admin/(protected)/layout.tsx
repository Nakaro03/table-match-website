import Link from "next/link"
import { CalendarDays, ClipboardList, LayoutDashboard, LogOut, UserRoundSearch } from "lucide-react"
import { logoutAdmin } from "@/app/actions/admin"
import { requireAdmin } from "@/lib/admin"

const links = [
  { href: "/admin", label: "ダッシュボード", icon: LayoutDashboard },
  { href: "/admin/applications", label: "申込一覧", icon: ClipboardList },
  { href: "/admin/calendar", label: "開催・参加予定", icon: CalendarDays },
  { href: "/admin/internships", label: "インターン管理", icon: UserRoundSearch },
]

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin()
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 lg:grid lg:grid-cols-[250px_1fr]">
      <aside className="border-b-2 border-slate-950 bg-slate-950 p-5 text-white lg:min-h-screen lg:border-b-0 lg:border-r-2">
        <Link href="/admin" className="text-lg font-black tracking-tight">Table Match <span className="text-action-yellow">OPS</span></Link>
        <nav className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1">
          {links.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className="flex items-center gap-2 border border-white/15 px-3 py-2.5 text-sm font-bold hover:bg-white hover:text-slate-950"><Icon className="h-4 w-4" />{label}</Link>)}
        </nav>
        <div className="mt-7 border-t border-white/20 pt-5 text-xs text-white/70">
          <p className="font-bold text-white">{admin.displayName}</p><p className="mt-1">{admin.role} / {admin.region}</p>
          <form action={logoutAdmin}><button className="mt-4 flex items-center gap-2 hover:text-white"><LogOut className="h-4 w-4" />ログアウト</button></form>
        </div>
      </aside>
      <main className="min-w-0 p-4 sm:p-7 lg:p-10">{children}</main>
    </div>
  )
}
