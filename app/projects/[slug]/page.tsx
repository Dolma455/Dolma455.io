import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GridBackground } from "@/components/ui/grid-background"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { getProjectBySlug, projects } from "@/lib/projects"
import { ArrowLeft, ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
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
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <GridBackground className="opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/5 to-primary/15" />

      <main className="relative container mx-auto px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mb-8">
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/#portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
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

            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-2 backdrop-blur-xl">
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
              <Image
                src={project.image}
                alt={project.title}
                width={1280}
                height={720}
                className="relative w-full rounded-[1.2rem] object-cover"
                priority
              />
            </div>

            <section className="grid gap-6 md:grid-cols-2">
              <SpotlightCard>
                <h2 className="text-lg font-semibold text-foreground">The Challenge</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
              </SpotlightCard>
              <SpotlightCard>
                <h2 className="text-lg font-semibold text-foreground">The Approach</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
              </SpotlightCard>
            </section>

            <section className="rounded-3xl border border-border/70 bg-card/70 p-7 backdrop-blur-xl">
              <h2 className="text-xl font-semibold text-foreground">Impact</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {project.impact.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="h-fit space-y-6 lg:sticky lg:top-28">
            <SpotlightCard className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Project Snapshot</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start justify-between gap-6 border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Year</span>
                  <span className="font-medium">{project.year}</span>
                </div>
                <div className="flex items-start justify-between gap-6 border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Role</span>
                  <span className="text-right font-medium">{project.role}</span>
                </div>
                <div className="flex items-start justify-between gap-6 border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Client</span>
                  <span className="text-right font-medium">{project.client}</span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">{project.duration}</span>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard>
              <h3 className="text-base font-semibold text-foreground">Process</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.process.map((step) => (
                  <Badge key={step} variant="outline" className="rounded-full border-primary/30 bg-primary/5 text-primary">
                    {step}
                  </Badge>
                ))}
              </div>
            </SpotlightCard>

            {project.liveUrl ? (
              <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Live Product
                </Link>
              </Button>
            ) : null}
          </aside>
        </div>
      </main>
    </div>
  )
}
