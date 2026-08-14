import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArticleShell } from "@/components/editorial/article-shell"
import { newsItems } from "@/lib/site-content"

type Props = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return newsItems.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const item = newsItems.find((news) => news.slug === slug); return { title: item?.title ?? "NEWS" } }
export default async function NewsDetailPage({ params }: Props) { const { slug } = await params; const item = newsItems.find((news) => news.slug === slug); if (!item) notFound(); return <ArticleShell type={item.category} date={item.date} title={item.title} lead={item.summary} paragraphs={item.body} backHref="/news" relatedHref={item.relatedHref} /> }
