import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { CHROME_EXTENSION_URL } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export const metadata: Metadata = {
  title: "Export Gemini Conversations as PDF, Markdown & More",
  description: "Export Google Gemini conversations as PDF, Markdown, TXT, JSON, or CSV instantly.",
  keywords: ["export Gemini conversations", "save Gemini as PDF", "Gemini to markdown", "Google Gemini export"],
  alternates: { canonical: "https://miromap.com/export-gemini" },
};

export default function Page() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="mx-auto max-w-[800px] px-6">
          <AnimateOnScroll>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-ex-border bg-white px-4 py-1.5 text-sm shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#4285F4" }} />
              <span className="font-medium text-ex-gray">Gemini Exporter</span>
            </div>
            <h1 className="text-4xl font-bold text-ex-dark md:text-5xl">Export <span className="text-ex-green">Gemini</span> Conversations</h1>
            <p className="mt-4 text-lg text-ex-gray leading-relaxed">Export Google Gemini conversations as PDF, Markdown, TXT, JSON, or CSV instantly.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CHROME_EXTENSION_URL} className="inline-flex h-11 items-center gap-2 rounded-full bg-ex-green px-7 text-sm font-semibold text-white shadow-md shadow-green-500/20 hover:bg-ex-green-dark transition-all">Add to Chrome &mdash; Free</a>
              <Link href="/pricing" className="inline-flex h-11 items-center rounded-full border border-ex-border bg-white px-7 text-sm font-semibold text-ex-dark hover:bg-ex-bg transition-colors">See Pricing</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="text-2xl font-bold text-ex-dark">Why export Gemini conversations?</h2>
          <p className="mt-4 text-ex-gray leading-relaxed">Google Gemini offers export through Google Takeout, but it dumps everything into a bulk archive. Miromap lets you pick individual conversations and export them in the exact format you need.</p>
          <h2 className="mt-12 text-2xl font-bold text-ex-dark">How to export from Gemini</h2>
          <ol className="mt-6 space-y-4">
              <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-ex-green">1</span><span className="text-sm text-ex-dark leading-relaxed pt-1">Install Miromap from the Chrome Web Store</span></li>
              <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-ex-green">2</span><span className="text-sm text-ex-dark leading-relaxed pt-1">Open gemini.google.com and browse your conversations</span></li>
              <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-ex-green">3</span><span className="text-sm text-ex-dark leading-relaxed pt-1">Click the Miromap icon to open the side panel</span></li>
              <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-ex-green">4</span><span className="text-sm text-ex-dark leading-relaxed pt-1">Select the Gemini conversations you want</span></li>
              <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-ex-green">5</span><span className="text-sm text-ex-dark leading-relaxed pt-1">Choose format, click Export, done</span></li>
          </ol>
          <h2 className="mt-12 text-2xl font-bold text-ex-dark">Export formats</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["PDF — Formatted, shareable documents", "Markdown — Notion, Obsidian, GitHub compatible", "TXT — Universal plain text", "JSON — Structured data for developers", "CSV — Spreadsheet-compatible tabular format"].map((f) => (
              <div key={f} className="flex items-start gap-2.5 rounded-xl border border-ex-border bg-white p-4">
                <Check size={16} className="mt-0.5 shrink-0 text-green-500" />
                <span className="text-sm text-ex-dark">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ex-border bg-ex-bg py-14">
        <div className="mx-auto max-w-[700px] px-6">
          <h2 className="mb-8 text-2xl font-bold text-ex-dark">Frequently Asked Questions</h2>
          <div className="space-y-6">
              <div><h3 className="text-base font-semibold text-ex-dark">How is this different from Google Takeout?</h3><p className="mt-1.5 text-sm text-ex-gray leading-relaxed">Takeout exports everything at once. Miromap lets you pick individual conversations and choose your format.</p></div>
              <div><h3 className="text-base font-semibold text-ex-dark">Works with Gemini Advanced?</h3><p className="mt-1.5 text-sm text-ex-gray leading-relaxed">Yes. Works with all Gemini tiers.</p></div>
              <div><h3 className="text-base font-semibold text-ex-dark">Is my data safe?</h3><p className="mt-1.5 text-sm text-ex-gray leading-relaxed">Yes. Everything stays in your browser.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-[700px] px-6">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-ex-dark">Export from other platforms</h3>
          <div className="flex flex-wrap gap-3">
              <Link key="ChatGPT" href="/export-chatgpt" className="rounded-full border border-ex-border bg-white px-4 py-2 text-sm font-medium text-ex-gray transition-colors hover:border-green-300 hover:text-ex-green">Export ChatGPT</Link>
              <Link key="Claude" href="/export-claude" className="rounded-full border border-ex-border bg-white px-4 py-2 text-sm font-medium text-ex-gray transition-colors hover:border-green-300 hover:text-ex-green">Export Claude</Link>
              <Link key="DeepSeek" href="/export-deepseek" className="rounded-full border border-ex-border bg-white px-4 py-2 text-sm font-medium text-ex-gray transition-colors hover:border-green-300 hover:text-ex-green">Export DeepSeek</Link>
              <Link key="Grok" href="/export-grok" className="rounded-full border border-ex-border bg-white px-4 py-2 text-sm font-medium text-ex-gray transition-colors hover:border-green-300 hover:text-ex-green">Export Grok</Link>
              <Link key="Perplexity" href="/export-perplexity" className="rounded-full border border-ex-border bg-white px-4 py-2 text-sm font-medium text-ex-gray transition-colors hover:border-green-300 hover:text-ex-green">Export Perplexity</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
