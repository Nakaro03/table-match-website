"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

// Testimonials data - editable via GitHub
export const studentTestimonials = [
  {
    name: "参加学生A",
    university: "九州大学 農学部 2年",
    comment: "少人数で社長と近い距離で話せる形式がとても良かったです。通常の説明会では聞けない、経営者の生の声を聞けました。",
    event: "第2回 福岡",
  },
  {
    name: "参加学生B", 
    university: "公立諏訪東京理科大学 3年",
    comment: "ハッカソン形式で実際のビジネス課題を考えることで、働くイメージが具体的に湧きました。インターンにも応募しました！",
    event: "第1回 長野",
  },
  {
    name: "参加学生C",
    university: "福岡大学 2年",
    comment: "食事を囲みながらカジュアルに話せる雰囲気が最高でした。社長の人柄がわかって、この会社で働きたいと思えました。",
    event: "第2回 福岡",
  },
]

export const companyTestimonials = [
  {
    name: "参加企業様",
    company: "IT系企業",
    comment: "通常の採用媒体では出会えない、主体性のある学生と直接話せて非常に有意義でした。早速インターンの打診をしました。",
    event: "第3回 長野",
  },
  {
    name: "参加企業様",
    company: "プリント基盤 企業",
    comment: "既存の就活イベントでは深いコネクションも作ることができないですが、テーブルマッチは学生とじっくり話せる時間が多く、採用につながる関係を築けました。",
    event: "第1回 長野",
  },
  {
    name: "参加企業様",
    company: "レジャーホテル企業",
    comment: "大学生1名採用につながりました。このイベントはとても有意義でした。今後もぜひ参加したいです。",
    event: "第2回 長野",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            参加者の声
          </h2>
          <p className="text-lg text-muted-foreground">
            イベントに参加した学生・企業様からの感想
          </p>
        </motion.div>

        {/* Student Testimonials */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6">学生の声</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <Quote className="h-8 w-8 text-accent/30 mb-4" />
                <p className="text-foreground mb-4 text-sm leading-relaxed">
                  {testimonial.comment}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.university}</p>
                  <p className="text-xs text-accent mt-1">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Company Testimonials */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">企業様の声</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <Quote className="h-8 w-8 text-accent/30 mb-4" />
                <p className="text-foreground mb-4 leading-relaxed">
                  {testimonial.comment}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-accent mt-1">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note for adding testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            ※ 参加者の声はGitHubリポジトリから追加・編集できます
          </p>
        </motion.div>
      </div>
    </section>
  )
}
