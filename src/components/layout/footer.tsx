import { footerDocLinks, footerPageLinks } from "../../config/navigation";
import { mailtoHref, site } from "../../config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface" aria-label="Footer">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:px-8 md:py-14 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-s bg-primary-deep font-display text-sm font-bold text-white dark:bg-accent dark:text-accent-foreground" aria-hidden="true">{site.shortMark}</span>
            <span className="font-display text-[15px] font-semibold tracking-tight">{site.name}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {site.footerTagline}
          </p>
          <p className="font-tech mt-4 text-[10.5px] tracking-[0.12em] text-tick">
            {site.footerMeta}
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3" aria-label="Tautan footer">
          <div>
            <h3 className="font-tech text-[11px] uppercase tracking-[0.18em] text-muted">Halaman</h3>
            <ul className="mt-3 space-y-2.5 text-[14.5px]">
              {footerPageLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-accent">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-tech text-[11px] uppercase tracking-[0.18em] text-muted">Dokumen</h3>
            <ul className="mt-3 space-y-2.5 text-[14.5px]">
              {footerDocLinks.map((l) => (
                <li key={l.href + l.label}><a href={l.href} className="hover:text-accent">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-tech text-[11px] uppercase tracking-[0.18em] text-muted">Kontak</h3>
            <ul className="mt-3 space-y-2.5 text-[14.5px]">
              <li><a href={mailtoHref()} className="hover:text-accent">{site.email}</a></li>
              <li className="text-muted">{site.locations[0]} · {site.locations[1]}<br />{site.locations[2]}</li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="font-tech mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-4 text-[10.5px] tracking-[0.12em] text-tick md:px-8">
          <span>{site.legal}</span>
          <span className="hidden sm:inline">{site.coordinates}</span>
        </div>
      </div>
    </footer>
  );
}
