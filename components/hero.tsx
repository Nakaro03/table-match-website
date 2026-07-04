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
  const yMain = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const yFloat = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-10 paper-grain"
    >
      {/* soft warm glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
          {/* Left — editorial copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-10 bg-primary" />
              <span className="label-eyebrow text-xs text-primary">
                学生 &times; 経営者 · 長野 &amp; 福岡
              </span>
            </motion.div>

            <h1 className="font-serif font-bold tracking-tight text-foreground text-[2.75rem] leading-[1.08] sm:text-6xl lg:text-[4.6rem] text-balance">
              {["社長と、ホンネで", "ごはん", "しませんか。"].map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {i === 1 ? (
                    <span className="relative inline-block text-primary">
                      {line}
                      <span className="absolute left-0 -bottom-1 h-2 w-full bg-primary/20" />
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
              className="mt-7 max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty"
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
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-primary"
              >
                次回イベントを見る
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/for-companies"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground hover:bg-foreground/5"
              >
                企業様はこちら
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-10 flex items-center gap-8 border-t border-border pt-6"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <motion.div
              style={{ y: yMain }}
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-foreground/10"
            >
              <Image
                src="/images/real/ceo-talk.jpg"
                alt="カフェのテーブルで学生と語り合う経営者"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute left-5 top-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  参加者募集中
                </span>
              </div>
            </motion.div>

            {/* Floating onigiri photo */}
            <motion.div
              style={{ y: yFloat }}
              className="absolute -bottom-8 -left-6 w-36 sm:w-44 animate-floaty"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-background shadow-xl">
                <Image
                  src="/images/real/student-onigiri.jpg"
                  alt="イベントで振る舞われる食事を持つ学生"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Next event caption card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -right-4 bottom-10 w-52 rounded-2xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur"
            >
              <p className="label-eyebrow text-[0.6rem] text-primary">Next Event</p>
              <p className="mt-1.5 font-serif text-base font-bold text-foreground leading-snug">
                第5回 Table Match 長野
              </p>
              <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  2026.07.17 (金)
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  Kiitos（茅野市）
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Company marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 mt-16 lg:mt-20 border-y border-border py-4 marquee-mask"
      >
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-6 inline-flex items-center gap-6 text-sm font-medium text-muted-foreground"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-primary/50" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
