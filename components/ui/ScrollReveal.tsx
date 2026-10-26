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
 * All movement variants strictly respect subtle 16px maximum translate distance
 * and animate exclusively opacity and transform to eliminate layout thrashing.
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
   * E.g. 0.1 or 100 for 100ms. Capped at 0.35s (350ms) maximum.
   */
  delay?: number;
  /** Animation duration in seconds (default: 0.45 for snappy, professional feel) */
  duration?: number;
  /** Additional CSS classes */
  className?: string;
  /** HTML element type to render (default: "div") */
  as?: ScrollRevealAs;
  /**
   * Optional zero-based index for grid cards to automatically calculate staggered delay:
   * 0 -> 0ms, 1 -> 80ms, 2 -> 160ms, 3 -> 240ms, 4+ -> 320ms max.
   */
  staggerIndex?: number;
  /** Optional stagger delay for children inside a container (in seconds) */
  staggerChildren?: number;
  /** Portion of the element that must be visible before triggering (default: "some") */
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
 * Capped at 0.32s (320ms) max for snappy responsiveness.
 */
export function getStaggerDelay(index: number): number {
  return Math.min(Math.max(0, index) * 0.08, 0.32);
}

/**
 * Builds Framer Motion variants according to the requested animation type.
 * Movement distance is strictly limited to 16px to prevent jarring transitions or overflow.
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
          duration: 0.15,
          ...(staggerChildren ? { staggerChildren } : {}),
        },
      },
    };
  }

  const baseHidden: Record<string, number> = { opacity: 0 };
  const baseVisible: Record<string, number> = { opacity: 1 };

  switch (animation) {
    case "fade-up":
      baseHidden.y = 16;
      baseVisible.y = 0;
      break;
    case "fade-down":
      baseHidden.y = -16;
      baseVisible.y = 0;
      break;
    case "fade-left":
      baseHidden.x = 16;
      baseVisible.x = 0;
      break;
    case "fade-right":
      baseHidden.x = -16;
      baseVisible.x = 0;
      break;
    case "zoom-in":
      baseHidden.scale = 0.98;
      baseVisible.scale = 1;
      break;
    case "fade":
    default:
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
 * ScrollReveal: Reusable, high-performance scroll-triggered reveal animation component.
 * Built with Next.js App Router, Framer Motion, and Tailwind CSS.
 *
 * - Zero layout shift (preserves element display and box models; animates only transform & opacity)
 * - Strict 16px displacement for subtle, high-end agency aesthetic
 * - Strictly respects prefers-reduced-motion
 * - Executes viewport trigger only once (viewport={{ once: true, amount: "some" }})
 */
export function ScrollReveal({
  children,
  animation = "fade-up",
  delay,
  duration = 0.45,
  className,
  as = "div",
  staggerIndex,
  staggerChildren,
  amount = "some",
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
    const delayInSeconds = delay > 10 ? delay / 1000 : delay;
    return Math.min(delayInSeconds, 0.35);
  }, [delay, staggerIndex]);

  const variants = React.useMemo(
    () => createVariants(animation, shouldReduceMotion, staggerChildren),
    [animation, shouldReduceMotion, staggerChildren]
  );

  const transition: Transition = React.useMemo(
    () => ({
      duration: shouldReduceMotion ? 0.15 : duration,
      delay: computedDelay,
      ease: SMOOTH_EASING,
    }),
    [computedDelay, duration, shouldReduceMotion]
  );

  const MotionComponent: React.ElementType = motionComponents[as] || motion.div;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      variants={variants}
      transition={transition}
      className={cn(className)}
      style={style}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * Stagger Container component for grids/lists.
 * Attaches a SINGLE IntersectionObserver to the parent grid rather than N observers,
 * eliminating observer strain on large pages.
 */
export function ScrollRevealContainer({
  children,
  stagger = 0.08,
  delay = 0,
  className,
  as = "div",
  once = true,
  amount = "some",
  ...props
}: {
  children?: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  as?: ScrollRevealAs;
  once?: boolean;
  amount?: number | "some" | "all";
} & React.HTMLAttributes<HTMLElement>) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent: React.ElementType = motionComponents[as] || motion.div;

  const containerVariants: Variants = React.useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          delayChildren: shouldReduceMotion ? 0 : delay,
          staggerChildren: shouldReduceMotion ? 0 : stagger,
        },
      },
    }),
    [delay, shouldReduceMotion, stagger]
  );

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      variants={containerVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * Child item inside a ScrollRevealContainer.
 * Inherits animation triggers from the parent with 0 additional observers.
 */
export function ScrollRevealItem({
  children,
  animation = "fade-up",
  className,
  as = "div",
  duration = 0.45,
  ...props
}: {
  children?: React.ReactNode;
  animation?: ScrollRevealAnimation;
  className?: string;
  as?: ScrollRevealAs;
  duration?: number;
} & React.HTMLAttributes<HTMLElement>) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent: React.ElementType = motionComponents[as] || motion.div;

  const itemVariants: Variants = React.useMemo(() => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.15 } },
      };
    }
    const hidden: Record<string, number> = { opacity: 0 };
    const visible: Record<string, number> = { opacity: 1 };

    switch (animation) {
      case "fade-up":
        hidden.y = 16;
        visible.y = 0;
        break;
      case "fade-down":
        hidden.y = -16;
        visible.y = 0;
        break;
      case "fade-left":
        hidden.x = 16;
        visible.x = 0;
        break;
      case "fade-right":
        hidden.x = -16;
        visible.x = 0;
        break;
      case "zoom-in":
        hidden.scale = 0.98;
        visible.scale = 1;
        break;
      case "fade":
      default:
        break;
    }

    return {
      hidden,
      visible: {
        ...visible,
        transition: { duration, ease: SMOOTH_EASING },
      },
    };
  }, [animation, duration, shouldReduceMotion]);

  return (
    <MotionComponent
      variants={itemVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export default ScrollReveal;
