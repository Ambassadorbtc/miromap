export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[700px] px-6 prose prose-gray">
          <h1 className="text-3xl font-bold text-ex-dark">Privacy Policy</h1>
          <p className="mt-4 text-sm text-ex-gray">Last updated: March 2026</p>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-ex-gray">
            <div>
              <h2 className="text-lg font-semibold text-ex-dark">Data Collection</h2>
              <p className="mt-2">Miromap does not collect, store, transmit, or process any of your conversation data. All export operations happen entirely within your browser. We have no servers that receive your data.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ex-dark">What We Access</h2>
              <p className="mt-2">The extension reads conversation content from AI platform pages solely to generate export files. This data is processed locally in your browser and is immediately discarded after the export file is created.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ex-dark">Storage</h2>
              <p className="mt-2">Miromap uses Chrome local storage to remember your format preferences and conversation index. This data never leaves your device.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ex-dark">Third Parties</h2>
              <p className="mt-2">We do not share any data with third parties. We do not use analytics, tracking pixels, or advertising SDKs in the extension.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ex-dark">Contact</h2>
              <p className="mt-2">Questions about privacy? Email us at support@miromap.app.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
