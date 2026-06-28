"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Users, ArrowRight, Sparkles, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Events data - editable via GitHub
export const upcomingEvents = [
  {
    id: 5,
    title: "第5回 Table Match 長野",
    date: "2026年7月17日（金）",
    time: "17:00〜21:00",
    location: "Kiitos（茅野市・茅野駅から徒歩2分）",
    description: "関東就職やAI・DX・ITに関心のある学生向けの少人数交流会。参加予定企業は株式会社K2Tプランニング様。参加費無料・服装自由です。",
    capacity: "15〜20",
    targetAudience: ["関東に就職したい学生", "AI・DX・ITに興味のある学生", "28・29卒の学生"],
    status: "募集中",
    applicationUrl: "https://docs.google.com/forms/d/e/1FAIpQLScpOMAD68RcdymZX1IZT2fdMkDA0-rplU1FXJps6mlB_BtLGQ/viewform",
  },
]

export const pastEvents = [
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
    <section id="events" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Calendar className="w-4 h-4" />
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
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <h3 className="text-xl font-bold text-foreground">次回開催</h3>
          </div>
          
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-3xl overflow-hidden border border-border shadow-xl shadow-primary/5 card-interactive"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Image section */}
                <div className="lg:col-span-2 relative h-64 lg:h-auto min-h-[300px]">
                  <Image
                    src="/images/event-5.jpg"
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/90 lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-accent-foreground text-sm font-bold rounded-full shadow-lg animate-pulse-glow">
                      <Sparkles className="w-4 h-4" />
                      {event.status}
                    </span>
                  </div>
                </div>

                {/* Content section */}
                <div className="lg:col-span-3 p-8 lg:p-10">
                  <h4 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{event.title}</h4>
                  <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">日程</p>
                        <p className="text-sm font-bold text-foreground">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">時間</p>
                        <p className="text-sm font-bold text-foreground">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">会場</p>
                        <p className="text-sm font-bold text-foreground">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">定員</p>
                        <p className="text-sm font-bold text-foreground">{event.capacity}名</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {event.targetAudience.map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-muted text-muted-foreground text-sm font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button size="lg" asChild className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25 hover:shadow-xl transition-all">
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
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground">過去の開催実績</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg card-interactive group"
              >
                {event.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-bold rounded-full">
                        {event.title.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h4 className="font-bold text-foreground mb-4 text-lg">{event.title}</h4>
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
                      <span key={company} className="px-2.5 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">
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
