import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

type ResearchStep = {
  id: string
  title: string
  description: string
  src: string
}

const researchSteps: ResearchStep[] = [
  {
    id: "step-1",
    title: "1. Research Goals",
    description: "Define the research scope, key assumptions, and success metrics before starting discovery.",
    src: "/image/user-research/01-goals.svg",
  },
  {
    id: "step-2",
    title: "2. Stakeholder Interviews",
    description: "Collect business priorities, constraints, and product expectations from internal teams.",
    src: "/image/user-research/02-stakeholders.svg",
  },
  {
    id: "step-3",
    title: "3. User Interviews",
    description: "Run structured conversations to uncover pain points, goals, and behavior patterns.",
    src: "/image/user-research/03-user-interviews.svg",
  },
  {
    id: "step-4",
    title: "4. Survey Design",
    description: "Create quantitative surveys to validate interview findings with broader samples.",
    src: "/image/user-research/04-survey.svg",
  },
  {
    id: "step-5",
    title: "5. Persona Synthesis",
    description: "Group insights into clear persona profiles that represent key user segments.",
    src: "/image/user-research/05-personas.svg",
  },
  {
    id: "step-6",
    title: "6. Journey Mapping",
    description: "Map user journeys from entry to outcome to identify friction and opportunities.",
    src: "/image/user-research/06-journey.svg",
  },
  {
    id: "step-7",
    title: "7. Usability Testing",
    description: "Validate flows with target users and document severity-based usability issues.",
    src: "/image/user-research/07-usability.svg",
  },
  {
    id: "step-8",
    title: "8. Insights & Reporting",
    description: "Summarize findings, prioritize recommendations, and align design and product teams.",
    src: "/image/user-research/08-reporting.svg",
  },
]

export default function UserResearchPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 pt-12 pb-24">
        <div className="mb-6">
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/#services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </div>

      <h1 className="mb-6 text-4xl font-bold">User Research - Process & Mockups</h1>

      <p className="mb-8 text-lg text-foreground/80">
        This flow shows how research moves from planning to validated findings. Since screenshots were not provided,
        the visuals below are custom mockups to represent each stage.
      </p>

        <div className="space-y-20">
          {researchSteps.map((step) => (
            <section id={step.id} key={step.id}>
              <h2 className="text-gradient mb-2 text-3xl font-semibold">{step.title}</h2>
              <p className="mb-4 text-sm text-foreground/80">{step.description}</p>
              <div className="w-full overflow-hidden rounded-xl border border-border/60 bg-slate-100/70 shadow-sm dark:bg-slate-900/40">
                <img
                  src={step.src}
                  alt={step.title}
                  className="h-[80vh] w-full object-cover md:h-[90vh] contrast-125 saturate-125 brightness-95 dark:brightness-100 dark:contrast-100 dark:saturate-100"
                />
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}
