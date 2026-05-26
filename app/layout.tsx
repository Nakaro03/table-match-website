import type { Metadata } from 'next'
import { Geist, Geist_Mono, Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist"
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp"
});

export const metadata: Metadata = {
  title: 'Table Match | 学生と企業をつなぐ採用イベント',
  description: '学生団体Table Matchは、長野・福岡で学生と経営者が本音で語り合えるカジュアルな採用マッチングイベントを運営しています。',
  keywords: ['学生団体', '採用イベント', 'インターン', '就活', '長野', '福岡', 'Table Match'],
  openGraph: {
    title: 'Table Match | 学生と企業をつなぐ採用イベント',
    description: '学生と経営者が本音で語り合えるカジュアルな採用マッチングイベント',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${geist.variable} ${geistMono.variable} ${notoSansJP.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
