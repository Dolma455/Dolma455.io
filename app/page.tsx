import { Hero } from "@/components/hero"
import { FloatingConsultButton } from "@/components/ui/floating-consult-button"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { CinematicFooter } from "@/components/ui/motion-footer"
import { ShootingStars } from "@/components/effects/shooting-stars"

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative">
      <Header />
      <main className="relative overflow-hidden">
        <ShootingStars className="opacity-50" />
        <Hero />
        <About />
        <Services />
        <Portfolio />
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
