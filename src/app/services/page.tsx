import type { Metadata } from "next";
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
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/layout/section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital consulting, AI business solutions, branding, book publishing, and more. Explore how A. Smith Media can help your business grow.",
};

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

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <GradientBlob className="w-[500px] h-[500px] -top-20 -right-20" variant="purple" />
        <div className="relative max-w-7xl mx-auto">
          <Badge className="mb-4">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Solutions That{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Scale
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From AI strategy to brand identity, we deliver end-to-end digital
            solutions that drive measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.slug} delay={i * 0.05}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="h-full group cursor-pointer hover:bg-card/80">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                        {Icon && <Icon size={24} />}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="mb-4">
                          {service.description}
                        </CardDescription>
                        <ul className="space-y-1.5">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-xs text-muted-foreground"
                            >
                              <CheckCircle2
                                size={12}
                                className="text-primary shrink-0"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <ArrowRight
                        size={18}
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1"
                      />
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Not sure which service is right for you?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Schedule a free consultation and we&apos;ll help you find the
              perfect solution for your business.
            </p>
            <Link href="/contact">
              <Button variant="glow" size="lg">
                Get a Free Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
