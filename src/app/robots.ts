import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/checkout/success",
          "/sitevitals/health-monitor/success",
          "/sitevitals/speed-optimizer/success",
        ],
      },
    ],
    sitemap: "https://asmith.media/sitemap.xml",
  };
}
