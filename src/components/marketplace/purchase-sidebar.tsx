"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Check, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  formatKSH,
  addons,
  installationPlans,
  licenses,
  type LicenseKey,
} from "@/lib/product-data";
import { cn } from "@/lib/utils";

export function PurchaseSidebar() {
  const { toast } = useToast();
  const [license, setLicense] = useState<LicenseKey>("regular");
  const [installation, setInstallation] = useState<string>("none");
  const [addonKeys, setAddonKeys] = useState<string[]>([]);

  const selectedLicense = licenses.find((l) => l.key === license)!;
  const selectedInstallation =
    installationPlans.find((p) => p.key === installation) ?? installationPlans[0];

  const orderTotal = useMemo(() => {
    let total = selectedLicense.price + selectedInstallation.price;
    for (const addon of addons) {
      if (addonKeys.includes(addon.key)) total += addon.price;
    }
    return total;
  }, [selectedLicense, selectedInstallation, addonKeys]);

  const toggleAddon = (key: string) => {
    setAddonKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const cartLines = useMemo(() => {
    const lines = [selectedLicense.name];
    if (selectedInstallation.price > 0) lines.push(selectedInstallation.label);
    addons.forEach((a) => {
      if (addonKeys.includes(a.key)) lines.push(a.name);
    });
    return lines;
  }, [selectedLicense, selectedInstallation, addonKeys]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart 🛒",
      description: `${cartLines.join(" + ")} — ${formatKSH(orderTotal)}`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Redirecting to secure checkout…",
      description: `Order total: ${formatKSH(orderTotal)} (Card / M-Pesa / Stripe / Flutterwave)`,
    });
  };

  return (
    <aside aria-label="Purchase options" className="space-y-5">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {/* License method */}
        <div className="p-5 pb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[17px] font-bold text-slate-900">Choose License Method</h2>
            <a
              href="#license-heading"
              className="inline-flex items-center gap-0.5 text-sm font-semibold text-blue-600 hover:underline"
            >
              See Difference
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div role="radiogroup" aria-label="License method" className="mt-4 space-y-3">
            {licenses.map((l) => {
              const checked = license === l.key;
              return (
                <label
                  key={l.key}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all",
                    checked
                      ? "border-blue-600 bg-blue-50/70 ring-1 ring-blue-600"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  )}
                >
                  <input
                    type="radio"
                    name="license"
                    value={l.key}
                    checked={checked}
                    onChange={() => setLicense(l.key)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
                      checked ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300"
                    )}
                  >
                    {checked && <Check className="h-3 w-3" strokeWidth={3.5} />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-2">
                      <span className="font-bold text-slate-900">{l.name}</span>
                      <span className="whitespace-nowrap text-right">
                        {l.oldPrice && (
                          <span className="mr-1.5 text-sm text-slate-400 line-through">
                            {formatKSH(l.oldPrice)}
                          </span>
                        )}
                        <span className="text-lg font-extrabold text-blue-600">
                          {formatKSH(l.price)}
                        </span>
                      </span>
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                      {l.description}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Installation plans */}
        <div className="p-5 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
            <h2 className="text-[17px] font-bold text-slate-900">Choose Installation Plans</h2>
            <a
              href="#"
              className="inline-flex shrink-0 items-center gap-0.5 text-sm font-semibold text-blue-600 hover:underline"
            >
              See Plans
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <Select value={installation} onValueChange={setInstallation}>
            <SelectTrigger className="mt-4 h-11 w-full rounded-lg border-slate-200 text-[15px]">
              <SelectValue placeholder="Select installation plan" />
            </SelectTrigger>
            <SelectContent>
              {installationPlans.map((plan) => (
                <SelectItem key={plan.key} value={plan.key}>
                  {plan.label}
                  {plan.price > 0 && (
                    <span className="ml-1 font-semibold text-slate-500">
                      +{formatKSH(plan.price)}
                    </span>
                  )}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <hr className="border-slate-100" />

        {/* Add-ons */}
        <div className="p-5 pb-4">
          <h2 className="text-[17px] font-bold text-slate-900">Available Add-on</h2>
          <div className="mt-4 space-y-3">
            {addons.map((addon) => {
              const checked = addonKeys.includes(addon.key);
              return (
                <label
                  key={addon.key}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all",
                    checked
                      ? "border-blue-600 bg-blue-50/70 ring-1 ring-blue-600"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  )}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleAddon(addon.key)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
                      checked ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300"
                    )}
                  >
                    {checked ? (
                      <Check className="h-3 w-3" strokeWidth={3.5} />
                    ) : null}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-2">
                      <span className="text-[15px] font-bold leading-snug text-slate-900">
                        {addon.name}
                      </span>
                      <span className="whitespace-nowrap text-lg font-extrabold text-slate-900">
                        {formatKSH(addon.price)}
                      </span>
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Order summary */}
        <div className="border-t border-slate-100 bg-white p-5">
          {cartLines.length > 1 && (
            <ul className="mb-3 space-y-1.5 text-sm text-slate-500">
              {cartLines.map((line) => (
                <li key={line} className="flex items-start gap-1.5">
                  <X className="mt-1 h-3 w-3 shrink-0" aria-hidden="true" />
                  <span className="leading-snug">{line}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-slate-900">Order Total:</p>
            <p className="text-2xl font-extrabold text-blue-600">{formatKSH(orderTotal)}</p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={handleAddToCart}
              className="h-11 gap-2 rounded-lg border-slate-300 font-semibold text-slate-800 hover:bg-slate-50"
            >
              <ShoppingCart className="h-4.5 w-4.5" aria-hidden="true" />
              Add to Cart
            </Button>
            <Button
              onClick={handleBuyNow}
              className="h-11 rounded-lg bg-blue-600 font-semibold text-white hover:bg-blue-700"
            >
              Buy Now
            </Button>
          </div>
          <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
            Secure Checkout processed via Card / M-Pesa / Stripe / Flutterwave
          </p>
        </div>
      </div>

      {/* Pre-sale contacts */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-extrabold text-slate-900">Have Pre Sale query?</h2>
        <div className="mt-4 space-y-3">
          {[
            { name: "Aarav Mehta", role: "Sales Advisor", initials: "AM", color: "bg-teal-600" },
            { name: "Nisha Patel", role: "Support Engineer", initials: "NP", color: "bg-violet-600" },
          ].map((person) => (
            <div
              key={person.name}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3"
            >
              <span
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white",
                  person.color
                )}
              >
                {person.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold text-slate-900">{person.name}</p>
                <p className="text-xs text-slate-500">{person.role}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href="#"
                  aria-label={`Call ${person.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors hover:bg-blue-100"
                >
                  📞
                </a>
                <a
                  href="#"
                  aria-label={`WhatsApp ${person.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors hover:bg-emerald-100"
                >
                  💬
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
