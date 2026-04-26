"use client"

import { motion } from "framer-motion"
import { Palette, Code, Rocket } from "lucide-react"
import { GradientText } from "./effects/text-effects"
import { Badge } from "./ui/badge"

export function About() {
  const expertise = [
    {
      icon: Palette,
      title: "Design",
      description: "UX Strategy & Visual Design",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Development",
      description: "React, Flutter, Backend APIs",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Delivery",
      description: "Firebase, Production Ready",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const skills = ["UX/UI", "Flutter", "React", "TypeScript", "Firebase", "Node.js"]

  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <Badge className="rounded-full border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary mb-4 inline-block">
            👋 Designer+Developer
          </Badge>
          <h2 className="text-5xl leading-[1] md:text-6xl font-bold mb-6">
                      <span className="block"><GradientText>About Me</GradientText></span>
                    </h2>
          <p className="text-lg text-muted-foreground">
            Specializing in end-to-end product design and development
          </p>
        </motion.div>

        {/* Three Pillars - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.15 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-24"
        >
          {expertise.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="flex justify-center">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${item.gradient} text-white`}>
                    <Icon className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats & Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Stats */}
          <div className="flex justify-center gap-12">
            {[
              { label: "Years", value: "3+" },
              { label: "Products", value: "12+" },
              { label: "Expertise", value: "Full-Stack" }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div className="border-t border-border/30 pt-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Core Skills</p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary border border-primary/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

