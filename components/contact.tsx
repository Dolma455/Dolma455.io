"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin, Twitter, Dribbble, InstagramIcon, Github } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  } else {
    alert("Failed to send message.");
  }
};



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-foreground/30">
                  <div className="p-2 rounded-full bg-gradient-to-r from-secondary to-primary">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span>dlama5671@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-secondary/5 to-primary/5 border border-foreground/30">
                  <div className="p-2 rounded-full bg-gradient-to-r from-secondary to-primary">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <span>+ (977) 9761851010</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-foreground/30">
                  <div className="p-2 rounded-full bg-gradient-to-r from-secondary to-primary">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span>Makalbari, Kathmandu</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild className="border-primary/20 hover:bg-primary/5 hover:text-primary">
                  <Link href="https://www.linkedin.com/in/dolma-lama-2612b4291/" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-secondary/20 hover:bg-secondary/5 hover:text-primary">
                  <Link href="https://www.instagram.com/dolma003?igsh=MTRsMjdmbnFpMHk5dQ==" aria-label="Instagram">
                    <InstagramIcon className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-primary/20 hover:bg-primary/5 hover:text-primary">
                  <Link href="https://github.com/Dolma455" aria-label="Github">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="border-foreground/30 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-gradient">Available for Freelance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I'm currently available for freelance projects and consulting work. Let's discuss your next big idea!
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available Now</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-foreground/30 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-foreground/30 focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-foreground/30 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-foreground/30 focus:border-primary"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:opacity-90 transition-opacity">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
