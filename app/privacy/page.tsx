import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy | pixelCraftStudio",
  description:
    "Privacy Policy for pixelCraftStudio. Learn how we handle your personal data, inquiries, and digital product purchase transactions.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
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
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="h-4 w-4" />
            <span>Legal Notice</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[#0A0A0A] dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#71717A] dark:text-[#A1A1AA]">
            Last updated: {lastUpdated} · pixelCraftStudio
          </p>
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none space-y-8 text-sm sm:text-base text-[#52525B] dark:text-[#D4D4D8] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              1. Overview & Commitment
            </h2>
            <p>
              At pixelCraftStudio, we respect your privacy and are committed to protecting any personal information you provide when visiting our website, downloading our digital products, or communicating with us regarding bespoke web design and software engineering services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              2. Information We Collect
            </h2>
            <p>
              We collect information strictly when you voluntarily submit it through our contact inquiry forms or purchase our templates and UI kits. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details: Name, email address, company name, and project scope requirements.</li>
              <li>Billing metadata: Handled securely through encrypted payment processors (e.g. Stripe, Lemon Squeezy). We never store your full credit card or sensitive banking numbers on our servers.</li>
              <li>Technical diagnostics: Anonymous analytics (browser version, operating system, and viewport scale) used solely to enhance responsiveness and performance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              3. How We Use Your Data
            </h2>
            <p>
              Your personal information is used exclusively to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond directly to your project inquiry, consultation request, or product support questions.</li>
              <li>Fulfill digital license delivery and provide update notifications for purchased templates.</li>
              <li>Maintain website reliability, speed optimization, and defense against malicious attacks.</li>
            </ul>
            <p className="font-semibold text-[#0A0A0A] dark:text-white">
              We never sell, rent, or trade your personal data to third-party marketing firms or data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              4. Cookies & Local Storage
            </h2>
            <p>
              We utilize minimal client-side <code className="px-1.5 py-0.5 rounded bg-[#F4F4F5] dark:bg-[#181822] text-xs font-mono">localStorage</code> strictly to persist your preferred color theme (<code className="text-xs font-mono">light</code> or <code className="text-xs font-mono">dark</code>). We do not deploy invasive cross-site tracking cookies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to request data deletion, contact us at:
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
