import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ExternalLink,
  Star,
  CheckCircle2,
  XCircle,
  Download,
  Sparkles,
  ChevronRight,
  FileCheck2,
  Zap,
} from "lucide-react";
import { DIGITAL_PRODUCTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all products
export async function generateStaticParams() {
  return DIGITAL_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

// Generate dynamic SEO metadata matching Section 10
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = DIGITAL_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Pramod Upadhyay",
    };
  }

  return {
    title: `${product.title} — ${product.productType} for ${product.targetCustomer} | Pramod Upadhyay`,
    description: `Discover ${product.title}, a customizable ${product.productType} designed to help ${product.targetCustomer} ${product.mainBenefit}. Explore features, included files, and license details.`,
    keywords: [
      product.title,
      `${product.productType} template`,
      `Professional ${product.productType}`,
      `Customizable ${product.productType}`,
      `${product.productType} for commercial projects`,
      "Pramod Upadhyay",
    ],
    openGraph: {
      title: `${product.title} — ${product.productType}`,
      description: product.description,
      images: [{ url: product.thumbnail }],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = DIGITAL_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-[#E4E4E7] dark:border-white/[0.08] bg-[#F8FAFC] dark:bg-[#0D0D11] py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] font-medium">
            <Link href="/" className="hover:text-[#0A0A0A] dark:hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="hover:text-[#0A0A0A] dark:hover:text-white transition-colors">
              Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-bold text-[#0A0A0A] dark:text-white truncate max-w-[200px] sm:max-w-none">
              {product.title}
            </span>
          </nav>
        </div>
      </div>

      {/* =========================================================================
          1 & 2. HERO / PRODUCT TITLE & SHORT DESCRIPTION
          ========================================================================= */}
      <section className="relative pt-20 pb-24 sm:pt-32 sm:pb-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-[#09090B]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#4F46E5]/15 via-[#7C3AED]/10 to-transparent blur-3xl opacity-70 dark:from-[#6366F1]/20 dark:via-[#A855F7]/15 dark:to-[#EC4899]/15 dark:opacity-60"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Product Image & Highlights (fade-left) */}
            <ScrollReveal
              animation="fade-left"
              delay={0.1}
              className="lg:col-span-7 space-y-6 flex flex-col w-full"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-[24px] border border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-[#121215] shadow-lg">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 rounded-full bg-[#0A0A0A] text-white dark:bg-gradient-to-r dark:from-[#6366F1] dark:to-[#EC4899] px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-md">
                    {product.badge}
                  </span>
                )}
                <span className="absolute top-4 right-4 rounded-full bg-white/95 dark:bg-[#121215]/95 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-[#0A0A0A] dark:text-white border border-[#E4E4E7] dark:border-white/10 shadow-xs">
                  {product.category}
                </span>
              </div>

              {/* Highlights strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {product.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="rounded-[16px] border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#171722] dark:to-[#101016] p-4 text-center space-y-1 shadow-xs dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                  >
                    <span className="text-xs font-semibold text-[#71717A] dark:text-[#A1A1AA] block">
                      {h.label}
                    </span>
                    <span className="font-heading text-sm sm:text-base font-black text-[#0A0A0A] dark:text-white block">
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right: Title, Pricing & CTAs (fade-right) */}
            <ScrollReveal
              animation="fade-right"
              delay={0.15}
              className="lg:col-span-5 space-y-6 flex flex-col w-full"
            >
              <div className="space-y-4">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4F46E5] dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC] shadow-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{product.productType}</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0A] dark:text-white leading-[1.08] sm:leading-[1.04] text-balance">
                  {product.title}
                </h1>

                {/* Rating & Social Proof */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA]">
                  <div className="flex items-center text-amber-500 font-bold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="font-bold text-[#0A0A0A] dark:text-white">{product.rating}</span>
                  <span>({product.reviewsCount} reviews)</span>
                  <span>·</span>
                  <span className="font-semibold text-[#0A0A0A] dark:text-white">{product.salesCount}+ downloads</span>
                </div>
              </div>

              {/* Short Product Description */}
              <div className="space-y-3 text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed border-t border-[#E4E4E7] dark:border-white/[0.08] pt-4">
                <p>
                  Build better digital experiences with <strong className="text-[#0A0A0A] dark:text-white font-bold">{product.title}</strong>, a professionally designed {product.productType} created to help {product.targetCustomer} {product.mainBenefit}.
                </p>
                <p>
                  Get a practical starting point for your next project with thoughtfully designed layouts, useful features, and customizable components.
                </p>
              </div>

              {/* Pricing Box */}
              <Card className="p-5 sm:p-8 space-y-5 border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-gradient-to-b dark:from-[#171722] dark:to-[#101016] shadow-lg dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] uppercase font-bold tracking-widest">
                      One-time payment
                    </span>
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="font-heading text-4xl sm:text-5xl font-black text-[#0A0A0A] dark:text-white">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-base text-[#71717A] dark:text-[#A1A1AA] line-through font-medium">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/25 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Instant Access
                  </span>
                </div>

                {/* Primary & Secondary CTAs */}
                <div className="space-y-3 pt-2">
                  <Button
                    href={`/contact?product=${product.slug}`}
                    size="lg"
                    className="w-full rounded-full py-6 font-bold shadow-lg shadow-indigo-500/25 text-base"
                    leftIcon={<Download className="h-4 w-4" />}
                  >
                    Get {product.title}
                  </Button>

                  {product.demoUrl && (
                    <Button
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="default"
                      className="w-full rounded-full py-5 font-bold"
                      leftIcon={<ExternalLink className="h-4 w-4" />}
                    >
                      Live Preview
                    </Button>
                  )}
                </div>

                <p className="text-center text-xs text-[#71717A] dark:text-[#A1A1AA] italic">
                  *Digital product. No physical item will be shipped.*
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. DETAILED PRODUCT DESCRIPTION (Subtle Section Band for Clean Separation)
          ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-[#F8FAFC] dark:bg-[#0B0B0F]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Overview</span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0A] dark:text-white text-balance leading-tight">
                A Better Starting Point for Your Next Project
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                <p>
                  Building a professional digital experience from scratch takes time. <strong className="text-[#0A0A0A] dark:text-white font-bold">{product.title}</strong> gives you a ready-made foundation so you can focus on customizing your project and bringing your ideas to life.
                </p>
                <p>
                  Designed for {product.targetCustomer}, this {product.productType} combines a clean visual style with practical features to support your workflow.
                </p>
                <p>
                  Whether you&apos;re starting a new project, building for a client, or improving an existing product, {product.title} helps you get started with a structured, customizable foundation.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Designed for Practical Use Card */}
          <ScrollReveal animation="fade-up" delay={0.15}>
            <Card className="p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-gradient-to-b dark:from-[#171720] dark:to-[#0F0F14] shadow-md">
              <div className="space-y-2">
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#0A0A0A] dark:text-white">
                  Designed for Practical Use
                </h3>
                <p className="text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA]">
                  Every part of {product.title} is created with usability and customization in mind.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-[18px] border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#1A1A24] dark:to-[#121218] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] p-4 sm:p-5 space-y-2">
                  <span className="font-heading text-base font-bold text-[#0A0A0A] dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Clean design
                  </span>
                  <p className="text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                    A consistent visual style that is easy to adapt to your brand.
                  </p>
                </div>

                <div className="rounded-[18px] border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#1A1A24] dark:to-[#121218] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] p-4 sm:p-5 space-y-2">
                  <span className="font-heading text-base font-bold text-[#0A0A0A] dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Useful features
                  </span>
                  <p className="text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                    Practical components and layouts for common project needs.
                  </p>
                </div>

                <div className="rounded-[18px] border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#1A1A24] dark:to-[#121218] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] p-4 sm:p-5 space-y-2">
                  <span className="font-heading text-base font-bold text-[#0A0A0A] dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Customization
                  </span>
                  <p className="text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                    Adjust colors, content, layouts, and supported features to suit your requirements.
                  </p>
                </div>

                <div className="rounded-[18px] border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#1A1A24] dark:to-[#121218] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] p-4 sm:p-5 space-y-2">
                  <span className="font-heading text-base font-bold text-[#0A0A0A] dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Friendly files
                  </span>
                  <p className="text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                    Work with modern tools and clean file structures specified in the product specs.
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] pt-2">
                Get a ready-made foundation for your next project without having to create every element from the beginning.
              </p>

              <div className="pt-2">
                <Button
                  href={`/contact?product=${product.slug}`}
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 font-bold"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Get Instant Access
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          4. KEY FEATURES (Clean White Studio Canvas)
          ========================================================================= */}
      <section className="py-24 sm:py-36 bg-white dark:bg-[#09090B] border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal animation="fade-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Features</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0A] dark:text-white">
                Everything You Need to Get Started
              </h2>
              <p className="text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA]">
                Carefully engineered to streamline your workflow and accelerate your delivery.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {product.keyFeatures.map((feat, idx) => (
              <ScrollReveal
                key={feat.number}
                animation="fade-up"
                delay={Math.min(idx * 80, 400)}
              >
                <Card
                  hover
                  className="p-5 sm:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-gradient-to-b dark:from-[#171720] dark:to-[#0F0F14] shadow-xs"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#4F46E5]/10 dark:bg-[#C084FC]/10 font-heading text-lg font-black text-[#4F46E5] dark:text-[#C084FC]">
                    {feat.number}
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-bold text-[#0A0A0A] dark:text-white">
                      {feat.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHAT IS INCLUDED? (Subtle Section Band for Clean Separation)
          ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-[#F8FAFC] dark:bg-[#0B0B0F]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal animation="fade-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Package Deliverables</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0A] dark:text-white">
                What Is Included?
              </h2>
              <p className="text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA]">
                Your purchase includes the following items, as applicable to this product:
              </p>
            </div>
          </ScrollReveal>

          {/* Included Checklist */}
          <ScrollReveal animation="fade-up" delay={0.1}>
            <Card className="p-5 sm:p-8 md:p-10 space-y-6 border-[#E4E4E7] dark:border-white/[0.08] bg-[#FAFAF9] dark:bg-gradient-to-b dark:from-[#171720] dark:to-[#0F0F14]">
              <h3 className="font-heading text-lg font-bold text-[#0A0A0A] dark:text-white flex items-center gap-2.5">
                <FileCheck2 className="h-5 w-5 text-emerald-500" />
                <span>Included Items</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {product.included.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#0A0A0A] dark:text-white font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>

          {/* Not Included Disclosure */}
          <ScrollReveal animation="fade-up" delay={0.15}>
            <div className="rounded-[22px] border border-[#E4E4E7] dark:border-white/10 bg-[#FAFAF9] dark:bg-gradient-to-b dark:from-[#16161F] dark:to-[#0F0F14] p-5 sm:p-7 space-y-4 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
              <h4 className="font-heading text-sm font-bold text-[#0A0A0A] dark:text-white flex items-center gap-2">
                <XCircle className="h-4 w-4 text-[#71717A] dark:text-[#A1A1AA]" />
                <span>Not Included</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] pl-6 list-disc leading-relaxed">
                {product.notIncluded.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] pt-1 italic">
                Please review the product requirements before purchasing to ensure the product fits your workflow.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          6. WHO IS THIS PRODUCT FOR? (Clean White Studio Canvas)
          ========================================================================= */}
      <section className="py-24 sm:py-36 bg-white dark:bg-[#09090B] border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal animation="fade-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Target Audience</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0A] dark:text-white">
                Who Is This Product For?
              </h2>
              <p className="text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA]">
                {product.title} is designed for people who want a practical starting point for creating professional digital experiences.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Freelancers", desc: product.whoIsItFor.freelancers },
              { title: "Startups", desc: product.whoIsItFor.startups },
              { title: "Small Businesses", desc: product.whoIsItFor.smallBusinesses },
              { title: "Agencies", desc: product.whoIsItFor.agencies },
            ].map((audience, i) => (
              <ScrollReveal
                key={audience.title}
                animation="fade-up"
                delay={Math.min(i * 100, 400)}
                className="flex flex-col h-full w-full"
              >
                <Card hover className="p-5 sm:p-8 space-y-3 h-full">
                  <h3 className="font-heading text-xl font-bold text-[#0A0A0A] dark:text-white">
                    {audience.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                    {audience.desc}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Is this product right for you? */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <Card className="p-5 sm:p-8 space-y-3">
              <h4 className="font-heading text-base font-bold text-[#0A0A0A] dark:text-white">
                Is This Product Right for You?
              </h4>
              <p className="text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                This product is a good fit if you want a ready-made foundation that you can adapt to your requirements. It may not be suitable if you need features, integrations, or services that are not included in the product description.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          7. FREQUENTLY ASKED QUESTIONS (Subtle Section Band for Clean Separation)
          ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-[#F8FAFC] dark:bg-[#0B0B0F]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal animation="fade-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Questions & Answers</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0A] dark:text-white">
                Questions About This Product
              </h2>
              <p className="text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA]">
                Everything you need to know about purchasing, licensing, customization, and delivery.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {product.faqs.map((faq, i) => (
              <ScrollReveal
                key={i}
                animation="fade-up"
                delay={Math.min(i * 80, 400)}
              >
                <Card
                  hover
                  className="p-5 sm:p-7 space-y-2.5"
                >
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0A0A0A] dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. LICENSE TERMS (Clean White Studio Section)
          ========================================================================= */}
      <section className="py-24 sm:py-36 bg-white dark:bg-[#09090B] border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal animation="fade-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Licensing</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0A] dark:text-white">
                Simple and Transparent Usage Terms
              </h2>
              <p className="text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA]">
                Your purchase grants you a license to use <strong className="text-[#0A0A0A] dark:text-white font-bold">{product.title}</strong> under the terms specified at checkout.
              </p>
            </div>
          </ScrollReveal>

          {/* Two-Column License Cards: Permitted (fade-left) & Restrictions (fade-right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal animation="fade-left" delay={0.1} className="flex flex-col h-full w-full">
              {/* Permitted Uses */}
              <Card className="p-5 sm:p-8 space-y-4 border-emerald-500/30 dark:border-emerald-500/40 bg-white dark:bg-gradient-to-b dark:from-emerald-950/25 dark:to-[#101015] dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(16,185,129,0.15)] h-full">
                <h3 className="font-heading text-lg font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Permitted Uses</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                  {product.license.permitted.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={0.15} className="flex flex-col h-full w-full">
              {/* Restrictions */}
              <Card className="p-5 sm:p-8 space-y-4 border-rose-500/30 dark:border-rose-500/40 bg-white dark:bg-gradient-to-b dark:from-rose-950/25 dark:to-[#101015] dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(244,63,94,0.15)] h-full">
                <h3 className="font-heading text-lg font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  <span>Restrictions</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                  {product.license.restrictions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          </div>

          {/* Important Notes */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <Card className="p-5 sm:p-7 space-y-3 border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-gradient-to-b dark:from-[#171720] dark:to-[#0F0F14] shadow-xs">
              <h4 className="font-heading text-sm font-bold text-[#0A0A0A] dark:text-white">
                Important Notes
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] list-disc pl-5 leading-relaxed">
                {product.license.notes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  href="/terms"
                  className="text-xs sm:text-sm font-bold text-[#4F46E5] dark:text-[#C084FC] underline underline-offset-4 hover:opacity-80"
                >
                  Read the Full License Terms →
                </Link>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          9. FINAL CALL TO ACTION (Subtle Section Band for Clean Separation)
          ========================================================================= */}
      <ScrollReveal animation="zoom-in" duration={0.65}>
        <section className="py-24 sm:py-36 text-center bg-[#F8FAFC] dark:bg-[#0B0B0F] border-t border-[#E4E4E7] dark:border-white/[0.08] relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-60 dark:opacity-40"
          >
            <div className="h-[460px] w-[800px] rounded-full bg-gradient-to-tr from-[#4F46E5]/15 via-[#7C3AED]/10 to-transparent blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#4F46E5] uppercase dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
              <Zap className="h-3.5 w-3.5" />
              <span>Instant Download</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl font-black tracking-tight text-[#0A0A0A] dark:text-white text-balance leading-tight">
              Ready to Start Your Next Project?
            </h2>

            <p className="text-base sm:text-xl text-[#52525B] dark:text-[#A1A1AA] leading-relaxed max-w-xl mx-auto text-balance">
              Give your next idea a practical starting point with <strong className="text-[#0A0A0A] dark:text-white font-bold">{product.title}</strong>. Explore the features, review the requirements, and choose the product if it fits your needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <Button
                href={`/contact?product=${product.slug}`}
                size="lg"
                className="rounded-full px-9 py-6 text-base font-bold shadow-lg shadow-indigo-500/25"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Get {product.title} — ${product.price}
              </Button>

              {product.demoUrl && (
                <Button
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-bold"
                  rightIcon={<ExternalLink className="h-4 w-4" />}
                >
                  View Live Preview
                </Button>
              )}
            </div>

            <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] italic pt-2">
              *Please review the product details and license before completing your purchase.*
            </p>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
