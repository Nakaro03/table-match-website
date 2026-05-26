import Link from "next/link"
import { Logo } from "./logo"
import { Instagram, Mail, MapPin } from "lucide-react"

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
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <Logo className="h-8 w-auto text-background mb-4" />
            <p className="text-background/70 text-sm mb-6">
              学生と経営者が本音で語り合えるカジュアルな採用マッチングイベントを運営する学生団体です。
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/table_match_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:tablematch.info@gmail.com"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="メール"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-background mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">お問い合わせ</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4 mt-1 shrink-0" />
                <a href="mailto:tablematch.info@gmail.com" className="hover:text-background transition-colors">
                  tablematch.info@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span>長野県諏訪地域 / 福岡市</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-center text-sm text-background/50">
            &copy; {new Date().getFullYear()} Table Match. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
