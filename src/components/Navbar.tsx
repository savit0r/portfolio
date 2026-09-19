"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Products", href: "#products" },
  { label: "Blog", href: "#blogs" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-lg px-3 py-1.5 ${
          scrolled
            ? "bg-l-surface/90 dark:bg-d-surface/90 backdrop-blur-md shadow-md border border-l-border dark:border-d-border"
            : "bg-l-surface/70 dark:bg-d-surface/70 backdrop-blur-xs border border-l-border/60 dark:border-d-border/60"
        }`}
      >
        <div className="flex items-center gap-1">
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-mono text-l-muted dark:text-d-muted hover:text-red-ink transition-colors duration-200 rounded hover:bg-l-border/30 dark:hover:bg-d-border/30"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded hover:bg-l-border/30 dark:hover:bg-d-border/30 transition-colors text-l-text dark:text-d-text"
            aria-label="Toggle menu"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 8h16" />
                  <path d="M4 16h16" />
                </>
              )}
            </svg>
          </button>

          {/* Divider */}
          <div className="hidden md:block w-px h-4 bg-l-border dark:bg-d-border mx-1" />

          <ThemeToggle />
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 bg-l-surface dark:bg-d-surface border border-l-border dark:border-d-border rounded-xl p-3 shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-xs font-mono text-l-muted dark:text-d-muted hover:text-red-ink transition-colors duration-200 rounded hover:bg-l-border/30 dark:hover:bg-d-border/30"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
