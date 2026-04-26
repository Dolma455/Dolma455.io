"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/effects/text-effects"
import { GridBackground } from "@/components/ui/grid-background"
import { Briefcase, Lightbulb, Target, Rocket } from "lucide-react"

export function Journey() {
  const milestones = [
    {
      year: "2020",
      title: "Design Foundation",
      description: "Started my design journey with a passion for creating user-centered digital experiences. Completed courses in UI/UX fundamentals and design thinking.",
      icon: Lightbulb,
      color: "primary",
      achievements: ["Design Thinking", "UI Fundamentals", "User Research"],
    },
    {
      year: "2021",
      title: "First Professional Role",
      description: "Landed my first design role at a startup, working on mobile applications. Collaborated with developers and learned the importance of design-development alignment.",
      icon: Briefcase,
      color: "accent",
      achievements: ["Mobile Design", "Collaboration", "Design Systems"],
    },
    {
      year: "2022",
      title: "Expanding Skills",
      description: "Picked up Flutter development to better understand implementation. Started freelancing and built several successful projects combining design and code.",
      icon: Target,
      color: "primary",
      achievements: ["Flutter Development", "Freelancing", "Full-Stack Skills"],
    },
    {
      year: "2024",
      title: "Independent Creator",
      description: "Now building innovative products as a full-stack designer-developer. Creating beautiful interfaces backed by powerful, performant applications.",
      icon: Rocket,
      color: "accent",
      achievements: ["Product Building", "Innovation", "Excellence"],
    },
  ]

  return (
    <section id="experience" className="relative overflow-hidden py-32">
      <GridBackground className="opacity-20" />
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
            📍 Experience
          </Badge>

          <h2 className="text-5xl leading-[1.2] md:text-6xl font-bold mb-6">
            Professional
            <span className="block"><GradientText>Experience Timeline</GradientText></span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Milestones of growth across product design and app development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon
              const isLeft = idx % 2 === 0

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-8 md:gap-12 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className={`rounded-2xl border p-8 backdrop-blur transition-all hover:shadow-lg ${
                        milestone.color === "primary"
                          ? "border-primary/20 bg-primary/5"
                          : "border-accent/20 bg-accent/5"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          className={`rounded-full text-sm font-bold ${
                            milestone.color === "primary"
                              ? "bg-primary/20 text-primary border-primary/30"
                              : "bg-accent/20 text-accent border-accent/30"
                          }`}
                        >
                          {milestone.year}
                        </Badge>
                      </div>

                      <h3 className="text-3xl font-bold mb-3">{milestone.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Achievements */}
                      <div className="flex flex-wrap gap-2">
                        {milestone.achievements.map((achievement) => (
                          <Badge
                            key={achievement}
                            className={`rounded-full text-xs ${
                              milestone.color === "primary"
                                ? "bg-primary/10 text-primary border-primary/20"
                                : "bg-accent/10 text-accent border-accent/20"
                            }`}
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    className={`relative hidden md:block z-10 ${
                      milestone.color === "primary"
                        ? "text-primary"
                        : "text-accent"
                    }`}
                  >
                    {/* Outer glow */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className={`absolute -inset-4 rounded-full ${
                        milestone.color === "primary"
                          ? "bg-primary/30"
                          : "bg-accent/30"
                      }`}
                    />

                    {/* Main dot */}
                    <div
                      className={`relative w-16 h-16 rounded-full flex items-center justify-center ${
                        milestone.color === "primary"
                          ? "bg-primary/20 border-2 border-primary"
                          : "bg-accent/20 border-2 border-accent"
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                  </motion.div>

                  {/* Mobile Icon */}
                  <div className="md:hidden">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                        milestone.color === "primary"
                          ? "bg-primary/20 border-2 border-primary text-primary"
                          : "bg-accent/20 border-2 border-accent text-accent"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
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
            Every project has taught me something new. Every collaboration has made me better.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
