import { Sparkles } from "lucide-react";
import { SocialLinks } from "@/components/layout/social-links";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

/** Server-rendered hero copy — paints immediately for LCP (no framer-motion). */
export function HeroContent() {
  return (
    <div className="animate-hero-rise">
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-on-soft dark:text-primary">
        <Sparkles className="h-4 w-4" aria-hidden />
        {site.availability}
      </p>

      <h1 className="animate-hero-rise animation-delay-75 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
        I build <span className="text-primary">AI-powered SaaS</span> that ships to production.
      </h1>

      <p className="animate-hero-rise animation-delay-150 mt-5 text-lg text-muted">
        {site.tagline}
      </p>

      <div className="animate-hero-rise animation-delay-200 mt-8 flex flex-wrap gap-4">
        <Button href="/contact" size="lg">
          Discuss your project
        </Button>
        <Button href="/work" variant="secondary" size="lg">
          View my work
        </Button>
      </div>

      <SocialLinks className="animate-hero-rise animation-delay-250 mt-6" iconSize="sm" />
    </div>
  );
}
