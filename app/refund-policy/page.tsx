import type { Metadata } from "next";
import Link from "next/link";
import { RotateCcw, ArrowLeft, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Refund Policy | pixelCraftStudio",
  description:
    "Refund Policy for pixelCraftStudio digital templates, UI systems, and bespoke engineering contracts.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white transition-colors py-16 sm:py-24">
      <Container className="max-w-4xl space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#52525B] hover:text-[#0A0A0A] dark:text-[#A1A1AA] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4 border-b border-[#E4E4E7] dark:border-white/[0.08] pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <RotateCcw className="h-4 w-4" />
            <span>Store Policy</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[#0A0A0A] dark:text-white tracking-tight">
            Refund Policy
          </h1>
          <p className="text-sm text-[#71717A] dark:text-[#A1A1AA]">
            Last updated: {lastUpdated} · pixelCraftStudio
          </p>
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none space-y-8 text-sm sm:text-base text-[#52525B] dark:text-[#D4D4D8] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              1. Digital Products & Source Code
            </h2>
            <p>
              Due to the non-returnable nature of downloadable digital goods (such as Next.js starter templates, Figma design systems, and dashboard source files), all digital product sales are generally considered final once download access is provided.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              2. Exceptional Circumstances & Guarantees
            </h2>
            <p>
              We want you to be 100% confident in your purchase. We gladly issue refunds within <strong>14 days of purchase</strong> under the following conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Corrupted or Missing Files:</strong> The downloaded archive is demonstrably corrupted and our technical team is unable to provide working replacements within 48 hours.</li>
              <li><strong>Critical Unresolvable Defects:</strong> The template contains critical codebase errors that prevent it from compiling or building as advertised in our live demo.</li>
              <li><strong>Accidental Duplicate Purchase:</strong> You inadvertently purchased the identical license twice.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              3. Custom Development Engagements
            </h2>
            <p>
              For bespoke development and design retainers, initial discovery deposits are non-refundable once work has commenced. Milestone payments correspond to agreed project phases and deliverables outlined in your service agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              4. How to Request Assistance or a Refund
            </h2>
            <p>
              If you experience any issues with a template or believe your purchase qualifies for a refund, please send an email with your order confirmation number to:
            </p>
            <div className="pt-2">
              <Button
                href="mailto:contact@pixelcraftstudio.com"
                variant="outline"
                size="sm"
                className="rounded-full px-5"
                leftIcon={<Mail className="h-3.5 w-3.5 mr-1" />}
              >
                contact@pixelcraftstudio.com
              </Button>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
