"use client";
import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";
import { githubRootUrl } from "@/constants";

const PROJECTS_METADATA = [
    {
        tech: ["Flutter", "BLoC", "Dart", "SQLite", "Web3dart"],
        github: `${githubRootUrl}/kriptum`,
        preview: "https://opengraph.githubassets.com/1/MateusNavarro77/kriptum",
        live: "#"
    },
    {
        tech: ["Flutter", "Dart", "BLoC", "Material"],
        github: `${githubRootUrl}/metronome`,
        preview: "https://opengraph.githubassets.com/1/MateusNavarro77/metronome",
        live: "#"
    }
];

const Projects = () => {
    const t = useTranslations("Projects");

    return (
        <section id="projects" className="py-24 px-4 max-w-5xl mx-auto w-full">
            <h2 className="font-display text-4xl md:text-[2.25rem] font-bold tracking-tight mb-12 text-center md:text-left">{t("title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {PROJECTS_METADATA.map((project, index) => (
                    <div key={index} className={index % 2 === 0 ? "md:col-span-7" : "md:col-span-5"}>
                        <ProjectCard
                            index={index}
                            tech={project.tech}
                            github={project.github}
                            preview={project.preview}
                            live={project.live}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
