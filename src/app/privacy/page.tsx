import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { site } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <>
      <PageHero band="dark">
        <SectionHeader
          align="left"
          title="Privacy Policy"
          description={`Last updated: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`}
          className="mb-0"
        />
      </PageHero>

      <Section band="light">
        <div className="max-w-3xl space-y-6 text-muted">
          <p>
            This policy describes how {site.name} ({site.url}) handles information
            when you use this portfolio website or contact form.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Information collected</h2>
          <p>
            When you submit the contact form, we receive the information you provide
            (name, email, project details). This is processed via our form provider
            to deliver your message by email.
          </p>
          <h2 className="text-lg font-semibold text-foreground">How we use it</h2>
          <p>
            We use your information only to respond to your inquiry and discuss
            potential projects. We do not sell your data to third parties.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Cookies & analytics</h2>
          <p>
            This site may use minimal technical cookies for theme preference
            (light/dark mode) stored in your browser. Analytics may be added later
            with notice on this page.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a href={site.links.email} className="text-primary hover:underline">
              {site.email}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
