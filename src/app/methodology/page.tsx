import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SourceTag } from "@/components/SourceTag";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Methodology",
  description: "How SuiteRidge evaluates software: the six criteria behind every review and ranking.",
  path: "/methodology",
  type: "website",
});

const criteria = [
  {
    title: "Core feature coverage",
    body: "Verified against the vendor's own documentation and public feature-comparison pages — not assumed from marketing copy.",
  },
  {
    title: "Pricing transparency and value",
    body: "How clearly a vendor discloses pricing, and how costs actually scale with team size or contact/usage volume — including costs that are easy to miss on the pricing page.",
  },
  {
    title: "Ease of adoption",
    body: "Onboarding friction, documentation quality, and setup complexity, drawn from vendor onboarding materials and aggregated user feedback.",
  },
  {
    title: "Fit-for-purpose",
    body: "Whether a tool is genuinely built for small businesses, or is an enterprise product with small-business pricing bolted on top.",
  },
  {
    title: "Aggregated user sentiment",
    body: "Synthesized from disclosed, citable third-party review platforms — never fabricated, and never presented as SuiteRidge's own hands-on testing.",
  },
  {
    title: "Update cadence",
    body: "Every review is dated and flagged for re-verification on a fixed schedule: pricing quarterly, features semi-annually.",
  },
];

export default function MethodologyPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 sm:px-6 py-10">
      <PageHeader
        title="How we evaluate software"
        dek="Six fixed criteria, applied the same way to every product in a category, so the comparison is apples-to-apples."
        breadcrumbs={[{ name: "Methodology", href: "/methodology" }]}
      />

      <div className="flex flex-col gap-8 mb-12">
        {criteria.map((c, i) => (
          <div key={c.title} className="flex gap-4">
            <span className="font-mono text-accent text-sm pt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="font-display font-semibold text-lg mb-1.5">{c.title}</h2>
              <p className="text-ink-muted text-sm leading-relaxed">{c.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border/60 bg-surface-alt p-6 mb-8 shadow-[var(--shadow)]">
        <h2 className="font-display font-semibold text-lg mb-3">How claims are labeled</h2>
        <p className="text-sm text-ink-muted mb-4">
          Every factual claim in a review carries one of three labels, so you always know where it
          came from:
        </p>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-3">
            <SourceTag type="vendor" />
            <span className="text-ink-muted">Sourced directly from the vendor&apos;s pricing page, documentation, or public statements.</span>
          </div>
          <div className="flex items-center gap-3">
            <SourceTag type="editorial" />
            <span className="text-ink-muted">SuiteRidge&apos;s own interpretation — clearly framed as analysis, not vendor fact.</span>
          </div>
          <div className="flex items-center gap-3">
            <SourceTag type="user" />
            <span className="text-ink-muted">Patterns aggregated from public, disclosed review platforms, cited with a link.</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-low/40 bg-low/5 p-6">
        <h2 className="font-display font-semibold text-lg mb-2">What we don&apos;t do</h2>
        <p className="text-sm text-ink-muted">
          No review claims hands-on testing, invented usage timelines (&ldquo;we used this for
          three weeks&rdquo;), or fabricated screenshots of a live account. If a claim can&apos;t be sourced to
          vendor documentation or a cited, disclosed third-party review, it doesn&apos;t get
          published as fact. Rankings are never influenced by affiliate commission rates — see our{" "}
          <a href="/affiliate-disclosure" className="text-accent hover:underline">
            affiliate disclosure
          </a>
          .
        </p>
      </div>
    </article>
  );
}
