# Design System

Visual direction: **technical, clean, precise, modern, restrained futurism**.
The page reads like engineering documentation — measurement rails,
drawing numbers, mono labels — not marketing decoration.

## Color system

Semantic tokens defined in `src/styles/globals.css` as `:root` (light)
and `.dark` overrides, exposed to Tailwind via `@theme inline`.
Always use the semantic utility (`bg-background`, `text-muted`,
`border-border`); never hardcode hex in components.

| Token | Light | Dark | Used for |
|---|---|---|---|
| `background` | `#eceeec` | `#16191d` | Page base (graphite, never pure black) |
| `foreground` | `#1b2126` | `#e6eaec` | Body text |
| `surface` | `#f5f6f4` | `#1d2228` | Cards, panels, badges |
| `surface-muted` | `#dfe4e3` | `#242b32` | Alt rows, schematic fills |
| `surface-inset` | `#e2e6e5` | `#14181c` | Recessed areas (fan housing) |
| `border` | `#c6cfcd` | `#2d343c` | Default borders, dividers |
| `border-strong` | `#a9b6b4` | `#3d4650` | Emphasis borders, schematic strokes |
| `primary` | `#1d4e9e` mechanical blue | `#6f9bd8` | Headings accent, CTA fill (light) |
| `primary-deep` | `#163a6e` | `#3d64a3` | CTA hover, logo mark |
| `primary-steel` | `#4f7396` | `#7d95ad` | Schematic linework |
| `primary-foreground` | `#f4f7fa` | `#0e141b` | Text on primary fill |
| `accent` | `#0a7f99` cyan | `#38d3ec` cyan | Toggles, highlights, focus rings, signal |
| `accent-bright` | `#0899bb` | `#4fdcf2` | Accent hover (dark) |
| `accent-foreground` | `#062b34` | `#062b34` | Text on accent fill |
| `accent-track` | `#b9d9de` | `#1e3a42` | Active diagram highlight fill |
| `muted` | `#5b656b` | `#9aa6ad` | Secondary text |
| `muted-foreground` | `#6b767c` | `#7d8a91` | Tertiary text |
| `success` | `#1f7a4d` | `#4cc38a` | Reserved (defined, rarely used yet) |
| `grid-line` | blue 9% | blue 10% | Technical grid backdrops |
| `tick` | `#9aa7a5` | `#4a545c` | Measurement ticks, index numbers |

Palette roles: neutral **grays** carry the layout, **mechanical blue**
carries structure/CTA, **cyan accent** is used sparingly as signal
(status dots, active states, focus).

## Typography

| Role | Font | Usage |
|---|---|---|
| Display | Space Grotesk (`--font-display`, `font-display`) | `h1–h3`, logo, stat values |
| Body | Inter (`--font-sans`, default) | Paragraphs, lists, table |
| Technical | Mono stack (`--font-tech`, `font-tech`) | Labels, codes, readouts, coordinates |

Scale helpers: `.display-hero` (`clamp(2.4rem, 5.4vw + 1rem, 4.6rem)`),
`.display-section` (`clamp(1.65rem, 2.6vw + 1rem, 2.6rem)`).
Body is 16px / 1.65. Micro labels: 10–12px mono, uppercase,
tracking 0.1–0.2em (see `MicroLabel`).

## Spacing

Sections use `py-16 md:py-24` inside a `max-w-6xl` container with
`px-5 md:px-8`. Content rhythm comes from stacked blocks
(`mt-4/5/6/7/8/10`) rather than a strict numeric scale — consistent
enough for one page, worth tokenizing if the site grows.

## Radius

Three tokens, deliberately sharp (instrument feel):

| Token | Value | Usage |
|---|---|---|
| `--radius-s` (`rounded-s`) | 2px | Badges, ticks, focus rings |
| `--radius-m` (`rounded-m`) | 6px | Buttons, cards, inputs |
| `--radius-l` (`rounded-l`) | 10px | Large panels (hero visual, CTA, diagrams) |

## Decorative language

These are **visual language, not random decoration** — every mark mimics
a drawing-sheet convention (`components/decorative/marks.tsx`):

- **Measurement marks** — hero side rail (`— 80/320/560/800`), dimension lines (`L — 1200 MODUL`, `H-600`) on schematics.
- **Technical lines** — `.tech-grid` / `.tech-grid-faint` backdrops, `CornerTicks` frames on diagram panels.
- **Signal indicators** — `SignalDot` (pulsing cyan) for status: logo "sistem aktif", hero badge, CTA "slot survei".
- **Grid** — SVG `pattern` grids inside `HeroVisual` and `VisualizationSection` diagrams.
- **Coordinate markers** — `Coord` (`X.44 / Y.08`), drawing refs (`DWG. NTX-240`, `FIG. 01`, `REV 2.4`).

Honesty rule used across schematics: illustrative numbers are labelled
`SIMULASI` / `*ANGKA ILUSTRATIF` so placeholders are never mistaken
for measured data.
