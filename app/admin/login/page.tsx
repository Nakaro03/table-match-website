import Link from "next/link"
import { redirect } from "next/navigation"
import { LockKeyhole } from "lucide-react"
import { loginAdmin } from "@/app/actions/admin"
import { getAdminContext } from "@/lib/admin"
import { hasPublicSupabaseConfig, hasServiceSupabaseConfig } from "@/lib/supabase/config"

export const dynamic = "force-dynamic"

const errors: Record<string, string> = {
  setup: "管理画面の接続設定が完了していません。",
  input: "メールアドレスと8文字以上のパスワードを入力してください。",
  credentials: "メールアドレスまたはパスワードが正しくありません。",
}

export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if (await getAdminContext()) redirect("/admin")
  const { error } = await searchParams
  const ready = hasPublicSupabaseConfig() && hasServiceSupabaseConfig()

  return (
    <main className="grid min-h-screen place-items-center bg-paper px-4 py-16">
      <section className="w-full max-w-md border-2 border-foreground bg-white p-7 shadow-[8px_8px_0_#ffd51f] sm:p-10">
        <Link href="/" className="font-mono text-xs font-bold tracking-[0.22em] text-primary">TABLE MATCH</Link>
        <div className="mt-8 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center bg-foreground text-white"><LockKeyhole className="h-5 w-5" /></span>
          <div><p className="text-xs font-bold tracking-widest text-muted-foreground">OPERATIONS</p><h1 className="text-2xl font-black">運営管理画面</h1></div>
        </div>
        <p className="mt-5 text-sm leading-7 text-muted-foreground">申込者・参加企画・対応状況を、許可された運営メンバーだけが確認できます。</p>
        {!ready && <p className="mt-5 border border-action-orange bg-orange-50 p-3 text-sm font-bold text-action-orange">Supabase環境変数の設定後にログインできます。</p>}
        {error && <p role="alert" className="mt-5 border border-red-300 bg-red-50 p-3 text-sm text-red-700">{errors[error] ?? "ログインできませんでした。"}</p>}
        <form action={loginAdmin} className="mt-7 space-y-5">
          <label className="block text-sm font-bold">メールアドレス<input name="email" type="email" autoComplete="email" required disabled={!ready} className="mt-2 w-full border-2 border-foreground bg-white px-4 py-3 font-normal outline-none focus:ring-4 focus:ring-primary/20" /></label>
          <label className="block text-sm font-bold">パスワード<input name="password" type="password" autoComplete="current-password" minLength={8} required disabled={!ready} className="mt-2 w-full border-2 border-foreground bg-white px-4 py-3 font-normal outline-none focus:ring-4 focus:ring-primary/20" /></label>
          <button disabled={!ready} className="w-full bg-foreground px-5 py-3.5 font-bold text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-40">ログイン</button>
        </form>
        <p className="mt-7 text-xs leading-6 text-muted-foreground">アカウントは代表管理者が発行します。共有アカウントは使用しないでください。</p>
      </section>
    </main>
  )
}
