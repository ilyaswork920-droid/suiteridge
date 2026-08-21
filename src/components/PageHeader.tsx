import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

export function PageHeader({
  eyebrow,
  title,
  dek,
  breadcrumbs,
  lastVerified,
}: {
  eyebrow?: string;
  title: string;
  dek?: string;
  breadcrumbs: Crumb[];
  lastVerified?: string;
}) {
  return (
    <div className="mb-10">
      <Breadcrumbs items={breadcrumbs} />
      <div className="mt-4">
        {eyebrow && (
          <div className="font-mono text-xs uppercase tracking-wider text-accent mb-3">{eyebrow}</div>
        )}
        <h1 className="font-display font-semibold text-3xl sm:text-4xl leading-tight max-w-3xl">{title}</h1>
        {dek && <p className="mt-4 text-lg text-ink-muted max-w-2xl">{dek}</p>}
        {lastVerified && (
          <p className="mt-4 text-xs font-mono text-ink-faint">Last verified {lastVerified}</p>
        )}
      </div>
    </div>
  );
}
