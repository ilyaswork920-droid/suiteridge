import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { PricingTable } from "@/components/PricingTable";
import { JsonLd } from "@/components/JsonLd";
import { itemListSchema, faqPageSchema, articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { categoryList, siteConfig } from "@/lib/site-config";
import { bestLists, getBestList } from "@/lib/content/best";
import { getProduct } from "@/lib/content/products";

export function generateStaticParams() {
  return bestLists.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const list = getBestList(slug);
  if (!list) return {};
  return buildMetadata({
    title: list.title,
    description: list.metaDescription,
    path: `/best/${list.slug}`,
  });
}

export default async function BestListPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const list = getBestList(slug);
  if (!list) notFound();

  const category = categoryList.find((c) => c.slug === list.category)!;
  const picks = list.picks
    .map((pick) => ({ ...pick, product: getProduct(pick.productSlug)! }))
    .sort((a, b) => a.rank - b.rank);

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <JsonLd
        data={[
          picks.length > 1
            ? itemListSchema(
                picks.map((p) => ({ name: p.product.name, url: `${siteConfig.url}/reviews/${p.product.slug}` }))
              )
            : articleSchema({
                headline: list.title,
                description: list.metaDescription,
                url: `${siteConfig.url}/best/${list.slug}`,
                datePublished: list.lastVerified,
                dateModified: list.lastVerified,
              }),
          ...(list.faqs && list.faqs.length > 0 ? [faqPageSchema(list.faqs)] : []),
        ]}
      />
      <PageHeader
        eyebrow={category.shortName}
        title={list.title}
        dek={list.intro}
        breadcrumbs={[
          { name: category.shortName, href: `/categories/${category.slug}` },
          { name: list.title, href: `/best/${list.slug}` },
        ]}
        lastVerified={list.lastVerified}
      />

      <p className="text-sm text-ink-faint mb-4 -mt-4">
        Situation covered here: <span className="text-ink-muted">{list.situation}</span>
      </p>

      {list.relatedLinks && list.relatedLinks.length > 0 && (
        <div className="mb-8 flex flex-col gap-2">
          {list.relatedLinks.map((r) => (
            <p key={r.href} className="text-sm text-ink-faint">
              <Link href={r.href} className="text-accent hover:underline">
                {r.label}
              </Link>
            </p>
          ))}
        </div>
      )}

      {list.whatToLookFor && (
        <section className="mb-10">
          <h2 className="font-display font-semibold text-xl mb-4">{list.whatToLookFor.heading}</h2>
          <ul className="space-y-2 text-sm text-ink-muted">
            {list.whatToLookFor.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent" aria-hidden="true">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="flex flex-col gap-6">
        {picks.map(({ rank, oneLinerVerdict, product }) => (
          <div key={product.slug} className="rounded-xl border border-border/60 bg-surface p-6 sm:p-7 shadow-[var(--shadow)]">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">#{rank} Pick</span>
                <h2 className="font-display font-semibold text-xl mt-1">{product.name}</h2>
              </div>
              <span className="text-sm text-ink-faint sm:whitespace-nowrap sm:text-right">{product.startingPrice}</span>
            </div>
            <p className="text-ink-muted mb-5">{oneLinerVerdict}</p>
            <div className="flex flex-wrap items-center gap-4">
              <AffiliateCTA product={product} />
              <Link href={`/reviews/${product.slug}`} className="text-sm text-accent hover:underline">
                Full {product.name} review &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      {list.whoShouldLookElsewhere && list.whoShouldLookElsewhere.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display font-semibold text-lg mb-4">Who should look elsewhere</h2>
          <ul className="space-y-2 text-sm text-ink-muted">
            {list.whoShouldLookElsewhere.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-low" aria-hidden="true">&bull;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {list.situations && list.situations.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display font-semibold text-xl mb-5">
            {picks.length === 1 ? `Which ${picks[0].product.name} plan fits your situation?` : "Which one is right for you?"}
          </h2>
          <div className="flex flex-col gap-6">
            {list.situations.map((s) => (
              <div key={s.heading}>
                <h3 className="font-semibold mb-1.5">{s.heading}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {picks.length === 1 && (
        <section className="mt-12">
          <h2 className="font-display font-semibold text-xl mb-5">{picks[0].product.name} Pricing at a Glance</h2>
          <PricingTable tiers={picks[0].product.pricing} lastVerified={picks[0].product.pricingLastVerified} />
        </section>
      )}

      {list.howToChoose && (
        <section className="mt-12">
          <h2 className="font-display font-semibold text-xl mb-5">{list.howToChoose.heading}</h2>
          <ul className="space-y-2 text-sm text-ink-muted">
            {list.howToChoose.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent" aria-hidden="true">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {list.quickCompare && list.quickCompare.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display font-semibold text-xl mb-5">
            {picks[0]?.product.name} vs {picks[1]?.product.name} at a glance
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border/60 shadow-[var(--shadow)]">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="font-mono text-xs uppercase tracking-wide text-ink-faint px-4 py-3"></th>
                  {picks.map(({ product }) => (
                    <th key={product.slug} className="font-mono text-xs uppercase tracking-wide text-ink-faint px-4 py-3">
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {list.quickCompare.map((row) => (
                  <tr key={row.label} className="border-t border-border align-top">
                    <td className="px-4 py-3 font-semibold whitespace-nowrap">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-4 py-3 text-ink-muted">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {list.faqs && list.faqs.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display font-semibold text-xl mb-5">Frequently asked questions</h2>
          <div className="flex flex-col gap-5">
            {list.faqs.map((f) => (
              <div key={f.question} className="rounded-xl border border-border/60 bg-surface p-5 shadow-[var(--shadow)]">
                <h3 className="font-semibold mb-2">{f.question}</h3>
                <p className="text-sm text-ink-muted">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {picks.length === 1 && (
        <div className="mt-12 mb-2">
          <AffiliateCTA product={picks[0].product} />
        </div>
      )}

      {picks.length > 1 && list.showBottomCta && (
        <section className="mt-12 mb-2">
          <h2 className="font-display font-semibold text-lg mb-4">Ready to pick one?</h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {picks.map(({ product }) => (
              <div key={product.slug} className="flex-1 min-w-[220px]">
                <AffiliateCTA product={product} />
              </div>
            ))}
          </div>
        </section>
      )}

      {list.faqs && list.faqs.length > 0 && (
        <p className="mt-10 text-xs text-ink-faint">
          More {category.shortName.toLowerCase()} tools are being added to this shortlist as we complete full reviews — see the{" "}
          <Link href={`/categories/${category.slug}`} className="underline hover:text-accent">
            {category.shortName} category
          </Link>{" "}
          for what&apos;s live now.
        </p>
      )}

      <p className="mt-4 text-xs text-ink-faint">
        Ranking reflects our{" "}
        <Link href="/methodology" className="underline hover:text-accent">
          published methodology
        </Link>
        , not affiliate commission rates. Some links above are affiliate links — see our{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-accent">
          affiliate disclosure
        </Link>
        .
      </p>
    </article>
  );
}
