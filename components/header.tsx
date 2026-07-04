"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Logo } from "./logo"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "コンセプト", href: "/#concept", num: "01" },
  { label: "イベント", href: "/#events", num: "02" },
  { label: "実績", href: "/#achievements", num: "03" },
  { label: "運営チーム", href: "/#team", num: "04" },
  { label: "企業様", href: "/for-companies", num: "05" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="group">
            <Logo className="text-lg sm:text-xl transition-transform group-hover:-translate-y-0.5" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="mr-1 text-[0.6rem] font-mono text-primary/70 align-super">
                  {item.num}
                </span>
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary"
            >
              お問い合わせ
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-2 py-3.5 text-base font-medium text-foreground/80 hover:text-foreground border-b border-border/60 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-xs font-mono text-primary/70">{item.num}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
                >
                  お問い合わせ
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
