"use client";

import AnimatedSection from "./AnimatedSection";
import { personalInfo, skills } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="bg-l-surface dark:bg-d-surface rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 border border-l-border/60 dark:border-d-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative overflow-hidden">
      <div className="max-w-2xl relative z-10 w-full overflow-hidden">
        <AnimatedSection>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-l-muted/50 dark:bg-d-muted/50" />
            <p className="text-xs uppercase tracking-widest text-l-muted dark:text-d-muted m-0">
              About
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-tighter text-l-text dark:text-d-text break-words">
            A bit about me
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-l-muted/90 dark:text-d-muted/90 leading-relaxed text-lg sm:text-xl mb-12 tracking-tight">
            {personalInfo.bio}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-l-muted/50 dark:bg-d-muted/50" />
            <p className="text-xs uppercase tracking-widest text-l-muted dark:text-d-muted m-0">
              Skills & Technologies
            </p>
          </div>
          <div className="flex flex-wrap justify-start gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 text-[13px] font-medium bg-l-bg dark:bg-d-bg border border-l-border/50 dark:border-d-border/50 rounded-full text-l-text dark:text-d-text hover:bg-l-hover dark:hover:bg-d-hover transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
