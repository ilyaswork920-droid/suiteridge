import type { Product } from "@/lib/types";

/**
 * Outbound recommendation link. Uses product.affiliateUrl once a real
 * tracking link exists for that program; falls back to the vendor's own
 * site otherwise so the page is never blocked on affiliate approval.
 * rel="sponsored" reflects the page's disclosed commercial intent either way.
 */
export function AffiliateCTA({ product, label }: { product: Product; label?: string }) {
  const href = product.affiliateUrl ?? product.website;
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-ink px-5 py-2.5 text-sm font-semibold shadow-[var(--shadow)] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
    >
      {label ?? `Visit ${product.name}`}
      <span aria-hidden="true">&rarr;</span>
    </a>
  );
}
