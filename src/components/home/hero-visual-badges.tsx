"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, CreditCard, Sparkles } from "lucide-react";

function HeroBadge({
  children,
  className,
  delay = 0,
  fromX = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  fromX?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: 12, x: fromX }}
      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 340,
        damping: 22,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Floating chips only — hero screenshot is a server-rendered LCP element in page.tsx */
export function HeroVisualBadges() {
  return (
    <>
      <HeroBadge
        delay={0.35}
        fromX={-20}
        className="absolute -bottom-4 -left-4 z-20 flex items-center gap-2 rounded-xl border border-border bg-surface/95 px-3 py-2 shadow-lg backdrop-blur-sm"
      >
        <Sparkles className="h-4 w-4 text-primary" aria-hidden />
        <span className="text-xs font-medium text-foreground">OpenAI in production</span>
      </HeroBadge>

      <HeroBadge
        delay={0.5}
        fromX={20}
        className="absolute -right-2 top-8 z-20 flex items-center gap-2 rounded-xl border border-border bg-surface/95 px-3 py-2 shadow-lg backdrop-blur-sm md:-right-6"
      >
        <CreditCard className="h-4 w-4 text-primary" aria-hidden />
        <span className="text-xs font-medium text-foreground">Stripe live</span>
      </HeroBadge>

      <HeroBadge
        delay={0.65}
        fromX={16}
        className="absolute -top-3 right-8 z-20 hidden items-center gap-2 rounded-xl border border-border bg-surface/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:flex"
      >
        <Bot className="h-4 w-4 text-primary" aria-hidden />
        <span className="text-xs font-medium text-foreground">Enterprise SaaS</span>
      </HeroBadge>
    </>
  );
}
