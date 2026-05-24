import Image from "next/image";
import { cn } from "@/lib/utils";

const techLogos: { name: string; slug: string; color?: string }[] = [
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "Express", slug: "express", color: "000000" },
  { name: "OpenAI", slug: "openai" },
  { name: "Stripe", slug: "stripe", color: "635BFF" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "AWS", slug: "amazonaws", color: "FF9900" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "Redis", slug: "redis", color: "FF4438" },
];

function logoUrl(slug: string) {
  return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;
}

function TechLogo({
  tech,
  className,
}: {
  tech: (typeof techLogos)[number];
  className?: string;
}) {
  return (
    <div
      title={tech.name}
      className={cn(
        "group flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-surface transition hover:border-primary/40 hover:bg-primary/5 md:h-16 md:w-16",
        className,
      )}
    >
      <Image
        src={logoUrl(tech.slug)}
        alt={tech.name}
        width={28}
        height={28}
        className="h-7 w-7 opacity-70 transition group-hover:opacity-100 dark:invert"
        sizes="28px"
      />
    </div>
  );
}

export function TechStackLogos({ className }: { className?: string }) {
  const track = [...techLogos, ...techLogos];

  return (
    <div
      className={cn("relative py-2", className)}
      aria-label="Technologies"
      role="region"
    >
      <div className="tech-marquee-mask tech-marquee-animate overflow-hidden">
        <div className="tech-marquee-track gap-3 md:gap-4">
          {track.map((tech, index) => (
            <TechLogo key={`${tech.slug}-${index}`} tech={tech} />
          ))}
        </div>
      </div>
      <div className="tech-marquee-static hidden flex-wrap items-center justify-center gap-3 md:gap-4">
        {techLogos.map((tech) => (
          <TechLogo key={tech.slug} tech={tech} />
        ))}
      </div>
    </div>
  );
}
