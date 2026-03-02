"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Download,
  FileText,
  Code,
  Table,
  Globe,
  Shield,
  Zap,
  ChevronRight,
  Check,
  Star,
  ArrowRight,
} from "lucide-react";
import { CHROME_EXTENSION_URL, EDGE_EXTENSION_URL } from "@/lib/constants";
import { AnimateOnScroll, StaggerChildren, StaggerItem, FadeIn } from "@/components/animate-on-scroll";

const platforms = [
  { name: "ChatGPT", color: "#10A37F" },
  { name: "Claude", color: "#D97757" },
  { name: "Gemini", color: "#4285F4" },
  { name: "DeepSeek", color: "#4D6BFE" },
  { name: "Grok", color: "#000000" },
  { name: "Perplexity", color: "#22B8CD" },
];

const formats = [
  { icon: FileText, name: "PDF", desc: "Formatted documents with code highlighting and dark/light themes", free: "3/day", pro: "Unlimited" },
  { icon: Code, name: "Markdown", desc: "Perfect for Notion, Obsidian, GitHub, and any knowledge base", free: "Unlimited", pro: "Unlimited" },
  { icon: FileText, name: "Plain Text", desc: "Clean text output for notes, emails, or documentation", free: "Unlimited", pro: "Unlimited" },
  { icon: Code, name: "JSON", desc: "Structured data for developers, APIs, and automation", free: "Unlimited", pro: "Unlimited" },
  { icon: Table, name: "CSV", desc: "Spreadsheet-ready format for analysis and reporting", free: "Unlimited", pro: "Unlimited" },
];

const comparisons = [
  { feature: "ChatGPT export", us: true, them: true },
  { feature: "Claude export", us: true, them: true },
  { feature: "Gemini export", us: true, separate: true },
  { feature: "DeepSeek export", us: true, them: false },
  { feature: "Grok export", us: true, them: false },
  { feature: "Perplexity export", us: true, them: false },
  { feature: "One extension for all", us: true, them: false },
  { feature: "Select individual messages", us: true, them: true },
  { feature: "Preserves code blocks", us: true, them: true },
  { feature: "100% client-side", us: true, them: false },
  { feature: "Side panel UI", us: true, them: false },
];

const testimonials = [
  { name: "Joe H.", role: "Developer", text: "Exporting long conversations into markdown and uploading them into a fresh chat saves your token usage while keeping the full backstory. This is exactly what I needed.", rating: 5 },
  { name: "Chris B.", role: "Freelancer", text: "I've struggled SO much with exporting Claude conversations. It's bizarre they don't facilitate this. This extension does a great job.", rating: 5 },
  { name: "Damien H.", role: "Consultant", text: "Clean, professional, works great, HUGE timesaver. Well done!", rating: 5 },
  { name: "Thomas D.", role: "Researcher", text: "Clean and effective. Lets you quickly export conversations with minimal clicks. Essential for anyone working across multiple AI platforms.", rating: 5 },
  { name: "Bongani M.", role: "Engineer", text: "So useful to export chats and continue them or add them to project knowledge. Game changer for my workflow.", rating: 5 },
  { name: "Samuel S.", role: "Product Manager", text: "Does exactly what it promises: extracts the text from chats in a useful format. Perfect for contextualizing conversations when picking up work later.", rating: 5 },
];

/* ── Hero side panel mockup ── */
const mockConvos = [
  { title: "Building REST API with Node.js", platform: "ChatGPT", color: "#10A37F", msgs: 24 },
  { title: "Miromap v14 rebuild — icons fix", platform: "Claude", color: "#D97757", msgs: 67 },
  { title: "Market research UK restaurant tech", platform: "Gemini", color: "#4285F4", msgs: 19 },
  { title: "Python data pipeline optimisation", platform: "DeepSeek", color: "#4D6BFE", msgs: 28 },
  { title: "Crypto sentiment analysis thread", platform: "Grok", color: "#000000", msgs: 14 },
  { title: "VPS providers comparison 2026", platform: "Perplexity", color: "#22B8CD", msgs: 6 },
];

function HeroSidePanelMock() {
  const [selected, setSelected] = useState<Set<number>>(new Set([0, 1, 4]));
  const [format, setFormat] = useState("md");

  const toggle = (i: number) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="hero-mock mx-auto w-[340px] overflow-hidden rounded-2xl border border-gray-200 bg-[#0F1114] shadow-2xl shadow-green-900/10">
      {/* Header */}
      <div className="border-b border-white/5 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/miromap-logo-free.svg" alt="Miromap" className="h-6 w-6" />
            <span className="text-[13px] font-bold text-white">Miromap</span>
            <span className="text-[13px] text-gray-500">AI Chat Exporter</span>
          </div>
          <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[8px] font-bold text-green-400 uppercase tracking-wider">Free</span>
        </div>

        {/* Platform pills */}
        <div className="mt-3 flex gap-1 rounded-lg bg-white/5 p-1">
          <div className="flex-1 rounded-md bg-white/10 py-1.5 text-center text-[9px] font-semibold text-white">ALL</div>
          {platforms.map((p) => (
            <div key={p.name} className="flex flex-1 items-center justify-center rounded-md py-1.5">
              <div className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />
            </div>
          ))}
        </div>
      </div>

      {/* Conversation list */}
      <div className="max-h-[260px] overflow-hidden">
        {mockConvos.map((c, i) => (
          <div
            key={i}
            className={`flex cursor-pointer items-center gap-2.5 border-b border-white/[0.02] px-4 py-2.5 transition-colors ${selected.has(i) ? "bg-white/[0.03]" : "hover:bg-white/[0.02]"}`}
            onClick={() => toggle(i)}
          >
            <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-all ${selected.has(i) ? "border-green-400 bg-green-400" : "border-white/10"}`}>
              {selected.has(i) && <Check size={10} className="text-black" strokeWidth={3} />}
            </div>
            <div className="h-3 w-3 shrink-0 rounded-full" style={{ background: c.color }} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-medium text-gray-200">{c.title}</p>
              <p className="text-[9px] text-gray-500">{c.platform} · {c.msgs} msgs</p>
            </div>
          </div>
        ))}
      </div>

      {/* Export bar */}
      <div className="border-t border-white/10 bg-[#16181D] px-4 py-3">
        <div className="mb-2.5 flex gap-1">
          {["pdf", "md", "txt", "json", "csv"].map(f => (
            <div
              key={f}
              onClick={() => setFormat(f)}
              className={`flex flex-1 cursor-pointer flex-col items-center rounded-md border py-1.5 text-center transition-all ${format === f ? "border-green-400 bg-green-400/5 shadow-[0_0_0_1px] shadow-green-400" : "border-white/5 bg-[#0F1114]"}`}
            >
              <span className="text-[11px]">{f === "pdf" ? "📄" : f === "md" ? "📝" : f === "txt" ? "📃" : f === "json" ? "{ }" : "📊"}</span>
              <span className={`text-[8px] font-semibold uppercase tracking-wider ${format === f ? "text-green-400" : "text-gray-500"}`}>{f}</span>
            </div>
          ))}
        </div>
        <button className={`flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-[12px] font-semibold transition-all ${selected.size > 0 ? "bg-green-400 text-black hover:bg-green-300" : "bg-white/5 text-gray-500"}`}>
          <Download size={13} />
          {selected.size > 0 ? `Export ${selected.size} conversations as ${format.toUpperCase()}` : "Select chats to export"}
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-white pb-20 pt-16 md:pt-24">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

        <div className="relative mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            {/* Left — Copy */}
            <div>
              <FadeIn>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse-dot" />
                  <span className="text-xs font-semibold text-green-700">One extension. Six AI platforms.</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-ex-dark md:text-5xl lg:text-[3.4rem]">
                  Save your AI chats as{" "}
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    PDF, Markdown
                  </span>{" "}
                  and more
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mt-5 text-lg leading-relaxed text-ex-gray md:text-xl">
                  Export conversations from ChatGPT, Claude, Gemini, DeepSeek, Grok & Perplexity.
                  Select what you need, pick a format, download. Done.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={CHROME_EXTENSION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ex-green px-8 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-ex-green-dark hover:shadow-xl"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001-3.952 6.848c.404.037.812.057 1.227.057 6.627 0 12-5.373 12-12 0-1.006-.126-1.983-.361-2.916H15.273zm-3.015 2.51a1.855 1.855 0 1 0 0 3.71 1.855 1.855 0 0 0 0-3.71z"/></svg>
                    Add to Chrome — Free
                  </a>
                  <a
                    href={EDGE_EXTENSION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ex-border bg-white px-8 text-base font-semibold text-ex-dark transition-colors hover:bg-ex-bg"
                  >
                    Get on Edge
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="mt-5 text-sm text-ex-gray">Free forever for Markdown, Text, JSON & CSV. No account needed.</p>
              </FadeIn>

              {/* Platform logos row */}
              <FadeIn delay={0.5}>
                <div className="mt-8 flex items-center gap-3">
                  <span className="text-xs text-ex-gray">Supports:</span>
                  <div className="flex gap-2">
                    {platforms.map((p) => (
                      <div key={p.name} className="flex items-center gap-1.5 rounded-full border border-ex-border bg-white px-2.5 py-1">
                        <div className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />
                        <span className="text-[10px] font-semibold text-ex-dark">{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right — Side panel mock */}
            <FadeIn delay={0.3}>
              <HeroSidePanelMock />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="bg-ex-bg py-20">
        <div className="mx-auto max-w-[1000px] px-6">
          <AnimateOnScroll className="text-center">
            <h2 className="text-3xl font-bold text-ex-dark md:text-4xl">
              Three clicks. That&apos;s it.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ex-gray">
              No accounts. No servers. No setup. Just install and export.
            </p>
          </AnimateOnScroll>

          <StaggerChildren className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { step: "1", title: "Open any AI platform", desc: "Visit ChatGPT, Claude, Gemini, DeepSeek, Grok, or Perplexity. Miromap detects it automatically.", icon: Globe },
              { step: "2", title: "Select conversations", desc: "Open the side panel, browse your chats, and tick the ones you want. Select all or pick individual messages.", icon: FileText },
              { step: "3", title: "Pick format & download", desc: "Choose PDF, Markdown, Text, JSON, or CSV. Click export. File downloads to your machine instantly.", icon: Download },
            ].map((s) => (
              <StaggerItem key={s.step}>
                <div className="relative rounded-2xl border border-ex-border bg-white p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 text-white">
                    <s.icon size={22} />
                  </div>
                  <div className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-ex-dark text-xs font-bold text-white">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold text-ex-dark">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ex-gray">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══ FORMATS ═══ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateOnScroll className="text-center">
            <h2 className="text-3xl font-bold text-ex-dark md:text-4xl">
              Five formats. <span className="text-ex-green">Zero compromises.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ex-gray">
              Every format preserves code blocks, tables, mathematical formulas, and conversation structure.
            </p>
          </AnimateOnScroll>

          <StaggerChildren className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {formats.map((f) => (
              <StaggerItem key={f.name}>
                <div className="group rounded-2xl border border-ex-border bg-white p-5 text-center transition-all hover:border-green-300 hover:shadow-lg hover:shadow-green-500/5">
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-ex-green transition-colors group-hover:bg-ex-green group-hover:text-white">
                    <f.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-ex-dark">{f.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ex-gray">{f.desc}</p>
                  <div className="mt-3 border-t border-ex-border pt-3">
                    <p className="text-[10px] font-semibold text-ex-gray uppercase tracking-wider">Free: <span className="text-ex-green">{f.free}</span></p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══ WHY US — COMPARISON ═══ */}
      <section className="bg-ex-bg py-20">
        <div className="mx-auto max-w-[800px] px-6">
          <AnimateOnScroll className="text-center">
            <h2 className="text-3xl font-bold text-ex-dark md:text-4xl">
              They need 3 extensions. You need 1.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ex-gray">
              Competitors sell separate extensions per platform. Miromap covers all six in one install.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale-up" delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-ex-border bg-white">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-ex-border bg-ex-bg">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-ex-dark">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-ex-green">Miromap</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-ex-gray">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-ex-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-ex-bg/50"}`}>
                      <td className="px-6 py-3.5 text-sm text-ex-dark">{row.feature}</td>
                      <td className="px-6 py-3.5 text-center">
                        {row.us ? <Check size={18} className="mx-auto text-green-500" /> : <span className="text-ex-gray">&mdash;</span>}
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        {row.them ? <Check size={18} className="mx-auto text-ex-gray" /> : row.separate ? <span className="text-[10px] text-amber-500 font-medium">Separate ext.</span> : <span className="text-ex-gray">&mdash;</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ TRUST / PRIVACY ═══ */}
      <section className="bg-white py-16 border-t border-ex-border">
        <div className="mx-auto max-w-[1000px] px-6">
          <StaggerChildren className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Shield, title: "100% Private", desc: "Your conversations never leave your browser. All processing happens client-side. We never store, read, or transmit your data." },
              { icon: Zap, title: "Instant Export", desc: "No server roundtrip. Markdown, Text, JSON, and CSV are generated entirely in your browser in milliseconds." },
              { icon: Globe, title: "Works Everywhere", desc: "Chrome and Edge. Works on any Chromium browser including Brave, Arc, and Opera." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4 rounded-2xl border border-ex-border bg-white p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-ex-green">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ex-dark">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ex-gray">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="bg-ex-bg py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateOnScroll className="text-center">
            <h2 className="text-3xl font-bold text-ex-dark md:text-4xl">
              People love Miromap
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ex-gray">
              Join thousands of developers, researchers, and teams who export smarter.
            </p>
          </AnimateOnScroll>

          <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <StaggerItem key={t.name}>
                <div className="rounded-2xl border border-ex-border bg-white p-6">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-ex-dark">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-ex-green">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ex-dark">{t.name}</p>
                      <p className="text-xs text-ex-gray">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="bg-white py-16 border-t border-ex-border">
        <div className="mx-auto max-w-[1000px] px-6">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "6", label: "AI Platforms" },
              { value: "5", label: "Export Formats" },
              { value: "100%", label: "Client-Side" },
              { value: "$0", label: "To Get Started" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-ex-green">{stat.value}</p>
                <p className="mt-1 text-sm text-ex-gray">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="bg-ex-bg py-20">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-ex-dark md:text-4xl">
              Stop losing your AI conversations.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ex-gray">
              Install Miromap and start saving your work in seconds. Free forever for most formats.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={CHROME_EXTENSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ex-green px-8 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-ex-green-dark hover:shadow-xl"
              >
                Add to Chrome — Free
              </a>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-ex-border bg-white px-8 text-base font-semibold text-ex-dark transition-colors hover:bg-ex-bg"
              >
                View Pricing
                <ChevronRight size={16} />
              </Link>
            </div>

            <p className="mt-6 text-xs text-ex-gray">
              No account required. MD, TXT, JSON & CSV are free forever. PDF has a generous free tier.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
