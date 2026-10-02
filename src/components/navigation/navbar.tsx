import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/cn";
import { ctaHref, mainLinks, topHref } from "../../config/navigation";
import { site } from "../../config/site";
import { SignalDot } from "../decorative/marks";

export function ThemeToggle({ theme, onToggle }: { theme: "dark" | "light"; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      aria-pressed={theme === "dark"}
      className="inline-flex size-9 items-center justify-center rounded-m border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? <Sun className="size-[17px]" aria-hidden="true" /> : <Moon className="size-[17px]" aria-hidden="true" />}
    </button>
  );
}

export function Navbar({ theme, onToggleTheme }: { theme: "dark" | "light"; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      {/* measurement strip */}
      <div className="tech-grid-faint hidden h-4 border-b border-border/60 md:block" aria-hidden="true" />
      <nav aria-label="Navigasi utama" className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href={topHref} className="flex items-center gap-2.5" aria-label={`${site.name} — kembali ke atas`}>
          <span className="grid size-8 place-items-center rounded-s bg-primary-deep font-display text-sm font-bold text-white dark:bg-accent dark:text-accent-foreground" aria-hidden="true">
            {site.shortMark}
          </span>
          <span className="leading-none">
            <span className="block font-display text-[15px] font-semibold tracking-tight">{site.name}</span>
            <span className="font-tech block text-[10px] uppercase tracking-[0.2em] text-muted">{site.tagline}</span>
          </span>
          <SignalDot className="ml-1" label="sistem aktif" />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {mainLinks.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group font-tech text-[12px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground"
              >
                <span className="mr-1.5 text-[10px] text-tick">0{i + 1}</span>
                <span className="group-hover:text-accent">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <span className="font-tech hidden text-[11px] tracking-[0.12em] text-tick xl:inline" aria-hidden="true">
            {site.revision} — STABLE
          </span>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={ctaHref}
            className="hidden h-9 items-center rounded-m bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep sm:inline-flex dark:bg-accent dark:text-accent-foreground dark:hover:bg-accent-bright"
          >
            Minta skema
          </a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-m border border-border text-foreground lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-3 lg:hidden">
          <ul className="divide-y divide-border">
            {mainLinks.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[15px] font-medium"
                >
                  <span>{l.label}</span>
                  <span className="font-tech text-[11px] text-tick">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="mt-3 flex h-11 items-center justify-center rounded-m bg-primary font-medium text-primary-foreground dark:bg-accent dark:text-accent-foreground"
          >
            Minta skema
          </a>
        </div>
      )}
    </header>
  );
}
