import { SourceTag } from "@/components/SourceTag";

export function Callout({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "risk" }) {
  return (
    <div
      className={`rounded-xl border p-5 text-sm text-ink-muted shadow-[var(--shadow)] ${
        tone === "risk" ? "border-low/40 bg-low/5" : "border-border/60 bg-surface-alt"
      }`}
    >
      {children}
    </div>
  );
}

export function ClaimsList({ claims }: { claims: { text: string; source: "vendor" | "editorial" | "user" }[] }) {
  return (
    <ul className="space-y-3">
      {claims.map((c) => (
        <li key={c.text} className="flex flex-col sm:flex-row sm:items-start gap-2">
          <span className="shrink-0 pt-0.5">
            <SourceTag type={c.source} />
          </span>
          <span className="text-ink-muted text-sm">{c.text}</span>
        </li>
      ))}
    </ul>
  );
}
