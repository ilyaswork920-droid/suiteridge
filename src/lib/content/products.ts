import type { Product } from "@/lib/types";

/**
 * Pricing and feature claims tagged "vendor" are sourced from each company's
 * public pricing page as of pricingLastVerified. "editorial" claims are
 * SuiteRidge's own analysis. Re-verify before republishing past the
 * lastVerified date — see /methodology.
 */
export const products: Product[] = [
  {
    slug: "mailchimp",
    name: "Mailchimp",
    category: "email-marketing",
    tagline: "The default choice — easy to start, gets expensive as your list grows.",
    website: "https://mailchimp.com",
    pricingLastVerified: "2026-08-15",
    hasFreePlan: true,
    startingPrice: "Free (500 contacts) · from $13/mo on Essentials",
    pricing: [
      {
        name: "Free",
        price: "$0/mo",
        bestFor: "Testing the platform with a very small list",
        features: ["Up to 500 contacts", "1,000 sends/month", "Basic templates", "Limited automation"],
      },
      {
        name: "Essentials",
        price: "From $13/mo",
        billingNote: "Price scales with contact count",
        bestFor: "Solo businesses sending regular campaigns",
        features: ["A/B testing", "Custom branding", "Basic automation"],
      },
      {
        name: "Standard",
        price: "From $20/mo",
        billingNote: "Mailchimp's own recommended tier for growing businesses",
        bestFor: "Small businesses needing behavioral automation",
        features: ["Advanced audience segmentation", "Retargeting ads", "Custom journey builder"],
      },
      {
        name: "Premium",
        price: "From $350/mo",
        bestFor: "Larger lists needing advanced reporting and phone support",
        features: ["Advanced reporting", "Priority phone support", "Unlimited seats"],
      },
    ],
    whatItDoes:
      "Mailchimp is an email marketing platform that handles campaign sending, basic marketing automation, audience segmentation, and landing pages, with an ecommerce-oriented feature set layered on top of its original newsletter-sending roots.",
    whoItsFor: [
      "First-time email marketers who want the most recognizable, well-documented tool",
      "Small businesses with a list under a few thousand contacts and simple sending needs",
      "Teams that value template variety and ease of setup over deep automation",
    ],
    whoShouldAvoid: [
      "Businesses expecting to scale past 10,000+ contacts quickly — costs rise fast at that range",
      "Teams that need sophisticated, multi-branch automation as a core requirement",
      "Anyone who needs simple, predictable pricing — contact-based tiers plus gated features can make the real monthly cost hard to predict in advance",
    ],
    keyFeatures: [
      { text: "Contact-based pricing across four tiers: Free, Essentials, Standard, and Premium", source: "vendor" },
      { text: "Advanced automation, retargeting ads, and custom journey builder are gated to Standard and above", source: "vendor" },
      { text: "The gap between the advertised starting price and the actual monthly bill tends to widen once SMS, transactional email, or a larger contact count enter the picture — budget with that in mind rather than the headline number", source: "editorial" },
    ],
    easeOfUse:
      "Consistently the most beginner-friendly option in this category — drag-and-drop building, a large template library, and enough built-in guidance that a first-time sender can get a campaign out within an hour.",
    pros: [
      "Best-in-class onboarding and template library for first-time senders",
      "Free plan is genuinely usable for a very small list, not just a trial",
      "Wide range of native integrations, especially with ecommerce platforms",
    ],
    cons: [
      "Pricing accelerates quickly once a list grows past a few thousand contacts",
      "Meaningful automation features are locked behind the Standard tier and above",
      "Customer support quality varies noticeably by plan tier",
    ],
    bestUseCases: [
      "A solo business or small team sending regular newsletters to a list under 2,500 contacts",
      "Businesses that want one platform for email and light ecommerce marketing",
    ],
    methodologyScores: { featureCoverage: 7, pricingTransparency: 5, easeOfAdoption: 8, smbFit: 7 },
    verdict:
      "Mailchimp earns its reputation as the easiest on-ramp into email marketing, and the free plan is a legitimate way to start. The catch is timing your switch: if growth is part of the plan, it's worth comparing the cost at your expected list size — not just today's — before committing.",
  },
  {
    slug: "activecampaign",
    name: "ActiveCampaign",
    category: "email-marketing",
    tagline: "The deepest automation in this category — with a learning curve to match.",
    website: "https://www.activecampaign.com",
    pricingLastVerified: "2026-08-15",
    hasFreePlan: false,
    startingPrice: "From $15/mo (Starter, billed annually)",
    pricing: [
      {
        name: "Starter",
        price: "From $15/mo",
        billingNote: "Billed annually; contact-based bands from 1,000 contacts up",
        bestFor: "Solo businesses wanting real automation without a CRM",
        features: ["Email marketing", "Basic automation workflows"],
      },
      {
        name: "Plus",
        price: "Contact vendor for current tier pricing",
        bestFor: "Small teams that need a lightweight CRM alongside email",
        features: ["CRM", "Landing pages", "Deeper automation"],
      },
      {
        name: "Professional",
        price: "Contact vendor for current tier pricing",
        bestFor: "Teams optimizing send times and reporting depth",
        features: ["Predictive sending", "Advanced reporting"],
      },
      {
        name: "Enterprise",
        price: "Custom",
        bestFor: "Larger organizations needing advanced support and security",
        features: ["Dedicated support", "Advanced security controls"],
      },
    ],
    whatItDoes:
      "ActiveCampaign is a marketing automation and email platform built around visual workflow-building — the ability to branch a subscriber's journey based on behavior, not just send a single broadcast.",
    whoItsFor: [
      "Small businesses willing to invest a few hours learning workflow automation in exchange for real behavioral targeting",
      "Ecommerce and service businesses that want CRM-lite features without a separate tool",
      "Teams that have outgrown basic broadcast-style email tools",
    ],
    whoShouldAvoid: [
      "Anyone wanting to send a first campaign within the hour — the automation builder has real depth, which means real setup time",
      "Very small lists where the cost-to-simplicity tradeoff isn't worth it yet",
    ],
    keyFeatures: [
      { text: "Pricing is split across separate Email Marketing, WhatsApp, and combined Cross-Channel product lines, each with its own tier structure", source: "vendor" },
      { text: "Starter is email-and-automation only; CRM and landing pages are added at the Plus tier", source: "vendor" },
      { text: "Because pricing now spans three separate product lines with their own bands, comparing ActiveCampaign's cost to a simpler tool like Mailchimp requires deciding which product line you actually need first — the headline $15 starting price is easy to undercount against", source: "editorial" },
    ],
    easeOfUse:
      "Meaningfully steeper than Mailchimp or Kit. The automation builder is genuinely powerful, but that power is the direct cause of a longer setup time — expect a real onboarding investment, not a same-day launch.",
    pros: [
      "The most capable visual automation builder in this category",
      "CRM and sales-pipeline features available without a separate tool (Plus tier and above)",
      "Strong reporting and attribution once automations are built",
    ],
    cons: [
      "Steeper learning curve than broadcast-first tools",
      "No free plan — the trial is the only way to test it without paying",
      "Multiple product lines (Email, WhatsApp, Cross-Channel) make pricing comparisons less straightforward",
    ],
    bestUseCases: [
      "A small ecommerce or service business ready to build real behavioral automation (cart abandonment, lead nurture sequences)",
      "Teams that want lightweight CRM features bundled with email",
    ],
    methodologyScores: { featureCoverage: 9, pricingTransparency: 5, easeOfAdoption: 5, smbFit: 7 },
    verdict:
      "ActiveCampaign is the strongest automation engine in this category for a small business willing to spend real setup time. If the ambition is a single welcome email and a monthly newsletter, it's more tool than needed — that's what Mailchimp or Kit are for.",
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "email-marketing",
    tagline: "The most all-in-one option — a genuinely free CRM, but pricing jumps hard once you need real automation.",
    website: "https://www.hubspot.com",
    pricingLastVerified: "2026-08-22",
    hasFreePlan: true,
    startingPrice: "Free (2 users, 1,000 contacts) · from $20/mo per seat on Starter",
    pricing: [
      {
        name: "Free",
        price: "$0/mo",
        bestFor: "Very small teams testing basic CRM and marketing tools together",
        features: ["Up to 2 users", "1,000 contacts", "Contact and deal management", "Basic email marketing and live chat", "No expiration date"],
      },
      {
        name: "Starter",
        price: "From $20/mo per seat",
        billingNote: "Billed annually; promotional first-year pricing is sometimes offered to new customers",
        bestFor: "Small teams ready to remove HubSpot branding and add core marketing tools",
        features: ["1,000 marketing contacts included", "Live chat and basic conversational bots", "10 reporting dashboards"],
      },
      {
        name: "Professional",
        price: "$800/mo (billed annually) · $890/mo (billed monthly)",
        billingNote: "Includes 3 seats and 2,000 contacts; one-time $3,000 onboarding fee required",
        bestFor: "Teams needing full marketing automation, A/B testing, and custom reporting",
        features: ["Workflow automation", "A/B testing for email and landing pages", "Custom reporting dashboards", "Lead scoring"],
      },
      {
        name: "Enterprise",
        price: "$3,600/mo",
        billingNote: "Includes 5 seats and 10,000 contacts; one-time $7,000 onboarding fee required",
        bestFor: "Larger marketing teams needing attribution and governance",
        features: ["Customer journey analytics", "Multi-touch revenue attribution", "Advanced permissions and governance"],
      },
    ],
    whatItDoes:
      "HubSpot is an all-in-one CRM platform with a dedicated Marketing Hub product line for email campaigns, marketing automation, landing pages, and lead scoring — built around a shared contact database with HubSpot's free CRM, sales, and service tools, rather than existing as a standalone email sender.",
    whoItsFor: [
      "Businesses that want CRM, sales, and marketing tools sharing one contact database instead of syncing separate platforms",
      "Teams that can run on the free CRM tier long-term and only need to add Starter-level marketing tools",
      "Growing companies planning to eventually need advanced automation, attribution, and multi-team governance",
    ],
    whoShouldAvoid: [
      "Small businesses that just need to send email campaigns — the jump from Starter to Professional is steep, and Professional is where real automation and reporting depth live",
      "Anyone budgeting only the advertised monthly price — the $3,000 (Professional) and $7,000 (Enterprise) onboarding fees are mandatory one-time add-ons, not optional",
      "Teams that want simple, predictable pricing — HubSpot's per-seat plus per-contact-tier structure makes the real monthly cost harder to estimate upfront than a flat-rate tool",
    ],
    keyFeatures: [
      { text: "Free CRM tier includes contact and deal management, basic email marketing, live chat, and access to HubSpot's app marketplace for up to 2 users and 1,000 contacts, with no expiration date", source: "vendor" },
      { text: "Marketing Hub Professional ($800-890/mo) is the first tier with workflow automation, A/B testing, and custom reporting — and requires a one-time $3,000 onboarding fee", source: "vendor" },
      { text: "The real cost gap between Starter and Professional is larger than the headline monthly prices suggest once the mandatory onboarding fee is included — worth budgeting for both numbers before comparing to a single-tier tool", source: "editorial" },
    ],
    easeOfUse:
      "The free CRM and Starter tier are approachable for a small team, but the platform's real depth is built around a Professional-tier setup — expect a genuine onboarding investment, reflected directly in the mandatory onboarding fee, once workflow automation and custom reporting enter the picture.",
    pros: [
      "Genuinely usable free CRM tier with no expiration date, not just a trial",
      "Contacts, deals, and marketing tools share one database instead of needing separate synced tools",
      "Deepest reporting and attribution tooling in this category once on Professional or Enterprise",
    ],
    cons: [
      "Steep price jump from Starter ($20/seat) to Professional ($800-890/mo), with a mandatory $3,000 onboarding fee at that tier",
      "Contact-tier pricing means the real monthly cost grows independently of seat count",
      "Meaningful marketing automation is gated to Professional and above — Starter is closer to a lightweight CRM add-on than a full automation platform",
    ],
    bestUseCases: [
      "A small business that wants free CRM, sales, and basic email tools sharing one contact database",
      "A growing team that has budgeted for Professional-tier pricing and wants deep automation, attribution, and reporting without stitching together separate tools",
    ],
    methodologyScores: { featureCoverage: 9, pricingTransparency: 4, easeOfAdoption: 6, smbFit: 6 },
    verdict:
      "HubSpot's free CRM is a legitimate long-term option for a very small team, and Starter is a reasonable way to add basic marketing tools without much added cost. The catch is what comes next: real automation, reporting, and attribution live behind Professional, which carries a materially higher monthly price plus a mandatory five-figure first-year onboarding cost. It's worth deciding whether that depth is actually needed — or whether Mailchimp or ActiveCampaign covers the same ground for meaningfully less — before making the jump.",
  },
  {
    slug: "asana",
    name: "Asana",
    category: "project-management",
    tagline: "Clean, structured, and the most balanced pick for growing small teams.",
    website: "https://asana.com",
    pricingLastVerified: "2026-08-15",
    hasFreePlan: true,
    startingPrice: "Free (up to 15 collaborators) · from $10.99/user/mo on Starter",
    pricing: [
      {
        name: "Personal",
        price: "$0/mo",
        bestFor: "Individuals and very small teams",
        features: ["Unlimited tasks and projects", "Unlimited messages and file storage", "Collaboration capped at 15 users"],
      },
      {
        name: "Starter",
        price: "$10.99/user/mo",
        billingNote: "Billed annually; 2-seat minimum",
        bestFor: "Teams past the 15-collaborator free limit",
        features: ["Timeline and Gantt views", "No collaborator cap"],
      },
      {
        name: "Advanced",
        price: "$24.99/user/mo",
        billingNote: "Billed annually; 2-seat minimum",
        bestFor: "Teams needing strategic planning tools",
        features: ["Goals and OKRs", "Portfolio management", "Workload visibility"],
      },
      {
        name: "Enterprise / Enterprise+",
        price: "Custom",
        bestFor: "Larger organizations with compliance requirements",
        features: ["SIEM, eDiscovery, DLP", "HIPAA compliance", "Data residency controls"],
      },
    ],
    whatItDoes:
      "Asana is a work-management platform for planning projects, assigning and tracking tasks, and visualizing progress across lists, boards, timelines, and Gantt-style views.",
    whoItsFor: [
      "Small teams (under 15 people) that want a genuinely usable free plan before paying anything",
      "Growing teams that need Timeline/Gantt views without a big jump in complexity",
      "Businesses that value a clean, well-designed interface over maximum feature density",
    ],
    whoShouldAvoid: [
      "Solo freelancers who don't need multi-view planning — a simpler list-based tool will do the job for less setup",
      "Teams under 15 people who are certain they'll need Goals/OKRs or portfolio views soon — that jump lands at the pricier Advanced tier",
    ],
    keyFeatures: [
      { text: "Free plan supports unlimited tasks and projects but caps collaboration at 15 users", source: "vendor" },
      { text: "Starter and Advanced both carry a 2-seat minimum commitment", source: "vendor" },
      { text: "The real decision point for most small businesses is Starter vs. Advanced, not Free vs. paid — Free is genuinely workable up to 15 people, so the first real spending decision is whether Timeline/Gantt views (Starter) are worth it before hitting that cap", source: "editorial" },
    ],
    easeOfUse:
      "One of the more approachable full-featured PM tools — the interface stays legible even as project complexity grows, and new teammates typically need little onboarding to contribute.",
    pros: [
      "Free plan is genuinely usable, not a crippled trial",
      "Clean interface that scales well from simple lists to complex timelines",
      "Strong third-party integration library",
    ],
    cons: [
      "Goals/OKRs and portfolio-level views require the pricier Advanced tier",
      "2-seat minimum on paid plans is a minor friction for true solo users",
      "Reporting depth trails ClickUp at equivalent price points",
    ],
    bestUseCases: [
      "A 5–20 person team standardizing on one tool for the first time",
      "Agencies managing multiple client projects that need timeline views without enterprise complexity",
    ],
    methodologyScores: { featureCoverage: 8, pricingTransparency: 7, easeOfAdoption: 8, smbFit: 8 },
    verdict:
      "Asana is the safest default for a small team that hasn't settled on a PM tool yet — the free plan is real, the paid jump is predictable, and the interface won't fight new users. Teams chasing maximum feature density per dollar should look at ClickUp instead.",
  },
  {
    slug: "clickup",
    name: "ClickUp",
    category: "project-management",
    tagline: "The most features per dollar — and the most setup complexity to match.",
    website: "https://clickup.com",
    pricingLastVerified: "2026-08-15",
    hasFreePlan: true,
    startingPrice: "Free · from $7/user/mo on Unlimited",
    pricing: [
      {
        name: "Free Forever",
        price: "$0/mo",
        bestFor: "Individuals testing the platform",
        features: ["Unlimited tasks", "60MB storage", "Collaborative docs"],
      },
      {
        name: "Unlimited",
        price: "$7/user/mo",
        bestFor: "Small teams needing unlimited storage and views",
        features: ["Unlimited custom views", "Timesheets", "Guest access"],
      },
      {
        name: "Business",
        price: "$12/user/mo",
        bestFor: "Growing teams needing automation and dashboards",
        features: ["Unlimited dashboards", "Advanced automation (5,000 runs/mo)", "Google SSO", "Timeline and workload views"],
      },
      {
        name: "Business Plus",
        price: "$19/user/mo",
        bestFor: "Larger teams needing granular permissions",
        features: ["Custom roles", "Advanced forms and timesheets controls"],
      },
      {
        name: "Enterprise",
        price: "Custom",
        bestFor: "Large organizations with custom requirements",
        features: ["Custom setup and support"],
      },
    ],
    whatItDoes:
      "ClickUp is an all-in-one work-management platform combining task management, docs, whiteboards, goal tracking, and dashboards into a single, heavily customizable system.",
    whoItsFor: [
      "Teams that want to consolidate multiple tools (docs, tasks, goals, dashboards) into one subscription",
      "Small businesses that are comfortable investing setup time to configure a system that exactly matches their workflow",
      "Budget-conscious teams — the per-seat cost at the Business tier is competitive for the feature depth included",
    ],
    whoShouldAvoid: [
      "Teams that want to start working within the hour — ClickUp's flexibility is also its biggest onboarding obstacle",
      "Very small teams (1–3 people) who don't need dashboards, automation, or custom views yet",
    ],
    keyFeatures: [
      { text: "ClickUp Brain (AI features) is priced as a separate add-on stacked on top of a paid plan: $9/user/mo for Brain, $28/user/mo for the higher Everything AI tier", source: "vendor" },
      { text: "Advanced automation (5,000 runs/month) is included at the Business tier", source: "vendor" },
      { text: "The AI add-on pricing is easy to miss when comparing ClickUp's base price to competitors — factor it in only if AI features are actually part of the requirement, since the base plans are otherwise very competitively priced", source: "editorial" },
    ],
    easeOfUse:
      "The least beginner-friendly tool in this category's shortlist. ClickUp's flexibility means almost nothing is pre-configured — new teams should expect a deliberate setup phase before the tool feels natural, not an out-of-the-box fit.",
    pros: [
      "Exceptional feature density per dollar, especially at the Business tier",
      "Highly customizable views, statuses, and automations",
      "Consolidates tools that would otherwise require separate subscriptions",
    ],
    cons: [
      "Steep learning curve — the flexibility that makes it powerful also makes onboarding slower",
      "AI features are a separate paid add-on, not included in base tiers",
      "Can feel overwhelming for teams that just want simple task tracking",
    ],
    bestUseCases: [
      "A small business consolidating docs, tasks, and dashboards into one tool to cut subscription costs",
      "Teams with an internal champion willing to build out the system properly before rolling it out",
    ],
    methodologyScores: { featureCoverage: 9, pricingTransparency: 6, easeOfAdoption: 5, smbFit: 6 },
    verdict:
      "ClickUp wins on pure feature-per-dollar value, but that value is only realized if someone on the team is willing to configure it properly. Teams that want to be productive on day one should start with Asana or Trello instead.",
  },
  {
    slug: "calendly",
    name: "Calendly",
    category: "appointment-scheduling",
    tagline: "The simplest, most polished scheduling link — built for this and only this.",
    website: "https://calendly.com",
    pricingLastVerified: "2026-08-15",
    hasFreePlan: true,
    startingPrice: "Free (1 event type) · from $10/seat/mo on Standard",
    pricing: [
      {
        name: "Free",
        price: "$0/mo",
        bestFor: "Individuals with a single, simple booking need",
        features: ["1 event type", "Basic scheduling"],
      },
      {
        name: "Standard",
        price: "$10/seat/mo",
        billingNote: "Billed annually; $12/seat monthly",
        bestFor: "Professionals needing multiple event types and integrations",
        features: ["Unlimited event types", "Integrations (calendar, video, payment)"],
      },
      {
        name: "Teams",
        price: "$16/seat/mo",
        billingNote: "Billed annually; $20/seat monthly; volume pricing past 30 seats",
        bestFor: "Small teams needing routing and admin controls",
        features: ["Round-robin distribution", "Lead routing forms", "Salesforce integration", "Admin controls"],
      },
      {
        name: "Enterprise",
        price: "From $15,000/year",
        bestFor: "Large organizations needing advanced security",
        features: ["Advanced security and control"],
      },
    ],
    whatItDoes:
      "Calendly is a scheduling link tool — it publishes your real-time availability so others can book a meeting directly, syncing with your calendar to avoid double-bookings and handling reminders automatically.",
    whoItsFor: [
      "Consultants, freelancers, and small teams that primarily book meetings, calls, and consultations",
      "Anyone who wants the most recognized, easiest-to-explain scheduling link for clients and prospects",
      "Teams needing lead-routing logic (round-robin, forms) at the Teams tier",
    ],
    whoShouldAvoid: [
      "Service businesses needing packages, memberships, or built-in payment processing for appointments — Acuity is built more specifically for that",
      "Solo users who only need one event type indefinitely and don't want to think about tier upgrades",
    ],
    keyFeatures: [
      { text: "Free plan is limited to a single event type", source: "vendor" },
      { text: "Round-robin meeting distribution and Salesforce integration are Teams-tier features", source: "vendor" },
      { text: "Teams pricing includes volume-based discounts once a team passes 30 seats, which is worth requesting a quote for rather than assuming list price", source: "vendor" },
    ],
    easeOfUse:
      "The easiest tool in this entire report to set up. Connect a calendar, set availability, share a link — most users are fully functional within minutes.",
    pros: [
      "Extremely simple setup and a scheduling-link format almost every client already recognizes",
      "Strong calendar and video-conferencing integrations",
      "Round-robin and routing forms make it viable for small sales teams, not just individuals",
    ],
    cons: [
      "No built-in payment/package features — needs a separate tool for that",
      "Free plan's single-event-type limit pushes most real use cases to a paid tier quickly",
      "Less suited to service businesses managing complex service menus than Acuity",
    ],
    bestUseCases: [
      "A consultant or freelancer booking calls and consultations",
      "A small sales or recruiting team using round-robin distribution to split inbound meeting requests",
    ],
    methodologyScores: { featureCoverage: 7, pricingTransparency: 8, easeOfAdoption: 9, smbFit: 9 },
    verdict:
      "Calendly is the right default for anyone booking meetings and calls. It is not the right tool for a service business selling appointment packages or memberships — that's a different job, and Acuity does it better.",
  },
  {
    slug: "acuity-scheduling",
    name: "Acuity Scheduling",
    category: "appointment-scheduling",
    tagline: "Built for service businesses that sell appointments, not just book meetings.",
    website: "https://www.acuityscheduling.com",
    pricingLastVerified: "2026-08-15",
    hasFreePlan: false,
    startingPrice: "From $16/mo (Starter, billed annually)",
    pricing: [
      {
        name: "Starter",
        price: "$16–$20/mo",
        billingNote: "$16 billed annually, $20 billed monthly",
        bestFor: "A single practitioner with one bookable calendar",
        features: ["1 bookable calendar", "Unlimited appointments", "Client self-booking"],
      },
      {
        name: "Standard",
        price: "$27–$34/mo",
        billingNote: "$27 billed annually, $34 billed monthly",
        bestFor: "Service businesses selling packages or memberships",
        features: ["SMS reminders", "Packages and payment plans", "Memberships"],
      },
      {
        name: "Premium",
        price: "$49–$61/mo",
        billingNote: "$49 billed annually, $61 billed monthly",
        bestFor: "Practices needing compliance and extra security",
        features: ["HIPAA compliance", "Advanced security controls"],
      },
    ],
    whatItDoes:
      "Acuity Scheduling is an online booking platform built specifically for service businesses — beyond calendar booking, it handles package sales, membership billing, and payment collection through Stripe, Square, or PayPal.",
    whoItsFor: [
      "Solo practitioners and small service businesses (salons, coaches, clinics) that sell appointment packages or memberships",
      "Businesses that need HIPAA-appropriate booking at the Premium tier",
      "Anyone who wants payment collection built into the booking flow, not bolted on separately",
    ],
    whoShouldAvoid: [
      "Anyone wanting to test the platform for free first — there's no free plan, only a 7-day trial",
      "Teams whose main need is simple meeting scheduling rather than service/appointment sales — Calendly is the simpler, cheaper fit there",
    ],
    keyFeatures: [
      { text: "No free plan; a 7-day trial is available across all paid tiers", source: "vendor" },
      { text: "SMS reminders, packages, payment plans, and memberships are gated to the Standard tier and above", source: "vendor" },
      { text: "HIPAA compliance is reserved for the Premium tier", source: "vendor" },
      { text: "The advertised starting price only covers scheduling itself — clinics that also need clinical records or dedicated invoicing typically add another tool, so the effective monthly cost runs above the sticker price", source: "editorial" },
    ],
    easeOfUse:
      "Straightforward for its core use case (calendar booking, package sales) but the payment and package configuration takes more setup time than a pure scheduling-link tool like Calendly.",
    pros: [
      "Strong built-in support for packages, memberships, and payment collection",
      "Every plan includes unlimited appointments",
      "HIPAA-appropriate option available for clinical practices",
    ],
    cons: [
      "No free plan to test before committing",
      "SMS reminders and packages require at least the Standard tier",
      "Less suited to general meeting scheduling than Calendly",
    ],
    bestUseCases: [
      "A salon, spa, or personal training business selling class packages or memberships",
      "A solo healthcare or wellness practitioner needing compliant, payment-integrated booking",
    ],
    methodologyScores: { featureCoverage: 8, pricingTransparency: 7, easeOfAdoption: 7, smbFit: 8 },
    verdict:
      "Acuity is the stronger choice specifically for service businesses selling appointments as a product — packages, memberships, and payments are first-class features, not add-ons. For simple meeting scheduling alone, it's more tool (and more monthly cost) than necessary.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
