import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Every route-level metadata export should go through this helper.
 *
 * Next.js does NOT deep-merge a page's `openGraph`/`twitter` objects with
 * the root layout's — if a page only sets `title`/`description`, the
 * layout's Open Graph and Twitter card data (title, description, url) wins
 * unchanged, so every page would show the same social preview as the
 * homepage. This builds the full set explicitly per page instead.
 */
export function buildMetadata({
  title,
  description,
  path,
  type = "article",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const withSuffix = `${title} | ${siteConfig.name}`;
  // If the page's own title plus the " | SuiteRidge" suffix would exceed
  // the ~60-char SERP safe zone, drop the suffix rather than truncate or
  // reword the (often keyword-relevant) title text itself.
  const titleField = withSuffix.length > 60 ? { absolute: title } : title;
  return {
    title: titleField,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter,
      title,
      description,
    },
  };
}
