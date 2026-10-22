import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function ProductDetailLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white">
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb Skeleton */}
          <div className="flex items-center gap-2">
            <Skeleton rounded="full" className="h-6 w-20" />
            <Skeleton rounded="full" className="h-6 w-28" />
            <Skeleton rounded="full" className="h-6 w-36" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Info Skeleton */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <Skeleton rounded="full" className="h-7 w-28" />
                <Skeleton rounded="full" className="h-7 w-24" />
              </div>

              <Skeleton className="h-12 sm:h-16 w-4/5 rounded-[18px]" />
              <Skeleton className="h-6 w-full rounded-md" />
              <Skeleton className="h-6 w-3/4 rounded-md" />

              {/* Highlights 4-card Grid */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E4E4E7] dark:border-white/[0.08]">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Card key={i} className="p-4 space-y-2">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-5 w-24 rounded-md" />
                  </Card>
                ))}
              </div>
            </div>

            {/* Right: Pricing Card Skeleton */}
            <div className="lg:col-span-5">
              <Card className="p-6 sm:p-8 space-y-6">
                <div className="flex items-baseline gap-3">
                  <Skeleton className="h-10 w-24 rounded-md" />
                  <Skeleton className="h-5 w-16" />
                </div>
                <Skeleton rounded="full" className="h-13 w-full" />
                <Skeleton rounded="full" className="h-11 w-full" />
                <div className="pt-4 space-y-3 border-t border-[#E4E4E7] dark:border-white/[0.08]">
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Image Block Skeleton */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-[#0B0B0F] border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <Skeleton className="h-10 w-64 mx-auto rounded-lg" />
          <div className="aspect-16/9 w-full max-w-5xl mx-auto rounded-[24px] overflow-hidden">
            <Skeleton rounded="xl" className="h-full w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
