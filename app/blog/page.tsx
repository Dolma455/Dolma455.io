import type { Metadata } from "next"
import Link from "next/link"
import { LazyImage } from "@/components/ui/lazy-image"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Blog | Dolma Lama",
  description: "Thoughts on design, development, and building digital products.",
}

const blogs = [
  {
    title: "Designing for Clarity: Why Less is Always More",
    slug: "#",
    description:
      "Good design isn't about adding more — it's about removing everything that doesn't serve the user. Here's how I approach reducing noise in interfaces.",
    image: "https://picsum.photos/seed/design1/640/360",
    createdAt: "2025-05-18",
    author: "Dolma Lama",
    readTime: "5 min read",
    category: "Design",
  },
  {
    title: "Flutter Architecture Patterns That Actually Scale",
    slug: "#",
    description:
      "After building dozens of Flutter apps, I've landed on a set of patterns that keep codebases clean, testable, and ready for a team of any size.",
    image: "https://picsum.photos/seed/flutter2/640/360",
    createdAt: "2025-04-30",
    author: "Dolma Lama",
    readTime: "8 min read",
    category: "Development",
  },
  {
    title: "UX Research on a Startup Budget",
    slug: "#",
    description:
      "You don't need a lab or a big research budget to get meaningful insights. A few smart techniques can unlock everything you need to make better decisions.",
    image: "https://picsum.photos/seed/ux3/640/360",
    createdAt: "2025-04-12",
    author: "Dolma Lama",
    readTime: "6 min read",
    category: "Research",
  },
  {
    title: "Dark Mode Done Right: A Designer's Checklist",
    slug: "#",
    description:
      "Dark mode is more than inverting colours. I've compiled a practical checklist from real projects to make sure your dark experience feels intentional.",
    image: "https://picsum.photos/seed/darkmode4/640/360",
    createdAt: "2025-03-28",
    author: "Dolma Lama",
    readTime: "4 min read",
    category: "Design",
  },
  {
    title: "Inside a Trading App Redesign: Speed vs. Clarity",
    slug: "#",
    description:
      "When every millisecond counts and the data is dense, how do you keep an interface readable? Lessons learned from NAASA X.",
    image: "https://picsum.photos/seed/trading5/640/360",
    createdAt: "2025-03-10",
    author: "Dolma Lama",
    readTime: "10 min read",
    category: "Case Study",
  },
  {
    title: "Microinteractions That Delight Without Distracting",
    slug: "#",
    description:
      "The best microinteractions go unnoticed — until they're gone. Here's how I design transitions and feedback that feel invisible but essential.",
    image: "https://picsum.photos/seed/micro6/640/360",
    createdAt: "2025-02-22",
    author: "Dolma Lama",
    readTime: "6 min read",
    category: "Design",
  },
  {
    title: "Typography That Speaks: Picking the Right Typeface",
    slug: "#",
    description:
      "How to select and pair typefaces that enhance readability, hierarchy, and brand personality across digital products.",
    image: "https://picsum.photos/seed/type7/640/360",
    createdAt: "2025-02-08",
    author: "Dolma Lama",
    readTime: "7 min read",
    category: "Design",
  },
  {
    title: "Designing for Mobile-First in 2025",
    slug: "#",
    description:
      "Best practices for mobile-first design, from layout decisions to performance optimization that holds up on the worst connections.",
    image: "https://picsum.photos/seed/mobile8/640/360",
    createdAt: "2025-01-20",
    author: "Dolma Lama",
    readTime: "7 min read",
    category: "Development",
  },
  {
    title: "Accessibility Beyond Compliance",
    slug: "#",
    description:
      "Practical steps to make your UI accessible — not just legally compliant, but genuinely inclusive for everyone who uses your product.",
    image: "https://picsum.photos/seed/a11y9/640/360",
    createdAt: "2025-01-06",
    author: "Dolma Lama",
    readTime: "8 min read",
    category: "Research",
  },
]

const categoryColor: Record<string, string> = {
  Design: "text-primary border-primary/30 bg-primary/10",
  Development: "text-blue-500 border-blue-500/30 bg-blue-500/10",
  Research: "text-primary border-primary/30 bg-primary/10",
  "Case Study": "text-orange-500 border-orange-500/30 bg-orange-500/10",
}

export default function BlogPage() {
  return (
    <div className="relative min-h-screen text-foreground overflow-hidden">
      <Header />

      {/* Subtle background radial glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 isolate -z-10 opacity-60"
      >
        <div className="-rotate-45 absolute top-0 left-0 h-[800px] w-[560px] -translate-y-[350px] rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(168,85,247,0.06)_0,rgba(140,140,140,0.02)_50%,rgba(168,85,247,0.01)_80%)]" />
        <div className="-rotate-45 absolute top-0 right-0 h-[500px] w-[300px] translate-x-[20%] -translate-y-[30%] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(168,85,247,0.05)_0,rgba(168,85,247,0.01)_80%,transparent_100%)]" />
      </div>

      <main className="relative mx-auto w-full max-w-5xl px-4 pb-24 pt-20 lg:pt-24">
        {/* Page Header */}
        <div className="space-y-1 px-0 py-4 mb-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Writing
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
            Blog
          </h1>
          <p className="text-muted-foreground text-base pt-2 max-w-lg">
            Thoughts on design, development, and building products people actually want to use.
          </p>
        </div>

        {/* Dashed divider */}
        <div className="w-full border-b border-dashed border-border/60 mb-8" />

        {/* Grid */}
        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              href={blog.slug}
              key={blog.title}
              className="group flex flex-col gap-3 rounded-xl p-3 hover:bg-primary/5 active:bg-primary/10 transition-colors duration-150"
            >
              <LazyImage
                src={blog.image}
                fallback="https://placehold.co/640x360?text=Dolma+Lama"
                inView={true}
                alt={blog.title}
                ratio={16 / 9}
                className="transition-transform duration-500 group-hover:scale-[1.03]"
                AspectRatioClassName="border-border/40"
              />

              <div className="space-y-2 px-1 pb-2">
                {/* Meta row */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                      categoryColor[blog.category] ?? "text-muted-foreground border-border/40 bg-muted/30"
                    }`}
                  >
                    {blog.category}
                  </span>
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50 inline-block" />
                    {blog.createdAt}
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50 inline-block" />
                    {blog.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="line-clamp-2 text-base leading-snug font-bold tracking-tight group-hover:text-primary transition-colors duration-200">
                  {blog.title}
                </h2>

                {/* Excerpt */}
                <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

