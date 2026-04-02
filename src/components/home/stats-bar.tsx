"use client";

import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { STATS } from "@/lib/constants";

export function StatsBar() {
  return (
    <Section className="py-12 md:py-16 border-y border-border/30">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-mono">
                {stat.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
