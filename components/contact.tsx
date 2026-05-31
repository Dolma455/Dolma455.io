"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Modal } from "@/components/ui/modal"

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true)
    window.addEventListener("open-contact-modal", handleOpenModal)
    return () => window.removeEventListener("open-contact-modal", handleOpenModal)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    try {
      const submitData = new FormData()
      submitData.append("access_key", "bb0411df-90d2-4021-967d-339633899d5c")
      submitData.append("name", formData.name)
      submitData.append("email", formData.email)
      submitData.append("subject", formData.subject)
      submitData.append("message", formData.message)

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSuccessOpen(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setIsModalOpen(false)
      } else {
        alert(result.message || "Failed to send message.")
      }
    } catch (error) {
      alert("Error sending message.")
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>


      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get In Touch"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-primary/30 focus:border-primary bg-background/80"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-primary/30 focus:border-primary bg-background/80"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border-primary/30 focus:border-primary bg-background/80"
              placeholder="What is this about?"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="border-primary/30 focus:border-primary bg-background/80"
              placeholder="Tell me more..."
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-primary hover:bg-primary/90">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </form>
      </Modal>

      <Modal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)}>
        <div className="text-center space-y-5 py-2">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              <Heart className="h-4 w-4" />
              Success
              <Heart className="h-4 w-4" />
            </div>
            <p className="text-xl font-bold text-foreground">Message Sent!</p>
            <p className="text-sm text-muted-foreground">I’ll get back to you as soon as possible.</p>
          </div>

          <Button onClick={() => setIsSuccessOpen(false)} className="w-full rounded-full bg-primary hover:bg-primary/90">
            OK
          </Button>
        </div>
      </Modal>
    </>
  )
}

