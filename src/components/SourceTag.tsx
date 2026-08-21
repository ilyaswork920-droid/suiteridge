import type { SourceType } from "@/lib/types";

const labels: Record<SourceType, string> = {
  vendor: "Vendor-stated",
  editorial: "Editorial analysis",
  user: "User-reported",
};

const styles: Record<SourceType, string> = {
  vendor: "bg-accent-soft text-accent",
  editorial: "bg-surface-alt text-ink-muted border border-border",
  user: "bg-surface-alt text-ink-muted border border-border",
};

export function SourceTag({ type }: { type: SourceType }) {
  return (
    <span
      className={`font-mono text-[0.65rem] uppercase tracking-wide px-2 py-0.5 rounded-full whitespace-nowrap ${styles[type]}`}
    >
      {labels[type]}
    </span>
  );
}
