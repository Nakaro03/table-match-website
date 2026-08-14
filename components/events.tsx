"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Events data - editable via GitHub
export const upcomingEvents = [
  {
    id: 6,
    title: "第6回 Table Match 福岡",
    date: "2026年10月中旬予定",
    time: "詳細は後日公開",
    location: "福岡市内（予定）",
    description:
      "福岡で開催予定の少人数交流会です。日時・会場・参加企業などの詳細は、決まり次第公開します。",
    capacity: "未定",
    targetAudience: ["福岡で就職を考えている学生", "企業の方とじっくり話したい学生"],
    status: "開催予定",
    image: "/images/event-4.jpg",
    applicationUrl: "/projects/table-match-fukuoka-6",
  },
]

export const pastEvents = [
  {
    id: 5,
    title: "第5回 Table Match 長野",
    date: "2026年7月17日（金）",
    location: "Kiitos（茅野市）",
    companies: ["株式会社K2Tプランニング"],
    participants: 14,
    image: "/images/event-5.jpeg",
  },
  {
    id: 4,
    title: "第4回 Table Match 福岡",
    date: "2026年6月21日（日）",
    location: "四季の色（福岡市）",
    companies: ["株式会社くじら", "プランタンホテルグループ"],
    participants: 20,
    image: "/images/event-4.jpg",
  },
  {
    id: 3,
    title: "第3回 Table Match 長野",
    date: "2026年5月8日（金）",
    location: "Kiitos（茅野市）",
    companies: ["インダストリーネットワーク", "ちの技研", "諏訪三社電機", "馬車馬テクノロジーズ"],
    participants: 15,
    image: "/images/event-3.jpg",
  },
  {
    id: 2,
    title: "第2回 Table Match 福岡",
    date: "2026年2月7日",
    location: "福岡市",
    companies: ["プランタンホテルグループ", "ハートアロー"],
    participants: 20,
    image: "/images/event-2.jpg",
  },
  {
    id: 1,
    title: "第1回 Table Match 長野",
    date: "2025年11月29日",
    location: "諏訪地域",
    companies: ["ちの技研", "平出精密", "山万加島屋商店"],
    participants: 16,
    image: "/images/event-1.jpg",
  },
]

export function Events() {
  return (
    <section id="events" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            イベント情報
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            直近の開催予定と、これまでの実績をご紹介します。
          </p>
        </motion.div>

        {/* Upcoming */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
            </span>
            <h3 className="font-serif text-xl font-bold text-foreground">次回開催</h3>
          </div>

          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5"
            >
              <div className="grid lg:grid-cols-5">
                <div className="relative h-64 lg:h-auto lg:col-span-2 min-h-[320px]">
                  <Image src={event.image} alt={event.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-lg">
                      {event.status}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-3 p-8 lg:p-10">
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
                    {event.title}
                  </h4>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-pretty">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-2 gap-5 mb-8">
                    {[
                      { icon: Calendar, label: "日程", value: event.date },
                      { icon: Clock, label: "時間", value: event.time },
                      { icon: MapPin, label: "会場", value: event.location },
                      { icon: Users, label: "定員", value: event.capacity === "未定" ? event.capacity : `${event.capacity}名` },
                    ].map((row) => (
                      <div key={row.label} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
                          <row.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{row.label}</p>
                          <p className="text-sm font-semibold text-foreground">{row.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {event.targetAudience.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {event.applicationUrl ? (
                    <Link
                      href={event.applicationUrl}
                      className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-primary"
                    >
                      詳細・先行受付
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <p className="text-sm font-medium text-muted-foreground">詳細・申込情報は順次公開します。</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Past */}
        <div>
          <h3 className="font-serif text-xl font-bold text-foreground mb-8">これまでの開催</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card card-interactive"
              >
                {event.image && (
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-foreground backdrop-blur">
                      {event.title.split(" ")[0]}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <h4 className="font-serif text-base font-bold text-foreground mb-3 leading-snug">
                    {event.title}
                  </h4>
                  <div className="mb-4 space-y-1.5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-primary" />
                      参加学生 {event.participants}名
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {event.companies.map((company) => (
                      <span
                        key={company}
                        className="rounded-md bg-secondary px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
                      >
                        {company}
                      </span>
                    ))}
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
