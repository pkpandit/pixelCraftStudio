import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, ExternalLink, Sparkles, Zap, Eye } from "lucide-react";
import { DigitalProduct } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export interface ProductCardProps {
  product: DigitalProduct;
}

/**
 * Standard ProductCard shared across Homepage, Catalog, and Related Products sections.
 * Features Next.js Image optimization, savings pill, hover preview overlay, and WCAG touch targets.
 */
export function ProductCard({ product }: ProductCardProps) {
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <Card hover className="group flex flex-col justify-between overflow-hidden h-full">
      <div>
        {/* Thumbnail Image Container with Hover Actions Overlay */}
        <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F4F4F5] dark:bg-[#15151A] border-b border-[#E4E4E7] dark:border-white/[0.08]">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Dark Vignette Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            {product.demoUrl && (
              <a
                href={product.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/95 text-zinc-900 px-4 py-2 text-xs font-bold shadow-lg hover:bg-white hover:scale-105 transition-all"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Live preview of ${product.title}`}
              >
                <Eye className="h-3.5 w-3.5 text-[#4F46E5]" />
                <span>Live Preview</span>
              </a>
            )}
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/90 text-white px-4 py-2 text-xs font-bold shadow-lg hover:bg-black hover:scale-105 transition-all border border-white/20"
              aria-label={`View details of ${product.title}`}
            >
              <span>Details</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
            {product.badge && (
              <span className="rounded-full bg-[#0A0A0A] text-white dark:bg-gradient-to-r dark:from-[#6366F1] dark:to-[#EC4899] px-3 py-1 text-xs font-bold shadow-md uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                <span>{product.badge}</span>
              </span>
            )}
            {savings > 0 && (
              <span className="rounded-full bg-emerald-500 text-white dark:bg-emerald-500/90 px-2.5 py-0.5 text-[11px] font-bold shadow-sm">
                Save ${savings}
              </span>
            )}
          </div>

          <div className="absolute top-3.5 right-3.5">
            <span className="rounded-full bg-white/95 dark:bg-[#15151B]/95 text-[#0A0A0A] dark:text-white px-3 py-1 text-xs font-bold border border-[#E4E4E7] dark:border-white/10 shadow-xs backdrop-blur-md">
              {product.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <CardHeader className="p-4 sm:p-6 space-y-3 pb-3 sm:pb-4">
          {/* Rating & Social Proof */}
          <div className="flex items-center gap-2 text-xs text-[#52525B] dark:text-[#A1A1AA]">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
            <span>·</span>
            <span>({product.reviewsCount} reviews)</span>
            <span>·</span>
            <span className="text-[#0A0A0A] dark:text-white font-bold">{product.salesCount}+ sold</span>
          </div>

          <CardTitle className="text-xl sm:text-2xl font-bold group-hover:text-[#4F46E5] dark:group-hover:text-[#C084FC] transition-colors leading-tight">
            <Link href={`/products/${product.slug}`}>
              {product.title}
            </Link>
          </CardTitle>

          <CardDescription className="line-clamp-2 text-xs sm:text-sm">
            {product.tagline}
          </CardDescription>
        </CardHeader>

        {/* Tech Stack Pills & Guarantee */}
        <CardContent className="px-4 sm:px-6 pt-0 pb-4 sm:pb-5 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {product.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#FAFAF9] dark:bg-[#181822] border border-[#E4E4E7] dark:border-white/10 px-3 py-1 text-[11px] font-semibold text-[#52525B] dark:text-[#D4D4D8]"
              >
                {tech}
              </span>
            ))}
            {product.techStack.length > 3 && (
              <span className="rounded-full bg-[#FAFAF9] dark:bg-[#181822] border border-[#E4E4E7] dark:border-white/10 px-2.5 py-1 text-[11px] font-semibold text-[#71717A] dark:text-[#A1A1AA]">
                +{product.techStack.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            <Zap className="h-3 w-3 shrink-0" />
            <span>Instant access · Commercial license included</span>
          </div>
        </CardContent>
      </div>

      {/* Card Footer */}
      <CardFooter className="p-4 sm:p-6 pt-4 sm:pt-5 border-t border-[#E4E4E7] dark:border-white/[0.08] flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 bg-white/80 dark:bg-[#0E0E13]/90">
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-2xl font-black text-[#0A0A0A] dark:text-white">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] line-through font-semibold">
              ${product.originalPrice}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {product.demoUrl && (
            <Button
              href={product.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="icon-sm"
              title="Live Preview"
              aria-label={`Live preview of ${product.title}`}
              className="rounded-full"
            >
              <ExternalLink className="size-3.5" />
            </Button>
          )}
          <Button
            href={`/products/${product.slug}`}
            size="sm"
            className="rounded-full px-5 text-xs font-bold"
          >
            Get Product
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
