import type { IconName } from "@/lib/icons";

/** Form ID only, or full URL like https://formspree.io/f/xpqndlrg */
function normalizeFormspreeId(raw: string | undefined): string {
  if (!raw?.trim()) return "";
  const trimmed = raw.trim();
  const fromUrl = trimmed.match(/formspree\.io\/f\/([a-zA-Z0-9]+)/i);
  if (fromUrl) return fromUrl[1];
  return trimmed.replace(/^https?:\/\//, "").split("/").pop() ?? trimmed;
}

/** Full URL or Calendly username slug, e.g. usamamasood-dev */
function normalizeCalendlyUrl(raw: string | undefined): string {
  if (!raw?.trim()) return "";
  const trimmed = raw.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  const slug = trimmed.replace(/^\/+|\/+$/g, "");
  return `https://calendly.com/${slug}`;
}

export const site = {
  name: "Usama Masood",
  title: "Full Stack Developer | AI-Powered SaaS Apps",
  tagline:
    "Full stack developer building AI-powered SaaS and web apps with React, Next.js, and Node.js.",
  description:
    "Portfolio of Usama Masood — MERN stack developer specializing in SaaS platforms, OpenAI integration, REST APIs, and production-ready web applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://usama-masood.vercel.app",
  email: "usamamasood.dev@gmail.com",
  phone: "+92 341-7716191",
  location: "Lahore, Pakistan",
  experience: "2.5+ years",
  availability: "Open for SaaS, MVP, and AI integration projects",
  links: {
    email: "mailto:usamamasood.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/usama-masood",
    github: "https://github.com/usamamasood",
    upwork: "",
  },
  calendly: normalizeCalendlyUrl(process.env.NEXT_PUBLIC_CALENDLY_URL),
  formspree: normalizeFormspreeId(process.env.NEXT_PUBLIC_FORMSPREE_ID),
  resumePath: "/resume.pdf",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const proofStats: {
  value: string;
  label: string;
  icon: IconName;
}[] = [
  { value: "2.5+", label: "Years in production", icon: "Clock" },
  { value: "24", label: "European countries (CRM)", icon: "Globe" },
  { value: "OpenAI", label: "GPT in live enterprise app", icon: "Bot" },
  { value: "Stripe", label: "Live compliance payments", icon: "CreditCard" },
];

export const whatIBuild: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: "SaaS platforms",
    description: "Dashboards, auth, billing — built to scale.",
    icon: "LayoutDashboard",
  },
  {
    title: "AI features",
    description: "OpenAI GPT in production workflows.",
    icon: "Sparkles",
  },
  {
    title: "Enterprise CRM",
    description: "Workflows, portals, automation.",
    icon: "Building2",
  },
  {
    title: "REST APIs",
    description: "Secure APIs + integrations.",
    icon: "Plug",
  },
  {
    title: "Payments",
    description: "Stripe subscriptions & billing.",
    icon: "CreditCard",
  },
  {
    title: "LMS & e-learning",
    description: "Courses, quizzes, dashboards.",
    icon: "GraduationCap",
  },
];

export const processSteps: {
  step: string;
  title: string;
  shortDescription: string;
  icon: IconName;
}[] = [
  {
    step: "01",
    title: "Discover",
    shortDescription: "Goals, users, and scope aligned first.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Architect",
    shortDescription: "Database and API foundation.",
    icon: "Boxes",
  },
  {
    step: "03",
    title: "Build",
    shortDescription: "Milestones with clear updates.",
    icon: "Hammer",
  },
  {
    step: "04",
    title: "Deploy",
    shortDescription: "Live product + handover.",
    icon: "Rocket",
  },
];

export const faqs: {
  question: string;
  answer: string;
  icon: IconName;
}[] = [
  {
    question: "Do you work remotely?",
    answer:
      "Yes. I work with clients worldwide — startups, agencies, and product teams — with clear async communication and regular updates.",
    icon: "Globe",
  },
  {
    question: "Can you integrate AI into my existing app?",
    answer:
      "Yes. I have production experience integrating OpenAI GPT for property descriptions and intelligent email data extraction in a live enterprise CRM.",
    icon: "Sparkles",
  },
  {
    question: "How do we agree on scope and pricing?",
    answer:
      "After a short discussion, I provide a clear scope and quote. There is no fixed public pricing — every project is scoped to your needs.",
    icon: "DollarSign",
  },
  {
    question: "Do I get the source code?",
    answer:
      "Yes. You receive full source code and documentation so your team can maintain and extend the product.",
    icon: "Code2",
  },
  {
    question: "What is your typical timeline?",
    answer:
      "Timelines depend on scope. MVPs often take 2–6 weeks; larger SaaS features may take longer. I share milestones upfront.",
    icon: "Calendar",
  },
];

export const skillGroups: {
  title: string;
  icon: IconName;
  skills: string[];
}[] = [
  { title: "Frontend", icon: "LayoutDashboard", skills: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { title: "Backend", icon: "Server", skills: ["Node.js", "Express", "REST APIs", "MongoDB"] },
  { title: "AI & Payments", icon: "Sparkles", skills: ["OpenAI GPT", "Stripe", "Integrations"] },
];

export const servicePillars: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: "SaaS & web applications",
    description: "Dashboards, auth, APIs — built to grow with your product.",
    icon: "LayoutDashboard",
  },
  {
    title: "AI integration",
    description: "OpenAI GPT in production — content, extraction, automation.",
    icon: "Sparkles",
  },
  {
    title: "APIs & payments",
    description: "REST APIs, Stripe, third-party integrations.",
    icon: "Plug",
  },
  {
    title: "MVP delivery",
    description: "Idea to deployed MVP with scalable architecture.",
    icon: "Rocket",
  },
];


export const projectTypes = [
  { value: "saas", label: "SaaS web application" },
  { value: "mvp", label: "SaaS MVP from scratch" },
  { value: "ai", label: "AI integration (OpenAI)" },
  { value: "api", label: "REST API & integrations" },
  { value: "bugfix", label: "Bug fixes & features" },
  { value: "other", label: "Other" },
] as const;

export const timelineOptions = [
  { value: "asap", label: "ASAP" },
  { value: "1-2-weeks", label: "1–2 weeks" },
  { value: "1-month", label: "About 1 month" },
  { value: "flexible", label: "Flexible" },
] as const;
