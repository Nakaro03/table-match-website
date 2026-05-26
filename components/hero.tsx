"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-primary mb-5">
                学生団体 Table Match
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-balance"
            >
              <span className="text-foreground">社長とホンネで</span>
              <br />
              <span className="text-primary">ごはん</span>
              <span className="text-foreground">しませんか?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-muted-foreground max-w-lg text-pretty leading-relaxed"
            >
              学生と経営者が少人数で直接対話できる、
              <span className="text-foreground font-medium">カジュアルな採用マッチングイベント</span>。
              長野・福岡で開催中。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 flex flex-col sm:flex-row items-start gap-3"
            >
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#events">
                  次回イベントを見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#for-companies">企業様はこちら</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex gap-8"
            >
              {[
                { value: "100%", label: "企業満足度" },
                { value: "4回", label: "開催実績" },
                { value: "2名", label: "インターン採用" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right content - Event card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg">
              {/* Event image */}
              <div className="relative h-48 sm:h-56">
                <Image
                  src="/images/event-photo.jpg"
                  alt="Table Match イベントの様子"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    参加者募集中
                  </span>
                </div>
              </div>
              
              {/* Event details */}
              <div className="p-5 sm:p-6">
                <p className="text-xs uppercase tracking-wider text-primary font-medium mb-1.5">
                  Next Event
                </p>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  第4回 Table Match 福岡
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">日程</p>
                      <p className="text-foreground font-medium">2026年6月20日（土）</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">時間</p>
                      <p className="text-foreground font-medium">17:00〜21:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">会場</p>
                      <p className="text-foreground font-medium">四季の色（福岡市）</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfDHhkJ9dfnQ83kTyQ72CwSr2fs9QKICf7IW3xrBz3l0xZDlA/viewform" target="_blank" rel="noopener noreferrer">
                      参加申し込み
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
