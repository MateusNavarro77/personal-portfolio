import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-paper overflow-x-clip">
      <Hero />
      <div className="w-full bg-paper-alt border-t-[3.5px] border-ink">
        <AboutMe />
      </div>
      <div className="w-full bg-paper border-t-[3.5px] border-ink">
        <Projects />
      </div>
      <div className="w-full bg-paper-alt border-t-[3.5px] border-ink">
        <OpenSource />
      </div>
      <div className="w-full bg-paper border-t-[3.5px] border-ink">
        <Skills />
      </div>
      <div className="w-full bg-paper-alt border-t-[3.5px] border-ink">
        <Experience />
      </div>
      <div className="w-full bg-paper border-t-[3.5px] border-ink">
        <Contact />
      </div>
    </main>
  );
}
