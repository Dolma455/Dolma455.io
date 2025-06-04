"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle" // This must return a toggle button

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Dolma Lama
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <ThemeToggle /> {/* Show toggle in mobile too */}
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="#about" className="text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="#services" className="text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="#portfolio" className="text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
