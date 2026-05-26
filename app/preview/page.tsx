"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, MapPin, Clock, Sparkles, Utensils } from "lucide-react"
import Image from "next/image"

/**
 * Design exploration page — not linked from the live site.
 * Shows the Hero section in three distinct visual directions so we can
 * compare them on the deployed site and pick one to roll out everywhere.
 */
export default function PreviewPage() {
  return (
    <main className="bg-white">
      <DirectionLabel
        id="a"
        title="案A — エディトリアル（明朝 × 余白）"
        desc="上質・洗練・大人。雑誌の特集ページのような佇まい。"
      />
      <HeroEditorial />

      <DirectionLabel
        id="b"
        title="案B — ボールド・グラデーション"
        desc="モダン・躍動・スタートアップ的。濃色背景＋発光グラデーション。"
      />
      <HeroBold />

      <DirectionLabel
        id="c"
        title="案C — ウォーム・フレンドリー（丸み × 暖色）"
        desc="親しみ・温かい。『ごはんしながら本音で』の世界観に寄せた配色。"
      />
      <HeroWarm />

      <div className="py-16 text-center text-sm text-neutral-400">
        — 確認用ページ（本番トップには表示されません） —
      </div>
    </main>
  )
}

function DirectionLabel({ id, title, desc }: { id: string; title: string; desc: string }) {
  return (
    <div id={id} className="border-t border-neutral-200 bg-neutral-900 px-6 py-5 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-lg font-bold">{title}</p>
        <p className="mt-1 text-sm text-neutral-400">{desc}</p>
      </div>
    </div>
  )
}

/* ============================================================
   案A — Editorial / Premium
   ============================================================ */
function HeroEditorial() {
  return (
    <section
      className="relative overflow-hidden bg-[#f6f3ee] py-20 sm:py-28"
      style={{ fontFamily: "var(--font-shippori), serif" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* small-caps label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-[#7c2d2d]" />
          <span
            className="text-xs uppercase tracking-[0.35em] text-[#7c2d2d]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Student Org. Table Match
          </span>
        </motion.div>

        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Headline */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-semibold leading-[1.25] tracking-tight text-[#1c1917] sm:text-6xl"
            >
              社長と、
              <br />
              <span className="text-[#7c2d2d]">ホンネ</span>で
              <br />
              ごはんを。
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 max-w-md text-base leading-loose text-neutral-600"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              学生と経営者が、少人数の食卓で直接語り合う。
              長野・福岡で開く、カジュアルな採用マッチングの場。
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 flex items-center gap-8"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <a
                href="#a"
                className="group inline-flex items-center gap-3 border-b-2 border-[#1c1917] pb-1 text-sm font-medium tracking-wide text-[#1c1917]"
              >
                次回イベントを見る
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#a" className="text-sm tracking-wide text-neutral-500 underline-offset-4 hover:underline">
                企業様はこちら
              </a>
            </motion.div>

            {/* stats — editorial hairline style */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-14 flex divide-x divide-neutral-300 border-y border-neutral-300"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {[
                { value: "100%", label: "企業満足度" },
                { value: "4", label: "開催実績" },
                { value: "2", label: "採用実績" },
              ].map((s, i) => (
                <div key={i} className="flex-1 py-5 pl-5 first:pl-0">
                  <div className="text-3xl font-semibold text-[#1c1917]">{s.value}</div>
                  <div className="mt-1 text-xs tracking-wider text-neutral-500">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image — framed, asymmetric */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src="/images/event-photo.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 -z-0 h-full w-full border border-[#7c2d2d]/40" />
            <p
              className="mt-5 text-xs tracking-wider text-neutral-500"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              第4回 Table Match 福岡 — 2026.06.20
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   案B — Bold / Gradient
   ============================================================ */
function HeroBold() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#0a0e1a] py-24">
      {/* glowing gradient blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-indigo-600 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sky-500 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-sky-300 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            学生団体 Table Match
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-7xl"
            style={{ fontFamily: "var(--font-space-grotesk), var(--font-noto-sans-jp), sans-serif" }}
          >
            社長とホンネで
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              ごはん
            </span>
            しませんか?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-300"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            学生と経営者が少人数で直接対話できる、カジュアルな採用マッチングイベント。長野・福岡で開催中。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#b"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-indigo-500/50"
            >
              次回イベントを見る
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#b"
              className="inline-flex items-center rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              企業様はこちら
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex gap-10"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {[
              { value: "100%", label: "企業満足度" },
              { value: "4回", label: "開催実績" },
              { value: "2名", label: "採用実績" },
            ].map((s, i) => (
              <div key={i}>
                <div className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-3xl font-extrabold text-transparent">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-neutral-400">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* glass event card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="rounded-3xl border border-white/10 bg-white/[0.06] p-2 backdrop-blur-xl"
        >
          <div className="relative h-52 overflow-hidden rounded-2xl">
            <Image src="/images/event-photo.jpg" alt="" fill className="object-cover" />
            <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-1 text-xs font-semibold text-white">
              参加者募集中
            </span>
          </div>
          <div className="p-5 text-white">
            <p className="text-xs uppercase tracking-wider text-sky-400">Next Event</p>
            <h3 className="mt-1 text-xl font-bold">第4回 Table Match 福岡</h3>
            <div className="mt-4 space-y-3 text-sm text-neutral-300">
              <Row icon={<Calendar className="h-4 w-4 text-sky-400" />} label="2026年6月20日（土）" />
              <Row icon={<Clock className="h-4 w-4 text-sky-400" />} label="17:00〜21:00" />
              <Row icon={<MapPin className="h-4 w-4 text-sky-400" />} label="四季の色（福岡市）" />
            </div>
            <a
              href="#b"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 py-3 font-semibold text-white"
            >
              参加申し込み <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================================
   案C — Warm / Friendly
   ============================================================ */
function HeroWarm() {
  return (
    <section
      className="relative overflow-hidden bg-[#fff7ed] py-20 sm:py-24"
      style={{ fontFamily: "var(--font-rounded), sans-serif" }}
    >
      {/* soft organic blobs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-amber-200/60 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-4 py-2 text-sm font-bold text-orange-700"
          >
            <Utensils className="h-4 w-4" />
            学生団体 Table Match
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-5xl font-extrabold leading-[1.2] tracking-tight text-[#3d2817] sm:text-6xl"
          >
            社長とホンネで
            <br />
            <span className="relative inline-block text-orange-600">
              ごはん
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M2 8 Q 50 2 98 8" stroke="#fb923c" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            しませんか?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-[#6b4f3a]"
          >
            学生と経営者が少人数で直接対話できる、カジュアルな採用マッチングイベント。長野・福岡で開催中。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#c"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
            >
              次回イベントを見る
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#c"
              className="inline-flex items-center rounded-full border-2 border-orange-300 px-7 py-3.5 font-bold text-orange-700 transition hover:bg-orange-100"
            >
              企業様はこちら
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex gap-8"
          >
            {[
              { value: "100%", label: "企業満足度" },
              { value: "4回", label: "開催実績" },
              { value: "2名", label: "採用実績" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-white/70 px-5 py-3 shadow-sm">
                <div className="text-2xl font-extrabold text-orange-600">{s.value}</div>
                <div className="mt-0.5 text-xs font-bold text-[#6b4f3a]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* rounded soft card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-orange-900/10"
        >
          <div className="relative h-56">
            <Image src="/images/event-photo.jpg" alt="" fill className="object-cover" />
            <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
              参加者募集中
            </span>
          </div>
          <div className="p-6 text-[#3d2817]">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-500">Next Event</p>
            <h3 className="mt-1 text-xl font-extrabold">第4回 Table Match 福岡</h3>
            <div className="mt-4 space-y-3 text-sm font-medium">
              <Row icon={<Calendar className="h-4 w-4 text-orange-500" />} label="2026年6月20日（土）" />
              <Row icon={<Clock className="h-4 w-4 text-orange-500" />} label="17:00〜21:00" />
              <Row icon={<MapPin className="h-4 w-4 text-orange-500" />} label="四季の色（福岡市）" />
            </div>
            <a
              href="#c"
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-orange-500 py-3 font-bold text-white"
            >
              参加申し込み <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Row({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/5">{icon}</span>
      <span>{label}</span>
    </div>
  )
}
