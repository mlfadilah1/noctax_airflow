# Architecture

How Noctax is put together: what renders what, and which direction
dependencies are allowed to flow.

```
User
 ↓
main.tsx (StrictMode + mount)
 ↓
App (theme state + layout chrome)
 ↓
Layout (Navbar … Footer)
 ↓
Page (pages/home/home.tsx)
 ↓
Sections (hero + 6 content sections)
 ↓
UI primitives + decorative marks
```

## Responsibilities

| Layer | Location | Job |
|---|---|---|
| Entry | `src/main.tsx` | Mount React, import global CSS. No logic. |
| App shell | `src/App.tsx` | Own `useTheme` state, render skip link + `Navbar` + `HomePage` + `Footer`. No content. |
| Pages | `src/pages/` | Compose sections in order. Page = section playlist. |
| Sections | `src/components/sections/`, `src/components/hero/` | Project-specific content blocks, each owning its own `id` anchor. |
| Layout | `src/components/layout/` | `Footer`. Page-agnostic chrome. |
| Navigation | `src/components/navigation/` | `Navbar`, `ThemeToggle`. Reads links from `config/navigation`. |
| UI primitives | `src/components/ui/` | `Button`, `Reveal`. Reusable anywhere, no brand knowledge. |
| Decorative | `src/components/decorative/` | `SignalDot`, `MicroLabel`, `SectionIndex`, `CornerTicks`, `Coord`. Visual language, no content. |
| Config | `src/config/` | Brand strings (`site`), nav model (`navigation`), theme constants (`theme`). |
| Hooks | `src/hooks/` | `useTheme`, `usePrefersReducedMotion`. |
| Lib | `src/lib/` | `cn` (clsx + tailwind-merge). |
| Styles | `src/styles/globals.css` | Tokens (`:root` / `.dark`), Tailwind v4 `@theme inline` mapping, base typography, utilities. |

## Dependency direction

```
Pages ──→ Sections ──→ UI primitives / decorative
  │            │
  └────→ Config ←─────┘
Hooks ──→ Config
```

Rules:

1. Sections may import from `ui/`, `decorative/`, `config/`, `hooks/`, `lib/`. Never from another section or from `pages/`.
2. UI primitives and decorative marks import only from `lib/` (and React). They must not import `config/` — no brand strings inside reusable components.
3. `config/` imports nothing from `components/`. It is the leaf every layer reads from.
4. `App` owns theme state and passes it down (`Navbar theme={theme}`). No context provider exists today; props are enough at this size.

## Theming flow

```
useTheme (state + localStorage + <html> class)
 → .dark class on <html>
 → CSS vars switch (:root vs .dark in globals.css)
 → Tailwind utilities (bg-background, text-foreground …) re-resolve
```

See `docs/theming.md` for details.

## Animation flow

- Entrance: `Reveal` (`motion/react`, `whileInView`, `once: true`) wraps section blocks.
- Hero: staggered `motion.div` entrances + animated SVG airflow dashes in `HeroVisual`.
- Both check `usePrefersReducedMotion()` and render statically when reduced motion is requested; a CSS `prefers-reduced-motion` kill-switch in `globals.css` covers the rest.
