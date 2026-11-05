import { SiteHeader } from "@/components/marketplace/site-header";
import { TitleBlock } from "@/components/marketplace/title-block";
import { HeroBanner } from "@/components/marketplace/hero-banner";
import { ProductTabs } from "@/components/marketplace/product-tabs";
import { PurchaseSidebar } from "@/components/marketplace/purchase-sidebar";
import { SiteFooter } from "@/components/marketplace/site-footer";
import { FloatingButtons } from "@/components/marketplace/floating-buttons";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <SiteHeader />

      <TitleBlock />

      <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
          {/* Left column: hero + tabbed content */}
          <div className="min-w-0">
            <HeroBanner />
            <div className="mt-6">
              <ProductTabs />
            </div>
          </div>

          {/* Right column: sticky purchase panel */}
          <div className="min-w-0">
            <div className="lg:sticky lg:top-[76px]">
              <PurchaseSidebar />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
      <FloatingButtons />
    </div>
  );
}
