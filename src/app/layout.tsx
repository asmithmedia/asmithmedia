import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/shared/json-ld";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asmith.media"),
  title: {
    default: "A. Smith Media | Digital Consulting & AI Solutions",
    template: "%s | A. Smith Media",
  },
  description:
    "Diversified investment & media company specializing in digital consulting, AI business solutions, branding, and media services. Based in Frisco, Texas.",
  keywords: [
    "digital consulting",
    "AI consulting",
    "branding",
    "Frisco Texas",
    "digital marketing",
    "AI solutions",
    "WordPress plugins",
  ],
  authors: [{ name: "A. Smith Media" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "A. Smith Media",
    title: "A. Smith Media | Digital Consulting & AI Solutions",
    description:
      "Diversified investment & media company specializing in digital consulting, AI business solutions, branding, and media services.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "A. Smith Media — Digital Consulting & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A. Smith Media",
    description: "Digital Consulting & AI Solutions",
    images: ["/og-default.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${SITE_CONFIG.url}/#organization`,
                name: SITE_CONFIG.name,
                url: SITE_CONFIG.url,
                logo: `${SITE_CONFIG.url}/og-default.png`,
                description: SITE_CONFIG.description,
                telephone: SITE_CONFIG.phone,
                email: SITE_CONFIG.email,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "3245 Main St Ste #235-110",
                  addressLocality: "Frisco",
                  addressRegion: "TX",
                  postalCode: "75034",
                  addressCountry: "US",
                },
                sameAs: [
                  SOCIAL_LINKS.facebook,
                  SOCIAL_LINKS.twitter,
                  SOCIAL_LINKS.linkedin,
                ],
              },
              {
                "@type": "WebSite",
                "@id": `${SITE_CONFIG.url}/#website`,
                url: SITE_CONFIG.url,
                name: SITE_CONFIG.name,
                publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
              },
              {
                "@type": "LocalBusiness",
                "@id": `${SITE_CONFIG.url}/#localbusiness`,
                name: SITE_CONFIG.name,
                url: SITE_CONFIG.url,
                telephone: SITE_CONFIG.phone,
                email: SITE_CONFIG.email,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "3245 Main St Ste #235-110",
                  addressLocality: "Frisco",
                  addressRegion: "TX",
                  postalCode: "75034",
                  addressCountry: "US",
                },
                openingHours: "Mo-Fr 07:00-19:00",
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 33.1507,
                  longitude: -96.8236,
                },
              },
            ],
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
