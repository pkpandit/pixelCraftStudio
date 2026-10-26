import type { Metadata } from "next";
import { Suspense } from "react";
import { PortfolioView } from "./components/portfolio-view";
import PortfolioLoading from "./loading";

export const metadata: Metadata = {
  title: "Case Studies & Shipped Portfolio | pixelCraftStudio",
  description:
    "Explore case studies of custom Next.js web applications, e-commerce platforms, and scalable design systems shipped by pixelCraftStudio with measurable performance outcomes.",
  keywords: [
    "Portfolio pixelCraftStudio",
    "Next.js Case Studies",
    "React Web App Portfolio",
    "Design Studio Portfolio",
    "Tailwind CSS Projects",
  ],
  openGraph: {
    title: "Case Studies & Shipped Portfolio | pixelCraftStudio",
    description:
      "Explore case studies of custom Next.js web applications, e-commerce platforms, and scalable design systems.",
    type: "website",
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <Suspense fallback={<PortfolioLoading />}>
      <PortfolioView />
    </Suspense>
  );
}
