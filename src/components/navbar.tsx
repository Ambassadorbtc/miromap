"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CHROME_EXTENSION_URL } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/support", label: "Support" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-ex-border">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/miromap-logo-free.svg" alt="Miromap" className="h-8 w-8" />
          <span className="text-xl font-bold text-ex-dark">Miro<span className="text-ex-green">map</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ex-gray transition-colors hover:text-ex-dark"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={CHROME_EXTENSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-ex-green px-5 text-sm font-semibold text-white transition-colors hover:bg-ex-green-dark"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001-3.952 6.848c.404.037.812.057 1.227.057 6.627 0 12-5.373 12-12 0-1.006-.126-1.983-.361-2.916H15.273zm-3.015 2.51a1.855 1.855 0 1 0 0 3.71 1.855 1.855 0 0 0 0-3.71z"/></svg>
            Add to Chrome — Free
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-ex-dark" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-ex-border bg-white px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-ex-gray hover:text-ex-dark" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a
              href={CHROME_EXTENSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-ex-green px-5 text-sm font-semibold text-white hover:bg-ex-green-dark"
              onClick={() => setMobileOpen(false)}
            >
              Add to Chrome — Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
