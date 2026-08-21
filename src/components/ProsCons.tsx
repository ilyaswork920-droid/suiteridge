export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-border bg-surface p-5">
        <h3 className="font-display font-semibold text-good mb-3">Pros</h3>
        <ul className="space-y-2 text-sm text-ink-muted">
          {pros.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="text-good" aria-hidden="true">+</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-border bg-surface p-5">
        <h3 className="font-display font-semibold text-low mb-3">Cons</h3>
        <ul className="space-y-2 text-sm text-ink-muted">
          {cons.map((c) => (
            <li key={c} className="flex gap-2">
              <span className="text-low" aria-hidden="true">&minus;</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
