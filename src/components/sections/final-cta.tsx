import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { specHref } from "../../config/navigation";
import { mailtoHref, site } from "../../config/site";
import { CornerTicks, SignalDot } from "../decorative/marks";
import { Reveal } from "../ui/reveal";

export function FinalCta() {
  return (
    <section id="cta" aria-labelledby="cta-title" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 pb-16 md:px-8 md:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-l border border-border bg-surface px-6 py-12 md:px-14 md:py-16">
          <CornerTicks />
          <div className="tech-grid-faint absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="font-tech flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
                <SignalDot label="slot survei" />
                06 — Langkah berikut · slot survei minggu ini: TERBUKA
              </p>
              <h2 id="cta-title" className="display-section mt-4 font-semibold">
                Kirim denah. Terima skema & estimasi tertulis.
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-muted">
                Balas dalam 1 hari kerja: lembar ukur awal, konfigurasi modul yang
                disarankan, dan estimasi biaya instalasi. Tanpa presentasi penjualan.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Button href={mailtoHref()} className="w-full sm:w-auto">
                Minta skema unit
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={specHref} variant="secondary" className="w-full sm:w-auto">
                Baca spesifikasi dulu
              </Button>
              <p className="font-tech text-[10.5px] tracking-[0.1em] text-tick">
                {site.email.toUpperCase()} · {site.locations.map((l) => l.toUpperCase()).join(" / ")}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
