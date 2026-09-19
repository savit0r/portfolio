# Portfolio Redesign Skill --- Scrapbook Developer Portfolio

## Purpose

This skill defines how an AI coding agent should transform an existing
developer portfolio into a distinctive editorial scrapbook /
developer-notebook experience.

The existing portfolio is the source of truth for: - current framework -
existing routes - existing content - working links - project data -
deployment configuration - functional components

The redesign must be an **incremental visual/UX transformation**, not a
destructive rewrite.

## Design Direction

Primary concept:

> Rohit's Developer Notebook --- a physical notebook documenting a
> software-engineering journey.

Visual references: - editorial portfolio - scrapbook / collage -
notebook/grid paper - photocopied photographs - taped paper -
handwritten annotations - red ink - torn paper - grayscale imagery -
controlled brutalism - analog/documentary aesthetic

The design should feel intentional, tactile, imperfect and editorial.

It must NOT look like: - a generic SaaS landing page - a generic dark
developer portfolio - a template with random paper textures - an
over-animated WebGL experiment - a graphic-design portfolio pretending
to be a software engineer

## Non-Negotiable Principles

1.  Inspect the existing codebase before modifying it.
2.  Preserve all useful existing functionality.
3.  Reuse existing project/content data whenever possible.
4.  Do not rewrite the application architecture unless necessary.
5.  Do not add a dependency if CSS/SVG/native browser APIs are
    sufficient.
6.  Use GSAP for complex motion only where justified.
7.  Use Lenis only if the existing scroll architecture benefits from it.
8.  Do not add Three.js/WebGL in the first implementation.
9.  Keep the site fast and accessible.
10. Respect reduced-motion preferences.
11. Mobile must be designed intentionally, not treated as a shrunken
    desktop.
12. Avoid excessive rounded cards, gradients, glassmorphism and generic
    shadows.
13. Use controlled imperfection rather than random chaos.
14. Every animation must communicate hierarchy, interaction or
    physicality.

## Visual Tokens

### Colors

``` text
Paper:       #F4F1E8
Paper Dark:  #E8E2D5
Ink:         #111111
Muted Ink:   #66615A
Red Ink:     #B21F1F
Grid:        #C9D5DD
Tape:        #D7C9A7
White:       #FAFAF7
```

Do not force these exact values if the existing site already has a
strong compatible palette. Adapt carefully.

### Typography

Preferred roles:

-   Display serif: Cormorant Garamond / DM Serif Display / similar
-   UI/body sans: Inter / DM Sans / similar
-   Handwritten accent: Caveat / Patrick Hand / similar

Maximum recommended font families: 3.

Handwritten typography should be used as annotation, not as body copy.

### Shape and Composition

-   small rotations: approximately -4deg to +4deg
-   occasional larger rotation only for intentionally detached elements
-   thin borders
-   paper shadows
-   torn edges
-   clipped photos
-   tape
-   handwritten arrows/circles
-   notebook grid
-   imperfect but deliberate alignment

## Animation System

Preferred stack:

``` text
GSAP
GSAP ScrollTrigger
Lenis (optional)
CSS transitions
SVG stroke animations
```

Use GSAP for: - page entrance - section reveals - paper movement - image
reveals - parallax - project interactions - SVG handwriting - page
transitions

Use CSS for: - hover - simple transforms - opacity - small transitions

Do not animate everything.

### Motion Rules

Default reveal:

``` text
opacity: 0 -> 1
y: 30-50px -> 0
rotation: small offset -> natural position
duration: ~0.5-1s
ease: natural/out easing
```

Paper interactions should feel physical rather than futuristic.

## UX Architecture

Recommended information architecture:

``` text
COVER
01 / ABOUT
02 / JOURNEY
03 / PROJECTS
04 / EXPERIMENTS / BUILD LOG
05 / STACK
06 / CONTACT
```

The exact sections may differ if the current portfolio already has a
strong structure.

## Developer Identity

The portfolio should communicate:

-   Software Engineer
-   Java / Spring Boot
-   Full-stack development
-   React
-   backend/API development
-   practical engineering
-   learning/building mindset
-   selected projects
-   professional contact information

Do not overclaim skills or experience.

## Accessibility

Required: - semantic HTML - keyboard navigation - visible focus states -
sufficient text contrast - alt text for meaningful images - decorative
images marked appropriately - `prefers-reduced-motion` support - no
interaction that requires a mouse - custom cursor must never replace the
normal cursor as the only interaction method

## Performance

Required: - optimize images - prefer WebP/AVIF where appropriate -
lazy-load below-the-fold images - avoid huge background images - avoid
unnecessary JavaScript - avoid continuous animation when not visible -
use GPU-friendly transforms - avoid layout-triggering animations where
possible

## Coding Standards

Before changing code: 1. Inspect package.json. 2. Inspect
framework/version. 3. Inspect src/app/components structure. 4. Identify
routing. 5. Identify styling system. 6. Identify existing animation
libraries. 7. Identify existing content/data. 8. Identify reusable
components. 9. Run the existing project before editing.

After each phase: 1. Run lint/typecheck/build as available. 2. Fix
errors. 3. Test desktop. 4. Test mobile. 5. Verify existing
links/routes. 6. Review animation performance.

## Definition of Done

A redesign phase is complete only when: - existing functionality still
works - visual hierarchy is coherent - responsive layout works - no
obvious console errors exist - no TypeScript/build errors exist -
animation is intentional - accessibility is not degraded - code remains
understandable
