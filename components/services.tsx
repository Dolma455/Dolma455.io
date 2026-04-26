"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/effects/text-effects"
import { CardSpotlight } from "@/components/ui/card-spotlight"

export function Services() {
  const allServices = [
    {
      title: "UI Design",
      description: "Clean, modern interfaces with strong hierarchy, visual balance, and scalable components.",
      icon: Palette,
      category: "Design",
      accent: "primary",
      highlights: ["Design systems", "High-fidelity screens", "Responsive layouts"],
    },
    {
      title: "UX Research",
      description: "User-focused discovery to reveal real problems, validate ideas, and improve product decisions.",
      icon: Search,
      category: "Design",
      accent: "accent",
      highlights: ["Interviews & insights", "Journey mapping", "Usability testing"],
    },
    {
      title: "App Development",
      description: "Production-ready Flutter apps that are fast, stable, and aligned with product goals.",
      icon: Code2,
      category: "Development",
      accent: "primary",
      highlights: ["Flutter architecture", "API integration", "Performance tuning"],
    },
  ]

  const renderIllustration = (title: string, isPrimary: boolean) => {
    if (title === "UI Design") {
      return (
        <div className="relative h-40 overflow-hidden rounded-2xl border border-border/50 bg-background/70 p-3">
          <div className="mb-2 flex items-center gap-1.5 border-b border-border/50 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="grid h-[calc(100%-2rem)] grid-cols-12 gap-2">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="col-span-3 rounded-lg border border-border/50 bg-muted/70"
            />
            <div className="col-span-9 space-y-2">
              <motion.div
                animate={{ width: ["65%", "80%", "65%"] }}
                transition={{ duration: 3.2, repeat: Infinity }}
                className={`h-3 rounded-full ${isPrimary ? "bg-primary/50" : "bg-accent/50"}`}
              />
              <div className="h-2.5 w-full rounded-full bg-muted" />
              <div className="h-2.5 w-4/5 rounded-full bg-muted" />
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.1, repeat: Infinity }}
                className={`mt-2 h-12 rounded-lg ${isPrimary ? "bg-primary/20" : "bg-accent/20"}`}
              />
            </div>
          </div>
        </div>
      )
    }

    if (title === "UX Research") {
      return (
        <div className="relative h-40 overflow-hidden rounded-2xl border border-border/50 bg-background/70 p-3">
          <motion.div
            animate={{ rotate: [0, 2, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="grid h-full grid-cols-2 gap-2"
          >
            <div className="space-y-2 rounded-lg border border-border/50 bg-muted/60 p-2">
              <div className="h-2.5 w-2/3 rounded-full bg-muted-foreground/30" />
              <div className={`h-7 rounded-md ${isPrimary ? "bg-primary/25" : "bg-accent/25"}`} />
              <div className="h-2.5 w-4/5 rounded-full bg-muted-foreground/30" />
              <div className="h-6 rounded-md bg-muted" />
            </div>
            <div className="relative rounded-lg border border-border/50 bg-muted/60 p-2">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.3, repeat: Infinity }}
                className={`absolute right-2 top-2 h-6 w-8 rounded ${isPrimary ? "bg-primary/30" : "bg-accent/30"}`}
              />
              <div className="h-2.5 w-3/5 rounded-full bg-muted-foreground/30" />
              <div className="mt-2 h-16 rounded-md border border-dashed border-border/70" />
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2.6, repeat: Infinity }}
                className={`mt-2 h-2 w-2 rounded-full ${isPrimary ? "bg-primary" : "bg-accent"}`}
              />
            </div>
          </motion.div>
        </div>
      )
    }

    return (
      <div className="relative h-40 overflow-hidden rounded-2xl border border-border/50 bg-background/70 p-3">
        <div className="relative mx-auto h-full w-24 rounded-[1.25rem] border-4 border-foreground/80 bg-background p-1">
          <div className="mx-auto mb-1 h-1.5 w-10 rounded-full bg-foreground/70" />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className={`h-[calc(100%-0.5rem)] rounded-[0.9rem] ${isPrimary ? "bg-primary/20" : "bg-accent/20"}`}
          >
            <div className="space-y-1.5 p-2">
              <div className="h-2 w-3/4 rounded-full bg-foreground/20" />
              <div className="h-7 rounded-md bg-foreground/10" />
              <div className="h-2 w-2/3 rounded-full bg-foreground/20" />
              <div className="h-5 rounded-md bg-foreground/10" />
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          className={`absolute right-3 top-4 rounded-md px-2 py-1 text-[10px] ${isPrimary ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}`}
        >
          API
        </motion.div>
        <motion.div
          animate={{ x: [0, -8, 0] }}
          transition={{ duration: 2.8, repeat: Infinity }}
          className="absolute bottom-4 left-3 rounded-md bg-muted px-2 py-1 text-[10px] text-muted-foreground"
        >
          Sync
        </motion.div>
      </div>
    )
  }

  return (
    <section id="services" className="relative overflow-hidden py-28 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <Badge className="rounded-full border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary mb-4 inline-block">
            💼 What I Do
          </Badge>

          <h2 className="text-5xl leading-[1] md:text-6xl font-bold mb-6">
            <span className="block"><GradientText>Core Services</GradientText></span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three focused capabilities that cover product experience from idea to launch.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allServices.map((service, idx) => {
            const Icon = service.icon
            const isPrimary = service.accent === "primary"

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                className="h-full"
              >
                <CardSpotlight className="h-full p-6">
                  <div>
                    <div className="mb-6">
                      {renderIllustration(service.title, isPrimary)}
                    </div>

                    <div className="mb-3 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className={`inline-flex rounded-lg border p-2 relative z-20 ${isPrimary ? "border-primary/30 bg-primary/15" : "border-accent/30 bg-accent/15"}`}>
                          <Icon className={`h-4 w-4 ${isPrimary ? "text-primary" : "text-accent"}`} />
                        </span>
                        <h3 className="text-2xl font-bold leading-tight relative z-20">{service.title}</h3>
                      </div>
                      <Badge
                        className={`rounded-full text-xs relative z-20 ${
                          isPrimary
                            ? "border-primary/30 bg-primary/15 text-primary"
                            : "border-accent/30 bg-accent/15 text-accent"
                        }`}
                      >
                        {service.category}
                      </Badge>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground relative z-20">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2 relative z-20">
                      {service.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
