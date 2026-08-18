import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ProjectCard } from "@/components/projects/project-card"
import { opportunities } from "@/lib/opportunities"

export const metadata: Metadata = { title: "プロジェクト・募集情報", description: "Table Matchのイベント、インターン、会社見学、企業参加の募集情報です。" }

export default function ProjectsPage() {
  return <main className="min-h-screen bg-paper"><Header /><section className="border-b-2 border-foreground px-5 pb-14 pt-32 sm:pt-40"><div className="mx-auto max-w-7xl"><p className="font-mono text-sm font-black tracking-[0.2em] text-primary">企画</p><h1 className="mt-4 max-w-4xl text-5xl font-black leading-[1.08] sm:text-7xl">会って、話して、<br />次の一歩を見つける。</h1><p className="mt-6 max-w-2xl leading-8 text-muted-foreground">イベント参加、インターン、会社見学、企業の出展・協賛。目的に合う入口から申し込めます。</p></div></section><section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 sm:px-8 sm:py-20">{opportunities.map((opportunity) => <ProjectCard key={opportunity.id} opportunity={opportunity} />)}</section><Footer /></main>
}
