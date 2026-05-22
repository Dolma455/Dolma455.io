"use client"

import React, { type MouseEvent, useRef, useState } from "react"
import { motion, useSpring } from "framer-motion"
import { Search, Palette, Code2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/effects/text-effects"

interface ServiceItem {
  title: string
  description: string
  icon: any
  category: string
  img: string
  highlights: string[]
  accent: string
}

export function Services() {
  const [img, setImg] = useState<{ src: string | null; alt: string; opacity: number }>({
    src: null,
    alt: "",
    opacity: 0,
  })

  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const allServices: ServiceItem[] = [
    {
      title: "UI Design",
      description: "Clean, modern interfaces with strong hierarchy, visual balance, and scalable components.",
      icon: Palette,
      category: "Design",
      img: "/images/ui_design.png",
      accent: "primary",
      highlights: ["Design systems", "High-fidelity screens", "Responsive layouts"],
    },
    {
      title: "UX Research",
      description: "User-focused discovery to reveal real problems, validate ideas, and improve product decisions.",
      icon: Search,
      category: "Design",
      img: "/images/ux_research.png",
      accent: "accent",
      highlights: ["Interviews & insights", "Journey mapping", "Usability testing"],
    },
    {
      title: "App Development",
      description: "Production-ready Flutter apps that are fast, stable, and aligned with product goals.",
      icon: Code2,
      category: "Development",
      img: "/images/app_development.png",
      accent: "primary",
      highlights: ["Flutter architecture", "API integration", "Performance tuning"],
    },
  ]

  const spring = {
    stiffness: 150,
    damping: 18,
    mass: 0.1,
  }

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  }

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const { clientX, clientY } = e
    const relativeX = clientX - containerRect.left
    const relativeY = clientY - containerRect.top

    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2)
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2)
  }

  const handleImageInteraction = (item: ServiceItem, opacity: number) => {
    setImg({ src: item.img, alt: item.title, opacity })
  }

  return (
    <section id="services" className="relative overflow-hidden py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl leading-[1] md:text-6xl font-bold mb-6">
            <span className="block">
              <GradientText>Core Services</GradientText>
            </span>
          </h2>
          <p className="text-lg text-black dark:text-white">
            Three focused capabilities that cover product experience from idea to launch.
          </p>
        </motion.div>

        {/* Desktop View (Interactive Image Reveal) */}
        <div 
          ref={containerRef} 
          onMouseMove={handleMove} 
          className="hidden lg:block relative w-full max-w-5xl mx-auto border-t border-b border-neutral-200/20 dark:border-neutral-800/60"
        >
          {allServices.map((item) => {
            const isPrimary = item.accent === "primary"
            return (
              <div
                key={item.title}
                onMouseEnter={() => handleImageInteraction(item, 1)}
                onMouseMove={() => handleImageInteraction(item, 1)}
                onMouseLeave={() => handleImageInteraction(item, 0)}
                className="group w-full py-10 cursor-pointer flex justify-between items-center border-b last:border-none border-neutral-200/20 dark:border-neutral-800/60"
              >
                <div className="flex items-center">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="text-black dark:text-white mt-2 max-w-xl text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3 text-right">
                  <Badge
                    className={`rounded-full text-xs px-3.5 py-1 ${
                      isPrimary
                        ? "border-primary/30 bg-primary/15 text-primary"
                        : "border-accent/30 bg-accent/15 text-accent"
                    }`}
                  >
                    {item.category}
                  </Badge>
                  <div className="flex gap-2">
                    {item.highlights.slice(0, 2).map((highlight) => (
                      <span key={highlight} className="text-xs text-muted-foreground/80 bg-neutral-100/5 dark:bg-neutral-800/40 border border-neutral-200/10 px-2.5 py-0.5 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}

          {img.src && (
            <motion.img
              ref={imageRef}
              src={img.src}
              alt={img.alt}
              className="w-[320px] h-[240px] rounded-2xl object-cover absolute top-0 left-0 transition-opacity duration-300 ease-in-out pointer-events-none shadow-2xl border-2 border-neutral-200/20 dark:border-neutral-800/40 z-50 bg-background"
              style={{
                x: imagePos.x,
                y: imagePos.y,
                opacity: img.opacity,
              }}
            />
          )}
        </div>

        {/* Mobile/Tablet View (Static Beautiful Cards) */}
        <div className="lg:hidden grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {allServices.map((item, idx) => {
            const isPrimary = item.accent === "primary"
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="relative overflow-hidden rounded-3xl border border-neutral-200/20 dark:border-neutral-800/60 bg-neutral-900/10 dark:bg-neutral-950/20 backdrop-blur-md p-6 flex flex-col justify-between h-[420px]"
              >
                <div>
                  <div className="relative h-48 overflow-hidden rounded-2xl border border-neutral-200/10 dark:border-neutral-800/40 mb-6">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-black dark:text-white leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.slice(0, 2).map((highlight) => (
                      <span key={highlight} className="text-[11px] text-muted-foreground bg-neutral-100/5 dark:bg-neutral-800/40 px-2.5 py-0.5 rounded-full border border-neutral-200/10">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Badge
                    className={`rounded-full text-[11px] ${
                      isPrimary
                        ? "border-primary/30 bg-primary/15 text-primary"
                        : "border-accent/30 bg-accent/15 text-accent"
                    }`}
                  >
                    {item.category}
                  </Badge>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
