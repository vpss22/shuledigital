import Link from "next/link";
import { BadgeCheck, ChevronRight, Star } from "lucide-react";
import { product } from "@/lib/product-data";

export function TitleBlock() {
  return (
    <section className="border-b border-slate-200 bg-slate-50/80">
      <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 sm:py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-white px-3 py-2 text-sm shadow-sm ring-1 ring-slate-200">
            <li>
              <Link href="#" className="font-medium text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </li>
            <li>
              <Link href="#" className="font-medium text-blue-600 hover:underline">
                Products
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </li>
            <li aria-current="page" className="max-w-md truncate font-semibold text-slate-800">
              {product.breadcrumb}
            </li>
          </ol>
        </nav>

        <h1 className="max-w-4xl text-2xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-3xl lg:text-[34px]">
          {product.title}
        </h1>

        {/* Stats row */}
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-1.5 font-semibold text-amber-700 ring-1 ring-amber-200/70">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" aria-hidden="true" />
            {product.rating}
            <span className="font-normal text-amber-600/90">
              ({product.reviewsCount} Reviews)
            </span>
          </span>
          <span aria-hidden="true" className="text-slate-300">
            •
          </span>
          <span className="text-slate-600">
            <span className="font-bold text-slate-900">{product.marketplaceSales}</span> Sales
          </span>
          <span aria-hidden="true" className="text-slate-300">
            •
          </span>
          <span className="text-slate-600">
            <span className="font-bold text-slate-900">{product.codecanyonSales}</span> Sales On
            Marketplace
          </span>
          {product.recentlyUpdated && (
            <>
              <span aria-hidden="true" className="text-slate-300">
                •
              </span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800">
                <BadgeCheck className="h-5 w-5 fill-blue-600 text-white" aria-hidden="true" />
                Recently Updated
              </span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
