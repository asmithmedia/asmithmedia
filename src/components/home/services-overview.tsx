"use client";

import Link from "next/link";
import {
  Monitor,
  Brain,
  Palette,
  BookOpen,
  GraduationCap,
  Search,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/layout/section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Brain,
  Palette,
  BookOpen,
  GraduationCap,
  Search,
  MessageSquare,
  BarChart3,
};

export function ServicesOverview() {
  return (
    <Section className="relative">
      <SectionHeader
        label="What We Do"
        title="Services Built for Growth"
        description="From AI strategy to brand identity, we deliver end-to-end solutions that move the needle."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <ScrollReveal key={service.slug} delay={i * 0.05}>
              <Link href={`/services/${service.slug}`}>
                <Card className="h-full group cursor-pointer hover:bg-card/80">
                  <div className="mb-4 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {Icon && <Icon size={20} />}
                  </div>
                  <CardTitle className="text-base mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {service.description}
                  </CardDescription>
                </Card>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
