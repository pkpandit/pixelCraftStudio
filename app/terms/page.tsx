import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms & Conditions | pixelCraftStudio",
  description:
    "Terms and Conditions governing the use of pixelCraftStudio website templates, Figma UI systems, and bespoke development agreements.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/20 bg-[#4F46E5]/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#4F46E5] dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
            <FileText className="h-4 w-4" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[#0A0A0A] dark:text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-[#71717A] dark:text-[#A1A1AA]">
            Last updated: {lastUpdated} · pixelCraftStudio
          </p>
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none space-y-8 text-sm sm:text-base text-[#52525B] dark:text-[#D4D4D8] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing pixelCraftStudio or purchasing any digital product (including Next.js website templates, admin dashboards, and Figma UI kits), you agree to be bound by these Terms & Conditions and all applicable local, national, and international laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              2. Digital Product License
            </h2>
            <p>
              When purchasing a digital product from pixelCraftStudio, you are granted a non-exclusive, worldwide, revocable license under the following guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Permitted Uses:</strong> You may customize the code and design assets to build unlimited personal or commercial end products for yourself or your direct clients.</li>
              <li><strong>Restrictions:</strong> You may not sub-license, resell, redistribute, or publish the source files or templates as standalone themes, stock assets, or competing templates.</li>
              <li><strong>Intellectual Property:</strong> All underlying code frameworks, design systems, and visual assets remain the intellectual property of pixelCraftStudio.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              3. Bespoke Consulting & Development Services
            </h2>
            <p>
              Custom software engineering and website design engagements are defined through individual Statements of Work (SOW) detailing milestones, deliverables, timelines, and payment terms. Final intellectual property of custom deliverables transfers upon receipt of full payment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              4. Disclaimer of Warranties
            </h2>
            <p>
              Digital products and software templates are delivered &ldquo;as is&rdquo; without warranty of any kind, express or implied. While we thoroughly test compatibility with current LTS versions of Node.js, Next.js, and modern browsers, pixelCraftStudio cannot guarantee uninterrupted or error-free operation across all third-party integrations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              5. Questions & Licensing Inquiries
            </h2>
            <p>
              For extended agency licensing or terms clarification, reach out to us directly:
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
