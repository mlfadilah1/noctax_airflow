import { SectionIndex } from "../decorative/marks";
import { Reveal } from "../ui/reveal";

const PRINCIPLES = [
  { no: "P-01", title: "Ukur dulu, klaim belakangan", body: "Setiap unit keluar dengan lembar uji aliran dan tekanan. Angka yang kami tampilkan adalah angka yang bisa Anda ulangi di lokasi." },
  { no: "P-02", title: "Modul, bukan monolit", body: "Filter, kipas, dan sensor adalah modul terpisah. Satu bagian rusak tidak berarti mengganti seluruh unit." },
  { no: "P-03", title: "Sunyi sebagai spesifikasi", body: "Kebisingan diperlakukan seperti parameter teknik — ditargetkan, diukur, dan ditulis di dokumen, bukan sekadar dirasakan." },
  { no: "P-04", title: "Dokumen yang bisa dibaca", body: "Skema, toleransi, dan jadwal perawatan ditulis dengan bahasa instalatur, bukan bahasa brosur." },
];

export function ConceptSection() {
  return (
    <section id="konsep" aria-labelledby="konsep-title" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionIndex no="01" title="Konsep inti" />
      </Reveal>
      <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal index={1}>
          <h2 id="konsep-title" className="display-section font-semibold">
            Bangunan teknis gagal secara diam-diam — lewat udara yang tidak pernah diukur.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Kelembapan arsip naik 4% tanpa alarm. Ruang periksa terasa pengap meski AC menyala.
            Noctax dirancang untuk satu hal: membuat aliran udara menjadi sesuatu yang bisa
            Anda tunjuk, baca, dan pertanggungjawabkan.
          </p>
          <div className="mt-6 border-l-2 border-accent pl-4">
            <p className="font-display text-[17px] font-medium leading-snug">
              “Precision over decoration — setiap garis pada unit ini punya alasan gambar.”
            </p>
            <p className="font-tech mt-2 text-[11px] uppercase tracking-[0.16em] text-muted">
              CATATAN DESAIN · TIM TEKNIK NOCTAX
            </p>
          </div>
        </Reveal>
        <ol className="divide-y divide-border border-y border-border">
          {PRINCIPLES.map((p, i) => (
            <Reveal as="li" key={p.no} index={i} className="grid gap-1.5 py-5 sm:grid-cols-[64px_1fr] sm:gap-4">
              <span className="font-tech text-[12px] tracking-[0.1em] text-accent">{p.no}</span>
              <span>
                <h3 className="font-display text-[17px] font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1 max-w-lg text-[15px] leading-relaxed text-muted">{p.body}</p>
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
