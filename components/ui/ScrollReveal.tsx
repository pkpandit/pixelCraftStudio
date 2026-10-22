"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
  type Transition,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Supported animation variants.
 * All movement variants strictly respect the 24px maximum translate distance requirement.
 */
export type ScrollRevealAnimation =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in";

/**
 * Supported HTML element tags rendered by Framer Motion.
 */
export type ScrollRevealAs =
  | "div"
  | "section"
  | "article"
  | "aside"
  | "span"
  | "ul"
  | "li"
  | "header"
  | "footer"
  | "main"
  | "nav";

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  /** The content to animate */
  children?: React.ReactNode;
  /** Animation preset type (default: "fade-up") */
  animation?: ScrollRevealAnimation;
  /**
   * Delay before animation starts (in seconds or ms).
   * E.g. 0.1 or 100 for 100ms. Capped at 0.4s (400ms) maximum.
   */
  delay?: number;
  /** Animation duration in seconds (default: 0.6) */
  duration?: number;
  /** Additional CSS classes (avoids layout shifts by applying styles to the motion wrapper) */
  className?: string;
  /** HTML element type to render (default: "div") */
  as?: ScrollRevealAs;
  /**
   * Optional zero-based index for grid cards to automatically calculate staggered delay:
   * 0 -> 0ms, 1 -> 100ms, 2 -> 200ms, 3 -> 300ms, 4+ -> 400ms max.
   */
  staggerIndex?: number;
  /** Optional stagger delay for children inside a container (in seconds) */
  staggerChildren?: number;
  /** Portion of the element that must be visible before triggering (default: 0.2) */
  amount?: number | "some" | "all";
  /** Whether the animation runs only once when entering view (default: true) */
  once?: boolean;
}

/**
 * Pre-registered motion component map to avoid recreating components on every render.
 */
const motionComponents = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  span: motion.span,
  ul: motion.ul,
  li: motion.li,
  header: motion.header,
  footer: motion.footer,
  main: motion.main,
  nav: motion.nav,
} as const;

/**
 * Production-grade custom cubic-bezier easing for smooth, professional motion:
 * Provides a responsive start with a long, silky deceleration without bounce.
 */
const SMOOTH_EASING = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Helper to calculate staggered delay in seconds from an item index.
 * - Card 1 (index 0): 0.0s (0ms)
 * - Card 2 (index 1): 0.1s (100ms)
 * - Card 3 (index 2): 0.2s (200ms)
 * - Card 4 (index 3): 0.3s (300ms)
 * - Maximum delay capped at 0.4s (400ms)
 */
export function getStaggerDelay(index: number): number {
  return Math.min(Math.max(0, index) * 0.1, 0.4);
}

/**
 * Builds Framer Motion variants according to the requested animation type.
 * Movement distance is strictly limited to 24px to prevent jarring transitions.
 */
function createVariants(
  animation: ScrollRevealAnimation,
  shouldReduceMotion: boolean | null,
  staggerChildren?: number
): Variants {
  // Respect prefers-reduced-motion by disabling any spatial translations or scale transforms
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.2,
          ...(staggerChildren ? { staggerChildren } : {}),
        },
      },
    };
  }

  const baseHidden: Record<string, number> = { opacity: 0 };
  const baseVisible: Record<string, number> = { opacity: 1 };

  switch (animation) {
    case "fade-up":
      baseHidden.y = 24;
      baseVisible.y = 0;
      break;
    case "fade-down":
      baseHidden.y = -24;
      baseVisible.y = 0;
      break;
    case "fade-left":
      // Drift into place from the right (moving leftward)
      baseHidden.x = 24;
      baseVisible.x = 0;
      break;
    case "fade-right":
      // Drift into place from the left (moving rightward)
      baseHidden.x = -24;
      baseVisible.x = 0;
      break;
    case "zoom-in":
      baseHidden.scale = 0.95;
      baseVisible.scale = 1;
      break;
    case "fade":
    default:
      // Opacity only
      break;
  }

  return {
    hidden: baseHidden,
    visible: {
      ...baseVisible,
      ...(staggerChildren ? { transition: { staggerChildren } } : {}),
    },
  };
}

/**
 * ScrollReveal: Reusable scroll-triggered reveal animation component
 * Built with Next.js App Router, Framer Motion, and Tailwind CSS.
 *
 * - Zero layout shift (preserves element display and box models)
 * - Works identically in both light and dark modes
 * - Strictly respects prefers-reduced-motion
 * - Executes viewport trigger only once (viewport={{ once: true, amount: 0.2 }})
 */
export function ScrollReveal({
  children,
  animation = "fade-up",
  delay,
  duration = 0.6,
  className,
  as = "div",
  staggerIndex,
  staggerChildren,
  amount = 0.2,
  once = true,
  style,
  ...props
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // Normalize delay (supports seconds e.g. 0.1, ms e.g. 100, or automatic staggerIndex)
  const computedDelay = React.useMemo(() => {
    if (staggerIndex !== undefined) {
      return getStaggerDelay(staggerIndex);
    }
    if (delay === undefined || delay <= 0) {
      return 0;
    }
    // If passed as milliseconds (e.g., 100, 200, 300), convert to seconds
    const delayInSeconds = delay > 10 ? delay / 1000 : delay;
    // Cap delay at maximum 400ms (0.4s) as required
    return Math.min(delayInSeconds, 0.4);
  }, [delay, staggerIndex]);

  const variants = React.useMemo(
    () => createVariants(animation, shouldReduceMotion, staggerChildren),
    [animation, shouldReduceMotion, staggerChildren]
  );

  const transition: Transition = React.useMemo(
    () => ({
      duration: shouldReduceMotion ? 0.2 : duration,
      delay: computedDelay,
      ease: SMOOTH_EASING,
    }),
    [computedDelay, duration, shouldReduceMotion]
  );

  const MotionComponent = motionComponents[as] || motion.div;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={transition}
      className={cn(className)}
      style={style}
      {...(props as any)}
    >
      {children}
    </MotionComponent>
  );
}

export default ScrollReveal;
