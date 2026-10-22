"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export interface ScrollToTopProps {
  className?: string;
  threshold?: number;
}

/**
 * Reusable ScrollToTop button component.
 * - Appears when the user scrolls down > 400px (or custom threshold)
 * - Smoothly scrolls the window to the top on click
 * - Accessible with aria-label="Scroll to top" and visible focus states
 * - Fully styled for both light and dark themes
 */
export function ScrollToTop({ className = "", threshold = 400 }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Passive scroll listener for high frame rate & smooth scrolling
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`group fixed bottom-6 right-6 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#E4E4E7] bg-white/95 text-[#0A0A0A] shadow-lg shadow-black/8 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#4F46E5] hover:text-[#4F46E5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] dark:border-white/10 dark:bg-gradient-to-b dark:from-[#1E1E2A] dark:to-[#121218] dark:text-white dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_12px_28px_rgba(0,0,0,0.8)] dark:hover:border-[#C084FC] dark:hover:text-[#C084FC] dark:hover:shadow-[0_0_25px_rgba(192,132,252,0.35)] active:scale-95 touch-manipulation sm:bottom-8 sm:right-8 ${
        isVisible
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
          : "opacity-0 scale-90 translate-y-4 pointer-events-none"
      } ${className}`}
    >
      <ArrowUp className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}

export default ScrollToTop;
