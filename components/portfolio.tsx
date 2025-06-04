import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Portfolio() {
  const projects = [
    {
      title: "Connect Infinity - Call Center App",
      description:
        "A dynamic call center app for seamless call handling and ticket management, ensuring top-notch customer support.",
      image: "/image/projects/connect-infinity.jpg",
      tags: ["Web App", "Call Center"],
      liveUrl: "https://connectinfinity.io/",
      caseStudyUrl: "#",
      featured: true,
    },
    {
      title: "Naasa X - Trading Platform",
      description:
        "A smart trading platform for seamless trade execution, real-time insights, and efficient portfolio management.",
      image: "/image/projects/naasax.jpg",
      tags: ["Web App","Mobile App", "TMS"],
      liveUrl: "https://auth.naasasecurities.com.np/realms/naasa/protocol/openid-connect/auth?client_id=blaze&scope=openid%20profile&response_type=code&redirect_uri=https://x.naasasecurities.com.np/login",
      caseStudyUrl: "#",
      featured: true,
    },
    {
      title: "Naasa Securities KYC",
      description:
        "Naasa Securities KYC is an online system for verifying and managing client identity to open or update trading and DEMAT accounts.",
      image: "/image/projects/kyc.jpg",
      tags: ["Mobile App", "Web App","KYC"],
      liveUrl: "https://naasasecurities.com.np/",
      caseStudyUrl: "#",
      featured: false,
    },
    {
      title: "RevAI - Chatbot",
      description: "AI platform that processes speech or documents and responds with accurate, helpful solutions to user queries.",
      image: "/image/projects/revai.jpg",
      tags: ["Web App", "Chatbot"],
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: false,
    },
    {
      title: "Loyaledge - Loyalty Reward Program",
      description: "A system that offers customers points, discounts, or perks for repeated purchases or engagement to encourage brand loyalty.",
      image: "/image/projects/loyaledge.jpg",
      tags: ["Web App", "Reward","Engagement"],
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: false,
    },
    {
      title: "Naasa Wallet",
      description: "Naasa Wallet is a digital wallet for managing financial transactions.",
      image: "/image/projects/wallet.jpg",
      tags: ["Web App","Mobile App", "Wallet"],
      liveUrl: "https://auth.naasasecurities.com.np/realms/naasa/protocol/openid-connect/auth?client_id=naasa-wallet&scope=openid%20profile&response_type=code&redirect_uri=https%3A%2F%2Fwallet.naasasecurities.com.np%2Fapi%2Fauth%2Fcallback%2Fkeycloak&state=eWJxq19SpPLOCEnG3veeDSOQMYSRdqGMw1yvP1UzLYQ",
      caseStudyUrl: "#",
      featured: false,
    },
  ]

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of recent projects showcasing my approach to solving complex design challenges across various
            industries and platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
  <Card
    key={project.title}
    className={cn(
      "group overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/40 hover:border-primary/70 p-0", // Remove default card padding
      project.featured ? "ring-1 ring-primary/20" : ""
    )}
  >
    <div className="relative h-56 w-full overflow-hidden">
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-gradient-primary text-white">Featured</Badge>
        </div>
      )}
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={400}
        height={300}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <Button size="sm" variant="secondary" asChild className="bg-primary/90">
          <Link href={project.liveUrl}>
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </Link>
        </Button>
        <Button size="sm" variant="secondary" asChild className="bg-primary/90">
          <Link href={project.caseStudyUrl}>
            <Github className="h-4 w-4 mr-2" />
            Case Study
          </Link>
        </Button>
      </div>
    </div>

    <CardContent className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, tagIndex) => (
          <Badge
            key={tag}
            variant="outline"
            className={cn(
              "text-xs transition-all hover:scale-105",
              tagIndex % 2 === 0
                ? "border-primary/30 hover:bg-primary/5"
                : "border-secondary/30 hover:bg-secondary/5"
            )}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
))}

        </div>
      </div>
    </section>
  )
}
