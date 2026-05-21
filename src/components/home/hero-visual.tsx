"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, CreditCard, Sparkles } from "lucide-react";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { images } from "@/lib/images";

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <BrowserFrame
          src={images.heroDashboard}
          alt="SaaS dashboard preview"
          priority
          className="relative z-10"
        />
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="absolute -bottom-4 -left-4 z-20 flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 shadow-lg"
      >
        <Sparkles className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium text-foreground">OpenAI in production</span>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="absolute -right-2 top-8 z-20 flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 shadow-lg md:-right-6"
      >
        <CreditCard className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium text-foreground">Stripe live</span>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="absolute -top-3 right-8 z-20 hidden items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 shadow-lg sm:flex"
      >
        <Bot className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium text-foreground">Enterprise SaaS</span>
      </motion.div>
    </div>
  );
}
