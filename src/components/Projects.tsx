"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/portfolio";

const engineeringHighlights: Record<string, string> = {
  "Expense Tracker":
    "Built PDF/CSV stream export engine and relational database query indexing for fast category analytics.",
  "Portfolio Website":
    "Configured Next.js 16 App Router SSG static generation paired with custom Tailwind v4 CSS-first design system.",
  "Task Manager API":
    "Implemented JWT authentication middleware, Role-Based Access Control (RBAC), and sanitized MongoDB query pipelines.",
  "Algorithm Visualizer":
    "Engineered non-blocking step-by-step state animation controls powered by HTML5 Canvas API.",
};

const projectAnnotations: Record<string, string> = {
  "Expense Tracker": "full-stack & exports ✓",
  "Portfolio Website": "SSG & Turbopack →",
  "Task Manager API": "RBAC & JWT auth →",
  "Algorithm Visualizer": "Canvas API engine ✓",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="paper-sheet rounded-2xl p-6 sm:p-10 md:p-14 relative overflow-hidden border-2 border-l-border dark:border-d-border"
    >
      {/* Decorative tape elements */}
      <div className="paper-tape -top-3 left-10 rotate-[-2deg] z-20" />
      <div className="paper-tape -top-3 right-12 rotate-[2deg] z-20 hidden sm:block" />

      {/* Header: Title 03 / PROJECTS */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-dashed border-l-border dark:border-d-border">
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="red-ink font-bold text-sm">03 / PROJECTS</span>
          <span className="text-l-muted dark:text-d-muted">•</span>
          <span className="text-l-muted dark:text-d-muted font-medium">
            TECHNICAL ARCHIVE & BLUEPRINTS
          </span>
        </div>
        <span className="font-mono text-xs text-l-muted dark:text-d-muted">
          INDEX: {projects.length} DOCUMENTS
        </span>
      </div>

      <div className="max-w-3xl relative z-10 w-full">
        <AnimatedSection>
          <div className="mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-l-text dark:text-d-text break-words">
              Selected Engineering Work
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-handwritten red-ink text-lg rotate-[-1deg]">
                technical blueprints & production software &darr;
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Project Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project, index) => {
            const highlight = engineeringHighlights[project.title];
            const annotation = projectAnnotations[project.title];
            const rotationClass =
              index % 2 === 0 ? "sm:rotate-[-0.8deg]" : "sm:rotate-[0.8deg]";

            return (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{
                    duration: 0.25,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className={`group relative bg-[#FAF8F3] dark:bg-[#1C1C1A] border-2 border-[#DCD7CB] dark:border-[#2E2E2A] rounded-md p-6 h-full flex flex-col shadow-md hover:shadow-xl hover:border-red-ink/60 transition-all duration-300 ${rotationClass} hover:rotate-0`}
                >
                  {/* Header Row: Document Number + Annotation */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold red-ink">
                      [DOC-0{index + 1}]
                    </span>
                    {annotation && (
                      <span className="font-handwritten red-ink text-base">
                        {annotation}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold mb-2 tracking-tight text-l-text dark:text-d-text group-hover:text-red-ink transition-colors break-words">
                    {project.title}
                  </h3>

                  {/* One-Line Purpose / Description */}
                  <p className="text-sm text-l-muted dark:text-d-muted leading-relaxed mb-5 tracking-tight">
                    {project.description}
                  </p>

                  {/* Document Blueprint / Preview Box */}
                  <div className="relative mb-5 p-3.5 bg-l-bg dark:bg-d-bg border border-dashed border-l-border dark:border-d-border rounded overflow-hidden">
                    <span className="font-mono text-[10px] uppercase text-l-muted dark:text-d-muted tracking-wider block mb-1.5 font-bold">
                      {"// ENGINEERING HIGHLIGHT"}
                    </span>
                    <p className="font-mono text-xs text-l-text dark:text-d-text leading-relaxed">
                      {highlight || project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-mono bg-l-surface dark:bg-d-surface border border-l-border dark:border-d-border rounded text-l-muted dark:text-d-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Document Footer: Links & VIEW PROJECT Interaction */}
                  <div className="flex items-center justify-between pt-4 border-t border-l-border dark:border-d-border">
                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-l-muted dark:text-d-muted hover:text-red-ink transition-colors"
                        >
                          <svg
                            width="12"
                            height="12"
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
                          Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-l-muted dark:text-d-muted hover:text-red-ink transition-colors"
                        >
                          <svg
                            width="12"
                            height="12"
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

                    {/* Contextual VIEW PROJECT Action */}
                    <span className="font-mono text-xs red-ink font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      VIEW DOC &rarr;
                    </span>
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
