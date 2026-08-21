export function VerdictBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border-l-4 border-accent bg-accent-soft/40 p-6">
      <div className="font-mono text-xs uppercase tracking-wider text-accent mb-2">Verdict</div>
      <p className="text-ink leading-relaxed">{children}</p>
    </div>
  );
}
