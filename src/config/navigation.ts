/**
 * Navigation model.
 *
 * PROJECT-SPECIFIC — anchor targets below match section `id`
 * attributes in `pages/home`. When adding a real router later,
 * extend this model with `to` paths instead of scattering hrefs.
 */

export type NavLink = { href: string; label: string };

export const mainLinks: NavLink[] = [
  { href: "#konsep", label: "Konsep" },
  { href: "#kemampuan", label: "Kemampuan" },
  { href: "#skema", label: "Skema" },
  { href: "#alur", label: "Alur" },
  { href: "#spesifikasi", label: "Spesifikasi" },
];

export const footerPageLinks: NavLink[] = [
  { href: "#konsep", label: "Konsep" },
  { href: "#kemampuan", label: "Kemampuan" },
  { href: "#skema", label: "Skema" },
  { href: "#alur", label: "Alur" },
];

export const footerDocLinks: NavLink[] = [
  { href: "#spesifikasi", label: "Spesifikasi" },
  { href: "#cta", label: "Skema unit" },
  { href: "#alur", label: "Perawatan" },
];

export const ctaHref = "#cta";
export const topHref = "#atas";
export const howItWorksHref = "#skema";
export const specHref = "#spesifikasi";
