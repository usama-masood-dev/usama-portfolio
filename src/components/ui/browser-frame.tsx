import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";

export function BrowserFrame({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--card-shadow)]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-surface-elevated px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 flex-1 truncate rounded bg-background/80 px-2 py-0.5 text-[10px] text-muted">
          app.example.com
        </span>
      </div>
      <OptimizedImage
        src={src}
        alt={alt}
        width={1200}
        height={750}
        priority={priority}
        wrapperClassName="aspect-[16/10]"
        className="h-full w-full"
      />
    </div>
  );
}
