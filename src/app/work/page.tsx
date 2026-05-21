"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/work/project-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { SectionReveal } from "@/components/motion/section-reveal";
import { projectCategories, projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function WorkPage() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <Section className="pt-12 md:pt-16">
      <SectionReveal>
        <SectionHeader
          align="left"
          eyebrow="Portfolio"
          title="Case studies"
          description="Production systems across SaaS, compliance, and e-learning — with honest scope and real tech stacks."
        />
      </SectionReveal>

      <div className="mb-10 flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition",
              filter === cat
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
