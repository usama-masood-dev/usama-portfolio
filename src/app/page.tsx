import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CatalogCard } from "@/components/catalog/catalog-card";
import { BentoHighlight } from "@/components/home/bento-highlight";
import { HeroBackdrop } from "@/components/home/hero-backdrop";
import { HeroContent } from "@/components/home/hero-content";
import { HeroVisual } from "@/components/home/hero-visual";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { ProofStrip } from "@/components/home/proof-strip";
import { ProjectCarousel } from "@/components/home/project-carousel";
import { SectionBackdrop } from "@/components/ui/section-backdrop";
import { SectionReveal, StaggerChildren, StaggerItem } from "@/components/motion/section-reveal";
import { TechStackLogos } from "@/components/tech/tech-stack-logos";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { IconCard } from "@/components/ui/icon-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { catalogItems } from "@/lib/catalog";
import { faqs, site, whatIBuild } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/50 bg-section-dark">
        <HeroBackdrop />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <HeroContent />
          <HeroVisual />
        </div>
      </section>

      <Section band="light" className="py-12 md:py-14">
        <ProofStrip />
      </Section>

      <Section band="dark">
        <SectionReveal>
          <BentoHighlight />
        </SectionReveal>
      </Section>

      <Section id="expertise" band="light">
        <SectionReveal>
          <SectionHeader
            eyebrow="Expertise"
            title="What I build"
            description="Scan by area — details live in case studies and catalog."
          />
        </SectionReveal>
        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatIBuild.map((item) => (
            <StaggerItem key={item.title}>
              <IconCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <Section id="catalog" band="dark">
        <SectionReveal>
          <SectionHeader
            eyebrow="Deliverables"
            title="Project catalog"
            description="Fixed offerings — request a quote after we align on scope."
          />
        </SectionReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {catalogItems.slice(0, 3).map((item) => (
            <CatalogCard key={item.id} item={item} compact />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            View all deliverables
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section id="work" band="light">
        <SectionReveal>
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured projects"
            description="Swipe to explore — full case studies with screenshots."
          />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <ProjectCarousel />
        </SectionReveal>
        <div className="mt-8 text-center">
          <Button href="/work" variant="secondary">
            All case studies
          </Button>
        </div>
      </Section>

      <Section band="dark">
        <SectionReveal>
          <SectionHeader
            eyebrow="Process"
            title="How I work"
            description="Four steps from idea to deployed product."
          />
        </SectionReveal>
        <ProcessTimeline />
      </Section>

      <Section band="light">
        <SectionReveal>
          <SectionHeader
            eyebrow="Stack"
            title="Technologies"
            description="Tools I use daily on production SaaS and APIs."
          />
        </SectionReveal>
        <TechStackLogos />
      </Section>

      <Section band="dark">
        <SectionReveal>
          <SectionHeader title="Frequently asked questions" />
        </SectionReveal>
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Section>

      <Section variant="accent" className="pb-24 md:pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-surface px-8 py-12 text-center shadow-[var(--card-shadow)] md:px-16">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/15 blur-2xl" aria-hidden />
          <h2 className="relative text-2xl font-bold text-foreground md:text-3xl">
            Ready to build your next product?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted">
            Tell me about your SaaS, MVP, or integration project. I&apos;ll reply
            within 24 hours.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Discuss your project
            </Button>
            {site.calendly && (
              <Button href={site.calendly} variant="secondary" size="lg" external>
                Book a 15-min call
              </Button>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
