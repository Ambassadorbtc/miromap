"use client";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CHROME_EXTENSION_URL } from "@/lib/constants";

const faqs = [
  { q: "Is ExportAI free?", a: "Yes! Markdown, Text, JSON, and CSV exports are completely free with no limits. PDF exports are free 3 times per day. We offer Pro plans for users who need unlimited PDF exports." },
  { q: "Do I need an account?", a: "No. Just install the extension and start exporting. No sign-up, no email, no credit card." },
  { q: "Is my data safe?", a: "Your conversations never leave your browser. All processing happens client-side. We have no servers, no databases, and no way to access your data." },
  { q: "Which browsers are supported?", a: "Chrome, Edge, and any Chromium-based browser including Brave, Arc, and Opera." },
  { q: "Can I export specific messages?", a: "Yes. Select individual messages using checkboxes, or use Select All for the full conversation." },
  { q: "What if the export doesn't work on a platform?", a: "AI platforms update their UI frequently. If something breaks, contact us and we'll push a fix quickly." },
  { q: "Can I cancel my Pro subscription?", a: "Yes, anytime. We offer a 3-day refund policy, no questions asked." },
];

export default function SupportPage() {
  return (
    <div className="pt-16">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[800px] px-6">
          <AnimateOnScroll className="text-center">
            <h1 className="text-4xl font-bold text-ex-dark md:text-5xl">Support & FAQ</h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ex-gray">Everything you need to know about ExportAI.</p>
          </AnimateOnScroll>

          <div className="mt-14 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-ex-border bg-white p-6">
                <h3 className="text-base font-semibold text-ex-dark">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ex-gray">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-ex-gray">Still have questions? <a href="/contact" className="font-semibold text-ex-green hover:text-ex-green-dark">Contact us</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
