import type { MetadataRoute } from 'next'

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
  ]
}
