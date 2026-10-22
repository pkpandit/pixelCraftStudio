import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white">
      {/* Hero Skeleton */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-36 border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex justify-center">
            <Skeleton rounded="full" className="h-7 w-48" />
          </div>
          <Skeleton className="h-14 sm:h-20 w-3/4 mx-auto rounded-[18px]" />
          <Skeleton className="h-5 sm:h-6 w-full max-w-2xl mx-auto rounded-lg" />

          {/* Quick Trust Pillars Skeleton */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-10 border-t border-[#E4E4E7] dark:border-white/[0.08]">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="p-4 sm:p-5 space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-28 rounded-md" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown Cards Skeleton */}
      <section className="py-24 sm:py-36 bg-[#F8FAFC] dark:bg-[#0B0B0F] border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Skeleton rounded="full" className="h-7 w-32 mx-auto" />
            <Skeleton className="h-12 w-4/5 mx-auto rounded-lg" />
            <Skeleton className="h-5 w-2/3 mx-auto rounded-md" />
          </div>

          <div className="space-y-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="p-6 sm:p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <Skeleton rounded="lg" className="h-14 w-14" />
                      <Skeleton rounded="full" className="h-6 w-28" />
                    </div>
                    <Skeleton className="h-9 w-3/4 rounded-md" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-44" />
                  </div>
                  <div className="lg:col-span-5 p-6 rounded-[20px] border border-[#E4E4E7] dark:border-white/10 space-y-4">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton rounded="full" className="h-12 w-full pt-2" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
