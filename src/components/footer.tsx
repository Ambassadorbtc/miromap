import Link from "next/link";

import { CHROME_EXTENSION_URL, EDGE_EXTENSION_URL } from "@/lib/constants";

const freeTools = [
  { name: "ChatGPT Downloader", href: "/tools/chatgpt-downloader" },
  { name: "Chat Exporter", href: "/tools/chat-exporter" },
  { name: "Prompt Generator", href: "/tools/prompt-generator" },
  { name: "Chat Title Generator", href: "/tools/chat-title-generator" },
  { name: "Markdown Converter", href: "/tools/chatgpt-to-markdown" },
  { name: "Conversation Counter", href: "/tools/ai-conversation-counter" },
];

const featureLinks = [
  { name: "Smart Folders", href: "/features" },
  { name: "Mind Maps", href: "/features" },
  { name: "Cross-Tab Links", href: "/features" },
  { name: "Voice Search", href: "/features" },
  { name: "Google Drive Backup", href: "/features" },
  { name: "Tags & Labels", href: "/features" },
];

const platformLinks = [
  { name: "ChatGPT", href: "/export-chatgpt" },
  { name: "Claude", href: "/export-claude" },
  { name: "Gemini", href: "/export-gemini" },
  { name: "Grok", href: "/export-grok" },
  { name: "Perplexity", href: "/export-perplexity" },
  { name: "DeepSeek", href: "/export-deepseek" },
];

const resourceLinks = [
  { name: "Documentation", href: "/docs" },
  { name: "Blog", href: "#" },
  { name: "Guides", href: "#" },
  { name: "Changelog", href: "#" },
  { name: "Roadmap", href: "#" },
];

const companyLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/support" },
  { name: "Contact", href: "/contact" },
  { name: "Discord", href: "#" },
  { name: "Twitter / X", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-ex-border bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        {/* Top: Brand + tagline */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
                <img src="/miromap-logo-free.svg" alt="Miromap" className="h-8 w-8" />
                <span className="text-xl font-bold text-ex-dark">Miromap</span>
              </Link>
            <p className="mt-2 max-w-sm text-sm text-ex-gray leading-relaxed">
              Organize every AI conversation in one place. Search, visualize, and never lose context again.
            </p>
          </div>
              <a
                href={CHROME_EXTENSION_URL}
                className="inline-flex h-10 w-fit items-center gap-2 rounded-full bg-ex-green px-6 text-sm font-semibold text-white shadow-md shadow-green-500/20 transition-all hover:bg-ex-green-dark"
              >
              Add to Chrome &mdash; Free
            </a>
        </div>

        {/* Link columns */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* Free Tools */}
          <div className="lg:col-span-1">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-ex-dark">Free Tools</h4>
            <ul className="space-y-2">
              {freeTools.map((t) => (
                <li key={t.name}>
                  <Link href={t.href} className="text-sm text-ex-gray hover:text-ex-green transition-colors">{t.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/tools" className="inline-flex items-center gap-1 text-sm font-semibold text-ex-green hover:text-ex-green-dark transition-colors">
                  See All Tools
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-ex-dark">Features</h4>
            <ul className="space-y-2">
              {featureLinks.map((f) => (
                <li key={f.name}>
                  <Link href={f.href} className="text-sm text-ex-gray hover:text-ex-green transition-colors">{f.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-ex-dark">Platforms</h4>
            <ul className="space-y-2">
              {platformLinks.map((p) => (
                <li key={p.name}>
                  <Link href={p.href} className="text-sm text-ex-gray hover:text-ex-green transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-ex-dark">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((r) => (
                <li key={r.name}>
                  <Link href={r.href} className="text-sm text-ex-gray hover:text-ex-green transition-colors">{r.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-ex-dark">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((c) => (
                <li key={c.name}>
                  <Link href={c.href} className="text-sm text-ex-gray hover:text-ex-green transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-ex-dark">Legal</h4>
            <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-ex-gray hover:text-ex-green transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-ex-gray hover:text-ex-green transition-colors">Terms of Service</Link></li>
              </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ex-border pt-8 sm:flex-row">
          <p className="text-sm text-ex-gray">&copy; 2026 Miromap. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-ex-gray hover:text-ex-dark transition-colors" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href="#" className="text-ex-gray hover:text-ex-dark transition-colors" aria-label="Discord">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
