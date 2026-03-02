import Link from "next/link";
import { CHROME_EXTENSION_URL, EDGE_EXTENSION_URL } from "@/lib/constants";

const platformLinks = [
  { name: "ChatGPT", href: "/features" },
  { name: "Claude", href: "/features" },
  { name: "Gemini", href: "/features" },
  { name: "DeepSeek", href: "/features" },
  { name: "Grok", href: "/features" },
  { name: "Perplexity", href: "/features" },
];

const formatLinks = [
  { name: "Export as PDF", href: "/features" },
  { name: "Export as Markdown", href: "/features" },
  { name: "Export as TXT", href: "/features" },
  { name: "Export as JSON", href: "/features" },
  { name: "Export as CSV", href: "/features" },
];

const companyLinks = [
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-ex-border bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 text-sm font-bold text-white">
                ↗
              </div>
              <span className="text-lg font-bold text-ex-dark">Export<span className="text-ex-green">AI</span></span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ex-gray">
              One extension, six AI platforms. Export your conversations as PDF, Markdown, and more.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={CHROME_EXTENSION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ex-green px-4 text-xs font-semibold text-white hover:bg-ex-green-dark transition-colors">
                Chrome
              </a>
              <a href={EDGE_EXTENSION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center gap-1.5 rounded-full border border-ex-border bg-white px-4 text-xs font-semibold text-ex-dark hover:bg-ex-bg transition-colors">
                Edge
              </a>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-sm font-semibold text-ex-dark">Platforms</h4>
            <ul className="mt-4 space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-ex-gray hover:text-ex-dark transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formats */}
          <div>
            <h4 className="text-sm font-semibold text-ex-dark">Formats</h4>
            <ul className="mt-4 space-y-2.5">
              {formatLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-ex-gray hover:text-ex-dark transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-ex-dark">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-ex-gray hover:text-ex-dark transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ex-border pt-8 md:flex-row">
          <p className="text-xs text-ex-gray">© {new Date().getFullYear()} ExportAI. All rights reserved.</p>
          <p className="text-xs text-ex-gray">Not affiliated with OpenAI, Anthropic, Google, xAI, DeepSeek, or Perplexity.</p>
        </div>
      </div>
    </footer>
  );
}
