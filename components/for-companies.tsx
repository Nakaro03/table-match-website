"use client"

import { motion } from "framer-motion"
import { Check, Users, ArrowRight, Building2, Sparkles } from "lucide-react"
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
  { item: "採用単価", traditional: "約93.6万円", tableMatch: "10万円〜" },
  { item: "学生との接触時間", traditional: "15〜30分", tableMatch: "3〜5時間" },
  { item: "本音の対話", traditional: "難しい", tableMatch: "食事を囲んで自然に" },
  { item: "ミスマッチ防止", traditional: "限定的", tableMatch: "双方向の深い理解" },
]

export function ForCompanies() {
  return (
    <section id="for-companies" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Building2 className="w-4 h-4" />
            For Companies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
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
            className="bg-card rounded-3xl p-8 border border-border shadow-lg"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">参加のメリット</h3>
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 shrink-0">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
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
            className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-primary-foreground shadow-2xl shadow-primary/20 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-2xl font-bold">出展費用</h3>
              </div>
              <div className="mb-8">
                <span className="text-6xl font-bold">1社10万円〜</span>
                <span className="text-primary-foreground/80 ml-2 text-lg">（税込）</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>学生との3〜5時間の交流</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>参加学生全員の連絡先取得</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>会場費・食事代込み</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>アンケートデータ提供</span>
                </li>
              </ul>
              <Button variant="secondary" size="lg" asChild className="w-full group font-bold text-lg h-14 shadow-lg">
                <Link href="#contact">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            従来の採用方法との比較
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-muted">
                  <th className="px-6 py-5 text-left text-sm font-bold text-foreground"></th>
                  <th className="px-6 py-5 text-left text-sm font-bold text-muted-foreground">従来の採用媒体</th>
                  <th className="px-6 py-5 text-left text-sm font-bold text-primary">Table Match</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={row.item} className={index !== comparison.length - 1 ? "border-b border-border" : ""}>
                    <td className="px-6 py-5 text-sm font-bold text-foreground">{row.item}</td>
                    <td className="px-6 py-5 text-sm text-muted-foreground">{row.traditional}</td>
                    <td className="px-6 py-5 text-sm text-foreground font-semibold">{row.tableMatch}</td>
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
