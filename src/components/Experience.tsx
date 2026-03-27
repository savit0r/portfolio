"use client";

import AnimatedSection from "./AnimatedSection";
import { experience } from "@/data/portfolio";

const typeIcons: Record<string, string> = {
  work: "💼",
  education: "🎓",
  milestone: "⭐",
};

export default function Experience() {
  return (
    <section id="journey" className="bg-l-surface dark:bg-d-surface rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 border border-l-border/60 dark:border-d-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative overflow-hidden">
      <div className="max-w-2xl relative z-10 w-full overflow-hidden">
        <AnimatedSection>
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-l-muted/50 dark:bg-d-muted/50" />
              <p className="text-xs uppercase tracking-widest text-l-muted dark:text-d-muted m-0">
                Journey
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-l-text dark:text-d-text break-words">
              My path so far
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7.5px] top-3 bottom-0 w-px bg-gradient-to-b from-transparent via-l-border/80 dark:via-d-border/80 to-transparent" />

          <div className="flex flex-col gap-10">
            {experience.map((entry, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative pl-10">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-l-surface dark:bg-d-surface border-2 border-l-border/80 dark:border-d-border/80 flex items-center justify-center shadow-sm">
                    <div className="w-[5px] h-[5px] rounded-full bg-l-muted dark:bg-d-muted" />
                  </div>

                  {/* Content */}
                  <div className="group">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{typeIcons[entry.type]}</span>
                      <span className="text-xs text-l-muted dark:text-d-muted tracking-wide">
                        {entry.period}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-1 text-l-text dark:text-d-text break-words">
                      {entry.title}
                    </h3>
                    <p className="text-[15px] text-l-muted dark:text-d-muted font-medium mb-3">
                      {entry.company}
                    </p>
                    <p className="text-[15px] sm:text-base text-l-muted/90 dark:text-d-muted/90 leading-relaxed tracking-tight">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
