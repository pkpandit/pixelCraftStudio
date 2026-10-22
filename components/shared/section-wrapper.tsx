import * as React from "react";
import { cn } from "@/lib/utils";
import { Container, ContainerProps } from "@/components/ui/container";

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  /** Section background band: "default" (pure white / 09090B) or "muted" (soft F8FAFC / 0B0B0F) */
  variant?: "default" | "muted" | "transparent";
  /** Vertical padding scale (default: "default" -> py-24 sm:py-36) */
  spacing?: "default" | "compact" | "large" | "hero";
  /** If true, adds the crisp bottom divider border */
  border?: boolean;
  /** If true, renders a subtle ambient gradient glow orb in the background */
  glow?: boolean;
  /** If true, automatically wraps children inside Container (default: true) */
  container?: boolean;
  /** Container max-width size if container={true} (default: "lg") */
  containerSize?: ContainerProps["size"];
  /** Optional custom container classes */
  containerClassName?: string;
}

const variantClasses = {
  default: "bg-white dark:bg-[#09090B]",
  muted: "bg-[#F8FAFC] dark:bg-[#0B0B0F]",
  transparent: "bg-transparent",
};

const spacingClasses = {
  hero: "pt-20 pb-24 sm:pt-32 sm:pb-36",
  default: "py-24 sm:py-36",
  compact: "py-16 sm:py-24",
  large: "py-28 sm:py-44",
};

/**
 * Standardized SectionWrapper providing alternating background contrast,
 * vertical rhythm, optional ambient glows, and container boundary enforcement.
 */
export function SectionWrapper({
  id,
  variant = "default",
  spacing = "default",
  border = true,
  glow = false,
  container = true,
  containerSize = "lg",
  containerClassName,
  className,
  children,
  ...props
}: SectionWrapperProps) {
  const content = container ? (
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden transition-colors duration-300",
        variantClasses[variant],
        spacingClasses[spacing],
        border && "border-b border-[#E4E4E7] dark:border-white/[0.08]",
        className
      )}
      {...props}
    >
      {/* Optional Ambient Background Glow */}
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#4F46E5]/15 via-[#7C3AED]/10 to-transparent blur-3xl opacity-70 dark:from-[#6366F1]/20 dark:via-[#A855F7]/15 dark:to-[#EC4899]/15 dark:opacity-60"
        />
      )}

      {content}
    </section>
  );
}
