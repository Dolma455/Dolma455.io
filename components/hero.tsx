"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
  
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 mb-8">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                  Thoughtful Design
                </span>
                <span className="block text-foreground">
                  <span className="font-heading text-accent">&</span> Powerful Code
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed pt-2"
            >
              I create digital products that blend elegant design with robust engineering. From concept to launch, every detail matters.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-primary hover:bg-primary/90 transition-colors text-sm"
              >
                <Link href="#about">Explore</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 rounded-full border-primary/30 hover:bg-primary/5 transition-colors text-sm"
              >
                <a href="/resume.pdf" download="Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:flex justify-end items-center mt-12"
          >
            {/* Animated gradient orbs - Aesthetic colors */}
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-pink-700/12 to-purple-700/12 rounded-full blur-3xl"
            />
        

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Outer glow - Minimal */}
              <div className="absolute -inset-8 bg-gradient-to-r from-gray-500/10 via-gray-400/5 to-gray-500/10 rounded-3xl blur-3xl" />

              {/* Premium Aesthetic Frame */}
              <div
                className="relative rounded-3xl border-2 border-primary/20 bg-card/85 p-8 shadow-2xl backdrop-blur-2xl dark:border-pink-200/20 dark:bg-gradient-to-br dark:from-black dark:via-slate-950 dark:to-black"
                style={{ width: "420px", boxShadow: "0 30px 100px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.08)" }}
              >

                {/* Top decorative bar */}
                <div className="absolute top-0 left-0 right-0 h-12 rounded-t-3xl border-b border-primary/25 bg-gradient-to-r from-card/95 via-card/80 to-card/95 dark:border-pink-300/30 dark:from-black/80 dark:via-black/60 dark:to-black/80 flex items-center justify-between px-6">
                  <div className="flex gap-2">
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 rounded-full bg-rose-400 shadow-lg shadow-rose-500/60" />
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="w-3 h-3 rounded-full bg-pink-400 shadow-lg shadow-pink-500/60" />
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} className="w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-500/60" />
                  </div>
                </div>

                {/* Image container - Circular */}
                <div className="relative mx-auto mt-10 mb-8 w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-br from-pink-400/60 to-purple-400/60 bg-gradient-to-br from-gray-200/20 to-gray-600/20 shadow-xl shadow-pink-200/20">
                  <Image
                    src="/image/1.jpg"
                    alt="Designer and Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                  {/* Premium overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/25 via-transparent to-transparent rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/15 via-transparent to-purple-400/15 rounded-full" />
                </div>

                {/* Text area - Enhanced */}
                <div className="text-center space-y-3 mb-4">
                  <motion.p
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300"
                  >
                    UI/UX Designer | Flutter Developer
                  </motion.p>
                </div>

                {/* Gradient line */}
                <div className="h-1.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full mb-5" />

       
              </div>

              {/* Floating sparkle elements */}
              <motion.div
                animate={{ y: [-25, 5, -25], x: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 -right-12 text-4xl"
              >
                💗
              </motion.div>
              <motion.div
                animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-16 -left-12 text-3xl"
              >
                💗
              </motion.div>
              <motion.div
                animate={{ y: [-15, 10, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-8 text-4xl"
              >
                🦋
              </motion.div>

              {/* Floating badge top - Crafted with Love */}
              <motion.div
                animate={{ y: [-20, 0, -20], x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-8 rounded-2xl border border-primary/30 bg-card/95 px-5 py-3 shadow-lg shadow-primary/10 dark:border-rose-600/30 dark:bg-gradient-to-br dark:from-rose-950 dark:via-pink-950 dark:to-red-950 dark:shadow-gray-900/30"
              >
                <div className="text-xs font-bold text-foreground dark:text-white space-y-1">
                  <div>Crafted with</div>
                  <div className="text-white/95">Love & Design</div>
                </div>
              </motion.div>

              {/* Floating badge bottom */}
              <motion.div
                animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-8 rounded-2xl border border-primary/35 bg-card/95 px-4 py-3 shadow-lg shadow-primary/10 backdrop-blur-sm dark:border-purple-700/60 dark:bg-gradient-to-br dark:from-purple-950 dark:via-fuchsia-950 dark:to-pink-950 dark:shadow-gray-900/30"
              >
                <div className="flex items-center gap-2 flex-col">
                  <span className="text-xs font-semibold text-foreground dark:text-white">
                    Creative Soul
                  </span>
                </div>
              </motion.div>

              {/* Corner accent */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-accent/30 rounded-br-3xl" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center pt-4"
        >
          <Link href="#about" className="group">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary/60 group-hover:text-primary transition-colors"
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>

  )
}
