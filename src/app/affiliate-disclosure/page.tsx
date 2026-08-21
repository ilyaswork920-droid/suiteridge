import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How SuiteRidge makes money, and why it doesn't affect what we recommend.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="mx-auto max-w-2xl px-4 sm:px-6 py-10">
      <PageHeader
        title="Affiliate Disclosure"
        dek="How SuiteRidge makes money, stated plainly rather than buried in a footer."
        breadcrumbs={[{ name: "Affiliate Disclosure", href: "/affiliate-disclosure" }]}
      />
      <div className="flex flex-col gap-6 text-ink-muted leading-relaxed">
        <p>
          {siteConfig.name} earns revenue primarily through affiliate partnerships. When you click
          a link to a product we&apos;ve reviewed and go on to sign up, we may earn a commission
          from that company. This does not change the price you pay.
        </p>
        <p>
          Affiliate revenue does not determine which products we cover, how we rank them, or what
          we say about them. Every ranking on this site is ordered according to our{" "}
          <Link href="/methodology" className="text-accent hover:underline">
            published methodology
          </Link>
          , scored the same way for every product in a category — not by which company pays the
          highest commission. Where that has meant recommending a lower-commission (or
          no-commission) product over a higher-paying one, we&apos;ve done that.
        </p>
        <p>
          We label affiliate links clearly wherever they appear, and we disclose this
          relationship in accordance with FTC guidelines on endorsements and testimonials. If
          you&apos;d rather visit a product directly without an affiliate link, every review names
          the vendor so you can search for it yourself.
        </p>
        <p>
          Questions about this disclosure or a specific piece of content? Reach us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent hover:underline">
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
