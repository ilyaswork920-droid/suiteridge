import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Callout } from "@/components/Callout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing use of the SuiteRidge website.",
  alternates: { canonical: "/terms" },
};

const lastUpdated = "August 15, 2026";

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 sm:px-6 py-10">
      <PageHeader
        title="Terms of Use"
        dek={`Last updated ${lastUpdated}.`}
        breadcrumbs={[{ name: "Terms", href: "/terms" }]}
      />

      <Callout>
        This page is a solid working draft, not a substitute for legal counsel — have it reviewed
        before launch, particularly the liability and jurisdiction sections given SuiteRidge&apos;s
        multi-country audience.
      </Callout>

      <div className="flex flex-col gap-8 mt-8 text-ink-muted leading-relaxed">
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Acceptance of terms</h2>
          <p>
            By using {siteConfig.name} ({siteConfig.url}), you agree to these terms. If you
            don&apos;t agree, please don&apos;t use the site.
          </p>
        </section>
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Editorial content, not professional advice</h2>
          <p>
            Content on this site is independent editorial research intended to help general
            software-buying decisions. It is not personalized business, legal, financial, or
            compliance advice, and it does not guarantee that any product will meet your specific
            requirements. Verify pricing, features, and compliance details (HIPAA, data residency,
            etc.) directly with the vendor before purchasing.
          </p>
        </section>
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Accuracy and updates</h2>
          <p>
            We date and periodically re-verify pricing and feature information, but software
            companies change pricing and features without notice. We aren&apos;t liable for
            decisions made based on information that has changed since our last verification date,
            which is shown on every review.
          </p>
        </section>
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Affiliate relationships</h2>
          <p>
            Some links on this site are affiliate links, described in full in our{" "}
            <a href="/affiliate-disclosure" className="text-accent hover:underline">
              affiliate disclosure
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Intellectual property</h2>
          <p>
            All original written content on this site is owned by {siteConfig.legalName} unless
            otherwise noted. Product names, logos, and trademarks referenced belong to their
            respective owners and are used for identification and comparison purposes only.
          </p>
        </section>
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Limitation of liability</h2>
          <p>
            The site is provided &quot;as is&quot; without warranties of any kind. To the fullest
            extent permitted by law, {siteConfig.legalName} is not liable for any indirect,
            incidental, or consequential damages arising from use of this site or reliance on its
            content.
          </p>
        </section>
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent hover:underline">
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
