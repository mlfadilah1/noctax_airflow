import { motion } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { ctaHref, howItWorksHref } from "../../config/navigation";
import { MicroLabel, SignalDot } from "../decorative/marks";
import { HeroVisual } from "./hero-visual";
import { usePrefersReducedMotion } from "../../hooks/use-reduced-motion";

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const anim = (delay: number) =>
    reduced ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section id="atas" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="tech-grid absolute inset-0" aria-hidden="true" />
      {/* vertical measurement rail (desktop only) */}
      <div className="absolute bottom-0 left-6 top-24 hidden w-px bg-border/70 xl:block" aria-hidden="true">
        {[8, 32, 56, 80].map((t) => (
          <span key={t} className="font-tech absolute -left-1 text-[9px] text-tick" style={{ top: `${t}%` }}>
            — {t * 10}
          </span>
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 pb-14 md:px-8 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        <div>
          <motion.div {...anim(0)}>
            <span className="inline-flex items-center gap-2 rounded-s border border-border bg-surface px-2.5 py-1.5">
              <SignalDot label="status dokumen" />
              <MicroLabel>SPEC SHEET · REV 2.4 · SISTEM VENTILASI PRESISI</MicroLabel>
            </span>
          </motion.div>

          <motion.h1 id="hero-title" className="display-hero mt-5 font-semibold" {...anim(0.08)}>
            Udara yang terukur,
            <br />
            ruangan yang <span className="text-primary dark:text-accent">tenang.</span>
          </motion.h1>

          <motion.p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-muted" {...anim(0.16)}>
            Noctax adalah unit pengolahan udara modular untuk ruang teknis — lab, klinik,
            dan arsip. Setiap aliran didokumentasikan, setiap tekanan bisa diverifikasi.
            Tanpa klaim berlebihan, tanpa dashboard yang berisik.
          </motion.p>

          <motion.div className="mt-7 flex flex-wrap items-center gap-3" {...anim(0.24)}>
            <Button href={ctaHref}>
              Minta skema unit
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href={howItWorksHref} variant="secondary">
              <FileText className="size-4" aria-hidden="true" />
              Lihat cara kerja
            </Button>
          </motion.div>

          <motion.dl className="mt-8 grid max-w-xl grid-cols-3 divide-x divide-border border-y border-border" {...anim(0.32)}>
            {[
              ["MODUL", "3 tahap"],
              ["DOKUMEN", "Terbuka"],
              ["GARANSI", "5 tahun"],
            ].map(([k, v]) => (
              <div key={k} className="px-4 py-3 first:pl-0">
                <dt className="font-tech text-[10px] uppercase tracking-[0.18em] text-muted">{k}</dt>
                <dd className="mt-0.5 text-[15px] font-medium">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div {...anim(0.2)}>
          <HeroVisual />
          <p className="font-tech mt-2.5 flex justify-between text-[10px] tracking-[0.12em] text-tick">
            <span>SKALA 1:20 — TOLERANSI ±0.5</span>
            <span className="hidden sm:inline">DWG. NTX-240</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
