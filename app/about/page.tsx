import type { Metadata } from "next";
import {
  Sparkles,
  ArrowRight,
  Code2,
  Palette,
  HeartHandshake,
  CheckCircle2,
  Zap,
  MapPin,
  Briefcase,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaDribbble } from "react-icons/fa6";
import { PROFILE } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/shared/cta-section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About Pramod Upadhyay | Full Stack Developer & UI Designer",
  description:
    "Learn about Pramod Upadhyay, a Full Stack Developer and UI Designer with 11+ years of experience crafting high-performance Next.js applications, Figma design systems, and digital products.",
  keywords: [
    "About Pramod Upadhyay",
    "Full Stack Developer",
    "UI Designer",
    "Next.js Developer",
    "React Engineer",
    "Bangalore Web Developer",
  ],
};

const PHILOSOPHY = [
  {
    title: "Simplicity Over Complexity",
    description:
      "Writing organized, clean code that is easy to understand, test, and maintain over the long haul.",
    icon: Code2,
  },
  {
    title: "Design Meets Development",
    description:
      "Bridging the gap between aesthetics and system architecture so that applications look polished and perform flawlessly.",
    icon: Palette,
  },
  {
    title: "Performance by Default",
    description:
      "Sub-second load speeds, 90+ Lighthouse benchmarks, and zero layout shift on every viewport and device.",
    icon: Zap,
  },
  {
    title: "Transparent Partnership",
    description:
      "Honest communication, realistic milestone schedules, and a collaborative approach with no surprises.",
    icon: HeartHandshake,
  },
];

const CAREER_TIMELINE = [
  {
    period: "2021 — Present",
    role: "Independent Full Stack Consultant & Digital Product Creator",
    description:
      "Architecting bespoke Next.js web applications, scalable design systems, and high-converting digital templates with over 1,200+ purchases worldwide.",
  },
  {
    period: "2017 — 2021",
    role: "Senior Frontend Engineer & UI/UX Lead",
    description:
      "Led frontend architecture across multi-tenant SaaS dashboards, standardized component libraries in React & TypeScript, and mentored junior developers.",
  },
  {
    period: "2013 — 2017",
    role: "Web Designer & Frontend Developer",
    description:
      "Designed and delivered custom responsive websites for startups, agencies, and small businesses, mastering HTML5, CSS3, JavaScript, and user-centered design.",
  },
];

const SKILL_CATEGORIES = [
  {
    title: "Frontend Engineering",
    skills: [
      "Next.js 14 / 15 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Modern HTML5 & CSS3",
      "Framer Motion",
      "Server Actions",
      "Zustand State Management",
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      "Node.js & Express",
      "PostgreSQL",
      "Prisma ORM",
      "Supabase Auth & Database",
      "RESTful & GraphQL APIs",
      "Stripe Billing & Subscriptions",
      "Vercel Serverless & Edge",
    ],
  },
  {
    title: "UI/UX & Design Systems",
    skills: [
      "Figma (Auto-Layout 5.0)",
      "Design Tokens & Variables",
      "Wireframing & Prototyping",
      "Responsive Grid Systems",
      "WCAG 2.1 AA Accessibility",
      "Micro-interactions & UX Flow",
    ],
  },
  {
    title: "Tooling & Workflow",
    skills: [
      "Git & GitHub Workflows",
      "VS Code & Warp Terminal",
      "Docker Basics",
      "Vite & Turbopack",
      "Lighthouse & Core Web Vitals",
      "CI/CD Deployment Pipelines",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white">
      {/* =========================================================================
          HERO / STORY SECTION (Creative Designer Display Scale & Generous Whitespace)
          ========================================================================= */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-[#09090B]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#4F46E5]/15 via-[#7C3AED]/10 to-transparent blur-3xl opacity-70 dark:from-[#6366F1]/20 dark:via-[#A855F7]/15 dark:to-[#EC4899]/15 dark:opacity-60"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Bio & Overview */}
            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal animation="fade-up" delay={0}>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/25 bg-[#4F46E5]/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#4F46E5] uppercase shadow-xs dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>About Pramod Upadhyay</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.1}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight lg:tracking-tighter text-[#0A0A0A] dark:text-white leading-[1.18] sm:leading-[1.12] lg:leading-[1.10]">
                  <span className="block">Designing with Purpose.</span>
                  <span className="block">
                    <span className="gradient-text">
                      Engineering with Precision.
                    </span>
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={0.2}>
                <div className="space-y-4 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed sm:leading-[1.7]">
                  <p className="font-bold text-[#0A0A0A] dark:text-white text-lg sm:text-xl">
                    Hi, I’m Pramod. I Design, Build, and Create for the Web.
                  </p>
                  <p>{PROFILE.aboutBio[0]}</p>
                  <p>{PROFILE.aboutBio[1]}</p>
                  <p>{PROFILE.aboutBio[2]}</p>
                  <p className="font-medium text-[#0A0A0A] dark:text-white">{PROFILE.aboutBio[3]}</p>
                </div>
              </ScrollReveal>

              {/* Meta information tags */}
              <ScrollReveal animation="fade-up" delay={0.25}>
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA]">
                  <div className="flex items-center gap-2 font-medium">
                    <MapPin className="h-4 w-4 text-[#4F46E5] dark:text-[#818CF8]" />
                    <span>{PROFILE.location}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-2 font-medium">
                    <Briefcase className="h-4 w-4 text-emerald-500" />
                    <span>11+ Years Experience</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span>Available for Hire</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Action buttons */}
              <ScrollReveal animation="fade-up" delay={0.3}>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button
                    href="/contact"
                    size="lg"
                    className="w-full sm:w-auto rounded-full px-9 py-6 text-base font-bold shadow-lg shadow-indigo-500/25"
                    rightIcon={<ArrowRight className="h-4 w-4 ml-1" />}
                  >
                    Let&apos;s Work Together
                  </Button>

                  <div className="flex items-center gap-2.5">
                    <a
                      href={PROFILE.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#191924] dark:to-[#111117] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-white hover:border-[#4F46E5] dark:hover:border-[#C084FC] dark:hover:from-[#222230] dark:hover:to-[#171720] hover:scale-105 transition-all duration-300 touch-manipulation"
                    >
                      <FaLinkedinIn className="h-4 w-4" />
                    </a>
                    <a
                      href={PROFILE.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#191924] dark:to-[#111117] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-white hover:border-[#4F46E5] dark:hover:border-[#C084FC] dark:hover:from-[#222230] dark:hover:to-[#171720] hover:scale-105 transition-all duration-300 touch-manipulation"
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>
                    <a
                      href={PROFILE.socials.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Dribbble Profile"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#191924] dark:to-[#111117] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-white hover:border-[#4F46E5] dark:hover:border-[#C084FC] dark:hover:from-[#222230] dark:hover:to-[#171720] hover:scale-105 transition-all duration-300 touch-manipulation"
                    >
                      <FaDribbble className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Identity & Career Stats Card (fade-right) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <ScrollReveal animation="fade-right" delay={0.2} className="w-full max-w-md">
                <Card className="w-full p-5 sm:p-8 md:p-10 space-y-7 border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-gradient-to-b dark:from-[#16161E] dark:to-[#0F0F14] shadow-xl dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-[#4F46E5] font-black text-white text-2xl shadow-lg shadow-indigo-500/25 ring-1 ring-white/20 dark:bg-gradient-to-tr dark:from-[#6366F1] dark:to-[#EC4899]">
                      <span>PU</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-black text-[#0A0A0A] dark:text-white">
                        Pramod Upadhyay
                      </h3>
                      <p className="text-sm text-[#4F46E5] dark:text-[#818CF8] font-bold">
                        Full Stack Dev & UI Designer
                      </p>
                      <p className="text-xs text-[#71717A] dark:text-[#A1A1AA]">
                        11+ Years of Craftsmanship
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#E4E4E7] dark:border-white/[0.08] text-center">
                    <div className="rounded-[16px] border border-[#E4E4E7] dark:border-white/10 bg-[#FAFAF9] dark:bg-gradient-to-b dark:from-[#1A1A24] dark:to-[#121218] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] p-4">
                      <span className="font-heading text-2xl font-black text-[#0A0A0A] dark:text-white block">
                        11+
                      </span>
                      <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] font-medium">Years in Tech</span>
                    </div>
                    <div className="rounded-[16px] border border-[#E4E4E7] dark:border-white/10 bg-[#FAFAF9] dark:bg-gradient-to-b dark:from-[#1A1A24] dark:to-[#121218] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] p-4">
                      <span className="font-heading text-2xl font-black text-[#0A0A0A] dark:text-white block">
                        45+
                      </span>
                      <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] font-medium">Projects Shipped</span>
                    </div>
                    <div className="rounded-[16px] border border-[#E4E4E7] dark:border-white/10 bg-[#FAFAF9] dark:bg-gradient-to-b dark:from-[#1A1A24] dark:to-[#121218] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] p-4">
                      <span className="font-heading text-2xl font-black text-[#0A0A0A] dark:text-white block">
                        1,200+
                      </span>
                      <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] font-medium">Products Sold</span>
                    </div>
                    <div className="rounded-[16px] border border-[#E4E4E7] dark:border-white/10 bg-[#FAFAF9] dark:bg-gradient-to-b dark:from-[#1A1A24] dark:to-[#121218] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] p-4">
                      <span className="font-heading text-2xl font-black text-[#0A0A0A] dark:text-white block">
                        99%
                      </span>
                      <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] font-medium">Satisfaction</span>
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-[#E4E4E7] dark:border-white/10 bg-[#FAFAF9] dark:bg-gradient-to-b dark:from-[#1A1A24] dark:to-[#121218] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] p-5 space-y-1.5 text-xs text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                    <p className="font-bold text-[#0A0A0A] dark:text-white">My Guarantee to Clients:</p>
                    <p>
                      Clean, documented code, direct communication, accessible design systems, and zero technical debt.
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GUIDING PHILOSOPHY & VALUES (Subtle Section Band for Clean Separation)
          ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-[#F8FAFC] dark:bg-[#0B0B0F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="Philosophy"
              title="Guiding Principles in Every Project"
              description="Great software is not accidental. It is the result of clear thinking, disciplined craft, and thoughtful collaboration."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY.map((item, i) => {
              const IconC = item.icon;
              return (
                <ScrollReveal
                  key={item.title}
                  animation="fade-up"
                  delay={Math.min(i * 100, 400)}
                  className="flex flex-col h-full w-full"
                >
                  <Card
                    hover
                    className="p-5 sm:p-8 space-y-4 w-full h-full"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#4F46E5]/10 text-[#4F46E5] dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
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
        </div>
      </section>

      {/* =========================================================================
          CAREER TIMELINE & JOURNEY (Clean White Studio Section)
          ========================================================================= */}
      <section className="py-24 sm:py-36 bg-white dark:bg-[#09090B] border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="The Journey"
              title="11+ Years of Learning & Building"
              description="A brief look at the milestones and experience that shaped my technical and creative approach."
            />
          </ScrollReveal>

          <div className="relative pl-6 sm:pl-10 border-l-2 border-[#E4E4E7] dark:border-white/10 space-y-10 sm:space-y-12">
            {CAREER_TIMELINE.map((item, idx) => (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                delay={Math.min(idx * 100, 400)}
              >
                <div className="relative group">
                  {/* Dot indicator */}
                  <span className="absolute -left-[31px] sm:-left-[47px] top-6 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-[#09090B] border-2 border-[#4F46E5] dark:border-[#C084FC] group-hover:scale-125 transition-transform" />

                  <Card hover className="p-5 sm:p-8 space-y-3">
                    <span className="text-xs font-bold text-[#4F46E5] dark:text-[#C084FC] uppercase tracking-widest">
                      {item.period}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-[#0A0A0A] dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SKILLS & TECHNOLOGY MATRIX (Subtle Section Band for Clean Separation)
          ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-[#F8FAFC] dark:bg-[#0B0B0F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="Skills & Toolkit"
              title="Modern Technologies I Work With"
              description="I choose the right tools based on the needs and goals of each project, focusing on reliability, speed, and clean maintenance."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat, i) => (
              <ScrollReveal
                key={cat.title}
                animation="fade-up"
                delay={Math.min(i * 100, 400)}
                className="flex flex-col h-full w-full"
              >
                <Card
                  hover
                  className="p-5 sm:p-8 space-y-4 w-full h-full"
                >
                  <h3 className="font-heading text-lg font-bold text-[#0A0A0A] dark:text-white border-b border-[#E4E4E7] dark:border-white/[0.08] pb-3">
                    {cat.title}
                  </h3>
                  <ul className="space-y-3 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span className="text-[#0A0A0A] dark:text-white font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CALL TO ACTION (Creative Designer High Impact)
          ========================================================================= */}
      <ScrollReveal animation="zoom-in" duration={0.65}>
        <CTASection
          eyebrow="Ready to Collaborate?"
          title="Let’s Build Something Meaningful Together."
          description="Whether you need a custom website, a full-stack SaaS platform, or want to discuss a digital product, I’d love to connect."
          primaryButtonText="Get in Touch"
          primaryButtonHref="/contact"
          secondaryButtonText="Explore Digital Products"
          secondaryButtonHref="/products"
        />
      </ScrollReveal>
    </div>
  );
}
