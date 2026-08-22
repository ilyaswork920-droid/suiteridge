import type { GuideEntry } from "@/lib/types";

export const guides: GuideEntry[] = [
  {
    slug: "what-is-email-marketing-automation",
    category: "email-marketing",
    title: "What Is Email Marketing Automation?",
    metaDescription:
      "A plain-language explanation of email marketing automation — what it actually does, how it differs from a regular newsletter, and when a small business needs it.",
    intro:
      "Email marketing automation means setting up emails to send themselves based on a trigger — someone joining a list, abandoning a cart, or going quiet for 30 days — rather than a person hitting send each time.",
    sections: [
      {
        heading: "The difference between a broadcast and an automation",
        body: "A broadcast is a single email sent to a list at a chosen time — a newsletter, an announcement. An automation is a rule: \"when X happens, send Y.\" The email exists once you build it; the trigger decides when it goes out, without anyone remembering to send it.",
      },
      {
        heading: "The automations most small businesses actually use",
        body: "In practice, the list is short: a welcome sequence for new subscribers, an abandoned-cart reminder for ecommerce, a re-engagement email for contacts who haven't opened anything in a while, and a post-purchase follow-up. Most tools can handle these four with a simple, single-branch automation — the more elaborate multi-branch workflows matter more for larger lists with more distinct customer segments.",
      },
      {
        heading: "When it's worth setting up",
        body: "If a list is under a few hundred contacts and growing slowly, manual broadcasts are often good enough — automation adds setup overhead without much payoff yet. It starts earning its keep once there's a repeatable moment (a signup, a purchase, a cart abandonment) happening often enough that manually handling it becomes real, recurring work.",
      },
    ],
    faqs: [
      {
        question: "Do I need marketing automation if I only send a monthly newsletter?",
        answer: "Not really. A monthly newsletter is a broadcast, not an automation — a simpler, broadcast-focused tool covers that use case fine.",
      },
      {
        question: "Is automation only useful for ecommerce?",
        answer: "No — service businesses use it for lead nurture sequences and onboarding emails, and content businesses use it for welcome series after a signup. Ecommerce (cart abandonment, post-purchase flows) is just the most common example.",
      },
    ],
    relatedBestSlug: "email-marketing-software-for-small-business",
    lastVerified: "2026-08-15",
  },
  {
    slug: "what-is-appointment-scheduling-software",
    category: "appointment-scheduling",
    title: "What Is Appointment Scheduling Software?",
    metaDescription:
      "A plain-language explanation of appointment scheduling software — how it works, what problems it actually solves, and when a small business needs one.",
    intro:
      "Appointment scheduling software replaces the back-and-forth of finding a meeting time with a link: it shows your real availability, lets someone pick a slot, and updates your calendar automatically.",
    sections: [
      {
        heading: "What it actually replaces",
        body: "Without it, booking a meeting usually means several messages back and forth to find a time that works, followed by a manual calendar entry and a manual reminder. The software collapses that into one link: check availability, pick a slot, get a confirmation and a reminder — no messages required.",
      },
      {
        heading: "Two different jobs under one category name",
        body: "\"Scheduling software\" actually covers two distinct needs. The first is booking meetings and calls — a straightforward calendar link, which is what most general-purpose scheduling tools are built for. The second is selling service appointments as a product — a haircut, a class, a consultation package — which requires payment collection, packages, and often memberships layered on top of the basic booking mechanic.",
      },
      {
        heading: "When it's worth adopting",
        body: "If scheduling currently happens over email or text more than a few times a week, the time saved by a booking link pays for itself quickly. Service businesses selling appointments as packages or memberships benefit from a tool built for that specifically, rather than a general meeting-scheduling link with payments bolted on.",
      },
    ],
    faqs: [
      {
        question: "Can I use scheduling software without giving up control of my calendar?",
        answer: "Yes — these tools sync with an existing calendar (Google, Outlook, etc.) and only show time you've marked as available; they don't take over calendar ownership.",
      },
      {
        question: "Do I need a paid plan to try scheduling software?",
        answer: "Several tools in this category offer a free tier or a trial — a free plan is often enough to test the core booking flow before deciding whether the paid features (packages, SMS reminders, team routing) are worth it.",
      },
    ],
    relatedBestSlug: "appointment-scheduling-software-for-small-business",
    lastVerified: "2026-08-15",
  },
  {
    slug: "what-is-project-management-software",
    category: "project-management",
    title: "What Is Project Management Software?",
    metaDescription:
      "A plain-language explanation of project management software — what it actually replaces, its core building blocks, and when a small team needs one.",
    intro:
      "Project management software gives a team one shared place to see what needs to get done, who's doing it, and by when — replacing the mix of spreadsheets, chat threads, and email that most small teams start with.",
    sections: [
      {
        heading: "What it actually replaces",
        body: "Before adopting a dedicated tool, most small teams track work across a spreadsheet for task lists, a chat app for status updates, and email for anything that needs a paper trail — with no single place showing what's actually in progress or overdue. Project management software consolidates that into one shared view: tasks, owners, due dates, and status in one place instead of scattered across tools.",
      },
      {
        heading: "The core building blocks, regardless of tool",
        body: "Most project management tools are built from the same handful of primitives: tasks (the unit of work), assignees (who owns it), due dates, and a view — a list, a Kanban board, a calendar, or a timeline — that shows the same underlying tasks in a different shape. Where tools differ is how much configuration those primitives need before they're useful, and how much depth sits on top: automation, dashboards, time tracking, resource planning.",
      },
      {
        heading: "When it's worth adopting",
        body: "If a team is small (2-3 people) and coordination mostly happens by talking, a dedicated tool can add more overhead than it saves. It starts earning its keep once a team can't reliably answer \"what's everyone working on right now\" without asking, or when work regularly falls through the cracks between tools. The right tool at that point is less about which has the most features and more about matching configuration complexity to how much setup time the team is actually willing to invest.",
      },
    ],
    faqs: [
      {
        question: "Do I need project management software if my team is small?",
        answer: "Not necessarily. A team of 2-3 people that coordinates well through direct conversation often doesn't need a dedicated tool yet — the overhead of maintaining a system can exceed the benefit until the team or workload grows enough that things start slipping.",
      },
      {
        question: "What's the difference between a to-do list app and project management software?",
        answer: "A to-do list tracks individual tasks for one person. Project management software adds shared visibility across a team — who owns what, how tasks relate to each other, and views (boards, timelines) that show status across everyone's work, not just one person's list.",
      },
    ],
    relatedBestSlug: "project-management-software-for-small-business",
    lastVerified: "2026-08-22",
  },
];

export function getGuide(slug: string): GuideEntry | undefined {
  return guides.find((g) => g.slug === slug);
}
