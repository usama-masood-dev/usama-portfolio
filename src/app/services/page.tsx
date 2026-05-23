import Image from "next/image";
import { FileText } from "lucide-react";
import { CatalogCard } from "@/components/catalog/catalog-card";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { PageHero } from "@/components/ui/page-hero";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { IconCard } from "@/components/ui/icon-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { catalogItems } from "@/lib/catalog";
import { images } from "@/lib/images";
import { portfolioAspectClass } from "@/lib/media";
import { cn } from "@/lib/utils";
import { servicePillars } from "@/lib/site";

const clientNeeds = [
  "Brief description of your product and users",
  "Must-have features for the first version",
  "Designs, wireframes, or reference apps",
  "Target timeline and any existing codebase",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero band="dark">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionReveal>
            <SectionHeader
              align="left"
              eyebrow="Services"
              title="What I deliver"
              description="Scoped after we talk — request a quote for any catalog package."
              className="mb-0"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {servicePillars.map((pillar) => (
                <IconCard
                  key={pillar.title}
                  icon={pillar.icon}
                  title={pillar.title}
                  description={pillar.description}
                />
              ))}
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div
              className={cn(
                "relative w-full overflow-hidden rounded-2xl border border-border shadow-[var(--card-shadow)]",
                portfolioAspectClass,
              )}
            >
              <Image
                src={images.heroCode}
                alt="Development workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 512px"
                quality={90}
                unoptimized
                className="object-cover"
              />
            </div>
          </SectionReveal>
        </div>
      </PageHero>

      <Section id="catalog" band="light">
        <SectionReveal>
          <SectionHeader
            align="left"
            eyebrow="Catalog"
            title="Project catalog"
            description="Pick a starting point — we refine scope and quote together."
          />
        </SectionReveal>
        <div className="grid gap-8 lg:grid-cols-2">
          {catalogItems.map((item) => (
            <CatalogCard key={item.id} item={item} />
          ))}
        </div>
        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted">
          <FileText className="h-4 w-4 text-primary" />
          No fixed public pricing — quoted per project
        </p>
      </Section>

      <Section band="dark">
        <div className="mx-auto max-w-3xl space-y-16">
          <SectionReveal>
            <SectionHeader
              align="left"
              title="What I need from you"
              description="Four points for an accurate scope."
              className="mb-6"
            />
            <ul className="space-y-3">
              {clientNeeds.map((need, i) => (
                <li
                  key={need}
                  className="flex gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  {need}
                </li>
              ))}
            </ul>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <SectionHeader align="left" title="Delivery process" className="mb-6" />
            <ProcessTimeline />
          </SectionReveal>
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact" size="lg">
            Request a quote
          </Button>
        </div>
      </Section>
    </>
  );
}
