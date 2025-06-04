"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Monitor, Search, Palette, Users, Layers } from "lucide-react"
import { motion } from "framer-motion"

export function Services() {
  const services = [
    {
      icon: Search,
      title: "User Research",
      description:
        "In-depth user interviews, surveys, and usability testing to understand your audience and their needs.",
      features: ["User Interviews", "Usability Testing", "Persona Development", "Journey Mapping"],
      gradient: "from-primary/10 to-secondary/10",
    },
    {
      icon: Palette,
      title: "UI Design",
      description: "Beautiful, modern interfaces that align with your brand and provide exceptional user experiences.",
      features: ["Visual Design", "Design Systems", "Branding", "Iconography"],
      gradient: "from-secondary/10 to-primary/10",
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      description: "Native iOS and Android app designs optimized for touch interactions and mobile behaviors.",
      features: ["iOS Design", "Android Design", "Responsive Design", "Touch Optimization"],
      gradient: "from-primary/10 to-secondary/10",
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Responsive web applications and websites that work seamlessly across all devices and browsers.",
      features: ["Responsive Design", "Web Applications", "Landing Pages", "E-commerce"],
      gradient: "from-secondary/10 to-primary/10",
    },
    {
      icon: Users,
      title: "UX Strategy",
      description: "Strategic planning and consultation to align user experience with business objectives.",
      features: ["UX Audits", "Strategy Planning", "Competitive Analysis", "Workshops"],
      gradient: "from-primary/10 to-secondary/10",
    },
    {
      icon: Layers,
      title: "Design Systems",
      description:
        "Scalable and consistent UI development using reusable components, design tokens, and systematic guidelines.",
      features: ["Component Reusability", "Design Tokens", "Theming & Customization", "UI Consistency Enforcement"],
      gradient: "from-secondary/10 to-primary/10",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardAnim = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive design services to help bring your digital products to life, from initial research to
            final implementation.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div variants={cardAnim} key={service.title}>
              <Card
                className="group hover:shadow-xl transition-all duration-300 border-primary/40 hover:border-primary/70 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-200`}
                ></div>
                <CardHeader className="relative">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-primary to-secondary w-fit mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
