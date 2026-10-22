import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white">
      {/* Hero Skeleton */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-36 border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Bio Skeleton */}
            <div className="lg:col-span-7 space-y-6">
              <Skeleton rounded="full" className="h-7 w-32" />
              <Skeleton className="h-12 sm:h-16 w-4/5 rounded-[18px]" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-4/5" />
              <div className="pt-4 flex gap-4">
                <Skeleton rounded="full" className="h-12 w-44" />
                <div className="flex gap-2">
                  <Skeleton rounded="full" className="h-11 w-11" />
                  <Skeleton rounded="full" className="h-11 w-11" />
                  <Skeleton rounded="full" className="h-11 w-11" />
                </div>
              </div>
            </div>

            {/* Right: Identity Card Skeleton */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <Card className="w-full max-w-md p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <Skeleton rounded="lg" className="h-16 w-16" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-36 rounded-md" />
                    <Skeleton className="h-4 w-28" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Skeleton className="h-16 w-full rounded-xl" />
                  <Skeleton className="h-16 w-full rounded-xl" />
                  <Skeleton className="h-16 w-full rounded-xl" />
                  <Skeleton className="h-16 w-full rounded-xl" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy 4-card Grid Skeleton */}
      <section className="py-24 sm:py-36 bg-[#F8FAFC] dark:bg-[#0B0B0F] border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Skeleton rounded="full" className="h-7 w-28 mx-auto" />
            <Skeleton className="h-12 w-3/4 mx-auto rounded-lg" />
            <Skeleton className="h-5 w-2/3 mx-auto rounded-md" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="p-6 space-y-4">
                <Skeleton rounded="lg" className="h-12 w-12" />
                <Skeleton className="h-6 w-32 rounded-md" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
