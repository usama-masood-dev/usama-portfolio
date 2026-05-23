import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { portfolioAspectClass } from "@/lib/media";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const local =
    project.coverImage.startsWith("/") && !project.coverImage.startsWith("//");

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--card-shadow)] transition hover:border-primary/40"
    >
      <div className={cn("relative w-full shrink-0", portfolioAspectClass)}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
          quality={90}
          unoptimized={local}
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{project.subtitle}</p>
        <p className="mt-2 flex-1 text-sm text-muted line-clamp-2">{project.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
          View case study
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
