# Antigravity Prompts --- Execute One Phase at a Time

## IMPORTANT

Paste only ONE prompt at a time into Antigravity.

Do not ask it to complete the entire redesign in one prompt.

After each phase: 1. inspect the result 2. run the app 3. test mobile 4.
fix errors 5. commit 6. move to the next prompt

------------------------------------------------------------------------

# PROMPT 0 --- AUDIT THE CURRENT CODEBASE

``` text
You are working inside my existing portfolio repository.

IMPORTANT:
Do NOT redesign anything yet.
Do NOT replace the current framework.
Do NOT delete existing sections.
Do NOT install a large number of dependencies.

First inspect the entire current portfolio codebase.

Check:
- package.json
- framework and versions
- app/src structure
- routing
- global styles
- Tailwind configuration
- existing components
- existing animation libraries
- assets
- project data
- contact/social links
- deployment configuration

Run the existing project and verify that it works.

Then create:
docs/CURRENT_ARCHITECTURE.md

Document:
1. framework
2. entry point
3. routing
4. styling system
5. animation system
6. reusable components
7. project/content sources
8. current assets
9. important dependencies
10. potential risks
11. which existing files should be modified for the redesign
12. which files should NOT be touched

The redesign direction is:
"Rohit's Developer Notebook"

Visual style:
- editorial scrapbook
- notebook grid paper
- off-white paper
- grayscale photographs
- red ink annotations
- handwritten notes
- tape
- paper clips
- torn paper
- controlled brutalism
- physical paper composition

The reference image is a scrapbook/editorial portfolio, but do NOT copy it literally.

The final website should still clearly communicate that I am a software engineer.

Stop after the audit.
```

------------------------------------------------------------------------

# PROMPT 1 --- DESIGN FOUNDATION

``` text
Now implement ONLY the visual foundation of the scrapbook developer-notebook design.

Do not redesign all sections yet.

First inspect the existing architecture and preserve it.

Create a reusable design system with:
- paper background
- notebook grid
- subtle paper texture/noise
- ink color
- red annotation color
- typography system
- spacing tokens
- z-index/layer rules
- responsive rules

Preferred visual direction:
Paper #F4F1E8
Ink #111111
Muted Ink #66615A
Red Ink #B21F1F
Grid #C9D5DD

Typography:
- editorial serif for major headings
- clean sans for body/UI
- handwritten font only for annotations

Avoid:
- glassmorphism
- excessive gradients
- excessive rounded cards
- generic SaaS styling

Do not add Three.js.

Do not rewrite the existing page structure.

Make the current portfolio look like it belongs to the new visual system while keeping all functionality.

At the end:
- run the app
- run lint/typecheck/build if available
- fix errors
- summarize changed files.
```

------------------------------------------------------------------------

# PROMPT 2 --- REUSABLE SCRAPBOOK COMPONENTS

``` text
Now create reusable scrapbook visual primitives.

Create components only where appropriate:

Paper
Tape
PaperClip
Polaroid
HandwrittenNote
Scribble
Arrow
Stamp
SectionHeading

Requirements:
- reusable
- responsive
- configurable through props/className
- no page-specific content inside reusable components
- accessible where applicable
- decorative SVGs should be aria-hidden

Use CSS/SVG wherever possible.

Do not redesign the entire portfolio yet.

Do not add Three.js.

Do not add unnecessary libraries.

After implementation:
- run lint/typecheck/build
- verify desktop and mobile
- fix errors
- summarize files changed.
```

------------------------------------------------------------------------

# PROMPT 3 --- HERO / COVER

``` text
Now redesign ONLY the hero/landing section using the scrapbook developer-notebook concept.

Do not redesign About, Projects or Contact yet.

The hero should feel like the cover of a personal engineering notebook.

Use my existing real portfolio content.

Recommended visual hierarchy:

ROHIT SATRE

SOFTWARE ENGINEER

Java
Spring Boot
React
Backend / Full Stack

[existing profile image if available]

2024 → 2026

OPEN PORTFOLIO →

Visual elements:
- paper/grid background
- clipped or polaroid-like image
- tape
- subtle red annotation
- handwritten note
- editorial typography
- controlled rotation
- paper shadow

Animation:
- subtle page/cover entrance
- image reveal
- title reveal
- annotation drawing

Use GSAP only if it improves the result.

Do not create a huge loading animation.

The hero must remain usable on mobile.

Do not invent facts.

After implementation, run the app and fix all errors.
```

------------------------------------------------------------------------

# PROMPT 4 --- ABOUT

``` text
Redesign ONLY the About section.

Convert it into a notebook page titled:

01 / ABOUT

Use the existing portfolio's factual information.

Create an editorial layout containing:
- short introduction
- profile image
- education
- technical skills
- current engineering focus
- one or two handwritten annotations

Visual style:
- paper
- notebook grid
- grayscale image treatment where appropriate
- red annotation
- taped photo
- subtle scribbles

Do not invent experience or skills.

Use responsive layout:
desktop = asymmetric editorial
mobile = single-column readable document

Add subtle GSAP reveal only if useful.

Preserve all existing links and functionality.
```

------------------------------------------------------------------------

# PROMPT 5 --- EXPERIENCE / JOURNEY

``` text
Redesign the existing experience/education/journey section as a physical notebook timeline.

Title:

02 / JOURNEY

Use ONLY factual information already present in the portfolio.

Possible structure:
- year
- role/education
- organization
- short description
- technologies

Design it like a research notebook / technical archive rather than a conventional vertical SaaS timeline.

Use:
- paper sheets
- dates as annotations
- red correction marks
- thin ink lines
- subtle rotations
- small tape/paper elements

Do not add fake companies, dates or achievements.

Keep the layout responsive.
```

------------------------------------------------------------------------

# PROMPT 6 --- PROJECTS

``` text
Now redesign ONLY the Projects section.

Title:

03 / PROJECTS

Reuse the current portfolio's actual project data.

Present projects as physical project documents/papers.

Each project should include:
- project number
- title
- one-line purpose
- technical stack
- screenshot/image
- important engineering detail
- GitHub/demo link
- optional handwritten annotation

Prioritize my strongest engineering projects.

The visual style should be:
- editorial
- paper collage
- grayscale screenshots where appropriate
- red ink
- paper layers
- controlled rotations
- tape/pins

Do not turn them into generic rounded cards.

Hover interaction:
- slight paper lift
- subtle rotation correction
- image movement
- contextual "VIEW PROJECT" interaction

Do not add unnecessary 3D.
```

------------------------------------------------------------------------

# PROMPT 7 --- GSAP MOTION SYSTEM

``` text
Now focus ONLY on motion quality.

Inspect the current animations and create a coherent motion system.

Use GSAP + ScrollTrigger where appropriate.

Implement:
1. section reveal
2. paper reveal
3. image reveal
4. subtle paper rotation
5. SVG annotation drawing
6. project hover
7. optional subtle parallax

Motion should feel physical and editorial.

Do NOT:
- animate everything
- add infinite floating animations
- add random bouncing
- create distracting scroll hijacking
- create unnecessary WebGL

Respect:
prefers-reduced-motion

For reduced motion:
- remove parallax
- reduce transitions
- avoid complex entrance sequences

Check performance after implementation.
```

------------------------------------------------------------------------

# PROMPT 8 --- SMOOTH SCROLL

``` text
Evaluate whether the portfolio would benefit from Lenis.

If the existing implementation is already performant without it, do not add Lenis.

If Lenis is added:
- integrate it correctly with GSAP ScrollTrigger
- avoid scroll hijacking
- respect reduced motion
- verify mobile
- verify anchor navigation
- verify browser back/forward behavior

Do not change visual design in this phase.

Only improve scroll behavior.
```

------------------------------------------------------------------------

# PROMPT 9 --- CUSTOM CURSOR

``` text
Add a contextual custom cursor only if it improves the design.

Desktop only.

Possible states:
VIEW
OPEN
READ
DRAG

The normal cursor must remain available as a fallback.

Requirements:
- keyboard users unaffected
- touch devices disabled
- reduced motion supported
- no performance-heavy mousemove logic
- cursor must not cover important content

Keep it subtle.
```

------------------------------------------------------------------------

# PROMPT 10 --- CONTACT

``` text
Redesign ONLY the final Contact section.

Title:

06 / CONTACT

Create a final notebook page that feels like the closing page of the portfolio.

Use the actual existing contact information.

Include:
- email
- GitHub
- LinkedIn
- X if already present
- resume if already present

Main visual message:

LET'S BUILD SOMETHING.

Use:
- paper
- handwritten annotation
- red arrow
- subtle tape
- editorial typography

Do not invent contact information.
```

------------------------------------------------------------------------

# PROMPT 11 --- MOBILE PASS

``` text
Now perform a dedicated mobile design pass.

Do NOT simply shrink the desktop layout.

Test:
320px
375px
390px
430px
tablet
desktop

On mobile:
- reduce paper overlap
- reduce rotations
- remove custom cursor
- reduce decorative elements
- disable/reduce parallax
- keep text readable
- preserve project access
- keep navigation simple
- prevent horizontal overflow

Fix:
- clipped content
- overflow
- broken images
- overlapping text
- unreadable annotations
- excessive whitespace

Do not change desktop unnecessarily.
```

------------------------------------------------------------------------

# PROMPT 12 --- PERFORMANCE + ACCESSIBILITY

``` text
Perform a production-readiness pass.

Check:
- build
- lint
- TypeScript
- console errors
- broken links
- image optimization
- font loading
- layout shift
- unnecessary JS
- animation performance

Accessibility:
- semantic HTML
- keyboard navigation
- focus states
- alt text
- decorative SVG aria-hidden
- reduced motion
- sufficient contrast

Do not remove the scrapbook identity.

Optimize implementation rather than simplifying the design unnecessarily.
```

------------------------------------------------------------------------

# PROMPT 13 --- FINAL ART DIRECTION

``` text
Now act as a senior art director reviewing the completed portfolio.

Do not add random features.

Review:
- visual hierarchy
- consistency
- typography
- paper composition
- red annotation usage
- image treatment
- whitespace
- animation restraint
- mobile experience
- developer credibility

Remove anything that feels:
- generic
- excessive
- gimmicky
- visually noisy
- unrelated to the notebook concept

Make only high-value polish changes.

The final site should communicate:

"I am a software engineer who builds real products and cares deeply about craft."

Do not turn it into a graphic-design portfolio.
```
