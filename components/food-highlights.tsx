"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Sparkles, Utensils } from "lucide-react"
import { useState } from "react"

// 学生向けの "食事の楽しみ" 訴求。
// メニュー写真を public/images/food/ にアップロードすると自動で差し替わります。
// 内容を編集する場合はこの配列を書き換えてください。
const foodItems = [
  {
    emoji: "🍣",
    name: "鮨・和食",
    desc: "落ち着いた個室で、ホンネの会話を",
    image: "/images/food/sushi.jpg",
    gradient: "from-rose-100 to-amber-100",
  },
  {
    emoji: "🍕",
    name: "イタリアン",
    desc: "ピザ・パスタをシェアして気軽に",
    image: "/images/food/pizza.jpg",
    gradient: "from-amber-100 to-orange-100",
  },
  {
    emoji: "🥩",
    name: "焼肉・グリル",
    desc: "炭火を囲んで盛り上がる夜",
    image: "/images/food/yakiniku.jpg",
    gradient: "from-orange-100 to-red-100",
  },
]

function FoodCard({
  item,
  index,
}: {
  item: (typeof foodItems)[number]
  index: number
}) {
  const [failed, setFailed] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {item.image && !failed ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${item.gradient}`}
          >
            <span className="text-7xl drop-shadow-sm transition-transform duration-500 group-hover:scale-110">
              {item.emoji}
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <span aria-hidden>{item.emoji}</span>
          {item.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export function FoodHighlights() {
  return (
    <section id="food" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Utensils className="w-4 h-4" />
            For Students
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            学生は気軽に、<span className="text-primary">ごちそう</span>を。
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            毎回違うジャンルの美味しい食事を囲んで、社長と本音で話せます。
            <br className="hidden sm:block" />
            参加費は<span className="font-bold text-foreground">無料</span>。手ぶらで OK。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {foodItems.map((item, i) => (
            <FoodCard key={item.name} item={item} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-sm text-muted-foreground inline-flex w-full items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          会場や料理は回によって変わります。次回のメニューはイベント詳細をチェック！
        </motion.p>
      </div>
    </section>
  )
}
