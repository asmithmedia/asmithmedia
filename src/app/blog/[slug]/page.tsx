import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { GradientBlob } from "@/components/shared/gradient-blob";

// Placeholder until WordPress integration
const POSTS: Record<
  string,
  {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    content: string;
  }
> = {
  "ai-transforming-small-business": {
    title: "How AI Is Transforming Small Business Operations in 2026",
    excerpt:
      "Discover the practical AI tools and strategies that small businesses are using to compete with enterprise companies.",
    date: "2026-03-28",
    readTime: "5 min read",
    category: "AI Consulting",
    content: `
      <p>Artificial intelligence is no longer the exclusive domain of Fortune 500 companies. In 2026, small businesses across every industry are leveraging AI to streamline operations, reduce costs, and deliver better customer experiences.</p>

      <h2>The Democratization of AI</h2>
      <p>With the rise of accessible AI platforms and APIs, even a one-person operation can now deploy sophisticated machine learning models. From automated customer support to predictive inventory management, the barriers to entry have never been lower.</p>

      <h2>Practical Applications</h2>
      <p>Here are the top ways small businesses are putting AI to work today:</p>
      <ul>
        <li><strong>Customer Service:</strong> AI chatbots handle routine inquiries 24/7, freeing up human agents for complex issues.</li>
        <li><strong>Marketing:</strong> AI-powered content creation and ad optimization deliver better ROI with less manual effort.</li>
        <li><strong>Operations:</strong> Predictive analytics help businesses anticipate demand, optimize pricing, and reduce waste.</li>
        <li><strong>Finance:</strong> Automated bookkeeping and fraud detection keep businesses secure and compliant.</li>
      </ul>

      <h2>Getting Started</h2>
      <p>The key is to start small. Identify your biggest operational bottleneck and explore AI solutions specifically for that problem. Many AI tools offer free tiers or trials, so you can validate the ROI before committing.</p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <Section className="pt-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-6">
          This post will be available once WordPress is connected.
        </p>
        <Link href="/blog">
          <Button variant="secondary">
            <ArrowLeft size={16} />
            Back to Blog
          </Button>
        </Link>
      </Section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <GradientBlob className="w-[500px] h-[500px] -top-20 -right-20" variant="purple" />
        <div className="relative max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            All Posts
          </Link>

          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section className="pt-8">
        <div className="max-w-3xl mx-auto">
          <article
            className="prose prose-invert prose-sm max-w-none
              [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4
              [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4
              [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:ml-4 [&_ul]:list-disc
              [&_li]:text-muted-foreground [&_li]:text-sm
              [&_strong]:text-foreground [&_strong]:font-semibold
              [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share / Back */}
          <div className="mt-12 pt-8 border-t border-border/30 flex items-center justify-between">
            <Link href="/blog">
              <Button variant="ghost" size="sm">
                <ArrowLeft size={14} />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
