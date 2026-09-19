"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { blogPosts } from "@/data/portfolio";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="paper-sheet rounded-2xl p-6 sm:p-10 md:p-14 relative overflow-hidden"
    >
      <div className="max-w-3xl relative z-10 w-full">
        <AnimatedSection>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4 font-mono text-xs">
              <span className="red-ink font-bold text-sm">05 / BLOG</span>
              <span className="text-l-muted dark:text-d-muted">•</span>
              <span className="text-l-muted dark:text-d-muted font-medium">
                WRITING & TECHNICAL NOTES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-l-text dark:text-d-text break-words">
              Things I know
            </h2>
            <p className="text-base text-l-muted dark:text-d-muted mt-3 leading-relaxed max-w-xl tracking-tight">
              Thoughts, learnings, and deep dives into the things I&apos;m
              passionate about.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-4">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.08}>
              <Link href={`/blogs/${post.slug}`} className="block group">
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{
                    duration: 0.25,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="relative bg-l-bg dark:bg-d-bg border border-l-border dark:border-d-border rounded-xl p-6 sm:p-7 hover:border-red-ink/40 transition-colors duration-200"
                >
                  {/* Date + Read time */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-l-muted dark:text-d-muted tracking-wide">
                      {formatDate(post.date)}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-red-ink" />
                    <span className="text-xs font-mono text-l-muted dark:text-d-muted tracking-wide">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight mb-2 text-l-text dark:text-d-text group-hover:text-red-ink transition-colors break-words">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-l-muted dark:text-d-muted leading-relaxed mb-4 tracking-tight line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono bg-l-surface dark:bg-d-surface border border-l-border dark:border-d-border rounded text-l-muted dark:text-d-muted"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-xs font-mono text-l-muted dark:text-d-muted group-hover:text-red-ink transition-colors duration-200 inline-flex items-center gap-1">
                      Read post &rarr;
                    </span>
                  </div>
                </motion.article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
