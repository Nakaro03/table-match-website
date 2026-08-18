import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { newsItems } from "@/lib/site-content"

export const metadata: Metadata = { title: "お知らせ", description: "Table Matchのイベント開催、募集、メディア掲載などの公式情報です。" }
export default function NewsPage() { return <main className="min-h-screen bg-white"><Header /><header className="border-b-2 border-foreground bg-action-orange px-5 pb-14 pt-32 text-white sm:px-8 sm:pb-20 sm:pt-40"><div className="mx-auto max-w-7xl"><p className="font-mono text-xs font-black tracking-[.22em] text-action-yellow">公式ニュース</p><h1 className="mt-4 text-6xl font-black sm:text-8xl">お知らせ</h1><p className="mt-5 max-w-2xl font-bold leading-8">イベント開催、募集開始、メディア掲載などの公式情報を時系列でお知らせします。</p></div></header><section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20"><div className="border-t-2 border-foreground">{newsItems.map((item, index) => <Link key={item.slug} href={`/news/${item.slug}`} className="group grid gap-3 border-b-2 border-foreground py-7 hover:bg-action-yellow/15 sm:grid-cols-[70px_130px_110px_1fr_auto] sm:items-start sm:px-4"><span className="font-mono text-xl font-black text-primary">0{index + 1}</span><time className="font-mono text-sm font-bold">{item.date}</time><span className="font-mono text-xs font-black text-primary">{item.category}</span><div><h2 className="text-xl font-black">{item.title}</h2><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.summary}</p></div><ArrowRight className="transition group-hover:translate-x-2" /></Link>)}</div></section><Footer /></main> }
