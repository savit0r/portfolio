"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <>
      <section id="contact" className="bg-l-surface dark:bg-d-surface rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 border border-l-border/60 dark:border-d-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative overflow-hidden">
        <div className="max-w-2xl relative z-10 w-full overflow-hidden">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-l-text dark:text-d-text break-words whitespace-normal">
              Let&apos;s work together.
            </h2>
            <p className="text-l-muted/90 dark:text-d-muted/90 text-lg sm:text-xl mb-12 max-w-xl leading-relaxed tracking-tight">
              I&apos;m currently looking for new opportunities. Feel free to reach
              out — I&apos;d love to hear from you.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-8 py-4 bg-l-text dark:bg-d-text text-l-bg dark:text-d-bg rounded-2xl text-sm font-semibold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-black/10 dark:shadow-white/5"
              >
                Hire Me
              </a>
              <button
                onClick={copyEmail}
                className="px-8 py-4 bg-l-surface dark:bg-d-surface border border-l-border dark:border-d-border text-l-text dark:text-d-text rounded-2xl text-sm font-semibold tracking-wide hover:bg-l-hover dark:hover:bg-d-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 min-w-[140px]"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="inline-flex items-center gap-1.5"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Copied!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                    >
                      Copy Email
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-l-surface dark:bg-d-surface rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 border border-l-border/60 dark:border-d-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-l-muted/50 dark:bg-d-muted/50" />
          <p className="text-xs uppercase tracking-widest text-l-muted dark:text-d-muted m-0">
            Follow Me
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          {personalInfo.socials.github && (
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-l-border dark:border-d-border text-l-muted dark:text-d-muted hover:text-l-text dark:hover:text-d-text hover:bg-l-hover dark:hover:bg-d-hover transition-all duration-200"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          )}
          {personalInfo.socials.linkedin && (
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-l-border dark:border-d-border text-l-muted dark:text-d-muted hover:text-l-text dark:hover:text-d-text hover:bg-l-hover dark:hover:bg-d-hover transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          )}
        </div>
      </section>
    </>
  );
}
