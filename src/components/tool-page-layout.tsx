import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CHROME_EXTENSION_URL } from "@/lib/constants";

interface ToolPageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  cta: {
    hook: string;
    benefits: string[];
  };
  relatedTools: { name: string; href: string }[];
  faqItems: { q: string; a: string }[];
}

export function ToolPageLayout({
  title,
  subtitle,
  children,
  cta,
  relatedTools,
  faqItems,
}: ToolPageLayoutProps) {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="mx-auto max-w-[800px] px-6">
          <Link
            href="/tools"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-ex-gray hover:text-ex-green transition-colors"
          >
            <ArrowLeft size={14} /> All Free Tools
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-ex-dark md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-lg text-ex-gray">{subtitle}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium text-ex-gray">
            <span className="rounded-full bg-green-50 px-3 py-1 text-green-700">No signup required</span>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">Free forever</span>
            <span className="rounded-full bg-purple-50 px-3 py-1 text-purple-700">Privacy-first</span>
          </div>
        </div>
      </section>

      {/* Tool */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[800px] px-6">{children}</div>
      </section>

      {/* CTA */}
      <section className="border-y border-ex-border bg-ex-bg py-14">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <p className="text-lg font-semibold text-ex-dark leading-relaxed">
            {cta.hook}
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-3">
            {cta.benefits.map((b) => (
              <li
                key={b}
                className="rounded-full border border-ex-border bg-white px-4 py-1.5 text-sm text-ex-gray"
              >
                {b}
              </li>
            ))}
          </ul>
              <a
                href={CHROME_EXTENSION_URL}
                className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-ex-green px-7 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-ex-green-dark"
              >
              Try Miromap Free
            </a>
        </div>
      </section>

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="bg-white py-14">
          <div className="mx-auto max-w-[700px] px-6">
            <h2 className="mb-8 text-2xl font-bold text-ex-dark">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.q}>
                  <h3 className="text-base font-semibold text-ex-dark">{item.q}</h3>
                  <p className="mt-1.5 text-sm text-ex-gray leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section className="border-t border-ex-border bg-ex-bg py-10">
          <div className="mx-auto max-w-[700px] px-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-ex-dark">Related Tools</h3>
            <div className="flex flex-wrap gap-3">
              {relatedTools.map((t) => (
                <Link
                  key={t.name}
                  href={t.href}
                  className="rounded-full border border-ex-border bg-white px-4 py-2 text-sm font-medium text-ex-gray transition-colors hover:border-green-300 hover:text-ex-green"
                >
                  {t.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
