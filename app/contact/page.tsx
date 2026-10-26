import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "./components/contact-form";
import ContactLoading from "./loading";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries | pixelCraftStudio",
  description:
    "Get in touch with pixelCraftStudio for custom web development, Next.js engineering, or digital product support. Typical response time is within 24 hours.",
  keywords: [
    "Contact pixelCraftStudio",
    "Hire Next.js Developers",
    "Web Design Studio Contact",
    "UI Designer Contact",
    "Web Application Development Quote",
  ],
  openGraph: {
    title: "Contact & Project Inquiries | pixelCraftStudio",
    description:
      "Get in touch with pixelCraftStudio for custom web development, Next.js engineering, or digital product support.",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactLoading />}>
      <ContactForm />
    </Suspense>
  );
}
