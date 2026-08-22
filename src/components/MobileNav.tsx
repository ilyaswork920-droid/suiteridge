"use client";

import { useState } from "react";
import Link from "next/link";
import { categoryList } from "@/lib/site-config";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-full border border-border w-10 h-10 text-ink transition-colors hover:border-accent/70 hover:bg-surface-alt"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="absolute left-0 right-0 top-16 border-b border-border bg-surface px-4 py-4 shadow-[var(--shadow)]"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {categoryList.map((c) => (
              <Link
                key={c.slug}
                href={`/categories/${c.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-ink hover:bg-surface-alt"
              >
                {c.shortName}
              </Link>
            ))}
            <Link
              href="/methodology"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-ink hover:bg-surface-alt"
            >
              Methodology
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-ink hover:bg-surface-alt"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
