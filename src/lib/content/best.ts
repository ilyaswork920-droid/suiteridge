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
      "Whether you're searching for appointment scheduling software or online booking software, this category splits cleanly into two jobs: booking meetings and calls (Calendly's specialty) versus selling service appointments with packages, memberships, and payments attached (Acuity's specialty). Picking based on that distinction matters more than any feature checklist.",
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
    situations: [
      {
        heading: "Booking meetings, calls, or consultations",
        body: "If the job is stopping the \"what time works for you?\" email chain — sales calls, consultations, interviews — Calendly is built exactly for that. Its free plan covers a single event type, which is enough for a lot of solo use cases before you'd need to upgrade.",
      },
      {
        heading: "Selling service appointments as a product",
        body: "If clients are booking (and paying for) a haircut, a class, or a coaching package rather than just a meeting, Acuity's packages, memberships, and built-in Stripe/Square/PayPal payment collection are worth the extra setup time over a general scheduling link.",
      },
      {
        heading: "Running a small sales or recruiting team",
        body: "Calendly's Teams tier adds round-robin distribution and lead-routing forms, which makes it viable for splitting inbound meeting requests across a small team — not just individual scheduling.",
      },
    ],
    quickCompare: [
      { label: "Starting price", values: ["Free (1 event type) · $10/seat/mo on Standard", "From $16/mo (Starter) — no free plan"] },
      { label: "Free plan", values: ["Yes", "No (7-day trial)"] },
      { label: "Payments / packages built in", values: ["No — needs a separate tool", "Yes, from the Standard tier"] },
      { label: "SMS reminders", values: ["Not a core feature", "Yes, from the Standard tier"] },
      { label: "Best for", values: ["Meetings, calls, consultations", "Service businesses selling appointments"] },
    ],
    faqs: [
      {
        question: "What's the difference between appointment scheduling software and online booking software?",
        answer: "In practice they overlap, but the emphasis differs: \"scheduling software\" usually means coordinating meetings and calendars (Calendly's core job), while \"online booking software\" usually means a client booking and paying for a service appointment (Acuity's core job). The right pick depends on which one you're actually doing.",
      },
      {
        question: "Is there a free appointment scheduling software for small business?",
        answer: "Calendly has a genuine free plan, limited to one event type — enough for a lot of solo use cases. Acuity Scheduling doesn't offer a free plan, only a 7-day trial across its paid tiers.",
      },
      {
        question: "Do I need a separate payment processor for online scheduling?",
        answer: "Not with Acuity — it has payment collection built in via Stripe, Square, or PayPal starting at its Standard tier. Calendly doesn't include payment or package features, so you'd need to add a separate tool if you're selling paid appointments through it.",
      },
      {
        question: "Does the price go up as a team grows?",
        answer: "Differently for each. Calendly's Teams plan is priced per seat, though volume pricing kicks in once a team passes 30 users. Acuity Scheduling's tiers are structured around features rather than per-seat pricing, but its entry Starter tier is built around a single bookable calendar — worth checking current plan details before assuming multi-staff pricing on either.",
      },
    ],
    lastVerified: "2026-08-15",
  },
];

export function getBestList(slug: string): BestListEntry | undefined {
  return bestLists.find((b) => b.slug === slug);
}
