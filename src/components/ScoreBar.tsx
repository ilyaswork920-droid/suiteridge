function barColor(score: number) {
  if (score >= 7) return "bg-good";
  if (score >= 5) return "bg-warn";
  return "bg-low";
}

export function ScoreBar({ label, score }: { label: string; score: number }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-40 shrink-0 text-ink-muted">{label}</span>
      <div className="flex-1 h-1.5 rounded-full bg-surface-alt overflow-hidden">
        <div
          className={`h-full rounded-full ${barColor(score)}`}
          style={{ width: `${score * 10}%` }}
        />
      </div>
      <span className="font-mono text-xs w-6 text-right tabular-nums">{score}</span>
    </div>
  );
}

export function MethodologyScores({
  scores,
}: {
  scores: { featureCoverage: number; pricingTransparency: number; easeOfAdoption: number; smbFit: number };
}) {
  return (
    <div className="flex flex-col gap-2.5 rounded-xl border border-border/60 bg-surface p-5 shadow-[var(--shadow)]">
      <ScoreBar label="Feature coverage" score={scores.featureCoverage} />
      <ScoreBar label="Pricing transparency" score={scores.pricingTransparency} />
      <ScoreBar label="Ease of adoption" score={scores.easeOfAdoption} />
      <ScoreBar label="SMB fit" score={scores.smbFit} />
    </div>
  );
}
