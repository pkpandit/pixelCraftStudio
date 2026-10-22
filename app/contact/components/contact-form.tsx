"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaDribbble } from "react-icons/fa6";
import { PROFILE, SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export interface ContactFormProps {
  className?: string;
}

const SERVICE_OPTIONS = [
  "Custom Website Design",
  "Website Development",
  "Web Application Development",
  "UI/UX Design",
  "Website Redesign",
  "Digital Product Question",
  "Other / Consultation",
];

const BUDGET_OPTIONS = [
  "< $1,500",
  "$1,500 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
  "Flexible / Not sure yet",
];

export function ContactForm({ className = "" }: ContactFormProps) {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service:
      preselectedService && SERVICES.some((s) => s.slug === preselectedService)
        ? SERVICES.find((s) => s.slug === preselectedService)?.title || "Custom Website Design"
        : "Custom Website Design",
    budget: "$1,500 – $3,000",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white ${className}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-[#09090B]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#4F46E5]/15 via-[#7C3AED]/10 to-transparent blur-3xl opacity-70 dark:from-[#6366F1]/20 dark:via-[#A855F7]/15 dark:to-[#EC4899]/15 dark:opacity-60"
        />

        <Container className="text-center max-w-6xl space-y-8">
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Get in Touch</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight lg:tracking-tighter text-[#0A0A0A] dark:text-white leading-[1.18] sm:leading-[1.12] lg:leading-[1.10]">
              <span className="block">Have a Project in Mind?</span>
              <span className="block">
                <span className="gradient-text">
                  Let&apos;s Talk.
                </span>
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#52525B] dark:text-[#A1A1AA] leading-relaxed sm:leading-[1.7] max-w-2xl sm:max-w-3xl mx-auto text-balance font-normal">
              Whether you need a custom website, a full-stack web application, or have questions about a digital product, share a few details below and I&apos;ll get back to you within 24 hours.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#09090B]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Contact Form Card */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-up" delay={0.15}>
                <Card className="p-5 sm:p-8 md:p-12 border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-gradient-to-b dark:from-[#171720] dark:to-[#0F0F14] shadow-xl dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                {status === "success" ? (
                  <div className="py-16 text-center space-y-6 animate-in fade-in-50 duration-300">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500 mx-auto shadow-sm">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-heading text-3xl font-black text-[#0A0A0A] dark:text-white">
                        Message Received!
                      </h3>
                      <p className="text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out, <strong className="text-[#0A0A0A] dark:text-white font-bold">{formData.name}</strong>. I have received your project details and will review them and get back to you at <strong className="text-[#0A0A0A] dark:text-white font-bold">{formData.email}</strong> within 24 hours.
                      </p>
                    </div>
                    <Button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          name: "",
                          email: "",
                          service: "Custom Website Design",
                          budget: "$1,500 – $3,000",
                          message: "",
                        });
                      }}
                      className="rounded-full px-8 py-6 font-bold text-base"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8">
                    <div className="space-y-2">
                      <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#0A0A0A] dark:text-white">
                        Send a Message
                      </h2>
                      <p className="text-xs sm:text-base text-[#52525B] dark:text-[#A1A1AA]">
                        Fill in the form below with your project requirements.
                      </p>
                    </div>

                    {/* Name & Email with explicit htmlFor and id */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-name"
                          className="text-xs font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider block"
                        >
                          Your Name <span className="text-[#4F46E5] dark:text-[#C084FC]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="e.g. Sarah Connor"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-full border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#161620] dark:to-[#101015] px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-sm text-[#0A0A0A] dark:text-white placeholder:text-[#71717A] dark:placeholder:text-[#71717A] focus:border-[#4F46E5] dark:focus:border-[#818CF8] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 dark:focus:ring-[#818CF8]/25 font-medium transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="contact-email"
                          className="text-xs font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider block"
                        >
                          Email Address <span className="text-[#4F46E5] dark:text-[#C084FC]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="sarah@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-full border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#161620] dark:to-[#101015] px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-sm text-[#0A0A0A] dark:text-white placeholder:text-[#71717A] dark:placeholder:text-[#71717A] focus:border-[#4F46E5] dark:focus:border-[#818CF8] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 dark:focus:ring-[#818CF8]/25 font-medium transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider block">
                        What service are you looking for?
                      </span>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {SERVICE_OPTIONS.map((srv) => {
                          const isSelected = formData.service === srv;
                          return (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => setFormData({ ...formData, service: srv })}
                              className={`rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold transition-all duration-300 select-none cursor-pointer ${
                                isSelected
                                  ? "bg-[#0A0A0A] text-white shadow-xs scale-105 dark:bg-gradient-to-r dark:from-[#6366F1] dark:via-[#8B5CF6] dark:to-[#EC4899] dark:text-white dark:shadow-[0_0_20px_rgba(139,92,246,0.35),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                                  : "border border-[#E4E4E7] bg-white text-[#52525B] hover:bg-zinc-50 hover:text-[#0A0A0A] hover:border-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-gradient-to-b dark:from-[#16161F] dark:to-[#101015] dark:text-[#A1A1AA] dark:hover:border-white/25 dark:hover:from-[#1C1C26] dark:hover:to-[#15151C] dark:hover:text-white"
                              }`}
                            >
                              {srv}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget Selection */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider block">
                        Estimated Budget (USD)
                      </span>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {BUDGET_OPTIONS.map((b) => {
                          const isSelected = formData.budget === b;
                          return (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: b })}
                              className={`rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold transition-all duration-300 select-none cursor-pointer ${
                                isSelected
                                  ? "bg-[#0A0A0A] text-white shadow-xs scale-105 dark:bg-gradient-to-r dark:from-[#6366F1] dark:via-[#8B5CF6] dark:to-[#EC4899] dark:text-white dark:shadow-[0_0_20px_rgba(139,92,246,0.35),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                                  : "border border-[#E4E4E7] bg-white text-[#52525B] hover:bg-zinc-50 hover:text-[#0A0A0A] hover:border-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-gradient-to-b dark:from-[#16161F] dark:to-[#101015] dark:text-[#A1A1AA] dark:hover:border-white/25 dark:hover:from-[#1C1C26] dark:hover:to-[#15151C] dark:hover:text-white"
                              }`}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Project Message with explicit htmlFor and id */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-message"
                        className="text-xs font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider block"
                      >
                        Project Details & Scope <span className="text-[#4F46E5] dark:text-[#C084FC]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        placeholder="Tell me about your goals, current challenges, desired features, and target launch timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-[22px] border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#161620] dark:to-[#101015] p-4 sm:p-5 text-base sm:text-sm text-[#0A0A0A] dark:text-white placeholder:text-[#71717A] dark:placeholder:text-[#71717A] focus:border-[#4F46E5] dark:focus:border-[#818CF8] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 dark:focus:ring-[#818CF8]/25 resize-y font-medium transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        isLoading={status === "submitting"}
                        className="w-full rounded-full py-6 font-bold text-base shadow-lg shadow-indigo-500/25"
                        rightIcon={<Send className="h-4 w-4 ml-1" />}
                      >
                        Send Inquiry
                      </Button>
                      <div className="flex items-center justify-center gap-2 pt-4 text-xs text-[#71717A] dark:text-[#A1A1AA]">
                        <ShieldCheck className="h-4 w-4 text-emerald-500" />
                        <span>Strict privacy guaranteed · No spam ever</span>
                      </div>
                    </div>
                  </form>
                )}
              </Card>
            </ScrollReveal>
          </div>

          {/* Right: Direct Information Sidebar (fade-right) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal animation="fade-right" delay={0.2}>
              {/* Direct Info Card */}
              <Card className="p-5 sm:p-8 md:p-10 space-y-7 border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-gradient-to-b dark:from-[#16161E] dark:to-[#0F0F14] shadow-lg">
                <h3 className="font-heading text-xl sm:text-2xl font-black text-[#0A0A0A] dark:text-white">
                  Direct Contact & Info
                </h3>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#4F46E5]/10 text-[#4F46E5] dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-bold text-[#0A0A0A] dark:text-white">Email Inquiries</p>
                      <a
                        href={`mailto:${PROFILE.socials.email}`}
                        className="text-[#4F46E5] dark:text-[#C084FC] hover:underline font-semibold block"
                      >
                        {PROFILE.socials.email}
                      </a>
                      <span className="text-xs text-[#71717A] dark:text-[#A1A1AA]">Typically replies in 4–12 hours</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#4F46E5]/10 text-[#4F46E5] dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-bold text-[#0A0A0A] dark:text-white">Working Hours</p>
                      <p className="text-[#52525B] dark:text-[#A1A1AA] font-medium">Mon – Fri: 9:00 AM – 6:00 PM IST</p>
                      <span className="text-xs text-[#71717A] dark:text-[#A1A1AA]">Available worldwide across timezones</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#4F46E5]/10 text-[#4F46E5] dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-bold text-[#0A0A0A] dark:text-white">Location</p>
                      <p className="text-[#52525B] dark:text-[#A1A1AA] font-medium">{PROFILE.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-[#E4E4E7] dark:border-white/[0.08] space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
                    Connect on Socials
                  </p>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={PROFILE.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect on LinkedIn"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#191924] dark:to-[#111117] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-white hover:border-[#4F46E5] dark:hover:border-[#C084FC] hover:scale-105 transition-all touch-manipulation"
                    >
                      <FaLinkedinIn className="h-4 w-4" />
                    </a>
                    <a
                      href={PROFILE.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow on GitHub"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#191924] dark:to-[#111117] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-white hover:border-[#4F46E5] dark:hover:border-[#C084FC] hover:scale-105 transition-all touch-manipulation"
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>
                    <a
                      href={PROFILE.socials.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Dribbble portfolio"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#191924] dark:to-[#111117] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-white hover:border-[#4F46E5] dark:hover:border-[#C084FC] hover:scale-105 transition-all touch-manipulation"
                    >
                      <FaDribbble className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Direct Booking Card (fade-right) */}
            <ScrollReveal animation="fade-right" delay={0.25}>
              <Card className="p-5 sm:p-7 border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-gradient-to-b dark:from-[#16161E] dark:to-[#0F0F14] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-[#0A0A0A] dark:text-white">
                      Prefer a 15-Minute Video Call?
                    </h4>
                    <p className="text-xs text-[#71717A] dark:text-[#A1A1AA]">
                      Let&apos;s discuss your roadmap directly
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                  Mention your timezone in the message box above or send an email to request a direct Google Meet or Zoom link.
                </p>
              </Card>
            </ScrollReveal>
          </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default ContactForm;
