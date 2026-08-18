import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PhotoCredit } from "@/components/photo-credit"

export function ArticleShell({ type, date, title, lead, image, imagePosition, paragraphs, backHref, relatedHref }: { type: string; date: string; title: string; lead: string; image?: string; imagePosition?: string; paragraphs: string[]; backHref: string; relatedHref?: string }) {
  return <main className="min-h-screen bg-paper"><Header /><article className="pt-20"><header className="border-b-2 border-foreground bg-action-yellow px-5 py-14 sm:px-8 sm:py-20"><div className="mx-auto max-w-5xl"><Link href={backHref} className="inline-flex items-center gap-2 text-sm font-black"><ArrowLeft className="h-4 w-4" />一覧へ戻る</Link><div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs font-black"><span className="bg-primary px-3 py-2 text-white">{type}</span><time>{date}</time></div><h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">{title}</h1><p className="mt-6 max-w-3xl text-lg font-bold leading-9">{lead}</p></div></header>{image && <div className="relative mx-auto aspect-[16/8] max-w-7xl border-x-2 border-b-2 border-foreground"><Image src={image} alt="" fill priority sizes="100vw" style={{ objectPosition: imagePosition }} className="object-cover" /><PhotoCredit /></div>}<div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">{paragraphs.map((paragraph, index) => <p key={index} className="mb-7 text-base leading-9 sm:text-lg">{paragraph}</p>)}{relatedHref && <Link href={relatedHref} className="poster-button mt-6 bg-action-orange text-white">関連するPROJECTを見る<ArrowRight /></Link>}</div></article><Footer /></main>
}
