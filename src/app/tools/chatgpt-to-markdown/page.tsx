"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/tool-page-layout";
import { Copy, Check, FileDown } from "lucide-react";

function convertToMarkdown(raw: string): string {
  if (!raw.trim()) return "";

  const lines = raw.split("\n");
  let md = "";
  let currentRole = "";

  for (const line of lines) {
    const trimmed = line.trim();

    // Detect role headers (common paste patterns)
    if (/^(You|User|Human):?\s*/i.test(trimmed)) {
      currentRole = "user";
      const content = trimmed.replace(/^(You|User|Human):?\s*/i, "").trim();
      md += "\n## You\n\n";
      if (content) md += content + "\n";
      continue;
    }
    if (/^(ChatGPT|Assistant|AI|Claude|Gemini|GPT-4|GPT-3\.5):?\s*/i.test(trimmed)) {
      currentRole = "assistant";
      const content = trimmed.replace(/^(ChatGPT|Assistant|AI|Claude|Gemini|GPT-4|GPT-3\.5):?\s*/i, "").trim();
      md += "\n## AI\n\n";
      if (content) md += content + "\n";
      continue;
    }

    // Pass through content
    if (trimmed === "") {
      md += "\n";
    } else {
      md += trimmed + "\n";
    }
  }

  // If no role headers were detected, wrap as a single block
  if (!currentRole) {
    md = "# Conversation\n\n" + raw.trim() + "\n";
  } else {
    md = "# Conversation\n" + md;
  }

  return md.trim();
}

function MarkdownConverterTool() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const markdown = convertToMarkdown(input);

  function handleCopy() {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleDownload() {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "conversation.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      {/* Input */}
      <div className="rounded-2xl border border-ex-border bg-ex-bg p-6">
        <label className="block text-sm font-semibold text-ex-dark mb-2">
          Paste your ChatGPT conversation
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={"You: How do I set up a Next.js project?\n\nChatGPT: Here's how to get started with Next.js...\n\nPaste your full conversation here."}
          className="w-full rounded-xl border border-ex-border bg-white px-4 py-3 text-sm text-ex-dark placeholder:text-ex-gray/50 focus:border-ex-green focus:outline-none focus:ring-2 focus:ring-green-500/20 min-h-[140px] resize-y font-mono"
        />
      </div>

      {/* Output */}
      {markdown && (
        <div className="mt-6 rounded-2xl border border-ex-border bg-white">
          <div className="flex items-center justify-between border-b border-ex-border px-5 py-3">
            <span className="text-sm font-semibold text-ex-dark">
              Markdown Output
            </span>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-lg border border-ex-border px-3 py-1.5 text-xs font-medium text-ex-gray transition-colors hover:bg-ex-bg"
              >
                {copied ? (
                  <Check size={13} className="text-green-500" />
                ) : (
                  <Copy size={13} />
                )}
                {copied ? "Copied!" : "Copy"}
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 rounded-lg bg-ex-green px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-ex-green-dark"
              >
                <FileDown size={13} />
                Download .md
              </button>
            </div>
          </div>
          <pre className="max-h-[400px] overflow-auto p-5 text-xs leading-relaxed text-ex-dark font-mono whitespace-pre-wrap">
            {markdown}
          </pre>
        </div>
      )}
    </div>
  );
}

export default function ChatGPTToMarkdownPage() {
  return (
    <ToolPageLayout
      title="ChatGPT to Markdown Converter &mdash; Free Tool"
      subtitle="Convert your ChatGPT conversations into clean, formatted Markdown files instantly."
      cta={{
        hook: "Converting one chat at a time? Miromap auto-exports ALL your AI conversations to Markdown, Notion, and Obsidian — across every platform.",
        benefits: [
          "Auto-export to Markdown",
          "Notion & Obsidian integration",
          "Backup to Google Drive",
          "Works across 6+ platforms",
        ],
      }}
      relatedTools={[
        { name: "ChatGPT Conversation Downloader", href: "/tools/chatgpt-downloader" },
        { name: "AI Conversation Counter", href: "/tools/ai-conversation-counter" },
        { name: "Chat Title Generator", href: "/tools/chat-title-generator" },
      ]}
      faqItems={[
        {
          q: "What format does this tool output?",
          a: "Standard Markdown (.md) with headers for each speaker, preserving code blocks and formatting. Compatible with Notion, Obsidian, GitHub, and any Markdown editor.",
        },
        {
          q: "Does it work with Claude or Gemini conversations?",
          a: "Yes. The converter recognizes common role labels (You, User, Human, ChatGPT, Assistant, AI, Claude, Gemini) automatically.",
        },
        {
          q: "Is my conversation data stored anywhere?",
          a: "No. All processing happens in your browser. Nothing is sent to any server.",
        },
      ]}
    >
      <MarkdownConverterTool />
    </ToolPageLayout>
  );
}
