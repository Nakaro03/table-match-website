"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, Users, Building2, Coffee, MessageCircle, Camera, PartyPopper } from "lucide-react"

const programItems = [
  {
    time: "11:00",
    title: "オープニング",
    description: "目的共有・チーム紹介",
    detail:
      "イベントの目的を共有したり、チーム紹介をしたりします！その後プログラムが進んでいきます！",
    image: "/images/program/opening.jpg",
    icon: Users,
  },
  {
    time: "11:15",
    title: "自己分析",
    description: "自分の強みや今やりたいことを整理しアイスブレイク",
    detail:
      "自分の強みや今やりたいことを整理してアイスブレイク！案外自分を振り返る機会はないと思うので就職活動に向けた第一歩！",
    image: "/images/program/jikobun.jpg",
    icon: Clock,
  },
  {
    time: "11:45",
    title: "企業説明",
    description: "参加企業4社が会社の魅力をプレゼン",
    detail: "参加企業が会社の魅力をプレゼン！社長・人事の熱いプレゼンを聞いてより会社への理解を深めましょう！",
    image: "/images/program/kigyosetsu.jpg",
    icon: Building2,
  },
  {
    time: "12:25",
    title: "休憩",
    description: "お菓子でひと息",
    detail: 
      "お菓子で一息タイムです。休憩時間も企業の方、学生の方楽しく交流されています。ご飯のいいにおいもしてきます～",
    image: "/images/program/kyukei_after.jpg",
    icon: Coffee,
  },
  {
    time: "12:40",
    title: "シャッフル座談会",
    description: "社長と本音で語る",
    detail: 
      "社長・人事とホンネで語る！！実際にリアルな会社の話、社会の話など距離が近いからこそたくさんのことが聞けます！",
    image: "/images/program/zadan.jpg",
    icon: MessageCircle,
  },
  {
    time: "13:40",
    title: "閉会式",
    description: "全体で記念撮影",
    detail: "全体で記念撮影！あっっという間に閉会式になってしまいます。",
    image: "/images/program/closing.jpg",
    icon: Camera,
  },
  {
    time: "14:00",
    title: "交流会",
    description: "デザート片手に自由に交流",
    detail: 
      "ご飯・デザート片手に自由に交流！企業からのインターン情報や採用情報を聞けるかも。",
    image: "/images/program/koryu.jpg",
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
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-primary" />
            <span className="label-eyebrow text-xs text-primary">Timetable</span>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            当日のながれ(例)
          </h2>
          <p className="text-muted-foreground">
            メインは「社長 &times; 学生」のシャッフル座談会。
          </p>
        </motion.div>

        <div className="relative">
          {/* 中央のタイムライン */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2" />
          <div className="space-y-0">
            {programItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* タイムラインの丸 */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-primary border-4 border-secondary" />
                  <span className="mt-2 text-sm font-semibold text-primary whitespace-nowrap">
                    {item.time}
                  </span>
                </div>
                {/* カード */}
                <div
                  className={`group w-full md:w-[42%] ${
                    index % 2 === 0
                      ? "md:mr-auto"
                      : "md:ml-auto"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border bg-card shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    {/* タイトル */}
                    <div className="py-4 text-center border-b">
                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                    {/* 画像 */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="
                          object-cover
                          brightness-90
                          transition-all
                          duration-500
                          group-hover:brightness-75
                          group-hover:scale-105
                        "
                      />
                    </div>
                    {/* 詳細 */}
                    <div
                      className="
                        max-h-0
                        overflow-hidden
                        transition-all
                        duration-500
                        group-hover:max-h-[500px]
                      "
                    >
                      <div className="border-t p-5">
                        <p className="text-sm leading-7 whitespace-pre-line text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </div>
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
