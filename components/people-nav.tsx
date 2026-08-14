import Link from "next/link"
import { Camera, Users } from "lucide-react"

export function PeopleNav({ active }: { active: "team" | "photographer" }) {
  const items = [
    { key: "team", href: "/team", label: "運営メンバー", sublabel: "TEAM", Icon: Users },
    { key: "photographer", href: "/photographer", label: "撮影者", sublabel: "PHOTOGRAPHER", Icon: Camera },
  ] as const

  return (
    <nav aria-label="運営者と撮影者" className="grid border-b-2 border-foreground sm:grid-cols-2">
      {items.map(({ key, href, label, sublabel, Icon }) => (
        <Link
          key={href}
          href={href}
          aria-current={active === key ? "page" : undefined}
          className={`flex items-center justify-between border-foreground px-5 py-5 transition sm:px-8 ${key === "team" ? "border-b-2 sm:border-b-0 sm:border-r-2" : ""} ${active === key ? "bg-action-yellow" : "bg-paper hover:bg-white"}`}
        >
          <span>
            <span className="block font-mono text-[10px] font-black tracking-[.2em] text-primary">{sublabel}</span>
            <span className="mt-1 block text-xl font-black">{label}</span>
          </span>
          <Icon className="h-7 w-7" strokeWidth={2.5} />
        </Link>
      ))}
    </nav>
  )
}
