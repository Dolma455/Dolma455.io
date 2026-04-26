"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, Target, Sparkles } from "lucide-react"
import { GradientText } from "@/components/effects/text-effects"
import { Badge } from "@/components/ui/badge"
import { GridBackground } from "@/components/ui/grid-background"

export function Values() {
  const values = [
    {
      title: "User Centered",
      description: "Every decision driven by understanding real user needs, behaviors, and pain points through research and empathy.",
      icon: Users,
      color: "primary",
    },
    {
      title: "Innovation",
      description: "Pushing boundaries with creative solutions, exploring new technologies, and challenging the status quo.",
      icon: Lightbulb,
      color: "accent",
    },
    {
      title: "Goal Oriented",
      description: "Focused on measurable outcomes and business impact. Every project aligned with clear objectives and success metrics.",
      icon: Target,
      color: "primary",
    },
    {
      title: "Aesthetic Excellence",
      description: "Crafting beautiful interfaces that are not just functional but delightful. Design that inspires and elevates the user experience.",
      icon: Sparkles,
      color: "accent",
    },
  ]

  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-transparent via-primary/3 to-transparent">
      <GridBackground className="opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <Badge className="rounded-full border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary mb-4 inline-block">
            ✨ My Philosophy
          </Badge>

          <h2 className="text-5xl leading-[1.2] md:text-6xl font-bold mb-6">
            Guided by
            <span className="block"><GradientText>Core Principles</GradientText></span>
          </h2>
          <p className="text-lg text-muted-foreground">
            These four pillars drive every decision, design, and line of code I create.
          </p>
        </motion.div>

        {/* Alternating Layout - Left/Right */}
        <div className="space-y-20">
          {values.map((value, idx) => {
            const Icon = value.icon
            const isLeft = idx % 2 === 0

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center`}>
                  {/* Content */}
                  <motion.div
                    className={`space-y-6 ${isLeft ? "order-1" : "order-2 md:order-2"}`}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        className={`p-3 rounded-xl ${
                          value.color === "primary"
                            ? "bg-primary/20 border border-primary/30"
                            : "bg-accent/20 border border-accent/30"
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 ${
                            value.color === "primary" ? "text-primary" : "text-accent"
                          }`}
                        />
                      </motion.div>
                      <h3 className="text-3xl md:text-4xl font-bold">{value.title}</h3>
                    </motion.div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>

                    {/* Decorative Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className={`h-1 w-20 rounded-full ${
                        value.color === "primary"
                          ? "bg-gradient-to-r from-primary to-primary/30"
                          : "bg-gradient-to-r from-accent to-accent/30"
                      }`}
                    />
                  </motion.div>

                  {/* Visual Element */}
                  <motion.div
                    className={`order-2 ${isLeft ? "order-2" : "order-1"}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div
                      className={`relative h-64 md:h-80 rounded-2xl border overflow-hidden backdrop-blur ${
                        value.color === "primary"
                          ? "border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5"
                          : "border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5"
                      }`}
                    >
                      {/* Animated gradient orbs */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl ${
                          value.color === "primary" ? "bg-primary/30" : "bg-accent/30"
                        }`}
                      />
                      <motion.div
                        animate={{
                          scale: [1.2, 1, 1.2],
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                        className={`absolute -bottom-20 -left-20 w-56 h-56 rounded-full blur-3xl ${
                          value.color === "primary" ? "bg-primary/20" : "bg-accent/20"
                        }`}
                      />

                      {/* Center Icon Display */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className={`p-8 rounded-2xl ${
                            value.color === "primary"
                              ? "bg-primary/10 border border-primary/30"
                              : "bg-accent/10 border border-accent/30"
                          }`}
                        >
                          <Icon
                            className={`h-16 w-16 ${
                              value.color === "primary" ? "text-primary" : "text-accent"
                            }`}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-24 pt-12 border-t border-primary/10 text-center"
        >
          <p className="text-lg text-muted-foreground">
            These principles shape how I approach design, development, and collaboration.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
