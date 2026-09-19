"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import AnnotationDraw from "./AnnotationDraw";
import ParallaxPaper from "./ParallaxPaper";

const PLACEHOLDER_AVATAR = "/profile-placeholder.svg";

function normalizePublicPath(path: string) {
  if (!path) return PLACEHOLDER_AVATAR;
  return path.startsWith("/") ? path : `/${path}`;
}

export default function Hero() {
  const [avatarSrc, setAvatarSrc] = useState(() =>
    normalizePublicPath(personalInfo.avatar),
  );

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="paper-sheet rounded-2xl p-5 sm:p-10 md:p-14 relative overflow-hidden border-2 border-l-border dark:border-d-border"
    >
      {/* Notebook Binder / Paper Tape Elements */}
      <div className="paper-tape -top-3 left-6 sm:left-12 rotate-[-3deg] z-20" />
      <div className="paper-tape -top-3 right-10 sm:right-16 rotate-[2deg] z-20 hidden sm:block" />

      {/* Top Cover Header: Archive number + Date stamp + Availability */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-10 pb-4 border-b border-dashed border-l-border dark:border-d-border">
        <div className="flex items-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-xs">
          <span className="red-ink font-bold">VOL. 01 // ARCHIVE</span>
          <span className="text-l-muted dark:text-d-muted">•</span>
          <span className="text-l-muted dark:text-d-muted font-medium">2024 &rarr; 2026</span>
        </div>

        {personalInfo.available && (
          <div className="paper-stamp text-[10px] sm:text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-red-ink opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-ink" />
            </span>
            Available for work
          </div>
        )}
      </div>

      {/* Main Cover Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
        {/* Left Column: Editorial Title, Subtitle, Stack, CTAs */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Subtitle / Role */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-2 sm:mb-3"
          >
            <span className="w-2 h-2 bg-red-ink rounded-full" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold red-ink">
              Software Engineer
            </span>
          </motion.div>

          {/* Large Editorial Name Heading */}
          <div className="relative mb-3 sm:mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-l-text dark:text-d-text leading-[1.08] break-words"
            >
              ROHIT SATRE
            </motion.h1>
            <AnnotationDraw type="underline" className="mt-1 max-w-[180px] sm:max-w-[220px]" />
          </div>

          {/* Tagline / Bio summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-l-muted dark:text-d-muted max-w-xl mb-5 sm:mb-6 leading-relaxed tracking-tight"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Recommended Tech Focus Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8"
          >
            {["Java", "Spring Boot", "React", "Backend / Full Stack"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] sm:text-xs font-mono font-semibold bg-l-bg dark:bg-d-bg border border-l-border dark:border-d-border rounded text-l-text dark:text-d-text"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3.5 bg-l-text dark:bg-d-text text-l-bg dark:text-d-bg rounded-lg text-xs font-mono font-bold tracking-wider uppercase hover:opacity-95 transition-all duration-200 shadow-sm text-center flex items-center justify-center gap-2 group"
            >
              Open Portfolio
              <span className="transform group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 bg-l-surface dark:bg-d-surface border border-l-border dark:border-d-border text-l-text dark:text-d-text rounded-lg text-xs font-mono font-bold tracking-wider uppercase hover:border-red-ink/50 transition-all duration-200 text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Column: Clipped Polaroid Image Card with Annotations & Subtle Parallax */}
        <ParallaxPaper speed={-10} className="lg:col-span-5 flex justify-center lg:justify-end relative mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full flex justify-center lg:justify-end"
          >
            {/* Polaroid Frame */}
            <div className="relative p-3 pb-7 bg-[#FAF8F3] dark:bg-[#1E1E1B] border border-[#DCD7CB] dark:border-[#2E2E2A] rounded-md shadow-lg rotate-0 sm:rotate-[2.5deg] hover:rotate-0 transition-transform duration-300 max-w-[240px] sm:max-w-[280px] w-full">
              {/* Top Tape */}
              <div className="paper-tape -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg] z-20" />

              {/* Photo Container */}
              <div className="relative aspect-square w-full rounded overflow-hidden grayscale contrast-[1.08] bg-[#EAE6DC] dark:bg-[#141412]">
                <Image
                  src={avatarSrc}
                  alt={`${personalInfo.name} — engineering photo`}
                  fill
                  sizes="(max-width: 640px) 260px, 290px"
                  className="object-cover"
                  priority
                  unoptimized={avatarSrc.endsWith(".svg")}
                  onError={() => setAvatarSrc(PLACEHOLDER_AVATAR)}
                />
              </div>

              {/* Polaroid Bottom Handwritten Note */}
              <div className="mt-3 text-center">
                <p className="font-handwritten red-ink text-xl sm:text-2xl leading-none">
                  that&apos;s me &rarr; Rohit
                </p>
              </div>
            </div>

            {/* Floating Margin Note / Annotation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-2 sm:left-4 font-handwritten red-ink text-lg sm:text-xl rotate-[-6deg] hidden sm:block bg-l-surface/80 dark:bg-d-surface/80 px-2.5 py-1 border border-red-ink/30 rounded"
            >
              dev notebook vol. 01 &darr;
            </motion.div>
          </motion.div>
        </ParallaxPaper>
      </div>
    </motion.section>
  );
}
