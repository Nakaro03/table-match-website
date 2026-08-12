"use client"

import { motion } from "framer-motion"

// Testimonials data - editable via GitHub
export const studentTestimonials = [
  {
    name: "参加学生A",
    university: "九州大学 農学部 2年",
    comment:
      "少人数で社長と近い距離で話せる形式がとても良かったです。通常の説明会では聞けない、経営者の生の声を聞けました。",
    event: "第2回 福岡",
  },
  {
    name: "参加学生B",
    university: "公立諏訪東京理科大学 3年",
    comment:
      "ハッカソン形式で実際のビジネス課題を考えることで、働くイメージが具体的に湧きました。インターンにも応募しました！",
    event: "第1回 長野",
  },
  {
    name: "参加学生C",
    university: "福岡大学 2年",
    comment:
      "食事を囲みながらカジュアルに話せる雰囲気が最高でした。社長の人柄がわかって、この会社で働きたいと思えました。",
    event: "第2回 福岡",
  },
]

export const companyTestimonials = [
  {
    name: "参加企業様",
    company: "IT系企業",
    comment:
      "通常の採用媒体では出会えない、主体性のある学生と直接話せて非常に有意義でした。早速インターンの打診をしました。",
    event: "第3回 長野",
  },
  {
    name: "参加企業様",
    company: "プリント基盤 企業",
    comment:
      "既存の就活イベントでは深いコネクションも作ることができないですが、テーブルマッチは学生とじっくり話せる時間が多く、採用につながる関係を築けました。",
    event: "第1回 長野",
  },
  {
    name: "参加企業様",
    company: "レジャーホテル企業",
    comment:
      "大学生1名採用につながりました。このイベントはとても有意義でした。今後もぜひ参加したいです。",
    event: "第2回 長野",
  },
]

function QuoteCard({
  comment,
  name,
  sub,
  event,
  index,
}: {
  comment: string
  name: string
  sub: string
  event: string
  index: number
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col rounded-2xl border border-border bg-card p-7 card-hover"
    >
      <span className="font-serif text-5xl leading-none text-primary/30" aria-hidden>
        &ldquo;
      </span>
      <blockquote className="-mt-3 flex-1 text-foreground leading-relaxed text-pretty">
        {comment}
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-4">
        <p className="font-serif text-sm font-bold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
        <p className="mt-1 text-xs font-medium text-primary">{event}</p>
      </figcaption>
    </motion.figure>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            参加者の声。
          </h2>
        </motion.div>

        <div className="mb-14">
          <h3 className="mb-6 font-serif text-lg font-bold text-foreground">学生の声</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentTestimonials.map((t, i) => (
              <QuoteCard
                key={i}
                comment={t.comment}
                name={t.name}
                sub={t.university}
                event={t.event}
                index={i}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-serif text-lg font-bold text-foreground">企業様の声</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyTestimonials.map((t, i) => (
              <QuoteCard
                key={i}
                comment={t.comment}
                name={t.name}
                sub={t.company}
                event={t.event}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
