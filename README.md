# Noctax

Landing page satu halaman untuk **Noctax**, unit pengolahan udara modular
untuk ruang teknis (lab, klinik, arsip). Gaya visual seperti dokumen
engineering: tenang, terukur, dengan skema ilustratif yang jujur
berlabel simulasi.

## Overview

- **Apa:** landing page company/product satu halaman (anchor-navigated).
- **Tujuan:** menjelaskan konsep, kemampuan, skema kerja, alur instalasi,
  spesifikasi, dan mengarah ke kontak email — sekaligus menjadi
  **frontend foundation** yang bisa dipakai ulang untuk project lain.
- **Untuk siapa:** developer frontend yang melanjutkan/mengembangkan
  project ini, atau memakainya sebagai template.
- **Kondisi saat ini:** single-page, tanpa router, konten Bahasa Indonesia,
  dark mode default. Semua angka performa berlabel ilustratif/simulasi.

## Features

- Responsive design (mobile menu, adaptive grids)
- Dark/light mode (persisted, follows OS on first visit)
- Custom design system (semantic tokens, Space Grotesk + Inter + mono)
- Technical visual language (grids, measurement rails, drawing refs, signal dots)
- Motion-based animation (`motion`, scroll-triggered reveals)
- Accessible interactions (skip link, landmarks, focus ring, reduced-motion support)

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI |
| TypeScript | Type safety |
| Vite 8 | Build tool / dev server |
| Tailwind CSS v4 | Styling (token-driven utilities) |
| Motion | Animation |
| Lucide React | Icons |
| clsx + tailwind-merge | Class composition (`lib/cn`) |
| oxlint | Linting |

No router, no component library (no shadcn/ui) — UI primitives are
hand-built in `components/ui`.

## Project Structure

```
src/
├── components/   # ui, decorative, navigation, layout, hero, sections
├── pages/        # page composition (home)
├── config/       # site strings, navigation model, theme constants
├── hooks/        # useTheme, usePrefersReducedMotion
├── lib/          # cn helper
└── styles/       # globals.css (tokens + base)
```

`components/ui` and `components/decorative` are reusable foundation;
`components/hero`, `components/sections`, `pages`, `config/site.ts`,
and `config/navigation.ts` are Noctax-specific. See
[docs/folder-structure.md](docs/folder-structure.md).

## Getting Started

```bash
git clone <repo-url>
cd landingpage
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

## Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Typecheck (`tsc -b`) + production build |
| `npm run lint` | Lint with oxlint |
| `npm run preview` | Preview the production build locally |

## Design System

Gray neutrals + mechanical blue structure + restrained cyan accent;
sharp radii (2/6/10px); display/body/mono type roles; light "clean
engineering doc" vs dark "technical workspace" (graphite, never black).
See [docs/design-system.md](docs/design-system.md) and
[docs/theming.md](docs/theming.md).

## Architecture

`main` → `App` (theme + layout chrome) → `pages/home` (section order) →
sections → `ui`/`decorative` primitives; `config` feeds strings downward.
See [docs/architecture.md](docs/architecture.md).

## Template Usage

This repo is built to be cloned as a frontend foundation: keep
`ui/`, `decorative/`, theme system, and navigation structure; replace
`site.ts`, `navigation.ts`, and page content. See
[docs/template-guide.md](docs/template-guide.md).

## Development Guidelines

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Documentation

- Architecture → [docs/architecture.md](docs/architecture.md)
- Folder Structure → [docs/folder-structure.md](docs/folder-structure.md)
- Design System → [docs/design-system.md](docs/design-system.md)
- Theming → [docs/theming.md](docs/theming.md)
- Components → [docs/components.md](docs/components.md)
- Routing → [docs/routing.md](docs/routing.md)
- Template Guide → [docs/template-guide.md](docs/template-guide.md)
- Changelog → [CHANGELOG.md](CHANGELOG.md)

## Roadmap

**Completed**

- Single-page landing (hero → CTA) with light/dark mode
- Config-driven navigation + brand strings (`src/config`)
- Page composition separated into `pages/home`

**In Progress**

- Final content pass (footer still notes placeholder content)

**Planned**

- Real multi-page routing (router + route layout) when a second page is needed
- Unused `public/icons.svg`: wire up or remove

## License

TODO: no license specified yet (`package.json` has no `license` field).
Add one (e.g. MIT) or mark proprietary before publishing.
