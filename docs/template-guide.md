# Template Guide

How to start a new project from this foundation without carrying
Noctax-specific content along.

```
Template Foundation (this repo)
        ↓  replace config + content, keep system
New Project
        ↓
config/ → components/ → pages/ → index.html
```

## What is reusable?

Keep as-is (adjust token *values* only if the brand needs it):

- `components/ui/` — `Button`, `Reveal`
- `components/decorative/` — signal dots, section indexes, corner ticks
- `components/navigation/navbar.tsx` — structure (links come from config)
- `components/layout/footer.tsx` — structure (strings come from config)
- `config/theme.ts`, `hooks/use-theme.ts`, `hooks/use-reduced-motion.ts`
- `lib/cn.ts`
- `styles/globals.css` — token system, typography, grid utilities
- `index.html` — font loading pattern, meta pattern
- Accessibility patterns: skip link (`App.tsx`), focus-visible ring,
  `prefers-reduced-motion` handling, semantic landmarks

## What should be replaced?

- `config/site.ts` — name, tagline, description, email, locations, revision, drawing number, legal line
- `config/navigation.ts` — nav items and anchor/path targets
- `index.html` — `<title>`, meta description, `theme-color`, fonts
- `public/favicon.svg` — logo mark
- `components/hero/*`, `components/sections/*` — all page content
- `pages/home/home.tsx` — section composition (or add pages)
- Token *values* in `globals.css` if the brand palette differs (keep the token *names*)
- `public/icons.svg` — decide: wire up or delete (currently unused)

Reusable components are intentionally generic (`Button`, `Hero` is the
only brand-adjacent name and it describes position, not content).
If you catch yourself writing `NewBrandCard`, stop — put the brand in
config and keep the component generic.

## Recommended workflow for a new project

1. Copy the repo (new git history); confirm `npm run build` passes first.
2. Update `config/site.ts` with the new brand.
3. Update `config/navigation.ts` with the new structure.
4. Adjust token values in `styles/globals.css` (`:root` + `.dark` together).
5. Update `index.html` (title, meta, fonts) and `public/favicon.svg`.
6. Replace `pages/home/home.tsx` composition and the sections it uses;
   delete sections you don't need.
7. Keep `ui/`, `decorative/`, `hooks/`, `lib/` — extend, don't fork.
8. Verify: `npm run dev` (dark + light + mobile + reduced motion),
   then `npm run build` and `npm run lint`.

## Verification checklist

- [ ] No "Noctax" / "NTX" strings outside `CHANGELOG.md` history
- [ ] All nav anchors match a real section `id`
- [ ] `bg-background` etc. used everywhere — no hardcoded hex in components
- [ ] Dark and light both readable (accent contrast differs per mode)
- [ ] Mobile menu opens/closes; skip link present
- [ ] `npm run build` clean, `npm run lint` clean
