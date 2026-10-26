"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Home,
  ShoppingBag,
  Briefcase,
  Layers,
  User,
  Mail,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const NAV_ITEMS = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/products", icon: ShoppingBag },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Portfolio", href: "/portfolio", icon: Layers },
  { name: "About", href: "/about", icon: User },
  { name: "Contact", href: "/contact", icon: Mail },
];

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change or Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll while mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#09090B]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.7),inset_0_-1px_0_0_rgba(255,255,255,0.05)]"
          : "border-b border-transparent bg-[#09090B]/80 backdrop-blur-md"
      } ${className}`}
    >
      <Container className={`flex items-center justify-between transition-all duration-300 ${
        scrolled ? "h-16 sm:h-18" : "h-16 sm:h-20"
      }`}>
        {/* Brand Logo & Identity */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3.5 transition-transform duration-200 active:scale-95 min-w-0"
          aria-label="pixelCraftStudio - Home"
        >
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#6366F1] via-[#8B5CF6] to-[#EC4899] font-black text-white shadow-md shadow-indigo-500/25 ring-1 ring-white/20 transition-all duration-300 group-hover:scale-105">
            <span className="font-heading text-sm sm:text-base font-black tracking-wider">PCS</span>
            <span
              className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5"
              title="Available for projects"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-[#09090B] bg-emerald-500" />
            </span>
          </div>

          <div className="flex flex-col min-w-0 leading-tight">
            <span className="font-heading text-base sm:text-lg font-black tracking-tight text-white group-hover:text-[#C084FC] transition-colors truncate">
              pixelCraft
            </span>
            <span className="text-[10px] sm:text-[11px] font-black tracking-[0.25em] uppercase text-[#818CF8] -mt-0.5 truncate">
              STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links Pill */}
        <nav
          className="hidden md:flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-gradient-to-b from-[#171720]/90 to-[#0F0F14]/90 p-1.5 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.08)]"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-xs lg:text-sm font-semibold transition-all duration-200 rounded-full select-none ${
                  isActive
                    ? "bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white shadow-[0_0_20px_rgba(139,92,246,0.45),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                    : "text-[#A1A1AA] hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Status badge */}
          <div className="hidden xl:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Q2 Projects</span>
          </div>

          <ThemeToggle />

          <Button
            href="/contact"
            size="sm"
            className="hidden sm:inline-flex rounded-full px-5 text-xs font-bold"
            rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
          >
            Let&apos;s Talk
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-gradient-to-b from-[#181822] to-[#121218] text-white transition-all hover:from-[#20202E] hover:to-[#161620] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95 touch-manipulation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-gradient-to-b from-[#111116]/98 to-[#0A0A0E]/98 px-4 pt-3 pb-6 backdrop-blur-2xl shadow-xl space-y-4 animate-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pt-1">
            {NAV_ITEMS.map((item) => {
              const IconC = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-2.5 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all min-w-0 ${
                    isActive
                      ? "bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                      : "text-[#A1A1AA] hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <IconC className="h-4 w-4 shrink-0" />
                  <span className="truncate">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-3">
            <div className="flex items-center justify-center xs:justify-start gap-2 text-xs font-semibold text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Hire</span>
            </div>

            <Button
              href="/contact"
              size="sm"
              onClick={closeMobileMenu}
              className="w-full xs:w-auto rounded-full px-6 text-xs font-bold justify-center"
              rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
