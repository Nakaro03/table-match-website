import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CompanyApplicationForm } from "@/components/applications/company-application-form"
import { getOpportunity } from "@/lib/opportunities"
import { hasServiceSupabaseConfig } from "@/lib/supabase/config"

type Props = { params: Promise<{ slug: string }> }

export const metadata: Metadata = { title: "企業出展・協賛相談" }

export default async function CompanyApplyPage({ params }: Props) {
  const { slug } = await params
  const opportunity = getOpportunity(slug)
  if (!opportunity || opportunity.type !== "company_participation") notFound()

  return (
    <main className="min-h-screen bg-paper">
      <Header />
      <section className="border-b-2 border-foreground bg-primary pt-24 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="font-mono text-sm font-bold tracking-[0.16em] text-action-yellow">FOR COMPANIES / 企業申込</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">求人票では伝わらない会社の魅力を、3時間の対話で。</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80">イベント出展、インターン募集、会社見学、協賛・地域連携についてご相談ください。</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <CompanyApplicationForm opportunity={opportunity} configured={hasServiceSupabaseConfig()} />
      </section>
      <Footer />
    </main>
  )
}
