export const siteConfig = {
  name: "SuiteRidge",
  tagline: "Software research, without the sales pitch.",
  description:
    "SuiteRidge is an independent research platform that helps small business owners choose software with a clear, methodology-based evaluation — not vendor marketing.",
  url: "https://suiteridge.com",
  locale: "en-US",
  twitter: "@suiteridge",
  legalName: "SuiteRidge",
  contactEmail: "hello@suiteridge.com",
} as const;

export const categoryList = [
  {
    slug: "email-marketing",
    name: "Email Marketing Software",
    shortName: "Email Marketing",
    description:
      "Tools for sending campaigns, automating sequences, and growing a subscriber list — evaluated for small teams, not enterprise marketing departments.",
    intro:
      "Email marketing software ranges from simple broadcast tools to full automation platforms with CRM features built in. The right pick depends less on \"best overall\" and more on your list size, technical comfort, and whether you need ecommerce-specific features like abandoned-cart flows.",
  },
  {
    slug: "project-management",
    name: "Project Management Software",
    shortName: "Project Management",
    description:
      "Tools for planning work, tracking tasks, and keeping a team aligned — evaluated for small teams and agencies, not enterprise PMOs.",
    intro:
      "Project management software spans simple Kanban boards to full work-management suites with resource planning and portfolio views. Most small businesses overpay for features they'll never touch — the goal here is matching complexity to team size, not chasing the most feature-dense option.",
  },
  {
    slug: "appointment-scheduling",
    name: "Appointment Scheduling Software",
    shortName: "Appointment Scheduling",
    description:
      "Tools for online booking, calendar sync, and appointment reminders — evaluated for service businesses and solo professionals.",
    intro:
      "Appointment scheduling software solves a narrow, high-stakes problem: letting clients book time without a back-and-forth. The differences that matter are payment collection, reminder automation, and whether the tool is built for one calendar or a whole team of them.",
  },
] as const;

export type CategorySlug = (typeof categoryList)[number]["slug"];
