export type ProjectScreenshot = {
  label: string
  src?: string
  placeholder?: boolean
}

export type ProjectDevice = "phone" | "browser"

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
  device: ProjectDevice
  screenshots: ProjectScreenshot[]
}

const actualScreenshots = (prefix: string, screenshots: Array<{ label: string; src: string }>) =>
  screenshots.map((screenshot) => ({
    label: `${prefix} - ${screenshot.label}`,
    src: screenshot.src,
  }))

export const projects: Project[] = [
  {
    slug: "self-service-app",
    title: "Self Service App(SSA)",
    summary: "A self-service mobile app for account management, support, and KYC actions.",
    description:
      "A self-service mobile app that I designed and contributed to development for, helping users manage their profile, requests, and account workflows from one place.",
    image: "/image/projects/ssa_dashbaord.PNG",
    tags: ["Mobile App", "Self Service", "Onboarding"],
    featured: true,
    year: "2025",
    role: "Product Designer",
    client: "Naasa Securities",
    duration: "5 months",
    liveUrl: "https://naasasecurities.com.np/",
    problem:
      "Customers needed a faster way to complete account actions and review their own profile, orders, and support states without switching tools.",
    solution:
      "I designed a mobile-first self-service flow with clear account navigation, task-focused actions, and quick-access support states.",
    impact: [
      "Reduced friction for repeat account tasks",
      "Made account actions easier to scan on mobile",
      "Improved clarity across status-heavy user journeys",
    ],
    process: ["Flow review", "Mobile wireframes", "UI exploration", "Prototype testing", "Visual refinement"],
    device: "phone",
    screenshots: actualScreenshots("Self Service App(SSA)", [
      { label: "Login", src: "/image/projects/ssa_login.PNG" },
      { label: "Sidebar", src: "/image/projects/ssa_sidebar.PNG" },
      { label: "Dashboard", src: "/image/projects/ssa_dashbaord.PNG" },
      { label: "Portfolio", src: "/image/projects/ssa_portfolio.PNG" },
      { label: "Order", src: "/image/projects/ssa_order.PNG" },
      { label: "KYC", src: "/image/projects/ssa_kyc.PNG" },
      { label: "Details", src: "/image/projects/ssa_details.PNG" },
      { label: "Profile", src: "/image/projects/ssa_profile.PNG" },
      { label: "Settings", src: "/image/projects/ssa_settings.PNG" },
      { label: "Theme", src: "/image/projects/ssa_theme.PNG" },
      { label: "Gainer / Loser", src: "/image/projects/ssa_gainerloser.PNG" },
    ]),
  },
  {
    slug: "naasa-x",
    title: "NaasaX Web App",
    summary: "A trading web app for real-time insights and efficient portfolio management.",
    description:
      "A trading web app that I contributed to the design of for seamless trade execution, real-time insights, and efficient portfolio management.",
    image: "/image/projects/naasax.jpg",
    tags: ["Web App", "Trading", "Portfolio"],
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
      "I built a modular trading experience with focused chart surfaces, improved order entry clarity, and responsive workflow handoff patterns.",
    impact: [
      "Simplified trade execution path for both novice and advanced users",
      "Enhanced cross-device consistency between web and mobile touchpoints",
      "Improved clarity of portfolio and market data presentation",
    ],
    process: ["Competitive audit", "Journey mapping", "Design system setup", "Interactive prototypes", "Iteration cycles"],
    device: "browser",
    screenshots: actualScreenshots("NaasaX Web App", [
      { label: "Login", src: "/image/projects/naasaxweb_login.png" },
      { label: "Dashboard", src: "/image/projects/naasaxweb_dashboard.png" },
      { label: "Market", src: "/image/projects/naasaxweb_market.png" },
      { label: "Order", src: "/image/projects/naasaxweb_order.png" },
      { label: "Report", src: "/image/projects/naasaxweb_report.png" },
    ]),
  },
  {
    slug: "naasa-kyc",
    title: "Naasa KYC",
    summary: "An online KYC flow for identity verification and account onboarding.",
    description:
      "Naasa KYC is an online system that I contributed to the design of for verifying and managing client identity to open or update trading and DEMAT accounts.",
    image: "/image/projects/kyc.jpg",
    tags: ["Web App", "KYC", "Verification"],
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
    device: "browser",
    screenshots: actualScreenshots("Naasa KYC", [
      { label: "General", src: "/image/projects/naasakyc_general.png" },
      { label: "Personal", src: "/image/projects/naasakyc_personal.png" },
      { label: "Family", src: "/image/projects/naasakyc_family.png" },
      { label: "Nominee", src: "/image/projects/naasakyc_nominee.png" },
    ]),
  },
  {
    slug: "connect-infinity",
    title: "Connect Infinity",
    summary: "A call center app for seamless call handling and ticket management.",
    description:
      "A call center app that I contributed to the design of for seamless call handling and ticket management, ensuring top-notch customer support.",
    image: "/image/projects/connect-infinity.jpg",
    tags: ["Web App", "Call Center", "Support"],
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
    device: "browser",
    screenshots: actualScreenshots("Connect Infinity", [
      { label: "Dashboard", src: "/image/projects/ci_dashboard.png" },
      { label: "Reports", src: "/image/projects/ci_report.png" },
      { label: "RevAI", src: "/image/projects/ci_revai.png" },
      { label: "Settings", src: "/image/projects/ci_settings.png" },
      { label: "Summary", src: "/image/projects/ci_summary.png" },
    ]),
  },
  {
    slug: "connect-infinity-product-page",
    title: "Connect Infinity Product Page",
    summary: "A product marketing page for Connect Infinity's AI support platform.",
    description:
      "A product page that I contributed to the design of for highlighting the value, features, and conversion flow for Connect Infinity's AI support platform.",
    image: "/image/projects/ciproductpage_hero.png",
    tags: ["Website", "Product Page", "AI Support"],
    featured: false,
    year: "2025",
    role: "Product Designer",
    client: "Connect Infinity",
    duration: "2 months",
    liveUrl: "https://connectinfinity.io/",
    problem:
      "The product needed a clearer story that explained the platform quickly and guided visitors toward the right next step.",
    solution:
      "I designed a content-led landing page with strong messaging hierarchy, feature storytelling, and clear conversion points.",
    impact: [
      "Made the product value easier to scan at a glance",
      "Created a clearer path from awareness to signup",
      "Helped the feature story read cleanly across the full page",
    ],
    process: ["Content hierarchy", "Page composition", "Visual design", "Responsive QA"],
    device: "browser",
    screenshots: actualScreenshots("Connect Infinity Product Page", [
      { label: "Hero", src: "/image/projects/ciproductpage_hero.png" },
      { label: "Features", src: "/image/projects/ciproductpage_services.png" },
      { label: "Register", src: "/image/projects/ciproductpage_register.png" },
      { label: "Journey", src: "/image/projects/ciproductpage_journey.png" },
      { label: "Questions", src: "/image/projects/ciproductpage_qn.png" },
      { label: "Alternate View", src: "/image/projects/ciproductpage_2.png" },
    ]),
  },
  {
    slug: "nepal-stock-house-website",
    title: "Nepal Stock House Website",
    summary: "A brokerage website for presenting services, market presence, and contact pathways.",
    description:
      "A brokerage website that I contributed to the design of for presenting company information, services, and investor-facing support details.",
    image: "/image/projects/nsh_1.png",
    tags: ["Website", "Finance", "Brokerage"],
    featured: false,
    year: "2024",
    role: "UI/UX Designer",
    client: "Nepal Stock House Pvt Ltd.",
    duration: "2 months",
    problem:
      "The brokerage needed a cleaner public-facing presence that made its services and company information easier to find.",
    solution:
      "I structured the website around clearer navigation, service highlights, and accessible contact paths for investors and clients.",
    impact: [
      "Improved discoverability of company information",
      "Made service exploration simpler for new visitors",
      "Created a more credible and modern public presence",
    ],
    process: ["Content audit", "Information architecture", "Wireframes", "Visual design", "Handoff"],
    device: "browser",
    screenshots: actualScreenshots("Nepal Stock House Website", [
      { label: "Hero", src: "/image/projects/nsh_1.png" },
      { label: "Services", src: "/image/projects/nsh_2.png" },
      { label: "Why Choose Us", src: "/image/projects/nsh_3.png" },
      { label: "Market Summary", src: "/image/projects/nsh_4.png" },
      { label: "Stock Calculators", src: "/image/projects/nsh_5.png" },
      { label: "Secondary View", src: "/image/projects/nsh_6.png" },
      { label: "Supporting View", src: "/image/projects/nsh_7.png" },
    ]),
  },
  {
    slug: "crm",
    title: "CRM",
    summary: "An internal CRM dashboard for managing customers, leads, and follow-ups.",
    description:
      "An internal CRM dashboard that I contributed to the design of for keeping customer records, lead status, and follow-up actions in one place.",
    image: "/image/projects/crm_1.png",
    tags: ["Dashboard", "CRM", "Operations"],
    featured: false,
    year: "2024",
    role: "Product Designer",
    client: "Internal Product",
    duration: "2 months",
    problem:
      "The team needed a compact workspace that made high-volume customer handling easier to scan and action quickly.",
    solution:
      "I designed a compact CRM interface with prioritized lists, filters, and action shortcuts.",
    impact: [
      "Reduced time spent switching between customer records",
      "Improved visibility into lead progress and follow-ups",
      "Made operational workflows easier to scan at a glance",
    ],
    process: ["Requirement mapping", "Dashboard structure", "Interaction design", "Prototype review", "Polish"],
    device: "browser",
    screenshots: actualScreenshots("CRM", [
      { label: "Users", src: "/image/projects/crm_1.png" },
      { label: "Settings", src: "/image/projects/crm_2.png" },
      { label: "Action Stream", src: "/image/projects/crm_3.png" },
      { label: "Dashboard", src: "/image/projects/crm_4.png" },
    ]),
  },
  {
    slug: "naasa-website",
    title: "Naasa Website",
    summary: "A corporate website for Naasa Securities and its services.",
    description:
      "A corporate website that I contributed to the design of for presenting Naasa Securities, its services, and key information for visitors and investors.",
    image: "/image/projects/naasawebsite_1.png",
    tags: ["Website", "Corporate", "Finance"],
    featured: false,
    year: "2024",
    role: "UI/UX Designer",
    client: "Naasa Securities",
    duration: "2 months",
    problem:
      "The company needed a more polished public website to communicate services, trust, and key business information.",
    solution:
      "I structured the website around a clearer content hierarchy, stronger brand presentation, and better CTA placement.",
    impact: [
      "Improved clarity of service presentation",
      "Strengthened the brand's public-facing experience",
      "Created a more engaging entry point for new visitors",
    ],
    process: ["Content planning", "Page hierarchy", "Visual system", "Responsive layouts", "QA"],
    device: "browser",
    screenshots: actualScreenshots("Naasa Website", [
      { label: "Homepage", src: "/image/projects/naasawebsite_1.png" },
      { label: "Services", src: "/image/projects/naasawebsite_2.png" },
      { label: "Secondary View", src: "/image/projects/naasawebsite_3.png" },
    ]),
  },
  {
    slug: "agrilink",
    title: "AgriLink",
    summary: "An agriculture platform for connecting producers, buyers, and operations.",
    description:
      "An agriculture platform that I contributed to the design of to support product discovery, operational workflows, and marketplace connections.",
    image: "/image/projects/agrilink_1.png",
    tags: ["Platform", "Agriculture", "Marketplace"],
    featured: false,
    year: "2024",
    role: "UI Designer",
    client: "AgriLink",
    duration: "2 months",
    problem:
      "Users needed a simpler way to coordinate agricultural operations and connect with relevant listings or services.",
    solution:
      "I designed a focused platform with clear browse and action paths for the main user journeys.",
    impact: [
      "Made key actions easier to find",
      "Improved overall information clarity",
      "Created a cleaner marketplace-style workflow",
    ],
    process: ["Stakeholder discovery", "Journey mapping", "Wireframes", "Visual design", "Iteration"],
    device: "browser",
    screenshots: actualScreenshots("AgriLink", [
      { label: "Homepage", src: "/image/projects/agrilink_1.png" },
      { label: "Listings", src: "/image/projects/agrilink_2.png" },
      { label: "Product", src: "/image/projects/agrilink_3.png" },
    ]),
  },
  {
    slug: "loyaledge",
    title: "LoyalEdge",
    summary: "A rewards platform that increases repeat engagement through points and perks.",
    description:
      "A system that I contributed to the design of and that offers customers points, discounts, or perks for repeated purchases or engagement to encourage brand loyalty.",
    image: "/image/projects/loyaledge.jpg",
    tags: ["Web App", "Reward", "Engagement"],
    featured: false,
    year: "2024",
    role: "UI Designer",
    client: "LoyalEdge",
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
    device: "browser",
    screenshots: actualScreenshots("LoyalEdge", [
      { label: "Dashboard", src: "/image/projects/loyaledge_1.png" },
      { label: "Campaigns", src: "/image/projects/loyaledge_2.png" },
      { label: "Rewards", src: "/image/projects/loyaledge_3.png" },
      { label: "Analytics", src: "/image/projects/loyaledge_4.png" },
    ]),
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}