"use client"

import { motion } from "framer-motion"
import { Check, TrendingDown, Users, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const benefits = [
  "少人数制で学生と深い対話が可能",
  "入社後のミスマッチを事前に防止",
  "参加学生全員の連絡先を取得",
  "採用単価を大幅に削減（ROI 836%以上）",
  "地元テレビ取材などPR効果も期待",
  "学生の生の声をマーケティングに活用",
]

const comparison = [
  { item: "採用単価", traditional: "約93.6万円", tableMatch: "7〜10万円" },
  { item: "学生との接触時間", traditional: "15〜30分", tableMatch: "3〜5時間" },
  { item: "本音の対話", traditional: "難しい", tableMatch: "食事を囲んで自然に" },
  { item: "ミスマッチ防止", traditional: "限定的", tableMatch: "双方向の深い理解" },
]

export function ForCompanies() {
  return (
    <section id="for-companies" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            企業様向けご案内
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            従来の採用媒体では実現できない、「本音」で繋がる採用体験を提供します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">参加のメリット</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary rounded-2xl p-8 text-primary-foreground"
          >
            <h3 className="text-2xl font-semibold mb-6">出展費用</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold">7〜10万円</span>
              <span className="text-primary-foreground/70 ml-2">（税込）/ 1回</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4" />
                学生との3〜5時間の交流
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4" />
                参加学生全員の連絡先取得
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4" />
                会場費・食事代込み
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4" />
                アンケートデータ提供
              </li>
            </ul>
            <Button variant="secondary" size="lg" asChild className="w-full group">
              <Link href="#contact">
                お問い合わせ
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            従来の採用方法との比較
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl border border-border overflow-hidden">
              <thead>
                <tr className="bg-muted">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground"></th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">従来の採用媒体</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-accent">Table Match</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={row.item} className={index !== comparison.length - 1 ? "border-b border-border" : ""}>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{row.item}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{row.traditional}</td>
                    <td className="px-6 py-4 text-sm text-foreground font-medium">{row.tableMatch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
