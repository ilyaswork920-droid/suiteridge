import type { MetadataRoute } from "next";
import { siteConfig, categoryList } from "@/lib/site-config";
import { products } from "@/lib/content/products";
import { comparisons } from "@/lib/content/comparisons";
import { alternativesEntries } from "@/lib/content/alternatives";
import { bestLists } from "@/lib/content/best";
import { guides } from "@/lib/content/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/methodology`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/affiliate-disclosure`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categoryList.map((c) => ({
    url: `${siteConfig.url}/categories/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const reviewPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${siteConfig.url}/reviews/${p.slug}`,
    lastModified: p.pricingLastVerified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const bestPages: MetadataRoute.Sitemap = bestLists.map((b) => ({
    url: `${siteConfig.url}/best/${b.slug}`,
    lastModified: b.lastVerified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const comparePages: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${siteConfig.url}/compare/${c.slug}`,
    lastModified: c.lastVerified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const alternativesPages: MetadataRoute.Sitemap = alternativesEntries.map((a) => ({
    url: `${siteConfig.url}/alternatives/${a.slug}`,
    lastModified: a.lastVerified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${siteConfig.url}/guides/${g.slug}`,
    lastModified: g.lastVerified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...bestPages,
    ...reviewPages,
    ...comparePages,
    ...alternativesPages,
    ...guidePages,
  ];
}
