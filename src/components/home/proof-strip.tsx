import { proofStats } from "@/lib/site";
import { getIcon } from "@/lib/icons";
import { StaggerChildren, StaggerItem } from "@/components/motion/section-reveal";

export function ProofStrip() {
  return (
    <StaggerChildren className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {proofStats.map((stat) => {
        const Icon = getIcon(stat.icon);
        return (
          <StaggerItem
            key={stat.label}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-4 text-center md:flex-row md:items-center md:text-left md:p-5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" aria-hidden />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs text-muted md:text-sm">{stat.label}</p>
            </div>
          </StaggerItem>
        );
      })}
    </StaggerChildren>
  );
}

// satisfy TS for proofStats icon - will update site.ts
