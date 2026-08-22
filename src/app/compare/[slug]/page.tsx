import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { VerdictBox } from "@/components/VerdictBox";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { categoryList, siteConfig } from "@/lib/site-config";
import { comparisons, getComparison } from "@/lib/content/comparisons";
import { getProduct } from "@/lib/content/products";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return {};
  return buildMetadata({
    title: comparison.title,
    description: comparison.metaDescription,
    path: `/compare/${comparison.slug}`,
  });
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  const category = categoryList.find((c) => c.slug === comparison.category)!;
  const [firstSlug, secondSlug] = comparison.productSlugs;
  const first = getProduct(firstSlug)!;
  const second = getProduct(secondSlug)!;

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <JsonLd
        data={articleSchema({
          headline: comparison.title,
          description: comparison.metaDescription,
          url: `${siteConfig.url}/compare/${comparison.slug}`,
          datePublished: comparison.lastVerified,
          dateModified: comparison.lastVerified,
        })}
      />
      <PageHeader
        eyebrow={category.shortName}
        title={comparison.title}
        dek={comparison.intro}
        breadcrumbs={[
          { name: category.shortName, href: `/categories/${category.slug}` },
          { name: comparison.title, href: `/compare/${comparison.slug}` },
        ]}
        lastVerified={comparison.lastVerified}
      />

      <div className="grid gap-6 sm:grid-cols-2 mb-10">
        {[first, second].map((p) => (
          <div key={p.slug} className="rounded-xl border border-border bg-surface p-6 flex flex-col gap-4">
            <div>
              <h3 className="font-display font-semibold text-lg">{p.name}</h3>
              <p className="text-sm text-ink-muted mt-1">{p.startingPrice}</p>
            </div>
            <AffiliateCTA product={p} />
            <Link href={`/reviews/${p.slug}`} className="text-sm text-accent hover:underline">
              Full {p.name} review &rarr;
            </Link>
          </div>
        ))}
      </div>

      <section className="mb-10 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="font-display font-semibold text-xl mb-3">Choose {first.name} if&hellip;</h2>
          <ul className="space-y-2 text-sm text-ink-muted">
            {comparison.chooseFirstIf.map((r) => (
              <li key={r} className="flex gap-2">
                <span className="text-accent" aria-hidden="true">&bull;</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display font-semibold text-xl mb-3">Choose {second.name} if&hellip;</h2>
          <ul className="space-y-2 text-sm text-ink-muted">
            {comparison.chooseSecondIf.map((r) => (
              <li key={r} className="flex gap-2">
                <span className="text-accent" aria-hidden="true">&bull;</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <VerdictBox>{comparison.verdict}</VerdictBox>
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
