import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
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
 * Replicates the Acens panoramic video/banner design style with monochrome agency backdrop,
 * cursive accent eyebrow, bold headline, and centered circular play/action element.
 */
export function CTASection({
  eyebrow = "Ready to Begin?",
  title,
  description,
  primaryButtonText = "Start a Project",
  primaryButtonHref = "/contact",
  secondaryButtonText,
  secondaryButtonHref,
  className = "",
}: CTASectionProps) {
  return (
    <section
      className={`relative overflow-hidden py-24 sm:py-32 lg:py-36 border-t border-b border-white/[0.08] bg-[#09090B] text-white ${className}`}
    >
      {/* Acens-Inspired Panoramic Agency Team Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/cta-team-banner.jpg"
          alt="PixelCraftStudio creative agency team workspace"
          fill
          loading="lazy"
          quality={80}
          sizes="100vw"
          className="object-cover object-center grayscale contrast-125 brightness-95 opacity-70 dark:opacity-65"
        />
        {/* Dark Cinematic Vignette Overlays matching reference image */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/20 to-[#09090B]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.65)_100%)]" />
      </div>

      <Container className="relative z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Cursive / Script Accent Eyebrow matching 'Our Agency Video' from reference */}
          {eyebrow && (
            <div className="inline-flex items-center gap-2">
              <span className="font-serif italic text-base sm:text-lg lg:text-xl font-normal text-[#C084FC] tracking-wide drop-shadow-sm">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Bold White Headline */}
          <div className="space-y-3">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white text-balance leading-tight drop-shadow-md">
              {title}
            </h2>
          </div>

          {/* Centered Circular Action Element matching reference circular play button */}
          <div className="pt-1 pb-1">
            <Link
              href={primaryButtonHref}
              aria-label={`${primaryButtonText} - ${title}`}
              className="group relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-white/35 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white/15 hover:shadow-[0_0_35px_rgba(192,132,252,0.45)] active:scale-95"
            >
              {/* Subtle ambient ripple ring */}
              <span className="absolute inset-0 rounded-full border border-[#C084FC]/40 animate-ping opacity-25" />
              
              {/* Play triangle in accent brand color */}
              <Play className="h-6 w-6 sm:h-7 sm:w-7 text-[#C084FC] fill-[#C084FC]/30 group-hover:fill-[#C084FC] transition-all ml-0.5" />
            </Link>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto text-balance font-normal">
            {description}
          </p>

          {/* Dual Pill Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pt-2 w-full sm:w-auto">
            {primaryButtonText && primaryButtonHref && (
              <Button
                href={primaryButtonHref}
                size="lg"
                className="w-full sm:w-auto rounded-full px-9 py-6 text-base font-bold shadow-lg shadow-indigo-500/25"
                rightIcon={<ArrowRight className="h-4 w-4 ml-1" />}
              >
                {primaryButtonText}
              </Button>
            )}
            {secondaryButtonText && secondaryButtonHref && (
              <Button
                href={secondaryButtonHref}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full px-9 py-6 text-base font-bold border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 shadow-xs"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTASection;
