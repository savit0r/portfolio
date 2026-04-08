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
      className="bg-l-surface dark:bg-d-surface rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 border border-l-border/60 dark:border-d-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative overflow-hidden"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-gradient-to-tr from-purple-500/5 to-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-3xl relative z-10 w-full">
        <AnimatedSection>
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-l-muted/50 dark:bg-d-muted/50" />
              <p className="text-xs uppercase tracking-widest text-l-muted dark:text-d-muted m-0">
                Blog
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-l-text dark:text-d-text break-words">
              Things I know
            </h2>
            <p className="text-base text-l-muted/80 dark:text-d-muted/80 mt-4 leading-relaxed max-w-xl tracking-tight">
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
                  whileHover={{ y: -3, scale: 1.003 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="relative bg-l-bg dark:bg-d-bg border border-l-border/50 dark:border-d-border/50 rounded-[1.5rem] sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-black/[0.04] dark:hover:shadow-black/[0.2] hover:border-l-text/10 dark:hover:border-d-text/10 transition-all duration-300"
                >
                  {/* Date + Read time */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-l-muted dark:text-d-muted tracking-wide">
                      {formatDate(post.date)}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-l-muted/30 dark:bg-d-muted/30" />
                    <span className="text-xs text-l-muted dark:text-d-muted tracking-wide">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-3 text-l-text dark:text-d-text group-hover:text-l-text dark:group-hover:text-d-text transition-colors break-words">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[15px] text-l-muted/80 dark:text-d-muted/80 leading-relaxed mb-5 tracking-tight line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[11px] font-medium bg-l-surface dark:bg-d-surface border border-l-border/60 dark:border-d-border/60 rounded-full text-l-muted dark:text-d-muted"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-xs text-l-muted/60 dark:text-d-muted/60 group-hover:text-l-text dark:group-hover:text-d-text transition-colors duration-200 inline-flex items-center gap-1">
                      Read more
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transform group-hover:translate-x-0.5 transition-transform duration-200"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
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
