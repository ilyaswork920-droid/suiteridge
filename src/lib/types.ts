import type { CategorySlug } from "@/lib/site-config";

/** A single, source-tagged claim used throughout review content. */
export type SourceType = "vendor" | "editorial" | "user";

export interface Claim {
  text: string;
  source: SourceType;
}

export interface PricingTier {
  name: string;
  price: string;
  billingNote?: string;
  bestFor: string;
  features: string[];
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  tagline: string;
  website: string;
  affiliateUrl?: string;
  pricingLastVerified: string; // ISO date
  pricing: PricingTier[];
  hasFreePlan: boolean;
  startingPrice: string;
  whatItDoes: string;
  whoItsFor: string[];
  whoShouldAvoid: string[];
  keyFeatures: Claim[];
  easeOfUse: string;
  pros: string[];
  cons: string[];
  bestUseCases: string[];
  methodologyScores: {
    featureCoverage: number;
    pricingTransparency: number;
    easeOfAdoption: number;
    smbFit: number;
  };
  verdict: string;
}

export interface ComparisonEntry {
  slug: string;
  category: CategorySlug;
  productSlugs: [string, string];
  title: string;
  metaDescription: string;
  intro: string;
  chooseFirstIf: string[];
  chooseSecondIf: string[];
  verdict: string;
  lastVerified: string;
}

export interface AlternativesEntry {
  slug: string;
  category: CategorySlug;
  ofProductSlug: string;
  title: string;
  metaDescription: string;
  intro: string;
  reasonsToSwitch: string[];
  alternativeSlugs: string[];
  lastVerified: string;
}

export interface BestListEntry {
  slug: string;
  category: CategorySlug;
  isPillar: boolean;
  title: string;
  metaDescription: string;
  intro: string;
  situation: string;
  picks: {
    productSlug: string;
    rank: number;
    oneLinerVerdict: string;
  }[];
  /** Optional situational breakdown — "which pick is right for you" depth beyond the one-liners. */
  situations?: { heading: string; body: string }[];
  /** Optional feature checklist rendered before the picks — "what this category actually needs to do." */
  whatToLookFor?: { heading: string; items: string[] };
  /** Optional honest caveats — who the top pick(s) aren't a good fit for, sourced from already-verified product facts. */
  whoShouldLookElsewhere?: string[];
  /** Optional decision framework rendered after pricing/situations, before FAQ. */
  howToChoose?: { heading: string; items: string[] };
  /**
   * Optional at-a-glance comparison table. `values` are aligned by index to
   * `picks` (in rank order) — sourced from facts already verified on the
   * underlying product entries, not new claims.
   */
  quickCompare?: { label: string; values: string[] }[];
  faqs?: { question: string; answer: string }[];
  /** Genuine cross-links to a sibling best-list page covering an adjacent, distinct intent. */
  relatedLinks?: { label: string; href: string }[];
  lastVerified: string;
}

export interface GuideEntry {
  slug: string;
  category: CategorySlug;
  title: string;
  metaDescription: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  relatedBestSlug: string;
  lastVerified: string;
}

export interface ReviewEntry {
  slug: string;
  productSlug: string;
}

export interface ArticleBrief {
  title: string;
  primaryKeyword: string;
  category: CategorySlug;
  type: "pillar" | "best-for" | "review" | "compare" | "alternatives" | "guide";
  priority: "P1" | "P2" | "P3";
  status: "published" | "briefed";
}
