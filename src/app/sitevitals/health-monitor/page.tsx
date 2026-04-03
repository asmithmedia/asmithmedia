import type { Metadata } from "next";
import Link from "next/link";
import {
  RotateCcw,
  BarChart3,
  Bell,
  Search,
  FileText,
  FileDown,
  Shield,
  AlertTriangle,
  Activity,
  Gauge,
  FlaskConical,
  Mail,
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
  title: "SiteVitals Health Monitor Pro",
  description:
    "Auto-rollback, real-time monitoring, performance history, Slack alerts, and white-label agency reports for WordPress.",
  alternates: { canonical: "/sitevitals/health-monitor" },
};

const features = [
  {
    icon: RotateCcw,
    title: "Auto-Rollback",
    description:
      "Automatically reverts plugin updates that cause conflicts. Your site stays online while you investigate.",
  },
  {
    icon: BarChart3,
    title: "Performance History",
    description:
      "Track plugin health scores and performance metrics over time with interactive Chart.js graphs.",
  },
  {
    icon: Bell,
    title: "Slack & Email Alerts",
    description:
      "Get instant Slack notifications and email alerts when critical issues are detected.",
  },
  {
    icon: Search,
    title: "Real-Time Monitoring",
    description:
      "Live dashboard showing errors and conflicts as they happen. Admin bar alerts for critical events.",
  },
  {
    icon: FileText,
    title: "White-Label Reports",
    description:
      "Custom-branded health reports with your agency logo, colors, and name. Perfect for client deliverables.",
  },
  {
    icon: FileDown,
    title: "PDF/HTML Export",
    description:
      "Export professional health reports as HTML or PDF. Share with clients or stakeholders.",
  },
];

const comparison = [
  { feature: "Plugin Health Scores", free: true, pro: true },
  { feature: "Conflict Detection", free: true, pro: true },
  { feature: "Performance Profiling", free: true, pro: true },
  { feature: "Safe Mode Testing", free: true, pro: true },
  { feature: "Email Health Reports", free: true, pro: true },
  { feature: "Auto-Rollback", free: false, pro: true },
  { feature: "Performance History & Trends", free: false, pro: true },
  { feature: "Real-Time Monitoring", free: false, pro: true },
  { feature: "Slack Notifications", free: false, pro: true },
  { feature: "White-Label Reports", free: false, pro: true },
  { feature: "PDF/HTML Export", free: false, pro: true },
  { feature: "Priority Support", free: false, pro: true },
];

const faqs = [
  {
    q: "Do I need the free plugin too?",
    a: "Yes. The Pro add-on extends the free SiteVitals Health Monitor plugin. Install the free version from WordPress.org first, then add the Pro plugin.",
  },
  {
    q: "How do I receive my license key?",
    a: "Immediately after purchase, you'll receive an email with your license key and a download link for the Pro plugin zip file.",
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

export default function HealthMonitorPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "SiteVitals Health Monitor Pro",
          description:
            "Auto-rollback, real-time monitoring, performance history, Slack alerts, and white-label agency reports for WordPress.",
          brand: { "@type": "Organization", name: "A. Smith Media" },
          offers: [
            {
              "@type": "Offer",
              name: "Single Site",
              price: "49.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://asmith.media/sitevitals/health-monitor",
            },
            {
              "@type": "Offer",
              name: "Unlimited Sites",
              price: "149.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://asmith.media/sitevitals/health-monitor",
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
            { "@type": "ListItem", position: 3, name: "Health Monitor Pro", item: "https://asmith.media/sitevitals/health-monitor" },
          ],
        }}
      />

      {/* Hero */}
      <Section className="pt-32 pb-16 text-center">
        <Badge>SiteVitals Health Monitor</Badge>
        <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
          Upgrade to <span className="text-primary">Pro</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Auto-rollback, real-time monitoring, performance history, Slack
          alerts, and white-label agency reports.
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
          title="Keep every plugin in check"
          description="Go beyond basic health checks with advanced monitoring, automated recovery, and professional reporting."
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
            <Link href="/api/sitevitals/create-session?plan=single">
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
            <Link href="/api/sitevitals/create-session?plan=unlimited">
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
