import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Noto_Sans_JP, Shippori_Mincho, M_PLUS_Rounded_1c, Zen_Kaku_Gothic_New } from 'next/font/google'
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

// Modern gothic display face used for headings
const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-zen"
});

const SITE_URL = 'https://tablematch-student.com'
const SITE_NAME = 'Table Match'
const SITE_TITLE = 'Table Match | 学生と企業をつなぐ採用イベント'
const SITE_DESCRIPTION =
  '学生団体Table Matchは、長野・福岡で学生と経営者が本音で語り合えるカジュアルな採用マッチングイベントを運営しています。'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Table Match',
  },
  description: SITE_DESCRIPTION,
  keywords: ['学生団体', '採用イベント', 'インターン', '就活', '長野', '福岡', 'Table Match'],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/event-5.jpg',
        width: 1200,
        height: 630,
        alt: 'Table Match',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/event-5.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
  verification: {
    google: 'nS6vGL4uT1-fjcdVKFeoMMxKiPRyVw_V00__VDBSTNo',
  },
}

// 構造化データ（JSON-LD）: Organization
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  alternateName: '学生団体 Table Match',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpg`,
  description: SITE_DESCRIPTION,
  areaServed: ['長野県', '福岡県'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${spaceGrotesk.variable} ${notoSansJP.variable} ${shipporiMincho.variable} ${mPlusRounded.variable} ${zenKaku.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
