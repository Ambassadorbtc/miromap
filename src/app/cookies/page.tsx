import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Miromap cookie policy. Learn what cookies we use and how to manage them.",
  alternates: { canonical: "https://miromap.com/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-16">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[700px] px-6">
          <h1 className="text-3xl font-bold text-ex-dark">Cookie Policy</h1>
          <p className="mt-2 text-sm text-ex-gray">Last updated: 2 March 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-ex-gray">

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">1. What Are Cookies</h2>
              <p className="mt-2">Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to site owners. This policy explains what cookies miromap.com uses and how you can control them.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">2. Cookies We Use</h2>

              <p className="mt-3 font-medium text-ex-dark">2.1 Strictly Necessary Cookies</p>
              <p className="mt-1">These cookies are essential for the website to function. They cannot be switched off.</p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead><tr className="border-b border-ex-border"><th className="py-2 pr-4 font-semibold text-ex-dark">Cookie</th><th className="py-2 pr-4 font-semibold text-ex-dark">Purpose</th><th className="py-2 font-semibold text-ex-dark">Duration</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-ex-border"><td className="py-2 pr-4 font-mono">__vercel_toolbar</td><td className="py-2 pr-4">Vercel deployment identification</td><td className="py-2">Session</td></tr>
                    <tr className="border-b border-ex-border"><td className="py-2 pr-4 font-mono">sb-access-token</td><td className="py-2 pr-4">Supabase authentication (Pro users only)</td><td className="py-2">1 hour</td></tr>
                    <tr className="border-b border-ex-border"><td className="py-2 pr-4 font-mono">sb-refresh-token</td><td className="py-2 pr-4">Supabase session refresh (Pro users only)</td><td className="py-2">7 days</td></tr>
                    <tr className="border-b border-ex-border"><td className="py-2 pr-4 font-mono">cookie-consent</td><td className="py-2 pr-4">Stores your cookie preferences</td><td className="py-2">1 year</td></tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-5 font-medium text-ex-dark">2.2 Analytics Cookies</p>
              <p className="mt-1">We use privacy-friendly analytics to understand how visitors use our site. These cookies do not track you across other websites and do not collect personal identifiers.</p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead><tr className="border-b border-ex-border"><th className="py-2 pr-4 font-semibold text-ex-dark">Cookie</th><th className="py-2 pr-4 font-semibold text-ex-dark">Purpose</th><th className="py-2 font-semibold text-ex-dark">Duration</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-ex-border"><td className="py-2 pr-4 font-mono">_va_id</td><td className="py-2 pr-4">Anonymous visitor identification</td><td className="py-2">1 year</td></tr>
                    <tr className="border-b border-ex-border"><td className="py-2 pr-4 font-mono">_va_ses</td><td className="py-2 pr-4">Session tracking</td><td className="py-2">30 min</td></tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-5 font-medium text-ex-dark">2.3 Third-Party Cookies</p>
              <p className="mt-1">If you interact with embedded content or payment forms, third-party services may set their own cookies:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li><strong>Stripe:</strong> Payment processing cookies when using checkout (PCI DSS compliant)</li>
                <li><strong>Google:</strong> OAuth cookies when connecting Google Drive backup</li>
              </ul>
              <p className="mt-2">We do not use advertising cookies, social media tracking pixels, or retargeting cookies.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">3. The Miromap Extension</h2>
              <p className="mt-2">The Miromap browser extension does not set or read cookies. It uses Chrome local storage (chrome.storage.local) to store your preferences and conversation index. This data never leaves your device and is not accessible to websites.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">4. Managing Cookies</h2>
              <p className="mt-2">You can control cookies through:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li><strong>Our cookie banner:</strong> When you first visit, you can accept or decline non-essential cookies</li>
                <li><strong>Browser settings:</strong> Most browsers let you block or delete cookies. See your browser&apos;s help documentation</li>
              </ul>
              <p className="mt-2">Blocking strictly necessary cookies may prevent certain features from working correctly.</p>
              <p className="mt-3 font-medium text-ex-dark">Browser-specific instructions:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-ex-green hover:text-ex-green-dark">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-ex-green hover:text-ex-green-dark">Firefox</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-ex-green hover:text-ex-green-dark">Microsoft Edge</a></li>
                <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-ex-green hover:text-ex-green-dark">Safari</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">5. Changes</h2>
              <p className="mt-2">We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated date.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">6. Contact</h2>
              <p className="mt-2">Questions about cookies? Email <a href="mailto:privacy@miromap.com" className="text-ex-green hover:text-ex-green-dark">privacy@miromap.com</a>.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
