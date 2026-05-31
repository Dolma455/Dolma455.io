import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { IphoneMockup } from "@/components/effects/iphone-mockup"
import { Header } from "@/components/header"

export default function Page() {
  const processImages = {
    research: "/image/projects/research_requirements.png",
    wireframing: "/image/projects/wireframing.png",
    visualDesign: "/image/projects/visual_design.png",
    prototyping: "/image/projects/prototyping.png",
    usabilityTesting: "/image/projects/usability_tesing.png",
    designRevisions: "/image/projects/design%20review.png",
    developerHandoff: "/image/projects/developer_handoff.png",
  }

  const ssaImages = [
    "/image/projects/ssa_dashbaord.PNG",
    "/image/projects/ssa_details.PNG",
    "/image/projects/ssa_gainerloser.PNG",
    "/image/projects/ssa_kyc.PNG",
    "/image/projects/ssa_login.PNG",
    "/image/projects/ssa_order.PNG",
    "/image/projects/ssa_portfolio.PNG",
    "/image/projects/ssa_profile.PNG",
    "/image/projects/ssa_settings.PNG",
    "/image/projects/ssa_sidebar.PNG",
    "/image/projects/ssa_theme.PNG",
  ]

  const implementationPreviewImages = ssaImages.slice(0, 6)

  const dsImages = [
    "/image/projects/ds_2.png",
    "/image/projects/ds_3.png",
    "/image/projects/ds_4.png",
    "/image/projects/ds_5.png",
    "/image/projects/ds_6.png",
  ]

  const visualDesignDsImages = [
    "/image/projects/ds_1.png",
    "/image/projects/ds_2.png",
  ]

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

      <h1 className="text-4xl font-bold mb-6">UI Design — Process & Deliverables</h1>

      <p className="text-lg text-muted-foreground mb-8">
        The UI design process below is written as a scrollable narrative — each step includes a short description and
        a large illustrative screenshot that fills the viewport area so reviewers can focus on the visual details.
      </p>

        <div className="space-y-20">
        {/* Steps 1-8 as requested by user */}
        <section id="step-1">
          <h2 className="text-gradient text-3xl font-semibold mb-2">1. Research & Requirements</h2>
          <p className="text-sm text-muted-foreground mb-4">Competitive analysis, stakeholder interviews, user needs, and success metrics.
          </p>
          <div className="w-full overflow-hidden rounded-xl border border-border/40">
            <img src={processImages.research} alt="Research & Requirements" className="w-full h-[80vh] md:h-[90vh] object-cover" />
          </div>
        </section>

        <section id="step-2">
          <h2 className="text-gradient text-3xl font-semibold mb-2">2. Wireframing</h2>
          <p className="text-sm text-muted-foreground mb-4">Low-fidelity layouts to establish information architecture and content hierarchy.</p>
          <div className="w-full overflow-hidden rounded-xl border border-border/40">
            <img src={processImages.wireframing} alt="Wireframing" className="w-full h-[80vh] md:h-[90vh] object-cover" />
          </div>
        </section>

        <section id="step-3">
          <h2 className="text-gradient text-3xl font-semibold mb-2">3. Visual Design (Colors, Typography, Components)</h2>
          <p className="text-sm text-muted-foreground mb-4">Define color systems, typographic scale, components and tokens for consistency.</p>
          <div className="space-y-4">
            <div className="w-full overflow-hidden rounded-xl border border-border/40">
              <img src={processImages.visualDesign} alt="Visual Design" className="w-full h-[80vh] md:h-[90vh] object-cover" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {visualDesignDsImages.map((src) => (
                <div key={src} className="overflow-hidden rounded-xl border border-border/40">
                  <img src={src} alt="Design system visual design reference" className="w-full h-[32rem] object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="step-4">
          <h2 className="text-gradient text-3xl font-semibold mb-2">4. Prototyping</h2>
          <p className="text-sm text-muted-foreground mb-4">Interactive prototypes used to validate flows and micro-interactions.</p>
          <div className="w-full overflow-hidden rounded-xl border border-border/40">
            <img src={processImages.prototyping} alt="Prototyping" className="w-full h-[80vh] md:h-[90vh] object-cover" />
          </div>
        </section>

        <section id="step-5">
          <h2 className="text-gradient text-3xl font-semibold mb-2">5. Usability Testing</h2>
          <p className="text-sm text-muted-foreground mb-4">Run sessions, collect usability metrics, and synthesize findings into actionable changes.</p>
          <div className="w-full overflow-hidden rounded-xl border border-border/40">
            <img src={processImages.usabilityTesting} alt="Usability Testing" className="w-full h-[80vh] md:h-[90vh] object-cover" />
          </div>
        </section>

        <section id="step-6">
          <h2 className="text-gradient text-3xl font-semibold mb-2">6. Design Revisions</h2>
          <p className="text-sm text-muted-foreground mb-4">Iterate designs based on testing and stakeholder feedback, producing updated screens and specs.</p>
          <div className="w-full overflow-hidden rounded-xl border border-border/40">
            <img src={processImages.designRevisions} alt="Design Revisions" className="w-full h-[80vh] md:h-[90vh] object-cover" />
          </div>
        </section>

        <section id="step-7">
          <h2 className="text-gradient text-3xl font-semibold mb-2">7. Developer Handoff</h2>
          <p className="text-sm text-muted-foreground mb-4">Provide tokens, redlines, exportable assets, and documentation for engineering implementation.</p>
          <div className="w-full overflow-hidden rounded-xl border border-border/40">
            <img src={processImages.developerHandoff} alt="Developer Handoff" className="w-full h-[80vh] md:h-[90vh] object-cover" />
          </div>
        </section>

        <section id="step-8">
          <h2 className="text-gradient text-3xl font-semibold mb-2">8. Implementation Review</h2>
          <p className="text-sm text-muted-foreground mb-2">Design implementation mockups in iPhone frames, using the first six SSA screenshots.</p>
          <p className="text-sm text-muted-foreground mb-4">Review built UI for fidelity, accessibility, performance and finalize minor adjustments.</p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {implementationPreviewImages.map((src) => (
              <IphoneMockup
                key={src}
                screenshot={{ label: "SSA implementation review screenshot", src }}
                className="w-full max-w-[18rem]"
              />
            ))}
          </div>
        </section>
        </div>
      </main>
    </>
  )
}
