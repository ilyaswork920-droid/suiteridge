import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Callout } from "@/components/Callout";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How SuiteRidge collects, uses, and protects your data.",
  path: "/privacy-policy",
  type: "website",
});

const lastUpdated = "August 15, 2026";

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 sm:px-6 py-10">
      <PageHeader
        title="Privacy Policy"
        dek={`Last updated ${lastUpdated}.`}
        breadcrumbs={[{ name: "Privacy Policy", href: "/privacy-policy" }]}
      />

      <Callout>
        This page is a solid working draft, not a substitute for legal counsel. Before launch,
        have it reviewed for compliance with CCPA/CPRA (US), UK/EU GDPR, Canada&apos;s PIPEDA, and
        Australia&apos;s Privacy Act — SuiteRidge&apos;s target markets — since data-handling
        obligations differ across all four.
      </Callout>

      <div className="flex flex-col gap-8 mt-8 text-ink-muted leading-relaxed">
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Information we collect</h2>
          <p>
            We collect information you provide directly, such as your email address when you
            subscribe to our newsletter or contact us, and information collected automatically,
            such as pages visited, referring URLs, device and browser type, and approximate
            location, via analytics tools and cookies.
          </p>
        </section>
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">How we use it</h2>
          <p>
            We use this information to operate and improve the site, send newsletter updates to
            subscribers who opt in, understand which content is useful, and measure the
            performance of affiliate links. We do not sell personal information to third parties.
          </p>
        </section>
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Cookies and affiliate tracking</h2>
          <p>
            We use cookies for basic analytics and to attribute affiliate referrals to the
            software companies we review, as described in our{" "}
            <a href="/affiliate-disclosure" className="text-accent hover:underline">
              affiliate disclosure
            </a>
            . You can disable cookies in your browser settings; doing so may affect some site
            functionality.
          </p>
        </section>
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Third-party services</h2>
          <p>
            We use third-party services such as web analytics providers and our newsletter
            platform to operate the site. These providers process data under their own privacy
            policies and only for the purposes we&apos;ve authorized.
          </p>
        </section>
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Your rights</h2>
          <p>
            Depending on where you live, you may have the right to access, correct, delete, or
            export your personal information, or to opt out of certain data uses. To exercise any
            of these rights, contact us at{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent hover:underline">
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Children&apos;s privacy</h2>
          <p>
            SuiteRidge is intended for business audiences and is not directed at children under
            13. We do not knowingly collect personal information from children.
          </p>
        </section>
        <section>
          <h2 className="font-display font-semibold text-lg mb-2 text-ink">Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Material changes will be reflected by
            updating the &quot;last updated&quot; date above.
          </p>
        </section>
      </div>
    </article>
  );
}
