"use client"

import { motion, useInView } from "framer-motion"
import { Users, Building2, Target, Utensils, Lightbulb, TrendingUp } from "lucide-react"
import { useRef } from "react"

const features = [
  {
    icon: Users,
    title: "少人数制",
    description: "社長1人に対して学生5〜6人。全員が発言でき、深い対話が実現します。",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Utensils,
    title: "食事を囲んで",
    description: "美味しい食事を囲みながら、リラックスした雰囲気で本音の会話ができます。",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Target,
    title: "マッチング重視",
    description: "一方的な会社説明ではなく、双方向の対話でミスマッチを防ぎます。",
    gradient: "from-emerald-500/20 to-green-500/20",
  },
  {
    icon: Building2,
    title: "地元企業と接続",
    description: "地方で活躍する優良企業の経営者と直接繋がる貴重な機会を提供します。",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
]

const stats = [
  { number: "100", suffix: "%", label: "企業満足度" },
  { number: "3", suffix: "回+", label: "開催実績" },
  { number: "50", suffix: "+", label: "参加学生数" },
  { number: "2", suffix: "名", label: "採用決定" },
]

function AnimatedNumber({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-bold gradient-text"
      >
        {value}
      </motion.span>
      <span className="text-2xl sm:text-3xl font-bold text-primary ml-0.5">{suffix}</span>
    </span>
  )
}

export function Concept() {
  return (
    <section id="concept" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-radial" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-4">
            <Lightbulb className="w-4 h-4 text-accent" />
            Concept
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Table Matchとは
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            大手ナビサイトでは見つけられない、地域の優良企業と学生が
            <span className="text-foreground font-medium">「本音」</span>で出会える場を創り出す学生団体です。
          </p>
        </motion.div>

        {/* Feature cards - Bento grid style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl p-8 card-interactive relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/10 blur-[100px] rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-8">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">実績</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                    <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
