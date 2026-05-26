"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Events data - editable via GitHub
export const upcomingEvents = [
  {
    id: 1,
    title: "第4回 Table Match 福岡",
    date: "2026年6月6日（金）",
    time: "16:00〜21:00",
    location: "福岡市内（詳細後日）",
    description: "社長の『成功』を追体験し、社長の『脳内』を覗ける、本音の人生戦略会議",
    capacity: 20,
    targetAudience: ["インターン希望者", "就活準備中", "起業に興味ある方"],
    status: "募集中",
    applicationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe8Dpqo43rlkfdDN7Qkyt7dCXHgZisjv0d-rKpG64sd2Eyqdw/viewform",
  },
]

export const pastEvents = [
  {
    id: 3,
    title: "第3回 Table Match 長野",
    date: "2026年5月8日（金）",
    location: "Kiitos（茅野市）",
    companies: ["インダストリーネットワーク", "ちの技研", "諏訪三社電機", "馬車馬テクノロジーズ"],
    participants: 15,
  },
  {
    id: 2,
    title: "第2回 Table Match 福岡",
    date: "2026年2月7日",
    location: "福岡市",
    companies: ["プランタンホテルグループ", "ハートアロー"],
    participants: 20,
  },
  {
    id: 1,
    title: "第1回 Table Match 長野",
    date: "2025年11月29日",
    location: "諏訪地域",
    companies: ["ちの技研", "平出精密", "山万加島屋商店"],
    participants: 16,
  },
]

export function Events() {
  return (
    <section id="events" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            イベント情報
          </h2>
          <p className="text-lg text-muted-foreground">
            直近の開催予定と過去の実績をご紹介します
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="h-2 w-2 bg-accent rounded-full animate-pulse" />
            次回開催
          </h3>
          
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                      {event.status}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-4">{event.title}</h4>
                  <p className="text-muted-foreground mb-6">{event.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="h-5 w-5 text-accent" />
                      <span className="text-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="h-5 w-5 text-accent" />
                      <span className="text-foreground">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="text-foreground">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="h-5 w-5 text-accent" />
                      <span className="text-foreground">定員 {event.capacity}名</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {event.targetAudience.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-auto">
                  <Button size="lg" asChild className="w-full lg:w-auto group">
                    <Link href={event.applicationUrl} target="_blank" rel="noopener noreferrer">
                      参加申し込み
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">過去の開催</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h4 className="font-semibold text-foreground mb-3">{event.title}</h4>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>参加学生 {event.participants}名</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {event.companies.map((company) => (
                    <span key={company} className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded">
                      {company}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
