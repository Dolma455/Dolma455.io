"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface LazyImageProps {
  alt: string
  src: string
  className?: string
  AspectRatioClassName?: string
  /** URL of the fallback image */
  fallback?: string
  /** The ratio of the image */
  ratio: number
  /** Whether the image should only load when it is in view */
  inView?: boolean
}

export function LazyImage({
  alt,
  src,
  ratio,
  fallback,
  inView = false,
  className,
  AspectRatioClassName,
}: LazyImageProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const imgRef = React.useRef<HTMLImageElement | null>(null)
  const isInView = useInView(ref, { once: true })

  const [imgSrc, setImgSrc] = React.useState<string | undefined>(
    inView ? undefined : src
  )
  const [isLoading, setIsLoading] = React.useState(true)

  const handleError = () => {
    if (fallback) setImgSrc(fallback)
    setIsLoading(false)
  }

  const handleLoad = () => setIsLoading(false)

  React.useEffect(() => {
    if (inView && isInView && !imgSrc) setImgSrc(src)
  }, [inView, isInView, src, imgSrc])

  React.useEffect(() => {
    if (imgRef.current?.complete) handleLoad()
  }, [imgSrc])

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      className={cn(
        "relative size-full overflow-hidden rounded-xl border border-border/40",
        AspectRatioClassName
      )}
    >
      {/* Skeleton */}
      <div
        className={cn(
          "absolute inset-0 animate-pulse rounded-xl bg-muted/40 transition-opacity will-change-[opacity]",
          { "opacity-0": !isLoading }
        )}
      />

      {imgSrc && (
        <img
          ref={imgRef}
          alt={alt}
          src={imgSrc}
          className={cn(
            "size-full rounded-xl object-cover opacity-0 transition-opacity duration-700 will-change-[opacity]",
            { "opacity-100": !isLoading },
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          fetchPriority={inView ? "high" : "low"}
        />
      )}
    </AspectRatio>
  )
}
