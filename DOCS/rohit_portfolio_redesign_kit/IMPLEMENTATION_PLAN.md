# Portfolio Redesign --- Step-by-Step Implementation Plan

## Rule

Do not ask an AI coding agent to redesign everything in one prompt.

Execute one phase at a time.

After every phase: - run the app - inspect desktop - inspect mobile -
fix errors - commit changes

------------------------------------------------------------------------

# Phase 0 --- Audit Existing Portfolio

### Goal

Understand the current application before touching it.

### Tasks

Inspect: - package.json - framework/version - app/src structure -
routes - components - global CSS - Tailwind configuration - existing
animation libraries - images/assets - project data - deployment
configuration

Run:

``` bash
npm install
npm run dev
```

Also run the available:

``` bash
npm run lint
npm run build
```

Do not redesign anything yet.

### Deliverable

Create:

``` text
docs/CURRENT_ARCHITECTURE.md
```

containing: - framework - entry point - routing - styling - animation -
reusable components - content/data - risks - proposed files to modify

------------------------------------------------------------------------

# Phase 1 --- Establish Design Foundation

### Goal

Make the current portfolio visually capable of supporting the scrapbook
system without rebuilding every section.

Tasks: - add design tokens - add typography - add paper background - add
grid texture - add noise layer if needed - define global spacing -
define responsive breakpoints - define z-index layers - define animation
utilities

Do not redesign project cards yet.

### Deliverable

The existing portfolio should still work but visually begin moving
toward the notebook aesthetic.

------------------------------------------------------------------------

# Phase 2 --- Build Reusable Physical Components

Create only the reusable visual primitives:

``` text
Paper
Tape
PaperClip
Polaroid
HandwrittenNote
Scribble
Arrow
Stamp
SectionHeading
```

Each component must: - be reusable - accept className/props where
useful - not contain page-specific content - work responsively

------------------------------------------------------------------------

# Phase 3 --- Redesign Hero / Cover

Create the notebook cover.

Recommended composition:

``` text
ROHIT SATRE

SOFTWARE ENGINEER

Java
Spring Boot
React
Backend / Full Stack

[photo]

2024 → 2026

OPEN PORTFOLIO →
```

Add: - paper - grid - photo - tape - red annotation - subtle entrance
animation

Do not create a huge loading screen.

------------------------------------------------------------------------

# Phase 4 --- Redesign About

Convert the current About section into a notebook page.

Structure:

``` text
01 / ABOUT

short intro

photo

education
skills
current focus

handwritten annotation
```

Keep real content from the existing portfolio.

------------------------------------------------------------------------

# Phase 5 --- Redesign Journey / Experience

Use a document/timeline style.

Potential entries:

``` text
2024
Computer Engineering

2025
Frontend Internship / project work

2026
PG-DAC / Software Engineering focus
```

Only include factual information already present in the project.

------------------------------------------------------------------------

# Phase 6 --- Redesign Projects

Use existing projects rather than inventing new ones.

Potential project presentation:

``` text
01 — PREPIFY
Spring Boot / Security / JWT / SQL

02 — DELEARN-AI
Spring Boot / React / Microservices

03 — KHARCHA
React / Node / PostgreSQL
```

For each: - screenshot - title - short engineering problem - stack -
architecture/technical detail - GitHub/demo link - physical-paper
composition

Add project hover animation.

------------------------------------------------------------------------

# Phase 7 --- Add GSAP Motion

Only after layout is stable.

Implement in this order:

1.  section reveal
2.  image reveal
3.  paper rotation
4.  annotation drawing
5.  project hover
6.  subtle parallax
7.  page transition

Do not add all effects at once.

------------------------------------------------------------------------

# Phase 8 --- Add Smooth Scroll

Evaluate Lenis.

If the current project is already smooth and lightweight, do not add
Lenis just because it is fashionable.

If added: - integrate with GSAP ScrollTrigger correctly - disable/reduce
behavior under reduced-motion preferences - verify mobile

------------------------------------------------------------------------

# Phase 9 --- Cursor / Microinteractions

Add contextual cursor only on desktop.

Examples:

``` text
VIEW PROJECT
OPEN
DRAG
READ
```

Never make the custom cursor necessary for navigation.

------------------------------------------------------------------------

# Phase 10 --- Contact / Closing Page

Create a final notebook page:

``` text
06 / CONTACT

LET'S BUILD SOMETHING.

email
GitHub
LinkedIn
X
resume
```

Add one or two handwritten annotations.

------------------------------------------------------------------------

# Phase 11 --- Mobile Pass

This is a separate phase, not an afterthought.

Check: - 320px - 375px - 390px - 430px - tablet - desktop

Reduce: - overlap - rotation - decorative elements - parallax

Maintain: - hierarchy - readability - navigation - project access

------------------------------------------------------------------------

# Phase 12 --- Performance + Accessibility

Check: - Lighthouse - keyboard navigation - reduced motion - image
sizes - font loading - layout shift - console errors - broken links

Optimize before launch.

------------------------------------------------------------------------

# Phase 13 --- Final Polish

Only now add: - tiny scribbles - subtle grain - paper imperfections -
micro-interactions - cursor details - small copy improvements

Stop when the design feels intentional.

Do not keep adding effects simply because they are technically possible.
