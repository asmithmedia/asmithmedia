import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  ArrowLeft,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { JsonLd } from "@/components/shared/json-ld";
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

// Pricing tiers (placeholder until WordPress integration)
const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    features: [
      "Initial consultation",
      "Strategy blueprint",
      "Monthly check-ins",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$1,499",
    period: "/month",
    features: [
      "Everything in Starter",
      "Full implementation",
      "Weekly strategy calls",
      "Priority support",
      "Analytics dashboard",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Everything in Growth",
      "Dedicated team",
      "Custom integrations",
      "24/7 support",
      "SLA guarantee",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@type": "Organization",
            name: "A. Smith Media",
            url: "https://asmith.media",
          },
          areaServed: { "@type": "Country", name: "US" },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://asmith.media" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://asmith.media/services" },
            { "@type": "ListItem", position: 3, name: service.title, item: `https://asmith.media/services/${slug}` },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <GradientBlob className="w-[500px] h-[500px] -top-20 -right-20" variant="purple" />
        <div className="relative max-w-7xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            All Services
          </Link>

          <div className="flex items-start gap-4 mb-6">
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              {Icon && <Icon size={28} />}
            </div>
            <div>
              <Badge className="mb-2">Service</Badge>
              <h1 className="text-3xl md:text-5xl font-bold">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <Section className="pt-8">
        <h2 className="text-2xl font-bold mb-8">What&apos;s Included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.features.map((feature, i) => (
            <ScrollReveal key={feature} delay={i * 0.05}>
              <Card className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <p className="text-sm font-medium">{feature}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <div className="text-center mb-12">
          <Badge className="mb-4">Pricing</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Flexible pricing designed to scale with your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.1}>
              <Card
                className={`h-full flex flex-col ${
                  tier.highlighted
                    ? "border-primary/50 shadow-[0_0_40px_rgba(127,84,179,0.1)]"
                    : ""
                }`}
              >
                {tier.highlighted && (
                  <div className="flex items-center gap-1 text-xs font-mono text-primary mb-3">
                    <Zap size={12} />
                    Most Popular
                  </div>
                )}
                <CardTitle className="text-lg">{tier.name}</CardTitle>
                <div className="mt-3 mb-6">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">
                    {tier.period}
                  </span>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-primary shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    variant={tier.highlighted ? "glow" : "secondary"}
                    className="w-full"
                  >
                    {tier.cta}
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Schedule a free consultation to discuss your needs and get a custom
              proposal.
            </p>
            <Link href="/contact">
              <Button variant="glow" size="lg">
                Schedule a Call
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
