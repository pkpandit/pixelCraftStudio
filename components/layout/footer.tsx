"use client";

import Link from "next/link";
import { Mail, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaDribbble } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  const currentYear = 2026;

  const QUICK_LINKS = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const PRODUCT_LINKS = [
    { label: "Website Templates", href: "/products?cat=website-templates" },
    { label: "React & Next.js Templates", href: "/products?cat=nextjs-templates" },
    { label: "Admin Dashboard Templates", href: "/products?cat=admin-dashboards" },
    { label: "Figma UI Kits", href: "/products?cat=figma-ui-kits" },
    { label: "Graphic Design Templates", href: "/products?cat=graphic-design" },
  ];

  return (
    <footer className={`border-t border-[#E4E4E7] bg-[#F8FAFC] dark:border-white/[0.08] dark:bg-gradient-to-b dark:from-[#0B0B0F] dark:to-[#07070A] pt-20 pb-14 transition-colors relative ${className}`}>
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 pb-12 sm:pb-16 border-b border-[#E4E4E7] dark:border-white/[0.08]">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="group inline-flex items-center gap-3.5 transition-transform active:scale-95">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#4F46E5] to-[#7C3AED] font-black text-white shadow-md shadow-indigo-500/25 ring-1 ring-white/20 transition-all duration-300 group-hover:scale-105 dark:from-[#6366F1] dark:via-[#8B5CF6] dark:to-[#EC4899]">
                <span className="font-heading text-base font-black tracking-wider">PU</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-black tracking-tight text-[#0A0A0A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#C084FC] transition-colors">
                  Pramod Upadhyay
                </span>
                <span className="text-xs font-semibold text-[#52525B] dark:text-[#A1A1AA] -mt-0.5">
                  Full Stack Developer & UI Designer
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed max-w-sm">
              Crafting high-impact websites, reusable digital products, and production software designed for ambitious creators and teams.
            </p>

            {/* Availability tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for select projects</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E7] bg-white text-[#52525B] hover:text-[#0A0A0A] hover:border-zinc-300 hover:bg-zinc-50 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-gradient-to-b dark:from-[#181822] dark:to-[#111116] dark:text-[#A1A1AA] dark:hover:text-white dark:hover:border-[#C084FC] dark:hover:from-[#20202E] dark:hover:to-[#161620] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-1 touch-manipulation"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E7] bg-white text-[#52525B] hover:text-[#0A0A0A] hover:border-zinc-300 hover:bg-zinc-50 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-gradient-to-b dark:from-[#181822] dark:to-[#111116] dark:text-[#A1A1AA] dark:hover:text-white dark:hover:border-[#C084FC] dark:hover:from-[#20202E] dark:hover:to-[#161620] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-1 touch-manipulation"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble Profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E7] bg-white text-[#52525B] hover:text-[#0A0A0A] hover:border-zinc-300 hover:bg-zinc-50 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-gradient-to-b dark:from-[#181822] dark:to-[#111116] dark:text-[#A1A1AA] dark:hover:text-white dark:hover:border-[#C084FC] dark:hover:from-[#20202E] dark:hover:to-[#161620] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-1 touch-manipulation"
              >
                <FaDribbble className="h-4 w-4" />
              </a>
              <a
                href="mailto:pramod@example.com"
                aria-label="Email Pramod directly"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E7] bg-white text-[#52525B] hover:text-[#0A0A0A] hover:border-zinc-300 hover:bg-zinc-50 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-gradient-to-b dark:from-[#181822] dark:to-[#111116] dark:text-[#A1A1AA] dark:hover:text-white dark:hover:border-[#C084FC] dark:hover:from-[#20202E] dark:hover:to-[#161620] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-1 touch-manipulation"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-xs font-black tracking-wider text-[#0A0A0A] dark:text-white uppercase">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-medium text-[#52525B] hover:text-[#0A0A0A] dark:text-[#A1A1AA] dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Digital Products */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-xs font-black tracking-wider text-[#0A0A0A] dark:text-white uppercase">
              Digital Products
            </h3>
            <ul className="space-y-3 text-sm">
              {PRODUCT_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-medium text-[#52525B] hover:text-[#0A0A0A] dark:text-[#A1A1AA] dark:hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#4F46E5] dark:text-[#C084FC]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-xs font-black tracking-wider text-[#0A0A0A] dark:text-white uppercase">
              Let&apos;s Work Together
            </h3>
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
              Have an idea for a web app or looking for a custom website built around your goals?
            </p>
            <div className="pt-1">
              <Button
                href="/contact"
                size="sm"
                className="rounded-full px-6 font-bold shadow-xs"
                rightIcon={<Sparkles className="h-3.5 w-3.5 ml-1" />}
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar: Legal, Copyright, Built with care */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center sm:items-start lg:items-center justify-between gap-4 text-xs text-[#52525B] dark:text-[#A1A1AA] text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-x-6 gap-y-2.5">
            <span>© {currentYear} Pramod Upadhyay. All rights reserved.</span>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5">
              <Link href="/privacy" className="hover:text-[#0A0A0A] dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-[#0A0A0A] dark:hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <span>·</span>
              <Link href="/refund-policy" className="hover:text-[#0A0A0A] dark:hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1.5">
            <span>Crafted with passion & precision</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 inline" />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
