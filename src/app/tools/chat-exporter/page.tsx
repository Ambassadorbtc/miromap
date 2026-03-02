"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/tool-page-layout";
import { Copy, Check } from "lucide-react";

type Platform = "chatgpt" | "claude" | "gemini";

const PLATFORMS: { id: Platform; name: string }[] = [
  { id: "chatgpt", name: "ChatGPT" },
  { id: "claude", name: "Claude" },
  { id: "gemini", name: "Gemini" },
];

const GUIDES: Record<Platform, { steps: string[]; format: string; sample: string }> = {
  chatgpt: {
    steps: [
      "Go to chatgpt.com and log in",
      "Click your profile icon → Settings → Data controls",
      "Click \"Export data\" → \"Confirm export\"",
      "Check your email for a download link",
      "Download the .zip and extract conversations.json",
    ],
    format: "ZIP archive containing conversations.json",
    sample: JSON.stringify(
      {
        title: "My Conversation",
        create_time: 1707753600,
        mapping: {
          "msg-001": {
            message: {
              author: { role: "user" },
              content: { parts: ["How do I learn React?"] },
            },
          },
          "msg-002": {
            message: {
              author: { role: "assistant" },
              content: { parts: ["Here is a roadmap for learning React..."] },
            },
          },
        },
      },
      null,
      2
    ),
  },
  claude: {
    steps: [
      "Go to claude.ai and log in",
      "Open the conversation you want to export",
      "Select all text (Ctrl/Cmd + A) and copy",
      "Paste into the text area below for formatting",
      "Or use browser DevTools → Network tab for JSON",
    ],
    format: "Plain text (manual) or JSON via DevTools",
    sample: [
      "Human: How do I learn React?",
      "",
      "Assistant: Here is a roadmap for learning React:",
      "1. Learn JavaScript fundamentals",
      "2. Understand JSX and components",
      "3. State management with hooks",
      "4. Build real projects",
    ].join("\n"),
  },
  gemini: {
    steps: [
      "Go to gemini.google.com and sign in",
      "Open Google Takeout (takeout.google.com)",
      "Deselect all, then select \"Gemini Apps\"",
      "Click \"Next step\" → Choose export format",
      "Click \"Create export\" and wait for the download link",
    ],
    format: "ZIP archive via Google Takeout",
    sample: JSON.stringify(
      {
        conversation: [
          { role: "user", text: "How do I learn React?" },
          {
            role: "model",
            text: "Here is a roadmap for learning React...",
          },
        ],
        timestamp: "2026-02-12T10:00:00Z",
      },
      null,
      2
    ),
  },
};

function ExporterTool() {
  const [platform, setPlatform] = useState<Platform>("chatgpt");
  const [copied, setCopied] = useState(false);

  const guide = GUIDES[platform];

  function handleCopySample() {
    navigator.clipboard.writeText(guide.sample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      {/* Platform selector */}
      <div className="rounded-2xl border border-ex-border bg-ex-bg p-6">
        <label className="block text-sm font-semibold text-ex-dark mb-3">
          Select your AI platform
        </label>
        <div className="flex flex-wrap gap-2">
          {PLATFORMS.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setPlatform(p.id);
                setCopied(false);
              }}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                platform === p.id
                  ? "bg-ex-green text-white shadow-sm"
                  : "bg-white border border-ex-border text-ex-gray hover:border-green-300"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="mt-6 rounded-2xl border border-ex-border bg-white p-6">
        <h3 className="text-base font-semibold text-ex-dark mb-1">
          How to Export from {PLATFORMS.find((p) => p.id === platform)?.name}
        </h3>
        <p className="text-xs text-ex-gray mb-4">Format: {guide.format}</p>
        <ol className="space-y-3">
          {guide.steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ex-green/10 text-xs font-bold text-ex-green">
                {i + 1}
              </span>
              <span className="text-sm text-ex-dark leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Sample data */}
      <div className="mt-6 rounded-2xl border border-ex-border bg-white">
        <div className="flex items-center justify-between border-b border-ex-border px-5 py-3">
          <span className="text-sm font-semibold text-ex-dark">Sample Export Data</span>
          <button
            onClick={handleCopySample}
            className="inline-flex items-center gap-1.5 rounded-lg bg-ex-green px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-ex-green-dark"
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? "Copied!" : "Copy Sample"}
          </button>
        </div>
        <pre className="max-h-[300px] overflow-auto p-5 text-xs leading-relaxed text-ex-dark font-mono whitespace-pre-wrap">
          {guide.sample}
        </pre>
      </div>
    </div>
  );
}

export default function ChatExporterPage() {
  return (
    <ToolPageLayout
      title="AI Chat History Exporter &mdash; Free Tool"
      subtitle="Step-by-step guides to export your conversations from ChatGPT, Claude, and Gemini."
      cta={{
        hook: "Exporting manually from each platform? Miromap auto-backs up ALL your AI conversations across every platform — zero effort.",
        benefits: [
          "Auto-backup to Google Drive",
          "One-click export all chats",
          "Works across 6+ platforms",
          "Never lose a conversation",
        ],
      }}
      relatedTools={[
        { name: "ChatGPT Conversation Downloader", href: "/tools/chatgpt-downloader" },
        { name: "ChatGPT to Markdown Converter", href: "/tools/chatgpt-to-markdown" },
        { name: "AI Conversation Counter", href: "/tools/ai-conversation-counter" },
      ]}
      faqItems={[
        {
          q: "Can I export all my ChatGPT conversations at once?",
          a: "Yes. ChatGPT's built-in export gives you ALL conversations in a single ZIP file. Follow the steps above.",
        },
        {
          q: "Does Claude have an official export feature?",
          a: "Not yet. Currently the best method is manual copy-paste or using browser DevTools. Miromap automates this.",
        },
        {
          q: "How often should I back up my AI chats?",
          a: "We recommend weekly exports for active users. Or use Miromap for automatic, real-time backup across all platforms.",
        },
        {
          q: "Is my exported data private?",
          a: "This tool runs entirely in your browser. No data is sent to any server. Your conversations stay on your device.",
        },
      ]}
    >
      <ExporterTool />
    </ToolPageLayout>
  );
}
