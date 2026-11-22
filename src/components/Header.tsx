"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/Logo";
import { useAuth } from "@/components/AuthProvider";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, ready, signOut } = useAuth();
  const onHome = pathname === "/";
  const headerSolid = isScrolled || !onHome;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (!href.startsWith("#")) return;
    if (pathname === "/") {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push(`/${href}`);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          headerSolid
            ? "bg-background/90 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="tricolor-bar" />
        <div className="container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" aria-label="Let's ImportNow home">
              <Logo />
            </Link>

            <div className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-foreground-muted hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              {ready && user ? (
                <>
                  <span className="text-sm text-foreground-muted">
                    Hi, {user.name.split(" ")[0]}
                  </span>
                  <button
                    type="button"
                    onClick={signOut}
                    className="px-4 py-2 text-sm text-white rounded-full border border-border-light hover:bg-white/5"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="px-4 py-2 text-sm text-white rounded-full border border-border-light hover:bg-white/5"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white rounded-full gradient-orange hover:opacity-90 transition-opacity shadow-orange"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-16 left-4 right-4 bg-background-light border border-border rounded-2xl p-6 shadow-2xl"
            >
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={pathname === "/" ? link.href : `/${link.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-lg text-foreground-muted hover:text-white transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                {ready && user ? (
                  <button
                    type="button"
                    onClick={() => {
                      signOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="mt-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-full border border-border-light"
                  >
                    Sign out
                  </button>
                ) : (
                  <>
                    <Link
                      href="/signin"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="mt-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-full border border-border-light"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-full gradient-orange"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
