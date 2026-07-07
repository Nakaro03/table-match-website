"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowUpRight, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"

const marqueeItems = [
  "株式会社くじら",
  "ちの技研",
  "平出精密",
  "プランタンホテルグループ",
  "諏訪三社電機",
  "馬車馬テクノロジーズ",
  "ハートアロー",
  "山万加島屋商店",
]

const stats = [
  { value: "100%", label: "企業満足度" },
  { value: "4回", label: "開催実績" },
  { value: "50+", label: "参加学生数" },
]

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pt-24 pb-0"
    >
      {/* Full-bleed background photo */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <Image
          src="/images/real/ceo-talk.jpg"
          alt="カフェのテーブルで学生と語り合う経営者"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Legibility overlays — kept light/airy to preserve the bright look */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/45 to-transparent" />
      </motion.div>

      {/* Live badge */}
      <div className="absolute right-4 top-28 z-10 sm:right-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          参加者募集中
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-background/80" />
            <span className="label-eyebrow text-xs text-background/90">
              学生 &times; 経営者 · 長野 &amp; 福岡
            </span>
          </motion.div>

          <h1 className="font-serif font-bold tracking-tight text-background text-[2.75rem] leading-[1.1] sm:text-6xl lg:text-[4.4rem] text-balance drop-shadow-sm">
            {["社長と、ホンネで", "ごはん", "しませんか。"].map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {i === 1 ? (
                  <span className="relative inline-block">
                    {line}
                    <span className="absolute left-0 -bottom-1 h-2 w-full bg-primary" />
                  </span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-7 max-w-md text-base sm:text-lg text-background/90 leading-relaxed text-pretty"
          >
            少人数のテーブルを囲んで、学生と経営者が本音で語り合う。
            大手ナビにはない出会いを、あたたかい食卓から。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-col sm:flex-row items-start gap-3"
          >
            <Link
              href="#events"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              次回イベントを見る
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/for-companies"
              className="group inline-flex items-center gap-2 rounded-full border border-background/40 bg-background/10 px-6 py-3.5 text-sm font-medium text-background backdrop-blur transition-colors hover:bg-background/20"
            >
              企業様はこちら
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Next event caption */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 inline-flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border border-primary/50 bg-primary/25 px-5 py-3 text-sm text-background backdrop-blur"
          >
            <span className="label-eyebrow rounded-full bg-primary px-2 py-0.5 text-[0.6rem] text-primary-foreground">Next Event</span>
            <span className="font-serif font-bold text-background">第5回 Table Match 長野</span>
            <span className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5" />
              2026.07.17 (金)
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              Kiitos（茅野市）
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex items-center gap-8 border-t border-background/20 pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-background">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs text-background/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Company marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 border-t border-background/20 bg-background/10 py-4 backdrop-blur marquee-mask"
      >
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-6 inline-flex items-center gap-6 text-sm font-medium text-background/90"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-background/50" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
