# Theming

Dark/light mode is class-based and token-driven. No theme provider,
no CSS-in-JS — state in one hook, colors in one stylesheet.

## How it works

1. `hooks/use-theme.ts` owns `theme: "dark" | "light"`.
   - Initial value: `localStorage["noctax-theme"]`, else OS
     `prefers-color-scheme` (light → light, otherwise dark).
   - On change: toggles `.dark` on `<html>`, sets
     `style.colorScheme`, updates `<meta name="theme-color">`,
     persists to localStorage.
2. `src/styles/globals.css` defines semantic vars twice:
   `:root` (light) and `.dark` (dark). Tailwind v4 maps them via
   `@theme inline` (`--color-background: var(--background)`, …),
   so utilities like `bg-background` / `dark:bg-accent` re-resolve
   automatically. `.theme-fade` animates the switch (0.35s).
3. Constants (storage key, default, meta colors) live in
   `src/config/theme.ts` so the hook and `index.html` can't drift.
   `index.html` starts with `<html class="dark">` to match the default
   and avoid a first-paint flash.

## Toggle

`ThemeToggle` in `components/navigation/navbar.tsx` — a bordered
icon button (Sun in dark, Moon in light):

```tsx
<ThemeToggle theme={theme} onToggle={toggle} />
```

`Navbar` receives both via props from `App`:

```tsx
const { theme, toggle } = useTheme();
<Navbar theme={theme} onToggleTheme={toggle} />
```

## Using tokens in components

Use semantic utilities, never hardcoded colors:

```tsx
<div className="border border-border bg-surface text-foreground">
  <p className="text-muted">secondary copy</p>
  <span className="text-accent">signal / active</span>
</div>
```

Dark-specific tweaks use the `dark:` variant
(`dark:bg-accent dark:text-accent-foreground`), enabled by
`@custom-variant dark (&:where(.dark, .dark *))` in `globals.css`.

## Adding a new semantic color

1. Add the var to `:root` **and** `.dark` in `globals.css`.
2. Map it in the `@theme inline` block
   (`--color-<name>: var(--<name>)`).
3. Use it as `bg-<name>` / `text-<name>` / `border-<name>`.
