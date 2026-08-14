import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-sans font-black tracking-tight leading-none",
        className,
      )}
    >
      <Image
        src="/icon.svg"
        alt="Table Match"
        width={28}
        height={28}
        className="h-7 w-7"
        priority
      />
      <span className={light ? "text-background" : "text-foreground"}>
        <span className={light ? "text-background" : "text-primary"}>Table</span>{" "}<span className={light ? "text-background" : "text-action-orange"}>Match</span>
      </span>
    </span>
  )
}
