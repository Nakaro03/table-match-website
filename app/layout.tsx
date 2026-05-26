import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Noto_Sans_JP, Shippori_Mincho, M_PLUS_Rounded_1c } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp"
});

// Display fonts used by the /preview design directions
const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-shippori"
});

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-rounded"
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
    <html lang="ja" className={`${inter.variable} ${spaceGrotesk.variable} ${notoSansJP.variable} ${shipporiMincho.variable} ${mPlusRounded.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
