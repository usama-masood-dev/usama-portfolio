import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { images } from "@/lib/images";
import { projects } from "@/lib/projects";

export function BentoHighlight() {
  const featured = projects[0];

  return (
    <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
      <Link
        href={`/work/${featured.slug}`}
        className="group relative overflow-hidden rounded-2xl border border-border md:col-span-2 md:row-span-2"
      >
        <Image
          src={featured.coverImage}
          alt={featured.title}
          width={1200}
          height={800}
          className="h-full min-h-[280px] w-full object-cover transition duration-500 group-hover:scale-105 md:min-h-[360px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <p className="text-sm font-medium text-primary">Featured work</p>
          <h3 className="mt-1 text-2xl font-bold text-foreground">{featured.title}</h3>
          <p className="mt-2 max-w-md text-sm text-muted">{featured.excerpt}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
            View case study <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>

      <Link
        href="/services#catalog"
        className="group relative overflow-hidden rounded-2xl border border-border"
      >
        <Image
          src={images.bento.catalog}
          alt="Services catalog"
          width={600}
          height={400}
          className="h-full min-h-[160px] w-full object-cover transition group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <Layers className="h-5 w-5 text-primary" />
          <p className="mt-2 font-semibold text-foreground">Project catalog</p>
          <p className="text-xs text-muted">4 fixed deliverables</p>
        </div>
      </Link>

      <Link
        href="/contact"
        className="group flex flex-col justify-between rounded-2xl border border-primary/30 bg-primary/10 p-5 transition hover:border-primary/50"
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
