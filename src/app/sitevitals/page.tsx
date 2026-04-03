import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Zap,
  Shield,
  BarChart3,
  Bell,
  FileText,
  ArrowRight,
  Check,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SiteVitals — WordPress Plugin Marketplace",
  description:
    "Professional WordPress plugins for site monitoring, speed optimization, and performance management. Built by A. Smith Media.",
  alternates: { canonical: "/sitevitals" },
};

const plugins = [
  {
    slug: "health-monitor",
    name: "SiteVitals Health Monitor",
    tagline: "Keep every plugin in check",
    description:
      "Auto-rollback, real-time monitoring, performance history, Slack alerts, and white-label agency reports for WordPress.",
    icon: Activity,
    color: "from-emerald-500 to-teal-600",
    highlights: [
      "Auto-rollback on plugin conflicts",
      "Real-time error monitoring",
      "Slack & email alerts",
      "White-label agency reports",
      "Performance history & trends",
      "PDF/HTML export",
    ],
    price: "$49",
    period: "/year",
  },
  {
    slug: "speed-optimizer",
    name: "SiteVitals Speed Optimizer",
    tagline: "Everything you need for a faster site",
    description:
      "Critical CSS, unused CSS removal, WebP/AVIF conversion, CDN integration, and advanced JavaScript optimization for WordPress.",
    icon: Zap,
    color: "from-amber-500 to-orange-600",
    highlights: [
      "Critical CSS generation",
      "Unused CSS removal",
      "WebP/AVIF image conversion",
      "CDN integration",
      "Advanced JS delay & prefetch",
      "Performance history & trends",
    ],
    price: "$49",
    period: "/year",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Built for WordPress Pros",
    description:
      "Designed for agencies and developers who manage multiple WordPress sites and need reliable, professional-grade tools.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description:
      "Track performance over time with interactive charts and historical data. Know exactly what changed and when.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description:
      "Slack webhooks and styled email alerts keep you informed the moment something needs attention.",
  },
  {
    icon: FileText,
    title: "White-Label Reports",
    description:
      "Branded reports with your agency logo and colors. Export as HTML or PDF for client deliverables.",
  },
];

export default function SiteVitalsMarketplacePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 text-center">
        <Badge>WordPress Plugin Marketplace</Badge>
        <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SiteVitals
          </span>{" "}
          Plugins
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          Professional WordPress plugins for site health, speed optimization,
          and performance management.
        </p>
        <p className="text-sm text-muted-foreground">
          Built by A. Smith Media &middot; Trusted by agencies &amp;
          developers
        </p>
      </Section>

      {/* Plugin Cards */}
      <Section className="py-16">
        <SectionHeader
          label="Our Plugins"
          title="Choose your toolkit"
          description="Each plugin includes a free version on WordPress.org with a Pro upgrade for advanced features."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {plugins.map((plugin) => (
            <Card
              key={plugin.slug}
              className="p-0 overflow-hidden group hover:border-primary/40 transition-colors"
            >
              {/* Card Header */}
              <div className="p-8 pb-0">
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${plugin.color} flex items-center justify-center text-white mb-5`}
                >
                  <plugin.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plugin.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {plugin.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {plugin.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="px-8 py-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {plugin.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check
                        size={14}
                        className="text-green-500 shrink-0"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="px-8 pb-8 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-extrabold">
                    {plugin.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plugin.period}
                  </span>
                  <span className="text-xs text-muted-foreground ml-2">
                    Pro single site
                  </span>
                </div>
                <Link href={`/sitevitals/${plugin.slug}`}>
                  <Button variant="glow" size="default">
                    View Plugin
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why SiteVitals */}
      <Section className="py-16">
        <SectionHeader
          label="Why SiteVitals"
          title="Built different"
          description="Every plugin is crafted with agency workflows in mind — because we run an agency too."
          className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <Card key={b.title} className="p-6 text-center">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <b.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {b.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to level up your WordPress sites?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Start with the free versions on WordPress.org, then upgrade to Pro
          when you&apos;re ready for advanced features.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/sitevitals/health-monitor">
            <Button variant="glow" size="lg">
              <Activity size={18} />
              Health Monitor
            </Button>
          </Link>
          <Link href="/sitevitals/speed-optimizer">
            <Button variant="outline" size="lg">
              <Zap size={18} />
              Speed Optimizer
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
