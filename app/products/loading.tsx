import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white">
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-36 border-b border-[#E4E4E7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex justify-center">
            <Skeleton rounded="full" className="h-7 w-48" />
          </div>
          <Skeleton className="h-14 sm:h-20 w-3/4 mx-auto rounded-[18px]" />
          <Skeleton className="h-5 sm:h-6 w-full max-w-2xl mx-auto rounded-lg" />
          <Skeleton className="h-5 sm:h-6 w-4/5 max-w-xl mx-auto rounded-lg" />
        </div>
      </section>

      {/* Filter Toolbar Skeleton */}
      <section className="py-6 border-b border-[#E4E4E7] dark:border-white/[0.08] bg-white/90 dark:bg-[#09090B]/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Skeleton rounded="full" className="h-11 w-full md:w-88" />
            <Skeleton rounded="md" className="h-6 w-40" />
          </div>
          <div className="flex items-center gap-2.5 overflow-hidden pt-1">
            <Skeleton rounded="full" className="h-9 w-20 shrink-0" />
            <Skeleton rounded="full" className="h-9 w-36 shrink-0" />
            <Skeleton rounded="full" className="h-9 w-44 shrink-0" />
            <Skeleton rounded="full" className="h-9 w-48 shrink-0" />
            <Skeleton rounded="full" className="h-9 w-32 shrink-0" />
          </div>
        </div>
      </section>

      {/* Products Grid Skeleton (6 Cards) */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#09090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="flex flex-col justify-between overflow-hidden">
                <div>
                  {/* Thumbnail Skeleton */}
                  <div className="relative aspect-16/10 w-full overflow-hidden border-b border-[#E4E4E7] dark:border-white/[0.08]">
                    <Skeleton rounded="none" className="h-full w-full" />
                    <div className="absolute top-3.5 left-3.5">
                      <Skeleton rounded="full" className="h-6 w-24" />
                    </div>
                    <div className="absolute top-3.5 right-3.5">
                      <Skeleton rounded="full" className="h-6 w-20" />
                    </div>
                  </div>

                  {/* Body Skeleton */}
                  <CardHeader className="space-y-3 p-4 sm:p-6 pb-2 sm:pb-3">
                    <Skeleton className="h-4 w-36" />
                    <Skeleton className="h-7 w-4/5 rounded-lg" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardHeader>

                  <CardContent className="px-4 sm:px-6 pt-0 pb-4 space-y-3">
                    <div className="flex gap-2">
                      <Skeleton rounded="full" className="h-6 w-16" />
                      <Skeleton rounded="full" className="h-6 w-20" />
                      <Skeleton rounded="full" className="h-6 w-16" />
                    </div>
                    <Skeleton className="h-3 w-48" />
                  </CardContent>
                </div>

                <CardFooter className="p-4 sm:p-6 pt-3 sm:pt-4 border-t border-[#E4E4E7] dark:border-white/[0.08] flex items-center justify-between">
                  <Skeleton className="h-8 w-20 rounded-md" />
                  <div className="flex gap-2">
                    <Skeleton rounded="full" className="h-9 w-9" />
                    <Skeleton rounded="full" className="h-9 w-28" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
