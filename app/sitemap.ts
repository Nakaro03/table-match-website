import type { MetadataRoute } from 'next'
import { opportunities } from '@/lib/opportunities'
import { newsItems, topics } from '@/lib/site-content'

const SITE_URL = 'https://tablematch-student.com'

// サイト内の公開ページを列挙します。
// /preview は本番サイトからリンクされていない設計検証用ページのため除外しています。
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/for-companies`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/topics`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/news`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/team`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/photographer`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    ...opportunities.map((opportunity) => ({ url: `${SITE_URL}/projects/${opportunity.slug}`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 })),
    ...topics.map((topic) => ({ url: `${SITE_URL}/topics/${topic.slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...newsItems.map((news) => ({ url: `${SITE_URL}/news/${news.slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ]
}
