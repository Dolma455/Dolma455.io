import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary))_0%,transparent_50%)] opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-gradient">Available for new projects</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Designing Intuitive
                <span className="text-gradient block">Digital Worlds</span>
                That Connect
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                UI/UX Designer creating smooth, beautiful digital experiences that solve problems and delight users.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary">
                <Link href="#portfolio">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-primary/20 hover:opacity-80 transition-opacity hover:text-foreground">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">10+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl"></div>
              <Image
              src="/image/1.jpg"
              alt="Dolma Lama - UI/UX Designer"
              width={400}
              height={500}
              className="relative rounded-2xl shadow-2xl border border-primary/10"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Link href="#about" className="animate-bounce">
            <ArrowDown className="h-6 w-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" />
          </Link>
        </div>
      </div>
    </section>
  )
}
