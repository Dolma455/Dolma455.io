"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FlowButton } from "@/components/ui/flow-button"

const EASE: [number, number, number, number] = [0.43, 0.13, 0.23, 0.96]

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

const numberVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 40,
    y: 15,
    rotate: direction * 5,
  }),
  visible: {
    opacity: 0.75,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: EASE },
  },
}

const ghostVariants = {
  hidden: { scale: 0.8, opacity: 0, y: 15, rotate: -5 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 text-foreground overflow-hidden">
      {/* Radial purple glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(168,85,247,0.1),transparent)]"
      />

      <AnimatePresence mode="wait">
        <motion.div
          className="text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* 4 — Ghost — 4 */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12">
            <motion.span
              className="text-[80px] md:text-[128px] font-black tracking-tighter leading-none text-foreground select-none"
              variants={numberVariants}
              custom={-1}
            >
              4
            </motion.span>

            <motion.div
              initial="hidden"
              animate={{
                scale: 1,
                opacity: 1,
                y: [-6, 6],
                rotate: 0,
              }}
              transition={{
                scale: { duration: 0.6, ease: EASE },
                opacity: { duration: 0.6, ease: EASE },
                rotate: { duration: 0.6, ease: EASE },
                y: {
                  duration: 2.2,
                  ease: "easeInOut" as const,
                  repeat: Infinity,
                  repeatType: "reverse" as const,
                  delay: 0.6,
                },
              }}
              className="drop-shadow-[0_0_24px_rgba(168,85,247,0.4)]"
            >
              <Image
                src="https://xubohuah.github.io/xubohua.top/Group.png"
                alt="Ghost"
                width={120}
                height={120}
                className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain select-none"
                draggable={false}
                priority
              />
            </motion.div>

            <motion.span
              className="text-[80px] md:text-[128px] font-black tracking-tighter leading-none text-foreground select-none"
              variants={numberVariants}
              custom={1}
            >
              4
            </motion.span>
          </div>

          {/* Headline */}
          <motion.h1
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 select-none"
            variants={itemVariants}
          >
            Boo!{" "}
            <span className="text-primary">Page missing!</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-base md:text-lg text-muted-foreground mb-10 max-w-sm mx-auto select-none"
            variants={itemVariants}
          >
            Whoops! This page must be a ghost — it&apos;s not here!
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.04, transition: { duration: 0.25 } }}
            className="flex justify-center"
          >
            <Link href="/">
              <FlowButton text="Find shelter" />
            </Link>
          </motion.div>

          {/* Quick nav */}
          <motion.div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3" variants={itemVariants}>
            {[
              { label: "Services", href: "/#services" },
              { label: "Projects", href: "/#portfolio" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/#contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
