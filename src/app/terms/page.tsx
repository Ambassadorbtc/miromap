export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[700px] px-6 prose prose-gray">
          <h1 className="text-3xl font-bold text-ex-dark">Terms of Service</h1>
          <p className="mt-4 text-sm text-ex-gray">Last updated: March 2026</p>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-ex-gray">
            <div>
              <h2 className="text-lg font-semibold text-ex-dark">Service</h2>
              <p className="mt-2">ExportAI is a browser extension that helps you export AI conversation data from supported platforms. The extension is provided as-is.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ex-dark">Use</h2>
              <p className="mt-2">You may use ExportAI for personal and commercial purposes. You are responsible for ensuring your use complies with the terms of service of the AI platforms you export from.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ex-dark">Disclaimer</h2>
              <p className="mt-2">ExportAI is an independent tool and is not affiliated with, endorsed by, or sponsored by OpenAI, Anthropic, Google, xAI, DeepSeek, or Perplexity.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ex-dark">Refunds</h2>
              <p className="mt-2">Pro plan purchases include a 3-day refund policy. Contact support@exportai.app for refund requests.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
