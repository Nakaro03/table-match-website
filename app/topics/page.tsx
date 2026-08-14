import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { topics } from "@/lib/site-content"

export const metadata: Metadata = { title: "TOPICS", description: "会社見学、インターン体験、学生・経営者の声、メディア取材を紹介します。" }
export default function TopicsPage() { return <main className="min-h-screen bg-paper"><Header /><header className="border-b-2 border-foreground bg-primary px-5 pb-14 pt-32 text-white sm:px-8 sm:pb-20 sm:pt-40"><div className="mx-auto max-w-7xl"><p className="font-mono text-xs font-black tracking-[.22em] text-action-yellow">STORIES / REPORTS / VOICES</p><h1 className="mt-4 text-6xl font-black sm:text-8xl">TOPICS</h1><p className="mt-5 max-w-2xl font-bold leading-8">会社見学、インターン体験、学生と経営者の声。出会いの前後まで深く紹介します。</p></div></header><section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2">{topics.map((topic, index) => <Link key={topic.slug} href={`/topics/${topic.slug}`} className="group grid border-2 border-foreground bg-white sm:grid-cols-[45%_55%]"><div className="relative min-h-64 overflow-hidden border-b-2 border-foreground sm:border-b-0 sm:border-r-2"><Image src={topic.image} alt="" fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-0 top-0 bg-action-orange px-3 py-2 font-mono text-xs font-black text-white">0{index + 1}</span></div><div className="flex flex-col p-5"><div className="font-mono text-xs font-black text-primary">{topic.category} / {topic.date}</div><h2 className="mt-4 text-2xl font-black leading-snug">{topic.title}</h2><p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{topic.excerpt}</p><span className="mt-5 inline-flex items-center gap-2 font-black">読む<ArrowRight className="h-4 w-4" /></span></div></Link>)}</section><Footer /></main> }
