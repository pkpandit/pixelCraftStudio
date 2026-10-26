import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "pixelCraftStudio | Digital Products, Website Templates & Web Development",
  description:
    "Explore production-ready Next.js website templates, Figma UI kits, and full-stack bespoke development services crafted for ambitious founders and creative studios.",
  alternates: {
    canonical: "/",
  },
};
import {
  ArrowRight,
  Sparkles,
  Code2,
  Palette,
  CheckCircle2,
  Star,
  Globe,
  Layers,
  LayoutDashboard,
  RefreshCw,
  Award,
  Cpu,
  Box,
  MessageSquare,
  ChevronRight,
  Clock,
  Zap,
} from "lucide-react";
import {
  PROFILE,
  SERVICES,
  PRODUCT_CATEGORIES,
  DIGITAL_PRODUCTS,
  WHY_CHOOSE_ME,
  TESTIMONIALS,
} from "@/lib/data";
import dynamic from "next/dynamic";
import { CTASection } from "@/components/shared/cta-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ScrollReveal,
  ScrollRevealContainer,
  ScrollRevealItem,
} from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/section-heading";

const FeaturedProductsFilter = dynamic(
  () =>
    import("@/components/shared/featured-products-filter").then(
      (mod) => mod.FeaturedProductsFilter
    ),
  {
    loading: () => (
      <div className="min-h-[420px] flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    ),
  }
);

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

const TestimonialsCarousel = dynamic(
  () =>
    import("@/components/shared/testimonials-carousel").then(
      (mod) => mod.TestimonialsCarousel
    ),
  {
    loading: () => (
      <div className="min-h-[420px] flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    ),
  }
);

const serviceIcons = {
  Palette: Palette,
  Code: Code2,
  LayoutDashboard: LayoutDashboard,
  Layers: Layers,
  RefreshCw: RefreshCw,
};

const whyIcons = {
  Award: Award,
  Palette: Palette,
  Cpu: Cpu,
  Code2: Code2,
  Box: Box,
  MessageSquare: MessageSquare,
};

const productIcons = {
  Globe: Globe,
  Atom: Code2,
  BarChart3: LayoutDashboard,
  Figma: Layers,
  Sparkles: Sparkles,
};

export default function HomePage() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================================
          1. HERO SECTION (Creative Agency Display Scale & Generous White Space)
          ========================================================================= */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-[#09090B]">
        {/* Acens-Inspired Background Image Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/hero-bg.jpg"
            alt="PixelCraftStudio creative digital workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale contrast-115 opacity-25 dark:opacity-60"
          />
          {/* Light Mode Overlay for high-contrast text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/80 to-white dark:hidden" />
          {/* Dark Mode Overlay inspired by Acens data-overlay-dark="6" */}
          <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-[#09090B]/75 via-[#09090B]/60 to-[#09090B]" />
        </div>

        {/* Soft Radial Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 z-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#4F46E5]/15 via-[#7C3AED]/10 to-transparent blur-3xl opacity-75 dark:from-[#6366F1]/20 dark:via-[#8B5CF6]/15 dark:to-transparent dark:opacity-70"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-6xl mx-auto space-y-10 sm:space-y-12">
            {/* Hero Main Content */}
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="flex flex-col items-center text-center space-y-8 sm:space-y-10">
                {/* Agency Eyebrow Tag */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/20 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-extrabold tracking-[0.22em] text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/25 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{PROFILE.eyebrow}</span>
                </div>

                <div className="space-y-4">
                  <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight lg:tracking-tighter text-[#0A0A0A] dark:text-white leading-[1.18] sm:leading-[1.12] lg:leading-[1.10]">
                    <span className="block">Beautiful Digital Products.</span>
                    <span className="block">
                      <span className="gradient-text">
                        Websites Built to Perform.
                      </span>
                    </span>
                  </h1>
                  <div className="agency-heading-bar mx-auto" />
                </div>

                {/* Subtitle / Bio */}
                <p className="font-sans text-base sm:text-lg lg:text-xl text-[#52525B] dark:text-[#A1A1AA] leading-relaxed sm:leading-[1.7] max-w-2xl sm:max-w-3xl text-balance font-normal">
                  {PROFILE.heroBio}
                </p>

                {/* Dual Pill Action CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
                  <Button
                    href="/products"
                    size="lg"
                    className="w-full sm:w-auto px-9 py-6 text-base font-bold shadow-lg shadow-indigo-500/25"
                    rightIcon={<ArrowRight className="h-4 w-4 ml-1" />}
                  >
                    Explore Digital Products
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto px-9 py-6 text-base font-bold"
                  >
                    Let&apos;s Work Together
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Experience & Trust Badges Grid */}
            <ScrollRevealContainer className="pt-10 sm:pt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl border-t border-[#E4E4E7] dark:border-white/[0.08]">
              {[
                { value: "11+", label: "Years Experience" },
                { value: "45+", label: "Completed Projects" },
                { value: "1,200+", label: "Products Sold" },
                { value: "99%", label: "Client Satisfaction" },
              ].map((badge) => (
                <ScrollRevealItem
                  key={badge.label}
                  animation="fade-up"
                  className="flex flex-col h-full w-full"
                >
                  <Card hover className="p-5 sm:p-7 flex flex-col items-center text-center w-full h-full justify-center">
                    <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] dark:text-white tracking-tight">
                      {badge.value}
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#52525B] dark:text-[#A1A1AA] font-extrabold uppercase tracking-widest mt-2 sm:mt-2.5">
                      {badge.label}
                    </span>
                  </Card>
                </ScrollRevealItem>
              ))}
            </ScrollRevealContainer>

            {/* Modern Tech Stack Pills */}
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                  "Figma",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-[#14141C] px-4 py-1.5 text-xs font-semibold text-[#52525B] dark:text-[#A1A1AA] shadow-2xs transition-all duration-200 hover:text-[#0A0A0A] dark:hover:text-white hover:border-[#4F46E5]/40 dark:hover:border-white/30 hover:-translate-y-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT ME SECTION (Subtle Section Band for Clean Separation)
          ========================================================================= */}
      <section className="py-24 sm:py-36 bg-[#F8FAFC] dark:bg-[#0B0B0F] border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Profile Card */}
            <ScrollReveal animation="fade-right" className="lg:col-span-5 flex flex-col items-center lg:items-start">
              <Card className="relative w-full max-w-md p-8 sm:p-10 space-y-7 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#4F46E5] to-[#7C3AED] font-black text-white text-2xl shadow-lg ring-1 ring-white/20 dark:from-[#6366F1] dark:via-[#8B5CF6] dark:to-[#EC4899]">
                    <span>PCS</span>
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white dark:border-[#121215] bg-emerald-500" />
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-black text-[#0A0A0A] dark:text-white leading-tight">
                      pixelCraft
                      <span className="block text-xs font-black tracking-[0.25em] text-[#4F46E5] dark:text-[#818CF8] uppercase mt-0.5">
                        STUDIO
                      </span>
                    </h4>
                    <p className="text-xs font-semibold text-[#52525B] dark:text-[#A1A1AA] mt-1">
                      11+ Years Experience · Available
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 pt-2 text-sm border-t border-[#E4E4E7] dark:border-white/[0.08]">
                  <div className="flex items-center justify-between text-[#52525B] dark:text-[#A1A1AA]">
                    <span className="font-medium">Core Focus</span>
                    <span className="font-bold text-[#0A0A0A] dark:text-white">Next.js & UI/UX</span>
                  </div>
                  <div className="flex items-center justify-between text-[#52525B] dark:text-[#A1A1AA]">
                    <span className="font-medium">Design Toolkit</span>
                    <span className="font-bold text-[#0A0A0A] dark:text-white">Figma, Auto-Layout</span>
                  </div>
                  <div className="flex items-center justify-between text-[#52525B] dark:text-[#A1A1AA]">
                    <span className="font-medium">Frontend Architecture</span>
                    <span className="font-bold text-[#0A0A0A] dark:text-white">React, TypeScript, CSS</span>
                  </div>
                  <div className="flex items-center justify-between text-[#52525B] dark:text-[#A1A1AA]">
                    <span className="font-medium">Backend & APIs</span>
                    <span className="font-bold text-[#0A0A0A] dark:text-white">Node.js, PostgreSQL</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#181822] dark:to-[#121218] p-4 border border-[#E4E4E7] dark:border-white/10 text-xs text-[#52525B] dark:text-[#A1A1AA] leading-relaxed font-medium shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                  💡 Dedicated to delivering clean, maintainable code and human-centered design.
                </div>
              </Card>
            </ScrollReveal>

            {/* Right Column: About Copy & Content */}
            <ScrollReveal animation="fade-left" delay={0.1} className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 text-xs font-black tracking-wider text-[#4F46E5] dark:text-[#C084FC] uppercase">
                <span className="h-2 w-2 rounded-full bg-[#4F46E5] dark:bg-[#C084FC]" />
                <span>About Me</span>
              </div>

              <div className="space-y-3.5">
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0A] dark:text-white text-balance leading-tight">
                  Welcome to pixelCraftStudio. We Design, Build, and Create for the Web.
                </h2>
                <div className="agency-heading-bar ml-0 mr-auto" />
              </div>

              <div className="space-y-5 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                <p>{PROFILE.aboutBio[0]}</p>
                <p>{PROFILE.aboutBio[1]}</p>
                <p>{PROFILE.aboutBio[2]}</p>
                <p className="font-semibold text-[#0A0A0A] dark:text-white">{PROFILE.aboutBio[3]}</p>
              </div>

              <div className="pt-2">
                <Button
                  href="/about"
                  variant="outline"
                  size="default"
                  className="px-7 font-bold"
                  rightIcon={<ChevronRight className="h-4 w-4" />}
                >
                  More About Me
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SERVICES SECTION (Clean White Studio Canvas)
          ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-[#09090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header with Large Typography */}
          <ScrollReveal animation="fade-up" className="mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Bespoke Services"
              title="Let's Build Something Great Together."
              description="Need a website for your business or a custom web application for your next idea? I offer design and development services tailored to your goals."
            >
              {/* Quick Assurance Pillars */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 pt-6 text-xs sm:text-sm font-semibold text-[#52525B] dark:text-[#A1A1AA]">
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

          {/* Services Grid with Single Observer */}
          <ScrollRevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const IconComponent =
                serviceIcons[service.iconName as keyof typeof serviceIcons] || Code2;
              const stepNumber = String(index + 1).padStart(2, "0");

              return (
                <ScrollRevealItem
                  key={service.id}
                  animation="fade-up"
                  className="flex flex-col h-full w-full"
                >
                  <Card
                    hover
                    className={`group relative flex flex-col justify-between p-7 sm:p-9 lg:p-10 transition-all duration-300 w-full h-full ${
                      service.popular
                        ? "ring-2 ring-[#4F46E5]/40 dark:ring-[#C084FC]/40 shadow-xl shadow-indigo-500/10 dark:shadow-[0_20px_50px_-10px_rgba(139,92,246,0.3)]"
                        : ""
                    }`}
                  >
                    <div className="space-y-6">
                      {/* Header Row: Icon, Watermark Number & Popular Badge */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#4F46E5]/10 via-[#7C3AED]/10 to-transparent dark:from-[#6366F1]/20 dark:via-[#8B5CF6]/15 dark:to-[#EC4899]/10 text-[#4F46E5] dark:text-[#C084FC] border border-[#4F46E5]/20 dark:border-white/10 shadow-xs group-hover:scale-105 group-hover:shadow-md group-hover:shadow-indigo-500/20 group-hover:border-[#4F46E5]/40 transition-all duration-300">
                          <IconComponent className="h-8 w-8" />
                        </div>

                        <div className="flex items-center gap-3">
                          {service.popular ? (
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#4F46E5]/15 to-[#7C3AED]/15 dark:from-[#6366F1]/25 dark:to-[#EC4899]/25 border border-[#4F46E5]/30 dark:border-[#C084FC]/40 px-3.5 py-1 text-xs font-bold text-[#4F46E5] dark:text-[#C084FC] uppercase tracking-wider shadow-xs">
                              <Sparkles className="h-3 w-3 animate-pulse" />
                              <span>Popular</span>
                            </div>
                          ) : null}
                          <span className="font-heading text-3xl sm:text-4xl font-black text-zinc-200 dark:text-zinc-800/80 group-hover:text-[#4F46E5]/35 dark:group-hover:text-[#C084FC]/35 transition-colors select-none">
                            {stepNumber}
                          </span>
                        </div>
                      </div>

                      {/* Timeline Pill */}
                      <div>
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F8FAFC] dark:bg-[#161620] border border-[#E4E4E7] dark:border-white/10 px-3.5 py-1 text-xs font-semibold text-[#52525B] dark:text-[#A1A1AA]">
                          <Clock className="h-3.5 w-3.5 text-[#4F46E5] dark:text-[#C084FC]" />
                          <span>Turnaround: {service.timeline}</span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-3">
                        <h3 className="font-heading text-2xl font-black tracking-tight text-[#0A0A0A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#C084FC] transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* Deliverables List */}
                      <div className="pt-4 space-y-3 border-t border-[#E4E4E7] dark:border-white/[0.08]">
                        <span className="text-[11px] font-extrabold text-[#0A0A0A] dark:text-white uppercase tracking-wider block">
                          Included Deliverables
                        </span>
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-[#52525B] dark:text-[#A1A1AA]">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-tight font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Pill */}
                    <div className="pt-6 mt-8 border-t border-[#E4E4E7] dark:border-white/[0.08]">
                      <Button
                        href={service.ctaHref}
                        variant={service.popular ? "default" : "secondary"}
                        size="sm"
                        className="w-full justify-between font-bold"
                        rightIcon={<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5" />}
                      >
                        {service.ctaText}
                      </Button>
                    </div>
                  </Card>
                </ScrollRevealItem>
              );
            })}
          </ScrollRevealContainer>

          {/* Bottom Prompt */}
          <ScrollReveal animation="fade-up" delay={0.2} className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4F46E5] dark:text-[#C084FC] hover:underline underline-offset-4"
            >
              <span>Explore all services, deliverables, and timelines</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          4. DIGITAL PRODUCTS SECTION (Subtle Section Band for Clean Separation)
          ========================================================================= */}
      <section className="py-24 sm:py-36 bg-[#F8FAFC] dark:bg-[#0B0B0F] border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Section Header */}
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="Digital Products & Resources"
              title="Premium Digital Products"
              description="Website templates, UI kits, and design assets built for modern businesses."
            >
              {/* Trust Proof Ribbon */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-xs font-semibold text-[#52525B] dark:text-[#A1A1AA]">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <Zap className="h-3.5 w-3.5" />
                  <span>Instant Access Download</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5 text-amber-500 font-bold">
                  <Star className="h-3.5 w-3.5 fill-amber-500" />
                  <span>4.9/5 Rating (1,200+ Sales)</span>
                </span>
                <span>·</span>
                <span>Lifetime Updates</span>
                <span>·</span>
                <span>Commercial License</span>
              </div>
            </SectionHeading>
          </ScrollReveal>

          {/* Interactive Featured Products Filter Showcase */}
          <ScrollReveal animation="fade-up" delay={0.1}>
            <FeaturedProductsFilter products={DIGITAL_PRODUCTS} />
          </ScrollReveal>

          {/* 5 Product Categories Showcase */}
          <div>
            <ScrollReveal animation="fade-up" className="text-center sm:text-left mb-10 space-y-2">
              <span className="agency-eyebrow">
                Catalog Navigation
              </span>
              <h3 className="font-heading text-2xl sm:text-4xl font-black text-[#0A0A0A] dark:text-white">
                Explore by Resource Category
              </h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] max-w-xl">
                Browse hand-crafted assets categorized by framework and design medium.
              </p>
            </ScrollReveal>

            <ScrollRevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCT_CATEGORIES.map((cat, index) => {
                const IconComp =
                  productIcons[cat.iconName as keyof typeof productIcons] || Box;

                return (
                  <ScrollRevealItem
                    key={cat.id}
                    animation="fade-up"
                    className="flex flex-col h-full w-full"
                  >
                    <Card
                      hover
                      className="group relative flex flex-col justify-between p-7 sm:p-9 w-full h-full rounded-[20px] overflow-hidden"
                    >
                      {/* Watermark Number */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-4 right-6 font-heading text-5xl font-black tracking-tighter text-black/[0.04] dark:text-white/[0.05] select-none transition-transform duration-500 group-hover:scale-110"
                      >
                        0{index + 1}
                      </span>

                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#4F46E5]/10 text-[#4F46E5] dark:bg-[#C084FC]/10 dark:text-[#C084FC] group-hover:scale-105 group-hover:bg-[#4F46E5] group-hover:text-white dark:group-hover:bg-[#C084FC] dark:group-hover:text-[#09090B] transition-all duration-300 shadow-xs">
                            <IconComp className="h-8 w-8" />
                          </div>
                          <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#FAFAF9] dark:bg-[#181822] text-[#52525B] dark:text-[#D4D4D8] border border-[#E4E4E7] dark:border-white/10">
                            {cat.count}+ Resources
                          </span>
                        </div>

                        <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#C084FC] transition-colors">
                          {cat.title}
                        </h4>

                        <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                          {cat.description}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-[#E4E4E7] dark:border-white/[0.08]">
                        <Button
                          href={`/products?cat=${cat.id}`}
                          variant="secondary"
                          size="sm"
                          className="w-full justify-between font-bold rounded-full px-5 group-hover:bg-[#4F46E5] group-hover:text-white dark:group-hover:bg-[#C084FC] dark:group-hover:text-[#09090B] transition-all"
                          rightIcon={<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />}
                        >
                          {cat.ctaText}
                        </Button>
                      </div>
                    </Card>
                  </ScrollRevealItem>
                );
              })}
            </ScrollRevealContainer>
          </div>

          {/* Closing Banner */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <Card
              glass
              className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-10 md:p-12 max-w-4xl mx-auto shadow-md"
            >
              <div className="space-y-1.5 text-center sm:text-left">
                <h4 className="font-heading text-xl sm:text-2xl font-black text-[#0A0A0A] dark:text-white">
                  Looking for more options?
                </h4>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] max-w-lg font-medium">
                  Find the right starting point for your next idea and spend more time building something great.
                </p>
              </div>
              <Button
                href="/products"
                size="lg"
                className="shrink-0 rounded-full px-8 shadow-md font-bold"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Browse All Products
              </Button>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          5. WHY CHOOSE ME? (Clean White Studio Canvas)
          ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-[#09090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal animation="fade-up" className="mb-20 sm:mb-24">
            <SectionHeading
              eyebrow="Why Choose Me?"
              title="Experience, Creativity, and Quality in Every Project."
              description="Choosing the right developer or digital product can make a real difference. I focus on delivering thoughtful solutions that balance design, functionality, and practical value."
            />
          </ScrollReveal>

          {/* 6 Value Pillars with Single Observer */}
          <ScrollRevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {WHY_CHOOSE_ME.map((item, index) => {
              const IconC =
                whyIcons[item.iconName as keyof typeof whyIcons] || Award;

              return (
                <ScrollRevealItem
                  key={item.title}
                  animation="fade-up"
                  className="flex flex-col h-full w-full"
                >
                  <Card
                    hover
                    className="group relative flex flex-col justify-between p-7 sm:p-9 lg:p-10 w-full h-full rounded-[20px] overflow-hidden"
                  >
                    {/* Watermark Number */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-4 right-6 font-heading text-5xl font-black tracking-tighter text-black/[0.04] dark:text-white/[0.05] select-none transition-transform duration-500 group-hover:scale-110"
                    >
                      0{index + 1}
                    </span>

                    <div className="space-y-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#4F46E5]/10 text-[#4F46E5] dark:bg-[#C084FC]/10 dark:text-[#C084FC] group-hover:scale-105 group-hover:bg-[#4F46E5] group-hover:text-white dark:group-hover:bg-[#C084FC] dark:group-hover:text-[#09090B] transition-all duration-300 shadow-xs">
                        <IconC className="h-8 w-8" />
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#C084FC] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E4E4E7]/60 dark:border-white/[0.06] flex items-center gap-2 text-xs font-bold text-[#71717A] dark:text-[#A1A1AA]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5] dark:bg-[#C084FC]" />
                      <span>Standard of Excellence</span>
                    </div>
                  </Card>
                </ScrollRevealItem>
              );
            })}
          </ScrollRevealContainer>

          {/* Closing CTA */}
          <ScrollReveal animation="fade-up" delay={0.2} className="text-center">
            <Button
              href="/contact"
              size="lg"
              className="rounded-full px-9 py-5 text-base font-bold shadow-md shadow-indigo-500/25"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Have a Project in Mind? Let&apos;s Talk.
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          6. TESTIMONIALS SECTION (Subtle Section Band for Clean Separation)
          ========================================================================= */}
      <section className="py-24 sm:py-36 bg-[#F8FAFC] dark:bg-[#0B0B0F] border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal animation="fade-up" className="mb-20 sm:mb-24">
            <SectionHeading
              eyebrow="Client Testimonials & Feedback"
              title="Kind Words from Clients"
              description="Building good relationships matters as much as building good websites. Here’s what founders, directors, and developers say about working together."
            />
          </ScrollReveal>

          {/* Testimonial Cards Carousel */}
          <ScrollReveal animation="fade-up" delay={0.1} className="mb-14">
            <TestimonialsCarousel testimonials={TESTIMONIALS} />
          </ScrollReveal>

          {/* Feedback Prompt */}
          <ScrollReveal animation="fade-up" delay={0.2} className="text-center text-sm text-[#52525B] dark:text-[#A1A1AA] font-medium">
            <p>
              Have we worked together? I’d love to hear about your experience.{" "}
              <Link
                href="/contact"
                className="font-bold text-[#4F46E5] dark:text-[#C084FC] underline underline-offset-4 hover:opacity-85 transition-opacity"
              >
                Share your feedback →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          7. FREQUENTLY ASKED QUESTIONS SECTION (Clean White Studio Canvas)
          ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-[#09090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Got Questions?"
              title="Frequently Asked Questions"
              description="Find clear answers to common questions about services, licensing, digital products, timeline, and pricing."
            />
          </ScrollReveal>

          <FaqAccordion />

          {/* Bottom Prompt */}
          <ScrollReveal animation="fade-up" delay={0.2} className="mt-16 text-center">
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] font-medium">
              Still have a question that isn&apos;t covered here?{" "}
              <Link
                href="/contact"
                className="font-bold text-[#4F46E5] dark:text-[#C084FC] underline underline-offset-4 hover:opacity-85 transition-opacity"
              >
                Send me a message directly →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          8. FINAL CALL-TO-ACTION SECTION (Large Designer Display Banner)
          ========================================================================= */}
      <CTASection
        eyebrow="Ready to Begin?"
        title="Have an Idea? Let's Bring It to Life."
        description="Whether you’re looking for a ready-made digital product or need a custom website, I’m here to help you take the next step."
        primaryButtonText="Start a Project"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Products"
        secondaryButtonHref="/products"
      />
    </div>
  );
}
