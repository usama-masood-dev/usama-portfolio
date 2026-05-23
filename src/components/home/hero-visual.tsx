"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, CreditCard, Sparkles } from "lucide-react";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { images } from "@/lib/images";

const easeOut = [0.16, 1, 0.3, 1] as const;

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
      initial={
        reduceMotion
          ? false
          : { opacity: 0, scale: 0.75, y: 24, x: fromX }
      }
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

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 56, x: 48, scale: 0.88, rotate: 2 }
        }
        animate={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
      >
        <BrowserFrame
          src={images.heroDashboard}
          alt="SaaS dashboard preview"
          priority
          className="relative z-10 shadow-[0_24px_48px_-12px_rgba(8,145,178,0.2)]"
        />
      </motion.div>

      <HeroBadge
        delay={0.55}
        fromX={-20}
        className="absolute -bottom-4 -left-4 z-20 flex items-center gap-2 rounded-xl border border-border bg-surface/95 px-3 py-2 shadow-lg backdrop-blur-sm"
      >
        <Sparkles className="h-4 w-4 text-primary" aria-hidden />
        <span className="text-xs font-medium text-foreground">OpenAI in production</span>
      </HeroBadge>

      <HeroBadge
        delay={0.7}
        fromX={20}
        className="absolute -right-2 top-8 z-20 flex items-center gap-2 rounded-xl border border-border bg-surface/95 px-3 py-2 shadow-lg backdrop-blur-sm md:-right-6"
      >
        <CreditCard className="h-4 w-4 text-primary" aria-hidden />
        <span className="text-xs font-medium text-foreground">Stripe live</span>
      </HeroBadge>

      <HeroBadge
        delay={0.85}
        fromX={16}
        className="absolute -top-3 right-8 z-20 hidden items-center gap-2 rounded-xl border border-border bg-surface/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:flex"
      >
        <Bot className="h-4 w-4 text-primary" aria-hidden />
        <span className="text-xs font-medium text-foreground">Enterprise SaaS</span>
      </HeroBadge>
    </div>
  );
}
