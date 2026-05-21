import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CarouselArrows({
  onPrev,
  onNext,
  canPrev = true,
  canNext = true,
  className,
  size = "md",
}: {
  onPrev: () => void;
  onNext: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  className?: string;
  size?: "sm" | "md";
}) {
  const btnClass = cn(
    "absolute top-1/2 z-10 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/95 shadow-md backdrop-blur-sm transition hover:border-primary/50 hover:text-primary",
    size === "sm" ? "h-9 w-9" : "h-11 w-11",
  );

  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        className={cn(btnClass, "left-0 -translate-x-1/2 sm:left-2 sm:translate-x-0", !canPrev && "opacity-40", className)}
        aria-label="Previous slide"
      >
        <ChevronLeft className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        className={cn(btnClass, "right-0 translate-x-1/2 sm:right-2 sm:translate-x-0", !canNext && "opacity-40", className)}
        aria-label="Next slide"
      >
        <ChevronRight className={size === "sm" ? "h-5 w-5" : "h-5 w-5"} />
      </button>
    </>
  );
}
