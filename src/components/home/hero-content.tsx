"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SocialLinks } from "@/components/layout/social-links";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const easeOut = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const headline = {
  hidden: { opacity: 0, y: 52, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easeOut },
  },
};

const badge = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 320, damping: 24 },
  },
};

export function HeroContent() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
          <Sparkles className="h-4 w-4" />
          {site.availability}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
          I build{" "}
          <span className="text-primary">AI-powered SaaS</span> that ships to production.
        </h1>
        <p className="mt-5 text-lg text-muted">{site.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact" size="lg">
            Discuss your project
          </Button>
          <Button href="/work" variant="secondary" size="lg">
            View my work
          </Button>
        </div>
        <SocialLinks className="mt-6" iconSize="sm" />
      </div>
    );
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.p
        variants={badge}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary"
      >
        <Sparkles className="h-4 w-4" aria-hidden />
        {site.availability}
      </motion.p>

      <motion.h1
        variants={headline}
        className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-tight"
      >
        I build <span className="text-primary">AI-powered SaaS</span> that ships to production.
      </motion.h1>

      <motion.p variants={fadeUp} className="mt-5 text-lg text-muted">
        {site.tagline}
      </motion.p>

      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
        <Button href="/contact" size="lg">
          Discuss your project
        </Button>
        <Button href="/work" variant="secondary" size="lg">
          View my work
        </Button>
      </motion.div>

      <motion.div variants={fadeUp}>
        <SocialLinks className="mt-6" iconSize="sm" />
      </motion.div>
    </motion.div>
  );
}
