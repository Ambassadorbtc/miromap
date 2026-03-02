import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Miromap privacy policy. Learn how we handle your data, what we collect, and your rights.",
  alternates: { canonical: "https://miromap.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[700px] px-6">
          <h1 className="text-3xl font-bold text-ex-dark">Privacy Policy</h1>
          <p className="mt-2 text-sm text-ex-gray">Last updated: 2 March 2026</p>
          <p className="mt-1 text-sm text-ex-gray">Effective date: 2 March 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-ex-gray">

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">1. Who We Are</h2>
              <p className="mt-2">Miromap (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a product operated by Ambassador Digital Ltd, registered in England and Wales. We provide a Chrome browser extension and associated website at miromap.com that helps users export, organise, and back up AI conversations from third-party platforms.</p>
              <p className="mt-2">Data controller contact: <a href="mailto:privacy@miromap.com" className="text-ex-green hover:text-ex-green-dark">privacy@miromap.com</a></p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">2. What Data We Collect</h2>
              <p className="mt-2 font-medium text-ex-dark">2.1 Extension (Free Tier)</p>
              <p className="mt-1">The free extension processes all data locally in your browser. We do not collect, transmit, or store any of your AI conversation content. Specifically:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Conversation text is read from AI platform pages solely to generate export files</li>
                <li>Export files are created locally and downloaded directly to your device</li>
                <li>Format preferences are stored in Chrome local storage on your device only</li>
                <li>No analytics, tracking pixels, or telemetry are embedded in the free extension</li>
              </ul>

              <p className="mt-4 font-medium text-ex-dark">2.2 Extension (Pro Tier)</p>
              <p className="mt-1">If you upgrade to Pro, the following additional data processing occurs:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li><strong>Account email:</strong> Required for authentication and licence validation via Supabase</li>
                <li><strong>Payment data:</strong> Processed by Stripe. We do not see or store your full card number</li>
                <li><strong>Google Drive backup (optional):</strong> If enabled, conversation exports are uploaded to your own Google Drive via OAuth. We do not store copies of your backed-up data</li>
              </ul>

              <p className="mt-4 font-medium text-ex-dark">2.3 Website</p>
              <p className="mt-1">When you visit miromap.com, we may collect:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li><strong>Usage analytics:</strong> Page views, referral source, device type, and browser via privacy-friendly analytics (no personal identifiers)</li>
                <li><strong>Contact form submissions:</strong> Name, email, and message content when you contact us</li>
                <li><strong>Cookies:</strong> Essential cookies for site functionality. See our <a href="/cookies" className="text-ex-green hover:text-ex-green-dark">Cookie Policy</a> for details</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">3. How We Use Your Data</h2>
              <p className="mt-2">We use collected data exclusively to:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Provide and maintain the Miromap extension and website</li>
                <li>Process payments and manage Pro subscriptions</li>
                <li>Respond to support requests and contact form submissions</li>
                <li>Improve the product through aggregated, anonymised usage statistics</li>
                <li>Send transactional emails (purchase confirmations, password resets)</li>
              </ul>
              <p className="mt-2">We do not use your data for advertising, profiling, or selling to third parties. We will never sell your personal data.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">4. Legal Basis for Processing (UK GDPR)</h2>
              <p className="mt-2">We process personal data under the following lawful bases:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li><strong>Contract performance:</strong> Processing account and payment data to deliver Pro features you have purchased</li>
                <li><strong>Legitimate interest:</strong> Anonymised analytics to improve the product, fraud prevention</li>
                <li><strong>Consent:</strong> Marketing communications (if and when offered), optional Google Drive integration</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">5. Data Sharing &amp; Third Parties</h2>
              <p className="mt-2">We share data only with the following processors, strictly for service delivery:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li><strong>Supabase (US):</strong> Authentication and user account storage</li>
                <li><strong>Stripe (US):</strong> Payment processing</li>
                <li><strong>Vercel (US):</strong> Website hosting</li>
                <li><strong>Resend (US):</strong> Transactional email delivery</li>
                <li><strong>Google (US):</strong> Google Drive API for optional backup feature (user-authorised only)</li>
              </ul>
              <p className="mt-2">All processors are bound by data processing agreements. For transfers outside the UK, we rely on Standard Contractual Clauses or equivalent safeguards.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">6. Data Retention</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li><strong>Account data:</strong> Retained while your account is active. Deleted within 30 days of account deletion request</li>
                <li><strong>Payment records:</strong> Retained for 7 years as required by UK tax law</li>
                <li><strong>Contact form submissions:</strong> Retained for 12 months then deleted</li>
                <li><strong>Analytics data:</strong> Aggregated and anonymised; no individual retention</li>
                <li><strong>Extension local storage:</strong> Under your control; cleared when you uninstall the extension</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">7. Your Rights</h2>
              <p className="mt-2">Under UK GDPR, you have the right to:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data (&quot;right to be forgotten&quot;)</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interest</li>
                <li><strong>Withdraw consent:</strong> Where processing is based on consent, withdraw at any time</li>
              </ul>
              <p className="mt-2">To exercise any right, email <a href="mailto:privacy@miromap.com" className="text-ex-green hover:text-ex-green-dark">privacy@miromap.com</a>. We will respond within 30 days.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">8. Data Security</h2>
              <p className="mt-2">We implement appropriate technical and organisational measures to protect your data, including encryption in transit (TLS/HTTPS), secure authentication, and access controls. The extension processes data locally to minimise exposure. No system is 100% secure, but we take reasonable steps to protect your information.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">9. Children</h2>
              <p className="mt-2">Miromap is not intended for use by anyone under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with data, contact us and we will delete it promptly.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">10. Cookies</h2>
              <p className="mt-2">Our website uses essential cookies for site functionality. For full details, see our <a href="/cookies" className="text-ex-green hover:text-ex-green-dark">Cookie Policy</a>.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">11. Changes to This Policy</h2>
              <p className="mt-2">We may update this policy from time to time. Material changes will be communicated via the website. Continued use of Miromap after changes constitutes acceptance of the updated policy.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">12. Complaints</h2>
              <p className="mt-2">If you are unhappy with how we handle your data, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-ex-green hover:text-ex-green-dark">ico.org.uk</a>.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">13. Contact</h2>
              <p className="mt-2">For any privacy-related questions or requests:</p>
              <p className="mt-1">Email: <a href="mailto:privacy@miromap.com" className="text-ex-green hover:text-ex-green-dark">privacy@miromap.com</a></p>
              <p className="mt-1">Website: <a href="/contact" className="text-ex-green hover:text-ex-green-dark">miromap.com/contact</a></p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
