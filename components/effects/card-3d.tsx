"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { ReactNode } from "react"

interface Card3DProps {
  children: ReactNode
  className?: string
}

export function Card3D({ children, className = "" }: Card3DProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    x.set(e.clientX - rect.left - centerX)
    y.set(e.clientY - rect.top - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative cursor-pointer ${className}`}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          background:
            "radial-gradient(circle at 20% 50%, rgba(167, 139, 204, 0.1), transparent)",
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}
