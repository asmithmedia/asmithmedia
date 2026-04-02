import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Payment Successful",
  robots: { index: false },
};

export default function CheckoutSuccessPage() {
  return (
    <Section className="pt-32 min-h-screen flex items-center">
      <div className="max-w-md mx-auto text-center">
        <Card className="p-10">
          <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
            <CheckCircle2 size={36} />
          </div>

          <h1 className="text-2xl font-bold mb-3">Payment Successful!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase. We&apos;ll be in touch within 24 hours
            to get started on your project. A confirmation email has been sent.
          </p>

          <div className="flex flex-col gap-3">
            <Link href="/">
              <Button variant="glow" className="w-full">
                Back to Home
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" className="w-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </Section>
  );
}
