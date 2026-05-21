import { cn } from "@/lib/utils";

/** Alternating page bands: dark → light → dark (deeper vs lifted surface) */
export type SectionBand = "dark" | "light";

export type SectionVariant = SectionBand | "accent" | "hero";

const bandSurface: Record<SectionBand, string> = {
  dark: "bg-section-dark",
  light: "bg-section-light",
};

export function SectionBackdrop({
  band,
  variant,
}: {
  band?: SectionBand;
  variant?: SectionVariant;
}) {
  const resolved = variant === "accent" || variant === "hero" ? null : band ?? (variant as SectionBand | undefined);

  if (variant === "hero") {
    return (
      <>
        <div
          className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl dark:bg-primary/10"
          aria-hidden
        />
        <div className="section-bg-grid pointer-events-none absolute inset-0 opacity-40 dark:opacity-25" aria-hidden />
        <div className="section-bg-noise pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      </>
    );
  }

  if (variant === "accent") {
    return (
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/12 via-transparent to-transparent"
        aria-hidden
      />
    );
  }

  if (!resolved) return null;

  return (
    <>
      {resolved === "light" && (
        <div
          className="section-bg-dots pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
          aria-hidden
        />
      )}
      {resolved === "dark" && (
        <div
          className="section-bg-grid pointer-events-none absolute inset-0 opacity-25 dark:opacity-15"
          aria-hidden
        />
      )}
    </>
  );
}

export function getSectionSurfaceClass(
  band?: SectionBand,
  variant?: SectionVariant,
): string {
  if (variant === "accent") {
    return "bg-section-dark border-y border-primary/20";
  }
  if (variant === "hero") {
    return "bg-section-dark";
  }
  if (band) {
    return cn(bandSurface[band], "border-y border-border/50");
  }
  return bandSurface.dark;
}

export function SectionDivider() {
  return null;
}
