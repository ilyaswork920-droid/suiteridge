import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export interface Crumb {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(full.map((c) => ({ name: c.name, url: `${siteConfig.url}${c.href}` })))}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-ink-faint">
        <ol className="flex flex-wrap items-center gap-1.5">
          {full.map((c, i) => (
            <li key={c.href} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === full.length - 1 ? (
                <span className="text-ink-muted">{c.name}</span>
              ) : (
                <Link href={c.href} className="hover:text-accent transition-colors">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
