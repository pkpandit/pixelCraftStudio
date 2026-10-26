import { Home, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white transition-colors">
      <Container className="text-center max-w-2xl space-y-8">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/20 bg-[#4F46E5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F46E5] dark:border-[#C084FC]/30 dark:bg-[#C084FC]/10 dark:text-[#C084FC]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Error 404 · Page Not Found</span>
        </div>

        {/* Big Headline */}
        <div className="space-y-4">
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#0A0A0A] dark:text-white leading-none">
            Lost in <span className="gradient-text">Cyberspace</span>
          </h1>
          <p className="text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
            The page you are looking for doesn&apos;t exist, has been moved, or the link may be outdated.
          </p>
        </div>

        {/* Quick Action Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Button
            href="/"
            size="lg"
            className="w-full sm:w-auto rounded-full px-8 font-bold"
            leftIcon={<Home className="h-4 w-4 mr-1" />}
          >
            Return to Home
          </Button>
          <Button
            href="/products"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto rounded-full px-8 font-bold"
            leftIcon={<ShoppingBag className="h-4 w-4 mr-1" />}
          >
            Explore Catalog
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-full px-8 font-bold"
            rightIcon={<ArrowRight className="h-4 w-4 ml-1" />}
          >
            Need Help?
          </Button>
        </div>
      </Container>
    </div>
  );
}
