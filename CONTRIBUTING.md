# Contributing

Simple rules to keep the codebase consistent.

## Branches

```
feature/<short-topic>   new section, page, or behavior
fix/<short-topic>       bug or visual regression
refactor/<short-topic>  structure-only change, no visuals
docs/<short-topic>      documentation only
```

Keep branches short-lived; one concern per branch.

## Commits

Prefix + imperative subject:

```
feat: add specification table to supporting section
fix: mobile menu stays open after navigation
refactor: move nav links into config/navigation
docs: document theme token flow
style: align CTA spacing on mobile
chore: bump vite to 8.x
```

## Components

- Reusable pieces go in `components/ui` or `components/decorative` —
  no brand strings, no `config/site` imports there.
- Page content goes in `components/sections` or `components/hero`.
- New nav links / brand strings go in `src/config`, never hardcoded
  in two places.
- Props over context for cross-component state at this size.

## Naming

- Files: `kebab-case.tsx` (`hero-visual.tsx`, `final-cta.tsx`).
- Components: `PascalCase` matching the file (`FinalCta`).
- Hooks: `use-*` (`use-theme.ts` → `useTheme`).
- CSS tokens: `--background`, `--border-strong` (semantic, not hex names).

## Markup, accessibility, responsive

- Semantic HTML: one `h1` per page, sections with `aria-labelledby`,
  real `<ul>/<ol>/<table>` where the content is a list/table.
- Every interactive element reachable by keyboard with a visible
  focus state (global `:focus-visible` ring exists — don't remove it).
- Keep the skip link in `App.tsx` pointing at `<main id="konten">`.
- Design mobile-first; verify at 360px and desktop widths.
- Honor reduced motion: gate new animation on
  `usePrefersReducedMotion()` like `Reveal`/`HeroVisual` do.

## Theme support

- Use semantic utilities (`bg-surface`, `text-muted`, `border-border`).
  No hardcoded hex/rgb in components.
- Test every change in both dark and light mode.
- New colors: add to `:root` **and** `.dark` in `styles/globals.css`,
  map in `@theme inline` (see `docs/theming.md`).

## Verification before PR

```bash
npm run build    # must pass (includes tsc)
npm run lint     # must pass
```

Plus manual: dark/light toggle, mobile menu, all anchor links land on
a section, no console errors.

## Pull requests

- Describe what changed and what you verified (build + manual checks).
- Screenshots for any visual change (dark + light).
- Docs update in the same PR if you changed structure, tokens,
  config shape, or scripts.
