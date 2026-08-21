import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, faqPageSchema } from "@/lib/schema";
import { categoryList, siteConfig } from "@/lib/site-config";
import { guides, getGuide } from "@/lib/content/guides";
import { getBestList } from "@/lib/content/best";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${guide.slug}` },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const category = categoryList.find((c) => c.slug === guide.category)!;
  const relatedBest = getBestList(guide.relatedBestSlug);

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <JsonLd
        data={[
          articleSchema({
            headline: guide.title,
            description: guide.metaDescription,
            url: `${siteConfig.url}/guides/${guide.slug}`,
            datePublished: guide.lastVerified,
            dateModified: guide.lastVerified,
          }),
          faqPageSchema(guide.faqs),
        ]}
      />
      <PageHeader
        eyebrow={category.shortName}
        title={guide.title}
        dek={guide.intro}
        breadcrumbs={[
          { name: category.shortName, href: `/categories/${category.slug}` },
          { name: guide.title, href: `/guides/${guide.slug}` },
        ]}
        lastVerified={guide.lastVerified}
      />

      <div className="flex flex-col gap-8 mb-12">
        {guide.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display font-semibold text-xl mb-3">{s.heading}</h2>
            <p className="text-ink-muted leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="font-display font-semibold text-xl mb-5">Frequently asked questions</h2>
        <div className="flex flex-col gap-5">
          {guide.faqs.map((f) => (
            <div key={f.question} className="rounded-xl border border-border bg-surface p-5">
              <h3 className="font-semibold mb-2">{f.question}</h3>
              <p className="text-sm text-ink-muted">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {relatedBest && (
        <p className="text-sm text-ink-faint">
          Ready to choose?{" "}
          <Link href={`/best/${relatedBest.slug}`} className="text-accent hover:underline">
            See our {relatedBest.title.toLowerCase()} &rarr;
          </Link>
        </p>
      )}
    </article>
  );
}
