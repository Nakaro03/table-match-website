"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react"

const navLinks = [
  { label: "コンセプト", href: "#concept" },
  { label: "イベント", href: "#events" },
  { label: "実績", href: "#achievements" },
  { label: "運営チーム", href: "#team" },
  { label: "企業様向け", href: "/for-companies" },
  { label: "お問い合わせ", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5"
          >
            <p className="font-serif text-2xl font-bold">
              Table<span className="text-primary">.</span>Match
            </p>
            <p className="mt-4 max-w-sm text-sm text-background/70 leading-relaxed">
              学生と経営者が本音で語り合える、カジュアルな採用マッチングイベントを運営する学生団体です。
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/table_match_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:tablematch.info@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
                aria-label="メール"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h4 className="label-eyebrow text-[0.65rem] text-background/50 mb-4">Menu</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-background/80 transition-colors hover:text-background"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4"
          >
            <h4 className="label-eyebrow text-[0.65rem] text-background/50 mb-4">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:tablematch.info@gmail.com"
                className="flex items-center gap-3 text-sm text-background/80 transition-colors hover:text-background"
              >
                <Mail className="h-4 w-4 text-primary" />
                tablematch.info@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-background/80">
                <MapPin className="h-4 w-4 text-primary" />
                長野県諏訪地域 / 福岡市
              </div>
            </div>
          </motion.div>
        </div>

        {/* Big wordmark */}
        <div className="mt-16 marquee-mask overflow-hidden border-t border-background/15 pt-10">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((n) => (
              <span
                key={n}
                className="mx-6 font-serif text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-background/10 whitespace-nowrap"
              >
                Table Match — 学生 × 経営者 —
              </span>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-background/50">
          &copy; {new Date().getFullYear()} Table Match. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
