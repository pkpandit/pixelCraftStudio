import Link from "next/link";
import Image from "next/image";
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
  ExternalLink,
  Quote,
  Clock,
  ShieldCheck,
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
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { FeaturedProductsFilter } from "@/components/shared/featured-products-filter";
import { CTASection } from "@/components/shared/cta-section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/section-heading";

export default function HomePage() {
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================================
          1. HERO SECTION (Creative Designer Display Scale & Generous White Space)
          ========================================================================= */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-[#09090B]">
        {/* Subtle Ambient Vibrant Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#4F46E5]/15 via-[#7C3AED]/10 to-transparent blur-3xl opacity-70 dark:from-[#6366F1]/20 dark:via-[#A855F7]/15 dark:to-[#EC4899]/15 dark:opacity-60"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-6xl mx-auto space-y-8 sm:space-y-10">
            {/* Hero Main Content */}
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="flex flex-col items-center text-center space-y-8 sm:space-y-10">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{PROFILE.eyebrow}</span>
                </div>

                {/* Main Bold Headline with Large Designer Typography */}
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight lg:tracking-tighter text-[#0A0A0A] dark:text-white leading-[1.18] sm:leading-[1.12] lg:leading-[1.10]">
                  <span className="block">Beautiful Digital Products.</span>
                  <span className="block">
                    <span className="gradient-text">
                      Websites Built to Perform.
                    </span>
                  </span>
                </h1>

                {/* Subtitle / Bio */}
                <p className="font-sans text-base sm:text-lg lg:text-xl text-[#52525B] dark:text-[#A1A1AA] leading-relaxed sm:leading-[1.7] max-w-2xl sm:max-w-3xl text-balance font-normal">
                  {PROFILE.heroBio}
                </p>

                {/* Action CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
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
            <div className="pt-10 sm:pt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full max-w-4xl border-t border-[#E4E4E7] dark:border-white/[0.08]">
              {[
                { value: "11+", label: "Years Experience" },
                { value: "45+", label: "Completed Projects" },
                { value: "1,200+", label: "Products Sold" },
                { value: "99%", label: "Client Satisfaction" },
              ].map((badge, i) => (
                <ScrollReveal
                  key={badge.label}
                  animation="fade-up"
                  delay={Math.min(i * 100, 400)}
                  className="flex flex-col h-full w-full"
                >
                  <Card hover className="p-4 sm:p-6 flex flex-col items-center text-center w-full h-full justify-center">
                    <span className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] dark:text-white tracking-tight">
                      {badge.value}
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#52525B] dark:text-[#A1A1AA] font-bold uppercase tracking-wider mt-1.5 sm:mt-2">
                      {badge.label}
                    </span>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Modern Tech Stack Pills */}
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
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
                    className="rounded-full border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#161620] dark:to-[#101015] px-4 py-1.5 text-xs font-semibold text-[#52525B] dark:text-[#A1A1AA] transition-all hover:text-[#0A0A0A] dark:hover:text-white hover:border-[#4F46E5]/40 dark:hover:border-white/30 dark:hover:from-[#1C1C28] dark:hover:to-[#14141C]"
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
                    <span>PU</span>
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white dark:border-[#121215] bg-emerald-500" />
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-black text-[#0A0A0A] dark:text-white">
                      Pramod Upadhyay
                    </h4>
                    <p className="text-sm font-bold text-[#4F46E5] dark:text-[#C084FC]">
                      Full Stack Developer & UI Designer
                    </p>
                    <p className="text-xs font-semibold text-[#52525B] dark:text-[#A1A1AA]">
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

              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0A] dark:text-white text-balance leading-tight">
                Hi, I’m Pramod. I Design, Build, and Create for the Web.
              </h2>

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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const IconComponent =
                serviceIcons[service.iconName as keyof typeof serviceIcons] || Code2;

              return (
                <ScrollReveal
                  key={service.id}
                  animation="fade-up"
                  delay={Math.min(index * 100, 400)}
                  className="flex flex-col h-full w-full"
                >
                  <Card
                    hover
                    className={`group relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 transition-all duration-300 w-full ${
                      service.popular
                        ? "ring-2 ring-[#4F46E5]/30 dark:ring-[#C084FC]/40 shadow-xl dark:shadow-[0_20px_50px_-10px_rgba(139,92,246,0.25)]"
                        : ""
                    }`}
                  >
                    <div className="space-y-6">
                      {/* Header Row: Icon, Turnaround & Badge */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-tr from-[#4F46E5]/10 via-[#7C3AED]/10 to-transparent dark:from-[#6366F1]/20 dark:via-[#8B5CF6]/15 dark:to-[#EC4899]/10 text-[#4F46E5] dark:text-[#C084FC] border border-[#4F46E5]/20 dark:border-white/10 shadow-xs group-hover:scale-105 group-hover:shadow-md group-hover:shadow-indigo-500/20 group-hover:border-[#4F46E5]/40 transition-all duration-300">
                          <IconComponent className="h-7 w-7" />
                        </div>

                        {service.popular ? (
                          <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#4F46E5]/15 to-[#7C3AED]/15 dark:from-[#6366F1]/25 dark:to-[#EC4899]/25 border border-[#4F46E5]/30 dark:border-[#C084FC]/40 px-3.5 py-1 text-xs font-bold text-[#4F46E5] dark:text-[#C084FC] uppercase tracking-wider shadow-xs">
                            <Sparkles className="h-3 w-3 animate-pulse" />
                            <span>Popular Choice</span>
                          </div>
                        ) : (
                          <span className="text-[11px] font-semibold text-[#71717A] dark:text-[#A1A1AA] uppercase tracking-wider">
                            Custom Scope
                          </span>
                        )}
                      </div>

                      {/* Timeline Indicator */}
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAFAF9] dark:bg-[#161620] border border-[#E4E4E7] dark:border-white/10 px-3 py-1 text-xs font-semibold text-[#52525B] dark:text-[#A1A1AA]">
                        <Clock className="h-3.5 w-3.5 text-[#4F46E5] dark:text-[#C084FC]" />
                        <span>Turnaround: {service.timeline}</span>
                      </div>

                      <div className="space-y-2.5">
                        <h3 className="font-heading text-2xl font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#C084FC] transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>

                      <div className="pt-4 space-y-3 border-t border-[#E4E4E7] dark:border-white/[0.08]">
                        <span className="text-[11px] font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider block">
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

                    <div className="pt-6 mt-8 border-t border-[#E4E4E7] dark:border-white/[0.08]">
                      <Button
                        href={service.ctaHref}
                        variant={service.popular ? "default" : "secondary"}
                        size="sm"
                        className="w-full justify-between font-bold"
                        rightIcon={<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />}
                      >
                        {service.ctaText}
                      </Button>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>

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
              <span className="text-xs font-bold tracking-widest text-[#4F46E5] dark:text-[#C084FC] uppercase">
                Catalog Navigation
              </span>
              <h3 className="font-heading text-2xl sm:text-4xl font-black text-[#0A0A0A] dark:text-white">
                Explore by Resource Category
              </h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] max-w-xl">
                Browse hand-crafted assets categorized by framework and design medium.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCT_CATEGORIES.map((cat, index) => {
                const IconComp =
                  productIcons[cat.iconName as keyof typeof productIcons] || Box;

                return (
                  <ScrollReveal
                    key={cat.id}
                    animation="fade-up"
                    delay={Math.min(index * 100, 400)}
                    className="flex flex-col h-full w-full"
                  >
                    <Card
                      hover
                      className="group flex flex-col justify-between p-6 sm:p-8 w-full h-full"
                    >
                      <div className="space-y-5">
                        <div className="flex items-center justify-between">
                          <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#4F46E5]/10 text-[#4F46E5] dark:bg-[#C084FC]/10 dark:text-[#C084FC] group-hover:scale-105 group-hover:bg-[#4F46E5] group-hover:text-white dark:group-hover:bg-[#C084FC] dark:group-hover:text-[#09090B] transition-all duration-300 shadow-xs">
                            <IconComp className="h-7 w-7" />
                          </div>
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FAFAF9] dark:bg-[#181822] text-[#52525B] dark:text-[#D4D4D8] border border-[#E4E4E7] dark:border-white/10">
                            {cat.count}+ Resources
                          </span>
                        </div>

                        <h4 className="font-heading text-xl font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#C084FC] transition-colors">
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
                          className="w-full justify-between font-bold group-hover:bg-[#4F46E5] group-hover:text-white dark:group-hover:bg-[#C084FC] dark:group-hover:text-[#09090B] transition-all"
                          rightIcon={<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />}
                        >
                          {cat.ctaText}
                        </Button>
                      </div>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
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

          {/* 6 Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {WHY_CHOOSE_ME.map((item, index) => {
              const IconC =
                whyIcons[item.iconName as keyof typeof whyIcons] || Award;

              return (
                <ScrollReveal
                  key={item.title}
                  animation="fade-up"
                  delay={Math.min(index * 100, 400)}
                  className="flex flex-col h-full w-full"
                >
                  <Card
                    hover
                    className="p-6 sm:p-8 lg:p-10 space-y-5 w-full h-full"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F46E5]/10 text-[#4F46E5] dark:bg-[#C084FC]/10 dark:text-[#C084FC] shadow-xs">
                      <IconC className="h-7 w-7" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[#0A0A0A] dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Closing CTA */}
          <ScrollReveal animation="fade-up" delay={0.2} className="text-center">
            <Button
              href="/contact"
              size="lg"
              className="rounded-full px-9 py-6 text-base font-bold shadow-md shadow-indigo-500/25"
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

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {TESTIMONIALS.map((t, index) => (
              <ScrollReveal
                key={t.id}
                animation="fade-up"
                delay={Math.min(index * 100, 400)}
                className="flex flex-col h-full w-full"
              >
                <Card
                  hover
                  className="relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 lg:p-10 w-full h-full"
                >
                  {/* Decorative Quote Mark */}
                  <Quote className="absolute right-6 top-6 h-16 w-16 text-[#4F46E5]/5 dark:text-[#C084FC]/10 pointer-events-none -rotate-12" />

                  <div className="space-y-5 relative z-10">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1.5 text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                      ))}
                      <span className="text-xs font-bold text-[#0A0A0A] dark:text-white ml-1">5.0</span>
                    </div>

                    <p className="text-sm sm:text-base text-[#0A0A0A]/90 dark:text-white/90 leading-relaxed italic">
                      &ldquo;{t.content}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 mt-8 border-t border-[#E4E4E7] dark:border-white/[0.08] relative z-10">
                    <div className="relative h-13 w-13 rounded-full overflow-hidden border-2 border-[#4F46E5]/30 dark:border-white/20 bg-[#F4F4F5] dark:bg-[#181822] shadow-xs shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-heading text-sm font-bold text-[#0A0A0A] dark:text-white truncate">
                        {t.name}
                      </h4>
                      <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] truncate font-medium">
                        {t.role}, {t.company}
                      </p>
                      <span className="inline-block mt-1 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/20 px-2.5 py-0.5 text-[10px] font-bold text-[#4F46E5] dark:text-[#C084FC]">
                        {t.projectType}
                      </span>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

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
      <ScrollReveal animation="zoom-in" duration={0.65}>
        <CTASection
          eyebrow="Ready to Begin?"
          title="Have an Idea? Let's Bring It to Life."
          description="Whether you’re looking for a ready-made digital product or need a custom website, I’m here to help you take the next step."
          primaryButtonText="Start a Project"
          primaryButtonHref="/contact"
          secondaryButtonText="Explore Products"
          secondaryButtonHref="/products"
        />
      </ScrollReveal>
    </div>
  );
}
