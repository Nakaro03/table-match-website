"use client"

import { motion } from "framer-motion"
import { Users, Building2, Target, Utensils } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "少人数制",
    description: "社長1人に対して学生5〜6人。全員が発言でき、深い対話が実現します。"
  },
  {
    icon: Utensils,
    title: "食事を囲んで",
    description: "美味しい食事を囲みながら、リラックスした雰囲気で本音の会話ができます。"
  },
  {
    icon: Target,
    title: "マッチング重視",
    description: "一方的な会社説明ではなく、双方向の対話でミスマッチを防ぎます。"
  },
  {
    icon: Building2,
    title: "地元企業と接続",
    description: "地方で活躍する優良企業の経営者と直接繋がる貴重な機会を提供します。"
  },
]

export function Concept() {
  return (
    <section id="concept" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Table Matchとは
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            大手ナビサイトでは見つけられない、地域の優良企業と学生が
            「本音」で出会える場を創り出す学生団体です。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 border border-border hover:border-accent/50 transition-colors"
            >
              <feature.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-2xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100%", label: "企業満足度" },
              { number: "3回", label: "開催実績" },
              { number: "50+", label: "参加学生数" },
              { number: "2名", label: "採用決定" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-1">{stat.number}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
