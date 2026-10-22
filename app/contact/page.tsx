import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "./components/contact-form";
import ContactLoading from "./loading";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries | Pramod Upadhyay",
  description:
    "Get in touch with Pramod Upadhyay for custom web development, Next.js engineering, or digital product support. Typical response time is within 24 hours.",
  keywords: [
    "Contact Pramod Upadhyay",
    "Hire Next.js Developer",
    "Freelance Full Stack Developer",
    "UI Designer Contact",
    "Web Application Development Quote",
  ],
  openGraph: {
    title: "Contact & Project Inquiries | Pramod Upadhyay",
    description:
      "Get in touch with Pramod Upadhyay for custom web development, Next.js engineering, or digital product support.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactLoading />}>
      <ContactForm />
    </Suspense>
  );
}
