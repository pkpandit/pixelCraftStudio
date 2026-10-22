import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Button variants matching the Creative Designer SaaS design system.
 * - default: Electric Indigo gradient with soft elevation & top specular highlight
 * - secondary: Tactile white button in light mode, dark gradient in dark mode
 * - outline: Subtle border with hover glow
 * - ghost: Minimal flat hover background
 * - link: Accessible text link with underline
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-200 outline-none select-none cursor-pointer focus-visible:ring-2 focus-visible:ring-[#4F46E5] dark:focus-visible:ring-[#818CF8] focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#4F46E5] text-white shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(79,70,229,0.26),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-[#4338CA] hover:shadow-[0_6px_20px_rgba(79,70,229,0.36)] hover:scale-[1.01] dark:border dark:border-white/20 dark:bg-gradient-to-r dark:from-[#6366F1] dark:via-[#8B5CF6] dark:to-[#EC4899] dark:hover:from-[#4F46E5] dark:hover:via-[#7C3AED] dark:hover:to-[#DB2777] dark:shadow-[0_0_30px_-4px_rgba(139,92,246,0.5),inset_0_1px_0_0_rgba(255,255,255,0.25)]",
        secondary:
          "bg-white text-zinc-900 border border-zinc-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_1px_0_0_rgba(255,255,255,0.9)] hover:bg-zinc-50 hover:border-zinc-300 hover:text-black dark:bg-gradient-to-b dark:from-[#1F1F2A] dark:to-[#14141C] dark:text-white dark:border-white/10 dark:hover:border-white/25 dark:hover:from-[#262634] dark:hover:to-[#1A1A24] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]",
        outline:
          "border border-zinc-200 bg-white/90 text-zinc-800 shadow-[0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_0_rgba(255,255,255,0.9)] hover:bg-zinc-50 hover:border-zinc-300 hover:text-zinc-950 active:bg-zinc-100 dark:border-white/20 dark:bg-white/[0.03] dark:text-white dark:hover:border-white/40 dark:hover:bg-white/10 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]",
        ghost:
          "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80 dark:text-white dark:hover:bg-white/10",
        destructive:
          "bg-[#EF4444] text-white shadow-xs hover:bg-[#DC2626] focus-visible:ring-[#EF4444]",
        link:
          "text-[#4F46E5] dark:text-[#C084FC] underline-offset-4 hover:underline p-0 h-auto font-bold shadow-none",
      },
      size: {
        sm: "h-9 px-4 rounded-full text-xs gap-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        default: "h-11 px-6 py-2.5 rounded-full text-sm gap-2 [&_svg:not([class*='size-'])]:size-4",
        lg: "h-13 px-8 rounded-full text-base gap-2.5 font-bold [&_svg:not([class*='size-'])]:size-4.5",
        icon: "size-11 rounded-full justify-center [&_svg:not([class*='size-'])]:size-4",
        "icon-sm": "size-9 rounded-full justify-center [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-13 rounded-full justify-center [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Optional Next.js Link href. If provided, renders as an accessible Next.js Link */
  href?: string
  target?: string
  rel?: string
  /** If true, shows an accessible loading spinner and disables interactions */
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

/**
 * Reusable Button component adhering to WCAG 2.1 AA 44px touch targets.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      href,
      target,
      rel,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const content = (
      <>
        {isLoading && <Loader2 className="animate-spin" />}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </>
    )

    if (href) {
      return (
        <Link
          href={href}
          target={target}
          rel={rel}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {content}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
