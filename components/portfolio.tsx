"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  ArrowUpRight,
  ChevronDown,
  Infinity,
  TrendingUp,
  UserCheck,
  Crown,
  Globe,
  Smartphone,
  Building2,
  Leaf,
  Users,
  FileText
} from "lucide-react"
import Image from "next/image"
import { projects } from "../lib/projects"
import { cn } from "../lib/utils"
import { GradientText } from "./effects/text-effects"

export function Portfolio() {
  const [openProject, setOpenProject] = useState<string | null>(projects[0]?.slug ?? null)
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  const toggleProject = (slug: string) => {
    setOpenProject(openProject === slug ? null : slug)
  }

  // Icons custom mapping for projects
  const getProjectIcon = (slug: string) => {
    switch (slug) {
      case "self-service-app":
        return <Smartphone className="h-5 w-5 text-sky-500 dark:text-sky-400" />
      case "naasa-website":
        return <Globe className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
      case "connect-infinity":
        return <Infinity className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
      case "connect-infinity-product-page":
        return <Infinity className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
      case "naasa-x":
        return <TrendingUp className="h-5 w-5 text-orange-500 dark:text-orange-400" />
      case "naasa-kyc":
        return <UserCheck className="h-5 w-5 text-blue-500 dark:text-blue-400" />
      case "nepal-stock-house-website":
        return <Building2 className="h-5 w-5 text-amber-500 dark:text-amber-400" />
      case "crm":
        return <Users className="h-5 w-5 text-fuchsia-500 dark:text-fuchsia-400" />
      case "agrilink":
        return <Leaf className="h-5 w-5 text-lime-500 dark:text-lime-400" />
      case "loyaledge":
        return <Crown className="h-5 w-5 text-pink-500 dark:text-pink-400" />
      default:
        return <Globe className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getProjectIconBg = (slug: string) => {
    switch (slug) {
      case "self-service-app":
        return "bg-sky-500/10 border-sky-500/20"
      case "naasa-website":
        return "bg-emerald-500/10 border-emerald-500/20"
      case "connect-infinity":
        return "bg-indigo-500/10 border-indigo-500/20"
      case "connect-infinity-product-page":
        return "bg-indigo-500/10 border-indigo-500/20"
      case "naasa-x":
        return "bg-orange-500/10 border-orange-500/20"
      case "naasa-kyc":
        return "bg-blue-500/10 border-blue-500/20"
      case "nepal-stock-house-website":
        return "bg-amber-500/10 border-amber-500/20"
      case "crm":
        return "bg-fuchsia-500/10 border-fuchsia-500/20"
      case "agrilink":
        return "bg-lime-500/10 border-lime-500/20"
      case "loyaledge":
        return "bg-pink-500/10 border-pink-500/20"
      default:
        return "bg-muted/40 border-border/40"
    }
  }

  return (
    <section id="portfolio" className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl leading-[1] md:text-6xl font-bold mb-6">
            <span className="block">
              <GradientText>Selected Projects</GradientText>
            </span>
          </h2>
          <p className="text-lg text-black dark:text-white">
            A curated collection of digital products, trading platforms, and custom applications designed to solve real-world problems.
          </p>
        </motion.div>

        {/* Accordion Card Container */}
        <div className="border border-border/40 rounded-3xl backdrop-blur-md relative w-full">
          <div className="flex flex-col">
            {displayedProjects.map((project, idx) => {
              const isOpen = openProject === project.slug
              const isFirst = idx === 0
              const isLast = idx === displayedProjects.length - 1

              return (
                <div
                  key={project.slug}
                  className={cn(
                    "border-b border-border/40 transition-colors duration-300",
                    isOpen ? "bg-muted/5" : "hover:bg-muted/5",
                    isFirst && "rounded-t-[22px]",
                    isLast && "border-b-0 rounded-b-[22px]"
                  )}
                >
                  {/* Row Header - Split into 80px Left Icon Gutter & 1fr Right Details */}
                  <div
                    onClick={() => toggleProject(project.slug)}
                    className="grid grid-cols-[80px_1fr] cursor-pointer select-none group"
                  >
                    {/* Left Column (Icon Gutter) */}
                    <div className="flex items-center justify-center border-r border-border/40 py-8 shrink-0">
                      <div className={cn(
                        "h-12 w-12 flex items-center justify-center rounded-full border shadow-sm transition-all duration-300 group-hover:scale-105 shrink-0",
                        getProjectIconBg(project.slug)
                      )}>
                        {getProjectIcon(project.slug)}
                      </div>
                    </div>

                    {/* Right Column (Details) */}
                    <div className="flex items-center justify-between py-8 pl-6 pr-6 md:pr-8">
                      <div>
                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 font-medium">
                          {project.year} {project.slug === "connect-infinity" || project.slug === "naasa-x" ? "— ∞" : ""}
                        </p>
                      </div>

                      {/* External Link & Chevron */}
                      <div className="flex items-center gap-4 text-muted-foreground">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-foreground p-1 transition-colors hover:scale-110"
                            title="Live Demo"
                          >
                            <ArrowUpRight className="h-5 w-5" />
                          </a>
                        )}
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="p-1"
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Row Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-[80px_1fr]">
                          {/* Left Column Empty space to align vertical divider */}
                          <div className="border-r border-border/40 shrink-0" />

                          {/* Right Column Expanded Details */}
                          <div className="pl-6 pr-6 md:pr-8 pb-8 pt-2 flex flex-col gap-6">
                            {/* High-Fidelity Mock-up Container */}
                            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-border/40 bg-muted/20 flex items-center justify-center group/img shadow-sm">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-w-1024px) 100vw, 1200px"
                                className="object-cover group-hover/img:scale-[1.01] transition-transform duration-500"
                              />
                            </div>

                            {/* Description */}
                            <p className="text-base text-muted-foreground leading-relaxed">
                              {project.description}
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-wrap items-center gap-3">
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold text-background bg-foreground rounded-full hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                                >
                                  <ArrowUpRight className="w-4 h-4" />
                                  Live Demo
                                </a>
                              )}
                              <Link
                                href={`/projects/${project.slug}`}
                                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold text-foreground border border-border/60 hover:bg-muted/40 rounded-full transition-colors shadow-sm"
                              >
                                <FileText className="w-4 h-4" />
                                Case Study
                              </Link>
                            </div>

                            {/* Tech Tag Badges */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/20">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs font-semibold px-3 py-1 rounded-full border border-border/30 bg-muted/10 text-muted-foreground select-none"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        {/* Toggle List Pill Button - Centered and overlapping bottom border cleanly */}
        {projects.length > 4 && (
          <div className="flex justify-center relative z-10 -mt-[21px]">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold border border-border/40 bg-background hover:bg-muted/10 text-foreground rounded-full shadow-sm transition-all cursor-pointer"
            >
              {showAll ? "Show Less" : "Show More"}
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", showAll && "rotate-180")} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

