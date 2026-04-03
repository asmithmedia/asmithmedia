import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Scissors,
  Image,
  BarChart3,
  Globe,
  Timer,
  Link2,
  Bell,
  FileText,
  Check,
  ArrowRight,
  Star,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/json-ld";

export const metadata: Metadata = {
  title: "SiteVitals Speed Optimizer Pro",
  description:
    "Critical CSS, unused CSS removal, WebP/AVIF conversion, performance history, CDN integration, and advanced JavaScript optimization for WordPress.",
  alternates: { canonical: "/sitevitals/speed-optimizer" },
};

const features = [
  {
    icon: Zap,
    title: "Critical CSS",
    description:
      "Generate and inline above-the-fold critical CSS. Defer full stylesheets to eliminate render-blocking CSS and improve FCP.",
  },
  {
    icon: Scissors,
    title: "Unused CSS Removal",
    description:
      "Scan pages and strip unused CSS rules. Reduce your total CSS payload by up to 90% for faster load times.",
  },
  {
    icon: Image,
    title: "WebP/AVIF Conversion",
    description:
      "Automatically convert images to modern formats. Serve the smallest possible images without sacrificing quality.",
  },
  {
    icon: BarChart3,
    title: "Performance History",
    description:
      "Track your speed score over time with interactive charts. Measure the impact of your optimizations.",
  },
  {
    icon: Globe,
    title: "CDN Integration",
    description:
      "Rewrite static asset URLs to your CDN domain. Works with Cloudflare, BunnyCDN, KeyCDN, and any pull-zone CDN.",
  },
  {
    icon: Timer,
    title: "Advanced JS Delay",
    description:
      "Delay non-critical JavaScript until user interaction. Dramatically improve Time to Interactive and Total Blocking Time.",
  },
  {
    icon: Link2,
    title: "Preload & Prefetch",
    description:
      "Auto-detect fonts and critical assets. Add preload, prefetch, and preconnect hints for faster resource delivery.",
  },
  {
    icon: Bell,
    title: "Slack & Email Alerts",
    description:
      "Get notified when your speed score drops below a threshold. Slack webhooks and styled HTML email alerts.",
  },
  {
    icon: FileText,
    title: "White-Label Reports",
    description:
      "Branded performance reports with your agency logo and colors. Export as HTML or PDF for client deliverables.",
  },
];

const comparison = [
  { feature: "Lazy Loading", free: true, pro: true },
  { feature: "HTML Minification", free: true, pro: true },
  { feature: "JavaScript Deferral", free: true, pro: true },
  { feature: "Bloat Removal (10 Items)", free: true, pro: true },
  { feature: "Database Cleanup", free: true, pro: true },
  { feature: "Performance Scoring", free: true, pro: true },
  { feature: "Email Speed Reports", free: true, pro: true },
  { feature: "Critical CSS Generation", free: false, pro: true },
  { feature: "Unused CSS Removal", free: false, pro: true },
  { feature: "WebP/AVIF Image Conversion", free: false, pro: true },
  { feature: "Advanced JS Delay", free: false, pro: true },
  { feature: "CDN Integration", free: false, pro: true },
  { feature: "Preload & Prefetch Manager", free: false, pro: true },
  { feature: "Scheduled DB Optimization", free: false, pro: true },
  { feature: "Performance History & Trends", free: false, pro: true },
  { feature: "Slack Notifications", free: false, pro: true },
  { feature: "White-Label Reports", free: false, pro: true },
  { feature: "Priority Support", free: false, pro: true },
];

const faqs = [
  {
    q: "Do I need the free plugin too?",
    a: "Yes. The Pro add-on extends the free SiteVitals Speed Optimizer plugin. Install the free version from WordPress.org first, then add the Pro plugin.",
  },
  {
    q: "How do I receive my license key?",
    a: "Immediately after purchase, you'll receive an email with your license key and a download link for the Pro plugin zip file.",
  },
  {
    q: "Will this conflict with other caching plugins?",
    a: "SiteVitals Speed Optimizer Pro focuses on frontend optimization (CSS, JS, images). It complements caching plugins like WP Super Cache or W3 Total Cache.",
  },
  {
    q: "What happens when my license expires?",
    a: "Pro features continue working for a 7-day grace period. After that, Pro features are disabled but the free plugin continues working normally. You won't lose any data.",
  },
  {
    q: "Can I transfer my license to another site?",
    a: "Single-site licenses are tied to one domain. Deactivate the license on one site before activating on another. Unlimited licenses work on any domain.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.",
  },
];

export default function SpeedOptimizerPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "SiteVitals Speed Optimizer Pro",
          description:
            "Critical CSS, unused CSS removal, WebP/AVIF conversion, performance history, CDN integration, and advanced JavaScript optimization for WordPress.",
          brand: { "@type": "Organization", name: "A. Smith Media" },
          offers: [
            {
              "@type": "Offer",
              name: "Single Site",
              price: "49.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://asmith.media/sitevitals/speed-optimizer",
            },
            {
              "@type": "Offer",
              name: "Unlimited Sites",
              price: "149.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://asmith.media/sitevitals/speed-optimizer",
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://asmith.media" },
            { "@type": "ListItem", position: 2, name: "SiteVitals", item: "https://asmith.media/sitevitals" },
            { "@type": "ListItem", position: 3, name: "Speed Optimizer Pro", item: "https://asmith.media/sitevitals/speed-optimizer" },
          ],
        }}
      />

      {/* Hero */}
      <Section className="pt-32 pb-16 text-center">
        <Badge>SiteVitals Speed Optimizer</Badge>
        <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
          Upgrade to <span className="text-primary">Pro</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Critical CSS, unused CSS removal, WebP/AVIF conversion, performance
          history, CDN integration, and advanced JavaScript optimization.
        </p>
        <Link href="#pricing">
          <Button variant="glow" size="xl">
            Get Pro Now
            <ArrowRight size={20} />
          </Button>
        </Link>
      </Section>

      {/* Features Grid */}
      <Section className="py-16">
        <SectionHeader
          label="Pro Features"
          title="Everything you need for a faster site"
          description="Go beyond the basics with advanced optimization tools trusted by agencies and professionals."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section className="py-16">
        <SectionHeader
          label="Compare"
          title="Free vs Pro"
          className="text-center"
        />
        <div className="max-w-3xl mx-auto">
          <Card className="p-0 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-6 py-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Free
                  </th>
                  <th className="px-6 py-4 text-center font-mono text-xs uppercase tracking-wider text-primary">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="px-6 py-3 text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-6 py-3 text-center">
                      {row.free ? (
                        <Check size={16} className="inline text-green-500" />
                      ) : (
                        <span className="text-muted-foreground/40">&mdash;</span>
                      )}
                    </td>
                    <td className="px-6 py-3 text-center">
                      <Check size={16} className="inline text-green-500" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </Section>

      {/* Pricing */}
      <Section className="py-16" id="pricing">
        <SectionHeader
          label="Pricing"
          title="Simple, transparent pricing"
          description="One-time annual payment. No hidden fees. 30-day money-back guarantee."
          className="text-center"
        />
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
          {/* Single Site */}
          <Card className="flex-1 p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Single Site</h3>
            <div className="text-5xl font-extrabold mb-1">
              $49
              <span className="text-base font-normal text-muted-foreground">
                /year
              </span>
            </div>
            <ul className="text-left text-sm text-muted-foreground space-y-3 my-8">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 shrink-0" /> 1
                WordPress site
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 shrink-0" /> All Pro
                features
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 shrink-0" /> 1 year
                of updates
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 shrink-0" /> Email
                support
              </li>
            </ul>
            <Link href="/api/sitevitals/speed-optimizer/create-session?plan=single">
              <Button variant="outline" size="lg" className="w-full">
                Get Single Site
              </Button>
            </Link>
          </Card>

          {/* Unlimited */}
          <Card className="flex-1 p-8 text-center border-primary/50 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="flex items-center gap-1">
                <Star size={10} /> Most Popular
              </Badge>
            </div>
            <h3 className="text-xl font-bold mb-2">Unlimited Sites</h3>
            <div className="text-5xl font-extrabold mb-1">
              $149
              <span className="text-base font-normal text-muted-foreground">
                /year
              </span>
            </div>
            <ul className="text-left text-sm text-muted-foreground space-y-3 my-8">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 shrink-0" />{" "}
                Unlimited WordPress sites
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 shrink-0" /> All Pro
                features
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 shrink-0" /> 1 year
                of updates
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 shrink-0" /> Priority
                support
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 shrink-0" />{" "}
                White-label reports
              </li>
            </ul>
            <Link href="/api/sitevitals/speed-optimizer/create-session?plan=unlimited">
              <Button variant="glow" size="lg" className="w-full">
                Get Unlimited
              </Button>
            </Link>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-16">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          className="text-center"
        />
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.q} className="p-6">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
