import { Navbar } from "./components/navigation/navbar";
import { Footer } from "./components/layout/footer";
import { HomePage } from "./pages/home/home";
import { useTheme } from "./hooks/use-theme";

/**
 * App shell: theme state → global layout → active page.
 * Page content lives in `pages/`; this file only wires
 * layout chrome (skip link, navbar, footer) around it.
 */
export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="theme-fade min-h-screen bg-background text-foreground antialiased">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-s focus:bg-surface focus:px-4 focus:py-2"
      >
        Lewati ke konten utama
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="konten">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
