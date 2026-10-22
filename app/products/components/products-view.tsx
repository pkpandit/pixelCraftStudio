"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Sparkles,
  ArrowRight,
  Package,
} from "lucide-react";
import { DIGITAL_PRODUCTS, PRODUCT_CATEGORIES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/shared/product-card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/section-heading";

export interface ProductsViewProps {
  className?: string;
}

export function ProductsView({ className = "" }: ProductsViewProps) {
  const searchParams = useSearchParams();
  const initialCategoryParam = searchParams.get("cat");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategoryParam
      ? PRODUCT_CATEGORIES.find((c) => c.id === initialCategoryParam)?.category || "All"
      : "All"
  );

  const categories = ["All", ...PRODUCT_CATEGORIES.map((c) => c.category)];

  const filteredProducts = useMemo(() => {
    return DIGITAL_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.techStack.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className={`min-h-screen bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white ${className}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-[#09090B]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#4F46E5]/15 via-[#7C3AED]/10 to-transparent blur-3xl opacity-70 dark:from-[#6366F1]/20 dark:via-[#A855F7]/15 dark:to-[#EC4899]/15 dark:opacity-60"
        />

        <Container className="text-center max-w-6xl">
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Digital Products Catalog</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight lg:tracking-tighter text-[#0A0A0A] dark:text-white leading-[1.18] sm:leading-[1.12] lg:leading-[1.10]">
                <span className="block">Ready-to-Use Digital Products</span>
                <span className="block">
                  <span className="gradient-text">
                    for Your Next Project.
                  </span>
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg lg:text-xl text-[#52525B] dark:text-[#A1A1AA] leading-relaxed sm:leading-[1.7] max-w-2xl sm:max-w-3xl mx-auto text-balance font-normal">
                Save time and bring your ideas to life with professionally crafted digital products. Explore practical resources designed for developers, designers, startups, and businesses.
              </p>

              <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] italic pt-2">
                *Instant access upon purchase. Lifetime updates included. No physical item will be shipped.*
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Filter & Search Toolbar */}
      <section className="py-6 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-white/90 dark:bg-[#09090B]/90 sticky top-16 z-40 backdrop-blur-xl shadow-xs">
        <Container>
          <ScrollReveal animation="fade-down" delay={0.1}>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Search Input with explicit aria-label for accessibility */}
                <div className="relative w-full md:w-88">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#71717A] dark:text-[#A1A1AA]" />
                  <input
                    type="text"
                    aria-label="Search digital products and templates"
                    placeholder="Search templates, UI kits, stacks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-full border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#161620] dark:to-[#101015] py-3 pl-11 pr-10 text-base sm:text-sm text-[#0A0A0A] dark:text-white placeholder:text-[#71717A] dark:placeholder:text-[#71717A] focus:border-[#4F46E5] dark:focus:border-[#818CF8] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 dark:focus:ring-[#818CF8]/25 transition-all font-medium"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      aria-label="Clear search query"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#71717A] hover:text-[#0A0A0A] dark:hover:text-white font-bold"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Results count badge */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA]">
                  <Package className="h-4 w-4 text-[#4F46E5] dark:text-[#818CF8]" />
                  <span>
                    Showing <strong className="text-[#0A0A0A] dark:text-white font-bold">{filteredProducts.length}</strong> of{" "}
                    <strong className="text-[#0A0A0A] dark:text-white font-bold">{DIGITAL_PRODUCTS.length}</strong> products
                  </span>
                </div>
              </div>

              {/* Category Pill Tabs with edge-to-edge mobile scroll */}
              <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`shrink-0 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-300 select-none cursor-pointer ${
                        isSelected
                          ? "bg-[#0A0A0A] text-white shadow-xs scale-105 dark:bg-gradient-to-r dark:from-[#6366F1] dark:via-[#8B5CF6] dark:to-[#EC4899] dark:text-white dark:shadow-[0_0_20px_rgba(139,92,246,0.35),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                          : "border border-[#E4E4E7] bg-white text-[#52525B] hover:bg-zinc-50 hover:text-[#0A0A0A] hover:border-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-gradient-to-b dark:from-[#16161F] dark:to-[#101015] dark:text-[#A1A1AA] dark:hover:border-white/25 dark:hover:from-[#1C1C26] dark:hover:to-[#15151C] dark:hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#09090B]">
        <Container>
          <div className="mb-14">
            <ScrollReveal animation="fade-up">
              <SectionHeading
                title="Premium Digital Products"
                description="Website templates, UI kits, and design assets built for modern businesses."
              />
            </ScrollReveal>
          </div>

          {filteredProducts.length === 0 ? (
            <ScrollReveal animation="fade" delay={0.1}>
              <Card className="py-24 text-center space-y-5 border-dashed border-[#E4E4E7] dark:border-white/10 p-8 max-w-lg mx-auto">
                <Package className="h-14 w-14 text-[#71717A] mx-auto" />
                <h3 className="font-heading text-xl font-bold text-[#0A0A0A] dark:text-white">
                  No products found
                </h3>
                <p className="text-sm text-[#71717A] dark:text-[#A1A1AA]">
                  Try adjusting your search terms or selecting a different category.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                >
                  Reset Filters
                </Button>
              </Card>
            </ScrollReveal>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <ScrollReveal
                  key={product.id}
                  animation="fade-up"
                  delay={Math.min(index * 100, 400)}
                  className="flex flex-col h-full w-full"
                >
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Custom Project Callout */}
      <section className="pt-8 pb-24 sm:pb-36">
        <Container>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <Card className="p-6 sm:p-12 lg:p-16 border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-gradient-to-b dark:from-[#16161E] dark:to-[#0F0F14] shadow-lg dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <div className="max-w-2xl space-y-5 text-center sm:text-left">
                <span className="text-xs font-bold tracking-widest text-[#4F46E5] dark:text-[#C084FC] uppercase">
                  Need Something Custom?
                </span>
                <h3 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A0A0A] dark:text-white">
                  Don’t See Exactly What You Need?
                </h3>
                <p className="text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                  I also build custom websites, tailored web applications, and dedicated design systems built specifically around your brand and business requirements.
                </p>
                <div className="pt-4">
                  <Button
                    href="/contact"
                    size="lg"
                    className="w-full sm:w-auto rounded-full px-8 py-6 font-bold shadow-lg shadow-indigo-500/25"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Discuss a Custom Project
                  </Button>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}

export default ProductsView;
