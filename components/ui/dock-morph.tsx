"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Search, Bell, User, Settings } from "lucide-react"

interface DockItem {
  icon?: React.ComponentType<{ className?: string }>
  label: string
  onClick?: () => void
  customElement?: React.ReactNode
  isSeparator?: boolean
}

interface DockMorphProps {
  className?: string
  items?: DockItem[]
  position?: "bottom" | "top" | "left"
}

export default function DockMorph({ items, className, position = "bottom" }: DockMorphProps) {
  const [hovered, setHovered] = React.useState<number | null>(null)

  const dockItems: DockItem[] =
    items && items.length > 0
      ? items
      : [
          { icon: Home, label: "Home", onClick: () => alert("Home clicked") },
          { icon: Search, label: "Search", onClick: () => alert("Search clicked") },
          { icon: Bell, label: "Notifications", onClick: () => alert("Notifications clicked") },
          { icon: User, label: "Profile", onClick: () => alert("Profile clicked") },
          { icon: Settings, label: "Settings", onClick: () => alert("Settings clicked") },
        ]

  // Position classes
  const positionClasses = {
    bottom: "fixed bottom-6 left-1/2 -translate-x-1/2",
    top: "fixed top-6 left-1/2 -translate-x-1/2",
    left: "fixed left-6 top-1/2 -translate-y-1/2 flex-col",
  }

  return (
    <div
      className={cn(
        "z-50 flex items-center justify-center",
        positionClasses[position],
        className
      )}
    >
      <TooltipProvider delayDuration={100}>
        <div
          className={cn(
            "relative flex items-center backdrop-blur-xl rounded-full border shadow-lg",
            position === "left"
              ? "flex-col gap-4 px-4 py-8 bg-background/30 border-black/10 dark:border-white/10"
              : "flex-row gap-3 pl-2 pr-4 py-2 bg-gray-300/50 dark:bg-zinc-800/50 border-black/5 dark:border-white/10"
          )}
        >
          {dockItems.map((item, i) => {
            if (item.isSeparator) {
              return (
                <div
                  key={item.label}
                  className={cn(
                    "w-[1px] bg-black/10 dark:bg-white/10 mx-1",
                    position === "left" ? "h-[1px] w-auto my-1 mx-2.5" : "h-4 self-center"
                  )}
                />
              )
            }

            const buttonElement = (
              <div
                className="relative flex items-center justify-center"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.customElement ? (
                  <div className="relative z-10">
                    {item.customElement}
                  </div>
                ) : (
                  /* Icon button or Text button */
                  <button
                    className={cn(
                      "relative z-10 transition-colors duration-200 text-sm font-medium text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white bg-transparent border-none cursor-pointer flex items-center justify-center outline-none focus:outline-none focus-visible:text-black dark:focus-visible:text-white",
                      item.icon ? "w-8 h-8 p-0 rounded-full" : "px-2.5 py-1"
                    )}
                    onClick={item.onClick}
                  >
                    {item.icon ? (
                      <item.icon className="h-5 w-5" />
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </button>
                )}
              </div>
            )

            if (item.icon || item.customElement) {
              return (
                <Tooltip key={item.label}>
                  <TooltipTrigger asChild>
                    {buttonElement}
                  </TooltipTrigger>
                  <TooltipContent
                    side={position === "left" ? "right" : "top"}
                    className="text-xs"
                  >
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              )
            }

            return <React.Fragment key={item.label}>{buttonElement}</React.Fragment>
          })}
        </div>
      </TooltipProvider>
    </div>
  )
}
