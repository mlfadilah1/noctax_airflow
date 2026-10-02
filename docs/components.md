# Components

Only the components a developer needs to reach for regularly are
listed here. Small one-off pieces inside sections are not documented —
read the section file directly.

## Button

Purpose: single button/anchor with consistent styling.
Location: `components/ui/button.tsx`.

```tsx
import { Button } from "./components/ui/button";

<Button href="#cta">Minta skema unit</Button>;
<Button href="#skema" variant="secondary">Lihat cara kerja</Button>;
<Button variant="ghost" size="sm" onClick={fn}>Tutup</Button>;
```

Props: `variant` (`primary` | `secondary` | `ghost`, default `primary`),
`size` (`md` | `sm`, default `md`). Pass `href` to render an `<a>`,
omit it to render a `<button>` (all native props pass through).

Use when: any CTA or action. Don't use when: you need a native
`<a>` style that intentionally breaks the system (rare).

## Reveal

Purpose: scroll-triggered entrance (`whileInView`, once).
Location: `components/ui/reveal.tsx`.

```tsx
import { Reveal } from "./components/ui/reveal";

<Reveal index={1}>
  <h2>…</h2>
</Reveal>;
```

Props: `index` (stagger delay, capped at 0.4s), `as`
(`div` | `section` | `li` | `span`). Renders statically when the
user prefers reduced motion.

Use when: section blocks entering the viewport. Don't use when:
above-the-fold hero content (hero uses its own staggered `motion.div`).

## ThemeToggle

Purpose: dark/light switch.
Location: `components/navigation/navbar.tsx` (exported alongside `Navbar`).

```tsx
<ThemeToggle theme={theme} onToggle={toggle} />
```

Use when: inside navigation chrome. Don't use when: anywhere else —
lift `useTheme` to the shell and pass props down.

## Navbar

Purpose: fixed global header (measurement strip, brand, anchor links,
revision tag, CTA, mobile menu).
Location: `components/navigation/navbar.tsx`.
Links come from `config/navigation.ts` (`mainLinks`); brand/revision
from `config/site.ts`. To change navigation, edit config — not the component.

## Footer

Purpose: global footer (brand, link columns, contact, legal strip).
Location: `components/layout/footer.tsx`.
Columns come from `config/navigation.ts`
(`footerPageLinks`, `footerDocLinks`); strings from `config/site.ts`.

## Decorative marks

Purpose: the technical visual language (see `docs/design-system.md`).
Location: `components/decorative/marks.tsx`.

| Component | Job |
|---|---|
| `SignalDot` | Pulsing cyan status dot (`<SignalDot label="sistem aktif" />`) |
| `MicroLabel` | Mono uppercase badge text |
| `SectionIndex` | `02 / Kemampuan` heading with rule |
| `CornerTicks` | Precision-corner frame for panels |
| `Coord` | Coordinate annotation, hidden on mobile |

Use when: annotating a panel/section in the drawing-sheet style.
Don't use when: building content hierarchy — use real headings.

## HeroVisual

Purpose: `FIG. 01` airflow schematic (pure SVG + CSS, animated dashes).
Location: `components/hero/hero-visual.tsx`.
Illustrative readouts are labelled `SIMULASI` — keep that convention
for any new figures.
