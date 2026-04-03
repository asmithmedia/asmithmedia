import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Download, Key, Upload, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Purchase Complete - Speed Optimizer Pro",
  robots: { index: false },
};

const steps = [
  {
    icon: Key,
    title: "Check your email",
    description: "for the license key and Pro plugin download link.",
  },
  {
    icon: Download,
    title: "Install the free plugin",
    description: "from WordPress.org if you haven't already.",
  },
  {
    icon: Upload,
    title: "Upload the Pro plugin",
    description: "zip file via Plugins > Add New > Upload in your WordPress admin.",
  },
  {
    icon: Settings,
    title: "Activate your license",
    description: "in Speed Optimizer > Settings > Pro License.",
  },
];

export default function SpeedOptimizerSuccessPage() {
  return (
    <Section className="pt-32 min-h-screen flex items-center">
      <div className="max-w-lg mx-auto text-center">
        <Card className="p-10">
          <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
            <CheckCircle2 size={36} />
          </div>

          <h1 className="text-2xl font-bold mb-3">Thank You!</h1>
          <p className="text-muted-foreground mb-8">
            Your purchase of SiteVitals Speed Optimizer Pro is complete. Check
            your email for your license key and download link.
          </p>

          <div className="text-left bg-muted/30 rounded-xl p-6 mb-8 space-y-5">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Next Steps
            </h2>
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-3">
                <div className="h-7 w-7 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-xs font-bold">
                  {i + 1}
                </div>
                <p className="text-sm text-muted-foreground pt-0.5">
                  <strong className="text-foreground">{step.title}</strong>{" "}
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Link href="https://wordpress.org/plugins/sitevitals-speed-optimizer/">
              <Button variant="glow" className="w-full">
                Get Free Plugin on WordPress.org
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/sitevitals/speed-optimizer">
              <Button variant="secondary" className="w-full">
                Back to Speed Optimizer
              </Button>
            </Link>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Need help? Contact{" "}
            <a
              href="mailto:sarah@asmith.media"
              className="text-primary hover:underline"
            >
              sarah@asmith.media
            </a>
          </p>
        </Card>
      </div>
    </Section>
  );
}
