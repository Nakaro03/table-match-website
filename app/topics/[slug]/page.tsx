import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArticleShell } from "@/components/editorial/article-shell"
import { topics } from "@/lib/site-content"

type Props = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return topics.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const item = topics.find((topic) => topic.slug === slug); return { title: item?.title ?? "TOPICS" } }
export default async function TopicDetailPage({ params }: Props) { const { slug } = await params; const topic = topics.find((item) => item.slug === slug); if (!topic) notFound(); return <ArticleShell type={topic.category} date={topic.date} title={topic.title} lead={topic.lead} image={topic.image} paragraphs={topic.paragraphs} backHref="/topics" /> }
