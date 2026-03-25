import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-background">
      <Hero />
      <div className="w-full bg-surface-container-low/45">
        <AboutMe />
      </div>
      <div className="w-full bg-background">
        <Projects />
      </div>
      <div className="w-full bg-surface-container-low/45">
        <Skills />
      </div>
      <div className="w-full bg-background">
        <Experience />
      </div>
      <div className="w-full bg-surface-container-low/45">
        <Contact />
      </div>
    </div>
  );
}
