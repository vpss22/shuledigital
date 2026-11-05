"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  CredentialsSection,
  BusinessesSection,
  FeatureGallery,
  LaunchBanner,
  LicenseTableSection,
  OverviewIntro,
  PromoBanners,
  RevenueSection,
  TechStackSection,
  WhyChooseSection,
} from "./overview-content";
import { DemoSection } from "./demo-section";
import {
  ChangelogsSection,
  CommentsSection,
  FaqsSection,
  ReviewsSection,
  SuggestionSection,
  SupportSection,
} from "./tab-sections";

const tabs = [
  { key: "overview", label: "Overview" },
  { key: "faqs", label: "FAQs" },
  { key: "reviews", label: "Reviews" },
  { key: "comments", label: "Comments" },
  { key: "suggestion", label: "Suggestion" },
  { key: "support", label: "Support" },
  { key: "changelogs", label: "Change Logs" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

function OverviewContent() {
  return (
    <div className="space-y-12">
      <OverviewIntro />
      <DemoSection />
      <CredentialsSection />
      <TechStackSection />
      <WhyChooseSection />
      <PromoBanners />
      <FeatureGallery />
      <RevenueSection />
      <LicenseTableSection />
      <BusinessesSection />
      <LaunchBanner />
    </div>
  );
}

export function ProductTabs() {
  const [active, setActive] = useState<TabKey>("overview");
  const toolbarRef = useRef<HTMLDivElement>(null);

  const handleTab = (key: TabKey) => {
    setActive(key);
    // Keep the toolbar in view after switching on long pages.
    toolbarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* Sticky tab bar */}
      <div
        ref={toolbarRef}
        role="tablist"
        aria-label="Product information tabs"
        className="sticky top-16 z-40 -mx-1 overflow-x-auto bg-white/95 px-1 py-1 shadow-[0_1px_0_0_#e2e8f0] backdrop-blur supports-[backdrop-filter]:bg-white/90"
      >
        <div className="flex min-w-max gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              type="button"
              aria-selected={active === tab.key}
              onClick={() => handleTab(tab.key)}
              className={cn(
                "relative whitespace-nowrap px-4 py-3.5 text-[15px] font-medium transition-colors focus-visible:outline-none",
                active === tab.key
                  ? "font-semibold text-blue-600 after:absolute after:inset-x-2 after:bottom-0 after:h-[3px] after:rounded-full after:bg-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab panels */}
      <div role="tabpanel" className="mt-8">
        {active === "overview" && <OverviewContent />}
        {active === "faqs" && <FaqsSection />}
        {active === "reviews" && <ReviewsSection />}
        {active === "comments" && <CommentsSection />}
        {active === "suggestion" && <SuggestionSection />}
        {active === "support" && <SupportSection />}
        {active === "changelogs" && <ChangelogsSection />}
      </div>
    </div>
  );
}
