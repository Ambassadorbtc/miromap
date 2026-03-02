"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie.split("; ").find((c) => c.startsWith("cookie-consent="));
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    document.cookie = "cookie-consent=accepted; max-age=31536000; path=/; SameSite=Lax";
    setVisible(false);
  }

  function decline() {
    document.cookie = "cookie-consent=declined; max-age=31536000; path=/; SameSite=Lax";
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-ex-border bg-white px-4 py-4 shadow-lg sm:px-6">
      <div className="mx-auto flex max-w-[900px] flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ex-gray leading-relaxed">
          We use essential cookies to make our site work. We&apos;d also like to use analytics cookies to improve your experience.{" "}
          <Link href="/cookies" className="text-ex-green hover:text-ex-green-dark font-medium">Learn more</Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button onClick={decline} className="rounded-full border border-ex-border bg-white px-5 py-2 text-sm font-medium text-ex-gray transition-colors hover:bg-ex-bg">
            Decline
          </button>
          <button onClick={accept} className="rounded-full bg-ex-green px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-ex-green-dark">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
