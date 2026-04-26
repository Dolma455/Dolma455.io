"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlowingCardProps {
  children: ReactNode
  className?: string
}

export function GlowingCard({ children, className }: GlowingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-6 backdrop-blur transition-all duration-300",
        className
      )}
    >
      {/* Animated gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 100 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none"
      />

      {/* Glowing effect */}
      <motion.div
        animate={{
          opacity: [0, 0.5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute inset-0 bg-radial from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
