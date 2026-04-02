import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/layout/section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GradientBlob } from "@/components/shared/gradient-blob";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on digital marketing, AI, branding, and technology from A. Smith Media.",
};

// Placeholder posts until WordPress integration
const POSTS = [
  {
    slug: "ai-transforming-small-business",
    title: "How AI Is Transforming Small Business Operations in 2026",
    excerpt:
      "Discover the practical AI tools and strategies that small businesses are using to compete with enterprise companies.",
    date: "2026-03-28",
    readTime: "5 min read",
    category: "AI Consulting",
  },
  {
    slug: "digital-branding-essentials",
    title: "The Essential Guide to Digital Branding in a Crowded Market",
    excerpt:
      "Stand out from the competition with these proven branding strategies that resonate with modern consumers.",
    date: "2026-03-21",
    readTime: "7 min read",
    category: "Branding",
  },
  {
    slug: "google-business-optimization",
    title: "Maximizing Your Google Business Profile for Local SEO",
    excerpt:
      "Step-by-step guide to optimizing your Google Business Profile and dominating local search results.",
    date: "2026-03-14",
    readTime: "6 min read",
    category: "Google Business",
  },
  {
    slug: "chatbot-roi-guide",
    title: "The ROI of AI Chatbots: What the Numbers Actually Say",
    excerpt:
      "We break down the real costs and returns of implementing AI chatbots across different industries.",
    date: "2026-03-07",
    readTime: "8 min read",
    category: "AI Chat Engine",
  },
  {
    slug: "edtech-trends-2026",
    title: "EdTech Trends Shaping the Classroom of Tomorrow",
    excerpt:
      "From adaptive learning to AI tutors, explore the technologies redefining education in 2026.",
    date: "2026-02-28",
    readTime: "6 min read",
    category: "AI Education",
  },
  {
    slug: "self-publishing-guide",
    title: "Self-Publishing in 2026: A Complete Playbook",
    excerpt:
      "Everything you need to know about going from manuscript to market, including AI-assisted editing and marketing.",
    date: "2026-02-21",
    readTime: "10 min read",
    category: "Book Publishing",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <GradientBlob className="w-[500px] h-[500px] -top-20 -right-20" variant="purple" />
        <div className="relative max-w-7xl mx-auto">
          <Badge className="mb-4">Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ideas
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Thoughts on AI, digital strategy, branding, and the future of
            business from the A. Smith Media team.
          </p>
        </div>
      </section>

      {/* Posts */}
      <Section className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.05}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full group cursor-pointer hover:bg-card/80 flex flex-col">
                  {/* Placeholder image area */}
                  <div className="h-40 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 mb-4 flex items-center justify-center">
                    <span className="font-mono text-xs text-muted-foreground">
                      {post.category}
                    </span>
                  </div>

                  <Badge className="mb-3 w-fit">{post.category}</Badge>

                  <CardTitle className="text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>

                  <CardDescription className="line-clamp-2 flex-1 mb-4">
                    {post.excerpt}
                  </CardDescription>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/30">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
