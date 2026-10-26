"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/lib/data";
import { Card } from "@/components/ui/card";

export interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialsCarousel({
  testimonials,
  className = "",
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive visible cards listener
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount, { passive: true });
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);
  const activeIndex = Math.min(currentIndex, maxIndex);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const cur = Math.min(prev, maxIndex);
      return cur > 0 ? cur - 1 : maxIndex;
    });
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const cur = Math.min(prev, maxIndex);
      return cur < maxIndex ? cur + 1 : 0;
    });
  }, [maxIndex]);

  // Subtle auto-advance every 7 seconds, pauses when user hovers or touches
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused, handleNext, maxIndex]);

  // Touch / swipe gesture handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      setIsPaused(false);
      return;
    }

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  const totalDots = maxIndex + 1;

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Client Testimonials Carousel"
    >
      {/* Top Header Actions: Prev / Next Buttons */}
      <div className="flex items-center justify-between mb-8 sm:mb-10">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#52525B] dark:text-[#A1A1AA]">
          <span className="font-bold text-[#0A0A0A] dark:text-white">
            {activeIndex + 1}
          </span>
          <span>/</span>
          <span>{totalDots}</span>
          <span className="ml-2 hidden sm:inline text-xs font-normal opacity-75">
            (Swipe or use arrows to view all {testimonials.length} reviews)
          </span>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E7] bg-white text-[#0A0A0A] shadow-xs transition-all duration-200 hover:scale-105 hover:border-[#4F46E5] hover:text-[#4F46E5] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] dark:border-white/10 dark:bg-[#161620] dark:text-white dark:hover:border-[#C084FC] dark:hover:text-[#C084FC] cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E7] bg-white text-[#0A0A0A] shadow-xs transition-all duration-200 hover:scale-105 hover:border-[#4F46E5] hover:text-[#4F46E5] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] dark:border-white/10 dark:bg-[#161620] dark:text-white dark:hover:border-[#C084FC] dark:hover:text-[#C084FC] cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel Viewport Container */}
      <div
        className="overflow-hidden -mx-3 px-3 py-2"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Sliding Track */}
        <div
          className="flex transition-transform duration-500 ease-out will-change-transform"
          style={{
            transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className="shrink-0 px-3 flex flex-col"
              style={{ width: `${100 / visibleCount}%` }}
              aria-hidden={
                index < activeIndex || index >= activeIndex + visibleCount
              }
            >
              <Card
                hover
                className="relative flex flex-col justify-between overflow-hidden p-7 sm:p-9 lg:p-10 w-full h-full min-h-[380px] rounded-[20px] select-none"
              >
                {/* Decorative Quote Mark in Top-Right */}
                <Quote className="absolute right-6 top-6 h-20 w-20 text-[#4F46E5]/10 dark:text-[#C084FC]/15 pointer-events-none -rotate-12 transition-transform duration-500 group-hover:scale-110" />

                <div className="space-y-6 relative z-10">
                  {/* Star Rating Badge (5.0 in pill) */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 px-3 py-1 text-xs font-bold text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-500 text-amber-500"
                      />
                    ))}
                    <span className="text-xs font-black text-[#0A0A0A] dark:text-white ml-1">
                      5.0
                    </span>
                  </div>

                  {/* Testimonial Quote Text */}
                  <p className="text-sm sm:text-base text-[#0A0A0A]/90 dark:text-white/90 leading-relaxed italic font-normal">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                {/* Author Information Footer */}
                <div className="flex items-center gap-4 pt-6 mt-8 border-t border-[#E4E4E7] dark:border-white/[0.08] relative z-10">
                  <div className="relative h-13 w-13 rounded-full overflow-hidden border-2 border-[#4F46E5]/30 dark:border-white/20 bg-[#F4F4F5] dark:bg-[#181822] shadow-xs shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="52px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-heading text-sm sm:text-base font-bold text-[#0A0A0A] dark:text-white truncate">
                      {t.name}
                    </h4>
                    <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] truncate font-medium">
                      {t.role}, {t.company}
                    </p>
                    <span className="inline-block mt-1.5 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/20 dark:border-[#C084FC]/25 px-3 py-0.5 text-[10px] font-bold text-[#4F46E5] dark:text-[#C084FC]">
                      {t.projectType}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pagination Dots */}
      {totalDots > 1 && (
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {Array.from({ length: totalDots }).map((_, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? "w-8 h-2.5 bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] dark:from-[#6366F1] dark:to-[#EC4899] shadow-sm shadow-indigo-500/30"
                    : "w-2.5 h-2.5 bg-[#D4D4D8] hover:bg-[#A1A1AA] dark:bg-white/20 dark:hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TestimonialsCarousel;
