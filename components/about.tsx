import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Users, Lightbulb, Target } from "lucide-react"

export function About() {
  const skills = [
    "User Research",
    "Wireframing",
    "Prototyping",
    "Visual Design",
    "Interaction Design",
    "Usability Testing",
    "Design Systems",
    "User Experience (UX) Design",
    "Figma",
    "FigJam",
    "Flutter",
    "HTML/CSS/Javascript",
    "DotNet",
    "Python",
  ]

  const values = [
    {
      icon: Users,
      title: "User-Centered",
      description:
        "Every design decision is made with the user in mind, ensuring intuitive and accessible experiences.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "I love exploring new design trends and technologies to create cutting-edge solutions.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on achieving business objectives while maintaining excellent user experience.",
    },
    {
      icon: Palette,
      title: "Aesthetic Excellence",
      description: "Combining beautiful visuals with functional design to create memorable experiences.",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate UI/UX designer with over 2 years of experience creating digital experiences that bridge the
            gap between user needs and business goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground">
            I kicked off as a UI/UX Designer, falling in love with creating smooth, beautiful digital experiences during my first project. Now, I focus on designs that look great and solve real user problems.
            </p>
            <p className="text-muted-foreground">
              I believe great design is invisible – it just works. My approach combines user research, data-driven
              insights, and creative problem-solving to deliver exceptional digital experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Skills & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                    variant="secondary"
                    className="text-sm transition-all hover:scale-105 bg-muted text-foreground hover:bg-muted/70 border border-border"
                    >
                    {skill}
                  </Badge>

              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="text-center group hover:shadow-lg transition-all duration-300 border-primary/40 hover:border-primary/70"
            >
              <CardContent className="pt-6">
                <div
                  className={`inline-flex p-3 rounded-full mb-4 ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-secondary to-primary"
                      : "bg-gradient-to-r from-secondary to-primary"
                  }`}
                >
                  <value.icon className="h-6 w-6 text-primary-foreground group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
