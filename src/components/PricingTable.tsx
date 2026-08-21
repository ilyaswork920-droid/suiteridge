import type { PricingTier } from "@/lib/types";

export function PricingTable({ tiers, lastVerified }: { tiers: PricingTier[]; lastVerified: string }) {
  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm min-w-[560px]">
          <thead>
            <tr className="bg-surface-alt text-left">
              <th className="font-mono text-xs uppercase tracking-wide text-ink-faint px-4 py-3">Plan</th>
              <th className="font-mono text-xs uppercase tracking-wide text-ink-faint px-4 py-3">Price</th>
              <th className="font-mono text-xs uppercase tracking-wide text-ink-faint px-4 py-3">Best for</th>
              <th className="font-mono text-xs uppercase tracking-wide text-ink-faint px-4 py-3">Key features</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((t) => (
              <tr key={t.name} className="border-t border-border align-top">
                <td className="px-4 py-3 font-semibold">{t.name}</td>
                <td className="px-4 py-3 font-mono tabular-nums">
                  {t.price}
                  {t.billingNote && <div className="text-xs text-ink-faint font-sans mt-1">{t.billingNote}</div>}
                </td>
                <td className="px-4 py-3 text-ink-muted">{t.bestFor}</td>
                <td className="px-4 py-3 text-ink-muted">
                  <ul className="space-y-1">
                    {t.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-ink-faint">
        Pricing sourced from the vendor&apos;s public pricing page, last verified {lastVerified}. Confirm current pricing on the vendor&apos;s site before purchasing.
      </p>
    </div>
  );
}
