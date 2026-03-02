import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Chat Tools – Export, Generate & Analyze",
  description:
    "Free AI chat tools: ChatGPT conversation downloader, chat history exporter, Markdown converter, prompt template generator, chat title generator, and conversation counter. No signup required.",
  keywords: [
    "free AI tools",
    "ChatGPT tools",
    "AI chat exporter",
    "prompt generator",
    "ChatGPT downloader",
    "AI conversation tools",
  ],
  alternates: { canonical: "https://miromap.app/tools" },
  openGraph: {
    title: "Free AI Chat Tools by Miromap",
    description:
      "6 free tools to manage, export, and optimize your AI conversations. No signup required.",
    url: "https://miromap.app/tools",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
