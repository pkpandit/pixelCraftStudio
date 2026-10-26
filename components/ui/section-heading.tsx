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
      {/* Eyebrow Pill / Tag */}
      {eyebrow && (
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/20 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/25 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
            {eyebrowIcon ?? <Sparkles className="h-3.5 w-3.5" />}
            <span>{eyebrow}</span>
          </div>
        </div>
      )}

      {/* Main H2 Heading */}
      <div className="space-y-3.5">
        <h2
          className={cn(
            "font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0A] dark:text-white text-balance leading-[1.12]",
            titleClassName
          )}
        >
          {title}
        </h2>

        {/* Agency Signature Centered Accent Bar */}
        <div className={cn("agency-heading-bar", align === "left" && "ml-0 mr-auto", align === "right" && "mr-0 ml-auto")} />
      </div>

      {/* Description / Subtitle */}
      {description && (
        <p
          className={cn(
            "text-base sm:text-lg lg:text-xl text-[#52525B] dark:text-[#A1A1AA] leading-relaxed text-balance font-normal pt-1",
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
