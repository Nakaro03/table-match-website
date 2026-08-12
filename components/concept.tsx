"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// MECEで整理：01=規模 / 02=場 / 03=形式 / 04=相手（各軸で語彙が重複しないよう分離）
const features = [
  {
    no: "01",
    title: "少人数制",
    description: "社長1人に学生5〜6人。全員に発言の機会がまわり、一人ひとりの疑問まで拾えます。",
  },
  {
    no: "02",
    title: "和やかな食卓",
    description: "食事をともにすることで自然と距離が縮まり、構えのない雰囲気が生まれます。",
  },
  {
    no: "03",
    title: "双方向マッチング",
    description: "会社説明を聞くだけでなく、質問し合う往復のやりとりで、入社後のミスマッチを防ぎます。",
  },
  {
    no: "04",
    title: "地元企業と接続",
    description: "地域で活躍する優良企業のトップと、担当者を介さずつながれます。",
  },
]

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
            Table Match は、地域の優良企業と学生が同じ食卓を囲んで語り合う採用イベントを運営する学生団体です。
            求人情報や説明会だけでは見えない“人となり”に、直接ふれられる場をつくっています。
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl">
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
                — 経営者による特別講演より
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
      </div>
    </section>
  )
}
