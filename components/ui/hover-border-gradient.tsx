"use client"

import React from "react"

interface HoverBorderGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  containerClassName?: string
  className?: string
  as?: React.ElementType
}

export const HoverBorderGradient = React.forwardRef<HTMLElement, HoverBorderGradientProps>(
  ({ className = "", children, containerClassName = "", as: Component = "button", ...props }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={`group relative inline-flex h-auto w-auto items-center justify-center rounded-full bg-white/20 px-4 py-2 transition-all duration-500 ${containerClassName}`}
        {...props}
      >
        {/* Gradient border background */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: "conic-gradient(from 0deg, var(--color-primary), var(--color-accent), var(--color-primary))",
            padding: "2px",
          }}
        />

        {/* Inner content */}
        <div
          className={`relative rounded-full px-4 py-2 text-sm font-medium ${className}`}
        >
          {children}
        </div>
      </Component>
    )
  }
)

HoverBorderGradient.displayName = "HoverBorderGradient"
