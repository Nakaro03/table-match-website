"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const features = [
  {
    no: "01",
    title: "少人数制",
    description: "社長1人に対して学生5〜6人。全員が発言でき、深い対話が生まれます。",
  },
  {
    no: "02",
    title: "食事を囲んで",
    description: "美味しい食事を囲みながら、リラックスした雰囲気で本音の会話ができます。",
  },
  {
    no: "03",
    title: "マッチング重視",
    description: "一方的な会社説明ではなく、双方向の対話でミスマッチを防ぎます。",
  },
  {
    no: "04",
    title: "地元企業と接続",
    description: "地方で活躍する優良企業の経営者と、直接つながる貴重な機会を。",
  },
]

const stats = [
  { number: "100%", label: "企業満足度" },
  { number: "4回", label: "開催実績" },
  { number: "50+", label: "参加学生数" },
  { number: "2名", label: "採用決定" },
]

function StatItem({ number, label, index }: { number: string; label: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="text-center sm:text-left"
    >
      <div className="font-serif text-4xl sm:text-5xl font-bold text-primary">{number}</div>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}

export function Concept() {
  return (
    <section id="concept" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro row */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-primary" />
              <span className="label-eyebrow text-xs text-primary">Concept</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              大手ナビでは出会えない、
              <br />
              <span className="text-primary">「本音」</span>の出会いを。
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground leading-relaxed text-pretty"
          >
            Table Match は、地域の優良企業と学生が食卓を囲んで語り合う採用マッチングイベントを運営する学生団体です。
            従来の採用活動は浅い関係で終わりがち。私たちはカジュアルな場での本音の対話で、その課題を解決します。
          </motion.p>
        </div>

        {/* Photo + features */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border shadow-xl">
              <Image
                src="/images/real/lecture.jpg"
                alt="経営者による特別講演の様子"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-lg backdrop-blur sm:left-8 sm:right-auto sm:max-w-xs">
              <p className="font-sans text-base font-bold text-foreground leading-snug">
                「やりがいは、自分で創る。」
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                経営者のリアルな言葉に、直接ふれられる場。
              </p>
            </div>
          </motion.div>

          <div>
            <ul className="divide-y divide-border">
              {features.map((feature, index) => (
                <motion.li
                  key={feature.no}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex gap-5 py-5 first:pt-0"
                >
                  <span className="font-mono text-sm text-primary/70 pt-1">{feature.no}</span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12"
        >
          {stats.map((stat, index) => (
            <StatItem key={stat.label} number={stat.number} label={stat.label} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
