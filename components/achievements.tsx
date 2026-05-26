"use client"

import { motion } from "framer-motion"
import { Award, TrendingUp, Tv, Star, ExternalLink } from "lucide-react"
import Link from "next/link"

const achievements = [
  {
    icon: Award,
    title: "インターン採用2名",
    description: "福岡開催にて、プランタンホテルグループへの長期インターンシップ生の採用が決定。うち1名は上場企業の選考を辞退して参画。",
  },
  {
    icon: Star,
    title: "企業満足度100%",
    description: "諏訪・福岡両開催において、参加企業様からの満足度評価で100%を達成。",
  },
  {
    icon: TrendingUp,
    title: "ROI 836%以上",
    description: "通常の採用単価（約93.6万円）と比較し、圧倒的なコストパフォーマンスを実現。",
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
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary mb-2">RESULTS</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            実績と成果
          </h2>
          <p className="text-muted-foreground">
            Table Matchが生み出した確かな結果
          </p>
        </motion.div>

        {/* TV Coverage Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link 
            href="http://vod.lcv.ne.jp/iPhone/detail?movid=10016857&pg=0&channelname=LCV"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-primary text-primary-foreground rounded-lg p-6 card-hover cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-foreground/10 rounded-lg">
                    <Tv className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">テレビ取材されました</h3>
                    <p className="text-primary-foreground/80 text-sm">
                      LCV（長野県諏訪地域）にて密着取材・ニュース放映
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="hidden sm:inline">動画を見る</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border card-hover"
            >
              <div className="p-2 bg-secondary rounded-md w-fit mb-4">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Participating Companies */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-4">参加企業様</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {companies.map((company, index) => (
              <motion.span
                key={company}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="px-3 py-1.5 bg-secondary border border-border rounded-md text-sm text-foreground"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
