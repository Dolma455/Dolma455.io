"use client"

import { motion } from "framer-motion"

interface ShootingStarsProps {
  className?: string
}

export function ShootingStars({ className = "" }: ShootingStarsProps) {
  const stars = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    top: (i * 9) % 100,
    left: ((i * 14) % 130) - 20,
    duration: 3 + (i % 4) * 0.5,
    delay: (i % 7) * 0.6,
  }))

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute h-px w-24 rounded-full bg-gradient-to-r from-transparent via-primary/80 to-transparent"
          style={{ top: `${star.top}%`, left: `${star.left}%` }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: [0, 1000], y: [0, 160], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 1.6,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
