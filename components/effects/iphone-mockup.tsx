import Image from "next/image"

import { cn } from "@/lib/utils"
import type { ProjectDevice, ProjectScreenshot } from "@/lib/projects"

type MockupProps = {
	screenshot: ProjectScreenshot
	device?: ProjectDevice
	className?: string
}

function PlaceholderScreen({ label }: { label: string }) {
	return (
		<div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%),linear-gradient(145deg,_rgba(15,23,42,0.98),_rgba(30,41,59,0.9))] p-6 text-center">
			<div className="space-y-3">
				<div className="mx-auto h-12 w-12 rounded-2xl border border-white/15 bg-white/10" />
				<div className="text-sm font-semibold tracking-wide text-white/90">{label}</div>
				<div className="text-xs text-white/55">Add screenshot mockup</div>
			</div>
		</div>
	)
}

export function IphoneMockup({ screenshot, device = "phone", className }: MockupProps) {
  const isPhone = device === "phone"

  const aspectClass = isPhone ? "aspect-[9/18.9]" : "aspect-[16/10]"

  return (
		<div className={cn("relative mx-auto", className)}>
			{/* Phone shell (background) */}
			<div className={cn("absolute inset-0 flex items-center justify-center pointer-events-none", aspectClass)}>
				<div className="w-full h-full transform scale-105 rounded-3xl border border-border/30 bg-transparent shadow-[0_10px_30px_rgba(2,6,23,0.06)]" />
			</div>

			{/* Screenshot container (fits inside shell) */}
			<div className={cn("relative w-full overflow-hidden rounded-xl border border-border/20 bg-card/70", aspectClass)}>
				{screenshot.placeholder || !screenshot.src ? (
					<PlaceholderScreen label={screenshot.label} />
				) : (
					<Image
						src={screenshot.src}
						alt={screenshot.label}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-contain object-center"
					/>
				)}
			</div>
		</div>
  )
}
