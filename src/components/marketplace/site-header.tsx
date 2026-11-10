import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#" },
  { label: "Installation", href: "#" },
  { label: "Contact Us", href: "#" },
];

/** Colorful layered "W" brand mark drawn with CSS. */
function BrandMark() {
  return (
    <span className="relative inline-flex h-9 w-11 items-end justify-center overflow-hidden rounded-md">
      <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-500" />
      <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-teal-400" />
      <span className="relative -mb-0.5 text-2xl font-black italic leading-none text-white drop-shadow-sm">
        W
      </span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="ShuleDIgital home">
          <BrandMark />
          <span className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-slate-900">
              ShuleDIgital<span className="align-super text-[9px]">®</span>
            </span>
            <span className="text-[8px] font-semibold tracking-[0.22em] text-slate-400">
              TRUSTED DIGITAL PARTNER
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-4 py-2 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="h-10 gap-2 rounded-lg border-slate-200 px-4 font-medium text-slate-700 hover:bg-slate-50"
          >
            <CircleUserRound className="h-5 w-5" />
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
