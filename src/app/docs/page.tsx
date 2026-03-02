import type { Metadata } from "next";
import Link from "next/link";
import { CHROME_EXTENSION_URL } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export const metadata: Metadata = {
  title: "Documentation — Getting Started with Miromap",
  description: "Learn how to install, use, and get the most out of Miromap. Export guides, format options, keyboard shortcuts, and troubleshooting.",
  alternates: { canonical: "https://miromap.com/docs" },
};

const sections = [
  {
    id: "install",
    title: "Installation",
    content: [
      { q: "How do I install Miromap?", a: "Visit the Chrome Web Store, search for \"Miromap\", and click \"Add to Chrome\". The extension also works on Edge, Brave, Arc, and any Chromium-based browser." },
      { q: "Does it work on Firefox or Safari?", a: "Not yet. Miromap currently requires a Chromium-based browser. Firefox and Safari support are on the roadmap." },
      { q: "How do I pin the extension?", a: "Click the puzzle icon in your Chrome toolbar, find Miromap, and click the pin icon. This keeps the Miromap button visible at all times." },
    ],
  },
  {
    id: "getting-started",
    title: "Getting Started",
    content: [
      { q: "How do I export a conversation?", a: "Open any supported AI platform (ChatGPT, Claude, Gemini, DeepSeek, Grok, or Perplexity), click the Miromap icon to open the side panel, select a conversation, choose your format, and click Export." },
      { q: "What platforms are supported?", a: "Miromap works with ChatGPT (chatgpt.com), Claude (claude.ai), Gemini (gemini.google.com), DeepSeek (chat.deepseek.com), Grok (grok.x.ai and x.com), and Perplexity (perplexity.ai)." },
      { q: "Do I need an account?", a: "No. The free tier works without any account or signup. You only need an account if you upgrade to Pro." },
    ],
  },
  {
    id: "formats",
    title: "Export Formats",
    content: [
      { q: "What formats can I export to?", a: "PDF (formatted, shareable documents), Markdown (compatible with Notion, Obsidian, GitHub), TXT (universal plain text), JSON (structured data for developers), and CSV (spreadsheet-compatible tabular data)." },
      { q: "Does PDF export preserve formatting?", a: "Yes. Code blocks, bold/italic text, lists, tables, and headings are all preserved in PDF exports. Pro users can choose between light and dark PDF themes." },
      { q: "What is the difference between Free and Pro exports?", a: "Free users get unlimited Markdown, TXT, JSON, and CSV exports, plus 3 PDF exports per day. Pro users get unlimited PDF exports, batch export, custom filename templates, and dark/light PDF themes." },
    ],
  },
  {
    id: "pro",
    title: "Pro Features",
    content: [
      { q: "What does Pro include?", a: "Unlimited PDF exports, batch export (select multiple conversations and export as ZIP), custom filename templates, light and dark PDF themes, Google Drive automatic backup, and priority support." },
      { q: "How much does Pro cost?", a: "Pro is $2.99/month or $29 for a lifetime licence. Both include all Pro features." },
      { q: "Can I cancel anytime?", a: "Yes. Monthly subscriptions can be cancelled at any time. You keep Pro access until the end of your billing period." },
      { q: "What is the refund policy?", a: "Monthly: 3-day refund window. Lifetime: 14-day refund window. Contact support@miromap.com to request a refund." },
    ],
  },
  {
    id: "backup",
    title: "Google Drive Backup",
    content: [
      { q: "How does Google Drive backup work?", a: "Connect your Google account in Miromap Settings, choose a backup frequency (manual, daily, or weekly), and Miromap will automatically export your conversations to a dedicated folder in your Google Drive." },
      { q: "What data is sent to Google Drive?", a: "Only the conversation exports you choose to back up. Miromap creates a dedicated folder in your Drive and only accesses that folder. We never read your other Drive files." },
      { q: "Can I restore from a backup?", a: "Yes. Backed-up conversations can be restored across devices. Open Miromap Settings, go to Backup, and click Restore." },
      { q: "How do I disconnect Google Drive?", a: "Go to Miromap Settings, click Disconnect under Google Drive Backup. You can also revoke access from your Google Account security settings." },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    content: [
      { q: "The extension is not detecting my conversations", a: "Make sure you are on a supported platform URL. Try refreshing the page. If the issue persists, click the Miromap icon, then click the refresh button in the side panel." },
      { q: "PDF export is blank or missing content", a: "This can happen if the conversation is still loading. Wait for the full conversation to load before exporting. If the issue persists, try exporting as Markdown first to confirm the content is detected." },
      { q: "The extension disappeared from my toolbar", a: "Click the puzzle/extensions icon in Chrome, find Miromap, and click the pin icon. If Miromap is not listed, reinstall from the Chrome Web Store." },
      { q: "Export is very slow for long conversations", a: "Very long conversations (100+ messages) may take a few seconds to process. This is normal. For batch exports of many conversations, Pro users can expect 5-10 seconds per conversation." },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="mx-auto max-w-[800px] px-6">
          <AnimateOnScroll>
            <h1 className="text-3xl font-bold text-ex-dark md:text-4xl">Documentation</h1>
            <p className="mt-3 text-lg text-ex-gray">Everything you need to get started with Miromap.</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-6">
        <div className="mx-auto max-w-[800px] px-6">
          <nav className="flex flex-wrap gap-2 border-b border-ex-border pb-6">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full border border-ex-border px-4 py-1.5 text-sm font-medium text-ex-gray transition-colors hover:border-green-300 hover:text-ex-green">
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-[800px] px-6 space-y-16">
          {sections.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 className="text-2xl font-bold text-ex-dark">{section.title}</h2>
              <div className="mt-6 space-y-6">
                {section.content.map((item) => (
                  <div key={item.q}>
                    <h3 className="text-base font-semibold text-ex-dark">{item.q}</h3>
                    <p className="mt-1.5 text-sm text-ex-gray leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ex-border bg-ex-bg py-14">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <h2 className="text-xl font-bold text-ex-dark">Still need help?</h2>
          <p className="mt-3 text-sm text-ex-gray">Our support team typically responds within 24 hours.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex h-10 items-center rounded-full bg-ex-green px-6 text-sm font-semibold text-white shadow-md shadow-green-500/20 hover:bg-ex-green-dark transition-all">Contact Support</Link>
            <Link href="/support" className="inline-flex h-10 items-center rounded-full border border-ex-border bg-white px-6 text-sm font-semibold text-ex-dark hover:bg-ex-bg transition-colors">FAQ</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
