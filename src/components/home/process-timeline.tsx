import { processSteps } from "@/lib/site";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-border md:left-1/2 md:block md:-translate-x-1/2" />
      <ol className="grid gap-8 md:grid-cols-4 md:gap-4">
        {processSteps.map((step, index) => {
          const Icon = getIcon(step.icon);
          return (
            <li key={step.step} className="relative flex gap-4 md:flex-col md:items-center md:text-center">
              <div
                className={cn(
                  "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-surface text-primary",
                  index === 0 && "ring-4 ring-primary/20",
                )}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div className="flex-1 md:mt-4">
                <span className="text-xs font-bold text-primary">{step.step}</span>
                <h3 className="mt-1 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-muted">{step.shortDescription}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
