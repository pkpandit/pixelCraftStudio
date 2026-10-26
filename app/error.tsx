"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Anonymized runtime error telemetry can be logged here
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 bg-white dark:bg-[#09090B] text-[#0A0A0A] dark:text-white transition-colors">
      <Container className="text-center max-w-xl space-y-7">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 mx-auto border border-red-500/20 shadow-xs">
          <AlertTriangle className="h-8 w-8" />
        </div>

        <div className="space-y-3">
          <h1 className="font-heading text-3xl sm:text-5xl font-black text-[#0A0A0A] dark:text-white tracking-tight">
            Something went wrong
          </h1>
          <p className="text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed max-w-md mx-auto">
            An unexpected error occurred while rendering this view. Our system has flagged it for review.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Button
            onClick={() => reset()}
            size="lg"
            className="w-full sm:w-auto rounded-full px-8 font-bold"
            leftIcon={<RefreshCw className="h-4 w-4 mr-1" />}
          >
            Try Again
          </Button>
          <Button
            href="/"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto rounded-full px-8 font-bold"
            leftIcon={<Home className="h-4 w-4 mr-1" />}
          >
            Back to Home
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-full px-7 font-bold"
            leftIcon={<Mail className="h-4 w-4 mr-1" />}
          >
            Contact Support
          </Button>
        </div>
      </Container>
    </div>
  );
}
