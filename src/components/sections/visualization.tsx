import { useState } from "react";
import { cn } from "../../lib/cn";
import { CornerTicks, SectionIndex } from "../decorative/marks";
import { Reveal } from "../ui/reveal";

type Mode = "sirkulasi" | "filtrasi" | "tekanan";

const MODES: Record<
  Mode,
  { code: string; title: string; body: string; readout: [string, string][]; highlight: string }
> = {
  sirkulasi: {
    code: "SCH-A",
    title: "Jalur sirkulasi",
    body: "Udara masuk dari kiri, melewati tiga modul berurutan, dan keluar terkondisikan di kanan. Tidak ada jalur pintas — setiap liter melewati titik ukur.",
    readout: [
      ["INLET", "Ruang ▸ unit"],
      ["OUTLET", "Unit ▸ ruang"],
      ["RECIRC.", "0–30% opsional"],
    ],
    highlight: "duct",
  },
  filtrasi: {
    code: "SCH-B",
    title: "Tahapan filtrasi",
    body: "Pre-filter menangkap serat dan debu kasar agar filter utama awet. Indikator ΔP naik perlahan — saat menyentuh ambang, lampu kuning menyala di panel.",
    readout: [
      ["TAHAP 1", "G4 · kasar"],
      ["TAHAP 2", "ePM1 · halus"],
      ["GANTI", "Indikator ΔP"],
    ],
    highlight: "filter",
  },
  tekanan: {
    code: "SCH-C",
    title: "Keseimbangan tekanan",
    body: "Dua sensor membaca selisih tekanan sebelum dan sesudah filter. Kipas menaikkan putaran secukupnya untuk menjaga aliran konstan meski filter menua.",
    readout: [
      ["SENSOR 1", "Sebelum filter"],
      ["SENSOR 2", "Sesudah filter"],
      ["RESPON", "Kipas +2–8%"],
    ],
    highlight: "sensor",
  },
};

const ORDER: Mode[] = ["sirkulasi", "filtrasi", "tekanan"];

export function VisualizationSection() {
  const [mode, setMode] = useState<Mode>("sirkulasi");
  const active = MODES[mode];

  return (
    <section id="skema" aria-labelledby="skema-title" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionIndex no="03" title="Visualisasi teknis" />
      </Reveal>
      <div className="mt-6 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <Reveal index={1}>
            <h2 id="skema-title" className="display-section font-semibold">
              Satu skema, tiga cara membaca.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Pilih sudut pandang di bawah. Diagram yang sama akan menyorot bagian
              berbeda — seperti membaca gambar teknik lembar per lembar.
            </p>
          </Reveal>
          <Reveal index={2}>
            <div role="tablist" aria-label="Mode diagram" className="mt-6 grid gap-2">
              {ORDER.map((m) => (
                <button
                  key={m}
                  role="tab"
                  aria-selected={mode === m}
                  onClick={() => setMode(m)}
                  className={cn(
                    "flex items-start gap-3 rounded-m border px-4 py-3.5 text-left transition-colors",
                    mode === m
                      ? "border-accent bg-surface"
                      : "border-border bg-transparent hover:border-border-strong",
                  )}
                >
                  <span
                    className={cn(
                      "font-tech mt-0.5 text-[11px] tracking-[0.1em]",
                      mode === m ? "text-accent" : "text-tick",
                    )}
                    aria-hidden="true"
                  >
                    {MODES[m].code}
                  </span>
                  <span>
                    <span className="block font-display text-[15.5px] font-semibold">{MODES[m].title}</span>
                    {mode === m && <span className="mt-1 block text-sm leading-relaxed text-muted">{active.body}</span>}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal index={2}>
          <div className="relative rounded-l border border-border bg-surface p-4 md:p-6">
            <CornerTicks />
            <div className="flex items-center justify-between">
              <p className="font-tech text-[11px] tracking-[0.16em] text-muted">DIAGRAM — {active.code}</p>
              <p className="font-tech text-[11px] tracking-[0.16em] text-accent">SIMULASI</p>
            </div>

            <svg viewBox="0 0 480 220" className="mt-3 block h-auto w-full" role="img" aria-label={`Diagram skema mode ${active.title}`}>
              <defs>
                <pattern id="schGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M24 0H0v24" fill="none" stroke="var(--grid-line)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="480" height="220" fill="url(#schGrid)" rx="4" />
              {/* duct */}
              <rect
                x="30" y="80" width="420" height="64" rx="4"
                fill={active.highlight === "duct" ? "var(--accent-track)" : "transparent"}
                stroke={active.highlight === "duct" ? "var(--accent)" : "var(--border-strong)"}
                strokeWidth={active.highlight === "duct" ? 2 : 1.5}
              />
              {/* filter */}
              <rect
                x="70" y="64" width="70" height="96" rx="3"
                fill={active.highlight === "filtrasi" ? "var(--accent-track)" : "var(--surface-muted)"}
                stroke={active.highlight === "filtrasi" ? "var(--accent)" : "var(--border-strong)"}
                strokeWidth={active.highlight === "filtrasi" ? 2 : 1.5}
              />
              {[0, 1, 2].map((i) => (
                <line key={i} x1="80" y1={88 + i * 24} x2="130" y2={88 + i * 24}
                  stroke={active.highlight === "filtrasi" ? "var(--accent)" : "var(--tick)"} strokeWidth="1.6" />
              ))}
              {/* fan */}
              <circle cx="230" cy="112" r="34" fill="var(--surface-inset)"
                stroke={active.highlight === "sirkulasi" ? "var(--accent)" : "var(--border-strong)"}
                strokeWidth={active.highlight === "sirkulasi" ? 2 : 1.5} />
              <circle cx="230" cy="112" r="5" fill="var(--accent)" />
              <g stroke="var(--primary-steel)" strokeWidth="2" strokeLinecap="round">
                <line x1="230" y1="112" x2="230" y2="90" />
                <line x1="230" y1="112" x2="249" y2="123" />
                <line x1="230" y1="112" x2="211" y2="123" />
              </g>
              {/* sensor */}
              <rect
                x="330" y="64" width="70" height="96" rx="3"
                fill={active.highlight === "tekanan" ? "var(--accent-track)" : "var(--surface-muted)"}
                stroke={active.highlight === "tekanan" ? "var(--accent)" : "var(--border-strong)"}
                strokeWidth={active.highlight === "tekanan" ? 2 : 1.5}
              />
              <circle cx="365" cy="104" r="9" fill="none"
                stroke={active.highlight === "tekanan" ? "var(--accent)" : "var(--tick)"} strokeWidth="1.8" />
              <line x1="365" y1="113" x2="365" y2="142"
                stroke={active.highlight === "tekanan" ? "var(--accent)" : "var(--tick)"} strokeWidth="1.6" />
              {/* flow arrows */}
              <g fill="var(--muted)" fontFamily="monospace" fontSize="10" letterSpacing="1">
                <text x="34" y="70">IN ▸</text>
                <text x="414" y="70">▸ OUT</text>
              </g>
              <g stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" opacity="0.9">
                <line x1="152" y1="104" x2="178" y2="104" />
                <line x1="152" y1="120" x2="178" y2="120" />
                <line x1="276" y1="104" x2="302" y2="104" />
                <line x1="276" y1="120" x2="302" y2="120" />
              </g>
            </svg>

            <dl className="mt-4 grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {active.readout.map(([k, v]) => (
                <div key={k} className="px-4 py-2.5 first:pl-0 sm:first:pl-0 sm:[&:not(:first-child)]:pl-4">
                  <dt className="font-tech text-[10px] uppercase tracking-[0.18em] text-muted">{k}</dt>
                  <dd className="font-tech text-[12.5px] text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="font-tech mt-2 text-[10px] tracking-[0.1em] text-tick">
              NILAI ILUSTRATIF — VERIFIKASI DENGAN LEMBAR UJI UNIT FISIK
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
