# Changelog

Format follows Keep a Changelog (Unreleased / Added / Changed / Fixed).
No invented history — entries start from the documented restructure.

## [Unreleased]

### Added

- `src/config/`: `site.ts` (brand strings), `navigation.ts` (nav model),
  `theme.ts` (storage key, default, meta colors)
- `src/pages/home/home.tsx`: home page composition extracted from `App`
- `src/styles/globals.css`: global stylesheet moved from `src/index.css`
- Docs: `docs/` (architecture, folder-structure, design-system, theming,
  components, routing, template-guide), `README.md` rewrite,
  `CONTRIBUTING.md`

### Changed

- `App.tsx` is now a thin shell (theme state + navbar + page + footer)
- `Navbar`, `Footer`, `FinalCta` read links/strings from `src/config`
- `useTheme` reads constants from `config/theme`
- Stale `MECA-AIR` header comment in CSS renamed to `NOCTAX`

### Fixed

- Footer "Dokumen" list keys are now unique (two entries shared `#alur`)

### Known issues

- `public/icons.svg` ships unused (legacy social/doc symbols)
- Footer meta notes placeholder content pending final copy
