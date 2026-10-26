import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsView } from "./components/products-view";
import ProductsLoading from "./loading";

export const metadata: Metadata = {
  title: "Digital Products & Templates Catalog | pixelCraftStudio",
  description:
    "Explore production-ready Next.js website templates, admin dashboard kits, and Figma UI systems built for developers, startups, and creative agencies.",
  keywords: [
    "Digital Products",
    "Next.js Templates",
    "Figma UI Kits",
    "Admin Dashboard Templates",
    "React Templates",
    "Website Templates",
    "pixelCraftStudio",
  ],
  openGraph: {
    title: "Digital Products & Templates Catalog | pixelCraftStudio",
    description:
      "Explore production-ready Next.js website templates, admin dashboard kits, and Figma UI systems built for developers, startups, and creative agencies.",
    type: "website",
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsView />
    </Suspense>
  );
}
