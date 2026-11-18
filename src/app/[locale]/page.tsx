import Hero from "@/components/Hero";
import DesignSystemSwitcher from "@/components/DesignSystemSwitcher";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { DSPageShell, DSSectionBand } from "@/design-systems/ds-layout";

export default function Home() {
  return (
    <DSPageShell>
      <Hero />
      <DSSectionBand variant="alt">
        <DesignSystemSwitcher />
      </DSSectionBand>
      <DSSectionBand variant="primary">
        <AboutMe />
      </DSSectionBand>
      <DSSectionBand variant="alt">
        <Projects />
      </DSSectionBand>
      <DSSectionBand variant="primary">
        <OpenSource />
      </DSSectionBand>
      <DSSectionBand variant="alt">
        <Skills />
      </DSSectionBand>
      <DSSectionBand variant="primary">
        <Experience />
      </DSSectionBand>
      <DSSectionBand variant="alt">
        <Contact />
      </DSSectionBand>
    </DSPageShell>
  );
}
