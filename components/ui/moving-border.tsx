"use client"

import React from "react"
import { motion } from "framer-motion"

interface MovingBorderProps {
  children: React.ReactNode
  borderRadius?: string
  duration?: number
  className?: string
  containerClassName?: string
  [key: string]: any
}

export const MovingBorder: React.FC<MovingBorderProps> = ({
  children,
  borderRadius = "9999px",
  duration = 2000,
  className = "",
  containerClassName = "",
  ...props
}) => {
  return (
    <div className={`relative inline-block ${containerClassName}`}>
      {/* Animated moving border background */}
      <motion.div
        className="absolute inset-0"
        style={{
          borderRadius: borderRadius,
          background: `conic-gradient(
            from 0deg,
            var(--color-primary),
            var(--color-accent),
            var(--color-primary)
          )`,
          padding: "2px",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner content layer */}
      <div
        className={`relative rounded-full bg-background ${className}`}
        style={{ borderRadius: borderRadius }}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

