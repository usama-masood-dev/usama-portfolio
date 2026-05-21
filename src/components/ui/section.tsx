import {
  SectionBackdrop,
  getSectionSurfaceClass,
  type SectionBand,
  type SectionVariant,
} from "@/components/ui/section-backdrop";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
  /** dark / light alternating bands */
  band?: SectionBand;
  /** accent = CTA strip; hero = only for custom hero blocks */
  variant?: SectionVariant;
  dividerTop?: boolean;
};

export function Section({
  id,
  className,
  children,
  containerClassName,
  band,
  variant,
  dividerTop: _dividerTop,
}: SectionProps) {
  const surfaceVariant = variant ?? band;

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-16 md:py-24",
        getSectionSurfaceClass(band, surfaceVariant),
        className,
      )}
    >
      <SectionBackdrop band={band} variant={surfaceVariant} />
      <div
        className={cn(
          "relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted">{description}</p>
      )}
    </div>
  );
}
