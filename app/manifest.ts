import type { MetadataRoute } from 'next'

// PWAの基本設定。app/manifest.ts があると Next.js が
// /manifest.webmanifest を自動生成し、<link rel="manifest"> を挿入します。
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Table Match | 学生と企業をつなぐ採用イベント',
    short_name: 'Table Match',
    description: '学生と経営者が本音で語り合うカジュアルな採用マッチングイベント',
    start_url: '/',
    display: 'standalone',
    lang: 'ja',
    background_color: '#ffffff',
    theme_color: '#2e6ebd',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/logo.jpg', sizes: '1024x1024', type: 'image/jpeg' },
    ],
  }
}
