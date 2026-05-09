# Design Language: Index of Repression

> Extracted from `https://www.index-of-repression.org/de/platform` on May 9, 2026
> 549 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#030712` | rgb(3, 7, 18) | hsl(224, 71%, 4%) | 366 |
| Secondary | `#f3f4f6` | rgb(243, 244, 246) | hsl(220, 14%, 96%) | 192 |
| Accent | `#fca5a5` | rgb(252, 165, 165) | hsl(0, 94%, 82%) | 1 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#e5e7eb` | hsl(220, 13%, 91%) | 527 |
| `#000000` | hsl(0, 0%, 0%) | 21 |
| `#ffffff` | hsl(0, 0%, 100%) | 2 |
| `#b3b3b3` | hsl(0, 0%, 70%) | 1 |

### Background Colors

Used on large-area elements: `#000000`, `#030712`, `#1e40af`

### Text Colors

Text color palette: `#000000`, `#2c3e50`, `#f3f4f6`, `#030712`, `#ffffff`

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#e5e7eb` | border | 527 |
| `#030712` | background, text | 366 |
| `#f3f4f6` | text, border, background | 192 |
| `#000000` | text, background | 21 |
| `#1f2937` | border | 5 |
| `#fc8d62` | background | 3 |
| `#3b82f6` | background | 2 |
| `#8da0cb` | background | 2 |
| `#66c2a5` | background | 2 |
| `#a6d854` | background | 2 |
| `#ffffff` | background, text | 2 |
| `#2c3e50` | text | 1 |
| `#b3b3b3` | background | 1 |
| `#e5c494` | background | 1 |
| `#ffd92f` | background | 1 |
| `#e78ac3` | background | 1 |
| `#fca5a5` | background | 1 |
| `#1e40af` | background | 1 |

## Typography

### Font Families

- **Neue Montreal** — used for body (521 elements)
- **Supply** — used for body (25 elements)
- **ui-monospace** — used for body (2 elements)
- **Helvetica Neue** — used for body (1 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 20px | 1.25rem | 400 | 28px | normal | div |
| 18px | 1.125rem | 400 | 28px | normal | button |
| 16px | 1rem | 400 | 24px | normal | html, head, meta, link |
| 14px | 0.875rem | 400 | 20px | normal | div, a, textpath |
| 12.8px | 0.8rem | 400 | 19.2px | normal | text |
| 12px | 0.75rem | 400 | 16px | -0.7px | div, button, span, label |
| 9.6px | 0.6rem | 400 | 14.4px | normal | div, span |

### Body Text

```css
body { font-size: 12px; font-weight: 400; line-height: 16px; }
```

### Font Weights in Use

`400` (548x), `700` (1x)

## Spacing

| Token | Value | Rem |
|-------|-------|-----|
| spacing-4 | 4px | 0.25rem |
| spacing-64 | 64px | 4rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 1px | 1 |
| sm | 4px | 2 |
| full | 9999px | 8 |

## CSS Custom Properties

### Colors

```css
--color-primary: "black";
--color-secondary: "white";
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-ring-offset-width: 0px;
--tw-ring-inset: ;
--tw-border-spacing-x: 0;
--tw-shadow-colored: 0 0 #0000;
--tw-border-spacing-y: 0;
--tw-ring-color: rgb(59 130 246 / .5);
--tw-ring-offset-color: #fff;
```

### Spacing

```css
--tw-contain-size: ;
--tw-numeric-spacing: ;
```

### Typography

```css
--font-neue-montreal: "Neue Montreal";
--font-supply: "Supply";
```

### Shadows

```css
--tw-shadow: 0 0 #0000;
--tw-drop-shadow: ;
```

### Other

```css
--tw-contrast: ;
--tw-backdrop-sepia: ;
--tw-sepia: ;
--tw-skew-x: 0;
--tw-ordinal: ;
--tw-backdrop-saturate: ;
--tw-contain-style: ;
--tw-backdrop-blur: ;
--tw-translate-x: 0;
--tw-gradient-via-position: ;
--tw-backdrop-invert: ;
--tw-saturate: ;
--tw-scroll-snap-strictness: proximity;
--tw-grayscale: ;
--tw-scale-x: 1;
--tw-backdrop-hue-rotate: ;
--tw-gradient-to-position: ;
--tw-brightness: ;
--tw-numeric-fraction: ;
--tw-backdrop-grayscale: ;
--tw-hue-rotate: ;
--tw-scale-y: 1;
--tw-pan-y: ;
--tw-backdrop-contrast: ;
--tw-skew-y: 0;
--tw-backdrop-brightness: ;
--tw-slashed-zero: ;
--tw-blur: ;
--tw-invert: ;
--tw-pan-x: ;
--tw-translate-y: 0;
--tw-backdrop-opacity: ;
--tw-gradient-from-position: ;
--tw-numeric-figure: ;
--tw-rotate: 0;
--tw-pinch-zoom: ;
--tw-contain-paint: ;
--tw-contain-layout: ;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 640px | min-width |
| md | 768px | min-width |
| lg | 1023px | max-width |
| lg | 1024px | min-width |
| xl | 1280px | min-width |
| 2xl | 1536px | min-width |

## Transitions & Animations

**Easing functions:** `[object Object]`

**Durations:** `0.15s`, `0.3s`

### Common Transitions

```css
transition: all;
transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), fill 0.3s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations

**slideUpAndFade**
```css
@keyframes slideUpAndFade {
  0% { opacity: 0; transform: translateY(2px); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

**slideRightAndFade**
```css
@keyframes slideRightAndFade {
  0% { opacity: 0; transform: translate(-2px); }
  100% { opacity: 1; transform: translate(0px); }
}
```

**slideDownAndFade**
```css
@keyframes slideDownAndFade {
  0% { opacity: 0; transform: translateY(-2px); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

**slideLeftAndFade**
```css
@keyframes slideLeftAndFade {
  0% { opacity: 0; transform: translate(2px); }
  100% { opacity: 1; transform: translate(0px); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (13 instances)

```css
.button {
  background-color: rgb(3, 7, 18);
  color: rgb(243, 244, 246);
  font-size: 9.6px;
  font-weight: 400;
  padding-top: 8px;
  padding-right: 8px;
  border-radius: 6px;
}
```

### Inputs (3 instances)

```css
.input {
  background-color: rgb(3, 7, 18);
  color: rgb(243, 244, 246);
  border-color: rgb(229, 231, 235);
  border-radius: 0px;
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (7 instances)

```css
.link {
  color: rgb(243, 244, 246);
  font-size: 14px;
  font-weight: 400;
}
```

### Badges (2 instances)

```css
.badge {
  color: rgb(3, 7, 18);
  font-size: 14px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Tabs (2 instances)

```css
.tab {
  color: rgb(243, 244, 246);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(243, 244, 246);
  border-radius: 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 4 instances, 3 variants

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(243, 244, 246);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(243, 244, 246);
  font-size: 12px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgb(255, 255, 255);
  color: rgb(243, 244, 246);
  padding: 0px 0px 0px 0px;
  border-radius: 1px;
  border: 0px none rgb(243, 244, 246);
  font-size: 16px;
  font-weight: 400;
```

**Variant 3** (1 instance)

```css
  background: rgb(30, 64, 175);
  color: rgb(243, 244, 246);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(243, 244, 246);
  font-size: 18px;
  font-weight: 400;
```

### Input — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(3, 7, 18);
  color: rgb(243, 244, 246);
  padding: 4px 32px 4px 0px;
  border-radius: 6px;
  border: 0px solid rgb(229, 231, 235);
  font-size: 16px;
  font-weight: 400;
```

## Layout System

**0 grid containers** and **67 flex containers** detected.

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 11x |
| row/nowrap | 55x |
| row/wrap | 1x |

**Gap values:** `24px`, `8px`, `normal 16px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 1 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#f3f4f6` | `#1e40af` | 7.93:1 | AAA |

## Design System Score

**Overall: 78/100 (Grade: C)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 70/100 |
| Shadow Consistency | 85/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 12 !important rules — prefer specificity over overrides
- 75% of CSS is unused — consider purging
- 497 duplicate CSS declarations

## Z-Index Map

**1 unique z-index values** across 1 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| sticky | 10,10 | div.z.-.1.0, div.l.g.:.a.b.s.o.l.u.t.e. .l.g.:.t.o.p.-.0. .l.g.:.z.-.1.0. .w.-.f.u.l.l. .f.l.e.x. .f.l.e.x.-.r.o.w. .i.t.e.m.s.-.c.e.n.t.e.r. .s.p.a.c.e.-.x.-.8. .p.x.-.2. .m.d.:.p.x.-.4 |

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Neue Montreal | self-hosted | 400, normal | normal |
| Supply | self-hosted | 400, normal | normal |

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |
| `md` | `300ms` | 300 |

### Easing Families

- **custom** (17 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`

## Component Anatomy

### button — 4 instances

**Slots:** label
**Variants:** secondary · primary
**Sizes:** xs · lg

| variant | count | sample label |
|---|---|---|
| default | 2 | PROPORTIONS |
| secondary | 1 |  |
| primary | 1 | SHOW TIMELINE OF INCIDENTS |

## Brand Voice

**Tone:** neutral · **Pronoun:** third-person · **Headings:** unknown (tight)

### Top CTA Verbs

- **proportions** (1)
- **map** (1)
- **show** (1)

### Button Copy Patterns

- "proportions" (1×)
- "map" (1×)
- "show timeline of incidents" (1×)

## Page Intent

**Type:** `unknown` (confidence 0)
**Description:** Index of Repression — by ELSC and Forensis/Forensic Architecture — is a database on the systematic repression of Palestinian Solidarity in Germany

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.404 |
| Shadow profile | none |
| Avg shadow blur | 0px |
| Max radius | 9999px |
| backdrop-filter in use | no |
| Gradients | 0 |

## Component Library

**Detected:** `tailwindcss` (confidence 0.842)

Evidence:
- tailwind-like class density 80%

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Neue Montreal` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
