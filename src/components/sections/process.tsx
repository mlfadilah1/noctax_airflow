import { SectionIndex } from "../decorative/marks";
import { Reveal } from "../ui/reveal";

const STEPS = [
  { no: "T-01", dur: "HARI 1–2", title: "Survei & ukur", body: "Teknisi mengukur volume ruang, jalur ducting eksisting, dan kebisingan latar. Anda menerima lembar ukur satu halaman — bukan brosur." },
  { no: "T-02", dur: "HARI 3–5", title: "Konfigurasi modul", body: "Filter, kapasitas kipas, dan titik sensor dipilih dari hasil ukur. Skema final ditandatangani bersama sebelum unit dirakit." },
  { no: "T-03", dur: "HARI 6–10", title: "Instalasi senyap", body: "Pemasangan dilakukan per zona agar ruangan tetap beroperasi. Setiap sambungan ducting diuji kebocoran sebelum panel ditutup." },
  { no: "T-04", dur: "HARI 11+", title: "Serah terima + dokumen", body: "Uji aliran dan tekanan ulang di lokasi, lalu hasilnya dicatat di lembar serah terima. Jadwal perawatan 12 bulan ke depan disepakati tertulis." },
];

export function ProcessSection() {
  return (
    <section id="alur" aria-labelledby="alur-title" className="scroll-mt-24 border-y border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionIndex no="04" title="Alur kerja" />
          </Reveal>
          <Reveal index={1}>
            <h2 id="alur-title" className="display-section mt-6 font-semibold">
              Dari survei sampai serah terima dalam ±11 hari.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Alur linier tanpa kejutan. Setiap tahap menghasilkan satu dokumen
              yang bisa Anda pegang — bukan janji verbal.
            </p>
          </Reveal>
          <Reveal index={2}>
            <div className="mt-6 flex items-center gap-3 rounded-m border border-dashed border-border-strong px-4 py-3">
              <span className="font-tech text-[11px] tracking-[0.12em] text-accent">OUTPUT AKHIR</span>
              <span className="text-sm text-muted">Lembar uji + jadwal perawatan 12 bulan</span>
            </div>
          </Reveal>
        </div>

        <ol className="relative ml-2 border-l border-border-strong pl-8 md:ml-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.no} index={i} className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[41px] top-1 grid size-6 place-items-center rounded-full border border-accent bg-background md:-left-[45px]"
                aria-hidden="true"
              >
                <span className="size-1.5 rounded-full bg-accent" />
              </span>
              <p className="font-tech text-[11px] tracking-[0.16em] text-muted">
                <span className="text-accent">{s.no}</span> · {s.dur}
              </p>
              <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
