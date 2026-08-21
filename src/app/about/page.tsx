import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About SuiteRidge",
  description: "Why SuiteRidge exists, who it's for, and what it refuses to be.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 sm:px-6 py-10">
      <PageHeader
        title="About SuiteRidge"
        dek="Software research for people who run a business, not people who evaluate software for a living."
        breadcrumbs={[{ name: "About", href: "/about" }]}
      />

      <div className="flex flex-col gap-6 text-ink-muted leading-relaxed">
        <p>
          SuiteRidge exists because most software review content is written for one of two
          audiences: SEO, or the vendor whose affiliate program pays the most. We built this for a
          third audience — a small business owner who has to make a real decision, wants a
          straight answer, and doesn&apos;t have a procurement team to lean on.
        </p>
        <p>
          That means every review states plainly who a product is for and who should avoid it,
          every price is dated and re-checked on a schedule, and every ranked list is ordered by
          our published methodology — not by which vendor pays the highest commission. If those
          two things ever point in different directions, the methodology wins. See exactly how
          that works on our{" "}
          <Link href="/methodology" className="text-accent hover:underline">
            methodology page
          </Link>
          .
        </p>
        <p>
          We don&apos;t claim to have used every product hands-on for months at a time — that
          would be dishonest at the pace software changes. Instead, we source facts from vendor
          documentation and pricing pages, apply our own editorial analysis on top, and cite
          aggregated user feedback from disclosed platforms where it&apos;s relevant. Every claim
          on the site is labeled with which of those three buckets it came from.
        </p>
        <p>
          SuiteRidge currently covers three categories — email marketing, project management, and
          appointment scheduling software — for small businesses in the United States, with the
          UK, Canada, and Australia next. We&apos;d rather cover three categories well than twelve
          categories thinly.
        </p>
      </div>
    </article>
  );
}
