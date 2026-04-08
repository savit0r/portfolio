"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { products } from "@/data/portfolio";

const statusConfig = {
  live: {
    label: "Live",
    dotClass: "bg-green animate-pulse-dot",
    badgeClass:
      "bg-green/10 text-green border-green/20",
  },
  beta: {
    label: "Beta",
    dotClass: "bg-amber-400 animate-pulse-dot",
    badgeClass:
      "bg-amber-400/10 text-amber-400 border-amber-400/20",
  },
  "coming-soon": {
    label: "Coming Soon",
    dotClass: "bg-l-muted/50 dark:bg-d-muted/50",
    badgeClass:
      "bg-l-muted/10 dark:bg-d-muted/10 text-l-muted dark:text-d-muted border-l-border dark:border-d-border",
  },
};

export default function Products() {
  return (
    <section
      id="products"
      className="bg-l-surface dark:bg-d-surface rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 border border-l-border/60 dark:border-d-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative overflow-hidden"
    >
      {/* Subtle decorative gradient */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-green/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-tr from-green/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-3xl relative z-10 w-full">
        <AnimatedSection>
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-l-muted/50 dark:bg-d-muted/50" />
              <p className="text-xs uppercase tracking-widest text-l-muted dark:text-d-muted m-0">
                Products
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-l-text dark:text-d-text break-words">
              Things I&apos;m building
            </h2>
            <p className="text-base text-l-muted/80 dark:text-d-muted/80 mt-4 leading-relaxed max-w-xl tracking-tight">
              Side projects and products I&apos;m passionate about — from idea to
              launch.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-5">
          {products.map((product, index) => {
            const status = statusConfig[product.status];
            return (
              <AnimatedSection key={product.name} delay={index * 0.12}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.005 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="group relative bg-l-bg dark:bg-d-bg border border-l-border/50 dark:border-d-border/50 rounded-[1.5rem] sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-black/[0.04] dark:hover:shadow-black/[0.2] hover:border-l-text/10 dark:hover:border-d-text/10 transition-all duration-300"
                >
                  {/* Top row: Icon + Status */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-l-border/50 to-l-border/20 dark:from-d-border/50 dark:to-d-border/20 flex items-center justify-center text-2xl sm:text-3xl shadow-sm">
                      {product.icon}
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border ${status.badgeClass}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${status.dotClass}`}
                      />
                      {status.label}
                    </span>
                  </div>

                  {/* Name + Tagline */}
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1.5 tracking-tight text-l-text dark:text-d-text">
                    {product.name}
                  </h3>
                  <p className="text-sm text-l-muted dark:text-d-muted mb-4 tracking-tight">
                    {product.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[15px] sm:text-base text-l-muted/80 dark:text-d-muted/80 leading-relaxed mb-6 tracking-tight">
                    {product.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 text-[11px] font-medium bg-l-surface dark:bg-d-surface border border-l-border/60 dark:border-d-border/60 rounded-full text-l-muted dark:text-d-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-5 pt-5 border-t border-l-border/50 dark:border-d-border/50">
                    {product.url && (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-l-muted dark:text-d-muted hover:text-l-text dark:hover:text-d-text transition-colors duration-200"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Visit
                      </a>
                    )}
                    {product.githubUrl && (
                      <a
                        href={product.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-l-muted dark:text-d-muted hover:text-l-text dark:hover:text-d-text transition-colors duration-200"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
