"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Code2 } from "lucide-react"
import { GradientText } from "@/components/effects/text-effects"
import { cn } from "@/lib/utils"

interface Role {
  title: string
  type: string
  from: string
  to: string
  bullets: string[]
  tags: string[]
}

interface Company {
  name: string
  initials: string
  color: string
  isCurrent: boolean
  roles: Role[]
}

const companies: Company[] = [
  {
    name: "Cognix Insights",
    initials: "CI",
    color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    isCurrent: true,
    roles: [
      {
        title: "Full-Stack Developer & Product Designer",
        type: "Full-time",
        from: "01.2023",
        to: "∞",
        bullets: [
          "Led development and design of multiple client-facing projects and internal tools at Cognix Insights.",
          "Built and shipped end-to-end web apps using Next.js, React and TypeScript; designed interfaces and prototypes in Figma.",
          "Owned feature delivery, from requirements and UX to implementation and deployment.",
          "Collaborated with cross-functional teams to iterate on product requirements and improve performance and UX.",
        ],
        tags: ["Next.js", "React", "TypeScript", "Figma", "Node.js", "Design Systems"],
      },
    ],
  },
  {
    name: "Sunrise Secondary School",
    initials: "SS",
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    isCurrent: false,
    roles: [
      {
        title: "Mathematics Teacher",
        type: "Part-time",
        from: "2019",
        to: "2022",
        bullets: [
          "Taught mathematics to secondary school students and prepared lesson plans and assessments.",
          "Mentored students, organised extracurricular math activities, and supported exam preparation.",
        ],
        tags: ["Teaching", "Curriculum", "Mentoring", "Assessment"],
      },
    ],
  },
]

export function Experience() {
  // Default: first company's first role open
  const [openRole, setOpenRole] = useState<string>(`${companies[0].name}-0`)

  const toggleRole = (key: string) => {
    setOpenRole((prev) => (prev === key ? "" : key))
  }

  return (
    <section id="experience" className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl leading-[1] md:text-6xl font-bold mb-6">
            <span className="block">
              <GradientText>Experience</GradientText>
            </span>
          </h2>
          <p className="text-lg text-black dark:text-white">
            A timeline of roles, products, and teams that shaped the way I design and build.
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-border/40 rounded-3xl backdrop-blur-md relative w-full overflow-hidden"
        >
          {companies.map((company, cIdx) => {
            const isLastCompany = cIdx === companies.length - 1

            return (
              <div
                key={company.name}
                className={cn(
                  "border-b border-border/40",
                  isLastCompany && "border-b-0"
                )}
              >
                {/* Company Row */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-border/30">
                  {/* Logo */}
                  <div
                    className={cn(
                      "h-9 w-9 rounded-full border flex items-center justify-center text-xs font-bold shrink-0",
                      company.color
                    )}
                  >
                    {company.initials}
                  </div>

                  <span className="font-bold text-base text-foreground">
                    {company.name}
                  </span>

                  {company.isCurrent && (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500 ml-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                      Current
                    </span>
                  )}
                </div>

                {/* Roles */}
                {company.roles.map((role, rIdx) => {
                  const key = `${company.name}-${rIdx}`
                  const isOpen = openRole === key
                  const isLastRole = rIdx === company.roles.length - 1

                  return (
                    <div
                      key={key}
                      className={cn(
                        "border-b border-border/30 transition-colors duration-200",
                        isOpen ? "bg-muted/5" : "hover:bg-muted/5",
                        isLastRole && "border-b-0"
                      )}
                    >
                      {/* Role Header */}
                      <div
                        className="grid grid-cols-[48px_1fr] cursor-pointer select-none group"
                        onClick={() => toggleRole(key)}
                      >
                        {/* Icon gutter */}
                        <div className="flex items-start justify-center pt-4 border-r border-border/30 shrink-0">
                          <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                            <Code2 className="h-3.5 w-3.5 text-primary" />
                          </div>
                        </div>

                        {/* Role info */}
                        <div className="flex items-center justify-between py-4 pl-5 pr-5">
                          <div>
                            <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors leading-tight">
                              {role.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-2">
                              <span>{role.type}</span>
                              <span className="h-1 w-1 rounded-full bg-muted-foreground/50 inline-block" />
                              <span>
                                {role.from} – {role.to}
                              </span>
                            </p>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="p-1 shrink-0 ml-3"
                          >
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-[48px_1fr]">
                              {/* Continuous vertical border */}
                              <div className="border-r border-border/30 shrink-0" />

                              {/* Content */}
                              <div className="pl-5 pr-5 pb-6 pt-1 space-y-5">
                                {/* Bullets */}
                                <ul className="space-y-2.5 mt-2">
                                  {role.bullets.map((bullet, i) => (
                                    <li
                                      key={i}
                                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                                    >
                                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                                      {bullet}
                                    </li>
                                  ))}
                                </ul>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                  {role.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-border/60 bg-muted/30 text-muted-foreground"
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

                      {/* Collapsed: show tags */}
                      {!isOpen && (
                        <div className="grid grid-cols-[48px_1fr]">
                          <div className="border-r border-border/30 shrink-0" />
                          <div className="pl-5 pr-5 pb-4 flex flex-wrap gap-2">
                            {role.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-border/60 bg-muted/30 text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
