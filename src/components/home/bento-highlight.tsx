import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { images } from "@/lib/images";
import { portfolioAspectClass } from "@/lib/media";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function BentoHighlight() {
  const featured = projects[0];

  return (
    <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 md:items-stretch">
      {/* Left — featured (2×2 cells, ~66% width) */}
      <Link
        href={`/work/${featured.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-primary/40 md:col-span-2 md:row-span-2"
      >
        <div className={cn("relative w-full shrink-0", portfolioAspectClass)}>
          <Image
            src={featured.coverImage}
            alt={featured.title}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            quality={80}
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-8">
          <p className="text-sm font-medium text-primary">Featured work</p>
          <h3 className="mt-1 text-2xl font-bold text-foreground md:text-3xl">
            {featured.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{featured.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all md:mt-6">
            View case study <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>

      {/* Right top — catalog */}
      <Link
        href="/services#catalog"
        className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-primary/40 md:col-start-3 md:row-start-1"
      >
        <div className={cn("relative w-full shrink-0", portfolioAspectClass)}>
          <Image
            src={images.bento.catalog}
            alt="Services catalog"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={90}
            className="object-cover transition group-hover:scale-[1.02]"
          />
        </div>
        <div className="p-5">
          <Layers className="h-5 w-5 text-primary" />
          <p className="mt-2 font-semibold text-foreground">Project catalog</p>
          <p className="text-xs text-muted">4 fixed deliverables</p>
        </div>
      </Link>

      {/* Right bottom — contact */}
      <Link
        href="/contact"
        className="flex h-full flex-col justify-between rounded-2xl border border-primary/30 bg-primary/10 p-5 transition hover:border-primary/50 md:col-start-3 md:row-start-2"
      >
        <p className="text-sm font-medium text-primary">Get started</p>
        <div>
          <p className="font-semibold text-foreground">Discuss your project</p>
          <span className="mt-2 inline-flex items-center gap-1 text-sm text-primary">
            Contact me <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </div>
  );
}
