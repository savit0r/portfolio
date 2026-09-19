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
    <div className="bg-l-bg dark:bg-d-bg bg-notebook-grid min-h-screen transition-colors duration-300 font-sans selection:bg-l-text selection:text-l-surface dark:selection:bg-d-text dark:selection:text-d-surface">
      {/* Top bar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-l-surface/90 dark:bg-d-surface/90 backdrop-blur-md rounded-lg px-2 py-1.5 shadow-sm border border-l-border dark:border-d-border"
      >
        <div className="flex items-center gap-1">
          <Link
            href="/#blogs"
            className="px-3 py-1.5 text-xs font-mono text-l-muted dark:text-d-muted hover:text-red-ink transition-colors duration-200 rounded hover:bg-l-border/30 dark:hover:bg-d-border/30 inline-flex items-center gap-1.5"
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
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back
          </Link>
          <div className="w-px h-4 bg-l-border dark:bg-d-border mx-1" />
          <ThemeToggle />
        </div>
      </motion.header>

      <div className="w-full flex justify-center pt-28 pb-20">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full max-w-2xl px-4"
        >
          {/* Blog post card */}
          <div className="paper-sheet rounded-2xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="relative z-10">
              {/* Meta */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-mono text-l-muted dark:text-d-muted tracking-wide">
                  {formatDate(post.date)}
                </span>
                <span className="w-1 h-1 rounded-full bg-red-ink" />
                <span className="text-xs font-mono text-l-muted dark:text-d-muted tracking-wide">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-l-text dark:text-d-text mb-6 break-words leading-[1.12]">
                {post.title}
              </h1>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] font-mono bg-l-bg dark:bg-d-bg border border-l-border dark:border-d-border rounded text-l-muted dark:text-d-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-l-border dark:bg-d-border mb-8" />

              {/* Content */}
              <div className="prose-custom">{renderContent(post.content)}</div>

              {/* Bottom divider */}
              <div className="w-full h-px bg-l-border dark:bg-d-border mt-10 mb-6" />

              {/* Back link */}
              <Link
                href="/#blogs"
                className="inline-flex items-center gap-2 text-xs font-mono text-l-muted dark:text-d-muted hover:text-red-ink transition-colors duration-200 group"
              >
                &larr; Back to all posts
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
