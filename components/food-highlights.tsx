"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

// 学生向けの "食事の楽しみ" 訴求。
// メニュー写真を public/images/food/ にアップロードすると自動で差し替わります。
const foodItems = [
  {
    no: "01",
    name: "鮨・和食",
    desc: "落ち着いた席で、ホンネの会話を。",
    image: "/images/food/sushi.jpg",
    fallback: "🍣",
    gradient: "from-rose-100 to-amber-100",
  },
  {
    no: "02",
    name: "イタリアン",
    desc: "ピザ・パスタをシェアして気軽に。",
    image: "/images/food/pizza.jpg",
    fallback: "🍕",
    gradient: "from-amber-100 to-orange-100",
  },
  {
    no: "03",
    name: "焼肉・グリル",
    desc: "炭火を囲んで盛り上がる夜。",
    image: "/images/food/yakiniku.jpg",
    fallback: "🥩",
    gradient: "from-orange-100 to-red-100",
  },
]

function FoodCard({ item, index }: { item: (typeof foodItems)[number]; index: number }) {
  const [failed, setFailed] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-card card-interactive"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {item.image && !failed ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${item.gradient}`}>
            <span className="text-7xl transition-transform duration-500 group-hover:scale-110">
              {item.fallback}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <span className="font-mono text-xs text-background/70">{item.no}</span>
          <h3 className="mt-1 font-serif text-2xl font-bold text-background">{item.name}</h3>
          <p className="mt-1 text-sm text-background/80 leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function FoodHighlights() {
  return (
    <section id="food" className="py-24 sm:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-primary" />
              <span className="label-eyebrow text-xs text-primary">For Students</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              学生は気軽に、
              <span className="text-primary">ごちそう</span>を。
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground leading-relaxed text-pretty"
          >
            毎回違うジャンルの美味しい食事を囲んで、社長と本音で話せます。
            参加費は<span className="font-semibold text-foreground">無料</span>、手ぶらで OK。
            会場や料理は回によって変わります。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {foodItems.map((item, i) => (
            <FoodCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
