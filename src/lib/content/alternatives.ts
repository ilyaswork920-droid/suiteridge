import type { AlternativesEntry } from "@/lib/types";

export const alternativesEntries: AlternativesEntry[] = [
  {
    slug: "mailchimp",
    category: "email-marketing",
    ofProductSlug: "mailchimp",
    title: "Mailchimp Alternatives",
    metaDescription:
      "The best Mailchimp alternatives for small businesses that have outgrown its pricing or need deeper automation — with clear reasons to actually switch.",
    intro:
      "Most Mailchimp alternative searches come from one of two places: the bill got bigger than expected as the list grew, or the automation ceiling got hit. Worth switching for one of those reasons — not simply because a competitor's homepage looks nicer.",
    reasonsToSwitch: [
      "Your contact count has grown enough that Mailchimp's tier price jumped noticeably at renewal",
      "You need multi-branch, behavior-triggered automation that Mailchimp's Standard tier doesn't cover",
      "You want CRM-lite features (deal tracking, lead scoring) without adding a separate tool",
    ],
    alternativeSlugs: ["activecampaign"],
    lastVerified: "2026-08-15",
  },
  {
    slug: "monday",
    category: "project-management",
    ofProductSlug: "monday",
    title: "monday.com Alternatives",
    metaDescription:
      "The best monday.com alternatives for small teams that have hit its seat-bucket pricing or want a less configuration-heavy tool.",
    intro:
      "Most monday.com alternative searches come down to one of two frustrations: the seat-bucket pricing rounded the bill up more than expected, or the board setup took longer to configure than the team wanted to invest. Worth switching for one of those reasons, not just because a competitor's homepage looks different.",
    reasonsToSwitch: [
      "Your team size doesn't cleanly fit monday.com's seat buckets (3, 5, 10, 15...), so you're paying for unused seats",
      "You want a tool that's productive out of the box, without configuring boards, automations, and views first",
      "You want per-exact-seat billing instead of bucket-based pricing",
    ],
    alternativeSlugs: ["asana", "clickup"],
    lastVerified: "2026-08-22",
  },
  {
    slug: "calendly",
    category: "appointment-scheduling",
    ofProductSlug: "calendly",
    title: "Calendly Alternatives",
    metaDescription:
      "The best Calendly alternatives for service businesses that need packages, memberships, or payment collection built into booking.",
    intro:
      "Calendly is excellent at what it does, so most people searching for an alternative aren't unhappy with it — they've realized they need a different category of tool: one built for selling appointments, not just booking them.",
    reasonsToSwitch: [
      "You need to sell packages, class passes, or memberships alongside bookings",
      "You want payment collection built into the scheduling flow rather than handled separately",
      "You need HIPAA-appropriate booking for a clinical or healthcare practice",
    ],
    alternativeSlugs: ["acuity-scheduling"],
    lastVerified: "2026-08-15",
  },
];

export function getAlternatives(slug: string): AlternativesEntry | undefined {
  return alternativesEntries.find((a) => a.slug === slug);
}
