import type { Metadata } from "next";
import {
  Palette,
  Code2,
  LayoutDashboard,
  Layers,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  ShieldCheck,
  Search,
  PenTool,
  Rocket,
} from "lucide-react";
import dynamic from "next/dynamic";
import { SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/shared/cta-section";
import {
  ScrollReveal,
  ScrollRevealContainer,
  ScrollRevealItem,
} from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/section-heading";

const FaqAccordion = dynamic(
  () =>
    import("@/components/shared/faq-accordion").then((mod) => mod.FaqAccordion),
  {
    loading: () => (
      <div className="min-h-[300px] space-y-4 max-w-3xl mx-auto">
        <div className="h-16 w-full rounded-2xl bg-[#E4E4E7]/40 dark:bg-white/[0.04] animate-pulse" />
        <div className="h-16 w-full rounded-2xl bg-[#E4E4E7]/40 dark:bg-white/[0.04] animate-pulse" />
        <div className="h-16 w-full rounded-2xl bg-[#E4E4E7]/40 dark:bg-white/[0.04] animate-pulse" />
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Web Development & UI/UX Design Services | pixelCraftStudio",
  description:
    "Explore bespoke services by pixelCraftStudio: custom website design, Next.js web development, full-stack web applications, UI/UX design, and digital systems.",
  keywords: [
    "Custom Website Design",
    "Website Development",
    "Web Application Development",
    "UI/UX Design",
    "Website Redesign",
    "Next.js Development",
    "React Studio",
    "pixelCraftStudio",
  ],
  alternates: {
    canonical: "/services",
  },
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We begin with a thorough discussion of your business goals, target audience, technical requirements, and milestone timeline to establish a crystal-clear scope.",
    icon: Search,
  },
  {
    step: "02",
    title: "UI/UX & Prototyping",
    description:
      "I create intuitive wireframes and high-fidelity Figma prototypes with modern typography and tokenized design systems for your review and feedback.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Clean Engineering",
    description:
      "Translating designs into clean, modular, and type-safe code using Next.js, React, TypeScript, and Tailwind CSS with sub-second page load speeds.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Quality & Performance Audit",
    description:
      "Rigorous cross-browser testing, mobile responsiveness checks, accessibility validation (WCAG AA), and Core Web Vitals optimization.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Launch & Post-Support",
    description:
      "Seamless deployment on your preferred cloud infrastructure (Vercel, AWS), DNS configuration, and complimentary 30-day post-launch warranty.",
    icon: Rocket,
  },
];

export default function ServicesPage() {
  const iconMap = {
    Palette: Palette,
    Code: Code2,
    LayoutDashboard: LayoutDashboard,
    Layers: Layers,
    RefreshCw: RefreshCw,
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white">
      {/* =========================================================================
          HERO SECTION (Creative Designer Display Scale & Generous Whitespace)
          ========================================================================= */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-[#09090B]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#4F46E5]/15 via-[#7C3AED]/10 to-transparent blur-3xl opacity-70 dark:from-[#6366F1]/20 dark:via-[#A855F7]/15 dark:to-[#EC4899]/15 dark:opacity-60"
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Freelance & Custom Services</span>
              </div>

              <div className="space-y-4">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight lg:tracking-tighter text-[#0A0A0A] dark:text-white leading-[1.18] sm:leading-[1.12] lg:leading-[1.10]">
                  <span className="block">Let&apos;s Build Something</span>
                  <span className="block">
                    <span className="gradient-text">
                      Great Together.
                    </span>
                  </span>
                </h1>
                <div className="agency-heading-bar mx-auto" />
              </div>

              <p className="font-sans text-base sm:text-lg lg:text-xl text-[#52525B] dark:text-[#A1A1AA] leading-relaxed sm:leading-[1.7] max-w-2xl sm:max-w-3xl mx-auto text-balance font-normal">
                Need a website for your business or a custom web application for your next idea? I offer design and development services tailored to your goals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  href="/contact"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-9 py-6 text-base font-bold shadow-lg shadow-indigo-500/25"
                  rightIcon={<ArrowRight className="h-4 w-4 ml-1" />}
                >
                  Discuss Your Project
                </Button>
                <Button
                  href="/portfolio"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-9 py-6 text-base font-bold"
                >
                  View Past Work
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Trust Pillars with Single Observer */}
          <ScrollRevealContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-10 sm:pt-12 border-t border-[#E4E4E7] dark:border-white/[0.08] max-w-4xl mx-auto text-left">
            {[
              { label: "Experience", value: "11+ Years" },
              { label: "Delivery", value: "On-Time & Budget" },
              { label: "Engineering", value: "Clean Code" },
              { label: "Post-Launch", value: "30 Days Support" },
            ].map((pillar) => (
              <ScrollRevealItem
                key={pillar.label}
                animation="fade-up"
                className="flex h-full"
              >
                <Card hover className="p-4 sm:p-5 w-full h-full">
                  <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] font-semibold">{pillar.label}</span>
                  <p className="font-heading text-lg sm:text-xl font-black text-[#0A0A0A] dark:text-white pt-1">{pillar.value}</p>
                </Card>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* =========================================================================
          DETAILED SERVICES BREAKDOWN (Subtle Section Band for Clean Separation)
          ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-[#F8FAFC] dark:bg-[#0B0B0F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="What I Offer"
              title="Comprehensive Design & Development Services"
              description="From creative concept to scalable deployment, explore the five core services designed to help your business stand out."
            >
              {/* Quick Assurance Pillars */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 pt-4 text-xs sm:text-sm font-semibold text-[#52525B] dark:text-[#A1A1AA]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>100% Bespoke Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Direct Developer Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Milestone-Based Billing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>30-Day Support Warranty</span>
                </div>
              </div>
            </SectionHeading>
          </ScrollReveal>

          {/* Service Cards with Two-Column Section: fade-left and fade-right */}
          <div className="space-y-10">
            {SERVICES.map((service, index) => {
              const IconC =
                iconMap[service.iconName as keyof typeof iconMap] || Code2;

              return (
                <ScrollReveal
                  key={service.id}
                  animation="fade-up"
                  delay={Math.min(index * 100, 400)}
                  className="flex flex-col h-full w-full"
                >
                  <Card
                    id={service.slug}
                    hover
                    className={`p-6 sm:p-8 md:p-12 border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-gradient-to-b dark:from-[#171720] dark:to-[#0F0F14] transition-all duration-300 shadow-md dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.08)] overflow-hidden ${
                      service.popular
                        ? "ring-2 ring-[#4F46E5]/30 dark:ring-[#C084FC]/40"
                        : ""
                    }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                      {/* Left: Info */}
                      <div className="lg:col-span-7 space-y-6 flex flex-col w-full">
                        <div className="flex items-center gap-3">
                          <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-tr from-[#4F46E5]/10 via-[#7C3AED]/10 to-transparent dark:from-[#6366F1]/20 dark:via-[#8B5CF6]/15 dark:to-[#EC4899]/10 text-[#4F46E5] dark:text-[#C084FC] border border-[#4F46E5]/20 dark:border-white/10 shadow-xs">
                            <IconC className="h-7 w-7" />
                          </div>
                          {service.popular && (
                            <span className="rounded-full bg-[#0A0A0A] text-white dark:bg-gradient-to-r dark:from-[#6366F1] dark:to-[#EC4899] px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                              <Sparkles className="h-3 w-3" />
                              <span>Most Requested</span>
                            </span>
                          )}
                        </div>

                        <div className="space-y-3">
                          <h3 className="font-heading text-2xl sm:text-4xl font-black text-[#0A0A0A] dark:text-white">
                            {service.title}
                          </h3>
                          <p className="text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                            {service.shortDesc}
                          </p>
                          <p className="text-sm sm:text-base text-[#71717A] dark:text-[#A1A1AA] leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] pt-2">
                          <span className="flex items-center gap-2 font-medium">
                            <Clock className="h-4 w-4 text-[#4F46E5] dark:text-[#818CF8]" />
                            <span>Timeline: <strong className="text-[#0A0A0A] dark:text-white font-bold">{service.timeline}</strong></span>
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-2 font-medium">
                            <ShieldCheck className="h-4 w-4 text-emerald-500" />
                            <span>Codebase Ownership Included</span>
                          </span>
                        </div>
                      </div>

                      {/* Right: Deliverables List & CTA */}
                      <div className="lg:col-span-5 flex flex-col w-full">
                        <div className="rounded-[20px] border border-[#E4E4E7] dark:border-white/10 bg-[#F8FAFC] dark:bg-gradient-to-b dark:from-[#1A1A24] dark:to-[#121218] p-7 sm:p-8 space-y-6 shadow-xs dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                          <h4 className="font-heading text-xs font-bold text-[#0A0A0A] dark:text-white uppercase tracking-widest">
                            Key Deliverables Included:
                          </h4>

                          <ul className="space-y-3.5">
                            {service.deliverables.map((d, i) => (
                              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#0A0A0A] dark:text-white font-medium">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span className="leading-snug">{d}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="pt-4 border-t border-[#E4E4E7] dark:border-white/[0.08]">
                            <Button
                              href={service.ctaHref}
                              size="lg"
                              className="w-full rounded-full font-bold shadow-md"
                              rightIcon={<ArrowRight className="h-4 w-4" />}
                            >
                              {service.ctaText}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          COLLABORATIVE 5-STEP WORKFLOW (Clean White Studio Section)
          ========================================================================= */}
      <section className="py-24 sm:py-36 bg-white dark:bg-[#09090B] border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="How We Work"
              title="A Smooth, Transparent 5-Step Process"
              description="From our first discovery call to deployment day, here is how we bring your project to life with no surprises."
            />
          </ScrollReveal>

          {/* 5-Step Process with Single Observer */}
          <ScrollRevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => {
              const StepIcon = step.icon;
              return (
                <ScrollRevealItem
                  key={step.step}
                  animation="fade-up"
                  className="flex flex-col h-full w-full"
                >
                  <Card
                    hover
                    className="group relative p-6 sm:p-7 flex flex-col justify-between space-y-6 w-full h-full rounded-[20px] overflow-hidden"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-4xl font-black text-[#4F46E5] dark:text-[#C084FC] tracking-tighter">
                          {step.step}
                        </span>
                        <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#4F46E5]/10 text-[#4F46E5] dark:bg-[#C084FC]/10 dark:text-[#C084FC] group-hover:scale-105 group-hover:bg-[#4F46E5] group-hover:text-white dark:group-hover:bg-[#C084FC] dark:group-hover:text-[#09090B] transition-all duration-300 shadow-xs">
                          <StepIcon className="h-6 w-6" />
                        </div>
                      </div>

                      <h3 className="font-heading text-xl font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#C084FC] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </ScrollRevealItem>
              );
            })}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* =========================================================================
          SERVICE FAQS (Subtle Section Band for Clean Separation)
          ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-[#F8FAFC] dark:bg-[#0B0B0F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Frequently Asked Questions"
              description="Have questions about hiring me for custom design or development work? Find answers below."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.15}>
            <FaqAccordion />
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA (Creative Designer High Impact)
          ========================================================================= */}
      <CTASection
        variant="card"
        eyebrow="Start Your Project"
        title="Ready to Build Your Website or Web Application?"
        description="Share a few details about your project, goals, and expected timeline. I'll get back to you within 24 hours to schedule a discovery call."
        primaryButtonText="Get in Touch with pixelCraftStudio"
        primaryButtonHref="/contact"
      />
    </div>
  );
}
