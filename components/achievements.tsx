"use client"

import { motion } from "framer-motion"
import { Award, TrendingUp, Tv, Star } from "lucide-react"

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
  {
    icon: Tv,
    title: "テレビ取材実績",
    description: "長野県諏訪地域での開催時に、地元テレビ局（LCV）による密着取材・ニュース放映。",
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
    <section id="achievements" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            実績と成果
          </h2>
          <p className="text-lg text-muted-foreground">
            Table Matchが生み出した確かな結果
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Participating Companies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">参加企業様</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((company, index) => (
              <motion.span
                key={company}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground"
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
