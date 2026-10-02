# Routing

## Current state: one page, anchor navigation

There is **no router** in this project (no `react-router`, no file
routes — check `package.json`). The site is a single page composed in
`pages/home/home.tsx`, and navigation is same-page anchors with
`scroll-behavior: smooth`:

| Link | Target section (`id`) |
|---|---|
| `#atas` | Hero |
| `#konsep` | 01 · Konsep inti |
| `#kemampuan` | 02 · Kemampuan |
| `#skema` | 03 · Visualisasi teknis |
| `#alur` | 04 · Alur kerja |
| `#spesifikasi` | 05 · Spesifikasi & FAQ |
| `#cta` | 06 · CTA penutup |

Link targets are centralized in `src/config/navigation.ts`
(`mainLinks`, `footerPageLinks`, `footerDocLinks`, plus named exports
`ctaHref`, `topHref`, `howItWorksHref`, `specHref` used by buttons).
Section `id` attributes live in each section component.
When adding a section, add its `id` **and** a config entry together —
an anchor with no matching `id` fails silently.

## Going multi-page (planned)

Recommended structure when a second page is actually needed:

```
src/pages/
├── home/home.tsx        # /  (exists today)
└── product/product.tsx  # /product (future example)
```

Steps:

1. Install a router (`react-router` recommended with Vite).
2. Move the `Navbar`/`Footer` shell into a route layout; render
   pages via `<Outlet />` instead of `<HomePage />` directly in `App`.
3. Extend `config/navigation.ts` with path entries (`to: "/product"`)
   alongside the existing anchor entries.
4. Keep `components/ui`, `components/decorative`, `hooks`, `lib`,
   and the token system untouched — they are already page-agnostic.

Do not create placeholder pages before they are needed.
