"use client";

import Link from "next/link";
import { Download, Sparkles, Hash, BarChart3, ArrowRight } from "lucide-react";
import { CHROME_EXTENSION_URL } from "@/lib/constants";
import { AnimateOnScroll, StaggerChildren, StaggerItem, FadeIn } from "@/components/animate-on-scroll";

const categories = [
    {
      label: "Export",
      icon: Download,
      color: "bg-blue-50 text-blue-600",
      tools: [
        {
          name: "ChatGPT Conversation Downloader",
          description: "Download any ChatGPT conversation as JSON, TXT, or Markdown in seconds.",
          href: "/tools/chatgpt-downloader",
          searches: "8.9K",
        },
        {
          name: "AI Chat History Exporter",
          description: "Step-by-step export guides for ChatGPT, Claude, and Gemini conversations.",
          href: "/tools/chat-exporter",
          searches: "5.4K",
        },
        {
          name: "ChatGPT to Markdown Converter",
          description: "Convert ChatGPT threads into clean, formatted Markdown files.",
          href: "/tools/chatgpt-to-markdown",
          searches: "3.2K",
        },
      ],
    },
  {
    label: "Generate",
    icon: Sparkles,
    color: "bg-purple-50 text-purple-600",
    tools: [
      {
        name: "Prompt Template Generator",
        description: "Generate structured, reusable prompt templates for any AI model.",
        href: "/tools/prompt-generator",
        searches: "12K",
      },
      {
        name: "Chat Title Generator",
        description: "Generate descriptive titles for your AI conversations instantly.",
        href: "/tools/chat-title-generator",
        searches: "6.8K",
      },
    ],
  },
  {
    label: "Analyze",
    icon: BarChart3,
    color: "bg-green-50 text-green-600",
    tools: [
      {
        name: "AI Conversation Counter",
        description: "Count messages, tokens, and words across your AI chat history.",
        href: "/tools/ai-conversation-counter",
        searches: "2.1K",
      },
    ],
  },
];

export default function ToolsPage() {
  return (
      <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 via-white to-white py-20">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <FadeIn>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ex-border bg-white px-4 py-1.5 text-sm shadow-sm">
              <Hash size={14} className="text-ex-green" />
              <span className="font-medium text-ex-gray">6 free tools &mdash; no signup required</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-ex-dark md:text-5xl">
              Free AI Chat <span className="text-ex-green">Tools</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ex-gray leading-relaxed">
              Everything you need to manage, export, and optimize your AI conversations. Free forever.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tools by category */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1000px] px-6">
          {categories.map((cat) => (
            <AnimateOnScroll key={cat.label} animation="fade-up">
              <div className="mb-14 last:mb-0">
              <div className="mb-6 flex items-center gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${cat.color}`}>
                  <cat.icon size={18} />
                </div>
                <h2 className="text-xl font-bold text-ex-dark">{cat.label}</h2>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {cat.tools.map((tool) => (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className="group flex flex-col justify-between rounded-2xl border border-ex-border bg-white p-6 transition-all hover:border-green-300 hover:shadow-lg hover:shadow-green-500/5"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-ex-dark group-hover:text-ex-green transition-colors">
                        {tool.name}
                      </h3>
                      <p className="mt-2 text-sm text-ex-gray leading-relaxed">{tool.description}</p>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="rounded-full bg-ex-bg px-3 py-1 text-xs font-medium text-ex-gray">
                        {tool.searches} monthly searches
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-ex-green opacity-0 transition-opacity group-hover:opacity-100">
                        Try Tool <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ex-border bg-ex-bg py-16">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-ex-dark md:text-3xl">
              Need More Than One Tool?
            </h2>
            <p className="mt-4 text-ex-gray leading-relaxed">
              Miromap automatically organizes <strong>all</strong> your AI conversations across ChatGPT, Claude, Gemini, Grok, Perplexity, and DeepSeek. Search, mind maps, auto-folders, and more.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href={CHROME_EXTENSION_URL}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-ex-green px-7 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-ex-green-dark"
                >
                Add to Chrome &mdash; Free
              </a>
              <Link
                href="/pricing"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-ex-border bg-white px-7 text-sm font-semibold text-ex-dark transition-colors hover:bg-ex-bg"
              >
                See Pricing
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
