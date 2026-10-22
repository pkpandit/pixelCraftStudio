import type { Metadata } from "next";
import { Suspense } from "react";
import { PortfolioView } from "./components/portfolio-view";
import PortfolioLoading from "./loading";

export const metadata: Metadata = {
  title: "Case Studies & Shipped Portfolio | Pramod Upadhyay",
  description:
    "Explore case studies of custom Next.js web applications, e-commerce platforms, and scalable design systems shipped by Pramod Upadhyay with measurable performance outcomes.",
  keywords: [
    "Portfolio Pramod Upadhyay",
    "Next.js Case Studies",
    "React Web App Portfolio",
    "Full Stack Developer Portfolio",
    "Tailwind CSS Projects",
  ],
  openGraph: {
    title: "Case Studies & Shipped Portfolio | Pramod Upadhyay",
    description:
      "Explore case studies of custom Next.js web applications, e-commerce platforms, and scalable design systems.",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <Suspense fallback={<PortfolioLoading />}>
      <PortfolioView />
    </Suspense>
  );
}
