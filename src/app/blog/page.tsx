import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { getAllPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on digital marketing, AI, branding, and technology from A. Smith Media.",
  alternates: { canonical: "/blog" },
};

function estimateReadTime(html: string): string {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 250));
  return `${minutes} min read`;
}

export default async function BlogPage() {
  const posts = await getAllPosts();

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
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            No posts yet. Check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => {
              const category = post.categories?.nodes?.[0]?.name;
              return (
                <ScrollReveal key={post.slug} delay={i * 0.05}>
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="h-full group cursor-pointer hover:bg-card/80 flex flex-col">
                      {post.featuredImage?.node ? (
                        <div className="h-40 rounded-lg overflow-hidden mb-4 relative">
                          <Image
                            src={post.featuredImage.node.sourceUrl}
                            alt={post.featuredImage.node.altText || post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="h-40 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 mb-4 flex items-center justify-center">
                          <span className="font-mono text-xs text-muted-foreground">
                            {category || "Blog"}
                          </span>
                        </div>
                      )}

                      {category && (
                        <Badge className="mb-3 w-fit">{category}</Badge>
                      )}

                      <CardTitle className="text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>

                      <CardDescription
                        className="line-clamp-2 flex-1 mb-4"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />

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
                          {estimateReadTime(post.content)}
                        </span>
                      </div>
                    </Card>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </Section>
    </>
  );
}
