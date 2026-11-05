"use client";

import { BookOpen, Eye, Images } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardMockup, PhoneMockup } from "./mockups";

const featurePills = [
  "Student/Parents App",
  "Teacher/Staff App",
  "Student Web",
  "School Web",
  "Landing Page",
  "Super Admin Panel",
  "School Admin Panel",
  "Teacher/Staff Panel",
];

const storePills = [
  { icon: "▶", label: "Google Play" },
  { icon: "", label: "App Store" },
  { icon: "⚡", label: "Flutter 3.0" },
  { icon: "◆", label: "Laravel 13" },
  { icon: "🔥", label: "Firebase" },
];

function NewRibbon() {
  return (
    <span className="absolute -left-1 top-8 z-10 rounded-r-md bg-red-600 px-1.5 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-white shadow-md">
      New
    </span>
  );
}

export function HeroBanner() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Banner artwork */}
      <div className="relative bg-[linear-gradient(120deg,#0b3c49_0%,#0f5c55_38%,#189b76_72%,#3fcf94_100%)] px-5 py-8 sm:px-10 sm:py-12">
        {/* Decorative blur circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-300/20 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-teal-200/10 blur-2xl"
        />

        {/* Elite author badge */}
        <div className="absolute right-5 top-5 z-10 hidden items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lg sm:flex">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-700 text-white">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-[10px] font-bold leading-tight text-slate-700">
            Developed By
            <br />
            <span className="text-teal-700">Elite Author</span>
          </span>
        </div>

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
          {/* Left: brand + pills */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-white shadow-lg">
                <span className="text-lg leading-none">🎓</span>
                <span className="mt-0.5 rounded bg-emerald-500 px-1 text-[6px] font-extrabold tracking-wider text-white">
                  SAAS
                </span>
              </span>
              <div>
                <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Shule-Digital
                </p>
                <p className="text-[11px] font-semibold tracking-[0.35em] text-emerald-200">
                  SAAS VERSION
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-2xl font-extrabold leading-tight text-white sm:text-[28px]">
              Revolutionizing Multiple School Management Systems
            </p>

            <div className="mt-5 flex max-w-lg flex-wrap gap-2">
              {featurePills.map((pill) => (
                <span
                  key={pill}
                  className="relative inline-flex items-center rounded-md bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow-md"
                >
                  {pill === "Student Web" && <NewRibbon />}
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {storePills.map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 rounded-md bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/10"
                >
                  <span aria-hidden="true">{pill.icon}</span>
                  {pill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: device mockups */}
          <div className="relative flex h-[300px] items-center justify-center sm:h-[340px]" aria-hidden="true">
            <DashboardMockup className="absolute left-0 top-2 hidden w-[380px] rotate-[-2deg] lg:block" />
            <PhoneMockup
              variant="dashboard"
              className="absolute right-2 top-0 rotate-[4deg] lg:right-16"
            />
            <PhoneMockup variant="qr" className="absolute bottom-0 right-0 hidden rotate-[-6deg] sm:flex" />
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 border-t border-slate-100 px-4 py-4">
        {[
          { icon: Eye, label: "Preview" },
          { icon: Images, label: "Screenshots" },
          { icon: BookOpen, label: "Documentation" },
        ].map((btn) => (
          <button
            key={btn.label}
            type="button"
            className={cn(
              "inline-flex items-center gap-2 rounded-lg bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-700",
              "transition-colors hover:bg-slate-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            )}
          >
            <btn.icon className="h-4 w-4" aria-hidden="true" />
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
