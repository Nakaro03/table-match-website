import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight, Camera, Instagram, Mail, MapPin } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PeopleNav } from "@/components/people-nav"

const INSTAGRAM_URL = "https://www.instagram.com/pantheon.works/?hl=ja"

export const metadata: Metadata = {
  title: "撮影者 pantheon.works",
  description: "Table Matchの写真を撮影するpantheon.works（茂-Goodfellow）をご紹介します。",
}

export default function PhotographerPage() {
  return (
    <main className="min-h-screen bg-paper pt-20">
      <Header />
      <PeopleNav active="photographer" />
      <section className="border-b-2 border-foreground bg-foreground text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[.92fr_1.08fr]">
          <div className="relative min-h-[430px] overflow-hidden border-b-2 border-white/30 bg-white lg:min-h-[660px] lg:border-b-0 lg:border-r-2">
            <Image
              src="/images/photographer/pantheon-works.jpg"
              alt="pantheon.works 茂-Goodfellow"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 sm:px-10 sm:py-20">
            <p className="font-mono text-xs font-black tracking-[.22em] text-action-yellow">PHOTOGRAPHER / CREATIVE DIRECTOR</p>
            <h1 className="mt-5 text-5xl font-black leading-none sm:text-7xl">茂-Goodfellow</h1>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 self-start border-b-2 border-action-yellow pb-1 font-mono text-lg font-black text-action-yellow">
              <Instagram className="h-5 w-5" />@pantheon.works
            </a>
            <p className="mt-8 text-2xl font-black">アーティスト</p>
            <p className="mt-2 font-mono text-lg font-bold text-white/75">Creative director / photographer</p>
            <p className="mt-7 flex items-center gap-3 font-bold"><MapPin className="h-5 w-5 text-action-yellow" />Fukuoka • Nagasaki</p>
            <div className="mt-10 border-l-4 border-action-yellow pl-5">
              <p className="text-xl font-black">お仕事の依頼はDMへ</p>
              <p className="mt-1 font-mono text-sm text-white/65">You can contact DM or E-mail</p>
            </div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="poster-button mt-9 max-w-sm bg-action-orange text-white">
              Instagramから連絡する<ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs font-black tracking-[.2em] text-primary">VISUAL PARTNER</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">会場の温度を、<br />写真に残す。</h2>
          </div>
          <div className="grid border-2 border-foreground bg-white sm:grid-cols-2">
            <div className="border-b-2 border-foreground p-7 sm:border-b-0 sm:border-r-2">
              <Camera className="h-9 w-9 text-primary" />
              <h3 className="mt-6 text-2xl font-black">撮影・クリエイティブ</h3>
              <p className="mt-4 text-sm leading-8 text-muted-foreground">学生と企業が自然に笑い、話す瞬間を記録。Table Matchの空気感を写真と映像で伝えます。</p>
            </div>
            <div className="p-7">
              <Mail className="h-9 w-9 text-primary" />
              <h3 className="mt-6 text-2xl font-black">ご依頼・お問い合わせ</h3>
              <p className="mt-4 text-sm leading-8 text-muted-foreground">撮影やクリエイティブ制作のご相談は、pantheon.worksのInstagram DMまたは公開メール窓口からお問い合わせください。</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
