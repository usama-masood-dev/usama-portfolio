import { SectionBackdrop } from "@/components/ui/section-backdrop";
import { cn } from "@/lib/utils";

export function PageHero({
  children,
  className,
  band = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  band?: "dark" | "light";
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/50 py-12 md:py-16",
        band === "dark" ? "bg-section-dark" : "bg-section-light",
        className,
      )}
    >
      <SectionBackdrop variant="hero" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
