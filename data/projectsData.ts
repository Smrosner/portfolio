export type ProjectCategory =
  | "full-stack"
  | "frontend"
  | "backend"
  | "ai"
  | "platform"
  | "education";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: ProjectCategory;
  featured: boolean;
  image: string;
  role: string;
  period: string;
  stack: string[];
  metrics: ProjectMetric[];
  problem: string;
  approach: string[];
  outcome: string;
  links?: {
    label: string;
    href: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "linksync-static-case-study",
    title: "LinkSync",
    subtitle: "Static portfolio case study for a link-preview MVP",
    summary:
      "Reframed a server-backed preview tool into a static-export friendly case study that still communicates product thinking, SSRF risk awareness, and client-side UX craft.",
    category: "frontend",
    featured: true,
    image: "/projects/linksync.svg",
    role: "Product-minded frontend engineer",
    period: "2026",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "LocalStorage"],
    metrics: [
      { label: "Export mode", value: "100% static" },
      { label: "Core flow", value: "URL to saved card" },
      { label: "Security stance", value: "Server API removed" },
    ],
    problem:
      "The original LinkSync MVP used a Next.js route handler to fetch link metadata, which was useful for a dynamic app but incompatible with a pure static export portfolio.",
    approach: [
      "Separated the product story from the server implementation so hiring reviewers can still understand the architecture and tradeoffs.",
      "Documented why live metadata fetching belongs on a server, including CORS, user-agent handling, and SSRF guardrails.",
      "Kept the case study honest: the portfolio showcases the MVP design without pretending the static export can run server-side preview extraction.",
    ],
    outcome:
      "The portfolio remains deployable as static assets while LinkSync becomes a concrete artifact demonstrating product scoping, technical judgment, and security-aware implementation decisions.",
  },
  {
    slug: "crowdcoursing-platform-delivery",
    title: "CrowdCoursing Platform",
    subtitle: "Full-stack feature delivery across education workflows",
    summary:
      "Owned production features across admin, instructor, and student workflows with strong client/server boundaries and repeatable implementation patterns.",
    category: "full-stack",
    featured: true,
    image: "/projects/crowdcoursing.svg",
    role: "Senior Software Engineer",
    period: "October 2023 - Present",
    stack: ["React", "TypeScript", "GraphQL", "OpenAPI", "C#", ".NET"],
    metrics: [
      { label: "Features shipped", value: "50+" },
      { label: "Engagement lift", value: "25%" },
      { label: "Workflow areas", value: "3" },
    ],
    problem:
      "A fast-moving course platform needed reliable delivery across multiple user groups while reducing ambiguity between product, support, and engineering.",
    approach: [
      "Translated ambiguous UX and data-flow issues into documented engineering patterns that could be reused across features.",
      "Integrated backend services through GraphQL and OpenAPI while improving schema consistency and error handling.",
      "Built a resume upload flow with strict client-side validation to protect user-entered data and backend services.",
    ],
    outcome:
      "Delivered a more maintainable full-stack surface with clearer implementation standards, stronger user workflows, and less cross-team rework.",
  },
  {
    slug: "bytebot-performance-money-safety",
    title: "ByteBot Systems Work",
    subtitle: "Performance, money-safe logic, and production resilience",
    summary:
      "Improved high-impact application paths by removing latency bottlenecks, hardening transaction flows, and raising test confidence.",
    category: "backend",
    featured: true,
    image: "/projects/bytebot.svg",
    role: "Software Engineer",
    period: "May 2024 - Present",
    stack: ["Next.js", "Node.js", "MongoDB", "Jest", "AWS", "Firebase"],
    metrics: [
      { label: "Latency reduction", value: "55%" },
      { label: "Test coverage", value: "98%" },
      { label: "Launch target", value: "10k+ users" },
    ],
    problem:
      "Client systems needed better real-user performance, safer currency handling, and more reliable launch readiness under deadline pressure.",
    approach: [
      "Removed request waterfalls and parallelized independent fetches to improve load behavior under real traffic.",
      "Refactored Node.js and MongoDB money flows to standardize currency handling and prevent rounding drift.",
      "Strengthened production confidence with robust Jest coverage, secure transaction flows, and audit-ready traces.",
    ],
    outcome:
      "Reduced page load latency by 55%, raised confidence before a 10k+ user launch, and made high-risk money paths more predictable.",
  },
  {
    slug: "chelle-ai-chat-platform",
    title: "Chelle.ai Chat Platform",
    subtitle: "Real-time AI chat with secure session boundaries",
    summary:
      "Designed and delivered a real-time AI chat product with onboarding, authentication, encrypted data handling, and production operations.",
    category: "ai",
    featured: false,
    image: "/projects/chelle.svg",
    role: "Software Engineer",
    period: "November 2023 - February 2024",
    stack: ["Next.js", "React", "Clerk", "Firebase", "Docker"],
    metrics: [
      { label: "Core product", value: "AI chat" },
      { label: "Auth model", value: "Secure sessions" },
      { label: "Delivery", value: "End-to-end" },
    ],
    problem:
      "The product needed a secure and usable AI chat experience with reliable onboarding, session handling, and message-context boundaries.",
    approach: [
      "Built onboarding and authentication flows with Next.js, Clerk, and Firebase.",
      "Defined server-side session handling and API boundaries to protect user context, secrets, and message history.",
      "Deployed and operated the platform with Docker and cloud services while resolving production issues.",
    ],
    outcome:
      "Delivered a stable real-time AI platform balancing security, usability, and speed for early product workflows.",
  },
  {
    slug: "tensile-payments-accessibility-testing",
    title: "Tensile Payments Portal",
    subtitle: "Accessible payment workflows with strong test coverage",
    summary:
      "Shipped secure payment portal features while improving accessibility, test coverage, and frontend confidence.",
    category: "frontend",
    featured: false,
    image: "/projects/tensile.svg",
    role: "Software Engineer",
    period: "August 2021 - February 2022",
    stack: ["React", "AWS Amplify", "Jest", "Cypress", "WCAG 2.x"],
    metrics: [
      { label: "Coverage", value: "87%" },
      { label: "Accessibility", value: "WCAG 2.x" },
      { label: "Domain", value: "Payments" },
    ],
    problem:
      "Payment flows required dependable UI behavior, accessibility remediation, and security-conscious review before production use.",
    approach: [
      "Built React payment portal flows with AWS Amplify-backed authentication and data display.",
      "Performed accessibility audits, remediation, and post-audit checks against WCAG 2.x expectations.",
      "Expanded unit and E2E coverage with Jest, Enzyme, and Cypress using TDD principles.",
    ],
    outcome:
      "Improved accessibility and reliability for sensitive payment experiences while reaching 87% test coverage.",
  },
  {
    slug: "hack-reactor-risk-monitoring",
    title: "Hack Reactor Monitoring Workflow",
    subtitle: "Automation for at-risk student signal visibility",
    summary:
      "Built a real-time monitoring workflow that helped instructional teams identify student support needs earlier.",
    category: "education",
    featured: false,
    image: "/projects/hack-reactor.svg",
    role: "Software Engineering DEI Program Manager",
    period: "June 2021 - September 2023",
    stack: ["JavaScript", "Google Apps Script", "SQL", "Python", "Automation"],
    metrics: [
      { label: "Cohort size", value: "30-100" },
      { label: "Signal timing", value: "Real-time" },
      { label: "Focus", value: "Proactive support" },
    ],
    problem:
      "Instructional teams needed earlier visibility into at-risk signals across large, diverse cohorts.",
    approach: [
      "Implemented a Google Apps Script workflow to surface real-time indicators for student support.",
      "Partnered with instructors and leadership to iterate on curriculum, assessment standards, and operations.",
      "Mentored students across JavaScript, TypeScript, React, Node.js, Python, and SQL.",
    ],
    outcome:
      "Enabled faster interventions, better coordination, and stronger support quality across high-volume cohorts.",
  },
];

export const projectCategories: { id: "all" | ProjectCategory; label: string }[] =
  [
    { id: "all", label: "All" },
    { id: "full-stack", label: "Full-stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "ai", label: "AI" },
    { id: "education", label: "Education" },
  ];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
