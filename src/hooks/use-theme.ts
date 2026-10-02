import { useCallback, useEffect, useState } from "react";
import { themeConfig, type Theme } from "../config/theme";

function initialTheme(): Theme {
  if (typeof window === "undefined") return themeConfig.defaultTheme;
  const saved = window.localStorage.getItem(themeConfig.storageKey);
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", themeConfig.metaColor[theme]);
    window.localStorage.setItem(themeConfig.storageKey, theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle };
}
