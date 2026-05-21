import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { ImageGallery } from "@/components/work/image-gallery";
import { TechStackLogos } from "@/components/tech/tech-stack-logos";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { MetricChip } from "@/components/ui/metric-chip";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { getProjectBySlug, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero>
          <Link
            href="/work"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">{project.category}</Badge>
            <Badge variant={project.status === "Live" ? "success" : "default"}>
              {project.status}
            </Badge>
          </div>
          <h1 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-2 text-xl text-primary">{project.subtitle}</p>
          <p className="mt-3 max-w-2xl text-muted">{project.excerpt}</p>
          <p className="mt-1 text-sm text-muted">{project.company}</p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary"
            >
              Visit live site
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <div className="mt-6 grid grid-cols-3 gap-3 sm:max-w-lg">
            {project.metrics.map((m) => (
              <MetricChip key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
      </PageHero>

      <Section band="light" className="pt-10">
        <BrowserFrame
          src={project.coverImage}
          alt={`${project.title} main screenshot`}
          className="mx-auto max-w-5xl"
        />
      </Section>

      <Section band="dark" className="pt-0">
        <div className="mx-auto max-w-5xl space-y-16">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Gallery</h2>
            <div className="mt-6">
              <ImageGallery images={project.gallery} />
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <Block title="My role">
              <p className="text-muted">{project.role}</p>
            </Block>
            <Block title="Highlights">
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-muted">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <Block title="What I built">
            <div className="grid gap-4 sm:grid-cols-2">
              {project.built.map((item, i) => (
                <div
                  key={item.lead}
                  className={`rounded-xl border border-border bg-surface p-5 ${
                    i === 0 ? "sm:col-span-2 border-primary/30 bg-primary/5" : ""
                  }`}
                >
                  <p className="font-semibold text-foreground">{item.lead}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block title="Results">
            <div className="grid gap-3 sm:grid-cols-3">
              {project.results.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-muted"
                >
                  {item}
                </div>
              ))}
            </div>
          </Block>

          <Block title="Tech stack">
            <TechStackLogos />
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Block>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground">
            Need something similar?
          </h2>
          <p className="mt-2 text-muted">
            Let&apos;s scope your project and deliver production-ready results.
          </p>
          <Button href="/contact" className="mt-6">
            Request a quote
          </Button>
        </div>
      </Section>
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
