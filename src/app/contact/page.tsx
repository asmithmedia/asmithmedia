"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { SocialLinks } from "@/components/shared/social-links";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <GradientBlob className="w-[500px] h-[500px] -top-20 -right-20" variant="purple" />
        <div className="relative max-w-7xl mx-auto">
          <Badge className="mb-4">Contact</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a project in mind? We&apos;d love to hear about it. Reach out
            and let&apos;s start a conversation.
          </p>
        </div>
      </section>

      {/* Content */}
      <Section className="pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <Card className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. We&apos;ll get back to you within
                      24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">
                          Name
                        </label>
                        <Input
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">
                          Phone
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">
                          Service Interest
                        </label>
                        <select
                          name="service"
                          className="flex h-10 w-full rounded-lg border border-border bg-muted px-4 py-2 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                        >
                          <option value="">Select a service</option>
                          {SERVICES.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>

                    {/* Honeypot */}
                    <input
                      type="text"
                      name="website"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {error && (
                      <p className="text-sm text-red-400 bg-red-400/10 rounded-lg px-4 py-2">
                        {error}
                      </p>
                    )}

                    <Button
                      type="submit"
                      variant="glow"
                      size="lg"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <Send size={16} />
                    </Button>
                  </form>
                )}
              </Card>
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal delay={0.1}>
              <Card>
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${SITE_CONFIG.phone.replace(/[^\d+]/g, "")}`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin
                      size={16}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        Address
                      </p>
                      <p className="text-sm">{SITE_CONFIG.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        Hours
                      </p>
                      <p className="text-sm">{SITE_CONFIG.hours}</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <SocialLinks />
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
                <h3 className="font-semibold mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Not sure where to start? Schedule a free 30-minute
                  consultation and we&apos;ll help you identify the right path
                  forward.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>
    </>
  );
}
