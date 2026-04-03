import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { JsonLd } from "@/components/shared/json-ld";
import { getAllPosts, getPostBySlug } from "@/lib/wordpress";

function estimateReadTime(html: string): string {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 250));
  return `${minutes} min read`;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  const description = post.seo?.metaDesc || post.excerpt?.replace(/<[^>]*>/g, "").trim();
  return {
    title: post.seo?.title || post.title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.seo?.title || post.title,
      description,
      publishedTime: post.date,
      authors: ["A. Smith Media"],
      ...(post.seo?.opengraphImage || post.featuredImage?.node
        ? {
            images: [
              {
                url:
                  post.seo?.opengraphImage?.sourceUrl ||
                  post.featuredImage!.node.sourceUrl,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = post.categories?.nodes?.[0]?.name;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt?.replace(/<[^>]*>/g, "").trim(),
          datePublished: post.date,
          author: {
            "@type": "Organization",
            name: "A. Smith Media",
            url: "https://asmith.media",
          },
          publisher: {
            "@type": "Organization",
            name: "A. Smith Media",
            logo: { "@type": "ImageObject", url: "https://asmith.media/og-default.png" },
          },
          mainEntityOfPage: `https://asmith.media/blog/${slug}`,
          ...(post.featuredImage?.node
            ? { image: post.featuredImage.node.sourceUrl }
            : {}),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://asmith.media" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://asmith.media/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: `https://asmith.media/blog/${slug}` },
          ],
        }}
      />

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

          {category && <Badge className="mb-4">{category}</Badge>}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p
            className="text-lg text-muted-foreground mb-6"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />

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
              {estimateReadTime(post.content)}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage?.node && (
        <Section className="pt-0 pb-0">
          <div className="max-w-3xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Section>
      )}

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

          {/* Back */}
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
