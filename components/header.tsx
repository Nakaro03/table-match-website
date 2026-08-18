"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Logo } from "./logo"

const navItems = [
  { label: "企画", href: "/projects" },
  { label: "活動レポート", href: "/topics" },
  { label: "お知らせ", href: "/news" },
  { label: "団体紹介", href: "/about" },
  { label: "運営メンバー", href: "/team" },
  { label: "撮影者", href: "/photographer" },
  { label: "企業の方へ", href: "/for-companies" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  return <><header className="fixed inset-x-0 top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
      <Link href="/" aria-label="Table Match ホーム"><Logo className="text-lg sm:text-xl" /></Link>
      <nav className="hidden items-center gap-4 lg:flex xl:gap-5">{navItems.map((item) => <Link key={item.href} href={item.href} className="font-mono text-[11px] font-bold tracking-wide hover:text-primary xl:text-xs">{item.label}</Link>)}</nav>
      <div className="hidden lg:block"><Link href="/projects" className="inline-flex items-center gap-2 bg-action-orange px-5 py-3 text-sm font-black text-white hover:bg-foreground">参加・応募する<ArrowUpRight className="h-4 w-4" /></Link></div>
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="メニュー" className="p-2 lg:hidden">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t-2 border-foreground bg-background p-4 lg:hidden">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-border px-2 py-3 font-mono text-sm font-bold">{item.label}</Link>)}<Link href="/projects" onClick={() => setOpen(false)} className="mt-4 block bg-action-orange px-5 py-3 text-center font-bold text-white">参加・応募する</Link></nav>}
  </header><Link href="/projects" className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-between border-2 border-foreground bg-action-orange px-5 py-3 font-black text-white shadow-[4px_4px_0_#111] lg:hidden">イベント・募集を見る<ArrowUpRight className="h-5 w-5" /></Link></>
}
