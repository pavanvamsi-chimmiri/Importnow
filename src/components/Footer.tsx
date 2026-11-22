"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/Logo";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const currentYear = useMemo(() => {
    if (typeof window !== "undefined") {
      return new Date().getFullYear();
    }
    return 2026;
  }, []);

  const handleNavClick = (href: string) => {
    if (!href.startsWith("#")) return;
    if (pathname === "/") {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push(`/${href}`);
  };

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-sm">
            <Link href="/" className="mb-4 inline-block" aria-label="Let's ImportNow home">
              <Logo size="sm" />
            </Link>
            <p className="text-sm text-foreground-muted">
              End-to-end imports from China to India: sourcing, factory
              inspection, shipping and customs. Save time. Reduce costs.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              ...NAV_LINKS,
              { label: "FAQ", href: "#faq" },
              { label: "Sign in", href: "/signin" },
              { label: "Sign up", href: "/signup" },
            ].map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground-muted hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-foreground-muted hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>

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

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/lets-importnow-summary.html"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-foreground-secondary hover:text-white"
            >
              Project summary (HTML)
            </a>
            <a
              href="/lets-importnow-summary.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-foreground-secondary hover:text-white"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
