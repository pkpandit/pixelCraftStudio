import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  label?: string;
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12",
};

/**
 * Accessible Spinner primitive for loading states.
 */
export function Spinner({
  size = "md",
  label,
  className,
  ...props
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label ?? "Loading"}
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      <Loader2
        className={cn(
          "animate-spin text-[#4F46E5] dark:text-[#C084FC]",
          sizeClasses[size]
        )}
      />
      <span className="sr-only">{label ?? "Loading..."}</span>
    </div>
  );
}
