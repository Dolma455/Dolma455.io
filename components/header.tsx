"use client"

import { useState, type MouseEvent } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Projects" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      setIsOpen(false)
      return
    }

    event.preventDefault()

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsOpen(false)
      return
    }

    const target = document.getElementById(href.slice(1))
    if (!target) {
      setIsOpen(false)
      return
    }

    const headerOffset = 96
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top: targetPosition, behavior: "smooth" })
    setIsOpen(false)
  }

  const triggerContactModal = () => {
    setIsOpen(false)
    window.dispatchEvent(new CustomEvent("open-contact-modal"))
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-4 md:py-6 px-4 pointer-events-none">
      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-card/75 border border-border/40 text-foreground rounded-full shadow-lg backdrop-blur-xl w-full max-w-4xl relative z-50 pointer-events-auto">
        {/* Brand Wordmark */}
        <div className="flex items-center">
          <Link 
            href="/" 
            onClick={(e) => handleNavClick(e, "#")}
            className="font-logo bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-2xl leading-none tracking-tight text-transparent"
          >
            DLama
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Actions (ThemeToggle & CTA Button) */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Desktop Contact CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={triggerContactModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-bold text-background bg-foreground rounded-full hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              Contact
            </button>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <motion.button 
            className="md:hidden flex items-center p-2 rounded-full hover:bg-muted/50 text-foreground cursor-pointer" 
            onClick={toggleMenu} 
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 pt-24 px-6 md:hidden pointer-events-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Menu Button */}
            <motion.button
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted/50 text-foreground cursor-pointer"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.button>

            {/* Navigation links & action inside mobile drawer */}
            <div className="flex flex-col space-y-6 pt-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 + 0.05 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-2xl font-bold text-foreground hover:text-primary transition-colors block py-1" 
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-8 border-t border-border/40"
              >
                <button
                  onClick={triggerContactModal}
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-bold text-background bg-foreground rounded-full hover:opacity-90 transition-opacity cursor-pointer gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
