import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Miromap terms of service. Read the terms governing use of the Miromap extension and website.",
  alternates: { canonical: "https://miromap.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[700px] px-6">
          <h1 className="text-3xl font-bold text-ex-dark">Terms of Service</h1>
          <p className="mt-2 text-sm text-ex-gray">Last updated: 2 March 2026</p>
          <p className="mt-1 text-sm text-ex-gray">Effective date: 2 March 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-ex-gray">

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">1. Agreement</h2>
              <p className="mt-2">By installing, accessing, or using Miromap (the &quot;Service&quot;), including the Chrome extension, website at miromap.com, and any related services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Service.</p>
              <p className="mt-2">Miromap is operated by Ambassador Digital Ltd, registered in England and Wales (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">2. Description of Service</h2>
              <p className="mt-2">Miromap is a browser extension and web platform that enables users to export, organise, search, and back up conversations from third-party AI platforms including ChatGPT, Claude, Gemini, DeepSeek, Grok, and Perplexity. The Service includes a free tier and paid Pro tier with additional features.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">3. Eligibility</h2>
              <p className="mt-2">You must be at least 16 years old to use Miromap. By using the Service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">4. Account Registration</h2>
              <p className="mt-2">The free tier does not require an account. Pro features require account registration. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You must notify us immediately at <a href="mailto:support@miromap.com" className="text-ex-green hover:text-ex-green-dark">support@miromap.com</a> if you suspect unauthorised access.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">5. Free and Pro Tiers</h2>
              <p className="mt-2 font-medium text-ex-dark">5.1 Free Tier</p>
              <p className="mt-1">The free tier includes unlimited Markdown, TXT, JSON, and CSV exports, and up to 3 PDF exports per day across all 6 supported AI platforms. No account or payment is required.</p>
              <p className="mt-3 font-medium text-ex-dark">5.2 Pro Tier</p>
              <p className="mt-1">Pro is available as a monthly subscription ($2.99/month) or lifetime purchase ($29 one-time). Pro includes unlimited PDF exports, batch export, custom filename templates, dark and light PDF themes, Google Drive backup, and priority support.</p>
              <p className="mt-3 font-medium text-ex-dark">5.3 Feature Changes</p>
              <p className="mt-1">We reserve the right to modify, add, or remove features from any tier at any time. Material changes to paid features will be communicated with at least 30 days notice.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">6. Payments and Billing</h2>
              <p className="mt-2">All payments are processed by Stripe. Prices are in US Dollars. Monthly subscriptions renew automatically until cancelled. You may cancel at any time through your account settings or by contacting support; cancellation takes effect at the end of the current billing period.</p>
              <p className="mt-2">We do not store your full payment card details. All payment data is handled by Stripe in accordance with PCI DSS standards.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">7. Refund Policy</h2>
              <p className="mt-2"><strong>Monthly subscriptions:</strong> You may request a full refund within 3 days of your initial purchase or any renewal. After 3 days, no refund is available for that billing period.</p>
              <p className="mt-2"><strong>Lifetime purchases:</strong> You may request a full refund within 14 days of purchase, provided you have not made excessive use of Pro features. After 14 days, lifetime purchases are non-refundable.</p>
              <p className="mt-2">To request a refund, email <a href="mailto:support@miromap.com" className="text-ex-green hover:text-ex-green-dark">support@miromap.com</a> with your account email and reason for the request.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">8. Acceptable Use</h2>
              <p className="mt-2">You agree not to:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Use the Service to violate any applicable law or regulation</li>
                <li>Use the Service to infringe on the intellectual property rights of others</li>
                <li>Reverse engineer, decompile, or disassemble the extension</li>
                <li>Redistribute, resell, or sublicence the Service without written permission</li>
                <li>Use automated tools to abuse, overload, or interfere with the Service</li>
                <li>Circumvent free tier limitations through technical means</li>
                <li>Share Pro account credentials with others</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">9. Intellectual Property</h2>
              <p className="mt-2">The Miromap extension, website, branding, code, and documentation are the intellectual property of Ambassador Digital Ltd. You are granted a limited, non-exclusive, non-transferable licence to use the Service in accordance with these Terms.</p>
              <p className="mt-2">Your conversation data remains your property. We claim no ownership over any content you export, organise, or back up using Miromap.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">10. Third-Party Platforms</h2>
              <p className="mt-2">Miromap interacts with third-party AI platforms (ChatGPT, Claude, Gemini, DeepSeek, Grok, Perplexity). We are not affiliated with, endorsed by, or sponsored by OpenAI, Anthropic, Google, xAI, DeepSeek, or Perplexity.</p>
              <p className="mt-2">You are responsible for ensuring your use of Miromap complies with the terms of service of each third-party platform. Changes to third-party platforms may affect Miromap functionality; we are not liable for such changes.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">11. Google Drive Integration</h2>
              <p className="mt-2">The optional Google Drive backup feature requires you to authorise Miromap via Google OAuth. We access only the specific Google Drive folder needed for backup. We do not access other Drive files, Gmail, or other Google services. You may revoke access at any time through your Google Account settings.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">12. Disclaimer of Warranties</h2>
              <p className="mt-2">THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
              <p className="mt-2">We do not warrant that the Service will be uninterrupted, error-free, or compatible with all browser versions or platform updates. Export accuracy depends on third-party platform structure, which may change without notice.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">13. Limitation of Liability</h2>
              <p className="mt-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW, AMBASSADOR DIGITAL LTD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.</p>
              <p className="mt-2">Our total cumulative liability shall not exceed the amount you have paid us in the 12 months preceding the claim, or $50, whichever is greater.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">14. Indemnification</h2>
              <p className="mt-2">You agree to indemnify and hold harmless Ambassador Digital Ltd, its officers, directors, and employees from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">15. Termination</h2>
              <p className="mt-2">You may stop using the Service at any time by uninstalling the extension and deleting your account. We may suspend or terminate your access if you violate these Terms, with or without notice. Upon termination, your right to use the Service ceases immediately. Sections on IP, liability, and indemnification survive termination.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">16. Changes to Terms</h2>
              <p className="mt-2">We may update these Terms from time to time. Material changes will be posted on this page with an updated effective date. Continued use of the Service after changes constitutes acceptance. If you disagree with updated Terms, stop using the Service.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">17. Governing Law</h2>
              <p className="mt-2">These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">18. Severability</h2>
              <p className="mt-2">If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ex-dark">19. Contact</h2>
              <p className="mt-2">For questions about these Terms:</p>
              <p className="mt-1">Email: <a href="mailto:support@miromap.com" className="text-ex-green hover:text-ex-green-dark">support@miromap.com</a></p>
              <p className="mt-1">Website: <a href="/contact" className="text-ex-green hover:text-ex-green-dark">miromap.com/contact</a></p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
