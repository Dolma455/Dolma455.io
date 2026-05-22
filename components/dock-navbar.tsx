"use client"

import * as React from "react"
import { useRouter, usePathname } from "next/navigation"
import DockMorph from "@/components/ui/dock-morph"

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

export function DockNavbar() {
  const router = useRouter()
  const pathname = usePathname()

  const handleScroll = (id: string) => {
    if (pathname !== "/") {
      router.push("/")
      return
    }

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const target = document.getElementById(id)
    if (!target) return

    const headerOffset = 96
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top: targetPosition, behavior: "smooth" })
  }

  const triggerContactModal = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"))
  }

  const items = [
    {
      customElement: (
        <button
          onClick={() => handleScroll("home")}
          className="relative px-2 flex items-center justify-center cursor-pointer pointer-events-auto border-none bg-transparent outline-none focus:outline-none font-black tracking-widest text-sm text-purple-600 dark:text-purple-400 hover:opacity-80 transition-opacity"
        >
          DOLMA
        </button>
      ),
      label: "Dolma Lama",
    },
    {
      isSeparator: true,
      label: "separator-logo",
    },
    {
      label: "Home",
      onClick: () => handleScroll("home"),
    },
    {
      label: "Blogs",
      onClick: () => router.push("/blog"),
    },
    {
      isSeparator: true,
      label: "separator-theme",
    },
    {
      customElement: (
        <AnimatedThemeToggler
          variant="circle"
          duration={600}
          className="bg-transparent border-none shadow-none hover:bg-transparent hover:text-black dark:hover:text-white dark:hover:bg-transparent text-black/60 dark:text-white/60 w-8 h-8 p-0 cursor-pointer pointer-events-auto flex items-center justify-center transition-colors"
        />
      ),
      label: "Toggle Theme",
    },
  ]

  return <DockMorph items={items} position="bottom" />
}
