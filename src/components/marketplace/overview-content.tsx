"use client";

import {
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  Bus,
  CalendarDays,
  Check,
  CreditCard,
  ExternalLink,
  FileCheck2,
  Image as ImageIcon,
  Megaphone,
  MessageSquare,
  Palette,
  Rocket,
  Smartphone,
  Sparkles,
  UserCheck,
  Video,
  Wallet,
  Zap,
} from "lucide-react";
import {
  featureGallery,
  launchPills,
  licenseComparison,
  overviewParagraphs,
  partnerSchools,
  revenueIntro,
  revenueStreams,
  techStack,
  techStackNote,
  whyChoose,
  whyChooseIntro,
} from "@/lib/product-data";
import { cn } from "@/lib/utils";
import { PhoneMockup } from "./mockups";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  building: Building2,
  smartphone: Smartphone,
  "credit-card": CreditCard,
  bus: Bus,
  "bar-chart": BarChart3,
  palette: Palette,
  video: Video,
  book: BookOpen,
  message: MessageSquare,
  megaphone: Megaphone,
  "file-check": FileCheck2,
  award: Award,
  image: ImageIcon,
  bell: Bell,
  calendar: CalendarDays,
  wallet: Wallet,
  "user-check": UserCheck,
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-[26px]">
      {children}
    </h2>
  );
}

function NewUpdateRibbon() {
  return (
    <span className="absolute -top-0.5 right-6 z-10 rounded-b-md bg-red-600 px-3 py-2 text-[11px] font-extrabold uppercase leading-tight text-white shadow-lg">
      New
      <br />
      Update
    </span>
  );
}

/* ------------------------------ Overview text ----------------------------- */

export function OverviewIntro() {
  return (
    <section aria-labelledby="overview-heading" className="scroll-mt-36">
      <SectionHeading>Shule-Digital: Multi-School Management System</SectionHeading>
      <div className="mt-4 space-y-4">
        {overviewParagraphs.map((p) => (
          <p key={p.slice(0, 24)} className="leading-relaxed text-slate-600">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- Demo credentials --------------------------- */

export function CredentialsSection() {
  return (
    <section aria-labelledby="credentials-heading" className="scroll-mt-36">
      <SectionHeading>Demo Credentials</SectionHeading>
      <p className="mt-2 text-sm text-slate-500">
        * Create your own user account for a better user experience.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Admin Panel",
            url: "https://demo.shule-digital.example/admin",
            emailLabel: "Email",
            email: "superadmin@gmail.com",
            password: "superadmin",
            accent: "bg-blue-600",
          },
          {
            title: "Student/Parent App",
            url: "https://demo.shule-digital.example/student",
            emailLabel: "Email (Parent)",
            email: "AmberMWayt@gustr.com",
            password: "8200727077",
            accent: "bg-emerald-600",
          },
          {
            title: "Staff/Teacher App",
            url: "https://demo.shule-digital.example/staff",
            emailLabel: "Email",
            email: "teacher@gmail.com",
            password: "0111111111",
            accent: "bg-amber-500",
          },
        ].map((cred) => (
          <div
            key={cred.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-base font-bold text-slate-900">
                <span className={cn("h-2.5 w-2.5 rounded-full", cred.accent)} aria-hidden="true" />
                {cred.title}
              </h3>
              <a
                href={cred.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${cred.title} demo`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-blue-300 hover:text-blue-600"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-2">
                <dt className="text-slate-500">{cred.emailLabel}</dt>
                <dd className="truncate font-semibold text-slate-800">{cred.email}</dd>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-2">
                <dt className="text-slate-500">Password</dt>
                <dd className="font-semibold text-slate-800">{cred.password}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- Tech stack ------------------------------ */

export function TechStackSection() {
  return (
    <section aria-labelledby="stack-heading" className="scroll-mt-36">
      <SectionHeading>Tech Stack Behind Shule-Digital</SectionHeading>
      <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{techStackNote}</p>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/60 p-6">
        <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-slate-400">
          Tech Stack
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------- Why choose ------------------------------- */

export function WhyChooseSection() {
  return (
    <section aria-labelledby="why-heading" className="scroll-mt-36">
      <SectionHeading>Why Choose Shule-Digital?</SectionHeading>
      <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{whyChooseIntro}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyChoose.map((item) => {
          const Icon = iconMap[item.icon] ?? Sparkles;
          return (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-5.5 w-5.5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold leading-snug text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------ Promo banners ------------------------------ */

export function PromoBanners() {
  return (
    <section aria-label="Feature highlights" className="space-y-6">
      {/* New feature banner */}
      <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(115deg,#0d9f6e_0%,#2fd08d_55%,#16a34a_100%)] px-6 py-10 sm:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-xl"
        />
        <div className="relative flex flex-col items-center gap-6 text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white shadow-inner ring-1 ring-white/30">
            <Rocket className="h-8 w-8" aria-hidden="true" />
          </span>
          <div>
            <p className="flex items-center justify-center gap-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
              <Zap className="h-9 w-9 fill-amber-300 text-amber-300" aria-hidden="true" />
              New
              <span className="rounded-xl bg-slate-900/85 px-3 py-1 text-2xl sm:text-3xl">
                Feature
              </span>
            </p>
            <p className="mt-3 text-xl font-bold text-white sm:text-2xl">
              For Smarter <span className="text-slate-900">School</span> Management
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp integration banner */}
      <div className="relative overflow-hidden rounded-2xl bg-[#14425c] px-6 py-10 sm:px-12">
        <NewUpdateRibbon />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald-400/10 blur-xl"
        />
        <div className="relative max-w-2xl">
          <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="text-emerald-400">WhatsApp</span>{" "}
            <span className="text-white">Integration</span>
          </p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-blue-100/90">
            Keep parents and staff in the loop by delivering school updates and alerts straight
            to their WhatsApp — powered by the official Cloud API.
          </p>
          <div className="mt-5 flex gap-3" aria-hidden="true">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-2xl ring-1 ring-emerald-400/30">
              💬
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-2xl ring-1 ring-emerald-400/30">
              📢
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-2xl ring-1 ring-emerald-400/30">
              ✅
            </span>
          </div>
        </div>
      </div>

      {/* QR attendance banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-6 py-10 ring-1 ring-slate-200 sm:px-12">
        <NewUpdateRibbon />
        <div className="relative grid items-center gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span className="text-emerald-500">QR Code</span>{" "}
              <span className="text-slate-800">Attendance</span>
            </p>
            <p className="mt-3 max-w-md text-lg leading-relaxed text-slate-600">
              Staff can punch in with a quick scan, while working hours, shifts, and sessions
              are logged automatically.
            </p>
            <ul className="mt-4 space-y-2 text-sm font-medium text-slate-700">
              {[
                "Session-wise scan log",
                "Shift & school-hours aware",
                "Monthly attendance summary",
              ].map((li) => (
                <li key={li} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 flex items-center justify-center gap-5 lg:order-2" aria-hidden="true">
            <PhoneMockup variant="qr" className="rotate-[-4deg]" />
            <PhoneMockup variant="attendance" className="hidden rotate-[5deg] sm:flex" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Feature gallery ---------------------------- */

export function FeatureGallery() {
  return (
    <section aria-label="All features">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {featureGallery.map((f) => {
          const Icon = iconMap[f.icon] ?? Sparkles;
          return (
            <div
              key={f.title}
              className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold leading-snug text-slate-800">{f.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------ Revenue streams ---------------------------- */

export function RevenueSection() {
  return (
    <section aria-labelledby="revenue-heading" className="scroll-mt-36">
      <SectionHeading>How to Generate Revenue with Your School Management SaaS</SectionHeading>
      <p className="mt-3 leading-relaxed text-slate-600">{revenueIntro}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {revenueStreams.map((s, i) => (
          <article
            key={s.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
            </div>
            <hr className="my-3 border-slate-100" />
            <p className="text-sm leading-relaxed text-slate-600">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- License comparison ---------------------------- */

export function LicenseTableSection() {
  return (
    <section aria-labelledby="license-heading" className="scroll-mt-36">
      <SectionHeading>
        Choose the Perfect Plan for Your Unique Needs (License)
      </SectionHeading>
      <p className="mt-3 leading-relaxed text-slate-600">
        Compare what each license includes and pick the one that matches how far you want to
        take your launch.
      </p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
        <table className="w-full min-w-[560px] border-collapse bg-white text-left text-sm">
          <thead>
            <tr className="bg-slate-50 text-slate-900">
              <th scope="col" className="px-5 py-3.5 font-bold">
                Feature
              </th>
              <th scope="col" className="w-40 px-5 py-3.5 text-center font-bold">
                Regular License
              </th>
              <th scope="col" className="w-40 px-5 py-3.5 text-center font-bold">
                Extended License
              </th>
            </tr>
          </thead>
          <tbody>
            {licenseComparison.map((row) => (
              <tr key={row.feature} className="border-t border-slate-100">
                <th scope="row" className="px-5 py-3.5 font-medium text-slate-700">
                  {row.feature}
                </th>
                {[row.regular, row.extended].map((yes, idx) => (
                  <td key={idx} className="px-5 py-3.5 text-center">
                    {yes ? (
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                    ) : (
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                        ✕
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ------------------------------ Real businesses ---------------------------- */

export function BusinessesSection() {
  return (
    <section aria-labelledby="business-heading" className="scroll-mt-36">
      <SectionHeading>Real Businesses Powered by Shule-Digital</SectionHeading>
      <p className="mt-3 leading-relaxed text-slate-600">
        Schools and education groups around the world run their day-to-day operations on the
        platform — explore a few of them below.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {partnerSchools.map((school) => (
          <a
            key={school.name}
            href="#"
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div
              className="flex h-24 items-center justify-center text-white"
              style={{ backgroundColor: school.color }}
              aria-hidden="true"
            >
              <span className="text-2xl font-extrabold tracking-wide">
                {school.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </span>
            </div>
            <div className="flex items-center justify-between p-4">
              <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600">
                {school.name}
              </p>
              <ExternalLink className="h-4 w-4 text-slate-400" aria-hidden="true" />
            </div>
          </a>
        ))}
      </div>

      <p className="mt-5 text-sm text-slate-600">
        Want your school featured here?{" "}
        <a href="#" className="font-semibold text-blue-600 hover:underline">
          Multi-School Management
        </a>
      </p>
    </section>
  );
}

/* ------------------------------- Launch banner ----------------------------- */

export function LaunchBanner() {
  return (
    <section aria-labelledby="launch-heading">
      <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(120deg,#2563eb,#3b82f6_60%,#2563eb)] px-6 py-10 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-xl"
        />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/85 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
          <Sparkles className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
          Extended License Exclusive
        </span>
        <h2
          id="launch-heading"
          className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-4xl"
        >
          Launch Faster with FREE Setup Assistance
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-blue-100">
          Extended license buyers receive complimentary backend deployment and domain/server
          configuration handled by our engineering support desk.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {launchPills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm"
            >
              <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
