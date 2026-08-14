import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import { CalendarDays, MapPin, Tag } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PhotoCredit } from "@/components/photo-credit"
import { StudentApplicationForm } from "@/components/applications/student-application-form"
import { getOpportunity, opportunityTypeLabel } from "@/lib/opportunities"
import { hasServiceSupabaseConfig } from "@/lib/supabase/config"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const opportunity = getOpportunity(slug)
  return { title: opportunity ? `${opportunity.title} 参加申込` : "参加申込" }
}

export default async function StudentApplyPage({ params }: Props) {
  const { slug } = await params
  const opportunity = getOpportunity(slug)
  if (!opportunity || opportunity.type === "company_participation") notFound()

  return (
    <main className="min-h-screen bg-paper">
      <Header />
      <section className="border-b-2 border-foreground pt-24">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.15fr_0.85fr]">
          <div className="px-5 py-12 sm:px-8 lg:py-20">
            <p className="font-mono text-sm font-bold tracking-[0.16em] text-primary">{opportunityTypeLabel(opportunity.type)} / 参加申込</p>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-6xl">{opportunity.title}</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">{opportunity.summary}</p>
            <dl className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
              <div className="flex gap-2"><CalendarDays className="h-5 w-5 text-primary" /><div><dt className="text-xs text-muted-foreground">日程</dt><dd className="font-bold">{opportunity.date}</dd></div></div>
              <div className="flex gap-2"><MapPin className="h-5 w-5 text-primary" /><div><dt className="text-xs text-muted-foreground">場所</dt><dd className="font-bold">{opportunity.location}</dd></div></div>
              <div className="flex gap-2"><Tag className="h-5 w-5 text-primary" /><div><dt className="text-xs text-muted-foreground">対象</dt><dd className="font-bold">{opportunity.target}</dd></div></div>
            </dl>
          </div>
          <div className="relative min-h-80 border-t-2 border-foreground lg:border-l-2 lg:border-t-0">
            <Image src={opportunity.image} alt={opportunity.title} fill priority className="object-cover" />
            <div className="absolute right-5 top-5 rounded-full bg-action-orange px-5 py-8 font-mono text-xl font-black text-white [transform:rotate(7deg)]">APPLY<br />NOW</div>
            <PhotoCredit />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <StudentApplicationForm opportunity={opportunity} configured={hasServiceSupabaseConfig()} />
      </section>
      <Footer />
    </main>
  )
}
