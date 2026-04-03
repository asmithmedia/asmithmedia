"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Section className="pt-32 min-h-[70vh] flex items-center">
      <div className="max-w-lg mx-auto text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          Error
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Something Went Wrong
        </h1>
        <p className="text-muted-foreground mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <Button variant="glow" size="lg" onClick={reset}>
          Try Again
        </Button>
      </div>
    </Section>
  );
}
