import { processSteps } from "@/lib/site";

export function ProcessTimeline() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step) => (
        <li
          key={step.step}
          className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--card-shadow)]"
        >
          <span className="text-sm font-bold text-primary">{step.step}</span>
          <h3 className="mt-2 font-semibold text-foreground">{step.title}</h3>
          <p className="mt-1 text-sm text-muted">{step.shortDescription}</p>
        </li>
      ))}
    </ol>
  );
}
