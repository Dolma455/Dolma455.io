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

function ScreenFrame({ screenshot, device }: { screenshot: ProjectScreenshot; device: ProjectDevice }) {
	const isPhone = device === "phone"

	return (
		<div
			className={cn(
				"relative mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_35px_90px_rgba(15,23,42,0.35)]",
				isPhone ? "aspect-[9/18.9] w-full max-w-[20rem]" : "aspect-[16/10] w-full"
			)}
		>
			{screenshot.placeholder || !screenshot.src ? (
				<PlaceholderScreen label={screenshot.label} />
			) : (
				<Image
					src={screenshot.src}
					alt={screenshot.label}
					fill
					sizes="(max-width: 768px) 100vw, 50vw"
					className="object-cover"
				/>
			)}
		</div>
	)
}

export function IphoneMockup({ screenshot, device = "phone", className }: MockupProps) {
	const isPhone = device === "phone"

	return (
		<div className={cn("relative isolate mx-auto flex w-full justify-center perspective-[1600px]", className)}>
			<div
				className={cn(
					"relative w-full max-w-[26rem] rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-3 shadow-[0_40px_100px_rgba(15,23,42,0.42)] backdrop-blur-xl",
					isPhone ? "rotate-x-[14deg] rotate-y-[-18deg]" : "rotate-x-[10deg] rotate-y-[-14deg]"
				)}
				style={{ transformStyle: "preserve-3d" }}
			>
				{isPhone ? (
					<div className="pointer-events-none absolute inset-x-[33%] top-1 h-5 rounded-b-2xl bg-black/95" />
				) : (
					<div className="mb-3 flex items-center gap-2 rounded-[1.1rem] border border-white/8 bg-white/5 px-4 py-3">
						<div className="flex gap-1.5">
							<span className="h-3 w-3 rounded-full bg-red-400/80" />
							<span className="h-3 w-3 rounded-full bg-amber-400/80" />
							<span className="h-3 w-3 rounded-full bg-emerald-400/80" />
						</div>
						<div className="mx-auto h-2 w-40 rounded-full bg-white/10" />
					</div>
				)}

				<div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 p-2">
					<ScreenFrame screenshot={screenshot} device={device} />
				</div>
			</div>
		</div>
	)
}
