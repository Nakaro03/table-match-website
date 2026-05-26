"use client"

import { motion, useInView } from "framer-motion"
import { Users, Building2, Target, Utensils, AlertCircle } from "lucide-react"
import { useRef } from "react"

const features = [
  {
    icon: Users,
    title: "少人数制",
    description: "社長1人に対して学生5〜6人。全員が発言でき、深い対話が実現します。",
  },
  {
    icon: Utensils,
    title: "食事を囲んで",
    description: "美味しい食事を囲みながら、リラックスした雰囲気で本音の会話ができます。",
  },
  {
    icon: Target,
    title: "マッチング重視",
    description: "一方的な会社説明ではなく、双方向の対話でミスマッチを防ぎます。",
  },
  {
    icon: Building2,
    title: "地元企業と接続",
    description: "地方で活躍する優良企業の経営者と直接繋がる貴重な機会を提供します。",
  },
]

const stats = [
  { number: "100", suffix: "%", label: "企業満足度" },
  { number: "4", suffix: "回", label: "開催実績" },
  { number: "50", suffix: "+", label: "参加学生数" },
  { number: "2", suffix: "名", label: "採用決定" },
]

function AnimatedNumber({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold text-primary"
      >
        {value}
      </motion.span>
      <span className="text-xl sm:text-2xl font-bold text-primary/80 ml-0.5">{suffix}</span>
    </span>
  )
}

export function Concept() {
  return (
    <section id="concept" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary mb-2">CONCEPT</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Table Matchとは
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            大手ナビサイトでは見つけられない、地域の優良企業と学生が
            <span className="text-foreground font-medium">「本音」</span>で出会える場を創り出す学生団体です。
          </p>
        </motion.div>

        {/* Problem statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-secondary rounded-lg p-6 border border-border">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-md shrink-0">
                <AlertCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">従来の採用活動の課題</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  従来の採用活動では、<span className="text-foreground font-medium">浅い関係性だけで終わってしまい、深い関係性を構築することが難しい</span>という課題があります。
                  Table Matchは、食事を囲んだカジュアルな場で本音の対話を実現し、この課題を解決します。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-card rounded-lg p-5 border border-border card-hover"
            >
              <div className="p-2 bg-secondary rounded-md w-fit mb-3">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-primary/5 rounded-lg p-6 sm:p-8 border border-primary/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
