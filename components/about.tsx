"use client"

import { motion } from "framer-motion"
import Testimonial1 from "@/components/ui/testimonial-1"

export function About() {
  return (
    <section id="about" className="relative py-12 md:py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Testimonial1 />
      </motion.div>
    </section>
  )
}
