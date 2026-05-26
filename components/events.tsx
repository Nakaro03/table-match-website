"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Users, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Events data - editable via GitHub
export const upcomingEvents = [
  {
    id: 1,
    title: "第4回 Table Match 福岡",
    date: "2026年6月20日（土）",
    time: "17:00〜21:00",
    location: "四季の色（福岡市）",
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
    image: "/images/event-photo.jpg",
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
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-4">
            <Calendar className="w-4 h-4 text-primary" />
            Events
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            イベント情報
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            直近の開催予定と過去の実績をご紹介します
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <h3 className="text-xl font-semibold text-foreground">次回開催</h3>
          </div>
          
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong rounded-2xl overflow-hidden card-interactive"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Image section */}
                <div className="lg:col-span-2 relative h-64 lg:h-auto">
                  <Image
                    src="/images/event-photo.jpg"
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                      <Sparkles className="w-3 h-3" />
                      {event.status}
                    </span>
                  </div>
                </div>

                {/* Content section */}
                <div className="lg:col-span-3 p-8">
                  <h4 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{event.title}</h4>
                  <p className="text-muted-foreground mb-6 text-pretty">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">日程</p>
                        <p className="text-sm font-medium text-foreground">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">時間</p>
                        <p className="text-sm font-medium text-foreground">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">会場</p>
                        <p className="text-sm font-medium text-foreground">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">定員</p>
                        <p className="text-sm font-medium text-foreground">{event.capacity}名</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {event.targetAudience.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button size="lg" asChild className="group bg-accent hover:bg-accent/90 text-accent-foreground">
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
          <h3 className="text-xl font-semibold text-foreground mb-8">過去の開催実績</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden card-interactive group"
              >
                {event.image && (
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">{event.title}</h4>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>参加学生 {event.participants}名</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {event.companies.map((company) => (
                      <span key={company} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
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
