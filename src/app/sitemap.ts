import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://miromap.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/features`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/chatgpt-downloader`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/chat-exporter`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/prompt-generator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/chat-title-generator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/chatgpt-to-markdown`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/ai-conversation-counter`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/export-chatgpt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/export-claude`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/export-gemini`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/export-deepseek`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/export-grok`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/export-perplexity`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/docs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
