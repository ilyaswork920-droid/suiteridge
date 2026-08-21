import type { BestListEntry } from "@/lib/types";

export const bestLists: BestListEntry[] = [
  {
    slug: "email-marketing-software-for-small-business",
    category: "email-marketing",
    isPillar: true,
    title: "Best Email Marketing Software for Small Business",
    metaDescription:
      "A situational shortlist of email marketing software for small businesses, based on list size, automation needs, and pricing transparency — not a generic top-10.",
    intro:
      "There is no single \"best\" email marketing tool — there's a best tool for your list size and how much automation you actually need. This page starts with the two situations that cover most small businesses; if yours is more specific, see the situational guides linked below.",
    situation: "General small business, list under a few thousand contacts, without heavy automation needs.",
    picks: [
      {
        productSlug: "mailchimp",
        rank: 1,
        oneLinerVerdict: "The easiest on-ramp, and the free plan is genuinely usable for a small list.",
      },
      {
        productSlug: "activecampaign",
        rank: 2,
        oneLinerVerdict: "Choose this instead if behavioral automation is a real requirement, not a nice-to-have.",
      },
    ],
    lastVerified: "2026-08-15",
  },
  {
    slug: "project-management-software-for-small-business",
    category: "project-management",
    isPillar: true,
    title: "Best Project Management Software for Small Business",
    metaDescription:
      "A situational shortlist of project management software for small teams, weighing ease of onboarding against feature depth — not a ranked top-10.",
    intro:
      "The real choice for most small teams is between a tool that works on day one (Asana) and a tool with more power per dollar that takes longer to configure (ClickUp). Which one is right depends on whether you have someone willing to own the setup.",
    situation: "General small team (5–20 people) choosing a first or replacement PM tool.",
    picks: [
      {
        productSlug: "asana",
        rank: 1,
        oneLinerVerdict: "The safer default — a genuinely usable free plan and an interface that won't fight new users.",
      },
      {
        productSlug: "clickup",
        rank: 2,
        oneLinerVerdict: "Choose this if you want maximum features per dollar and can invest setup time up front.",
      },
    ],
    lastVerified: "2026-08-15",
  },
  {
    slug: "appointment-scheduling-software-for-small-business",
    category: "appointment-scheduling",
    isPillar: true,
    title: "Best Appointment Scheduling Software for Small Business",
    metaDescription:
      "A situational shortlist of appointment scheduling software — split by whether you're booking meetings or selling service appointments.",
    intro:
      "This category splits cleanly into two jobs: booking meetings and calls (Calendly's specialty) versus selling service appointments with packages, memberships, and payments attached (Acuity's specialty). Picking based on that distinction matters more than any feature checklist.",
    situation: "General small business needing online booking, either for meetings or for service appointments.",
    picks: [
      {
        productSlug: "calendly",
        rank: 1,
        oneLinerVerdict: "The simplest, most recognized scheduling link — right for meetings and consultations.",
      },
      {
        productSlug: "acuity-scheduling",
        rank: 2,
        oneLinerVerdict: "Choose this instead if you're selling appointment packages, memberships, or need payments built in.",
      },
    ],
    lastVerified: "2026-08-15",
  },
];

export function getBestList(slug: string): BestListEntry | undefined {
  return bestLists.find((b) => b.slug === slug);
}
