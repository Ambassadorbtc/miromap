"use client";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <AnimateOnScroll>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50">
              <Mail size={28} className="text-ex-green" />
            </div>
            <h1 className="text-4xl font-bold text-ex-dark">Contact Us</h1>
            <p className="mt-4 text-lg text-ex-gray">Got a question, bug report, or feature request?</p>
            <a
              href="mailto:support@exportai.app"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-ex-green px-8 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-ex-green-dark"
            >
              <Mail size={18} />
              support@exportai.app
            </a>
            <p className="mt-6 text-sm text-ex-gray">We typically respond within 24 hours.</p>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
