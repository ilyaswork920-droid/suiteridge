import Link from "next/link";

export function LinkCard({
  href,
  eyebrow,
  title,
  description,
}: {
  href: string;
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-2 rounded-xl border border-border/60 bg-surface p-5 shadow-[var(--shadow)] transition-all duration-200 hover:border-accent/60 hover:-translate-y-0.5"
    >
      {eyebrow && (
        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-accent">{eyebrow}</span>
      )}
      <h3 className="font-display font-semibold group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-sm text-ink-muted">{description}</p>
    </Link>
  );
}
