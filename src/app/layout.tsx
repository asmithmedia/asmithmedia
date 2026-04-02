import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
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
  ],
  authors: [{ name: "A. Smith Media" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asmith.media",
    siteName: "A. Smith Media",
    title: "A. Smith Media | Digital Consulting & AI Solutions",
    description:
      "Diversified investment & media company specializing in digital consulting, AI business solutions, branding, and media services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "A. Smith Media",
    description: "Digital Consulting & AI Solutions",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
