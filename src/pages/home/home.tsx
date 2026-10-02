import { Hero } from "../../components/hero/hero";
import { ConceptSection } from "../../components/sections/concept";
import { CapabilitiesSection } from "../../components/sections/capabilities";
import { VisualizationSection } from "../../components/sections/visualization";
import { ProcessSection } from "../../components/sections/process";
import { SupportingSection } from "../../components/sections/supporting";
import { FinalCta } from "../../components/sections/final-cta";

/**
 * Home page composition (single-page, anchor-navigated).
 *
 * PROJECT-SPECIFIC — section order and content belong to Noctax.
 * To build a new page, compose a different set of sections
 * in a new file under `pages/` without touching reusable UI.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <ConceptSection />
      <CapabilitiesSection />
      <VisualizationSection />
      <ProcessSection />
      <SupportingSection />
      <FinalCta />
    </>
  );
}
