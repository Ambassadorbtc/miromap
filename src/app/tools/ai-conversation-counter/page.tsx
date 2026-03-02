"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/tool-page-layout";
import { BarChart3 } from "lucide-react";

interface Stats {
  messages: number;
  userMessages: number;
  aiMessages: number;
  words: number;
  characters: number;
  estimatedTokens: number;
  avgWordsPerMessage: number;
}

function analyzeConversation(text: string): Stats | null {
  if (!text.trim()) return null;

  const lines = text.split("\n").filter((l) => l.trim());
  let userMessages = 0;
  let aiMessages = 0;
  let totalMessages = 0;

  const rolePatterns = {
    user: /^(You|User|Human):?\s/i,
    ai: /^(ChatGPT|Assistant|AI|Claude|Gemini|GPT-4|GPT-3\.5|Grok|Perplexity|DeepSeek):?\s/i,
  };

  for (const line of lines) {
    if (rolePatterns.user.test(line.trim())) {
      userMessages++;
      totalMessages++;
    } else if (rolePatterns.ai.test(line.trim())) {
      aiMessages++;
      totalMessages++;
    }
  }

  // If no role patterns found, estimate by line groupings
  if (totalMessages === 0) {
    totalMessages = Math.max(1, Math.floor(lines.length / 3));
    userMessages = Math.ceil(totalMessages / 2);
    aiMessages = totalMessages - userMessages;
  }

  const words = text.trim().split(/\s+/).length;
  const characters = text.length;
  const estimatedTokens = Math.round(words * 1.33);

  return {
    messages: totalMessages,
    userMessages,
    aiMessages,
    words,
    characters,
    estimatedTokens,
    avgWordsPerMessage: totalMessages > 0 ? Math.round(words / totalMessages) : 0,
  };
}

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="rounded-xl border border-ex-border bg-white p-4 text-center">
      <p className="text-2xl font-bold text-ex-dark">{value.toLocaleString()}</p>
      <p className="mt-1 text-sm font-medium text-ex-gray">{label}</p>
      {sub && <p className="mt-0.5 text-xs text-ex-gray/70">{sub}</p>}
    </div>
  );
}

function ConversationCounterTool() {
  const [input, setInput] = useState("");
  const stats = analyzeConversation(input);

  return (
    <div>
      {/* Input */}
      <div className="rounded-2xl border border-ex-border bg-ex-bg p-6">
        <label className="block text-sm font-semibold text-ex-dark mb-2">
          Paste your AI conversation
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={"You: What is machine learning?\n\nChatGPT: Machine learning is a subset of artificial intelligence...\n\nPaste your full conversation to get word counts, token estimates, and more."}
          className="w-full rounded-xl border border-ex-border bg-white px-4 py-3 text-sm text-ex-dark placeholder:text-ex-gray/50 focus:border-ex-green focus:outline-none focus:ring-2 focus:ring-green-500/20 min-h-[140px] resize-y font-mono"
        />
      </div>

      {/* Stats */}
      {stats && (
        <div className="mt-6">
          <div className="mb-4 flex items-center gap-2">
            <BarChart3 size={16} className="text-ex-green" />
            <span className="text-sm font-semibold text-ex-dark">
              Conversation Stats
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard label="Total Messages" value={stats.messages} />
            <StatCard label="Your Messages" value={stats.userMessages} />
            <StatCard label="AI Messages" value={stats.aiMessages} />
            <StatCard
              label="Est. Tokens"
              value={stats.estimatedTokens}
              sub="~$0.00 at GPT-4o rates"
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            <StatCard label="Words" value={stats.words} />
            <StatCard label="Characters" value={stats.characters} />
            <StatCard
              label="Avg Words/Message"
              value={stats.avgWordsPerMessage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function AIConversationCounterPage() {
  return (
    <ToolPageLayout
      title="AI Conversation Counter &mdash; Free Tool"
      subtitle="Count messages, words, tokens, and characters across your AI chat history instantly."
      cta={{
        hook: "Counting one conversation? Miromap tracks ALL your AI usage automatically — messages, tokens, and cost estimates across every platform.",
        benefits: [
          "Automatic usage tracking",
          "Token & cost estimates",
          "Cross-platform analytics",
          "Export usage reports",
        ],
      }}
      relatedTools={[
        { name: "ChatGPT Conversation Downloader", href: "/tools/chatgpt-downloader" },
        { name: "ChatGPT to Markdown Converter", href: "/tools/chatgpt-to-markdown" },
        { name: "Prompt Template Generator", href: "/tools/prompt-generator" },
      ]}
      faqItems={[
        {
          q: "How are tokens estimated?",
          a: "We use an average ratio of ~1.33 tokens per word, which is a widely accepted approximation for English text with GPT models.",
        },
        {
          q: "Does this work with any AI platform?",
          a: "Yes. Paste conversations from ChatGPT, Claude, Gemini, Grok, Perplexity, DeepSeek, or any other AI tool.",
        },
        {
          q: "Can I track usage over time?",
          a: "This tool analyzes one conversation at a time. For automatic tracking across all platforms over time, use the Miromap extension.",
        },
      ]}
    >
      <ConversationCounterTool />
    </ToolPageLayout>
  );
}
