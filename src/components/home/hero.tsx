"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TerminalText } from "@/components/shared/terminal-text";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { SERVICES } from "@/lib/constants";

const serviceNames = SERVICES.map((s) => s.title);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background effects */}
      <GradientBlob className="w-[600px] h-[600px] -top-40 -right-40" variant="purple" />
      <GradientBlob className="w-[500px] h-[500px] -bottom-40 -left-40" variant="blue" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-primary/30 bg-primary/5 text-xs font-mono text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Based in Frisco, Texas
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          We Build{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Digital Futures
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Diversified investment & media company with a portfolio from tech to
            construction.
          </p>
          <div className="h-8 flex items-center justify-center">
            <span className="text-muted-foreground mr-2">&gt;</span>
            <TerminalText
              phrases={serviceNames}
              className="text-primary text-sm md:text-base"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <Button variant="glow" size="lg">
              Schedule a Call
              <ArrowRight size={18} />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg">
              Our Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
