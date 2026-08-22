import Link from "next/link";
import { categoryList, siteConfig } from "@/lib/site-config";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  return (
    <header className="relative border-b border-border bg-surface/90 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16 gap-6">
        <Link href="/" className="font-display font-semibold text-lg tracking-tight shrink-0">
          Suite<span className="text-accent">Ridge</span>
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm text-ink-muted flex-1">
          {categoryList.map((c) => (
            <Link key={c.slug} href={`/categories/${c.slug}`} className="hover:text-ink transition-colors">
              {c.shortName}
            </Link>
          ))}
          <Link href="/methodology" className="hover:text-ink transition-colors">
            Methodology
          </Link>
        </nav>
        <Link
          href="#categories"
          className="hidden sm:inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent/70 hover:text-accent hover:bg-surface-alt shrink-0"
        >
          Browse categories
        </Link>
        <MobileNav />
      </div>
      <span className="sr-only">{siteConfig.tagline}</span>
    </header>
  );
}
