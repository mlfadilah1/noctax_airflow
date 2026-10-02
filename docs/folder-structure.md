# Folder Structure

Actual tree (files that exist today):

```
src/
├── components/
│   ├── decorative/marks.tsx      signal dot, micro label, section index, corner ticks, coord
│   ├── hero/hero.tsx             hero section + measurement rail
│   ├── hero/hero-visual.tsx      FIG. 01 airflow schematic (SVG)
│   ├── layout/footer.tsx         footer
│   ├── navigation/navbar.tsx     navbar + theme toggle
│   ├── sections/concept.tsx      01 · Konsep inti
│   ├── sections/capabilities.tsx 02 · Kemampuan
│   ├── sections/visualization.tsx 03 · Visualisasi teknis (interactive tabs)
│   ├── sections/process.tsx      04 · Alur kerja
│   ├── sections/supporting.tsx   05 · Spesifikasi + FAQ
│   ├── sections/final-cta.tsx    06 · CTA penutup
│   └── ui/button.tsx, ui/reveal.tsx
├── pages/home/home.tsx           home page composition
├── config/site.ts                brand strings (project-specific)
├── config/navigation.ts          nav link model (project-specific)
├── config/theme.ts               theme constants (reusable)
├── hooks/use-theme.ts            dark/light state
├── hooks/use-reduced-motion.ts   prefers-reduced-motion hook
├── lib/cn.ts                     class merge helper
├── styles/globals.css            tokens + base styles
├── App.tsx                       shell: navbar + page + footer
└── main.tsx                      mount entry
```

Static files live in `public/` (`favicon.svg`; `icons.svg` is currently unused legacy — see note below).

## What each folder is for

| Folder | Purpose | Example |
|---|---|---|
| `components/ui` | Reusable primitives, zero brand knowledge | `Button`, `Reveal` |
| `components/decorative` | Reusable visual-language marks | `SignalDot`, `SectionIndex` |
| `components/navigation` | Global navigation chrome | `Navbar`, `ThemeToggle` |
| `components/layout` | Global layout chrome | `Footer` |
| `components/hero` | Home hero (project-specific) | `Hero`, `HeroVisual` |
| `components/sections` | Home content sections (project-specific) | `ConceptSection`, `FinalCta` |
| `pages` | Page-level composition (imports sections, owns order) | `pages/home/home.tsx` |
| `config` | Centralized strings + constants sections/nav read from | `site.ts`, `navigation.ts` |
| `hooks` | Reusable React state/effects | `useTheme` |
| `lib` | Pure utility functions | `cn` |
| `styles` | Global CSS: tokens, base, utilities | `globals.css` |

## Reusable vs project-specific

**Reusable foundation** (keep when starting a new project):

- `components/ui/*`, `components/decorative/*`
- `components/navigation/navbar.tsx` (structure; links come from config)
- `components/layout/footer.tsx` (structure; strings come from config)
- `hooks/*`, `lib/*`, `config/theme.ts`, `styles/globals.css` (token *system*; values can change)

**Project-specific** (replace for a new project):

- `components/hero/*`, `components/sections/*`
- `pages/home/*`, `config/site.ts`, `config/navigation.ts`
- `index.html` title/meta/fonts, `public/favicon.svg`

> Note: `public/icons.svg` contains social/doc symbol definitions (bluesky,
> discord, github, x) that nothing imports today. Either wire it up or delete
> it in a follow-up — it ships unused right now.
