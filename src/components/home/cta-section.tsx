"use client";

import Link from "next/link";
import { ArrowRight, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GradientBlob } from "@/components/shared/gradient-blob";

export function CTASection() {
  return (
    <Section className="relative overflow-hidden">
      <GradientBlob
        className="w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        variant="mixed"
      />

      <ScrollReveal>
        <div className="relative rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-10 md:p-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/5 text-xs font-mono text-primary">
            <Coffee size={14} />
            Coffee Is On Us
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Business?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Let&apos;s discuss how A. Smith Media can help you achieve your
            goals. Schedule a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="glow" size="lg">
                Let&apos;s Talk
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
