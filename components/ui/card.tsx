import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** If true, adds micro-elevation and border illumination on hover */
  hover?: boolean
  /** If true, applies frosted glass backdrop blur */
  glass?: boolean
}

/**
 * Standard Card container matching the design system:
 * - 20px rounded corners
 * - Dual-layer soft shadow in light mode
 * - Dark gradient (#171720 to #0F0F14) with top specular highlight in dark mode
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, glass = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[20px] border border-[#E4E4E7] bg-white text-[#0A0A0A] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_24px_-4px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.9)] transition-all duration-300 ease-out dark:border-white/[0.08] dark:bg-gradient-to-b dark:from-[#171720] dark:to-[#0F0F14] dark:text-[#FFFFFF] dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.08)]",
        glass && "glass-panel",
        hover &&
          "hover:-translate-y-1 hover:border-[#4F46E5]/40 hover:shadow-[0_12px_32px_-4px_rgba(79,70,229,0.14),0_4px_12px_-2px_rgba(0,0,0,0.04)] dark:hover:from-[#1E1E2A] dark:hover:to-[#13131A] dark:hover:border-[#818CF8]/50 dark:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.9),0_0_35px_-5px_rgba(129,140,248,0.25),inset_0_1px_0_0_rgba(255,255,255,0.16)]",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 sm:p-8", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-heading text-xl sm:text-2xl font-bold leading-tight tracking-tight text-foreground",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 sm:p-8 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 sm:p-8 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
