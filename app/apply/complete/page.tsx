import Link from "next/link"
import { CheckCircle2, CalendarPlus, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default async function CompletePage({ searchParams }: { searchParams: Promise<{ code?: string; type?: string }> }) {
  const { code, type } = await searchParams

  return (
    <main className="min-h-screen bg-paper">
      <Header />
      <section className="mx-auto flex min-h-[78vh] max-w-4xl items-center px-5 py-28 sm:px-8">
        <div className="w-full border-2 border-foreground bg-background p-7 shadow-[14px_14px_0_#2E6EBD] sm:p-12">
          <CheckCircle2 className="h-16 w-16 text-primary" />
          <p className="mt-8 font-mono text-sm font-bold tracking-widest text-action-orange">お申し込み完了</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">お申し込みを受け付けました。</h1>
          <p className="mt-5 leading-8 text-muted-foreground">{type === "company" ? "運営担当者より、内容確認と日程調整のご連絡を差し上げます。" : "受付内容を確認後、参加可否と当日のご案内をメールでお送りします。"}</p>
          {code && <div className="mt-8 border-y-2 border-foreground py-5"><span className="text-xs text-muted-foreground">受付番号</span><p className="mt-1 font-mono text-xl font-bold">{code}</p></div>}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="inline-flex items-center justify-center gap-2 bg-action-orange px-6 py-3 font-bold text-white">企画を見る<ArrowRight className="h-4 w-4" /></Link>
            <Link href="/" className="inline-flex items-center justify-center gap-2 border-2 border-foreground px-6 py-3 font-bold"><CalendarPlus className="h-4 w-4" />トップへ戻る</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
