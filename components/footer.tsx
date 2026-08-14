import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Instagram, Mail, MapPin } from "lucide-react"

const navLinks = [
  ["PROJECT", "/projects"], ["TOPICS", "/topics"], ["NEWS", "/news"], ["ABOUT", "/about"],
  ["TEAM", "/team"], ["FOR COMPANIES", "/for-companies"], ["PRIVACY", "/privacy"], ["ADMIN", "/admin/login"],
]

export function Footer() {
  return <footer className="border-t-2 border-white bg-foreground pb-20 text-white lg:pb-0"><div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20"><div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]"><div><Link href="/" className="flex items-center gap-3 text-2xl font-black"><Image src="/icon.svg" alt="" width={38} height={38} className="h-10 w-10 bg-white p-1" />Table Match</Link><p className="mt-5 max-w-md text-sm font-bold leading-7 text-white/65">学生と地域企業の経営者が、同じテーブルで本音を交わし、次の挑戦を見つける場をつくっています。</p><p className="mt-8 font-mono text-4xl font-black leading-none text-white/10 sm:text-6xl">SAME TABLE.<br />NEXT CHALLENGE.</p></div><nav className="grid grid-cols-2 gap-x-4 gap-y-3 font-mono text-xs font-black">{navLinks.map(([label, href]) => <Link key={href} href={href} className="flex items-center justify-between border-b border-white/25 py-2 hover:text-action-yellow">{label}<ArrowUpRight className="h-3 w-3" /></Link>)}</nav><div className="space-y-4 text-sm"><a href="mailto:tablematch.info@gmail.com" className="flex items-center gap-3 font-bold hover:text-action-yellow"><Mail className="h-4 w-4" />tablematch.info@gmail.com</a><p className="flex items-center gap-3 text-white/70"><MapPin className="h-4 w-4 text-action-yellow" />長野県諏訪地域 / 福岡市</p><a href="https://www.instagram.com/table_match_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold hover:text-action-yellow"><Instagram className="h-4 w-4" />Instagram</a></div></div><div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-white/25 pt-6 text-xs text-white/50"><p>© {new Date().getFullYear()} Table Match</p><p>学生と企業を、対話でつなぐ。</p></div></div></footer>
}
