import Link from "next/link";
import { categoryList } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">404</p>
      <h1 className="font-display font-semibold text-3xl mb-3">This page doesn&apos;t exist</h1>
      <p className="text-ink-muted mb-10">
        The page you&apos;re looking for may have moved, or the URL might be off. Here&apos;s where
        to go instead:
      </p>
      <div className="grid gap-4 sm:grid-cols-3 text-left">
        {categoryList.map((c) => (
          <Link
            key={c.slug}
            href={`/categories/${c.slug}`}
            className="rounded-xl border border-border/60 bg-surface p-4 shadow-[var(--shadow)] transition-all duration-200 hover:border-accent/60 hover:-translate-y-0.5"
          >
            <span className="font-display font-semibold">{c.shortName}</span>
          </Link>
        ))}
      </div>
      <Link href="/" className="inline-block mt-10 text-accent hover:underline text-sm">
        &larr; Back to homepage
      </Link>
    </div>
  );
}
