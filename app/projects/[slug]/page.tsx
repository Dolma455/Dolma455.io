import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GridBackground } from "@/components/ui/grid-background"
import { getProjectBySlug, projects } from "@/lib/projects"
import { ArrowLeft, ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { IphoneMockup } from "@/components/effects/iphone-mockup"
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
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full border border-primary/30 bg-primary/10 text-primary">
                    {tag}
                  </Badge>
                ))}
                {project.featured ? <Badge className="rounded-full bg-accent text-accent-foreground">Featured</Badge> : null}
              </div>

              <h1 className="text-gradient text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
              <p className="max-w-3xl text-lg text-muted-foreground">{project.description}</p>
            </div>

            <section className="rounded-3xl border border-border/70 bg-card/70 p-6 backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Contribution</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/5 text-primary">
                    {project.year}
                  </Badge>
                  <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/5 text-primary">
                    {project.role}
                  </Badge>
                  <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/5 text-primary">
                    {project.client}
                  </Badge>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.process.map((step) => (
                  <Badge key={step} variant="outline" className="rounded-full border-primary/30 bg-primary/5 text-primary">
                    {step}
                  </Badge>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Screenshots</h2>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {project.screenshots.length} Views
                </span>
              </div>

              {project.slug === "self-service-app" ? (
                <div className="flex gap-6 overflow-x-auto py-4">
                  {project.screenshots.map((screenshot) => (
                    <div key={screenshot.label} className="w-[220px] flex-shrink-0">
                      <IphoneMockup screenshot={screenshot} device="phone" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid auto-rows-[180px] gap-6 md:grid-cols-12 md:auto-rows-[220px]">
                  {project.screenshots.map((screenshot, index) => {
                    const cellClass =
                      index % 4 === 0
                        ? "md:col-span-8 md:row-span-2"
                        : index % 4 === 1
                          ? "md:col-span-4 md:row-span-2"
                          : index % 4 === 2
                            ? "md:col-span-4"
                            : "md:col-span-8"

                    return (
                      <div key={screenshot.label} className={`relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/70 ${cellClass}`}>
                        {screenshot.placeholder || !screenshot.src ? (
                          <div className="flex h-full w-full items-center justify-center bg-muted/20 px-6 text-center">
                            <div className="space-y-2">
                              <p className="text-sm font-semibold text-foreground">{screenshot.label}</p>
                              <p className="text-xs text-muted-foreground">Screenshot coming soon</p>
                            </div>
                          </div>
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
                  })}
                </div>
              )}
            </section>
          </article>

          {project.liveUrl ? (
            <div className="flex justify-start">
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Live Product
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  )
}
