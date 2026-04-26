import { cn } from "@/lib/utils"

type GridBackgroundProps = {
  className?: string
}

export function GridBackground({ className }: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 [background-size:36px_36px] [background-image:linear-gradient(to_right,color-mix(in_oklab,var(--color-border)_50%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-border)_50%,transparent)_1px,transparent_1px)] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]",
        className,
      )}
    />
  )
}
