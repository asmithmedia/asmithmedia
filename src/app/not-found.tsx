import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Section className="pt-32 min-h-[70vh] flex items-center">
      <div className="max-w-lg mx-auto text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button variant="glow" size="lg">
              Go Home
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
