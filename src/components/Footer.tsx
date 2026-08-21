import Link from "next/link";
import { categoryList, siteConfig } from "@/lib/site-config";

const legalLinks = [
  { href: "/about", label: "About" },
  { href: "/methodology", label: "Methodology" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-alt mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <div className="font-display font-semibold text-lg mb-3">
            Suite<span className="text-accent">Ridge</span>
          </div>
          <p className="text-sm text-ink-muted max-w-xs">{siteConfig.description}</p>
        </div>
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-ink-faint mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            {categoryList.map((c) => (
              <li key={c.slug}>
                <Link href={`/categories/${c.slug}`} className="text-ink-muted hover:text-accent transition-colors">
                  {c.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-ink-faint mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink-muted hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 text-xs text-ink-faint flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span>Some links on this site are affiliate links. See our <Link href="/affiliate-disclosure" className="underline hover:text-accent">affiliate disclosure</Link>.</span>
        </div>
      </div>
    </footer>
  );
}
