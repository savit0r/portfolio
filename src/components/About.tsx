"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { personalInfo, skills, experience } from "@/data/portfolio";

const PLACEHOLDER_AVATAR = "/profile-placeholder.svg";

function normalizePublicPath(path: string) {
  if (!path) return PLACEHOLDER_AVATAR;
  return path.startsWith("/") ? path : `/${path}`;
}

export default function About() {
  const [imgSrc, setImgSrc] = useState(() =>
    normalizePublicPath(personalInfo.avatar),
  );

  const educationEntry = experience.find((item) => item.type === "education") || {
    title: "Bachelor's in Computer Science",
    company: "University",
    period: "2020 — 2024",
    description:
      "Studied core CS fundamentals including Operating Systems, DBMS, Computer Networks, and Software Engineering.",
  };

  return (
    <section
      id="about"
      className="paper-sheet rounded-2xl p-6 sm:p-10 md:p-14 relative overflow-hidden border-2 border-l-border dark:border-d-border"
    >
      {/* Decorative notebook page elements */}
      <div className="paper-tape -top-3 left-10 rotate-[-2deg] z-20" />
      <div className="paper-tape -top-3 right-12 rotate-[3deg] z-20 hidden sm:block" />

      {/* Header: Title 01 / ABOUT */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-dashed border-l-border dark:border-d-border">
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="red-ink font-bold text-sm">01 / ABOUT</span>
          <span className="text-l-muted dark:text-d-muted">•</span>
          <span className="text-l-muted dark:text-d-muted font-medium">
            PERSONAL ARCHIVE
          </span>
        </div>
        <span className="font-mono text-xs text-l-muted dark:text-d-muted">
          LOCATION: {personalInfo.location.toUpperCase()}
        </span>
      </div>

      {/* Editorial Grid: Asymmetric on Desktop, Single-Column on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Column (7 cols): Heading, Intro, Engineering Focus, Education */}
        <div className="lg:col-span-7 flex flex-col text-left">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-l-text dark:text-d-text break-words">
              Engineering Profile & Notes
            </h2>
          </AnimatedSection>

          {/* Short Introduction */}
          <AnimatedSection delay={0.1}>
            <div className="relative mb-8 p-5 bg-l-bg dark:bg-d-bg border border-l-border dark:border-d-border rounded-xl">
              <span className="font-mono text-[10px] uppercase text-l-muted dark:text-d-muted tracking-widest block mb-2 font-bold">
                {"// BIO SUMMARY"}
              </span>
              <p className="text-base sm:text-lg text-l-text dark:text-d-text leading-relaxed tracking-tight">
                {personalInfo.bio}
              </p>
              {/* Subtle Red Annotation */}
              <span className="font-handwritten red-ink text-lg absolute -bottom-4 right-4 rotate-[-3deg] hidden sm:block bg-l-surface dark:bg-d-surface px-2 rounded border border-red-ink/30 shadow-xs">
                clean & production-ready &rarr;
              </span>
            </div>
          </AnimatedSection>

          {/* Current Engineering Focus */}
          <AnimatedSection delay={0.2}>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-ink" />
                <h3 className="font-mono text-xs uppercase tracking-widest font-bold red-ink m-0">
                  Current Engineering Focus
                </h3>
              </div>
              <p className="text-sm sm:text-base text-l-muted dark:text-d-muted leading-relaxed tracking-tight">
                Deep-diving into full-stack web architectures with Next.js, React, Node.js, and Java.
                Specialized in building scalable REST APIs, relational database design, and Data Structures & Algorithms.
              </p>
            </div>
          </AnimatedSection>

          {/* Education Card */}
          <AnimatedSection delay={0.3}>
            <div className="relative p-5 bg-l-surface dark:bg-d-surface border border-l-border dark:border-d-border rounded-xl shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold red-ink uppercase tracking-wider">
                  🎓 ACADEMIC RECORD
                </span>
                <span className="font-mono text-xs text-l-muted dark:text-d-muted font-medium">
                  {educationEntry.period}
                </span>
              </div>
              <h4 className="font-serif text-lg font-bold text-l-text dark:text-d-text mb-1">
                {educationEntry.title}
              </h4>
              <p className="font-mono text-xs text-l-muted dark:text-d-muted mb-3">
                @ {educationEntry.company}
              </p>
              <p className="text-xs sm:text-sm text-l-muted dark:text-d-muted leading-relaxed">
                {educationEntry.description}
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Right Column (5 cols): Taped Photo Card + Technical Skills */}
        <div className="lg:col-span-5 flex flex-col gap-6 items-center lg:items-end">
          {/* Taped Profile Photo Card */}
          <AnimatedSection delay={0.15}>
            <div className="relative p-3 pb-7 bg-[#FAF8F3] dark:bg-[#1E1E1B] border border-[#DCD7CB] dark:border-[#2E2E2A] rounded-md shadow-lg rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300 max-w-[240px] sm:max-w-[270px] w-full">
              {/* Paper Tape */}
              <div className="paper-tape -top-3 left-1/2 -translate-x-1/2 rotate-[1.5deg] z-20" />

              {/* Photo */}
              <div className="relative aspect-square w-full rounded overflow-hidden grayscale contrast-[1.06] bg-[#EAE6DC] dark:bg-[#141412]">
                <Image
                  src={imgSrc}
                  alt={`${personalInfo.name} — profile`}
                  fill
                  sizes="(max-width: 640px) 240px, 270px"
                  className="object-cover"
                  unoptimized={imgSrc.endsWith(".svg")}
                  onError={() => setImgSrc(PLACEHOLDER_AVATAR)}
                />
              </div>

              {/* Photo Caption */}
              <div className="mt-2.5 text-center">
                <p className="font-handwritten red-ink text-lg leading-none">
                  fig 01. Rohit // Developer
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Technical Skills Index Card */}
          <AnimatedSection delay={0.25} className="w-full">
            <div className="relative p-5 bg-l-bg dark:bg-d-bg border border-l-border dark:border-d-border rounded-xl w-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs font-bold red-ink">{"// SKILLS"}</span>
                <p className="text-xs uppercase tracking-widest text-l-muted dark:text-d-muted m-0 font-medium">
                  Technical Inventory
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono bg-l-surface dark:bg-d-surface border border-l-border dark:border-d-border rounded text-l-text dark:text-d-text hover:border-red-ink/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Handwritten Note at bottom of skills */}
              <div className="mt-4 pt-3 border-t border-dashed border-l-border dark:border-d-border text-right">
                <span className="font-handwritten red-ink text-base">
                  CS fundamentals + system design &uarr;
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
