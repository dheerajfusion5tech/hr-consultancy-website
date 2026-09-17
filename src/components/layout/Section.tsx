import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("relative", className)}>
      {children}
    </section>
  )
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto max-w-6xl px-4 sm:px-6", className)}>
      {children}
    </div>
  )
}
