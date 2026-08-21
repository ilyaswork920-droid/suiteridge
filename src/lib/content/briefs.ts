import type { ArticleBrief } from "@/lib/types";

/**
 * The first-50 content plan from the SuiteRidge Playbook (Phase 7).
 * "published" entries are live on the site now. "briefed" entries are
 * fully specified (title, keyword, category, type, priority) and ready
 * for a writer to produce next — they are not rendered as pages until
 * researched and written to the same standard as the published set.
 */
export const articleBriefs: ArticleBrief[] = [
  { title: "Best Email Marketing Software for Small Business", primaryKeyword: "best email marketing software for small business", category: "email-marketing", type: "pillar", priority: "P1", status: "published" },
  { title: "Best Project Management Software for Small Business", primaryKeyword: "best project management software for small business", category: "project-management", type: "pillar", priority: "P1", status: "published" },
  { title: "Best Appointment Scheduling Software for Small Business", primaryKeyword: "best appointment scheduling software for small business", category: "appointment-scheduling", type: "pillar", priority: "P1", status: "published" },
  { title: "Mailchimp Review", primaryKeyword: "mailchimp review", category: "email-marketing", type: "review", priority: "P1", status: "published" },
  { title: "ActiveCampaign Review", primaryKeyword: "activecampaign review", category: "email-marketing", type: "review", priority: "P1", status: "published" },
  { title: "Kit (ConvertKit) Review", primaryKeyword: "kit convertkit review", category: "email-marketing", type: "review", priority: "P1", status: "briefed" },
  { title: "Asana Review", primaryKeyword: "asana review", category: "project-management", type: "review", priority: "P1", status: "published" },
  { title: "Monday.com Review", primaryKeyword: "monday.com review", category: "project-management", type: "review", priority: "P1", status: "briefed" },
  { title: "ClickUp Review", primaryKeyword: "clickup review", category: "project-management", type: "review", priority: "P1", status: "published" },
  { title: "Calendly Review", primaryKeyword: "calendly review", category: "appointment-scheduling", type: "review", priority: "P1", status: "published" },
  { title: "Acuity Scheduling Review", primaryKeyword: "acuity scheduling review", category: "appointment-scheduling", type: "review", priority: "P1", status: "published" },
  { title: "Best Email Marketing Software for Ecommerce", primaryKeyword: "best email marketing for ecommerce", category: "email-marketing", type: "best-for", priority: "P1", status: "briefed" },
  { title: "Best Project Management Software for Startups", primaryKeyword: "best project management software for startups", category: "project-management", type: "best-for", priority: "P1", status: "briefed" },
  { title: "Best Scheduling Software for Salons & Spas", primaryKeyword: "best scheduling software for salons", category: "appointment-scheduling", type: "best-for", priority: "P1", status: "briefed" },
  { title: "Mailchimp vs ActiveCampaign", primaryKeyword: "mailchimp vs activecampaign", category: "email-marketing", type: "compare", priority: "P1", status: "published" },
  { title: "Asana vs ClickUp", primaryKeyword: "clickup vs asana", category: "project-management", type: "compare", priority: "P1", status: "published" },
  { title: "Kit vs Mailchimp", primaryKeyword: "kit vs mailchimp", category: "email-marketing", type: "compare", priority: "P1", status: "briefed" },
  { title: "Calendly vs Acuity Scheduling", primaryKeyword: "calendly vs acuity scheduling", category: "appointment-scheduling", type: "compare", priority: "P1", status: "published" },
  { title: "Klaviyo Review", primaryKeyword: "klaviyo review", category: "email-marketing", type: "review", priority: "P2", status: "briefed" },
  { title: "Brevo Review", primaryKeyword: "brevo review", category: "email-marketing", type: "review", priority: "P2", status: "briefed" },
  { title: "MailerLite Review", primaryKeyword: "mailerlite review", category: "email-marketing", type: "review", priority: "P2", status: "briefed" },
  { title: "Trello Review", primaryKeyword: "trello review", category: "project-management", type: "review", priority: "P2", status: "briefed" },
  { title: "Smartsheet Review", primaryKeyword: "smartsheet review", category: "project-management", type: "review", priority: "P2", status: "briefed" },
  { title: "Square Appointments Review", primaryKeyword: "square appointments review", category: "appointment-scheduling", type: "review", priority: "P1", status: "briefed" },
  { title: "Setmore Review", primaryKeyword: "setmore review", category: "appointment-scheduling", type: "review", priority: "P2", status: "briefed" },
  { title: "Best Email Marketing Software for Agencies", primaryKeyword: "best email marketing software for agencies", category: "email-marketing", type: "best-for", priority: "P1", status: "briefed" },
  { title: "Best Project Management Software for Agencies", primaryKeyword: "best project management software for agencies", category: "project-management", type: "best-for", priority: "P1", status: "briefed" },
  { title: "Best Scheduling Software for Consultants & Coaches", primaryKeyword: "scheduling software for consultants", category: "appointment-scheduling", type: "best-for", priority: "P1", status: "briefed" },
  { title: "Email Marketing Software for Solo Freelancers", primaryKeyword: "email marketing software for freelancers", category: "email-marketing", type: "best-for", priority: "P1", status: "briefed" },
  { title: "Project Management Software for Solo Freelancers", primaryKeyword: "project management software for freelancers", category: "project-management", type: "best-for", priority: "P2", status: "briefed" },
  { title: "Best Scheduling Software for Small Teams", primaryKeyword: "scheduling software for small teams", category: "appointment-scheduling", type: "best-for", priority: "P2", status: "briefed" },
  { title: "Mailchimp Alternatives", primaryKeyword: "mailchimp alternatives", category: "email-marketing", type: "alternatives", priority: "P1", status: "published" },
  { title: "ActiveCampaign Alternatives", primaryKeyword: "activecampaign alternatives", category: "email-marketing", type: "alternatives", priority: "P2", status: "briefed" },
  { title: "Monday.com Alternatives", primaryKeyword: "monday.com alternatives", category: "project-management", type: "alternatives", priority: "P1", status: "briefed" },
  { title: "Asana Alternatives", primaryKeyword: "asana alternatives", category: "project-management", type: "alternatives", priority: "P2", status: "briefed" },
  { title: "Calendly Alternatives", primaryKeyword: "calendly alternatives", category: "appointment-scheduling", type: "alternatives", priority: "P1", status: "published" },
  { title: "Acuity Scheduling Alternatives", primaryKeyword: "acuity scheduling alternatives", category: "appointment-scheduling", type: "alternatives", priority: "P2", status: "briefed" },
  { title: "Best Free Email Marketing Software", primaryKeyword: "best free email marketing software", category: "email-marketing", type: "best-for", priority: "P2", status: "briefed" },
  { title: "Best Free Project Management Software", primaryKeyword: "free project management software", category: "project-management", type: "best-for", priority: "P2", status: "briefed" },
  { title: "Best Free Appointment Scheduling Software", primaryKeyword: "free appointment scheduling software", category: "appointment-scheduling", type: "best-for", priority: "P2", status: "briefed" },
  { title: "Best Email Marketing Software for Nonprofits", primaryKeyword: "best email marketing software for nonprofits", category: "email-marketing", type: "best-for", priority: "P3", status: "briefed" },
  { title: "Best Project Management Software for Construction", primaryKeyword: "project management software for construction", category: "project-management", type: "best-for", priority: "P2", status: "briefed" },
  { title: "Best Scheduling Software for Healthcare Clinics", primaryKeyword: "scheduling software for healthcare clinics", category: "appointment-scheduling", type: "best-for", priority: "P2", status: "briefed" },
  { title: "Klaviyo Pricing, Explained", primaryKeyword: "klaviyo pricing", category: "email-marketing", type: "guide", priority: "P2", status: "briefed" },
  { title: "ClickUp Pricing, Explained", primaryKeyword: "clickup pricing", category: "project-management", type: "guide", priority: "P2", status: "briefed" },
  { title: "Calendly Pricing, Explained", primaryKeyword: "calendly pricing", category: "appointment-scheduling", type: "guide", priority: "P2", status: "briefed" },
  { title: "What Is Email Marketing Automation?", primaryKeyword: "what is email marketing automation", category: "email-marketing", type: "guide", priority: "P3", status: "published" },
  { title: "What Is Project Management Software?", primaryKeyword: "what is project management software", category: "project-management", type: "guide", priority: "P3", status: "briefed" },
  { title: "What Is Appointment Scheduling Software?", primaryKeyword: "what is appointment scheduling software", category: "appointment-scheduling", type: "guide", priority: "P3", status: "published" },
];

export const publishedCount = articleBriefs.filter((a) => a.status === "published").length;
export const briefedCount = articleBriefs.filter((a) => a.status === "briefed").length;
