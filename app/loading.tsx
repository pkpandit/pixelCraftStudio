export default function Loading() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-60 dark:opacity-40"
      >
        <div className="h-[360px] w-[500px] rounded-full bg-gradient-to-tr from-[#4F46E5]/20 via-[#7C3AED]/15 to-transparent blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center space-y-6">
        {/* Dual Ring Spinner with PU Studio Center */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          {/* Outer pulsed ring */}
          <span className="absolute inset-0 rounded-3xl border-2 border-[#4F46E5]/30 dark:border-[#C084FC]/30 animate-ping opacity-35" />

          {/* Rotating gradient ring */}
          <span className="absolute inset-0 rounded-3xl border-2 border-transparent border-t-[#4F46E5] border-r-[#7C3AED] dark:border-t-[#818CF8] dark:border-r-[#EC4899] animate-spin" />

          {/* Center Brand Badge */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#4F46E5] to-[#7C3AED] font-black text-white text-base shadow-md shadow-indigo-500/25 ring-1 ring-white/20 dark:from-[#6366F1] dark:via-[#8B5CF6] dark:to-[#EC4899]">
            <span className="font-heading">PU</span>
          </div>
        </div>

        {/* Loading text with animated pulse */}
        <div className="space-y-1.5">
          <p className="font-heading text-sm font-bold tracking-widest uppercase text-[#0A0A0A] dark:text-white">
            Loading Studio
          </p>
          <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] animate-pulse">
            Preparing high-performance experience...
          </p>
        </div>
      </div>
    </div>
  );
}
