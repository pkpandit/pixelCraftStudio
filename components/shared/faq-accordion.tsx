"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS, FAQItem } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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

  const categories = [
    "All",
    ...Array.from(new Set(items.map((item) => item.category))),
  ];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

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

      {/* Accordion List */}
      <div className="space-y-3.5">
        {filteredItems.map((faq, index) => {
          const isOpen = openIndex === index;
          const itemId = `faq-item-${index}`;
          const contentId = `faq-content-${index}`;

          return (
            <ScrollReveal
              key={faq.question}
              animation="fade-up"
              delay={Math.min(index * 80, 400)}
            >
              <Card
                hover={!isOpen}
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-[#4F46E5]/40 shadow-[0_4px_20px_-2px_rgba(79,70,229,0.1),0_1px_3px_rgba(0,0,0,0.04)] bg-white dark:border-[#818CF8]/50 dark:bg-gradient-to-b dark:from-[#1A1A26] dark:to-[#111117] dark:shadow-[0_0_30px_rgba(99,102,241,0.18),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
                    : "border-[#E4E4E7] bg-white hover:border-zinc-300 shadow-[0_1px_3px_rgba(0,0,0,0.03),inset_0_1px_0_0_rgba(255,255,255,0.9)] dark:bg-gradient-to-b dark:from-[#14141A]/90 dark:to-[#0E0E13]/90 dark:border-white/[0.08] dark:hover:border-white/20 dark:hover:from-[#181822] dark:hover:to-[#121217]"
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
                  <div className="flex items-start gap-3.5 pr-4">
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold transition-colors ${
                        isOpen
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="font-heading text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors block">
                        {faq.question.replace(/^\d+\.\s*/, "")}
                      </span>
                      {faq.category && (
                        <span className="text-[11px] font-medium text-muted-foreground">
                          {faq.category}
                        </span>
                      )}
                    </div>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-secondary/50 text-foreground transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-primary/10 text-primary border-primary/30"
                        : "group-hover:border-border"
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
                    className="px-5 pb-6 sm:px-6 pt-0 text-muted-foreground leading-relaxed text-sm sm:text-base border-t border-border/40 mt-1 animate-in fade-in-50 duration-200"
                  >
                    <p className="pt-4 pl-9 sm:pl-9">{faq.answer}</p>
                  </div>
                )}
              </Card>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}

export default FaqAccordion;
