# Rohit Portfolio Redesign Kit

This folder contains the planning and AI-agent instructions for
transforming the existing portfolio into a scrapbook/editorial developer
notebook.

## Files

### SKILL.md

Rules for the AI coding agent: - design language - animation
philosophy - accessibility - performance - coding constraints

### DESIGN_SYSTEM.md

Visual system: - colors - typography - paper - components -
composition - motion language

### IMPLEMENTATION_PLAN.md

The complete phased implementation roadmap.

### ANTIGRAVITY_PROMPTS.md

Copy/paste prompts for Antigravity.

**Important:** execute one prompt at a time.

### CONTENT.md

Suggested portfolio positioning and copy direction.

## Recommended workflow

``` text
1. Open existing portfolio
2. Run it
3. Read SKILL.md
4. Read IMPLEMENTATION_PLAN.md
5. Paste PROMPT 0 into Antigravity
6. Review audit
7. Paste PROMPT 1
8. Review
9. Continue one phase at a time
10. Commit after every stable phase
11. Deploy only after performance/accessibility pass
```

## Suggested Git workflow

Before starting:

``` bash
git checkout -b portfolio-notebook-redesign
```

After each stable phase:

``` bash
git add .
git commit -m "feat: redesign portfolio phase 1"
```

Do not make one giant commit.

## Important

The current portfolio remains the source of truth.

Do not: - delete working features - invent experience - invent
projects - invent contact details - replace the framework
unnecessarily - install every animation library - add Three.js before
the basic experience is complete
