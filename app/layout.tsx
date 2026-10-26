import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pixelcraftstudio.com"),
  title: {
    default: "pixelCraftStudio | Digital Products & Web Development Studio",
    template: "%s | pixelCraftStudio",
  },
  description:
    "Digital products, website templates, and bespoke web development services by pixelCraftStudio. Crafting high-performance Next.js applications and modern design systems.",
  keywords: [
    "pixelCraftStudio",
    "Web Development Studio",
    "UI Designer",
    "Next.js Developer",
    "React Templates",
    "Digital Products",
    "Figma UI Kits",
  ],
  authors: [{ name: "pixelCraftStudio" }],
  creator: "pixelCraftStudio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixelcraftstudio.com",
    siteName: "pixelCraftStudio",
    title: "pixelCraftStudio | Digital Products & Web Development Studio",
    description:
      "Digital products, website templates, and bespoke web development services by pixelCraftStudio. Crafting high-performance Next.js applications and modern design systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "pixelCraftStudio | Digital Products & Web Development Studio",
    description:
      "Digital products, website templates, and bespoke web development services by pixelCraftStudio.",
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
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://pixelcraftstudio.com/#organization",
                  name: "pixelCraftStudio",
                  url: "https://pixelcraftstudio.com",
                  logo: "https://pixelcraftstudio.com/favicon.ico",
                  sameAs: [
                    "https://github.com",
                    "https://linkedin.com",
                    "https://dribbble.com",
                  ],
                  description:
                    "Digital products, website templates, and bespoke web development services by pixelCraftStudio.",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://pixelcraftstudio.com/#website",
                  url: "https://pixelcraftstudio.com",
                  name: "pixelCraftStudio",
                  publisher: {
                    "@id": "https://pixelcraftstudio.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-clip">
        {/* WCAG 2.1 AA Compliant Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-primary-foreground focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 w-full pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
