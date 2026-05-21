import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { CatalogItem } from "@/lib/catalog";
import { DeliverableFlow } from "@/components/catalog/deliverable-flow";
import { IconBadge } from "@/components/ui/icon-card";
import { Badge } from "@/components/ui/badge";

export function CatalogCard({
  item,
  compact = false,
}: {
  item: CatalogItem;
  compact?: boolean;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--card-shadow)] transition hover:border-primary/40">
      <div className="flex items-start gap-4">
        <IconBadge icon={item.icon} className="h-12 w-12 rounded-xl" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
          <p className="mt-1.5 text-sm text-muted">{item.shortDescription}</p>
        </div>
      </div>

      {!compact && (
        <>
          <DeliverableFlow className="mt-5" />
          <p className="mt-4 text-xs text-muted">
            <span className="font-medium text-foreground">Ideal for: </span>
            {item.idealFor}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {item.includes.slice(0, 3).map((line) => (
              <li key={line} className="flex gap-2">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </>
      )}

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
        {!compact && (
          <span className="text-xs text-muted">{item.timeline}</span>
        )}
        <Link
          href={`/contact?service=${item.id}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition hover:gap-2"
        >
          Request a quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
