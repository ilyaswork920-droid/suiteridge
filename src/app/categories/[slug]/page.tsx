import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { LinkCard } from "@/components/LinkCard";
import { JsonLd } from "@/components/JsonLd";
import { collectionPageSchema } from "@/lib/schema";
import { categoryList, siteConfig } from "@/lib/site-config";
import { products } from "@/lib/content/products";
import { comparisons } from "@/lib/content/comparisons";
import { alternativesEntries } from "@/lib/content/alternatives";
import { bestLists } from "@/lib/content/best";
import { guides } from "@/lib/content/guides";

export function generateStaticParams() {
  return categoryList.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryList.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/categories/${category.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categoryList.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryProducts = products.filter((p) => p.category === category.slug);
  const categoryBest = bestLists.filter((b) => b.category === category.slug);
  const categoryCompare = comparisons.filter((c) => c.category === category.slug);
  const categoryAlternatives = alternativesEntries.filter((a) => a.category === category.slug);
  const categoryGuides = guides.filter((g) => g.category === category.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <JsonLd
        data={collectionPageSchema({
          name: category.name,
          description: category.description,
          url: `${siteConfig.url}/categories/${category.slug}`,
        })}
      />
      <PageHeader
        eyebrow="Category"
        title={category.name}
        dek={category.intro}
        breadcrumbs={[{ name: category.shortName, href: `/categories/${category.slug}` }]}
      />

      <section className="mb-14">
        <h2 className="font-display font-semibold text-xl mb-5">Best-for shortlists</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {categoryBest.map((b) => (
            <LinkCard key={b.slug} href={`/best/${b.slug}`} eyebrow="Best-for" title={b.title} description={b.situation} />
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="font-display font-semibold text-xl mb-5">Reviews</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {categoryProducts.map((p) => (
            <LinkCard key={p.slug} href={`/reviews/${p.slug}`} eyebrow="Review" title={p.name} description={p.tagline} />
          ))}
        </div>
      </section>

      {categoryCompare.length > 0 && (
        <section className="mb-14">
          <h2 className="font-display font-semibold text-xl mb-5">Comparisons</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {categoryCompare.map((c) => (
              <LinkCard key={c.slug} href={`/compare/${c.slug}`} eyebrow="Compare" title={c.title} description={c.intro} />
            ))}
          </div>
        </section>
      )}

      {categoryAlternatives.length > 0 && (
        <section className="mb-14">
          <h2 className="font-display font-semibold text-xl mb-5">Alternatives</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {categoryAlternatives.map((a) => (
              <LinkCard key={a.slug} href={`/alternatives/${a.slug}`} eyebrow="Alternatives" title={a.title} description={a.intro} />
            ))}
          </div>
        </section>
      )}

      {categoryGuides.length > 0 && (
        <section className="mb-14">
          <h2 className="font-display font-semibold text-xl mb-5">Guides</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {categoryGuides.map((g) => (
              <LinkCard key={g.slug} href={`/guides/${g.slug}`} eyebrow="Guide" title={g.title} description={g.intro} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
