import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: "default" | "card";
  className?: string;
}

/**
 * Reusable high-impact Call To Action (CTA) section.
 * Eliminates duplicate banner code across Home, About, and Services pages.
 */
export function CTASection({
  eyebrow = "Ready to Begin?",
  title,
  description,
  primaryButtonText = "Start a Project",
  primaryButtonHref = "/contact",
  secondaryButtonText,
  secondaryButtonHref,
  variant = "default",
  className = "",
}: CTASectionProps) {
  const content = (
    <div className="space-y-8 sm:space-y-10 text-center">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#4F46E5] uppercase dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-[#0A0A0A] dark:text-white text-balance leading-tight">
        {title}
      </h2>

      <p className="text-base sm:text-xl lg:text-2xl text-[#52525B] dark:text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto text-balance font-normal">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pt-4">
        {primaryButtonText && primaryButtonHref && (
          <Button
            href={primaryButtonHref}
            size="lg"
            className="w-full sm:w-auto px-10 py-6 text-base font-bold shadow-lg shadow-indigo-500/25"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            {primaryButtonText}
          </Button>
        )}
        {secondaryButtonText && secondaryButtonHref && (
          <Button
            href={secondaryButtonHref}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-10 py-6 text-base font-bold"
          >
            {secondaryButtonText}
          </Button>
        )}
      </div>
    </div>
  );

  if (variant === "card") {
    return (
      <section className={`py-20 sm:py-28 text-center bg-white dark:bg-[#09090B] relative overflow-hidden ${className}`}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-60 dark:opacity-40"
        >
          <div className="h-[460px] w-[800px] rounded-full bg-gradient-to-tr from-[#4F46E5]/15 via-[#7C3AED]/10 to-transparent blur-3xl" />
        </div>

        <Container>
          <Card className="mx-auto max-w-4xl p-6 sm:p-10 md:p-16 shadow-xl border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-gradient-to-b dark:from-[#171720] dark:to-[#0F0F14]">
            {content}
          </Card>
        </Container>
      </section>
    );
  }

  return (
    <section className={`relative overflow-hidden py-24 sm:py-36 bg-[#F8FAFC] dark:bg-[#09090B] border-t border-[#E4E4E7] dark:border-white/[0.08] ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-40 dark:opacity-30"
      >
        <div className="h-[500px] w-[900px] rounded-full bg-gradient-to-tr from-[#4F46E5]/20 via-[#A855F7]/15 to-[#EC4899]/20 blur-3xl" />
      </div>

      <Container className="max-w-4xl">
        {content}
      </Container>
    </section>
  );
}

export default CTASection;
