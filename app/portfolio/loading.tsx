import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function PortfolioLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white">
      {/* Hero Skeleton */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-36 border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex justify-center">
            <Skeleton rounded="full" className="h-7 w-40" />
          </div>
          <Skeleton className="h-14 sm:h-20 w-3/4 mx-auto rounded-[18px]" />
          <Skeleton className="h-5 sm:h-6 w-full max-w-2xl mx-auto rounded-lg" />
          <Skeleton className="h-5 sm:h-6 w-4/5 max-w-xl mx-auto rounded-lg" />

          {/* Metrics 4-card Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-10 border-t border-[#E4E4E7] dark:border-white/[0.08]">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="p-4 sm:p-5 space-y-2">
                <Skeleton className="h-8 w-16 rounded-md" />
                <Skeleton className="h-4 w-24" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid Skeleton */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#09090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2.5 pb-2">
            <Skeleton rounded="full" className="h-9 w-20" />
            <Skeleton rounded="full" className="h-9 w-28" />
            <Skeleton rounded="full" className="h-9 w-32" />
            <Skeleton rounded="full" className="h-9 w-36" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {Array.from({ length: 2 }).map((_, i) => (
              <Card key={i} className="p-6 sm:p-8 space-y-6 overflow-hidden">
                <div className="aspect-16/9 w-full rounded-[16px] overflow-hidden">
                  <Skeleton rounded="none" className="h-full w-full" />
                </div>
                <div className="flex items-center gap-3">
                  <Skeleton rounded="full" className="h-6 w-24" />
                  <Skeleton rounded="full" className="h-6 w-16" />
                </div>
                <Skeleton className="h-8 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <Skeleton className="h-16 w-full rounded-xl" />
                  <Skeleton className="h-16 w-full rounded-xl" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
