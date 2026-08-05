"use client"

import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
  useInView,
} from "framer-motion"
import { ArrowRight, Calendar, MapPin, Clock, Sparkles } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

/**
 * Design exploration — enhanced "startup / bold gradient" direction (案B)
 * with signature interactions. Not linked from the live site.
 */
export default function PreviewPage() {
  return (
    <main className="relative bg-[#070a14]">
      <ScrollProgress />
      <HeroWow />
      <div className="py-16 text-center text-sm text-neutral-500">
        — 確認用ページ（本番トップには表示されません） —
      </div>
    </main>
  )
}

/* ---------- Scroll progress bar ---------- */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400"
    />
  )
}

/* ---------- Enhanced Hero ---------- */
function HeroWow() {
  const sectionRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  // cursor-follow spotlight (write to a CSS var via ref to avoid re-renders)
  const handleMove = (e: React.MouseEvent) => {
    const el = sectionRef.current
    const glow = glowRef.current
    if (!el || !glow) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(99,102,241,0.18), transparent 60%)`
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMove}
      className="relative min-h-screen overflow-hidden py-28"
      style={{ fontFamily: "var(--font-space-grotesk), var(--font-noto-sans-jp), sans-serif" }}
    >
      <Aurora />
      {/* cursor spotlight layer */}
      <div ref={glowRef} className="pointer-events-none absolute inset-0 z-0" />
      {/* fine dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-sky-300 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            学生団体 Table Match
          </motion.span>

          {/* staggered headline reveal */}
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-7xl">
            <RevealLine delay={0.1}>社長とホンネで</RevealLine>
            <RevealLine delay={0.25}>
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                ごはん
              </span>
              しませんか?
            </RevealLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-300"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            学生と経営者が少人数で直接対話できる、カジュアルな採用マッチングイベント。長野・福岡で開催中。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <span className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-500/40 transition-shadow hover:shadow-indigo-500/60">
                次回イベントを見る
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </MagneticButton>
            <MagneticButton>
              <span className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                企業様はこちら
              </span>
            </MagneticButton>
          </motion.div>

          {/* animated counters */}
          <div className="mt-14 flex gap-10">
            <Stat value={100} suffix="%" label="企業満足度" />
            <Stat value={5} suffix="回" label="開催実績" />
            <Stat value={2} suffix="名" label="採用実績" />
          </div>
        </div>

        {/* 3D tilt event card */}
        <TiltCard />
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-white/25 p-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-sky-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ---------- Aurora animated background ---------- */
function Aurora() {
  return (
    <>
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 -top-20 h-[34rem] w-[34rem] rounded-full bg-indigo-600/60 blur-[130px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full bg-sky-500/50 blur-[130px]"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-fuchsia-600/40 blur-[130px]"
      />
    </>
  )
}

/* ---------- Staggered line reveal ---------- */
function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  )
}

/* ---------- Magnetic button ---------- */
function MagneticButton({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width / 2) * 0.35)
        y.set((e.clientY - r.top - r.height / 2) * 0.35)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}

/* ---------- Count-up stat ---------- */
function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const dur = 1400
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <div ref={ref}>
      <div className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
        {n}
        {suffix}
      </div>
      <div
        className="mt-1 text-xs text-neutral-400"
        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
      >
        {label}
      </div>
    </div>
  )
}

/* ---------- 3D tilt event card with glare ---------- */
function TiltCard() {
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 150, damping: 18 })
  const sry = useSpring(ry, { stiffness: 150, damping: 18 })
  const rotateX = useTransform(srx, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(sry, [-0.5, 0.5], ["-8deg", "8deg"])
  const glareX = useTransform(sry, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(srx, [-0.5, 0.5], ["0%", "100%"])
  const glareBg = useTransform(
    [glareX, glareY],
    ([gx, gy]: string[]) =>
      `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.25), transparent 50%)`
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      style={{ perspective: 1000 }}
      className="relative z-10"
    >
      <motion.div
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          ry.set((e.clientX - r.left) / r.width - 0.5)
          rx.set((e.clientY - r.top) / r.height - 0.5)
        }}
        onMouseLeave={() => {
          rx.set(0)
          ry.set(0)
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-2 backdrop-blur-xl"
      >
        {/* glare */}
        <motion.div
          style={{ background: glareBg }}
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
        />
        <div className="relative h-52 overflow-hidden rounded-2xl">
          <Image src="/images/event-5.jpeg" alt="" fill className="object-cover" />
          <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-1 text-xs font-semibold text-white">
            参加者募集中
          </span>
        </div>
        <div className="p-5 text-white" style={{ transform: "translateZ(40px)" }}>
          <p className="text-xs uppercase tracking-wider text-sky-400">Next Event</p>
          <h3
            className="mt-1 text-xl font-bold"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            第6回 Table Match 福岡
          </h3>
          <div
            className="mt-4 space-y-3 text-sm text-neutral-300"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            <Row icon={<Calendar className="h-4 w-4 text-sky-400" />} label="2026年10月中旬予定" />
            <Row icon={<Clock className="h-4 w-4 text-sky-400" />} label="詳細は後日公開" />
            <Row icon={<MapPin className="h-4 w-4 text-sky-400" />} label="福岡市内（予定）" />
          </div>
          <span className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 py-3 font-semibold text-white">
            参加申し込み <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Row({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">{icon}</span>
      <span>{label}</span>
    </div>
  )
}
