import Link from "next/link";
import { Download, Heart } from "lucide-react";

const footerColumns = [
  {
    heading: "Marketplace",
    links: ["Home", "Products", "Blogs", "Installation", "Exclusive License"],
  },
  {
    heading: "Support",
    links: ["Contact Us", "Help Center", "Documentation", "Corporate Web"],
  },
  {
    heading: "Terms & Policies",
    links: ["Privacy Policy", "Refund Policy", "License Terms", "Terms and Conditions"],
  },
];

function FooterBrandMark() {
  return (
    <span className="relative inline-flex h-10 w-12 items-end justify-center overflow-hidden rounded-md">
      <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-500" />
      <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-teal-400" />
      <span className="relative -mb-0.5 text-2xl font-black italic leading-none text-white drop-shadow-sm">
        W
      </span>
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 pb-8 pt-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <FooterBrandMark />
              <span className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tight text-slate-900">
                  WRTeam<span className="align-super text-[9px]">®</span>
                </span>
                <span className="text-[8px] font-semibold tracking-[0.22em] text-slate-400">
                  TRUSTED DIGITAL PARTNER
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-slate-500">
              WRTeam is a creative and dedicated team of developers with expertise in app and
              web development, committed to delivering high-quality solutions to clients
              worldwide.
            </p>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="mb-4 text-lg font-bold text-slate-900">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[15px] text-slate-600 transition-colors hover:text-blue-600"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-slate-600 sm:flex-row sm:px-6">
          <p>
            Copyright © 2026 All Rights Reserved &amp; Designed by{" "}
            <Heart className="inline h-3.5 w-3.5 fill-rose-500 text-rose-500" aria-hidden="true" />{" "}
            <Link href="#" className="font-semibold text-blue-600 underline underline-offset-2">
              WRTeam.
            </Link>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
            <p className="flex items-center gap-2 font-medium">
              <span aria-hidden="true">🌐</span> KES - KSh
            </p>
            <a
              href="/shule-digital-source.zip"
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Download Source Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
