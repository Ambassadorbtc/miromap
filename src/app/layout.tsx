import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://exportai.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#22C55E",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ExportAI — Save AI Chats as PDF, Markdown & More | 6 Platforms, 1 Extension",
    template: "%s | ExportAI",
  },
  description:
    "Export conversations from ChatGPT, Claude, Gemini, DeepSeek, Grok & Perplexity. PDF, Markdown, TXT, JSON, CSV. Free Chrome extension. One click, six platforms.",
  keywords: [
    "export AI conversations",
    "save ChatGPT as PDF",
    "Claude chat exporter",
    "AI chat to markdown",
    "export Gemini conversations",
    "Chrome extension AI export",
    "save AI chats",
    "ChatGPT PDF export",
    "Claude to markdown",
    "multi-platform AI exporter",
  ],
  authors: [{ name: "ExportAI", url: BASE_URL }],
  creator: "ExportAI",
  publisher: "ExportAI",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "ExportAI",
    title: "ExportAI — Save AI Chats as PDF, Markdown & More",
    description: "Export conversations from ChatGPT, Claude, Gemini, DeepSeek, Grok & Perplexity. One extension, six platforms.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ExportAI — One extension, six AI platforms" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExportAI — Save AI Chats as PDF, Markdown & More",
    description: "Export conversations from 6 AI platforms. PDF, Markdown, TXT, JSON, CSV. Free Chrome extension.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: BASE_URL },
  category: "Technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ExportAI",
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome, Edge",
    description: "Export AI conversations from ChatGPT, Claude, Gemini, DeepSeek, Grok & Perplexity as PDF, Markdown, TXT, JSON, or CSV.",
    url: BASE_URL,
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free", description: "Unlimited MD, TXT, JSON, CSV exports. 3 PDF exports per day." },
      { "@type": "Offer", price: "4.99", priceCurrency: "USD", name: "Pro Monthly", description: "Unlimited PDF exports, batch export, custom templates." },
    ],
    featureList: [
      "Export from ChatGPT, Claude, Gemini, DeepSeek, Grok, Perplexity",
      "PDF, Markdown, TXT, JSON, CSV formats",
      "Select individual messages or full conversations",
      "Preserves code blocks, tables, and formatting",
      "100% client-side, no data leaves your browser",
      "One extension replaces 3+ competitors",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} antialiased font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
