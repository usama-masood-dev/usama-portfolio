import type { IconName } from "@/lib/icons";

export type CatalogItem = {
  id: string;
  title: string;
  shortDescription: string;
  idealFor: string;
  includes: string[];
  timeline: string;
  tech: string[];
  proof: string;
  icon: IconName;
};

export const catalogItems: CatalogItem[] = [
  {
    id: "saas-web-app",
    title: "SaaS web application",
    shortDescription:
      "Production-ready SaaS with dashboards, auth, APIs, and room to grow.",
    idealFor: "Startups and businesses launching or scaling a SaaS product",
    includes: [
      "Multi-role dashboards and admin panels",
      "Authentication and role-based access control",
      "REST API development and integrations",
      "Database design and optimization",
      "Responsive UI with modern stack",
      "Source code and deployment support",
    ],
    timeline: "Typically 3–6 weeks depending on scope",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
    proof: "Panvika Learning System · Optima-CRM",
    icon: "LayoutDashboard",
  },
  {
    id: "saas-mvp",
    title: "SaaS MVP from scratch",
    shortDescription:
      "Validate your idea with a deployable MVP — architecture first.",
    idealFor: "Founders who need a working product to test with real users",
    includes: [
      "Requirements and architecture planning",
      "Database schema and API foundation",
      "Core features and user dashboards",
      "Auth and essential integrations",
      "Production deployment",
      "Full source code handover",
    ],
    timeline: "Typically 2–5 weeks for core MVP scope",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    proof: "Panvika Learning System",
    icon: "Rocket",
  },
  {
    id: "ai-integration",
    title: "AI integration (OpenAI)",
    shortDescription:
      "Practical AI — content generation, extraction, and automation.",
    idealFor: "Teams adding OpenAI to an existing or new web product",
    includes: [
      "OpenAI API integration (GPT-3.5 / GPT-4)",
      "Custom prompts and content workflows",
      "Secure API routes and error handling",
      "Data extraction and parsing pipelines",
      "Testing with real-world edge cases",
      "Documentation for your team",
    ],
    timeline: "Typically 1–3 weeks depending on complexity",
    tech: ["OpenAI", "Node.js", "React", "REST APIs"],
    proof: "Optima-CRM — live production AI features",
    icon: "Bot",
  },
  {
    id: "api-integration",
    title: "REST API & integrations",
    shortDescription:
      "Reliable APIs, third-party integrations, Stripe, and automation.",
    idealFor: "Products that need a solid backend or new integrations",
    includes: [
      "REST API design and development",
      "Authentication (JWT, roles)",
      "Third-party and payment integrations",
      "Cron jobs and workflow automation",
      "Postman collection documentation",
      "Performance and security best practices",
    ],
    timeline: "Typically 2–4 weeks",
    tech: ["Node.js", "Express", "MongoDB", "Stripe", "Redis"],
    proof: "Optima-CRM · Immosurance AML",
    icon: "Network",
  },
];

export function getCatalogById(id: string): CatalogItem | undefined {
  return catalogItems.find((item) => item.id === id);
}
