import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Target,
  Lightbulb,
  Handshake,
  Rocket,
} from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/layout/section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { SITE_CONFIG, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about A. Smith Media — a diversified investment & media company based in Frisco, Texas, with a portfolio from tech to construction.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every strategy we craft is anchored in measurable outcomes. We don't just deliver services — we deliver growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, leveraging emerging technologies like AI to give our clients a competitive edge.",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    description:
      "We're not just consultants — we're invested partners in your success. Your wins are our wins.",
  },
  {
    icon: Rocket,
    title: "Execution Speed",
    description:
      "Ideas without execution are worthless. We move fast, iterate faster, and ship solutions that work.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <GradientBlob className="w-[600px] h-[600px] -top-20 -right-40" variant="mixed" />
        <div className="relative max-w-7xl mx-auto">
          <Badge className="mb-4">About Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Building the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Future
            </span>
            , Today
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A. Smith Media is a diversified investment & media company with a
            portfolio spanning technology, media, and construction. Based in
            Frisco, Texas.
          </p>
        </div>
      </section>

      {/* Story */}
      <Section className="pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <SectionHeader
                label="Our Story"
                title="From Vision to Venture"
                className="mb-8"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A. Smith Media was founded with a simple belief: that the right
                  blend of technology, strategy, and creative execution can
                  transform any business.
                </p>
                <p>
                  What started as a digital consulting practice has grown into a
                  diversified company that bridges the gap between emerging
                  technology and practical business application. From AI-powered
                  solutions to brand identity, we help businesses at every stage
                  navigate the digital landscape.
                </p>
                <p>
                  Today, our portfolio spans digital media, technology
                  consulting, educational platforms, and beyond — all united by a
                  commitment to innovation and measurable results.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <MapPin size={16} className="text-primary" />
                {SITE_CONFIG.address}
              </div>
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          label="Our Values"
          title="What Drives Us"
          description="The principles that guide every decision, strategy, and solution we deliver."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {VALUES.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.1}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <value.icon size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-base mb-2">
                      {value.title}
                    </CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Whether you&apos;re a startup or an established enterprise,
              we&apos;d love to learn about your goals.
            </p>
            <Link href="/contact">
              <Button variant="glow" size="lg">
                Get in Touch
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
