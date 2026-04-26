"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { projects } from "@/lib/projects"
import { GradientText } from "./effects/text-effects"
import { Badge } from "./ui/badge"

export function Portfolio() {
  const displayProjects = projects.slice(0, 6)

  // Define grid layout: 1 large (left) + 2 small (right) pattern
  const getGridClass = (idx: number) => {
    const positionInGroup = idx % 3
    if (positionInGroup === 0) {
      return "lg:col-span-2 lg:row-span-2" // Large - left side
    }
    return "lg:col-span-1 lg:row-span-1" // Small - right side
  }

  const getImageHeight = (idx: number) => {
    const positionInGroup = idx % 3
    if (positionInGroup === 0) return "h-96" // Large card
    return "h-44" // Small cards
  }

  return (
    <section id="portfolio" className="relative overflow-hidden py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
           <Badge className="rounded-full border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary mb-4 inline-block">
            💼 My Works
          </Badge>
          <h2 className="text-5xl leading-[1] md:text-6xl font-bold mb-6">
                      <span className="block"><GradientText>Projects</GradientText></span>
                    </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work across design and development.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-max gap-6 max-w-7xl mx-auto">
          {displayProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${getGridClass(idx)} col-span-1`}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="group relative overflow-hidden rounded-2xl border border-primary/20 hover:border-primary/40 transition-all cursor-pointer h-full">
                  {/* Image */}
                  <div className={`relative ${getImageHeight(idx)} overflow-hidden bg-muted`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-background/50 backdrop-blur">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.summary}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      View
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
