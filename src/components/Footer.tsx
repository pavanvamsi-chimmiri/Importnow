"use client";

import { useMemo } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = useMemo(() => {
    if (typeof window !== "undefined") {
      return new Date().getFullYear();
    }
    return 2026;
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Logo & Description */}
          <div className="max-w-sm">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-2 font-sora font-bold text-xl tracking-tight mb-4"
            >
              <span className="text-white">IMP</span>
              <span className="gradient-text">O</span>
              <span className="text-white">RTNOW</span>
            </a>
            <p className="text-sm text-foreground-muted">
              End-to-end imports from China to India: sourcing, factory
              inspection, shipping and customs. Save time. Reduce costs.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[...NAV_LINKS, { label: "FAQ", href: "#faq" }].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm text-foreground-muted hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-foreground-secondary">
            © {currentYear}{" "}
            <a
              href="https://importnow.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-primary hover:underline"
            >
              ImportNow.in
            </a>{" "}
            · All rights reserved.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-foreground-secondary">
            <span>Concept design</span>
            <span className="text-foreground-muted">·</span>
            <span>preview prepared for ImportNow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
