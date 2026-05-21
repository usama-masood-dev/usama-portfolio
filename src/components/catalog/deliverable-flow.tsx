import { getIcon, type IconName } from "@/lib/icons";
import { cn } from "@/lib/utils";

const defaultFlow: { icon: IconName; label: string }[] = [
  { icon: "Search", label: "Scope" },
  { icon: "Boxes", label: "API" },
  { icon: "LayoutDashboard", label: "UI" },
  { icon: "Rocket", label: "Deploy" },
];

export function DeliverableFlow({
  steps = defaultFlow,
  className,
}: {
  steps?: { icon: IconName; label: string }[];
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-between gap-1", className)}>
      {steps.map((step, i) => {
        const Icon = getIcon(step.icon);
        return (
          <div key={step.label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" aria-hidden />
              </div>
              <span className="text-[10px] font-medium text-muted">{step.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="mx-1 h-px flex-1 bg-border" aria-hidden />
            )}
          </div>
        );
      })}
    </div>
  );
}
