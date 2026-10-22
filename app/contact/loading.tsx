import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white">
      {/* Hero Skeleton */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-36 border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex justify-center">
            <Skeleton rounded="full" className="h-7 w-36" />
          </div>
          <Skeleton className="h-14 sm:h-20 w-3/4 mx-auto rounded-[18px]" />
          <Skeleton className="h-5 sm:h-6 w-full max-w-2xl mx-auto rounded-lg" />
        </div>
      </section>

      {/* Main Form Skeleton */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#09090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Form Card Skeleton */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-10 space-y-7">
                <Skeleton className="h-8 w-48 rounded-md" />
                <Skeleton className="h-4 w-72" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton rounded="full" className="h-12 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton rounded="full" className="h-12 w-full" />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <Skeleton className="h-4 w-48" />
                  <div className="flex flex-wrap gap-2">
                    <Skeleton rounded="full" className="h-9 w-32" />
                    <Skeleton rounded="full" className="h-9 w-36" />
                    <Skeleton rounded="full" className="h-9 w-28" />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-32 w-full rounded-[20px]" />
                </div>

                <Skeleton rounded="full" className="h-13 w-full" />
              </Card>
            </div>

            {/* Right: Info Card Skeleton */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="p-6 sm:p-8 space-y-6">
                <Skeleton className="h-7 w-44 rounded-md" />
                <div className="space-y-4 pt-2">
                  <Skeleton className="h-14 w-full rounded-xl" />
                  <Skeleton className="h-14 w-full rounded-xl" />
                  <Skeleton className="h-14 w-full rounded-xl" />
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <Skeleton className="h-6 w-36 rounded-md" />
                <Skeleton className="h-4 w-full" />
                <Skeleton rounded="full" className="h-10 w-full" />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
