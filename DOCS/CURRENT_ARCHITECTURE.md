# Current Architecture & Redesign Audit

## Overview
This document records the architectural audit of Rohit's developer portfolio prior to applying the "Rohit's Developer Notebook" scrapbook redesign.

---

## 1. Framework & Core Environment
* **Framework**: Next.js 16.2.1 (App Router)
* **React Version**: React 19.2.4 / React DOM 19.2.4
* **Language**: TypeScript 5 (`tsconfig.json` with `@/*` path alias mapped to `./src/*`)
* **Build Tooling**: Turbopack (`next build` compiled in ~2.2s with zero errors)

---

## 2. Entry Point
* **Root Layout**: [`src/app/layout.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/app/layout.tsx)
  * Configures Google Fonts (`Geist` sans and `Geist_Mono`).
  * Provides global metadata (`title`, `description`, `keywords`, `openGraph`, `twitter`, `robots`).
  * Wraps child pages with [`ThemeProvider`](file:///Users/rohit/Desktop/Products/portfolio/src/components/ThemeProvider.tsx) for dark/light mode toggling.
* **Home Page**: [`src/app/page.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/app/page.tsx)
  * Serves as a single-page layout composing all sections (`Hero`, `About`, `Projects`, `Products`, `Blogs`, `Experience`, `Contact`, `Footer`).
  * Includes a floating navigation bar (`Navbar`).

---

## 3. Routing Architecture
* **Routing Strategy**: Next.js App Router (file-system based, SSG enabled).
* **Routes**:
  1. `/` — Home page ([`src/app/page.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/app/page.tsx)) with anchor navigation (`#home`, `#about`, `#projects`, `#products`, `#blogs`, `#journey`, `#contact`).
  2. `/blogs/[slug]` — Dynamic blog post page ([`src/app/blogs/[slug]/page.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/app/blogs/[slug]/page.tsx) & [`BlogPostClient.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/app/blogs/[slug]/BlogPostClient.tsx)).
     * Uses `generateStaticParams` to pre-render 5 static blog posts at build time.
     * Generates dynamic metadata via `generateMetadata`.

---

## 4. Styling System
* **CSS Framework**: Tailwind CSS v4 (`tailwindcss: ^4`, `@tailwindcss/postcss: ^4`).
* **PostCSS Config**: [`postcss.config.mjs`](file:///Users/rohit/Desktop/Products/portfolio/postcss.config.mjs) configuring `@tailwindcss/postcss`.
* **Global Styles & Design System Tokens**: [`src/app/globals.css`](file:///Users/rohit/Desktop/Products/portfolio/src/app/globals.css)
  * Uses `@import "tailwindcss";` and `@custom-variant dark (&:is(.dark *));`.
  * `@theme inline` defines theme color tokens for light mode (`--color-l-*`) and dark mode (`--color-d-*`), plus green accent (`--color-green`).
  * Includes smooth scroll behavior, custom webkit scrollbars, and keyframe animations (`pulse-dot`).
* **Theme Management**: `next-themes` via [`ThemeProvider.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/ThemeProvider.tsx) (`attribute="class"`, `defaultTheme="dark"`).
* **Theme Toggle**: [`ThemeToggle.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/ThemeToggle.tsx) using `useSyncExternalStore` for hydration safety.

---

## 5. Animation System
* **Library**: `framer-motion` (version `12.38.0`).
* **Components**:
  * [`AnimatedSection.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/AnimatedSection.tsx): Wrapper providing viewport scroll reveal (`whileInView`, `opacity: 0 -> 1`, `y: 30 -> 0`).
  * Inline Framer Motion animations across components (`whileHover`, `AnimatePresence`, `motion.nav`, `motion.div`, `motion.article`, `motion.h1`).

---

## 6. Reusable Components
* [`Navbar.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Navbar.tsx): Floating backdrop-blur navigation bar with desktop links, mobile menu toggle, and theme switch.
* [`Hero.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Hero.tsx): Profile header with avatar, availability pill, headline, tagline, and CTA buttons.
* [`About.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/About.tsx): Bio section and skill pill grid.
* [`Projects.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Projects.tsx): 2-column grid of selected coding projects with tech badges and links.
* [`Products.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Products.tsx): Showcase of built products with live/beta/coming-soon status indicators.
* [`Blogs.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Blogs.tsx): List of blog post cards linking to dynamic `/blogs/[slug]` routes.
* [`Experience.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Experience.tsx): Vertical timeline detailing work, education, and milestones.
* [`Contact.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Contact.tsx): "Let's work together" section with email mailto button, copy-to-clipboard functionality, and social links.
* [`Footer.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Footer.tsx): Minimal footer displaying copyright year and tech stack credits.
* [`AnimatedSection.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/AnimatedSection.tsx): Scroll-reveal animation container.
* [`ThemeProvider.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/ThemeProvider.tsx): `next-themes` provider wrapper.
* [`ThemeToggle.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/ThemeToggle.tsx): Hydration-safe animated theme switch button.

---

## 7. Project / Content Data Sources
* **Data File**: [`src/data/portfolio.ts`](file:///Users/rohit/Desktop/Products/portfolio/src/data/portfolio.ts)
* **Exported Data Objects**:
  * `personalInfo`: Name ("Rohit"), role, tagline, bio, avatar path, email, location, availability flag, social links.
  * `skills`: Array of 12 skill strings.
  * `projects`: Array of 4 `Project` objects (Expense Tracker, Portfolio Website, Task Manager API, Algorithm Visualizer).
  * `experience`: Array of 4 `ExperienceEntry` objects (Self-Learning, Web Dev Intern, CS Degree, Coding Start).
  * `products`: Array of 3 `Product` objects (Spendora, CodeArena, DevFlow).
  * `blogPosts`: Array of 5 `BlogPost` objects with inline Markdown content strings.

---

## 8. Current Assets
* **Images & Vector Graphics in `public/`**:
  * `public/_efTabMj_400x400.jpg`: Primary profile avatar photograph.
  * `public/profile-placeholder.svg`: Fallback avatar SVG.
  * `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`: Next.js starter icons.
  * `src/app/favicon.ico`: Standard site favicon.

---

## 9. Important Dependencies
* **Core**: `next` (16.2.1), `react` (19.2.4), `react-dom` (19.2.4).
* **UI & Styling**: `tailwindcss` (4.x), `@tailwindcss/postcss` (4.x), `next-themes` (0.4.6).
* **Motion & Interactivity**: `framer-motion` (12.38.0).
* **Dev Tools & Typing**: `typescript` (5.x), `@types/node`, `@types/react`, `eslint` (9.x).

---

## 10. Potential Risks & Technical Considerations
1. **Tailwind CSS v4 Configuration Rules**: Tailwind v4 uses CSS-first configuration (`@import "tailwindcss";` and `@theme inline` in `globals.css`). Custom scrapbook utility classes (grid lines, torn paper shapes, tape, handwritten font rules) must be added cleanly in CSS without conflicting with Tailwind v4 core features.
2. **Next.js 16 Dynamic Route Params**: Next 16 treats `params` in page components as a `Promise` (`params: Promise<{ slug: string }>`). `src/app/blogs/[slug]/page.tsx` already uses `await params`, which must be preserved.
3. **Scrapbook Responsive Overflow**: Using physical transforms (`rotate-1`, `-rotate-2`, overlapping tape, margin notes) can easily cause unwanted horizontal scrollbars on mobile devices if container bounds (`overflow-x-hidden`) or breakpoint-specific rotation resets (`sm:rotate-0`) are not applied carefully.
4. **Dark Mode vs Off-White Paper Aesthetic**: The scrapbook concept uses an off-white paper base (`#F4F1E8` / `#F5F5F3`). For dark mode, the aesthetic should adapt seamlessly to a "dark workbench / nighttime drafting paper" without losing the notebook concept or breaking readability.

---

## 11. Files to Modify for the "Rohit's Developer Notebook" Redesign
* [`src/app/globals.css`](file:///Users/rohit/Desktop/Products/portfolio/src/app/globals.css): Define notebook paper background textures, grid paper patterns, red ink variables, tape/paper-clip utility classes, and custom font definitions.
* [`src/app/layout.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/app/layout.tsx): Import handwritten/annotation Google Fonts (e.g., Caveat / Kalam / Permanent Marker) alongside Geist Sans & Mono.
* [`src/app/page.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/app/page.tsx): Re-architect main container into physical notebook pages / paper compositions with controlled brutalist layout grid.
* [`src/components/Navbar.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Navbar.tsx): Style as a taped paper bookmark / notebook section tab bar.
* [`src/components/Hero.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Hero.tsx): Redesign into an editorial photo card / index card with grayscale profile photograph, red ink margin notes ("that's me →"), paper clip accents, and software developer identity.
* [`src/components/About.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/About.tsx): Redesign into torn paper notebook page with tech stack tags rendered as paper labels/stamps.
* [`src/components/Projects.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Projects.tsx): Redesign project cards into technical blueprint sheets / index cards with red stamps, paper clips, and technical notes.
* [`src/components/Products.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Products.tsx): Redesign product cards into specification documents with status ink stamps (LIVE, BETA, COMING SOON).
* [`src/components/Blogs.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Blogs.tsx): Style blog posts as clipped article notes / taped index cards.
* [`src/components/Experience.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Experience.tsx): Redesign journey into handwritten ledger / dated field notes with tape markers.
* [`src/components/Contact.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Contact.tsx): Style contact card as a stamped index card / airmail letter with red ink copy action.
* [`src/components/Footer.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/components/Footer.tsx): Style page footer as a notebook bottom page margin with handwritten sign-off.
* [`src/app/blogs/[slug]/BlogPostClient.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/app/blogs/[slug]/BlogPostClient.tsx): Style individual blog pages to match the notebook paper grid, red ink header accents, and handwritten back navigation.

---

## 12. Files That Should NOT Be Touched
* [`src/data/portfolio.ts`](file:///Users/rohit/Desktop/Products/portfolio/src/data/portfolio.ts): Keep all structured content (personal info, projects, products, blogs, experience, skills) intact so data schema and content remain preserved.
* [`src/app/blogs/[slug]/page.tsx`](file:///Users/rohit/Desktop/Products/portfolio/src/app/blogs/[slug]/page.tsx): Keep static params generation and metadata resolution logic intact.
* `package.json` & `package-lock.json`: Maintain current framework and dependency ecosystem.
* `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `eslint.config.mjs`: Keep configuration settings stable.
* `DOCS/rohit_portfolio_redesign_kit/*`: Preserve reference redesign kit documentation.

---

## Redesign Direction Summary
* **Concept**: "Rohit's Developer Notebook" (Personal Engineering Archive)
* **Visual Style Elements**:
  * Editorial scrapbook composition & controlled brutalism
  * Off-white paper (`#F4F1E8`) & notebook grid paper patterns
  * Grayscale / photocopy-contrast profile photography
  * Red ink annotations, arrows, circles, and stamps
  * Handwritten margin notes ("built this", "ship it →", "that's me →")
  * Physical paper artifacts (tape, paper clips, torn paper edges, double-ink borders)
  * Clear engineering identity (clearly communicates software developer background)
