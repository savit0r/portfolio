# Rohit Portfolio --- Design System

## Concept

**Developer Notebook / Personal Engineering Archive**

The interface should feel like a real collection of pages, notes, photos
and technical documents.

## Design Formula

``` text
60% scrapbook/editorial
20% developer portfolio
15% controlled brutalism
5% personal annotations
```

## Page Anatomy

A typical section can contain:

``` text
section number
        ↓
large editorial title
        ↓
short introduction
        ↓
paper/card/document composition
        ↓
annotation / handwritten note
        ↓
interaction
```

## Reusable Components

Recommended component inventory:

``` text
NotebookPage
Paper
PaperStack
Tape
PaperClip
Polaroid
PhotoCard
HandwrittenNote
Scribble
Arrow
SectionHeading
ProjectPaper
ProjectStamp
TechLabel
TimelineEntry
SocialLink
MagneticLink
CustomCursor
PageTransition
```

Do not create a component only because an element appears once. Extract
components when visual behavior is reusable.

## Background Layers

Recommended page layering:

``` text
Layer 0: paper background
Layer 1: grid/noise
Layer 2: content
Layer 3: decorative paper
Layer 4: annotations
Layer 5: interaction/cursor
```

Avoid unnecessary high z-index values.

## Paper

Base:

``` css
background: #F4F1E8;
```

Notebook:

``` css
background-image:
  linear-gradient(rgba(120,150,170,.15) 1px, transparent 1px),
  linear-gradient(90deg, rgba(120,150,170,.15) 1px, transparent 1px);
background-size: 24px 24px;
```

Use subtle texture rather than a visually heavy background.

## Shadows

Paper should use soft, imperfect depth:

``` css
box-shadow:
  0 8px 24px rgba(0,0,0,.10),
  0 2px 4px rgba(0,0,0,.08);
```

Avoid modern floating-card shadows that make the page look like a SaaS
dashboard.

## Borders

Preferred: - 1px ink borders - imperfect SVG borders - double borders
for documents - occasional dashed borders

## Images

Preferred treatment: - grayscale or slightly desaturated -
photocopy-like contrast - subtle grain - irregular crop - polaroid
frame - tape or pin

Do not apply grayscale to every image automatically. Use it as an art
direction tool.

## Red Ink

Use red for: - section numbering - arrows - circles - underlines -
corrections - important annotations - selected UI states

Do not use red for large body areas.

## Handwritten Annotations

Examples:

``` text
"that's me →"
"built this"
"currently learning"
"new!"
"needs work"
"open source"
"ship it →"
```

Annotations should add personality without reducing readability.

## Project Cards

Project card anatomy:

``` text
small project number
title
one-line description
stack
image/screenshot
short engineering detail
links
annotation
```

Avoid:

``` text
rounded rectangle
gradient background
3D shadow
five badges
```

## Responsive Behavior

Desktop: - asymmetric compositions - overlapping papers - generous
whitespace - editorial typography

Tablet: - reduce overlap - reduce decorative layers - maintain visual
hierarchy

Mobile: - mostly single-column - minimal rotations - no excessive
overlap - annotations repositioned into normal flow - custom cursor
disabled - large images constrained - interactions remain accessible

## Motion

Physical metaphors:

``` text
paper = slide / lift / rotate
photo = reveal / zoom slightly
annotation = draw
page = unfold / reveal
stamp = pop
cursor = contextual label
```

Avoid:

``` text
constant floating
infinite spinning
large-scale bouncing
random parallax everywhere
```

## Tone

The copy should be: - direct - technically credible - personal -
concise - slightly playful

Avoid: - buzzword-heavy claims - "passionate ninja rockstar" -
exaggerated percentages unless backed by real measurements - fake
testimonials - unnecessary motivational quotes
