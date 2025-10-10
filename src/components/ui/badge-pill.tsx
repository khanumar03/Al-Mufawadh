import type React from "react"
import { cn } from "@/lib/utils"

interface BadgePillProps {
  children: React.ReactNode
  className?: string
}

export function BadgePill({ children, className }: BadgePillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-[var(--badge-bg)] px-4 py-2 text-sm text-foreground",
        className,
      )}
    >
      {children}
    </div>
  )
}
