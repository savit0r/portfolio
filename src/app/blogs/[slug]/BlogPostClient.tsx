"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-xl sm:text-2xl font-bold tracking-tight text-l-text dark:text-d-text mt-10 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-lg sm:text-xl font-semibold tracking-tight text-l-text dark:text-d-text mt-8 mb-3"
        >
          {line.slice(4)}
        </h3>
      );
    } else if (/^\d+\.\s/.test(line)) {
      // Collect consecutive numbered lines
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol
          key={`ol-${i}`}
          className="list-decimal list-inside space-y-2 mb-6 text-[15px] sm:text-base text-l-muted/90 dark:text-d-muted/90 leading-relaxed"
        >
          {listItems.map((item, idx) => (
            <li key={idx} className="pl-2">
              {item}
            </li>
          ))}
        </ol>
      );
      continue;
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul
          key={`ul-${i}`}
          className="list-disc list-inside space-y-2 mb-6 text-[15px] sm:text-base text-l-muted/90 dark:text-d-muted/90 leading-relaxed"
        >
          {listItems.map((item, idx) => (
            <li key={idx} className="pl-2">
              {item}
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p
          key={i}
          className="text-[15px] sm:text-base text-l-muted/90 dark:text-d-muted/90 leading-relaxed mb-5 tracking-tight"
        >
          {line}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <div className="bg-l-bg dark:bg-d-bg min-h-screen transition-colors duration-300 font-sans selection:bg-l-text selection:text-l-surface dark:selection:bg-d-text dark:selection:text-d-surface">
      {/* Top bar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 dark:bg-[#161616]/80 backdrop-blur-xl rounded-full px-2 py-2 shadow-lg border border-l-border dark:border-d-border"
      >
        <div className="flex items-center gap-1">
          <Link
            href="/#blogs"
            className="px-4 py-2 text-sm text-l-muted dark:text-d-muted hover:text-l-text dark:hover:text-d-text transition-colors duration-200 rounded-full hover:bg-l-border/30 dark:hover:bg-d-border/30 inline-flex items-center gap-1.5"
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
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back
          </Link>
          <div className="w-px h-5 bg-l-border dark:bg-d-border mx-1" />
          <ThemeToggle />
        </div>
      </motion.header>

      <div className="w-full flex justify-center pt-32 pb-20">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full max-w-2xl px-4"
        >
          {/* Blog post card */}
          <div className="bg-l-surface dark:bg-d-surface rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 border border-l-border/60 dark:border-d-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-tr from-purple-500/5 to-blue-500/5 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Meta */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs text-l-muted dark:text-d-muted tracking-wide">
                  {formatDate(post.date)}
                </span>
                <span className="w-1 h-1 rounded-full bg-l-muted/30 dark:bg-d-muted/30" />
                <span className="text-xs text-l-muted dark:text-d-muted tracking-wide">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-l-text dark:text-d-text mb-6 break-words leading-[1.1]">
                {post.title}
              </h1>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[11px] font-medium bg-l-bg dark:bg-d-bg border border-l-border/60 dark:border-d-border/60 rounded-full text-l-muted dark:text-d-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-l-border dark:via-d-border to-transparent mb-10" />

              {/* Content */}
              <div className="prose-custom">{renderContent(post.content)}</div>

              {/* Bottom divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-l-border dark:via-d-border to-transparent mt-12 mb-8" />

              {/* Back link */}
              <Link
                href="/#blogs"
                className="inline-flex items-center gap-2 text-sm text-l-muted dark:text-d-muted hover:text-l-text dark:hover:text-d-text transition-colors duration-200 group"
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
                  className="transform group-hover:-translate-x-0.5 transition-transform duration-200"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to all posts
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
