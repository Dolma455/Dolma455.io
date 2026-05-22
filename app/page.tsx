import { Hero } from "@/components/hero"
import { FloatingConsultButton } from "@/components/ui/floating-consult-button"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { CinematicFooter } from "@/components/ui/motion-footer"

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative">
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <CinematicFooter />
      <FloatingConsultButton
        imageSrc="/image/1.jpg"
        imageAlt="Dolma Lama — get in touch"
        revolvingText="GET IN TOUCH · LET'S TALK · FREE CONSULT · "
        revolvingSpeed={12}
        position={{ bottom: "2rem", left: "2rem" }}
      />
    </div>
  )
}
