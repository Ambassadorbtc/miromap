"use client";

import { FileText, Code, Table, Shield, Zap, Globe, Download, CheckCircle, Monitor } from "lucide-react";
import { CHROME_EXTENSION_URL } from "@/lib/constants";
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "@/components/animate-on-scroll";

const platformFeatures = [
  { name: "ChatGPT", color: "#10A37F", desc: "Export from chatgpt.com and chat.openai.com. Full conversation history with code blocks." },
  { name: "Claude", color: "#D97757", desc: "Export from claude.ai. Preserves artifacts, reasoning blocks, and advanced outputs." },
  { name: "Gemini", color: "#4285F4", desc: "Export from gemini.google.com. Supports all response types including images descriptions." },
  { name: "DeepSeek", color: "#4D6BFE", desc: "Export from chat.deepseek.com. Full conversation support including reasoning chains." },
  { name: "Grok", color: "#000000", desc: "Export from grok.com and x.com/i/grok. Complete chat export with formatting." },
  { name: "Perplexity", color: "#22B8CD", desc: "Export from perplexity.ai. Preserves sources, citations, and search context." },
];

const features = [
  { icon: Download, title: "5 Export Formats", desc: "PDF, Markdown, Plain Text, JSON, and CSV. Every format preserves code blocks, tables, and mathematical formulas." },
  { icon: CheckCircle, title: "Selective Export", desc: "Export full conversations or select individual messages. Tick exactly what you need, nothing more." },
  { icon: Monitor, title: "Side Panel UI", desc: "Clean side panel shows all your conversations across platforms. Filter by platform, select, and export without leaving the page." },
  { icon: Shield, title: "100% Private", desc: "All processing happens in your browser. Your conversations never touch our servers. We literally have no backend." },
  { icon: Zap, title: "Instant Processing", desc: "Markdown, Text, JSON, and CSV generate in milliseconds. No server roundtrip, no waiting." },
  { icon: Globe, title: "Works on Chromium", desc: "Chrome, Edge, Brave, Arc, Opera — any Chromium-based browser. Side panel and popup modes." },
];

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateOnScroll className="text-center">
            <h1 className="text-4xl font-bold text-ex-dark md:text-5xl">
              Six platforms. Five formats. <span className="text-ex-green">One extension.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ex-gray">
              ExportAI replaces 3+ separate extensions with a single install that covers every major AI platform.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Platforms */}
      <section className="bg-ex-bg py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateOnScroll className="text-center">
            <h2 className="text-3xl font-bold text-ex-dark md:text-4xl">Supported Platforms</h2>
          </AnimateOnScroll>

          <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((p) => (
              <StaggerItem key={p.name}>
                <div className="rounded-2xl border border-ex-border bg-white p-6 transition-all hover:shadow-lg hover:shadow-green-500/5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full" style={{ background: p.color }} />
                    <h3 className="text-lg font-bold text-ex-dark">{p.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ex-gray">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateOnScroll className="text-center">
            <h2 className="text-3xl font-bold text-ex-dark md:text-4xl">Everything you need</h2>
          </AnimateOnScroll>

          <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="group rounded-2xl border border-ex-border bg-white p-6 transition-all hover:border-green-300 hover:shadow-lg hover:shadow-green-500/5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-ex-green transition-colors group-hover:bg-ex-green group-hover:text-white">
                    <f.icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-ex-dark">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ex-gray">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ex-bg py-16">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-ex-dark">Ready to try it?</h2>
            <a
              href={CHROME_EXTENSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-ex-green px-8 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-ex-green-dark"
            >
              Add to Chrome — Free
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
