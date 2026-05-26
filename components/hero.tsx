"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Calendar, MapPin, Clock, Sparkles, Star } from "lucide-react"
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
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-[60px] animate-float" style={{ animationDelay: '-1.5s' }} />
      
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                学生団体 Table Match
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-balance"
            >
              <span className="text-foreground">社長とホンネで</span>
              <br />
              <span className="gradient-accent">ごはん</span>
              <span className="text-foreground">しませんか？</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed"
            >
              学生と経営者が少人数で直接対話できる、
              <span className="text-foreground font-semibold">カジュアルな採用マッチングイベント</span>。
              長野・福岡で開催中。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="lg" asChild className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                <Link href="#events">
                  次回イベントを見る
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all">
                <Link href="#for-companies">企業様はこちら</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex gap-8"
            >
              {[
                { value: "100%", label: "企業満足度" },
                { value: "3+", label: "開催実績" },
                { value: "2名", label: "インターン採用" },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right content - Event card with image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Main event card */}
            <div className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-2xl shadow-primary/10">
              {/* Event image */}
              <div className="relative h-56 sm:h-72">
                <Image
                  src="/images/event-photo.jpg"
                  alt="Table Match イベントの様子"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-bold shadow-lg animate-pulse-glow">
                    参加者募集中
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-foreground">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  満足度100%
                </div>
              </div>
              
              {/* Event details */}
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                  Next Event
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  第4回 Table Match 福岡
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">日程</p>
                      <p className="text-foreground font-semibold text-base">2026年6月20日（土）</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">時間</p>
                      <p className="text-foreground font-semibold text-base">17:00〜21:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">会場</p>
                      <p className="text-foreground font-semibold text-base">四季の色（福岡市）</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all" asChild>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe8Dpqo43rlkfdDN7Qkyt7dCXHgZisjv0d-rKpG64sd2Eyqdw/viewform" target="_blank" rel="noopener noreferrer">
                      参加申し込み
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-2 bg-primary rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
