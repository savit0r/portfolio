"use client";

import AnimatedSection from "./AnimatedSection";
import { experience } from "@/data/portfolio";

const typeLabels: Record<string, string> = {
  work: "WORK / INTERNSHIP",
  education: "ACADEMIC / DEGREE",
  milestone: "MILESTONE / SELF-DRIVEN",
};

const typeAnnotations: Record<string, string> = {
  "Self-Learning & Growth": "foundation built ✓",
  "Web Development Intern": "hands-on startup dev →",
  "Bachelor's in Computer Science": "CS core fundamentals ✓",
  "Started Coding Journey": "first line of Java code →",
};

export default function Experience() {
  return (
    <section
      id="journey"
      className="paper-sheet rounded-2xl p-6 sm:p-10 md:p-14 relative overflow-hidden border-2 border-l-border dark:border-d-border"
    >
      {/* Decorative tape elements */}
      <div className="paper-tape -top-3 left-10 rotate-[-2deg] z-20" />
      <div className="paper-tape -top-3 right-14 rotate-[1.5deg] z-20 hidden sm:block" />

      {/* Header: Title 02 / JOURNEY */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-dashed border-l-border dark:border-d-border">
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="red-ink font-bold text-sm">02 / JOURNEY</span>
          <span className="text-l-muted dark:text-d-muted">•</span>
          <span className="text-l-muted dark:text-d-muted font-medium">
            FIELD LOGS & TIMELINE
          </span>
        </div>
        <span className="font-mono text-xs text-l-muted dark:text-d-muted">
          CHRONOLOGICAL ARCHIVE
        </span>
      </div>

      <div className="max-w-3xl relative z-10 w-full">
        <AnimatedSection>
          <div className="mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-l-text dark:text-d-text break-words">
              My path so far
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-handwritten red-ink text-lg rotate-[-2deg]">
                engineering progress log 2020 &rarr; present
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Timeline Container */}
        <div className="relative pl-4 sm:pl-8">
          {/* Vertical Red Ink Ruler Line */}
          <div className="absolute left-0 sm:left-2 top-2 bottom-4 w-px bg-red-ink/40 border-l border-dashed border-red-ink/40" />

          <div className="flex flex-col gap-8">
            {experience.map((entry, index) => {
              const annotation = typeAnnotations[entry.title];
              const rotationClass =
                index % 2 === 0 ? "sm:rotate-[-0.6deg]" : "sm:rotate-[0.6deg]";

              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="relative">
                    {/* Red Margin Circle Marker */}
                    <div className="absolute -left-4 sm:-left-8 top-5 w-3 h-3 rounded-full bg-l-surface dark:bg-d-surface border-2 border-red-ink z-10 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-red-ink" />
                    </div>

                    {/* Dated Index Card */}
                    <div
                      className={`group relative bg-l-bg dark:bg-d-bg border border-l-border dark:border-d-border rounded-xl p-5 sm:p-6 shadow-xs hover:border-red-ink/50 transition-transform duration-200 ${rotationClass} hover:rotate-0`}
                    >
                      {/* Header Row: Log Index + Period + Type Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className="red-ink font-bold">
                            [LOG 0{index + 1}]
                          </span>
                          <span className="px-2.5 py-0.5 text-xs font-mono font-bold red-ink bg-red-ink/5 dark:bg-red-ink/10 rounded border border-red-ink/20">
                            {entry.period}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] tracking-widest text-l-muted dark:text-d-muted uppercase font-semibold">
                          {typeLabels[entry.type] || entry.type}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-l-text dark:text-d-text mb-1 break-words">
                        {entry.title}
                      </h3>
                      <p className="font-mono text-xs text-l-muted dark:text-d-muted font-medium mb-3">
                        @ {entry.company}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-l-muted dark:text-d-muted leading-relaxed tracking-tight">
                        {entry.description}
                      </p>

                      {/* Red Ink Marginalia / Correction Mark */}
                      {annotation && (
                        <div className="mt-4 pt-3 border-t border-dashed border-l-border dark:border-d-border flex justify-end">
                          <span className="font-handwritten red-ink text-base">
                            {annotation}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
