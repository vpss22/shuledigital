// Product catalog data for the Shule-Digital marketplace landing page.
// All descriptive copy is written in-house for this demo build.

export const product = {
  title:
    "Shule-Digital - School Management System with Student | Parents Flutter App | Laravel Admin",
  shortTitle: "Shule-Digital",
  breadcrumb: "Shule-Digital - School Management System with Student | Parents Flutter App | Laravel Admin",
  rating: "5.0",
  reviewsCount: 1,
  marketplaceSales: 15,
  codecanyonSales: "1,004",
  recentlyUpdated: true,
} as const;

export const overviewParagraphs = [
  "Most school platforms cap you at a single institution. Shule-Digital takes a different route: a Laravel-powered admin core, native Flutter apps for students, parents, teachers, and staff, and a genuinely multi-tenant SaaS architecture — with MySQL storage, Firebase push notifications, and M-Pesa, Stripe, Flutterwave, and Paystack payment support wired in.",
  "It is built for EdTech founders, software agencies, school franchises, and education groups that want ready-made school management SaaS source code to brand and resell instead of engineering everything from zero. Each school on the platform keeps its own admin panel, staff, students, and branded website, while the entire network is supervised from one Super Admin dashboard.",
  "Building a multi-school ERP in-house usually means months of development and a serious budget before the first customer signs up. Shule-Digital removes that wait — it ships launch-ready with white-label branding and subscription billing already in place, so your first paying school can be onboarded within days.",
] as const;

export const demoLinks = [
  { label: "Student Website", href: "#", external: true },
  { label: "School Website", href: "#", external: true },
  { label: "SaaS Landingpage", href: "#", external: true },
  { label: "Admin Panel", href: "#", external: true },
] as const;

export const demoQrs = [
  { id: "student-android", title: "Student/Parent App", platform: "Android", url: "https://play.google.com/store/apps/details?id=com.shuledigital.student" },
  { id: "staff-android", title: "Staff/Teacher App", platform: "Android", url: "https://play.google.com/store/apps/details?id=com.shuledigital.staff" },
  { id: "student-ios", title: "Student/Parent App", platform: "iOS", url: "https://apps.apple.com/app/shule-digital-student-parent/id000000000" },
  { id: "staff-ios", title: "Staff/Teacher App", platform: "iOS", url: "https://apps.apple.com/app/shule-digital-staff-teacher/id000000000" },
] as const;

export const demoCredentials = [
  {
    id: "admin",
    title: "Admin Panel",
    linkLabel: "Open Admin Panel",
    fields: [
      { label: "Email", value: "superadmin@gmail.com" },
      { label: "Password", value: "superadmin" },
    ],
  },
  {
    id: "student",
    title: "Student/Parent App",
    linkLabel: "Open Student Demo",
    fields: [
      { label: "Email (Parent)", value: "AmberMWayt@gustr.com" },
      { label: "Password", value: "8200727077" },
    ],
  },
  {
    id: "teacher",
    title: "Staff/Teacher App",
    linkLabel: "Open Staff Demo",
    fields: [
      { label: "Email", value: "teacher@gmail.com" },
      { label: "Password", value: "0111111111" },
    ],
  },
] as const;

export const techStackNote =
  "Every layer of this stack was chosen to keep schools, dashboards, and mobile apps fast, secure, and dependable under load — so platform updates roll out without disrupting any school already running on the system.";

export const techStack = [
  "Flutter 3.x",
  "Laravel (PHP)",
  "Flutter (Dart)",
  "MySQL",
  "Firebase",
  "HTML, CSS & JavaScript",
  "Web Socket",
  "Next.Js",
] as const;

export const whyChooseIntro =
  "Typical school ERPs stop at academics. Shule-Digital goes further — layering in SaaS billing, branded mobile apps, school websites, and communication tools so one codebase becomes a complete, revenue-ready business platform.";

export const whyChoose = [
  {
    icon: "building",
    title: "Complete Multi-School SaaS Platform",
    text: "Operate unlimited schools from one central Super Admin panel. Each school keeps its own data, staff, and day-to-day operations, so scaling never means juggling separate installations.",
  },
  {
    icon: "smartphone",
    title: "Dedicated Mobile Applications",
    text: "Students, parents, teachers, and staff each get purpose-built Flutter apps, keeping attendance, homework, and fee payments one tap away instead of buried in spreadsheets.",
  },
  {
    icon: "credit-card",
    title: "Subscription & Billing Automation",
    text: "Define plans, automate renewals, and issue invoices with the built-in SaaS billing engine — recurring revenue keeps flowing without manual follow-up every month.",
  },
  {
    icon: "bus",
    title: "Transportation Management",
    text: "Manage vehicles and routes, record transport attendance, and let parents follow the school bus live from the mobile app for added peace of mind.",
  },
  {
    icon: "bar-chart",
    title: "Advanced Reporting & Analytics",
    text: "Attendance, academics, finance, and subscription health are surfaced through detailed dashboards, so every decision — yours and each school admin's — is backed by real data.",
  },
  {
    icon: "palette",
    title: "White Label Ready",
    text: "Rebrand the domain, themes, colors, and email templates freely. The platform is designed to go live under your own company name from day one.",
  },
] as const;

export const featureGallery = [
  { icon: "video", title: "Online Classes Integration" },
  { icon: "book", title: "Subject & Timetable Management" },
  { icon: "message", title: "Student & Teacher Chats" },
  { icon: "megaphone", title: "School Noticeboard" },
  { icon: "file-check", title: "Assignments & Online Exams" },
  { icon: "award", title: "Exam Results & Certificates" },
  { icon: "bus", title: "Transportation & Live Tracking" },
  { icon: "image", title: "Photo Gallery & Events" },
  { icon: "bell", title: "Smart Push Notifications" },
  { icon: "calendar", title: "Events & Holiday Calendar" },
  { icon: "wallet", title: "Fees & Manual Payments" },
  { icon: "user-check", title: "Staff & Payroll Management" },
] as const;

export const revenueIntro =
  "One installation can power several income streams from the moment your first school goes live.";

export const revenueStreams = [
  {
    title: "Subscription Plans",
    text: "Sell flexible monthly and annual plans matched to each school's size. Recurring billing delivers predictable income, while annual commitments strengthen cash flow.",
  },
  {
    title: "Student & Staff-Based Pricing",
    text: "Price by active student and staff counts so revenue grows naturally as institutions expand — without changing the core subscription model.",
  },
  {
    title: "Premium Feature Add-ons",
    text: "Monetize optional modules such as live bus tracking, chat, website management, and advanced reporting as paid add-ons tailored to each school.",
  },
  {
    title: "Setup & Onboarding Services",
    text: "Charge for installation, data migration, staff training, and onboarding support — turning implementation work into a revenue line of its own.",
  },
] as const;

export type LicenseKey = "regular" | "extended";

export const licenses = [
  {
    key: "regular" as LicenseKey,
    name: "Regular License",
    oldPrice: 11499,
    price: 9999,
    description: "Full source code with everything you need to build your project.",
  },
  {
    key: "extended" as LicenseKey,
    name: "Extended License",
    oldPrice: null,
    price: 129999,
    description: "Full source code with complete setup, configuration, and live deployment.",
  },
];

export const licenseComparison: {
  feature: string;
  regular: boolean;
  extended: boolean;
}[] = [
  { feature: "Lifetime License Validity & FREE Update", regular: true, extended: true },
  { feature: "Permitted for 1 Domain", regular: true, extended: true },
  { feature: "6 Months of Basic Support (Guidance Only)", regular: true, extended: true },
  { feature: "All Premium Features", regular: true, extended: true },
  { feature: "For Personal Project", regular: true, extended: true },
  {
    feature:
      "Ready-to-Launch Configuration (Android, iOS, Web & Admin Panel (If Applicable))",
    regular: false,
    extended: true,
  },
  { feature: "6 Months of Dedicated Support", regular: false, extended: true },
];

export const installationPlans = [
  { key: "none", label: "No Installation Service", price: 0 },
  { key: "backend", label: "Backend Installation (Panel + API)", price: 3999 },
  { key: "full", label: "Full Setup (Backend + Apps Publishing)", price: 7999 },
] as const;

export const addons = [
  {
    key: "dedicated-app",
    name: "Dedicated Application for Schools - Shule-Digital Add-on",
    price: 1499,
  },
];

export const launchPills = [
  "Ready-to-Launch Setup",
  "Support Beyond Launch",
  "Faster Time to Market",
] as const;

export const partnerSchools = [
  { name: "Crestwood Academy", color: "#0e7490" },
  { name: "Greenfield Public School", color: "#15803d" },
  { name: "Sunrise International", color: "#b45309" },
  { name: "Maple Leaf High", color: "#7c3aed" },
] as const;

export const faqs = [
  {
    q: "What are the server requirements for running Shule-Digital?",
    a: "The Laravel backend runs on any standard LAMP stack (Linux, Apache/Nginx, MySQL 5.7+, PHP 8.1+). A VPS with 2 vCPU and 4 GB RAM comfortably handles dozens of active schools, and the setup guide covers deployment step by step.",
  },
  {
    q: "Is the source code fully open and customizable?",
    a: "Yes. Both licenses ship the complete, unencrypted source code for the Laravel admin panel, the Next.js school websites, and the Flutter mobile apps, so you can rebrand and extend anything.",
  },
  {
    q: "Which payment gateways are supported out of the box?",
    a: "M-Pesa (via Flutterwave), Stripe, Flutterwave, and Paystack are pre-integrated for subscription billing, and manual offline payment methods can be enabled per school from the admin panel.",
  },
  {
    q: "What is the difference between the Regular and Extended licenses?",
    a: "Both include lifetime updates and all premium features. The Extended license adds ready-to-launch configuration across Android, iOS, web, and the admin panel, plus six months of dedicated hands-on support.",
  },
  {
    q: "Do you help with app store publishing?",
    a: "Extended license buyers receive assistance with Google Play and App Store publishing, including build configuration, signing, and store listing guidance.",
  },
] as const;

export const changelogs = [
  {
    version: "v2.1.0",
    date: "Recently Updated",
    tag: "Latest",
    items: [
      "New: QR Code Attendance with punch-in / punch-out sessions",
      "New: WhatsApp Cloud API integration for school notifications",
      "New: Student leave management and manual fee approval flows",
      "Improved: Live bus tracking accuracy and route assignment",
    ],
  },
  {
    version: "v2.0.0",
    date: "Previous release",
    tag: "Major",
    items: [
      "Multi-tenant architecture upgrade for unlimited schools",
      "Subscription billing engine with automated renewals and invoices",
      "White-label website themes for every school",
    ],
  },
  {
    version: "v1.0.0",
    date: "Initial release",
    tag: "Stable",
    items: [
      "Laravel admin panel with Super Admin and School Admin roles",
      "Flutter apps for students, parents, teachers, and staff",
      "Academics, fees, transport, and reporting modules",
    ],
  },
] as const;

export const reviewsData = [
  {
    name: "Rahul Deshmukh",
    initials: "RD",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent code quality and well-organized documentation. The multi-school setup works exactly as described and the Flutter apps built on the first try. Support responded quickly whenever I had a question.",
  },
] as const;

export const commentsData = [
  {
    name: "Priya Nair",
    initials: "PN",
    date: "5 days ago",
    text: "Does the SaaS billing module support trials for new schools?",
    reply: {
      name: "WRTeam Support",
      initials: "WR",
      date: "4 days ago",
      text: "Yes — you can configure free-trial days per plan from the Super Admin panel, and schools are notified before the trial ends.",
    },
  },
  {
    name: "Daniel Okafor",
    initials: "DO",
    date: "1 week ago",
    text: "Flutterwave and Paystack both worked in my test environment. Looking forward to the next update!",
    reply: null,
  },
] as const;

/** Format an amount in Kenyan Shillings, e.g. "KSh 9,999". */
export const formatKSH = (n: number) =>
  `KSh ${new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n)}`;
