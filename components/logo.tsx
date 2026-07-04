import { cn } from "@/lib/utils"

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-serif font-bold tracking-tight leading-none",
        className,
      )}
    >
      <span
        aria-hidden
        className="inline-block h-2.5 w-2.5 rounded-full bg-primary translate-y-[-1px]"
      />
      <span className={light ? "text-background" : "text-foreground"}>
        Table<span className="text-primary">.</span>Match
      </span>
    </span>
  )
}
