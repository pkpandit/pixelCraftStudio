import * as React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Optional top pill badge text (e.g. "Bespoke Services", "Philosophy") */
  eyebrow?: React.ReactNode;
  /** Optional custom icon for the eyebrow pill (defaults to Sparkles) */
  eyebrowIcon?: React.ReactNode;
  /** Primary section title (H2) */
  title: React.ReactNode;
  /** Optional descriptive subtitle / lead paragraph */
  description?: React.ReactNode;
  /** Text alignment (default: "center") */
  align?: "center" | "left" | "right";
  /** Optional custom styling for the H2 heading */
  titleClassName?: string;
  /** Optional custom styling for the description paragraph */
  descriptionClassName?: string;
}

/**
 * Standardized SectionHeading component for section headers across all pages.
 * Handles eyebrow pill badges, responsive H2 typography, and subtitles with clean centering.
 */
export function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
  children,
  ...props
}: SectionHeadingProps) {
  const alignClass = {
    center: "text-center mx-auto items-center",
    left: "text-left items-start",
    right: "text-right ml-auto items-end",
  }[align];

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl space-y-4 sm:space-y-5",
        alignClass,
        className
      )}
      {...props}
    >
      {/* Eyebrow Pill */}
      {eyebrow && (
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
            {eyebrowIcon ?? <Sparkles className="h-3.5 w-3.5" />}
            <span>{eyebrow}</span>
          </div>
        </div>
      )}

      {/* Main H2 Heading */}
      <h2
        className={cn(
          "font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0A] dark:text-white text-balance leading-tight",
          titleClassName
        )}
      >
        {title}
      </h2>

      {/* Description / Subtitle */}
      {description && (
        <p
          className={cn(
            "text-base sm:text-xl text-[#52525B] dark:text-[#A1A1AA] leading-relaxed text-balance font-normal",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}

      {/* Optional supplementary elements (e.g., trust badges or filter buttons) */}
      {children}
    </div>
  );
}
