import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-background">
      <Hero />
      <div className="w-full bg-surface-container-low">
        <AboutMe />
      </div>
      <div className="w-full bg-background">
        <Projects />
      </div>
      <div className="w-full bg-surface-container-low">
        <OpenSource />
      </div>
      <div className="w-full bg-background">
        <Skills />
      </div>
      <div className="w-full bg-surface-container-low">
        <Experience />
      </div>
      <div className="w-full bg-background">
        <Contact />
      </div>
    </div>
  );
}
