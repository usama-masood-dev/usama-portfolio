import type { IconName } from "@/lib/icons";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function IconCard({
  icon,
  title,
  description,
  className,
}: {
  icon: IconName;
  title: string;
  description: string;
  className?: string;
}) {
  const Icon = getIcon(icon);

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-5 shadow-[var(--card-shadow)] transition hover:border-primary/40",
        className,
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

export function IconBadge({
  icon,
  className,
}: {
  icon: IconName;
  className?: string;
}) {
  const Icon = getIcon(icon);
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary",
        className,
      )}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </div>
  );
}
