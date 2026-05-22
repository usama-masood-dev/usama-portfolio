import { Calendar } from "lucide-react";
import { site } from "@/lib/site";

const calendlyHref = site.calendly || "https://calendly.com";

export function CalendlyFab() {
  return (
    <a
      href={calendlyHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-6 sm:text-base"
      aria-label="Book a free 15-minute call on Calendly"
    >
      <Calendar className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" aria-hidden />
      <span className="max-w-[11rem] leading-tight sm:max-w-none">
        Book Free 15-Minute Call
      </span>
    </a>
  );
}
