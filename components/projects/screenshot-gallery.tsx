"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { IphoneMockup } from "@/components/effects/iphone-mockup"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { ProjectScreenshot } from "@/lib/projects"

type Props = { screenshots: ProjectScreenshot[] }

export default function ScreenshotGallery({ screenshots }: Props) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return
      if (e.key === "Escape") setOpen(false)
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1))
      if (e.key === "ArrowRight") setIndex((i) => Math.min(screenshots.length - 1, i + 1))
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, screenshots.length])

  const openAt = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  return (
    <div className="space-y-6">
      {/* Grid rows: 3 per row */}
      <div className="grid gap-6">
        {Array.from({ length: Math.ceil(screenshots.length / 3) }).map((_, ridx) => (
          <div key={ridx} className="flex justify-center gap-8">
            {screenshots.slice(ridx * 3, ridx * 3 + 3).map((s, cidx) => (
              <button key={s.label} onClick={() => openAt(ridx * 3 + cidx)} className="w-[260px] focus:outline-none">
                <IphoneMockup screenshot={s} device="phone" />
              </button>
            ))}
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
          <div className="relative z-50 max-w-[95vw] max-h-[90vh] w-full px-4 py-6">
            <button onClick={() => setOpen(false)} className="absolute right-6 top-6 rounded-full bg-white/90 p-2 z-50">
              <X className="h-5 w-5 text-foreground" />
            </button>

            <div className="flex items-center justify-center gap-6">
              <button
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                className="rounded-full bg-white/90 p-2"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6 text-foreground" />
              </button>

              <div className="flex items-center justify-center">
                <div className="w-[320px] sm:w-[420px] md:w-[520px] lg:w-[720px]">
                  <IphoneMockup screenshot={screenshots[index]} device="phone" />
                </div>
              </div>

              <button
                onClick={() => setIndex((i) => Math.min(screenshots.length - 1, i + 1))}
                className="rounded-full bg-white/90 p-2"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
