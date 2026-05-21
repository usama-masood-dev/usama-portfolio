"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { getIcon, type IconName } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
}: {
  items: readonly {
    question: string;
    answer: string;
    icon?: IconName;
  }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-surface">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const Icon = item.icon ? getIcon(item.icon) : null;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center gap-4 px-6 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              {Icon && (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
              )}
              <span className="flex-1 font-medium text-foreground">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-muted transition",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-4 pl-[4.25rem] text-sm text-muted">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
