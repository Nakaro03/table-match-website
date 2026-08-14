import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, MapPin } from "lucide-react"
import { opportunityTypeLabel, type Opportunity } from "@/lib/opportunities"
import { PhotoCredit } from "@/components/photo-credit"

export function ProjectCard({ opportunity }: { opportunity: Opportunity }) {
  return <article className="group grid border-2 border-foreground bg-white sm:grid-cols-[220px_1fr]">
    <div className="relative min-h-52 overflow-hidden border-b-2 border-foreground sm:border-b-0 sm:border-r-2"><Image src={opportunity.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" /><PhotoCredit /></div>
    <div className="flex flex-col p-6"><div className="flex items-center justify-between gap-4"><p className="font-mono text-xs font-black tracking-widest text-primary">{opportunityTypeLabel(opportunity.type)}</p><span className={`px-2 py-1 text-xs font-bold ${opportunity.status === "open" ? "bg-action-yellow" : "bg-slate-200"}`}>{opportunity.status === "open" ? "募集中" : opportunity.status === "preview" ? "先行案内" : "受付終了"}</span></div><h2 className="mt-4 text-2xl font-black leading-tight">{opportunity.title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{opportunity.summary}</p><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold"><span className="flex items-center gap-1"><CalendarDays className="h-4 w-4 text-primary" />{opportunity.date}</span><span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-primary" />{opportunity.location}</span></div><Link href={`/projects/${opportunity.slug}`} className="mt-6 inline-flex items-center gap-2 self-start border-b-2 border-foreground pb-1 text-sm font-black">詳しく見る<ArrowRight className="h-4 w-4" /></Link></div>
  </article>
}
