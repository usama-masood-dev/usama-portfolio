"use client";

import { motion, useReducedMotion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function HeroBackdrop() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <>
        <div
          className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          aria-hidden
        />
        <div className="section-bg-grid pointer-events-none absolute inset-0 opacity-40 dark:opacity-25" aria-hidden />
        <div className="section-bg-noise pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      </>
    );
  }

  return (
    <>
      <motion.div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary/25 blur-3xl dark:bg-primary/15"
        aria-hidden
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: easeOut }}
      />
      <motion.div
        className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
        initial={{ opacity: 0, scale: 0.5, x: -40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.15, ease: easeOut }}
      />
      <motion.div
        className="section-bg-grid pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
      />
      <motion.div
        className="section-bg-noise pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
      />
    </>
  );
}
