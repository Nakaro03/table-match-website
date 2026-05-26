"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Logo } from "./logo"
import { Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react"

const footerLinks = [
  {
    title: "ナビゲーション",
    links: [
      { label: "コンセプト", href: "#concept" },
      { label: "イベント", href: "#events" },
      { label: "実績", href: "#achievements" },
      { label: "企業様向け", href: "#for-companies" },
      { label: "運営チーム", href: "#team" },
      { label: "お問い合わせ", href: "#contact" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Logo className="h-8 w-auto text-primary mb-4" />
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed max-w-sm">
                学生と経営者が本音で語り合えるカジュアルな採用マッチングイベントを運営する学生団体です。
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/table_match_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="mailto:tablematch.info@gmail.com"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="メール"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                        >
                          {link.label}
                          <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold text-foreground mb-4">お問い合わせ</h4>
              <div className="space-y-4">
                <a 
                  href="mailto:tablematch.info@gmail.com" 
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="pt-1.5">tablematch.info@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="pt-1.5">長野県諏訪地域 / 福岡市</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Table Match. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
