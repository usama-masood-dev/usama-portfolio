import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--card-shadow)] transition hover:border-primary/40"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-foreground">
          {project.title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-medium text-primary">{project.subtitle}</p>
        <p className="mt-2 flex-1 text-sm text-muted line-clamp-2">{project.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
          View case study
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
