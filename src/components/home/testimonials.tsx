"use client";

import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/layout/section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <Section>
      <SectionHeader
        label="Testimonials"
        title="Trusted by Leaders"
        description="See what our clients say about working with A. Smith Media."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, i) => (
          <ScrollReveal key={testimonial.name} delay={i * 0.1}>
            <Card className="h-full flex flex-col">
              <Quote
                size={24}
                className="text-primary/30 mb-4"
              />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className="text-primary fill-primary"
                    />
                  ))}
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
