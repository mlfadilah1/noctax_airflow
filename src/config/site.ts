/**
 * Site-wide content for Noctax.
 *
 * PROJECT-SPECIFIC — replace these values when reusing
 * the foundation for a different project. Reusable components
 * must read from here instead of hardcoding brand strings.
 */
export const site = {
  name: "NOCTAX",
  shortMark: "N",
  tagline: "Airflow Presisi",
  description:
    "Noctax — Sistem airflow presisi untuk ruang teknis. Dokumentasi, konfigurasi, dan validasi dalam satu alur kerja yang tenang.",
  email: "halo@noctax.id",
  locations: ["Jakarta", "Bandung", "Surabaya"],
  revision: "REV 2.4",
  drawing: "DWG. NTX-240",
  coordinates: "SET LAT —6.2 LON 106.8",
  footerTagline:
    "Sistem airflow presisi untuk ruang teknis. Dirancang tenang, didokumentasikan terbuka.",
  footerMeta: "DWG. NTX-240 · REV 2.4 · HALAMAN PLACEHOLDER — KONTEN FINAL MENYUSUL",
  legal: "© 2026 NOCTAX — SEMUA SKEMA BERSIFAT ILUSTRATIF",
  ctaMailSubject: "Permintaan skema Noctax",
} as const;

export function mailtoHref(subject: string = site.ctaMailSubject): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
