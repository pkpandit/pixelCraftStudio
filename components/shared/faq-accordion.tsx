"use client";

import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS, FAQItem } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

export interface FaqAccordionProps {
  items?: FAQItem[];
  showCategories?: boolean;
  className?: string;
}

/**
 * Accessible FAQ accordion with keyboard accessibility, category filtering,
 * and smooth animated disclosure transitions.
 */
export function FaqAccordion({
  items = FAQS,
  showCategories = true,
  className = "",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((item) => item.category)))],
    [items]
  );

  const filteredItems = useMemo(
    () =>
      selectedCategory === "All"
        ? items
        : items.filter((item) => item.category === selectedCategory),
    [items, selectedCategory]
  );

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`mx-auto max-w-3xl space-y-6 ${className}`}>
      {/* Optional Category Pills */}
      {showCategories && categories.length > 2 && (
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(0);
                }}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-300 select-none cursor-pointer ${
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
      )}

      {/* Accordion List with Single Observer */}
      <ScrollRevealContainer className="space-y-3.5">
        {filteredItems.map((faq, index) => {
          const isOpen = openIndex === index;
          const itemId = `faq-item-${index}`;
          const contentId = `faq-content-${index}`;

          return (
            <ScrollRevealItem
              key={faq.question}
              animation="fade-up"
            >
              <Card
                hover={!isOpen}
                className={`overflow-hidden rounded-[20px] transition-all duration-300 ${
                  isOpen
                    ? "border-[#4F46E5]/40 shadow-[0_4px_24px_-2px_rgba(79,70,229,0.12),0_1px_3px_rgba(0,0,0,0.04)] bg-white dark:border-[#C084FC]/40 dark:bg-gradient-to-b dark:from-[#1A1A26] dark:to-[#111117] dark:shadow-[0_0_30px_rgba(192,132,252,0.15),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
                    : "border-[#E4E4E7] bg-white hover:border-zinc-300 shadow-[0_1px_3px_rgba(0,0,0,0.03)] dark:bg-gradient-to-b dark:from-[#14141A]/90 dark:to-[#0E0E13]/90 dark:border-white/[0.08] dark:hover:border-white/20 dark:hover:from-[#181822] dark:hover:to-[#121217]"
                }`}
              >
                <button
                  id={itemId}
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 select-none cursor-pointer group"
                >
                  <div className="flex items-start gap-4 pr-4">
                    <span
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-heading font-black transition-all ${
                        isOpen
                          ? "bg-[#4F46E5] text-white dark:bg-[#C084FC] dark:text-[#09090B] shadow-xs"
                          : "bg-[#F4F4F5] text-[#71717A] dark:bg-white/10 dark:text-[#A1A1AA] group-hover:bg-[#4F46E5]/10 group-hover:text-[#4F46E5] dark:group-hover:text-[#C084FC]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="font-heading text-base sm:text-lg font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#C084FC] transition-colors block">
                        {faq.question.replace(/^\d+\.\s*/, "")}
                      </span>
                      {faq.category && (
                        <span className="text-[11px] font-semibold text-[#71717A] dark:text-[#A1A1AA] uppercase tracking-wider">
                          {faq.category}
                        </span>
                      )}
                    </div>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E4E4E7] dark:border-white/10 bg-zinc-50 dark:bg-white/5 text-[#0A0A0A] dark:text-white transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#4F46E5]/10 text-[#4F46E5] border-[#4F46E5]/30 dark:bg-[#C084FC]/15 dark:text-[#C084FC] dark:border-[#C084FC]/30"
                        : "group-hover:border-zinc-300 dark:group-hover:border-white/25"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4 transition-transform" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={itemId}
                    className="px-5 pb-6 sm:px-6 pt-0 text-[#52525B] dark:text-[#A1A1AA] leading-relaxed text-sm sm:text-base border-t border-[#E4E4E7]/60 dark:border-white/[0.06] mt-1 animate-in fade-in-50 duration-200"
                  >
                    <p className="pt-4 pl-11 sm:pl-11">{faq.answer}</p>
                  </div>
                )}
              </Card>
            </ScrollRevealItem>
          );
        })}
      </ScrollRevealContainer>
    </div>
  );
}

export default FaqAccordion;
