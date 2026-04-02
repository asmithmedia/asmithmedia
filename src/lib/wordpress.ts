/**
 * WordPress GraphQL Data Layer
 *
 * This module will be the primary data source once WordPress is configured
 * with WPGraphQL. For now, pages use local placeholder data from constants.ts.
 *
 * Setup steps:
 * 1. Install WPGraphQL plugin on WordPress
 * 2. Install ACF Pro + WPGraphQL for ACF
 * 3. Set WORDPRESS_GRAPHQL_URL in .env.local
 * 4. Replace placeholder data in pages with these functions
 */

const GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL || "";

interface GraphQLResponse<T> {
  data: T;
  errors?: Array<{ message: string }>;
}

async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  if (!GRAPHQL_URL) {
    throw new Error(
      "WORDPRESS_GRAPHQL_URL is not set. Configure it in .env.local."
    );
  }

  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });

  const json: GraphQLResponse<T> = await res.json();

  if (json.errors) {
    throw new Error(json.errors.map((e) => e.message).join(", "));
  }

  return json.data;
}

// -- Blog Posts --

export interface WPPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage?: { node: { sourceUrl: string; altText: string } };
  categories: { nodes: Array<{ name: string; slug: string }> };
  seo?: {
    title: string;
    metaDesc: string;
    opengraphImage?: { sourceUrl: string };
  };
}

export async function getAllPosts(first = 12): Promise<WPPost[]> {
  const data = await fetchGraphQL<{ posts: { nodes: WPPost[] } }>(
    `query Posts($first: Int!) {
      posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          slug title excerpt content date
          featuredImage { node { sourceUrl altText } }
          categories { nodes { name slug } }
          seo { title metaDesc opengraphImage { sourceUrl } }
        }
      }
    }`,
    { first }
  );
  return data.posts.nodes;
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const data = await fetchGraphQL<{ post: WPPost | null }>(
    `query Post($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        slug title excerpt content date
        featuredImage { node { sourceUrl altText } }
        categories { nodes { name slug } }
        seo { title metaDesc opengraphImage { sourceUrl } }
      }
    }`,
    { slug }
  );
  return data.post;
}

// -- Services (Custom Post Type) --

export interface WPService {
  slug: string;
  title: string;
  content: string;
  serviceFields: {
    tagline: string;
    icon: string;
    features: string[];
    pricingTiers: Array<{
      name: string;
      price: string;
      period: string;
      features: string[];
      stripePriceId: string;
      ctaLabel: string;
    }>;
    displayOrder: number;
  };
}

export async function getAllServices(): Promise<WPService[]> {
  const data = await fetchGraphQL<{ services: { nodes: WPService[] } }>(
    `query Services {
      services(first: 100) {
        nodes {
          slug title content
          serviceFields {
            tagline icon features pricingTiers {
              name price period features stripePriceId ctaLabel
            }
            displayOrder
          }
        }
      }
    }`
  );
  return data.services.nodes.sort(
    (a, b) => a.serviceFields.displayOrder - b.serviceFields.displayOrder
  );
}

// -- Testimonials --

export interface WPTestimonial {
  title: string;
  testimonialFields: {
    quote: string;
    company: string;
    rating: number;
  };
}

export async function getTestimonials(): Promise<WPTestimonial[]> {
  const data = await fetchGraphQL<{
    testimonials: { nodes: WPTestimonial[] };
  }>(
    `query Testimonials {
      testimonials(first: 20) {
        nodes {
          title
          testimonialFields { quote company rating }
        }
      }
    }`
  );
  return data.testimonials.nodes;
}
