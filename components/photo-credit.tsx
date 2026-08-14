import { cn } from "@/lib/utils"

const INSTAGRAM_URL = "https://www.instagram.com/pantheon.works/?hl=ja"

export function PhotoCredit({ className = "", linked = true }: { className?: string; linked?: boolean }) {
  const classes = cn(
    "absolute bottom-2 right-2 z-20 bg-foreground/80 px-2 py-1 font-mono text-[9px] font-black leading-none tracking-wide text-white backdrop-blur-sm transition sm:text-[10px]",
    linked && "hover:bg-action-orange",
    className,
  )

  if (!linked) return <span className={classes}>PHOTO @pantheon.works</span>

  return <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={classes} aria-label="撮影者 pantheon.works のInstagramを開く">PHOTO @pantheon.works ↗</a>
}
