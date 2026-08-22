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
    slug: "mailchimp-vs-hubspot",
    category: "email-marketing",
    productSlugs: ["mailchimp", "hubspot"],
    title: "Mailchimp vs HubSpot",
    metaDescription:
      "Mailchimp vs HubSpot compared on pricing structure, automation depth, and what's actually free — with a clear verdict for each situation.",
    intro:
      "These two solve different problems that happen to overlap in email marketing. Mailchimp is a dedicated email tool with straightforward, contact-based pricing. HubSpot is an all-in-one CRM with email marketing as one module — a genuinely useful free CRM tier, but a steep price jump once real automation is needed.",
    chooseFirstIf: [
      "You want a dedicated email marketing tool, not a full CRM you'll only use a fraction of",
      "You want predictable contact-based pricing without a mandatory onboarding fee",
      "Your list is under a few thousand contacts and your automation needs are simple",
    ],
    chooseSecondIf: [
      "You want CRM, sales, and marketing tools sharing one contact database instead of syncing separate platforms",
      "You can run on HubSpot's free CRM tier long-term, or you've budgeted for Professional's $800-890/mo plus its mandatory $3,000 onboarding fee",
      "You need deep reporting, attribution, and multi-team governance that Mailchimp doesn't offer at any tier",
    ],
    verdict:
      "If the job is just sending good email campaigns, Mailchimp does it for less money and less setup. HubSpot's free CRM is a legitimate long-term option too — but its email marketing only gets genuinely powerful at Professional, which costs materially more than Mailchimp's entire range, onboarding fee included. Choose HubSpot for the CRM, not to save money on email.",
    lastVerified: "2026-08-22",
  },
  {
    slug: "kit-vs-mailchimp",
    category: "email-marketing",
    productSlugs: ["kit", "mailchimp"],
    title: "Kit vs Mailchimp",
    metaDescription:
      "Kit vs Mailchimp compared on free-plan limits, creator commerce, and who each is actually built for — with a clear verdict for each situation.",
    intro:
      "Both are approachable, beginner-friendly email tools, but they're built for different senders. Kit is built around individual creators monetizing an audience — newsletters, courses, digital products. Mailchimp is built around small businesses and light ecommerce marketing, with a much smaller free tier.",
    chooseFirstIf: [
      "You're an individual creator, newsletter writer, or course creator rather than a conventional small business",
      "You want to sell digital products or subscriptions to your list without adding a separate commerce tool",
      "You want free-tier access up to a much larger list (10,000 subscribers vs Mailchimp's 500) before paying anything",
    ],
    chooseSecondIf: [
      "You're a small business, especially one selling physical products through an ecommerce platform",
      "You want the widest range of native ecommerce integrations rather than a creator-commerce feature set",
      "You prefer Mailchimp's more familiar small-business positioning over Kit's creator-specific tools and pricing",
    ],
    verdict:
      "The deciding factor here is who's actually sending the email, not which tool is \"better.\" An individual creator monetizing an audience gets more free runway and built-in commerce tools from Kit. A small business selling through an ecommerce platform gets wider store integrations from Mailchimp. Picking based on price alone misses the point — these two are built for different jobs that both happen to start with \"send an email.\"",
    lastVerified: "2026-08-22",
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
    slug: "clickup-vs-monday",
    category: "project-management",
    productSlugs: ["clickup", "monday"],
    title: "ClickUp vs monday.com",
    metaDescription:
      "ClickUp vs monday.com compared on automation depth, pricing structure, and ease of setup — with a clear verdict for each team situation.",
    intro:
      "Both are highly customizable project management platforms that ask a team to invest real setup time in exchange for depth. The real differences are in automation limits, seat-based pricing structure, and how much AI is bundled at each tier.",
    chooseFirstIf: [
      "You want to consolidate docs, whiteboards, goals, and dashboards into a single subscription without seat-bucket rounding",
      "Your team size doesn't cleanly fit monday.com's 3/5/10/15-seat buckets",
      "You're comfortable paying for AI features (ClickUp Brain) as a separate add-on rather than bundled into the base tier",
    ],
    chooseSecondIf: [
      "You want a highly visual, color-coded board as the primary way your team sees its work",
      "Your team size fits neatly into a seat bucket (exactly 3, 5, 10, or 15 people)",
      "You want AI credits bundled into the plan itself rather than purchased as a separate add-on",
    ],
    verdict:
      "Both tools ask for real setup time before they pay off, and both gate their most useful automation behind a mid-tier plan. The deciding factor is usually pricing mechanics, not features: ClickUp bills per exact seat plus an optional AI add-on, while monday.com bills in seat buckets that round most small teams up. Count your actual headcount against monday.com's bucket sizes before assuming its lower headline per-seat price is actually cheaper.",
    lastVerified: "2026-08-22",
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
