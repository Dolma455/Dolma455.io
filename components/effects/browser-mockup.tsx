import Image from "next/image"
import { cn } from "@/lib/utils"
import type { ProjectScreenshot } from "@/lib/projects"

export function BrowserMockup({ screenshot, className }: { screenshot: ProjectScreenshot; className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full", className)}>
      <div className="relative overflow-hidden rounded-[1rem] border border-white/8 bg-gradient-to-br from-slate-50 to-white shadow-[0_30px_80px_rgba(2,6,23,0.18)] dark:from-slate-900 dark:to-slate-950">
        <div className="h-10 w-full flex items-center px-4 gap-2 bg-transparent">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--primary)", opacity: 0.8 }} />
          <div className="h-3 w-3 rounded-full bg-amber-400/80" />
          <div className="h-3 w-3 rounded-full bg-primary/80" />
        </div>
        <div className="relative aspect-[16/10] bg-card/70">
          {screenshot.placeholder || !screenshot.src ? (
            <div className="flex h-full w-full items-center justify-center bg-muted/20">
              <div className="space-y-2 text-center">
                <div className="text-sm font-semibold text-foreground">{screenshot.label}</div>
                <div className="text-xs text-muted-foreground">Screenshot coming soon</div>
              </div>
            </div>
          ) : (
            <Image src={screenshot.src} alt={screenshot.label} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain object-center" />
          )}
        </div>
      </div>
    </div>
  )
}

export default BrowserMockup
