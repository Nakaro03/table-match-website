"use client"

import { motion } from "framer-motion"
import { Clock, Users, Building2, Coffee, MessageCircle, Camera, PartyPopper } from "lucide-react"

const programItems = [
  {
    time: "17:00",
    title: "オープニング",
    description: "目的共有・チーム紹介",
    icon: Users,
  },
  {
    time: "17:15",
    title: "自己分析",
    description: "自分の強みや今やりたいことを整理しアイスブレイク",
    icon: Clock,
  },
  {
    time: "17:45",
    title: "企業説明",
    description: "参加企業4社が会社の魅力をプレゼン",
    icon: Building2,
  },
  {
    time: "18:25",
    title: "休憩",
    description: "お菓子でひと息",
    icon: Coffee,
  },
  {
    time: "18:40",
    title: "シャッフル座談会",
    description: "社長と本音で語る",
    icon: MessageCircle,
    highlight: true,
  },
  {
    time: "19:40",
    title: "閉会式",
    description: "全体で記念撮影",
    icon: Camera,
  },
  {
    time: "20:00",
    title: "交流会",
    description: "デザート片手に自由に交流",
    icon: PartyPopper,
  },
]

export function Program() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary mb-2">TIMETABLE</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            当日のながれ
          </h2>
          <p className="text-muted-foreground">
            メインは「社長×学生」のシャッフル座談会!
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-6">
            {programItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative flex items-center gap-4 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 ${
                  item.highlight ? "bg-primary ring-4 ring-primary/20" : "bg-primary"
                }`} />

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}>
                  <div className={`bg-card rounded-lg p-5 border ${
                    item.highlight ? "border-primary/30 shadow-sm" : "border-border"
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-md ${
                        item.highlight ? "bg-primary text-primary-foreground" : "bg-secondary"
                      }`}>
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className={`text-sm font-semibold ${
                        item.highlight ? "text-primary" : "text-muted-foreground"
                      }`}>
                        {item.time}
                      </span>
                    </div>
                    <h3 className={`font-semibold mb-1 ${
                      item.highlight ? "text-primary" : "text-foreground"
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
