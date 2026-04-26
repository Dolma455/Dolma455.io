import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShootingStars } from "@/components/effects/shooting-stars"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="relative overflow-hidden">
        <ShootingStars className="opacity-50" />
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[8%] top-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute right-[10%] top-[32%] h-96 w-96 rounded-full bg-accent/12 blur-3xl" />
          <div className="absolute bottom-16 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
