import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

type DevelopmentStep = {
  id: string
  title: string
  description: string
  src: string
}

const developmentSteps: DevelopmentStep[] = [
  {
    id: "step-1",
    title: "1. Requirements Planning",
    description: "Define app goals, user stories, and the MVP scope before implementation starts.",
    src: "/image/mobile-app-development/01-requirements.svg",
  },
  {
    id: "step-2",
    title: "2. Architecture Setup",
    description: "Design project structure, module boundaries, and scalable state flow.",
    src: "/image/mobile-app-development/02-architecture.svg",
  },
  {
    id: "step-3",
    title: "3. UI Implementation",
    description: "Build feature screens and reusable widgets with responsive constraints.",
    src: "/image/mobile-app-development/03-ui-implementation.svg",
  },
  {
    id: "step-4",
    title: "4. State Management",
    description: "Connect UI with business logic, caching, and predictable updates.",
    src: "/image/mobile-app-development/04-state-management.svg",
  },
  {
    id: "step-5",
    title: "5. API Integration",
    description: "Integrate backend endpoints with auth, loading states, and error handling.",
    src: "/image/mobile-app-development/05-api-integration.svg",
  },
  {
    id: "step-6",
    title: "6. QA and Testing",
    description: "Run unit, widget, and integration tests to ensure reliability.",
    src: "/image/mobile-app-development/06-testing.svg",
  },
  {
    id: "step-7",
    title: "7. Release and Deployment",
    description: "Prepare app store assets, build pipeline, and staged rollout strategy.",
    src: "/image/mobile-app-development/07-release.svg",
  },
  {
    id: "step-8",
    title: "8. Monitoring and Iteration",
    description: "Track production metrics and feedback to continuously improve the app.",
    src: "/image/mobile-app-development/08-monitoring.svg",
  },
]

export default function MobileAppDevelopmentPage() {
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

      <h1 className="mb-6 text-4xl font-bold">Mobile App Development - Process and Mockups</h1>

      <p className="mb-8 text-lg text-foreground/80">
        This page shows a complete mobile development workflow from planning to post-release iteration with custom mockup visuals.
      </p>

        <div className="space-y-20">
          {developmentSteps.map((step) => (
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
