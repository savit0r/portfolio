"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

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
    <section
      id="home"
      className="bg-l-surface dark:bg-d-surface rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 border border-l-border/60 dark:border-d-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden relative"
    >
      <div className="max-w-2xl text-left relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-l-muted/50 dark:bg-d-muted/50" />
            <p className="text-xs uppercase tracking-widest text-l-muted dark:text-d-muted m-0">
              Software Developer
            </p>
          </div>
          
          {/* Availability badge */}
          {personalInfo.available && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold tracking-wide lowercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for work
            </div>
          )}
        </motion.div>

        {/* Avatar + main heading — image sits below the top row, to the left of the name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mb-6 sm:mb-8"
        >
          <div className="relative shrink-0 mx-auto sm:mx-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-l-border/60 dark:ring-d-border/60 shadow-md bg-l-bg dark:bg-d-bg">
            <Image
              src={avatarSrc}
              alt={`${personalInfo.name} — profile photo`}
              fill
              sizes="(max-width: 640px) 96px, 128px"
              className="object-cover"
              priority
              unoptimized={avatarSrc.endsWith(".svg")}
              onError={() => setAvatarSrc(PLACEHOLDER_AVATAR)}
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1.05] text-l-text dark:text-d-text whitespace-normal break-words text-center sm:text-left flex-1 min-w-0"
          >
            I&apos;m {personalInfo.name}
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-xl sm:text-2xl text-l-muted/90 dark:text-d-muted/90 max-w-xl mb-12 leading-relaxed tracking-tight"
        >
          {personalInfo.role} from {personalInfo.location}.{" "}
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-l-text dark:bg-d-text text-l-bg dark:text-d-bg rounded-2xl text-sm font-semibold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-black/10 dark:shadow-white/5"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-l-surface dark:bg-d-surface border border-l-border dark:border-d-border text-l-text dark:text-d-text rounded-2xl text-sm font-semibold tracking-wide hover:bg-l-hover dark:hover:bg-d-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
