import * as React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional rounded shape preset (default: "md" -> 14px) */
  rounded?: "sm" | "md" | "lg" | "xl" | "full" | "none";
}

const roundedClasses = {
  sm: "rounded-[8px]",
  md: "rounded-[14px]",
  lg: "rounded-[20px]",
  xl: "rounded-[24px]",
  full: "rounded-full",
  none: "rounded-none",
};

/**
 * Accessible Skeleton loader primitive matching light/dark design tokens.
 * Provides a lightweight pulse animation with zero layout shift.
 */
export function Skeleton({
  rounded = "md",
  className,
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-pulse bg-[#E4E4E7]/70 dark:bg-white/[0.07]",
        roundedClasses[rounded],
        className
      )}
      {...props}
    />
  );
}
