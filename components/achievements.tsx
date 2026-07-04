"use client"

import { motion } from "framer-motion"
import { Tv, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const achievements = [
  {
    no: "01",
    title: "インターン採用 2名",
    description:
      "福岡開催にて、プランタンホテルグループへの長期インターンシップ生の採用が決定。うち1名は上場企業の選考を辞退して参画。",
  },
  {
    no: "02",
    title: "企業満足度 100%",
    description: "諏訪・福岡両開催において、参加企業様からの満足度評価で100%を達成。",
  },
]

const companies = [
  "株式会社ちの技研",
  "株式会社平出精密",
  "有限会社山万加島屋商店",
  "プランタンホテルグループ",
  "株式会社ハートアロー",
  "インダストリーネットワーク株式会社",
  "株式会社諏訪三社電機",
  "合同会社馬車馬テクノロジーズ",
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 bg-secondary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-primary" />
            <span className="label-eyebrow text-xs text-primary">Results</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            確かな成果が、生まれています。
          </h2>
        </motion.div>

        {/* TV coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            href="http://vod.lcv.ne.jp/iPhone/detail?movid=10016857&pg=0&channelname=LCV"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl bg-foreground p-6 sm:p-8 text-background transition-colors hover:bg-primary"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background/10">
                  <Tv className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">テレビ取材されました</h3>
                  <p className="text-sm text-background/70">
                    LCV（長野県諏訪地域）にて密着取材・ニュース放映
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="hidden sm:inline">動画を見る</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Achievement cards */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.no}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-card p-7 card-hover"
            >
              <span className="font-mono text-sm text-primary/70">{item.no}</span>
              <h3 className="mt-2 font-serif text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Company marquee */}
      <div className="border-y border-border py-5 marquee-mask">
        <div className="flex w-max animate-marquee">
          {[...companies, ...companies].map((company, i) => (
            <span
              key={i}
              className="mx-5 inline-flex items-center gap-5 font-serif text-lg text-foreground/70"
            >
              {company}
              <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            </span>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">参加企業様</p>
    </section>
  )
}
