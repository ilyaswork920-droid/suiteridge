import type { ComparisonEntry } from "@/lib/types";

export const comparisons: ComparisonEntry[] = [
  {
    slug: "mailchimp-vs-activecampaign",
    category: "email-marketing",
    productSlugs: ["mailchimp", "activecampaign"],
    title: "Mailchimp vs ActiveCampaign",
    metaDescription:
      "Mailchimp vs ActiveCampaign compared on automation depth, pricing structure, and ease of setup — with a clear verdict for each situation.",
    intro:
      "Both tools send email. The real difference is what happens after someone subscribes: Mailchimp is built for straightforward campaigns with automation as an add-on; ActiveCampaign is built around automation first, with campaigns as one piece of a larger workflow.",
    chooseFirstIf: [
      "You want to send your first campaign today, not after a setup phase",
      "Your list is small and your automation needs are simple (a welcome sequence, maybe a re-engagement flow)",
      "You want a genuinely usable free plan while you're getting started",
    ],
    chooseSecondIf: [
      "You need behavior-triggered, multi-branch automation (cart abandonment, lead scoring, lifecycle marketing)",
      "You want lightweight CRM features bundled in rather than a separate tool",
      "You're willing to spend real setup time in exchange for more precise targeting",
    ],
    verdict:
      "Pick Mailchimp if the job is \"send good-looking emails without much fuss.\" Pick ActiveCampaign if the job is \"build a marketing engine that reacts to what subscribers actually do.\" Most small businesses start with the first job and only need the second once they've outgrown simple broadcasts.",
    lastVerified: "2026-08-15",
  },
  {
    slug: "asana-vs-clickup",
    category: "project-management",
    productSlugs: ["asana", "clickup"],
    title: "Asana vs ClickUp",
    metaDescription:
      "Asana vs ClickUp compared on ease of onboarding, feature depth, and pricing — with a clear verdict for each team situation.",
    intro:
      "Asana and ClickUp solve the same problem with opposite philosophies. Asana ships fewer features but almost none of them need configuration. ClickUp ships more features than most teams will use, and expects you to configure the ones you want.",
    chooseFirstIf: [
      "You want a team to be productive within a day of rollout, not a week",
      "Your free-plan needs fit under 15 collaborators",
      "You value a clean interface over maximum customization",
    ],
    chooseSecondIf: [
      "You want to consolidate docs, dashboards, and task tracking into one subscription",
      "You have someone willing to own the setup and configuration",
      "Budget per seat matters more than immediate ease of use",
    ],
    verdict:
      "Asana is the lower-risk choice for a team adopting its first real PM tool. ClickUp rewards a team that already knows what it wants and has the patience to build it — the payoff is real, but it isn't immediate.",
    lastVerified: "2026-08-15",
  },
  {
    slug: "calendly-vs-acuity-scheduling",
    category: "appointment-scheduling",
    productSlugs: ["calendly", "acuity-scheduling"],
    title: "Calendly vs Acuity Scheduling",
    metaDescription:
      "Calendly vs Acuity Scheduling compared on setup speed, payments, and pricing — split by whether you're booking meetings or selling appointments.",
    intro:
      "These two tools are more complementary than competitive — they're built for different jobs. Calendly is a scheduling link for meetings. Acuity is a booking system for service businesses that sell time as a product, packages and payments included.",
    chooseFirstIf: [
      "You're scheduling calls, consultations, or meetings, not selling service packages",
      "You want the fastest possible setup with the widest client recognition",
      "You need round-robin distribution for a small sales or recruiting team",
    ],
    chooseSecondIf: [
      "You're a service business selling packages, class passes, or memberships",
      "You want payment collection built directly into the booking flow",
      "You need HIPAA-appropriate booking for a clinical practice (Premium tier)",
    ],
    verdict:
      "This isn't really a head-to-head — it's a routing question. If the appointment itself is the product you're selling, Acuity's package and payment features are worth the extra setup. If you're just trying to stop the \"what time works for you?\" email chain, Calendly is faster and cheaper.",
    lastVerified: "2026-08-15",
  },
];

export function getComparison(slug: string): ComparisonEntry | undefined {
  return comparisons.find((c) => c.slug === slug);
}
