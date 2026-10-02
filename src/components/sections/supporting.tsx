import { SectionIndex } from "../decorative/marks";
import { Reveal } from "../ui/reveal";

const SPECS: [string, string][] = [
  ["Model", "Noctax (modular, 3 tahap)"],
  ["Dimensi unit", "1200 × 600 × 450 mm (P × L × T)"],
  ["Berat", "58 kg (tanpa ducting)"],
  ["Catu daya", "220 V / 50 Hz, maks 320 W*"],
  ["Tingkat filtrasi", "G4 + ePM1 60% (ISO 16890)*"],
  ["Tingkat kebisingan", "28–46 dB(A) @ 1 m, tergantung kecepatan*"],
  ["Kontrol", "Panel 3 warna + kontak kering BMS"],
  ["Perawatan", "Filter 6–12 bln · servis tahunan"],
];

const FAQS = [
  { q: "Apakah cocok untuk ruangan yang sudah beroperasi?", a: "Ya. Instalasi dilakukan per zona dan mayoritas pekerjaan ducting dilakukan di luar jam sibuk. Ruangan yang tidak dikerjakan tetap bisa dipakai." },
  { q: "Bagaimana saya tahu kapan filter harus diganti?", a: "Lampu status di badan unit berubah dari hijau ke kuning berdasarkan tekanan aktual, bukan kalender. Lembar panduan mencantumkan ambang nilainya." },
  { q: "Apakah butuh aplikasi atau koneksi internet?", a: "Tidak. Semua fungsi inti berjalan lokal lewat panel fisik dan kontak kering ke BMS gedung bila tersedia. Tidak ada akun, tidak ada langganan." },
  { q: "Dokumen apa yang saya terima?", a: "Lembar ukur survei, skema konfigurasi bertanda tangan, lembar uji aliran-tekanan saat serah terima, dan jadwal perawatan 12 bulan." },
];

export function SupportingSection() {
  return (
    <section id="spesifikasi" aria-labelledby="spesifikasi-title" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionIndex no="05" title="Informasi pendukung" />
      </Reveal>
      <Reveal index={1}>
        <h2 id="spesifikasi-title" className="display-section mt-6 max-w-2xl font-semibold">
          Spesifikasi ringkas & jawaban atas pertanyaan umum.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal index={1}>
          <h3 className="font-tech text-[12px] uppercase tracking-[0.18em] text-muted">Tabel spesifikasi — Noctax</h3>
          <table className="mt-4 w-full border-collapse overflow-hidden rounded-m border border-border text-left text-[14.5px]">
            <caption className="sr-only">Spesifikasi teknis unit Noctax</caption>
            <tbody className="divide-y divide-border">
              {SPECS.map(([k, v]) => (
                <tr key={k} className="bg-surface odd:bg-surface-muted/40">
                  <th scope="row" className="w-36 px-4 py-3 align-top font-medium text-muted md:w-44">{k}</th>
                  <td className="px-4 py-3">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="font-tech mt-2.5 text-[10.5px] tracking-[0.08em] text-tick">
            *NILAI ILUSTRATIF PLACEHOLDER — MINTA LEMBAR UJI RESMI UNTUK ANGKA FINAL
          </p>
        </Reveal>

        <Reveal index={2}>
          <h3 className="font-tech text-[12px] uppercase tracking-[0.18em] text-muted">Pertanyaan umum</h3>
          <div className="mt-4 divide-y divide-border border-y border-border">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[16px] font-semibold tracking-tight marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid size-7 shrink-0 place-items-center rounded-s border border-border font-tech text-sm text-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
