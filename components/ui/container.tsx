import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Container max-width constraint (default: "lg" -> max-w-7xl) */
  size?: "sm" | "md" | "lg" | "full";
  /** HTML element type to render (default: "div") */
  as?: "div" | "section" | "article" | "main";
}

const sizeClasses = {
  sm: "max-w-4xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  full: "max-w-full",
};

/**
 * Reusable Container component ensuring consistent horizontal margins and padding
 * across all responsive screen sizes (px-4 sm:px-6 lg:px-8).
 */
export function Container({
  as: Component = "div",
  size = "lg",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
