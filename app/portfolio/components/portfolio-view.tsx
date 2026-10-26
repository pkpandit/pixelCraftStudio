"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { SocialIcon } from "@/components/ui/social-icons";
import { PROJECTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/shared/cta-section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export interface PortfolioViewProps {
  className?: string;
}

const CATEGORIES = ["All", "Web App", "E-Commerce", "UI/UX Design"];

export function PortfolioView({ className = "" }: PortfolioViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

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
              <span>Selected Case Studies</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight lg:tracking-tighter text-[#0A0A0A] dark:text-white leading-[1.18] sm:leading-[1.12] lg:leading-[1.10]">
                <span className="block">Real Work. Real Results.</span>
                <span className="block">
                  <span className="gradient-text">
                    Shipped for Ambition.
                  </span>
                </span>
              </h1>
              <div className="agency-heading-bar mx-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#52525B] dark:text-[#A1A1AA] leading-relaxed sm:leading-[1.7] max-w-2xl sm:max-w-3xl mx-auto text-balance font-normal">
              A curated collection of web applications, custom websites, and digital design systems built with React, Next.js, and clean engineering.
            </p>
          </ScrollReveal>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-10 sm:pt-12 border-t border-[#E4E4E7] dark:border-white/[0.08] max-w-4xl mx-auto text-left">
            {[
              { label: "Shipped Work", value: "45+ Projects" },
              { label: "Average Lighthouse", value: "98/100" },
              { label: "Client Satisfaction", value: "99%" },
              { label: "On-Time Delivery", value: "100%" },
            ].map((metric, i) => (
              <ScrollReveal
                key={metric.label}
                animation="fade-up"
                delay={Math.min(i * 100, 400)}
                className="flex h-full"
              >
                <Card hover className="p-4 sm:p-5 w-full h-full rounded-[20px]">
                  <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] font-semibold">{metric.label}</span>
                  <p className="font-heading text-xl sm:text-2xl font-black text-[#0A0A0A] dark:text-white pt-1">{metric.value}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies Showcase */}
      <section className="py-24 sm:py-36 bg-[#F8FAFC] dark:bg-[#0B0B0F] border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <Container className="space-y-12">
          {/* Category Filter Pills */}
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div
              role="tablist"
              aria-label="Filter case studies by category"
              className="flex items-center justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold transition-all duration-300 select-none cursor-pointer ${
                      isSelected
                        ? "bg-[#0A0A0A] text-white shadow-xs scale-105 dark:bg-gradient-to-r dark:from-[#6366F1] dark:via-[#8B5CF6] dark:to-[#EC4899] dark:text-white dark:shadow-[0_0_20px_rgba(139,92,246,0.35),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                        : "border border-[#E4E4E7] bg-white text-[#52525B] hover:bg-zinc-50 hover:text-[#0A0A0A] hover:border-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-gradient-to-b dark:from-[#161620] dark:to-[#101015] dark:text-[#A1A1AA] dark:hover:border-white/25 dark:hover:from-[#1C1C26] dark:hover:to-[#15151C] dark:hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.length === 0 ? (
              <ScrollReveal animation="fade" className="col-span-full py-16 text-center">
                <p className="text-[#52525B] dark:text-[#A1A1AA] text-base">
                  No projects found in this category.
                </p>
              </ScrollReveal>
            ) : (
              filteredProjects.map((project, index) => (
                <ScrollReveal
                  key={project.id}
                  animation="fade-up"
                  delay={Math.min(index * 100, 400)}
                  className="flex flex-col h-full w-full"
                >
                  <Card
                    hover
                    className="group flex flex-col justify-between p-6 sm:p-8 md:p-12 border-[#E4E4E7] dark:border-white/[0.08] bg-white dark:bg-gradient-to-b dark:from-[#171720] dark:to-[#0F0F14] shadow-md dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.08)] w-full h-full overflow-hidden rounded-[20px]"
                  >
                    <div className="space-y-6">
                      {/* Screenshot Container with Next.js Image Optimization */}
                      <div className="relative aspect-16/9 w-full overflow-hidden rounded-[16px] bg-[#F4F4F5] dark:bg-[#15151A] border border-[#E4E4E7] dark:border-white/10">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                          <span className="rounded-full bg-[#0A0A0A]/90 text-white px-3 py-1 text-xs font-bold backdrop-blur-md dark:bg-white/90 dark:text-[#0A0A0A]">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Metadata & Title */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-[#71717A] dark:text-[#A1A1AA] font-bold">
                          <span>{project.client}</span>
                          <span>{project.year}</span>
                        </div>

                        <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#0A0A0A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#C084FC] transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      {/* Two-Column Project Details: Challenge & Solution */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="rounded-[16px] border border-[#E4E4E7] dark:border-white/10 bg-[#F8FAFC] dark:bg-[#161620] p-4 sm:p-5 space-y-1.5 h-full">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500">
                            Challenge
                          </span>
                          <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>

                        <div className="rounded-[16px] border border-[#E4E4E7] dark:border-white/10 bg-[#F8FAFC] dark:bg-[#161620] p-4 sm:p-5 space-y-1.5 h-full">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-500">
                            Solution
                          </span>
                          <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Measurable Results */}
                      <div className="space-y-2 pt-2 border-t border-[#E4E4E7] dark:border-white/[0.08]">
                        <span className="text-xs font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                          <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                          <span>Key Outcomes</span>
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#52525B] dark:text-[#A1A1AA]">
                          {project.results.map((res, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-[#FAFAF9] dark:bg-[#181822] border border-[#E4E4E7] dark:border-white/10 px-3 py-1 text-[11px] font-semibold text-[#52525B] dark:text-[#D4D4D8]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Link Buttons */}
                    <div className="pt-6 mt-6 border-t border-[#E4E4E7] dark:border-white/[0.08] flex items-center gap-3">
                      {project.liveUrl && (
                        <Button
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="sm"
                          className="rounded-full px-5 text-xs font-bold"
                          rightIcon={<ExternalLink className="h-3.5 w-3.5" />}
                        >
                          Visit Live Site
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outline"
                          size="sm"
                          className="rounded-full px-5 text-xs font-bold"
                          leftIcon={<SocialIcon name="github" className="h-3.5 w-3.5 mr-1" />}
                        >
                          Code
                        </Button>
                      )}
                    </div>
                  </Card>
                </ScrollReveal>
              ))
            )}
          </div>
        </Container>
      </section>

      {/* Final CTA Banner */}
      <CTASection
        eyebrow="Ready for Similar Results?"
        title="Let’s Build Your Next High-Performance Project."
        description="Whether you need a brand-new website or a custom web application, I’d love to discuss how we can turn your ideas into impactful software."
        primaryButtonText="Start a Conversation"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonHref="/services"
      />
    </div>
  );
}

export default PortfolioView;
