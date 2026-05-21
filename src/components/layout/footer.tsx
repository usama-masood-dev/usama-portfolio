import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-foreground">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm text-muted">{site.tagline}</p>
            <p className="mt-4 text-sm text-muted">{site.location}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Navigate</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted transition hover:text-primary"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={site.links.email}
                  className="transition hover:text-primary"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Built with Next.js · MERN stack developer portfolio</p>
        </div>
      </div>
    </footer>
  );
}
