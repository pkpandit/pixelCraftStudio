import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** If true, adds micro-elevation and border illumination on hover */
  hover?: boolean
  /** If true, applies frosted glass backdrop blur */
  glass?: boolean
  /** If true, renders with the agency featured highlight state (like the reference grid) */
  featured?: boolean
}

/**
 * Standard Card container matching the creative-agency design language:
 * - 20px rounded corners
 * - Soft diffused dual-layer shadow
 * - In dark mode: deep surface with top specular highlight
 * - Smooth hover lift (-translate-y-1.5)
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, glass = false, featured = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[20px] border border-[#E4E4E7] bg-white text-[#0A0A0A] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03),0_10px_24px_-4px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out dark:border-white/[0.08] dark:bg-gradient-to-b dark:from-[#15151D] dark:to-[#0F0F14] dark:text-[#FFFFFF] dark:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.07)]",
        glass && "glass-panel",
        featured &&
          "bg-[#4F46E5] text-white border-transparent shadow-[0_20px_40px_-10px_rgba(79,70,229,0.4)] dark:bg-gradient-to-br dark:from-[#6366F1] dark:via-[#7C3AED] dark:to-[#EC4899] dark:border-white/20",
        hover &&
          "hover:-translate-y-1.5 hover:border-[#4F46E5]/40 hover:shadow-[0_20px_40px_-8px_rgba(79,70,229,0.12),0_6px_16px_-4px_rgba(0,0,0,0.04)] dark:hover:border-[#C084FC]/50 dark:hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.95),0_0_30px_-4px_rgba(192,132,252,0.22),inset_0_1px_0_0_rgba(255,255,255,0.14)]",
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
