import { images } from "@/lib/images";

export type ProjectImage = { src: string; alt: string };

export type ProjectMetric = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "SaaS" | "Compliance" | "E-Learning" | "CMS";
  company: string;
  status: "Live" | "In progress";
  url?: string;
  excerpt: string;
  highlights: string[];
  role: string;
  built: { lead: string; detail: string }[];
  stack: string[];
  results: string[];
  coverImage: string;
  gallery: ProjectImage[];
  metrics: ProjectMetric[];
};

const projectImages = images.projects;

export const projects: Project[] = [
  {
    slug: "optima-crm",
    title: "Optima-CRM",
    subtitle: "Award-winning Real Estate CRM (Europe)",
    category: "SaaS",
    company: "OptimaSys · OptimaGeeks",
    status: "Live",
    url: "https://optima-crm.com",
    excerpt:
      "Enterprise CRM across 24 European countries with AI-powered workflows in production.",
    highlights: [
      "Award-winning Real Estate CRM",
      "OpenAI GPT in production",
      "Portal integrations & automation",
    ],
    role: "Core engineering team member (~1 year) on live production platform.",
    built: [
      {
        lead: "OpenAI GPT",
        detail: "Property descriptions and intelligent email extraction for real users.",
      },
      {
        lead: "Integrations",
        detail: "External portals and automated background data sync.",
      },
      {
        lead: "Full stack",
        detail: "Angular 16 dashboards, Node.js REST APIs, cron automation.",
      },
      {
        lead: "Client work",
        detail: "Requirements, updates, and feedback with stakeholders.",
      },
    ],
    stack: [
      "Angular 16",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "OpenAI GPT",
      "AWS",
      "Yii2",
    ],
    results: [
      "Live across 24 European countries",
      "AI features used in production daily",
      "Workflow automation improved operations",
    ],
    coverImage: projectImages["optima-crm"].cover,
    gallery: [...projectImages["optima-crm"].gallery],
    metrics: [
      { value: "24", label: "Countries served" },
      { value: "Live", label: "Production users" },
      { value: "GPT-4", label: "AI in CRM" },
    ],
  },
  {
    slug: "immosurance-aml",
    title: "Immosurance AML",
    subtitle: "Europe's first AML platform for real estate",
    category: "Compliance",
    company: "OptimaSys · OptimaGeeks",
    status: "Live",
    url: "https://immosurance.net",
    excerpt:
      "AML compliance with European Commission collaboration — KYC, Stripe, audit tracking.",
    highlights: [
      "European Commission collaboration",
      "Stripe — live transactions",
      "KYC & regulatory integrations",
    ],
    role: "Contributing developer on Europe's first real-estate AML compliance platform.",
    built: [
      {
        lead: "Stripe",
        detail: "Subscription and one-time payments with real financial transactions.",
      },
      {
        lead: "Compliance",
        detail: "KYC workflows, dossier management, audit tracking.",
      },
      {
        lead: "Regulatory",
        detail: "Integrations for secure cross-border operations.",
      },
    ],
    stack: ["Angular", "Node.js", "MongoDB", "Stripe", "AWS"],
    results: [
      "Live compliance with real transactions",
      "24 countries · 34 CEPI associations",
      "Secure regulated workflows",
    ],
    coverImage: projectImages["immosurance-aml"].cover,
    gallery: [...projectImages["immosurance-aml"].gallery],
    metrics: [
      { value: "1st", label: "EU AML for real estate" },
      { value: "Stripe", label: "Live payments" },
      { value: "KYC", label: "Full workflows" },
    ],
  },
  {
    slug: "thebrandvue",
    title: "The Brand Vue",
    subtitle: "Marketing agency site · Headless WordPress CMS",
    category: "CMS",
    company: "The Brand Vue · Islamabad",
    status: "Live",
    excerpt:
      "Next.js marketing website with headless WordPress — the client team publishes projects, testimonials, and services without developer help.",
    highlights: [
      "Next.js + headless WordPress",
      "Self-serve content for projects & testimonials",
      "Built for Islamabad marketing agency",
    ],
    role: "Full stack developer — frontend, CMS integration, and content architecture.",
    built: [
      {
        lead: "Headless CMS",
        detail:
          "WordPress as content backend with structured content types for projects, testimonials, and services.",
      },
      {
        lead: "Next.js frontend",
        detail:
          "Fast, SEO-friendly pages with dynamic routing and optimized media delivery.",
      },
      {
        lead: "Client control",
        detail:
          "Non-technical staff can add and update portfolio work, social proof, and service listings.",
      },
      {
        lead: "Brand experience",
        detail:
          "Custom UI aligned with The Brand Vue identity for an Islamabad-based creative agency.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "WordPress",
      "Headless CMS",
      "REST API",
      "Tailwind CSS",
    ],
    results: [
      "Client-owned content updates without code deploys",
      "Projects, testimonials, and services managed in one CMS",
      "Production-ready marketing site for local agency",
    ],
    coverImage: projectImages.thebrandvue.cover,
    gallery: [...projectImages.thebrandvue.gallery],
    metrics: [
      { value: "CMS", label: "WordPress headless" },
      { value: "Next.js", label: "Modern frontend" },
      { value: "Live", label: "Client content control" },
    ],
  },
  // {
  //   slug: "panvika-learning-system",
  //   title: "Panvika Learning System",
  //   subtitle: "Udemy-like LMS SaaS platform",
  //   category: "E-Learning",
  //   company: "Axaon Software · London",
  //   status: "In progress",
  //   excerpt:
  //     "Full LMS SaaS from scratch — architecture through deployment, sole ownership.",
  //   highlights: [
  //     "Multi-role instructor & student dashboards",
  //     "Courses, quizzes, enrollments",
  //     "End-to-end full stack ownership",
  //   ],
  //   role: "Sole full stack developer — architecture through deployment.",
  //   built: [
  //     {
  //       lead: "Platform UI",
  //       detail: "Custom home page and instructor/student dashboards.",
  //     },
  //     {
  //       lead: "Learning features",
  //       detail: "Courses, quizzes, enrollments, wishlist, withdrawals.",
  //     },
  //     {
  //       lead: "Backend",
  //       detail: "API and database architecture built from scratch.",
  //     },
  //   ],
  //   stack: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
  //   results: [
  //     "Production-ready SaaS architecture",
  //     "Built for London-based product company",
  //     "Full MVP-to-product capability",
  //   ],
  //   coverImage: projectImages["panvika-learning-system"].cover,
  //   gallery: [...projectImages["panvika-learning-system"].gallery],
  //   metrics: [
  //     { value: "100%", label: "Ownership" },
  //     { value: "LMS", label: "Full platform" },
  //     { value: "Next.js", label: "Modern stack" },
  //   ],
  // },
];

export const projectCategories = [
  "All",
  "SaaS",
  "CMS",
  "Compliance",
  "E-Learning",
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
