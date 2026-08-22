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
      "There is no single \"best\" email marketing software for every small business — there's a best tool for your list size and how much automation you actually need. This page starts with the two situations that cover most small businesses; if yours is more specific, see the situational guides linked below.",
    situation: "General small business, list under a few thousand contacts, without heavy automation needs.",
    whatToLookFor: {
      heading: "What to look for in email marketing software",
      items: [
        "How pricing scales as your contact list grows — contact-based tiers can escalate faster than the headline price suggests",
        "Whether you need simple broadcast sending or true behavior-triggered automation (cart abandonment, lead nurture)",
        "Native integrations with your ecommerce platform, if you're selling online",
        "How much setup time you're realistically willing to invest before your first campaign goes out",
        "Whether CRM-lite features (deal tracking, contact scoring) are worth bundling in, or better handled separately",
      ],
    },
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
    whoShouldLookElsewhere: [
      "You expect to scale past several thousand contacts quickly — Mailchimp's contact-based pricing accelerates fast at that range, so it's worth budgeting for your expected list size, not today's, before committing.",
      "You're a solo creator or newsletter publisher rather than a business with products or services to sell — both picks here are built more around commercial sending (ecommerce automation, lead nurture, behavioral targeting) than personal publishing. That's a distinct enough use case that it deserves its own guide rather than being force-fit here.",
      "You want real automation on day one with no learning curve — ActiveCampaign's automation builder has genuine depth, which means genuine setup time; if that's a dealbreaker and Mailchimp's automation ceiling isn't enough either, neither pick here is the right fit yet.",
    ],
    situations: [
      {
        heading: "Sending your first few campaigns",
        body: "Mailchimp's drag-and-drop builder, large template library, and genuinely usable free plan make it the lowest-friction way to get a first newsletter out — most first-time senders can launch a campaign within an hour.",
      },
      {
        heading: "You've outgrown broadcast-only sending",
        body: "Once the goal is behavior-triggered sequences — welcome series, cart abandonment, lead nurture based on what a contact actually does — ActiveCampaign's visual automation builder is the deeper tool, at the cost of real setup time.",
      },
      {
        heading: "Running email alongside ecommerce",
        body: "Mailchimp's native integrations lean toward ecommerce platforms specifically, which matters if most of your sending is order confirmations, abandoned-cart nudges, and post-purchase follow-ups layered onto a store you already run.",
      },
    ],
    quickCompare: [
      { label: "Starting price", values: ["Free (500 contacts) · from $13/mo on Essentials", "From $15/mo (Starter, billed annually)"] },
      { label: "Free plan", values: ["Yes", "No — trial only"] },
      { label: "Automation depth", values: ["Basic; deeper tiers gated to Standard+", "The deepest automation builder in this category"] },
      { label: "Learning curve", values: ["Lowest — same-day launch typical", "Steeper — real setup investment"] },
      { label: "Best for", values: ["First-time senders, simple sending needs", "Behavior-triggered automation, CRM-lite needs"] },
    ],
    howToChoose: {
      heading: "How to choose email marketing software",
      items: [
        "Do you need to launch a campaign today, or can you invest setup time for deeper automation later?",
        "Is your list under a few thousand contacts, or do you expect to scale quickly?",
        "Do you need CRM-lite features (deal tracking, pipelines) bundled in, or is email enough on its own?",
        "Are you running ecommerce and need cart-abandonment or post-purchase automation specifically?",
      ],
    },
    faqs: [
      {
        question: "Does email marketing software integrate with ecommerce platforms like Shopify?",
        answer: "Mailchimp specifically has a wide range of native integrations leaning toward ecommerce platforms, which is worth checking directly against your specific platform before assuming coverage. ActiveCampaign's ecommerce automation (cart abandonment, post-purchase flows) is a core strength once you're past its setup phase.",
      },
      {
        question: "Is email marketing software priced per contact or per feature?",
        answer: "Often both. Mailchimp's four tiers (Free, Essentials, Standard, Premium) scale by contact count, with meaningful automation features gated behind Standard and above. ActiveCampaign's pricing is also contact-based, but split across separate Email, WhatsApp, and Cross-Channel product lines — worth deciding which product line you actually need before comparing headline prices.",
      },
      {
        question: "Is Mailchimp's free plan actually usable, or is it just a trial?",
        answer: "It's a genuine free plan, not a time-limited trial — covering up to 500 contacts and 1,000 sends a month indefinitely. The tradeoff is limited automation, which is why growing lists tend to move to a paid tier.",
      },
      {
        question: "Do I need a separate CRM if I use ActiveCampaign?",
        answer: "Not necessarily — CRM and sales-pipeline features are included from the Plus tier up, so a small team can get lightweight deal tracking without adding a separate tool. Mailchimp doesn't offer this; it's an email-and-light-ecommerce platform rather than a CRM-adjacent one.",
      },
    ],
    relatedLinks: [
      {
        label: "Not sure you need automation at all? See our guide: What Is Email Marketing Automation?",
        href: "/guides/what-is-email-marketing-automation",
      },
    ],
    showBottomCta: true,
    lastVerified: "2026-08-22",
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
    relatedLinks: [
      {
        label: "Already know you're selling appointments, not just booking meetings? See our online booking software guide for service businesses",
        href: "/best/online-booking-software-for-service-businesses",
      },
    ],
    lastVerified: "2026-08-15",
  },
  {
    slug: "online-booking-software-for-service-businesses",
    category: "appointment-scheduling",
    isPillar: false,
    title: "Best Online Booking Software for Service Businesses",
    metaDescription:
      "Online booking software for service businesses needs to do more than share a calendar — it needs to handle payments, packages, and client self-service. Here's how to choose, and our top pick.",
    intro:
      "If you're just trying to stop the back-and-forth over meeting times, you want a scheduling link, not booking software — see our appointment scheduling guide instead. This page is for a narrower, more specific job: letting clients book and pay for an appointment, class, or package without you handling it manually.",
    situation: "Service businesses (salons, studios, clinics, coaches) selling appointments as a product, not just booking meetings.",
    whatToLookFor: {
      heading: "What online booking software needs to do for a service business",
      items: [
        "Collect payment at the time of booking, not as a separate manual step afterward",
        "Support packages, class passes, or memberships — not just single one-off appointments",
        "Send automated reminders (SMS and/or email) to cut down on no-shows",
        "Sync with your existing calendar rather than replacing it",
        "Offer compliance features like HIPAA support if you're in a regulated field",
      ],
    },
    picks: [
      {
        productSlug: "acuity-scheduling",
        rank: 1,
        oneLinerVerdict: "Built specifically for this job — packages, memberships, and payment collection are core features, not add-ons.",
      },
    ],
    whoShouldLookElsewhere: [
      "You want to try before you commit — Acuity has no free plan, only a 7-day trial across its paid tiers. If you need longer than that to test it properly, factor that in.",
      "You're only taking a handful of appointments a week and aren't selling packages or collecting payment through the booking flow yet — the features that make Acuity worth it (SMS reminders, packages, payment collection) start at the Standard tier, so a free scheduling link may cover you until you actually need them.",
    ],
    situations: [
      {
        heading: "A solo practitioner with one calendar",
        body: "Acuity's Starter tier is built around a single bookable calendar — the right fit if it's just you taking appointments, without needing SMS reminders or package sales yet.",
      },
      {
        heading: "Selling packages, class passes, or memberships",
        body: "The Standard tier is where Acuity's core service-business features unlock: SMS reminders, packages, payment plans, and memberships, plus payment collection via Stripe, Square, or PayPal.",
      },
      {
        heading: "A HIPAA-regulated healthcare or wellness practice",
        body: "HIPAA-appropriate booking is reserved for Acuity's Premium tier, alongside additional security controls — worth confirming this is the specific compliance level your practice needs before assuming a lower tier covers it.",
      },
    ],
    howToChoose: {
      heading: "How to choose online booking software",
      items: [
        "Do you need to collect payment at the moment of booking, or is invoicing separately fine?",
        "Do you sell packages, class passes, or memberships, or only single appointments?",
        "Is it one calendar, or do you need multiple staff members or locations?",
        "Do you need HIPAA-appropriate booking for a regulated practice?",
        "How much do no-shows cost you — is automated SMS reminders worth paying for?",
      ],
    },
    faqs: [
      {
        question: "Does Acuity Scheduling cost less if I pay annually?",
        answer: "Yes — every tier has a lower annual-billed price than its monthly equivalent, roughly a 20% saving across the board. The Starter tier, for example, is $16/month billed annually versus $20/month billed monthly, and the same ratio holds at Standard and Premium.",
      },
      {
        question: "Which payment processors does online booking software typically integrate with?",
        answer: "Acuity Scheduling collects payment through Stripe, Square, or PayPal, built into the booking flow from its Standard tier up — clients pay when they book rather than being invoiced separately afterward.",
      },
      {
        question: "Do I need a HIPAA-compliant booking tool for my practice?",
        answer: "Only if you're in a regulated healthcare or wellness field handling protected client information through the booking flow. Acuity reserves HIPAA-appropriate features for its Premium tier — it's not included by default on lower tiers.",
      },
      {
        question: "Why doesn't Acuity Scheduling offer a free plan?",
        answer: "Acuity offers a 7-day trial across its paid tiers rather than an ongoing free plan. Tools built around payment collection and package sales tend to skip free tiers more often than pure scheduling links do, since the core value (getting paid) only applies once you're a paying business anyway.",
      },
    ],
    relatedLinks: [
      {
        label: "Just need to book meetings, not sell appointments? See our appointment scheduling software guide",
        href: "/best/appointment-scheduling-software-for-small-business",
      },
    ],
    lastVerified: "2026-08-22",
  },
];

export function getBestList(slug: string): BestListEntry | undefined {
  return bestLists.find((b) => b.slug === slug);
}
