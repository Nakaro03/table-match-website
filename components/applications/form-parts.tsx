import type { ReactNode } from "react"

export const inputClass =
  "mt-2 w-full rounded-none border-2 border-foreground bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"

export const textareaClass = `${inputClass} min-h-28 resize-y`

export function Field({
  label,
  name,
  required = false,
  hint,
  error,
  children,
}: {
  label: string
  name: string
  required?: boolean
  hint?: string
  error?: string[]
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold text-foreground">
        {label}
        {required && <span className="ml-2 bg-action-orange px-1.5 py-0.5 text-[10px] text-white">必須</span>}
      </label>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
      {children}
      {error?.[0] && <p className="mt-1 text-xs font-bold text-destructive">{error[0]}</p>}
    </div>
  )
}

export function SectionHeading({ number, title, description }: { number: string; title: string; description?: string }) {
  return (
    <div className="border-b-2 border-foreground pb-4">
      <div className="flex items-end gap-4">
        <span className="font-mono text-4xl font-bold leading-none text-primary">{number}</span>
        <h2 className="text-xl font-black tracking-tight sm:text-2xl">{title}</h2>
      </div>
      {description && <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>}
    </div>
  )
}

export function CheckboxCard({
  name,
  value,
  children,
  required,
}: {
  name: string
  value?: string
  children: ReactNode
  required?: boolean
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 border border-foreground/25 bg-background p-3 text-sm transition hover:border-primary">
      <input
        type="checkbox"
        name={name}
        value={value}
        required={required}
        className="mt-1 h-4 w-4 accent-primary"
      />
      <span className="leading-6">{children}</span>
    </label>
  )
}
