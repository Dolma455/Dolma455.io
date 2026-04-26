"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Apple, Play } from "lucide-react"
import { GridBackground } from "@/components/ui/grid-background"

export function AppsShowcase() {
  const apps = [
    {
      name: "Naasa X",
      tagline: "Trading Platform",
      description: "Real-time data, trade execution, order management, charts, and portfolio tracking all in one powerful app.",
      image: "/image/projects/naasax.svg",
      tags: ["Flutter", "Riverpod", "Firebase", "REST API", "Charts"],
      playstore: "#",
      appstore: "#",
    },
    {
      name: "Naasa KYC",
      tagline: "Identity Verification",
      description: "Self-service document verification, biometric authentication, status tracking, and multi-language support.",
      image: "/image/projects/kyc.svg",
      tags: ["Flutter", "Provider", "Firebase", "Document Scanning", "ML Kit"],
      playstore: "#",
      appstore: "#",
    },
  ]

  return (
    <section id="apps" className="relative overflow-hidden py-28">
      <GridBackground className="opacity-25" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-3xl"
        >
          <Badge className="rounded-full border-accent/30 bg-accent/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-accent mb-4">
            📱 Apps Built
          </Badge>

          <h2 className="text-5xl leading-[1.2] md:text-6xl font-bold mb-6">
            Production Apps
          </h2>
          <p className="text-lg text-muted-foreground">
            Flutter applications designed for performance and user delight.
          </p>
        </motion.div>

        {/* Apps Grid */}
        <div className="space-y-16">
          {apps.map((app, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              {/* App Info */}
              <motion.div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                    {app.tagline}
                  </Badge>
                  <h3 className="text-4xl font-bold mb-4">{app.name}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{app.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-accent/10 text-accent border-accent/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Download Links */}
                <div className="flex gap-3 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="gap-2 bg-accent hover:bg-accent/90"
                  >
                    <a href={app.playstore} target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4" />
                      Play Store
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="gap-2"
                  >
                    <a href={app.appstore} target="_blank" rel="noopener noreferrer">
                      <Apple className="h-4 w-4" />
                      App Store
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* App Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden border border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
