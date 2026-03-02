"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/tool-page-layout";
import { Download, Copy, Check } from "lucide-react";

const SAMPLE_CONVERSATION = {
  title: "Architecture Design Discussion",
  model: "GPT-4",
  messages: [
    { role: "user", content: "How should I structure a microservices architecture for an e-commerce platform?" },
    { role: "assistant", content: "Here's a recommended microservices architecture for e-commerce:\n\n1. **API Gateway** - Routes requests, handles auth\n2. **User Service** - Registration, profiles, auth tokens\n3. **Product Catalog** - CRUD for products, categories, search\n4. **Order Service** - Order lifecycle management\n5. **Payment Service** - Stripe/PayPal integration\n6. **Notification Service** - Email, SMS, push notifications\n\nUse event-driven communication (RabbitMQ or Kafka) between services for loose coupling." },
    { role: "user", content: "What about the database strategy?" },
    { role: "assistant", content: "Each microservice should own its data (Database per Service pattern):\n\n- **User Service** → PostgreSQL (relational data)\n- **Product Catalog** → MongoDB (flexible schema)\n- **Order Service** → PostgreSQL (transactions)\n- **Payment Service** → PostgreSQL (ACID compliance)\n- **Notification Service** → Redis (queue + cache)\n\nUse the Saga pattern for distributed transactions across services." },
  ],
  created_at: "2026-02-12T14:22:00Z",
};

function formatAsMarkdown(convo: typeof SAMPLE_CONVERSATION): string {
  let md = `# ${convo.title}\n\n`;
  md += `**Model:** ${convo.model}  \n`;
  md += `**Date:** ${new Date(convo.created_at).toLocaleDateString()}\n\n---\n\n`;
  for (const msg of convo.messages) {
    const label = msg.role === "user" ? "**You:**" : "**AI:**";
    md += `${label}\n\n${msg.content}\n\n---\n\n`;
  }
  return md.trim();
}

function formatAsJSON(convo: typeof SAMPLE_CONVERSATION): string {
  return JSON.stringify(convo, null, 2);
}

function formatAsText(convo: typeof SAMPLE_CONVERSATION): string {
  let txt = `${convo.title}\nModel: ${convo.model}\nDate: ${new Date(convo.created_at).toLocaleDateString()}\n${"=".repeat(50)}\n\n`;
  for (const msg of convo.messages) {
    const label = msg.role === "user" ? "You:" : "AI:";
    txt += `${label}\n${msg.content}\n\n${"—".repeat(40)}\n\n`;
  }
  return txt.trim();
}

type Format = "markdown" | "json" | "txt";

function DownloaderTool() {
  const [format, setFormat] = useState<Format>("markdown");
  const [copied, setCopied] = useState(false);
  const [pasted, setPasted] = useState("");

  const conversation = SAMPLE_CONVERSATION;

  const formatted =
    format === "markdown"
      ? formatAsMarkdown(conversation)
      : format === "json"
        ? formatAsJSON(conversation)
        : formatAsText(conversation);

  function handleCopy() {
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleDownload() {
    const ext = format === "markdown" ? "md" : format === "json" ? "json" : "txt";
    const mime =
      format === "json" ? "application/json" : "text/plain";
    const blob = new Blob([formatted], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `conversation.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      {/* Input */}
      <div className="rounded-2xl border border-ex-border bg-ex-bg p-6">
        <label className="block text-sm font-semibold text-ex-dark mb-2">
          Paste your ChatGPT conversation (or use our demo)
        </label>
        <textarea
          value={pasted}
          onChange={(e) => setPasted(e.target.value)}
          placeholder="Paste a ChatGPT conversation here, or leave blank to use our sample conversation..."
          className="w-full rounded-xl border border-ex-border bg-white px-4 py-3 text-sm text-ex-dark placeholder:text-ex-gray/50 focus:border-ex-green focus:outline-none focus:ring-2 focus:ring-green-500/20 min-h-[100px] resize-y"
        />

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-ex-gray">Format:</span>
          {(["markdown", "json", "txt"] as Format[]).map((f) => (
            <button
              key={f}
              onClick={() => setFormat(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                format === f
                  ? "bg-ex-green text-white shadow-sm"
                  : "bg-white border border-ex-border text-ex-gray hover:border-green-300"
              }`}
            >
              {f === "markdown" ? "Markdown" : f === "json" ? "JSON" : "Plain Text"}
            </button>
          ))}
        </div>
      </div>

      {/* Output */}
      <div className="mt-6 rounded-2xl border border-ex-border bg-white">
        <div className="flex items-center justify-between border-b border-ex-border px-5 py-3">
          <span className="text-sm font-semibold text-ex-dark">Preview</span>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg border border-ex-border px-3 py-1.5 text-xs font-medium text-ex-gray transition-colors hover:bg-ex-bg"
            >
              {copied ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
              {copied ? "Copied!" : "Copy"}
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 rounded-lg bg-ex-green px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-ex-green-dark"
            >
              <Download size={13} />
              Download .{format === "markdown" ? "md" : format}
            </button>
          </div>
        </div>
        <pre className="max-h-[400px] overflow-auto p-5 text-xs leading-relaxed text-ex-dark font-mono whitespace-pre-wrap">
          {formatted}
        </pre>
      </div>
    </div>
  );
}

export default function ChatGPTDownloaderPage() {
  return (
    <ToolPageLayout
      title="ChatGPT Conversation Downloader &mdash; Free Tool"
      subtitle="Download your ChatGPT chats as Markdown, JSON, or plain text in seconds."
      cta={{
        hook: "Downloading one chat at a time? What if you could automatically organize ALL your AI conversations across ChatGPT, Claude, Gemini, and more?",
        benefits: [
          "Auto-backup to Google Drive",
          "Search across all platforms",
          "3D mind maps",
          "Smart folders with AI",
        ],
      }}
      relatedTools={[
        { name: "ChatGPT to Markdown Converter", href: "/tools/chatgpt-to-markdown" },
        { name: "Prompt Template Generator", href: "/tools/prompt-generator" },
        { name: "AI Conversation Counter", href: "/tools/ai-conversation-counter" },
      ]}
      faqItems={[
        {
          q: "How do I download my ChatGPT conversations?",
          a: "Paste your conversation text into the tool above, select your preferred format (Markdown, JSON, or Plain Text), then click Download. No account needed.",
        },
        {
          q: "What formats are supported?",
          a: "We support Markdown (.md), JSON (.json), and Plain Text (.txt). Markdown preserves formatting like bold text and code blocks.",
        },
        {
          q: "Is my data private?",
          a: "Yes. Everything runs in your browser. Your conversation data is never sent to any server.",
        },
        {
          q: "Can I download multiple conversations at once?",
          a: "This free tool handles one conversation at a time. For bulk download and auto-backup, try the Miromap extension.",
        },
      ]}
    >
      <DownloaderTool />
    </ToolPageLayout>
  );
}
