import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "success";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" && "bg-surface-elevated text-muted border border-border",
        variant === "primary" && "bg-primary/10 text-primary border border-primary/20",
        variant === "success" && "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
        className,
      )}
    >
      {children}
    </span>
  );
}
