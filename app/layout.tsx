import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pramodupadhyay.com"),
  title: {
    default: "Pramod Upadhyay | Full Stack Developer & UI Designer",
    template: "%s | Pramod Upadhyay",
  },
  description:
    "Portfolio, digital products, and bespoke web development services by Pramod Upadhyay. Crafting high-performance Next.js applications and modern design systems.",
  keywords: [
    "Pramod Upadhyay",
    "Full Stack Developer",
    "UI Designer",
    "Next.js Developer",
    "React Templates",
    "Digital Products",
  ],
  authors: [{ name: "Pramod Upadhyay" }],
  creator: "Pramod Upadhyay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pramodupadhyay.com",
    siteName: "Pramod Upadhyay Studio",
    title: "Pramod Upadhyay | Full Stack Developer & UI Designer",
    description:
      "Portfolio, digital products, and bespoke web development services by Pramod Upadhyay. Crafting high-performance Next.js applications and modern design systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pramod Upadhyay | Full Stack Developer & UI Designer",
    description:
      "Portfolio, digital products, and bespoke web development services by Pramod Upadhyay.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        {/* WCAG 2.1 AA Compliant Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-primary-foreground focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
