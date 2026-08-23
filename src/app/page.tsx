import type { Metadata } from "next";
import Link from "next/link";
import { LinkCard } from "@/components/LinkCard";
import { Newsletter } from "@/components/Newsletter";
import { MethodologyScores } from "@/components/ScoreBar";
import { categoryList, siteConfig } from "@/lib/site-config";
import { products } from "@/lib/content/products";
import { comparisons } from "@/lib/content/comparisons";
import { bestLists } from "@/lib/content/best";

export const metadata: Metadata = {
  other: {
    "impact-site-verification": "d911c637-042a-4cd1-80fd-4f76d92806ee",
  },
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section className="py-16 sm:py-24 max-w-3xl">
        <h1 className="font-display font-semibold text-4xl sm:text-5xl leading-[1.1]">
          {siteConfig.tagline}
        </h1>
        <p className="mt-6 text-lg text-ink-muted max-w-xl">
          SuiteRidge is an independent research platform that helps small business owners choose
          software — reviews, comparisons, and shortlists built on a published evaluation
          methodology, not vendor marketing.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#categories"
            className="inline-flex items-center rounded-full bg-accent text-accent-ink px-6 py-3 text-sm font-semibold shadow-[var(--shadow)] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
          >
            Browse categories
          </a>
          <Link
            href="/methodology"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent/70 hover:text-accent hover:bg-surface-alt"
          >
            Read our methodology
          </Link>
        </div>
      </section>

      {/* What SuiteRidge does */}
      <section className="py-14 border-t border-border grid gap-6 sm:grid-cols-3">
        <div>
          <h2 className="font-display font-semibold text-lg mb-2">Independent research</h2>
          <p className="text-sm text-ink-muted">
            No vendor pays for a better ranking. Every recommendation is scored against the same
            published criteria, every time.
          </p>
        </div>
        <div>
          <h2 className="font-display font-semibold text-lg mb-2">Not a directory</h2>
          <p className="text-sm text-ink-muted">
            We don&apos;t list every tool that exists — we shortlist the ones worth your time for a
            specific situation, and say plainly who should avoid each one.
          </p>
        </div>
        <div>
          <h2 className="font-display font-semibold text-lg mb-2">Methodology published</h2>
          <p className="text-sm text-ink-muted">
            Vendor-stated facts, our own analysis, and aggregated user feedback are labeled
            separately, everywhere on the site.
          </p>
        </div>
      </section>

      {/* Featured categories */}
      <section id="categories" className="py-14 border-t border-border scroll-mt-20">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-display font-semibold text-2xl">Browse by category</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {categoryList.map((c) => (
            <LinkCard
              key={c.slug}
              href={`/categories/${c.slug}`}
              eyebrow="Category"
              title={c.name}
              description={c.description}
            />
          ))}
        </div>
      </section>

      {/* Featured comparisons */}
      <section className="py-14 border-t border-border">
        <h2 className="font-display font-semibold text-2xl mb-6">Featured comparisons</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {comparisons.map((c) => (
            <LinkCard
              key={c.slug}
              href={`/compare/${c.slug}`}
              eyebrow="Compare"
              title={c.title}
              description={c.intro}
            />
          ))}
        </div>
      </section>

      {/* Latest reviews */}
      <section className="py-14 border-t border-border">
        <h2 className="font-display font-semibold text-2xl mb-6">Latest reviews</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {products.map((p) => (
            <LinkCard
              key={p.slug}
              href={`/reviews/${p.slug}`}
              eyebrow={`Last verified ${p.pricingLastVerified}`}
              title={p.name}
              description={p.tagline}
            />
          ))}
        </div>
      </section>

      {/* Best software guides */}
      <section className="py-14 border-t border-border">
        <h2 className="font-display font-semibold text-2xl mb-6">Best software guides</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {bestLists.map((b) => (
            <LinkCard key={b.slug} href={`/best/${b.slug}`} eyebrow="Best-for" title={b.title} description={b.situation} />
          ))}
        </div>
      </section>

      {/* How we evaluate software */}
      <section className="py-14 border-t border-border">
        <div className="grid gap-10 sm:grid-cols-2 items-start">
          <div>
            <h2 className="font-display font-semibold text-2xl mb-3">How we evaluate software</h2>
            <p className="text-ink-muted mb-4">
              Every review is scored against four fixed criteria so comparisons within a category
              are apples-to-apples, not vibes-to-vibes.
            </p>
            <Link href="/methodology" className="text-sm font-medium text-accent hover:underline">
              Read the full methodology &rarr;
            </Link>
          </div>
          <MethodologyScores
            scores={{ featureCoverage: 8, pricingTransparency: 7, easeOfAdoption: 7, smbFit: 8 }}
          />
        </div>
      </section>

      {/* Editorial trust */}
      <section className="py-14 border-t border-border max-w-2xl">
        <h2 className="font-display font-semibold text-2xl mb-3">Who&apos;s behind this</h2>
        <p className="text-ink-muted">
          SuiteRidge is an independent editorial operation. We don&apos;t accept payment for
          placement, we don&apos;t invent hands-on testing we haven&apos;t done, and we say when a
          product isn&apos;t a good fit — including for products we recommend elsewhere on the
          site.{" "}
          <Link href="/about" className="text-accent hover:underline">
            More about SuiteRidge &rarr;
          </Link>
        </p>
      </section>

      {/* Newsletter */}
      <section className="py-14 border-t border-border">
        <Newsletter />
      </section>

      {/* Affiliate disclosure note */}
      <section className="py-10 border-t border-border text-sm text-ink-faint max-w-2xl">
        Some links on this site are affiliate links — if you sign up through one, SuiteRidge may
        earn a commission at no extra cost to you. This never affects which products we recommend
        or how they&apos;re ranked.{" "}
        <Link href="/affiliate-disclosure" className="text-accent hover:underline">
          Full disclosure &rarr;
        </Link>
      </section>
    </div>
  );
}
