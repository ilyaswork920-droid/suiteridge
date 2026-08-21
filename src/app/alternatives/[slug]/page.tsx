import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { categoryList, siteConfig } from "@/lib/site-config";
import { alternativesEntries, getAlternatives } from "@/lib/content/alternatives";
import { getProduct } from "@/lib/content/products";

export function generateStaticParams() {
  return alternativesEntries.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getAlternatives(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.metaDescription,
    alternates: { canonical: `/alternatives/${entry.slug}` },
  };
}

export default async function AlternativesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getAlternatives(slug);
  if (!entry) notFound();

  const category = categoryList.find((c) => c.slug === entry.category)!;
  const original = getProduct(entry.ofProductSlug)!;
  const alternatives = entry.alternativeSlugs.map((s) => getProduct(s)!).filter(Boolean);

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <JsonLd
        data={articleSchema({
          headline: entry.title,
          description: entry.metaDescription,
          url: `${siteConfig.url}/alternatives/${entry.slug}`,
          datePublished: entry.lastVerified,
          dateModified: entry.lastVerified,
        })}
      />
      <PageHeader
        eyebrow={category.shortName}
        title={entry.title}
        dek={entry.intro}
        breadcrumbs={[
          { name: category.shortName, href: `/categories/${category.slug}` },
          { name: entry.title, href: `/alternatives/${entry.slug}` },
        ]}
        lastVerified={entry.lastVerified}
      />

      <section className="mb-10">
        <h2 className="font-display font-semibold text-xl mb-3">Worth switching if&hellip;</h2>
        <ul className="space-y-2 text-sm text-ink-muted">
          {entry.reasonsToSwitch.map((r) => (
            <li key={r} className="flex gap-2">
              <span className="text-accent" aria-hidden="true">&bull;</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-faint">
          Not sure {original.name} is actually the problem? Read the{" "}
          <Link href={`/reviews/${original.slug}`} className="text-accent hover:underline">
            full {original.name} review
          </Link>{" "}
          first.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-xl mb-5">The alternatives</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {alternatives.map((p) => (
            <div key={p.slug} className="rounded-xl border border-border bg-surface p-6 flex flex-col gap-3">
              <h3 className="font-display font-semibold text-lg">{p.name}</h3>
              <p className="text-sm text-ink-muted">{p.tagline}</p>
              <p className="text-sm text-ink-faint">{p.startingPrice}</p>
              <div className="flex items-center gap-4 mt-1">
                <AffiliateCTA product={p} />
                <Link href={`/reviews/${p.slug}`} className="text-sm text-accent hover:underline">
                  Full review &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-ink-faint">
        Some links above are affiliate links — see our{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-accent">
          affiliate disclosure
        </Link>
        .
      </p>
    </article>
  );
}
