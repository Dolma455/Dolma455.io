"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"

interface WobbleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  containerClassName?: string
}

export const WobbleCard = React.forwardRef<HTMLDivElement, WobbleCardProps>(
  ({ children, containerClassName = "", className = "", ...props }, ref) => {
    const divRef = useRef<HTMLDivElement>(null)
    const [wobble, setWobble] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return

      const div = divRef.current
      const rect = div.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      setWobble({
        x: x * 10,
        y: y * 10,
      })
    }

    const handleMouseLeave = () => {
      setWobble({ x: 0, y: 0 })
    }

    return (
      <motion.div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          x: wobble.x,
          y: wobble.y,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className={`relative overflow-hidden rounded-2xl ${containerClassName}`}
        {...props}
      >
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at 20% 50%, rgba(66, 133, 244, 0.1) 0%, transparent 50%)",
            }}
          />
          <div className={className}>
            {children}
          </div>
        </div>
      </motion.div>
    )
  }
)

WobbleCard.displayName = "WobbleCard"
