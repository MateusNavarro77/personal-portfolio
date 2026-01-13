import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
