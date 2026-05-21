import { cn } from "@/lib/utils";

export function MetricChip({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface px-4 py-3 text-center sm:text-left",
        className,
      )}
    >
      <p className="text-lg font-bold text-primary">{value}</p>
      <p className="mt-0.5 text-xs text-muted">{label}</p>
    </div>
  );
}
