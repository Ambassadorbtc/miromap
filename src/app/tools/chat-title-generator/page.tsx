"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/tool-page-layout";
import { Copy, Check, RefreshCw } from "lucide-react";

const STYLES = ["Descriptive", "Concise", "Technical", "Creative"] as const;

function generateTitles(text: string, style: string): string[] {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  // Extract key themes from text
  const keywords = words
    .filter((w) => w.length > 4)
    .map((w) => w.replace(/[^a-zA-Z]/g, ""))
    .filter(Boolean)
    .slice(0, 6);

  const topic = keywords.slice(0, 3).join(" ") || text.slice(0, 30);

  const templates: Record<string, ((t: string) => string)[]> = {
    Descriptive: [
      (t) => `Discussion About ${capitalize(t)} and Best Practices`,
      (t) => `Exploring ${capitalize(t)}: Questions and Answers`,
      (t) => `In-Depth Conversation on ${capitalize(t)}`,
      (t) => `Understanding ${capitalize(t)}: A Comprehensive Chat`,
      (t) => `${capitalize(t)} — Detailed Analysis and Insights`,
    ],
    Concise: [
      (t) => `${capitalize(t)} Chat`,
      (t) => `${capitalize(t)} Q&A`,
      (t) => `${capitalize(t)} Help`,
      (t) => `Ask: ${capitalize(t)}`,
      (t) => `${capitalize(t)} Session`,
    ],
    Technical: [
      (t) => `[Debug] ${capitalize(t)} Implementation`,
      (t) => `${capitalize(t)} — Architecture & Design`,
      (t) => `Technical Deep-Dive: ${capitalize(t)}`,
      (t) => `${capitalize(t)} Stack Analysis`,
      (t) => `${capitalize(t)} Performance Review`,
    ],
    Creative: [
      (t) => `The ${capitalize(t)} Journey`,
      (t) => `Unlocking ${capitalize(t)}: A Dialogue`,
      (t) => `${capitalize(t)} — Down the Rabbit Hole`,
      (t) => `Adventures in ${capitalize(t)}`,
      (t) => `The Art of ${capitalize(t)}`,
    ],
  };

  const fns = templates[style] || templates.Descriptive;
  return fns.map((fn) => fn(topic));
}

function capitalize(s: string): string {
  return s
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function TitleGeneratorTool() {
  const [input, setInput] = useState("");
  const [style, setStyle] = useState<string>("Descriptive");
  const [titles, setTitles] = useState<string[]>([]);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  function handleGenerate() {
    const text = input.trim() || "React microservices deployment debugging";
    setTitles(generateTitles(text, style));
  }

  function handleCopy(title: string, idx: number) {
    navigator.clipboard.writeText(title);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  }

  return (
    <div>
      {/* Input */}
      <div className="rounded-2xl border border-ex-border bg-ex-bg p-6">
        <label className="block text-sm font-semibold text-ex-dark mb-2">
          Paste your conversation text or describe the topic
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste a snippet of your AI conversation or describe what it's about..."
          className="w-full rounded-xl border border-ex-border bg-white px-4 py-3 text-sm text-ex-dark placeholder:text-ex-gray/50 focus:border-ex-green focus:outline-none focus:ring-2 focus:ring-green-500/20 min-h-[100px] resize-y"
        />

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-ex-gray">Style:</span>
          {STYLES.map((s) => (
            <button
              key={s}
              onClick={() => setStyle(s)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                style === s
                  ? "bg-ex-green text-white shadow-sm"
                  : "bg-white border border-ex-border text-ex-gray hover:border-green-300"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <button
          onClick={handleGenerate}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-ex-green px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-ex-green-dark"
        >
          <RefreshCw size={14} />
          Generate Titles
        </button>
      </div>

      {/* Results */}
      {titles.length > 0 && (
        <div className="mt-6 space-y-3">
          {titles.map((title, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border border-ex-border bg-white px-5 py-3.5 transition-colors hover:border-green-500/20"
            >
              <span className="text-sm font-medium text-ex-dark">
                {title}
              </span>
              <button
                onClick={() => handleCopy(title, i)}
                className="ml-4 shrink-0 inline-flex items-center gap-1 rounded-lg border border-ex-border px-2.5 py-1 text-xs font-medium text-ex-gray transition-colors hover:bg-ex-bg"
              >
                {copiedIdx === i ? (
                  <Check size={12} className="text-green-500" />
                ) : (
                  <Copy size={12} />
                )}
                {copiedIdx === i ? "Copied" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ChatTitleGeneratorPage() {
  return (
    <ToolPageLayout
      title="Chat Title Generator &mdash; Free Tool"
      subtitle="Generate descriptive, searchable titles for your AI conversations instantly."
      cta={{
        hook: "Naming chats one at a time? Miromap auto-titles ALL your conversations across ChatGPT, Claude, Gemini, and more.",
        benefits: [
          "Auto-title every chat",
          "Searchable conversation library",
          "Smart folder organization",
          "Works across 6+ AI platforms",
        ],
      }}
      relatedTools={[
        { name: "Prompt Template Generator", href: "/tools/prompt-generator" },
        { name: "ChatGPT Downloader", href: "/tools/chatgpt-downloader" },
        { name: "ChatGPT to Markdown Converter", href: "/tools/chatgpt-to-markdown" },
      ]}
      faqItems={[
        {
          q: "How does the title generator work?",
          a: "It analyzes the key topics and themes in your conversation text, then generates titles in your chosen style (descriptive, concise, technical, or creative).",
        },
        {
          q: "Can I use this for Claude or Gemini chats?",
          a: "Absolutely. Paste text from any AI conversation — the tool works with content from any platform.",
        },
        {
          q: "How do I auto-title all my chats?",
          a: "The Miromap extension automatically generates and applies titles to every conversation across all your AI platforms.",
        },
      ]}
    >
      <TitleGeneratorTool />
    </ToolPageLayout>
  );
}
