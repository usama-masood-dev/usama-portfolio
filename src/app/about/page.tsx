import Image from "next/image";
import { Download } from "lucide-react";
import { SocialLinks } from "@/components/layout/social-links";
import { PageHero } from "@/components/ui/page-hero";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { IconCard } from "@/components/ui/icon-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { getIcon, type IconName } from "@/lib/icons";
import { images } from "@/lib/images";
import { site, skillGroups } from "@/lib/site";

const timeline: {
  period: string;
  role: string;
  company: string;
  detail: string;
  icon: IconName;
}[] = [
  {
    period: "May 2026 — Present",
    role: "Full Stack Developer (Part-time)",
    company: "Axaon Software · London",
    detail: "Panvika Learning System — LMS SaaS with Next.js and Node.js.",
    icon: "GraduationCap",
  },
  {
    period: "Mar 2025 — Mar 2026",
    role: "MEAN Stack Developer",
    company: "OptimaGeeks · Lahore",
    detail: "Optima-CRM & Immosurance AML — OpenAI, Stripe, enterprise production.",
    icon: "Building2",
  },
  {
    period: "Dec 2024 — Mar 2025",
    role: "Full Stack Developer",
    company: "Navicosoft · Lahore",
    detail: "Domain hosting CMS — billing, Laravel/Livewire.",
    icon: "LayoutDashboard",
  },
  {
    period: "Jan 2024 — Dec 2024",
    role: "Frontend Developer",
    company: "104Digital · Chiniot",
    detail: "Figma to UI, WordPress client projects.",
    icon: "LayoutDashboard",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero band="dark">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <SectionReveal className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative h-56 w-56 overflow-hidden rounded-2xl border-2 border-primary/30 shadow-lg">
              <Image
                src={images.profile}
                alt={site.name}
                width={400}
                height={400}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <h1 className="mt-6 text-3xl font-bold text-foreground">{site.name}</h1>
            <p className="mt-2 text-sm text-primary">{site.title}</p>
            <p className="mt-2 text-sm text-muted">{site.location}</p>
            <Button
              href={site.resumePath}
              variant="secondary"
              className="mt-6 w-full max-w-xs"
              external
            >
              <Download className="h-4 w-4" />
              Download resume (PDF)
            </Button>
            <SocialLinks className="mt-5 justify-center lg:justify-start" iconSize="sm" />
          </SectionReveal>

          <div>
            <SectionReveal>
              <SectionHeader
                align="left"
                eyebrow="About"
                title="Building products that ship"
                description={`Full stack developer with ${site.experience} — enterprise SaaS, compliance, and learning platforms.`}
                className="mb-6"
              />
              <p className="text-muted">
                Core team experience on platforms used across 24 European countries,
                with OpenAI and Stripe in live production. Now building Panvika Learning
                System end-to-end for Axaon Software.
              </p>
            </SectionReveal>

            <SectionReveal className="mt-12">
              <h2 className="text-xl font-bold text-foreground">Core skills</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {skillGroups.map((group) => (
                  <IconCard
                    key={group.title}
                    icon={group.icon}
                    title={group.title}
                    description={group.skills.join(" · ")}
                  />
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </PageHero>

      <Section band="light">
        <SectionReveal>
          <p className="max-w-3xl text-muted">
            My process is simple: I write code that ships, not just runs locally.
            Every project includes complete source code, full documentation, and
            production deployment. I work in milestones so you see progress at every
            stage — no black boxes, no surprises.
          </p>
        </SectionReveal>
        <SectionReveal className="mt-12">
          <SectionHeader align="left" title="Experience" className="mb-8" />
        </SectionReveal>
        <div className="space-y-6">
          {timeline.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.period}
                className="flex gap-5 rounded-2xl border border-border bg-surface p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">{item.period}</p>
                  <h3 className="mt-1 font-semibold text-foreground">{item.role}</h3>
                  <p className="text-sm text-muted">{item.company}</p>
                  <p className="mt-2 text-sm text-muted">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button href="/contact" size="lg">
            Let&apos;s work together
          </Button>
        </div>
      </Section>
    </>
  );
}
