"use client";

import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { DigitalProduct } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shared/product-card";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

export interface FeaturedProductsFilterProps {
  products: DigitalProduct[];
  className?: string;
}

const TABS = [
  { label: "Top Bestsellers", value: "bestsellers" },
  { label: "React & Next.js", value: "React & Next.js Templates" },
  { label: "Figma UI Kits", value: "Figma UI Kits" },
  { label: "Admin Dashboards", value: "Admin Dashboard Templates" },
  { label: "All Templates", value: "all" },
];

export function FeaturedProductsFilter({ products, className = "" }: FeaturedProductsFilterProps) {
  const [activeTab, setActiveTab] = useState("bestsellers");

  const displayedProducts = useMemo(() => {
    if (activeTab === "bestsellers") {
      return products
        .slice()
        .sort((a, b) => b.salesCount - a.salesCount)
        .slice(0, 3);
    }
    if (activeTab === "all") {
      return products.slice(0, 6);
    }
    return products.filter((p) => p.category === activeTab).slice(0, 3);
  }, [products, activeTab]);

  return (
    <div className={`space-y-10 ${className}`}>
      {/* Category Tabs Selector Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E4E4E7] dark:border-white/[0.08] pb-6">
        <div
          role="tablist"
          aria-label="Filter featured products by category"
          className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none w-full sm:w-auto -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.value)}
                className={`shrink-0 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-300 select-none cursor-pointer ${
                  isActive
                    ? "bg-[#0A0A0A] text-white shadow-xs scale-[1.02] dark:bg-gradient-to-r dark:from-[#6366F1] dark:via-[#8B5CF6] dark:to-[#EC4899] dark:text-white dark:shadow-[0_0_20px_rgba(139,92,246,0.35),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                    : "border border-[#E4E4E7] bg-white text-[#52525B] hover:bg-zinc-50 hover:text-[#0A0A0A] hover:border-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-gradient-to-b dark:from-[#16161F] dark:to-[#101015] dark:text-[#A1A1AA] dark:hover:border-white/25 dark:hover:from-[#1C1C26] dark:hover:to-[#15151C] dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <Button
          href="/products"
          variant="outline"
          size="sm"
          className="hidden sm:inline-flex font-bold rounded-full px-5 text-xs shadow-xs"
          rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
        >
          View all {products.length}+ templates
        </Button>
      </div>

      {/* Products Grid with Single Observer */}
      <ScrollRevealContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProducts.map((product) => (
          <ScrollRevealItem
            key={product.id}
            animation="fade-up"
            className="flex flex-col h-full w-full"
          >
            <ProductCard product={product} />
          </ScrollRevealItem>
        ))}
      </ScrollRevealContainer>
    </div>
  );
}

export default FeaturedProductsFilter;
