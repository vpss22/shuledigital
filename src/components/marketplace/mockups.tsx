"use client";

import { cn } from "@/lib/utils";

/**
 * Pure-CSS phone mockup used inside hero and promo banners.
 * Variants change the body content to simulate different app screens.
 */
export function PhoneMockup({
  variant = "dashboard",
  className,
}: {
  variant?: "dashboard" | "attendance" | "chat" | "qr";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[340px] w-[172px] shrink-0 flex-col overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-white shadow-2xl",
        className
      )}
      aria-hidden="true"
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-1.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-slate-900" />
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 pb-1 pt-2 text-[7px] font-semibold text-slate-500">
        <span>11:38</span>
        <span className="flex items-center gap-0.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
          <span className="inline-block h-1.5 w-2 rounded-[1px] bg-slate-400" />
        </span>
      </div>

      {variant === "dashboard" && (
        <>
          <div className="mx-3 mt-1 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-500 p-2.5 text-white">
            <p className="text-[8px] font-medium opacity-90">Welcome back</p>
            <p className="text-[10px] font-bold">Student Dashboard</p>
          </div>
          <div className="grid grid-cols-3 gap-1.5 px-3 pt-2">
            {["Attendance", "Homework", "Fees", "Exams", "Events", "Library"].map(
              (item) => (
                <div
                  key={item}
                  className="flex flex-col items-center gap-1 rounded-lg bg-teal-50 p-1.5"
                >
                  <span className="h-3.5 w-3.5 rounded-full bg-teal-500/80" />
                  <span className="text-center text-[5.5px] font-semibold leading-tight text-slate-600">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
          <div className="mx-3 mt-2 rounded-xl border border-slate-100 p-2 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[7px] font-bold text-slate-700">My Subjects</p>
              <span className="text-[6px] text-teal-600">See all</span>
            </div>
            {["Mathematics", "Science", "English"].map((s, i) => (
              <div key={s} className="mt-1.5 flex items-center gap-1.5">
                <span
                  className={cn(
                    "h-4 w-4 rounded-md",
                    i === 0 ? "bg-teal-500/80" : i === 1 ? "bg-amber-400/80" : "bg-sky-400/80"
                  )}
                />
                <span className="flex-1 text-[6.5px] font-medium text-slate-600">{s}</span>
                <span className="text-[6px] text-slate-400">98%</span>
              </div>
            ))}
          </div>
        </>
      )}

      {variant === "attendance" && (
        <>
          <div className="flex items-center gap-1.5 px-3 pt-1">
            <span className="text-[9px] text-slate-700">←</span>
            <p className="text-[8px] font-bold text-slate-700">Attendance History</p>
          </div>
          <div className="mx-3 mt-2 flex items-center justify-between rounded-lg bg-slate-100 px-2 py-1">
            <span className="text-[7px] font-semibold text-slate-600">August 2026</span>
            <span className="text-[7px] text-slate-500">›</span>
          </div>
          <div className="mx-3 mt-1.5 grid grid-cols-4 rounded-lg border border-slate-100 py-1.5 text-center">
            {[
              { n: "1", l: "Present", c: "text-emerald-500" },
              { n: "0", l: "Half Days", c: "text-amber-500" },
              { n: "14", l: "Absent", c: "text-rose-500" },
              { n: "0", l: "Holidays", c: "text-slate-500" },
            ].map((s) => (
              <div key={s.l}>
                <p className={cn("text-[9px] font-bold", s.c)}>{s.n}</p>
                <p className="text-[4.5px] text-slate-500">{s.l}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 space-y-1.5 px-3">
            {[
              { d: "31", w: "Mon", tag: "Present", tc: "bg-emerald-100 text-emerald-600" },
              { d: "30", w: "Sun", tag: "Absent", tc: "bg-rose-100 text-rose-500" },
              { d: "29", w: "Sat", tag: "Absent", tc: "bg-rose-100 text-rose-500" },
            ].map((r) => (
              <div
                key={r.d}
                className="flex items-center gap-1.5 rounded-lg border border-slate-100 px-2 py-1.5"
              >
                <div className="text-center">
                  <p className="text-[7px] font-bold text-slate-700">{r.d}</p>
                  <p className="text-[5px] text-slate-400">{r.w}</p>
                </div>
                <div className="flex-1">
                  <p className="text-[5.5px] font-semibold text-slate-600">Full Day</p>
                  <p className="text-[5px] text-slate-400">Session 1 completed</p>
                </div>
                <span className={cn("rounded px-1 py-0.5 text-[5px] font-bold", r.tc)}>
                  {r.tag}
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {variant === "qr" && (
        <>
          <div className="flex items-center gap-1.5 px-3 pt-1">
            <span className="text-[9px] text-slate-700">←</span>
            <p className="text-[8px] font-bold text-slate-700">QR Attendance</p>
          </div>
          <div className="mx-3 mt-2 rounded-xl border border-slate-100 p-2 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[7px] font-semibold text-slate-600">10 Sep 2026</p>
              <span className="rounded bg-sky-100 px-1 py-0.5 text-[5px] font-bold text-sky-600">
                Off Duty
              </span>
            </div>
            <p className="mt-1 text-[5.5px] text-slate-400">Worked today</p>
            <p className="text-[13px] font-extrabold text-slate-800">05h 01m</p>
            <div className="mt-1.5 flex justify-between border-t border-slate-100 pt-1.5 text-[5.5px]">
              <div>
                <p className="text-slate-400">Shift</p>
                <p className="font-bold text-slate-700">Day</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400">School Hours</p>
                <p className="font-bold text-slate-700">8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
          <div className="mx-3 mt-2 flex items-center justify-between rounded-lg bg-slate-100 px-2 py-1.5">
            <p className="text-[6.5px] font-bold text-slate-600">Today&apos;s Sessions</p>
            <p className="text-[6px] text-teal-600">View Scan Log</p>
          </div>
          <div className="mx-3 mt-1.5 flex items-center gap-1.5 rounded-lg border border-slate-100 px-2 py-1.5">
            <span className="h-3 w-3 rounded-full bg-teal-500/70" />
            <p className="text-[6px] font-semibold text-slate-600">08:00 AM → 01:01 PM</p>
          </div>
          <div className="mt-auto px-3 pb-3">
            <div className="flex items-center justify-center gap-1 rounded-lg bg-teal-800 py-2 text-[7px] font-bold text-white">
              <span>▣</span> Scan to Punch In
            </div>
          </div>
        </>
      )}

      {variant === "chat" && (
        <>
          <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 pb-1.5 pt-1">
            <span className="text-[9px] text-slate-700">←</span>
            <span className="h-4 w-4 rounded-full bg-teal-500/80" />
            <div>
              <p className="text-[7px] font-bold text-slate-700">Class Teacher</p>
              <p className="text-[5px] text-emerald-500">● Online</p>
            </div>
          </div>
          <div className="flex-1 space-y-1.5 px-3 pt-2">
            <div className="max-w-[70%] rounded-xl rounded-bl-sm bg-slate-100 px-2 py-1.5 text-[6.5px] text-slate-600">
              Hello! The science fair starts at 10 AM tomorrow.
            </div>
            <div className="ml-auto max-w-[70%] rounded-xl rounded-br-sm bg-teal-600 px-2 py-1.5 text-[6.5px] text-white">
              Thank you for the update!
            </div>
            <div className="max-w-[70%] rounded-xl rounded-bl-sm bg-slate-100 px-2 py-1.5 text-[6.5px] text-slate-600">
              Please carry your project chart.
            </div>
            <div className="ml-auto max-w-[70%] rounded-xl rounded-br-sm bg-teal-600 px-2 py-1.5 text-[6.5px] text-white">
              Sure, noted. 👍
            </div>
          </div>
          <div className="flex items-center gap-1 px-3 pb-3 pt-1">
            <div className="h-4 flex-1 rounded-full bg-slate-100" />
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-teal-600 text-[6px] text-white">
              ➤
            </span>
          </div>
        </>
      )}

      {/* Home indicator */}
      <div className="mx-auto mb-1.5 mt-auto h-1 w-14 rounded-full bg-slate-300" />
    </div>
  );
}

/** Pure-CSS admin dashboard mockup used in the hero banner. */
export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[280px] w-[420px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl",
        className
      )}
      aria-hidden="true"
    >
      {/* Sidebar */}
      <div className="w-24 shrink-0 border-r border-slate-100 bg-slate-50/80 p-2.5">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-4 w-4 rounded-md bg-teal-600" />
          <span className="h-1.5 w-10 rounded bg-slate-300" />
        </div>
        {[
          "Dashboard",
          "Students",
          "Teachers",
          "Attendance",
          "Fees",
          "Exams",
          "Transport",
          "Reports",
        ].map((item, i) => (
          <div
            key={item}
            className={cn(
              "mb-1 flex items-center gap-1.5 rounded-md px-1.5 py-1",
              i === 0 && "bg-teal-100"
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-sm",
                i === 0 ? "bg-teal-600" : "bg-slate-300"
              )}
            />
            <span
              className={cn(
                "text-[6px] font-medium",
                i === 0 ? "text-teal-800" : "text-slate-400"
              )}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
      {/* Main */}
      <div className="flex-1 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="h-2 w-20 rounded bg-slate-200" />
          <div className="flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-amber-300" />
            <span className="h-4 w-4 rounded-full bg-teal-200" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { label: "Students", v: "1,284", c: "bg-teal-500/15 text-teal-700" },
            { label: "Teachers", v: "86", c: "bg-amber-500/15 text-amber-700" },
            { label: "Revenue", v: "KSh 9.2M", c: "bg-emerald-500/15 text-emerald-700" },
            { label: "Schools", v: "12", c: "bg-sky-500/15 text-sky-700" },
          ].map((s) => (
            <div key={s.label} className={cn("rounded-lg p-1.5", s.c)}>
              <p className="text-[5.5px] font-medium opacity-80">{s.label}</p>
              <p className="text-[9px] font-extrabold">{s.v}</p>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="mt-2 rounded-lg border border-slate-100 p-2">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="h-1.5 w-14 rounded bg-slate-200" />
            <span className="h-1.5 w-8 rounded bg-slate-100" />
          </div>
          <div className="flex h-16 items-end gap-1">
            {[38, 55, 42, 70, 58, 82, 64, 90, 72, 60, 84, 68].map((h, i) => (
              <div
                key={i}
                className={cn(
                  "flex-1 rounded-t",
                  i % 3 === 1 ? "bg-teal-500/80" : "bg-teal-200"
                )}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        {/* Table rows */}
        <div className="mt-2 space-y-1">
          {[0, 1, 2].map((r) => (
            <div key={r} className="flex items-center gap-2 rounded-md bg-slate-50 px-2 py-1">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-1.5 w-16 rounded bg-slate-200" />
              <span className="ml-auto h-1.5 w-8 rounded bg-teal-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
