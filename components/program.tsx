"use client"

import { motion } from "framer-motion"
import { Clock, MessageSquare, Lightbulb, Utensils, Users, Mic } from "lucide-react"

const programItems = [
  {
    time: "16:00",
    duration: "20分",
    title: "オープニング",
    description: "イベントの目的共有、運営紹介、参加者同士の自己紹介",
    icon: Mic,
  },
  {
    time: "16:20",
    duration: "20分",
    title: "アイスブレイク",
    description: "カードゲーム（ito）を使って緊張をほぐし、場を温める",
    icon: Users,
  },
  {
    time: "16:40",
    duration: "30分",
    title: "企業・社長紹介",
    description: "事業説明だけでなく、経営者の人生ストーリーや価値観を共有",
    icon: Lightbulb,
  },
  {
    time: "17:10",
    duration: "10分",
    title: "匿名質問コーナー",
    description: "QRコードを使って匿名で社長に質問。心理的ハードルなく本音を引き出す",
    icon: MessageSquare,
  },
  {
    time: "17:30",
    duration: "60分",
    title: "社長の修羅場ケーススタディ",
    description: "実際に起きた経営危機をクイズ形式で追体験。経営者の思考を学ぶ",
    icon: Clock,
  },
  {
    time: "18:30",
    duration: "90分",
    title: "交流会・食事",
    description: "美味しい食事を囲みながらフリートーク。社長と学生が自由に交流",
    icon: Utensils,
  },
]

export function Program() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            イベントプログラム
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ただの会社説明会ではありません。社長の脳内を覗き、本音で語り合う5時間です。
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {programItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shrink-0 z-10">
                  <item.icon className="h-6 w-6" />
                </div>

                <div className="flex-1 bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm font-semibold text-accent">{item.time}</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
