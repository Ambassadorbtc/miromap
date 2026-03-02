"use client";

import { Check, ChevronRight } from "lucide-react";
import { CHROME_EXTENSION_URL } from "@/lib/constants";
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "@/components/animate-on-scroll";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Everything you need to export your AI conversations.",
    cta: "Add to Chrome — Free",
    href: CHROME_EXTENSION_URL,
    highlight: false,
    features: [
      "Unlimited Markdown exports",
      "Unlimited Text exports",
      "Unlimited JSON exports",
      "Unlimited CSV exports",
      "3 PDF exports per day",
      "All 6 AI platforms",
      "Select individual messages",
      "Preserves code blocks & tables",
      "100% client-side processing",
      "No account required",
    ],
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/month",
    desc: "For power users who export heavily.",
    cta: "Get Pro",
    href: "#",
    highlight: true,
    features: [
      "Everything in Free, plus:",
      "Unlimited PDF exports",
      "Batch export (ZIP download)",
      "Custom filename templates",
      "Dark & light PDF themes",
      "Priority support",
      "Early access to new features",
    ],
  },
  {
    name: "Lifetime",
    price: "$49",
    period: "one-time",
    desc: "Pay once, export forever.",
    cta: "Get Lifetime",
    href: "#",
    highlight: false,
    features: [
      "Everything in Pro",
      "All future features included",
      "No recurring payments",
      "Support the development",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="pt-16">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <AnimateOnScroll className="text-center">
            <h1 className="text-4xl font-bold text-ex-dark md:text-5xl">Simple, transparent pricing</h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ex-gray">
              Most formats are free forever. PDF power users can upgrade for unlimited exports.
            </p>
          </AnimateOnScroll>

          <StaggerChildren className="mt-14 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div className={`relative rounded-2xl border p-8 ${plan.highlight ? "border-ex-green bg-green-50/30 shadow-lg shadow-green-500/10" : "border-ex-border bg-white"}`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ex-green px-4 py-1 text-xs font-bold text-white">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-ex-dark">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-ex-dark">{plan.price}</span>
                    <span className="text-sm text-ex-gray">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-ex-gray">{plan.desc}</p>

                  <a
                    href={plan.href}
                    target={plan.href.startsWith("http") ? "_blank" : undefined}
                    rel={plan.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`mt-6 flex h-11 w-full items-center justify-center rounded-full text-sm font-semibold transition-all ${plan.highlight ? "bg-ex-green text-white hover:bg-ex-green-dark shadow-md shadow-green-500/20" : "border border-ex-border bg-white text-ex-dark hover:bg-ex-bg"}`}
                  >
                    {plan.cta}
                  </a>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ex-dark">
                        <Check size={16} className="mt-0.5 shrink-0 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <AnimateOnScroll className="mt-16 text-center">
            <p className="text-sm text-ex-gray">
              Questions? <a href="/contact" className="font-semibold text-ex-green hover:text-ex-green-dark">Contact us</a>. 3-day refund policy, no questions asked.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
