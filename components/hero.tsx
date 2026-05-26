"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Calendar, MapPin, Clock, Sparkles } from "lucide-react"
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
      <div className="absolute inset-0 bg-grid bg-radial" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-2s' }} />
      
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-foreground/80 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                学生団体 Table Match
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed"
            >
              学生と経営者が少人数で直接対話できる、
              <span className="text-foreground font-medium">カジュアルな採用マッチングイベント</span>。
              長野・福岡で開催中。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="lg" asChild className="group bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#events">
                  次回イベントを見る
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-border hover:bg-secondary">
                <Link href="#for-companies">企業様はこちら</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
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
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Main event card */}
            <div className="relative rounded-2xl overflow-hidden glass-strong glow">
              {/* Event image */}
              <div className="relative h-56 sm:h-64">
                <Image
                  src="/images/event-photo.jpg"
                  alt="Table Match イベントの様子"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider">
                    参加者募集中
                  </span>
                </div>
              </div>
              
              {/* Event details */}
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  次回開催
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  第4回 Table Match 福岡
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">2026年6月20日（土）</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">17:00〜21:00</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">四季の色（福岡市）</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" asChild>
                    <Link href="#contact">
                      参加申し込み
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 bg-muted-foreground rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
