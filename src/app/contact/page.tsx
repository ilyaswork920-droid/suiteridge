import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the SuiteRidge team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 sm:px-6 py-10">
      <PageHeader
        title="Contact"
        dek="Corrections, partnership questions, or something we got wrong — we want to hear about it."
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
      />
      <div className="flex flex-col gap-6 text-ink-muted leading-relaxed">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">General &amp; editorial</h2>
          <p className="text-sm">
            Spotted outdated pricing, a factual error, or want to suggest a product for review?
          </p>
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent hover:underline text-sm font-medium">
            {siteConfig.contactEmail}
          </a>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Vendors &amp; partnerships</h2>
          <p className="text-sm">
            SuiteRidge&apos;s rankings are governed by our published methodology and are not
            available for purchase. For factual corrections about your product, or to discuss
            sponsored content (always labeled as such), use the email above.
          </p>
        </div>
      </div>
    </article>
  );
}
