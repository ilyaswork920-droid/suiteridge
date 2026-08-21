export function Newsletter() {
  return (
    <div className="rounded-2xl border border-border bg-surface-alt p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
      <div className="flex-1">
        <h2 className="font-display text-xl font-semibold mb-1.5">Stay ahead of pricing changes</h2>
        <p className="text-sm text-ink-muted">New reviews and pricing updates, about once a month. No spam.</p>
      </div>
      <form className="flex w-full sm:w-auto gap-2" aria-label="Newsletter signup">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@business.com"
          className="flex-1 sm:w-64 rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent"
          // Chromium injects a caret-color style on email inputs post-hydration
          // (autofill heuristics) that never exists in the SSR markup — harmless,
          // but suppressed here so it doesn't log a false-positive mismatch.
          suppressHydrationWarning
        />
        <button
          type="submit"
          className="rounded-full bg-accent text-accent-ink px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
