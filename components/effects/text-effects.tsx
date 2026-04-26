"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  from?: string
  to?: string
  delay?: number
}

export function GradientText({ children, from = "#a78bcc", to = "#ff6b9d", delay = 0 }: GradientTextProps) {
  return (
    <motion.span
      initial={{ backgroundPosition: "0% center" }}
      animate={{ backgroundPosition: ["0% center", "100% center", "0% center"] }}
      transition={{ duration: 3, repeat: Infinity, delay }}
      style={{
        backgroundImage: `linear-gradient(90deg, ${from}, ${to}, ${from})`,
        backgroundSize: "200% auto",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      className="font-bold"
    >
      {children}
    </motion.span>
  )
}

interface ShimmerTextProps {
  children: ReactNode
  delay?: number
}

export function ShimmerText({ children, delay = 0 }: ShimmerTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0.5, textShadow: "0 0 10px rgba(167, 139, 204, 0)" }}
      animate={{
        opacity: [0.5, 1, 0.5],
        textShadow: [
          "0 0 10px rgba(167, 139, 204, 0)",
          "0 0 20px rgba(167, 139, 204, 0.8)",
          "0 0 10px rgba(167, 139, 204, 0)",
        ],
      }}
      transition={{ duration: 2.5, repeat: Infinity, delay }}
      className="inline-block"
    >
      {children}
    </motion.span>
  )
}

interface GlitchTextProps {
  children: ReactNode
  delay?: number
}

export function GlitchText({ children, delay = 0 }: GlitchTextProps) {
  return (
    <motion.span
      animate={{
        x: [0, -2, 2, -2, 0],
        y: [0, 2, -2, 2, 0],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 3,
        delay,
      }}
      className="inline-block"
    >
      {children}
    </motion.span>
  )
}

interface RevealTextProps {
  children: string
  delay?: number
}

export function RevealText({ children, delay = 0 }: RevealTextProps) {
  const words = children.split(" ")

  return (
    <span>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + idx * 0.05,
            duration: 0.4,
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
