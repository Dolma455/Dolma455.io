import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GridBackground } from "@/components/ui/grid-background"
import { getProjectBySlug, projects } from "@/lib/projects"
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { IphoneMockup } from "@/components/effects/iphone-mockup"
import BrowserMockup from "@/components/effects/browser-mockup"
import ScreenshotGallery from "@/components/projects/screenshot-gallery"
import { notFound } from "next/navigation"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Dolma Lama`,
    description: project.summary,
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      <GridBackground className="opacity-45" />

      <main className="relative container mx-auto px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mb-8">
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/#portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
        <div className="space-y-10">
          <article className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-gradient text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
              <p className="max-w-3xl text-lg text-foreground/80">{project.summary}</p>
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="rounded-full border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">{project.year}</Badge>
                <Badge className="rounded-full border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">{project.role}</Badge>
                <Badge className="rounded-full border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">{project.client}</Badge>
                <Badge className="rounded-full border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">{project.duration}</Badge>
              </div>
            </div>

            <section className="space-y-4">
              {/* Screenshots header removed per design — screenshots follow below */}

              {project.device === "phone" ? (
                project.slug === "self-service-app" ? (
                  (() => {
                    const ssaImages = project.screenshots.filter((s) => s.src && s.src.includes("ssa_"))
                    return <ScreenshotGallery screenshots={ssaImages} />
                  })()
                ) : (
                  <div className="flex gap-6 overflow-x-auto py-4">
                    {project.screenshots.map((screenshot) => (
                      <div key={screenshot.label} className="w-[220px] flex-shrink-0">
                        <IphoneMockup screenshot={screenshot} device="phone" />
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="flex flex-col gap-6">
                  {(() => {
                    const pairs: typeof project.screenshots[] = []
                    for (let i = 0; i < project.screenshots.length; i += 2) {
                      pairs.push(project.screenshots.slice(i, i + 2))
                    }
                    return pairs.map((pair, idx) => (
                      <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                        {pair.length === 2 ? (
                          <>
                            <div>
                              <BrowserMockup screenshot={pair[0]} />
                            </div>
                            <div>
                              <BrowserMockup screenshot={pair[1]} />
                            </div>
                          </>
                        ) : (
                          <div className="lg:col-span-2">
                            <BrowserMockup screenshot={pair[0]} />
                          </div>
                        )}
                      </div>
                    ))
                  })()}
                </div>
              )}
            </section>
          </article>

          <div className="flex items-center justify-between">
            <div>
              {project.liveUrl ? (
                <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live Product
                  </Link>
                </Button>
              ) : null}
            </div>

            <div>
              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 font-medium hover:bg-primary/20 transition-colors"
                >
                  <span className="sr-only">Next project</span>
                  <span className="text-sm">Next — {nextProject.title}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
