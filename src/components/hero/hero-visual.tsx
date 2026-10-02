import { motion } from "motion/react";
import { usePrefersReducedMotion } from "../../hooks/use-reduced-motion";
import { Coord } from "../decorative/marks";

/**
 * Abstract technical object: airflow instrument schematic.
 * Pure SVG + CSS — no stock imagery, no fake metrics.
 * Values are labelled SIMULASI to stay honest placeholder content.
 */
export function HeroVisual() {
  const reduced = usePrefersReducedMotion();
  return (
    <div className="relative overflow-hidden rounded-l border border-border bg-surface" role="img" aria-label="Skema ilustrasi unit aliran udara Noctax: filter, kipas, dan sensor tekanan">
      {/* header strip */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="font-tech text-[10px] uppercase tracking-[0.18em] text-muted">FIG. 01 — UNIT ALIRAN UDARA</span>
        <span className="font-tech flex items-center gap-1.5 text-[10px] tracking-[0.14em] text-accent">
          <span className="inline-block size-1.5 rounded-full bg-accent" />
          SIMULASI
        </span>
      </div>

      <svg viewBox="0 0 520 340" className="block h-auto w-full" aria-hidden="true">
        <defs>
          <pattern id="heroGrid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M26 0H0v26" fill="none" stroke="var(--grid-line)" strokeWidth="1" />
          </pattern>
          <linearGradient id="ductFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--primary-deep)" stopOpacity="0.16" />
            <stop offset="0.5" stopColor="var(--primary)" stopOpacity="0.1" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0.22" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="520" height="340" fill="url(#heroGrid)" />

        {/* main duct */}
        <rect x="48" y="128" width="424" height="88" rx="4" fill="url(#ductFill)" stroke="var(--border-strong)" strokeWidth="1.5" />
        {/* filter stage */}
        <g>
          <rect x="86" y="112" width="66" height="120" rx="3" fill="var(--surface-muted)" stroke="var(--border-strong)" strokeWidth="1.5" />
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1="94" y1={132 + i * 22} x2="144" y2={132 + i * 22} stroke="var(--tick)" strokeWidth="1.4" />
          ))}
          <text x="119" y="248" textAnchor="middle" fontSize="9" fill="var(--muted)" fontFamily="monospace" letterSpacing="1.5">FLT-A</text>
        </g>
        {/* fan stage */}
        <g>
          <circle cx="252" cy="172" r="46" fill="var(--surface-inset)" stroke="var(--border-strong)" strokeWidth="1.5" />
          <circle cx="252" cy="172" r="34" fill="none" stroke="var(--primary-steel)" strokeWidth="1.2" strokeDasharray="4 4" />
          <g stroke="var(--primary-steel)" strokeWidth="2" strokeLinecap="round">
            <line x1="252" y1="172" x2="252" y2="142" />
            <line x1="252" y1="172" x2="278" y2="187" />
            <line x1="252" y1="172" x2="226" y2="187" />
          </g>
          <circle cx="252" cy="172" r="6" fill="var(--accent)" />
          <text x="252" y="248" textAnchor="middle" fontSize="9" fill="var(--muted)" fontFamily="monospace" letterSpacing="1.5">FAN-02</text>
        </g>
        {/* sensor stage */}
        <g>
          <rect x="352" y="112" width="66" height="120" rx="3" fill="var(--surface-muted)" stroke="var(--border-strong)" strokeWidth="1.5" />
          <circle cx="385" cy="160" r="10" fill="none" stroke="var(--accent)" strokeWidth="1.6" />
          <line x1="385" y1="170" x2="385" y2="206" stroke="var(--accent)" strokeWidth="1.4" />
          <text x="385" y="248" textAnchor="middle" fontSize="9" fill="var(--muted)" fontFamily="monospace" letterSpacing="1.5">PRS-Δ</text>
        </g>

        {/* airflow dashes */}
        {!reduced ? (
          <motion.g
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0.35 }}
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <line x1="170" y1="156" x2="196" y2="156" />
            <line x1="170" y1="172" x2="196" y2="172" />
            <line x1="170" y1="188" x2="196" y2="188" />
            <line x1="308" y1="156" x2="334" y2="156" />
            <line x1="308" y1="172" x2="334" y2="172" />
            <line x1="308" y1="188" x2="334" y2="188" />
          </motion.g>
        ) : (
          <g stroke="var(--accent)" strokeWidth="2" strokeLinecap="round">
            <line x1="170" y1="172" x2="196" y2="172" />
            <line x1="308" y1="172" x2="334" y2="172" />
          </g>
        )}

        {/* dimension lines */}
        <g stroke="var(--tick)" strokeWidth="1" fontFamily="monospace" fontSize="9" fill="var(--tick)">
          <line x1="48" y1="262" x2="472" y2="262" />
          <line x1="48" y1="257" x2="48" y2="267" />
          <line x1="472" y1="257" x2="472" y2="267" />
          <text x="260" y="278" textAnchor="middle" letterSpacing="2">L — 1200 MODUL</text>
          <line x1="30" y1="128" x2="30" y2="216" />
          <text x="22" y="176" textAnchor="middle" transform="rotate(-90 22 176)" letterSpacing="2">H-600</text>
        </g>

        {/* inlet / outlet tags */}
        <g fontFamily="monospace" fontSize="9" letterSpacing="1.5">
          <text x="52" y="120" fill="var(--muted)">IN ▸</text>
          <text x="446" y="120" fill="var(--muted)">▸ OUT</text>
        </g>
      </svg>

      {/* footer readout strip */}
      <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
        {[
          ["ALIRAN", "1.240 m³/h*"],
          ["Δ TEKANAN", "148 Pa*"],
          ["STATUS", "NOMINAL"],
        ].map(([k, v]) => (
          <div key={k} className="px-4 py-2.5">
            <p className="font-tech text-[9px] uppercase tracking-[0.18em] text-muted">{k}</p>
            <p className="font-tech text-[12px] tracking-wide text-foreground">{v}</p>
          </div>
        ))}
      </div>
      <p className="font-tech border-t border-border px-4 py-1.5 text-[9px] tracking-[0.1em] text-tick">
        *ANGKA ILUSTRATIF SKEMA — BUKAN DATA PENGUKURAN
      </p>
      <Coord className="absolute right-3 top-10">X.44 / Y.08</Coord>
    </div>
  );
}
