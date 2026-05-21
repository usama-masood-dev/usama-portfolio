import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { SocialLinks } from "@/components/layout/social-links";
import { PageHero } from "@/components/ui/page-hero";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { site } from "@/lib/site";

const nextSteps = [
  "I review your message within 24 hours",
  "We align on scope and timeline",
  "You receive a clear quote — no surprise pricing",
];

export default function ContactPage() {
  return (
    <>
      <PageHero band="dark">
        <SectionReveal>
          <SectionHeader
            align="left"
            eyebrow="Contact"
            title="Tell me about your project"
            description="I usually reply within 24 hours."
            className="mb-0"
          />
        </SectionReveal>
      </PageHero>

      <Section band="light">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-2xl border border-border bg-surface p-6 shadow-[var(--card-shadow)] md:p-8">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-semibold text-foreground">Direct contact</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3 text-muted">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <a
                    href={site.links.email}
                    className="hover:text-primary transition"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3 text-muted">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <span>{site.phone}</span>
                </li>
                <li className="flex gap-3 text-muted">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <span>{site.location}</span>
                </li>
              </ul>
              <SocialLinks className="mt-5" iconSize="sm" />
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-semibold text-foreground">What happens next</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-4 text-sm text-muted">
                {nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>

            {site.calendly ? (
              <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6">
                <h3 className="font-semibold text-foreground">
                  Prefer a quick call?
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Book a free 15-minute discovery call.
                </p>
                <Button
                  href={site.calendly}
                  variant="secondary"
                  className="mt-4 w-full"
                  external
                >
                  Book on Calendly
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </Section>
    </>
  );
}
