export const personalInfo = {
  name: "Rohit",
  /** Square image in `public/` — path must start with `/` (e.g. `/avatar.jpg`). */
  avatar: "/_efTabMj_400x400.jpg",
  role: "Software Developer",
  tagline: "Full Stack Developer | Building Scalable Web Applications",
  bio: "I build production-ready web apps using modern technologies like Next.js, Node.js, and databases. Focused on solving real-world problems through clean and efficient code.",
  email: "rohitsatre05@gmail.com",
  location: "India",
  available: true,
  socials: {
    github: "https://github.com/savit0r",
    linkedin: "https://linkedin.com/in/rohit",
  },
};

export const skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "DSA",
  "HTML/CSS",
  "Tailwind CSS",
  "Git",
  "SQL",
  "REST APIs",
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense management app with analytics, category tracking, and PDF/CSV export functionality.",
    tech: ["React", "Node.js", "MySQL", "Chart.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/savit0r",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, minimal developer portfolio built with Next.js, Tailwind CSS, and Framer Motion with dark/light mode.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/rohit",
  },
  {
    title: "Task Manager API",
    description:
      "RESTful API for task management with authentication, CRUD operations, and role-based access control.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/rohit",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Interactive visualizer for sorting and pathfinding algorithms with step-by-step animation controls.",
    tech: ["React", "TypeScript", "Canvas API"],
    liveUrl: "#",
    githubUrl: "https://github.com/rohit",
  },
];

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education" | "milestone";
}

export const experience: ExperienceEntry[] = [
  {
    title: "Self-Learning & Growth",
    company: "Independent",
    period: "2023 — Present",
    description:
      "Dedicated a gap year to deep-dive into Data Structures & Algorithms, full-stack web development, and building real-world projects. This period of intense self-driven learning became the foundation of my technical skills.",
    type: "milestone",
  },
  {
    title: "Web Development Intern",
    company: "Startup Project",
    period: "2023",
    description:
      "Worked on building responsive web interfaces, collaborating with a small team to deliver features on tight timelines. Gained hands-on experience with React and modern JavaScript tooling.",
    type: "work",
  },
  {
    title: "Bachelor's in Computer Science",
    company: "University",
    period: "2020 — 2024",
    description:
      "Studied core CS fundamentals including Operating Systems, DBMS, Computer Networks, and Software Engineering. Built multiple academic and personal projects.",
    type: "education",
  },
  {
    title: "Started Coding Journey",
    company: "Self-taught",
    period: "2020",
    description:
      "Began learning programming with Java. Fell in love with problem-solving and building things from scratch. Started competitive programming and small web projects.",
    type: "milestone",
  },
];

export interface Product {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  status: "live" | "beta" | "coming-soon";
  url?: string;
  githubUrl?: string;
  icon: string;
}

export const products: Product[] = [
  {
    name: "Spendora",
    tagline: "Smart expense tracking, simplified.",
    description:
      "A full-stack expense management app with rich analytics dashboards, category-based tracking, and PDF/CSV export. Built for individuals who want clarity on their finances.",
    tech: ["React", "Node.js", "MySQL", "Chart.js"],
    status: "live",
    url: "#",
    githubUrl: "https://github.com/savit0r",
    icon: "💰",
  },
  {
    name: "CodeArena",
    tagline: "Visualize algorithms in real-time.",
    description:
      "An interactive playground that animates sorting and pathfinding algorithms step-by-step. Perfect for students and interview prep — watch the logic unfold visually.",
    tech: ["React", "TypeScript", "Canvas API"],
    status: "beta",
    url: "#",
    githubUrl: "https://github.com/savit0r",
    icon: "⚡",
  },
  {
    name: "DevFlow",
    tagline: "Project management for solo devs.",
    description:
      "A lightweight task manager with kanban boards, time tracking, and GitHub integration. Designed for indie hackers and solo developers who want to stay organized.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    status: "coming-soon",
    githubUrl: "https://github.com/savit0r",
    icon: "🚀",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-i-chose-nextjs-for-my-portfolio",
    title: "Why I Chose Next.js for My Portfolio",
    excerpt:
      "A deep dive into why Next.js was the perfect framework for building a modern developer portfolio — from SSR benefits to the app router architecture.",
    date: "2026-04-01",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Dev"],
    content: `Building a portfolio site might seem like overkill for a framework like Next.js, but hear me out — there are real, practical reasons it was the right call.

## The Problem with Static HTML

When I started, I considered plain HTML/CSS. It's fast, simple, and gets the job done. But I wanted something that could grow with me — a blog section, dynamic project cards pulled from data, dark mode with zero flash, and smooth page transitions.

## Why Not Just React?

A vanilla Create React App would work, but SEO matters for a portfolio. Recruiters Google you. Next.js gives me server-side rendering out of the box, which means my site is crawlable, fast on first load, and scores well on Lighthouse.

## The App Router Advantage

Next.js's app router made structuring the site intuitive. Each section lives in its own component, and adding new pages (like this blog!) is as simple as creating a new folder. File-based routing just clicks.

## Tailwind CSS v4 + Framer Motion

Pairing Next.js with Tailwind CSS v4's new CSS-first configuration and Framer Motion for animations gave me the perfect stack. Tailwind handles the design system — consistent spacing, colors, typography — while Framer Motion adds that polished, premium feel with scroll-triggered animations.

## The Takeaway

For a portfolio that's more than a static page — one that's a living, breathing showcase of your skills — Next.js is hard to beat. It scales with your ambitions while keeping the developer experience delightful.`,
  },
  {
    slug: "mastering-dsa-my-approach",
    title: "Mastering DSA: My Self-Learning Approach",
    excerpt:
      "How I structured my Data Structures & Algorithms journey during my gap year — the resources, strategies, and mindset shifts that made the difference.",
    date: "2026-03-15",
    readTime: "7 min read",
    tags: ["DSA", "Java", "Career"],
    content: `During my gap year, I committed to truly understanding Data Structures & Algorithms — not just memorizing patterns, but building genuine problem-solving intuition.

## Starting with the Fundamentals

I began with arrays and strings. Simple? Sure. But I spent weeks on them, solving 50+ problems each before moving on. The goal wasn't speed — it was depth.

## The Progression That Worked

My roadmap looked like this:

1. Arrays & Strings — Two pointers, sliding window, prefix sums
2. Linked Lists — Reversal patterns, fast/slow pointers
3. Stacks & Queues — Monotonic stacks, BFS
4. Trees & Graphs — DFS, BFS, backtracking
5. Dynamic Programming — Started with 1D, graduated to 2D
6. Advanced — Tries, segment trees, union-find

## The Mindset Shift

The biggest unlock was moving from "I need to solve this" to "I need to understand this." When I stopped timing myself and started drawing out solutions on paper, my retention improved dramatically.

## Resources That Helped

Striver's SDE Sheet for structure, NeetCode 150 for video explanations, and LeetCode Discuss for learning from other approaches.

## The Result

After 6 months of consistent practice, I went from struggling with medium problems to comfortably solving most of them. More importantly, I started enjoying the process.`,
  },
  {
    slug: "building-full-stack-apps-as-a-fresher",
    title: "Building Full-Stack Apps as a Fresher",
    excerpt:
      "Lessons learned from building production-ready full-stack applications with React, Node.js, and MySQL — without any professional experience.",
    date: "2026-02-28",
    readTime: "6 min read",
    tags: ["Full-Stack", "React", "Node.js"],
    content: `You don't need a job to build production-quality software. Here's what I learned building full-stack applications on my own.

## Start With a Real Problem

My expense tracker (Spendora) wasn't built as a "portfolio project." I genuinely needed a better way to track my spending. Real problems keep you motivated when the code gets hard.

## The Stack Decision

I chose React + Node.js + MySQL because React is industry-standard, Node.js lets me use JavaScript everywhere, and MySQL taught me relational database design properly.

## Architecture Matters Early

The biggest mistake beginners make is jumping straight into code. I spent a full day designing my database schema and API routes before writing a single line. This saved me from painful refactors later.

## Features That Taught Me the Most

Authentication with JWT tokens, file exports in PDF/CSV format, analytics dashboards with Chart.js, and responsive design for every screen size.

## The Lesson

Building full-stack apps solo is the fastest way to learn. Every bug is yours to fix, every architecture decision is yours to make.`,
  },
  {
    slug: "the-art-of-clean-code",
    title: "The Art of Writing Clean Code",
    excerpt:
      "Why clean code matters more than clever code — practical principles I follow to write maintainable, readable software.",
    date: "2026-02-10",
    readTime: "4 min read",
    tags: ["Best Practices", "Software Engineering"],
    content: `Clever code impresses for a moment. Clean code impresses for a career.

## What Clean Code Actually Means

Clean code isn't about following arbitrary rules. It's about empathy — writing code that your future self and your teammates can understand without a decoder ring.

## Principles I Live By

Name things meaningfully: processData() tells me nothing, calculateMonthlyExpenseTotal() tells me everything.

Functions should do one thing. If you need the word "and" to describe what a function does, it's doing too much.

Comments should explain why, not what. And early returns beat nested conditionals every time.

## The Refactoring Habit

I dedicate time to refactoring after every feature. Not massive rewrites — just small improvements that compound over time.

## The Payoff

Every time I return to old code and understand it immediately, I'm grateful for the extra 5 minutes I spent making it clean. That's the real ROI.`,
  },
  {
    slug: "dark-mode-done-right",
    title: "Dark Mode Done Right in React",
    excerpt:
      "How to implement a flicker-free dark mode in Next.js with system preference detection, manual toggle, and persistent state.",
    date: "2026-01-20",
    readTime: "5 min read",
    tags: ["React", "CSS", "UI/UX"],
    content: `Dark mode is everywhere. But most implementations have a flash of unstyled content on load. Here's how to do it properly.

## The Flash Problem

The classic approach — checking localStorage in a useEffect and toggling a class — causes a visible flash. The page renders in light mode, then snaps to dark. It's jarring.

## The Solution

Inject a blocking script in the head that runs before React hydrates. This script reads the user's preference and applies the theme class immediately — no flash.

## CSS Architecture

Design both themes upfront, not as an afterthought. Use CSS custom properties via Tailwind's theme config to define your color palette: background, surface, text, muted, border, hover — each with light and dark variants.

## Testing Checklist

No flash on initial load, system preference respected on first visit, manual toggle overrides system preference, preference persists across sessions, and no hydration mismatch warnings.

## The Result

A dark mode that feels native. No flicker, no jank, just smooth theme switching that respects your users' preferences.`,
  },
];
