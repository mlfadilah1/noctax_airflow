import { Fan, Filter, Gauge, VolumeX } from "lucide-react";
import { SectionIndex } from "../decorative/marks";
import { Reveal } from "../ui/reveal";

const ROWS = [
  {
    icon: Filter,
    code: "C-01 / FILTRASI",
    title: "Filtrasi dua tahap yang bisa diperiksa tanpa alat khusus",
    body: "Pre-filter G4 menahan debu kasar, filter ePM1 menangkap partikel halus. Pintu servis terbuka dengan dua tuas — indikator warna menunjukkan kapan waktunya ganti, bukan tebakan jadwal.",
    note: "RETENSI > 82% ePM1 · AKSES 40 DETIK",
  },
  {
    icon: Fan,
    code: "C-02 / PENGGERAK EC",
    title: "Kipas EC yang mengikuti kebutuhan, bukan sekadar on/off",
    body: "Motor komutasi elektronik menyesuaikan putaran terhadap tekanan aktual di ducting. Saat ruangan sepi, unit melambat sendiri — hemat daya tanpa mengorbankan pertukaran udara minimum.",
    note: "3 KECEPATAN + MODE OTOMATIS",
  },
  {
    icon: Gauge,
    code: "C-03 / PEMANTAU ΔP",
    title: "Sensor tekanan yang jujur tentang kondisinya",
    body: "Dua titik ukur sebelum dan sesudah filter memberi tahu beban aktual sistem. Lampu status tiga warna di badan unit — hijau, kuning, merah — tanpa perlu membuka aplikasi.",
    note: "RENTANG 0–500 Pa · ±3%",
  },
  {
    icon: VolumeX,
    code: "C-04 / AKUSTIK",
    title: "Peredam terintegrasi, bukan aksesori opsional",
    body: "Ruang resonansi dan lapisan serat mineral tertanam di jalur udara. Pada kecepatan malam, unit setara percakapan pelan di perpustakaan — diukur 1 meter dari gril.",
    note: "MODE MALAM ≤ 32 dB(A)*",
  },
];

export function CapabilitiesSection() {
  return (
    <section id="kemampuan" aria-labelledby="kemampuan-title" className="scroll-mt-24 border-y border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionIndex no="02" title="Kemampuan" />
        </Reveal>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <Reveal index={1}>
            <h2 id="kemampuan-title" className="display-section max-w-xl font-semibold">
              Empat hal yang dikerjakan unit ini setiap hari.
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="font-tech max-w-xs text-[11px] uppercase leading-relaxed tracking-[0.12em] text-muted">
              *Angka ilustratif untuk keperluan skema halaman ini
            </p>
          </Reveal>
        </div>

        <div className="mt-10">
          {ROWS.map((r, i) => (
            <Reveal key={r.code} index={i}>
              <article
                className={`grid gap-4 border-t border-border py-8 md:py-9 lg:grid-cols-[56px_1fr_260px] lg:gap-8 ${
                  i === ROWS.length - 1 ? "border-b" : ""
                } ${i % 2 === 1 ? "lg:[&>*:first-child]:order-none" : ""}`}
              >
                <div className="grid size-12 place-items-center rounded-m border border-border bg-background text-primary dark:text-accent" aria-hidden="true">
                  <r.icon className="size-5" />
                </div>
                <div>
                  <p className="font-tech text-[11px] tracking-[0.16em] text-accent">{r.code}</p>
                  <h3 className="mt-1.5 max-w-2xl font-display text-xl font-semibold tracking-tight">{r.title}</h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">{r.body}</p>
                </div>
                <p className="font-tech self-start rounded-s border border-dashed border-border-strong px-3 py-2 text-[11px] leading-relaxed tracking-[0.08em] text-muted lg:mt-7">
                  {r.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
