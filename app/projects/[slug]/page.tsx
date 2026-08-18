import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CalendarDays, Clock, MapPin, Users } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PhotoCredit } from "@/components/photo-credit"
import { getOpportunity, opportunities, opportunityTypeLabel } from "@/lib/opportunities"

type Props = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return opportunities.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const item = getOpportunity((await params).slug); return { title: item?.title ?? "プロジェクト" } }

export default async function ProjectDetailPage({ params }: Props) {
  const opportunity = getOpportunity((await params).slug)
  if (!opportunity) notFound()
  const applyHref = opportunity.type === "company_participation" ? `/apply/company/${opportunity.slug}` : `/apply/${opportunity.slug}`
  return <main className="min-h-screen bg-paper"><Header /><section className="border-b-2 border-foreground pt-20"><div className="mx-auto grid max-w-7xl lg:grid-cols-2"><div className="px-5 py-14 sm:px-8 lg:py-24"><p className="font-mono text-xs font-black tracking-[0.2em] text-primary">{opportunityTypeLabel(opportunity.type)}</p><h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">{opportunity.title}</h1><p className="mt-6 max-w-xl text-lg leading-9 text-muted-foreground">{opportunity.summary}</p><Link href={applyHref} className="mt-9 inline-flex items-center gap-3 bg-action-orange px-7 py-4 font-black text-white hover:bg-foreground">{opportunity.type === "company_participation" ? "企業として相談する" : opportunity.status === "preview" ? "先行受付に申し込む" : "参加・応募する"}<ArrowRight className="h-5 w-5" /></Link></div><div className="relative min-h-[420px] border-t-2 border-foreground lg:border-l-2 lg:border-t-0"><Image src={opportunity.image} alt={opportunity.title} fill priority className="object-cover" /><PhotoCredit /></div></div></section><section className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[[CalendarDays,"日程",opportunity.date],[Clock,"時間",opportunity.time],[MapPin,"会場",opportunity.location],[Users,"対象・定員",`${opportunity.target} / ${opportunity.capacity}`]].map(([Icon,label,value]) => { const ItemIcon = Icon as typeof CalendarDays; return <div key={String(label)} className="border-2 border-foreground bg-white p-5"><ItemIcon className="h-5 w-5 text-primary" /><p className="mt-4 text-xs font-bold text-muted-foreground">{String(label)}</p><p className="mt-1 font-black">{String(value)}</p></div>})}</div><div className="mt-14 grid gap-8 lg:grid-cols-2"><div><p className="font-mono text-xs font-black tracking-widest text-primary">参加のメリット</p><h2 className="mt-3 text-3xl font-black">この企画で得られること</h2></div><ul className="space-y-3">{opportunity.benefits.map((benefit, index) => <li key={benefit} className="flex gap-4 border-b-2 border-foreground py-4 text-lg font-bold"><span className="font-mono text-primary">0{index + 1}</span>{benefit}</li>)}</ul></div></section><Footer /></main>
}
