"use client";

import { QRCodeSVG } from "qrcode.react";
import { ArrowUpRight } from "lucide-react";
import { demoLinks, demoQrs } from "@/lib/product-data";
import { cn } from "@/lib/utils";

export function DemoSection() {
  return (
    <section aria-labelledby="demo-heading" className="scroll-mt-36">
      <h2
        id="demo-heading"
        className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-[26px]"
      >
        Try our Shule-Digital demo
      </h2>

      <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
        {demoQrs.map((qr) => (
          <a
            key={qr.id}
            href={qr.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${qr.title} ${qr.platform} demo QR`}
            className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
          >
            <span className="rounded-lg bg-white p-2 shadow-sm ring-1 ring-slate-100">
              <QRCodeSVG value={qr.url} size={104} bgColor="#ffffff" fgColor="#0f172a" />
            </span>
            <span className="font-bold text-slate-900 group-hover:text-blue-600">
              {qr.title}
            </span>
            <span className="-mt-2 text-xs font-medium text-slate-500">{qr.platform}</span>
          </a>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {demoLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-1 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700",
              "transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            )}
          >
            {link.label}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
