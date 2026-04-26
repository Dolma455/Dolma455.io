"use client"

import type React from "react"

import { cn } from "@/lib/utils"

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement>

export function SpotlightCard({ className, children, ...props }: SpotlightCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-16 left-0 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
