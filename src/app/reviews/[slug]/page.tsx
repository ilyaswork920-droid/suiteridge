import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ProsCons } from "@/components/ProsCons";
import { PricingTable } from "@/components/PricingTable";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { VerdictBox } from "@/components/VerdictBox";
import { MethodologyScores } from "@/components/ScoreBar";
import { ClaimsList } from "@/components/Callout";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { categoryList, siteConfig } from "@/lib/site-config";
import { products, getProduct } from "@/lib/content/products";
import { comparisons } from "@/lib/content/comparisons";
import { alternativesEntries } from "@/lib/content/alternatives";
import { bestLists } from "@/lib/content/best";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} Review (${new Date(product.pricingLastVerified).getFullYear()})`,
    description: `${product.name} review: pricing, features, pros and cons, and who it's actually built for — verified ${product.pricingLastVerified}.`,
    path: `/reviews/${product.slug}`,
  });
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = categoryList.find((c) => c.slug === product.category)!;
  const relatedCompare = comparisons.filter((c) => c.productSlugs.includes(product.slug));
  const relatedAlternatives = alternativesEntries.find((a) => a.ofProductSlug === product.slug);
  const relatedBest = bestLists.find((b) => b.category === product.category);

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <JsonLd
        data={articleSchema({
          headline: `${product.name} Review`,
          description: product.tagline,
          url: `${siteConfig.url}/reviews/${product.slug}`,
          datePublished: product.pricingLastVerified,
          dateModified: product.pricingLastVerified,
        })}
      />
      <PageHeader
        eyebrow={category.shortName}
        title={`${product.name} Review`}
        dek={product.tagline}
        breadcrumbs={[
          { name: category.shortName, href: `/categories/${category.slug}` },
          { name: `${product.name} Review`, href: `/reviews/${product.slug}` },
        ]}
        lastVerified={product.pricingLastVerified}
      />

      <div className="mb-10">
        <AffiliateCTA product={product} />
      </div>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-xl mb-3">What {product.name} does</h2>
        <p className="text-ink-muted leading-relaxed">{product.whatItDoes}</p>
      </section>

      <section className="mb-10 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="font-display font-semibold text-xl mb-3">Who it&apos;s for</h2>
          <ul className="space-y-2 text-sm text-ink-muted">
            {product.whoItsFor.map((w) => (
              <li key={w} className="flex gap-2">
                <span className="text-accent" aria-hidden="true">&bull;</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display font-semibold text-xl mb-3">Who should avoid it</h2>
          <ul className="space-y-2 text-sm text-ink-muted">
            {product.whoShouldAvoid.map((w) => (
              <li key={w} className="flex gap-2">
                <span className="text-low" aria-hidden="true">&bull;</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-xl mb-4">Key features</h2>
        <ClaimsList claims={product.keyFeatures} />
      </section>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-xl mb-3">Ease of use</h2>
        <p className="text-ink-muted leading-relaxed">{product.easeOfUse}</p>
      </section>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-xl mb-4">Pricing</h2>
        <PricingTable tiers={product.pricing} lastVerified={product.pricingLastVerified} />
      </section>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-xl mb-4">Pros and cons</h2>
        <ProsCons pros={product.pros} cons={product.cons} />
      </section>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-xl mb-3">Best use cases</h2>
        <ul className="space-y-2 text-sm text-ink-muted">
          {product.bestUseCases.map((u) => (
            <li key={u} className="flex gap-2">
              <span className="text-accent" aria-hidden="true">&bull;</span>
              <span>{u}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-xl mb-4">How {product.name} scores on our methodology</h2>
        <MethodologyScores scores={product.methodologyScores} />
      </section>

      {relatedCompare.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display font-semibold text-xl mb-3">Compared with competitors</h2>
          <ul className="space-y-2 text-sm">
            {relatedCompare.map((c) => (
              <li key={c.slug}>
                <Link href={`/compare/${c.slug}`} className="text-accent hover:underline font-medium">
                  {c.title} &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {relatedAlternatives && (
        <section className="mb-10">
          <h2 className="font-display font-semibold text-xl mb-3">Alternatives</h2>
          <Link href={`/alternatives/${relatedAlternatives.slug}`} className="text-accent hover:underline font-medium">
            {relatedAlternatives.title} &rarr;
          </Link>
        </section>
      )}

      <section className="mb-10">
        <VerdictBox>{product.verdict}</VerdictBox>
      </section>

      <div className="mb-4">
        <AffiliateCTA product={product} />
      </div>

      {relatedBest && (
        <p className="text-sm text-ink-faint">
          See the full shortlist:{" "}
          <Link href={`/best/${relatedBest.slug}`} className="text-accent hover:underline">
            {relatedBest.title}
          </Link>
        </p>
      )}

      <p className="mt-10 text-xs text-ink-faint">
        Methodology: see how we evaluate software at{" "}
        <Link href="/methodology" className="underline hover:text-accent">
          /methodology
        </Link>
        . Some links above are affiliate links — see our{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-accent">
          affiliate disclosure
        </Link>
        .
      </p>
    </article>
  );
}
