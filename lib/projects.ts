export type Project = {
  slug: string
  title: string
  summary: string
  description: string
  image: string
  tags: string[]
  featured: boolean
  year: string
  role: string
  client: string
  duration: string
  liveUrl?: string
  problem: string
  solution: string
  impact: string[]
  process: string[]
}

export const projects: Project[] = [
  {
    slug: "connect-infinity",
    title: "Connect Infinity - Call Center App",
    summary: "A dynamic call center app for seamless call handling and ticket management.",
    description:
      "A dynamic call center app for seamless call handling and ticket management, ensuring top-notch customer support.",
    image: "/image/projects/connect-infinity.jpg",
    tags: ["Web App", "Call Center"],
    featured: true,
    year: "2025",
    role: "Lead UI/UX Designer",
    client: "Connect Infinity",
    duration: "4 months",
    liveUrl: "https://connectinfinity.io/",
    problem:
      "Support teams were juggling calls and tickets across disconnected tools, which slowed down response times and lowered visibility into customer issues.",
    solution:
      "I designed a unified dashboard for call handling, ticket lifecycle tracking, and status-driven workflows with a cleaner information hierarchy.",
    impact: [
      "Reduced average ticket handling friction with a single-screen workflow",
      "Improved visibility for support managers with clearer status segmentation",
      "Raised overall usability with a simplified interaction model",
    ],
    process: ["Discovery workshops", "Task-flow mapping", "Wireframes", "High-fidelity UI", "Prototype testing"],
  },
  {
    slug: "naasa-x",
    title: "Naasa X - Trading Platform",
    summary: "A smart trading platform for real-time insights and efficient portfolio management.",
    description:
      "A smart trading platform for seamless trade execution, real-time insights, and efficient portfolio management.",
    image: "/image/projects/naasax.jpg",
    tags: ["Web App", "Mobile App", "TMS"],
    featured: true,
    year: "2025",
    role: "Product Designer",
    client: "Naasa Securities",
    duration: "6 months",
    liveUrl:
      "https://auth.naasasecurities.com.np/realms/naasa/protocol/openid-connect/auth?client_id=blaze&scope=openid%20profile&response_type=code&redirect_uri=https://x.naasasecurities.com.np/login",
    problem:
      "Traders needed faster decision-making and cleaner execution flows without losing access to advanced market context.",
    solution:
      "I built a modular trading experience with focused chart surfaces, improved order entry clarity, and responsive mobile handoff patterns.",
    impact: [
      "Simplified trade execution path for both novice and advanced users",
      "Enhanced cross-device consistency between web and mobile",
      "Improved clarity of portfolio and market data presentation",
    ],
    process: ["Competitive audit", "Journey mapping", "Design system setup", "Interactive prototypes", "Iteration cycles"],
  },
  {
    slug: "naasa-kyc",
    title: "Naasa Securities KYC",
    summary: "An online KYC flow for identity verification and account onboarding.",
    description:
      "Naasa Securities KYC is an online system for verifying and managing client identity to open or update trading and DEMAT accounts.",
    image: "/image/projects/kyc.jpg",
    tags: ["Mobile App", "Web App", "KYC"],
    featured: false,
    year: "2024",
    role: "UI/UX Designer",
    client: "Naasa Securities",
    duration: "3 months",
    liveUrl: "https://naasasecurities.com.np/",
    problem:
      "Traditional onboarding was document-heavy and confusing, leading to incomplete submissions and delays.",
    solution:
      "Designed a guided, step-by-step KYC journey with clear validations, progress feedback, and better document upload states.",
    impact: [
      "Reduced drop-offs during identity submission",
      "Improved completion confidence with better step communication",
      "Made KYC status tracking clearer for users",
    ],
    process: ["Flow simplification", "Form architecture", "Validation UX", "Mobile-first screens", "Accessibility pass"],
  },
  {
    slug: "revai",
    title: "RevAI - Chatbot",
    summary: "An AI assistant platform for document and speech-driven query resolution.",
    description:
      "AI platform that processes speech or documents and responds with accurate, helpful solutions to user queries.",
    image: "/image/projects/revai.jpg",
    tags: ["Web App", "Chatbot"],
    featured: false,
    year: "2024",
    role: "UX Designer",
    client: "RevAI",
    duration: "2 months",
    problem:
      "Users struggled to understand AI capabilities and expected confidence in response quality and source context.",
    solution:
      "Created a conversational UI with clearer state transitions, confidence signals, and source-aware response patterns.",
    impact: [
      "Improved trust via clearer response explanations",
      "Made multi-input interactions easier to understand",
      "Reduced confusion in first-time user journeys",
    ],
    process: ["Prompt journey mapping", "Conversation state design", "UI states", "Usability checks", "Final polish"],
  },
  {
    slug: "loyaledge",
    title: "Loyaledge - Loyalty Reward Program",
    summary: "A rewards platform that increases repeat engagement through points and perks.",
    description:
      "A system that offers customers points, discounts, or perks for repeated purchases or engagement to encourage brand loyalty.",
    image: "/image/projects/loyaledge.jpg",
    tags: ["Web App", "Reward", "Engagement"],
    featured: false,
    year: "2024",
    role: "UI Designer",
    client: "Loyaledge",
    duration: "2.5 months",
    problem:
      "Reward systems often feel opaque, making users unsure how to earn and redeem benefits effectively.",
    solution:
      "Designed an experience centered around transparent points logic, progress visibility, and redemption-focused interactions.",
    impact: [
      "Improved reward comprehension and perceived value",
      "Encouraged repeat interactions with clearer milestone cues",
      "Increased consistency across dashboard and redemption flows",
    ],
    process: ["Information architecture", "Dashboard redesign", "Visual hierarchy tuning", "Micro-interactions", "QA handoff"],
  },
  {
    slug: "naasa-wallet",
    title: "Naasa Wallet",
    summary: "A digital wallet experience for day-to-day financial transactions.",
    description: "Naasa Wallet is a digital wallet for managing financial transactions.",
    image: "/image/projects/wallet.jpg",
    tags: ["Web App", "Mobile App", "Wallet"],
    featured: false,
    year: "2024",
    role: "Product Designer",
    client: "Naasa Securities",
    duration: "3 months",
    liveUrl:
      "https://auth.naasasecurities.com.np/realms/naasa/protocol/openid-connect/auth?client_id=naasa-wallet&scope=openid%20profile&response_type=code&redirect_uri=https%3A%2F%2Fwallet.naasasecurities.com.np%2Fapi%2Fauth%2Fcallback%2Fkeycloak&state=eWJxq19SpPLOCEnG3veeDSOQMYSRdqGMw1yvP1UzLYQ",
    problem:
      "Users needed a wallet interface that felt fast and reassuring for sensitive financial actions.",
    solution:
      "Focused the UX on safe action confirmation, transaction readability, and frictionless transfer and balance flows.",
    impact: [
      "Improved transaction legibility and confidence",
      "Reduced cognitive load in transfer flows",
      "Created a cleaner cross-platform wallet experience",
    ],
    process: ["User flow review", "Core action prioritization", "UI components", "Prototype validation", "Design QA"],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
