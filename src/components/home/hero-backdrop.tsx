/** Static hero backdrop — no client JS (avoids framer-motion on critical path). */
export function HeroBackdrop() {
  return (
    <>
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 animate-hero-glow rounded-full bg-primary/25 blur-3xl dark:bg-primary/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 animate-hero-glow animation-delay-150 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div
        className="section-bg-grid pointer-events-none absolute inset-0 animate-hero-fade-in opacity-40 dark:opacity-25"
        aria-hidden
      />
      <div
        className="section-bg-noise pointer-events-none absolute inset-0 animate-hero-fade-in animation-delay-150 opacity-60"
        aria-hidden
      />
    </>
  );
}
