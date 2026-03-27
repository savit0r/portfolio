"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="bg-l-surface dark:bg-d-surface rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 border border-l-border/60 dark:border-d-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative overflow-hidden">
      <div className="max-w-3xl relative z-10 w-full">
        <AnimatedSection>
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-l-muted/50 dark:bg-d-muted/50" />
              <p className="text-xs uppercase tracking-widest text-l-muted dark:text-d-muted m-0">
                Projects
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-l-text dark:text-d-text break-words">
              Selected work
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative bg-l-bg dark:bg-d-bg border border-l-border/50 dark:border-d-border/50 rounded-[1.5rem] sm:rounded-3xl p-6 sm:p-8 h-full flex flex-col hover:shadow-2xl hover:shadow-black/[0.04] dark:hover:shadow-black/[0.2] hover:border-l-text/10 dark:hover:border-d-text/10 transition-all duration-300"
              >
                {/* Project number */}
                <span className="text-[11px] uppercase tracking-widest text-l-muted/60 dark:text-d-muted/60 mb-5 font-medium">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 tracking-tight text-l-text dark:text-d-text group-hover:text-l-text dark:group-hover:text-d-text transition-colors break-words">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] sm:text-base text-l-muted/90 dark:text-d-muted/90 leading-relaxed mb-6 flex-grow tracking-tight">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
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
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
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
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
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
          ))}
        </div>
      </div>
    </section>
  );
}
