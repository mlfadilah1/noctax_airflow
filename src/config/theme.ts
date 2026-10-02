/**
 * Theme configuration.
 *
 * REUSABLE — storage key, default, and `<meta name="theme-color">`
 * values live here so `hooks/use-theme` and `index.html` stay in sync.
 * Color tokens themselves live in `styles/globals.css` (`:root` / `.dark`).
 */

export type Theme = "dark" | "light";

export const themeConfig = {
  storageKey: "noctax-theme",
  defaultTheme: "dark" as Theme,
  metaColor: {
    dark: "#16191d",
    light: "#eceeec",
  } satisfies Record<Theme, string>,
};
