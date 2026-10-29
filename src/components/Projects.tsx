"use client";
import React from "react";
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
    },
    {
        tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "DevSecOps"],
        github: `${githubRootUrl}/projeto-cybersec-taskmanager`,
        preview: "https://opengraph.githubassets.com/1/MateusNavarro77/projeto-cybersec-taskmanager",
        live: "#"
    },
    {
        tech: ["Bun", "TypeScript", "React", "Ethereum", "Viem", "OpenTUI"],
        github: `${githubRootUrl}/ethereum-wallet-cli`,
        preview: "https://raw.githubusercontent.com/MateusNavarro77/ethereum-wallet-cli/refs/heads/main/screenshots/thumbnail.png",
        live: "#"
    }
];

const Projects = () => {
    const t = useTranslations("Projects");

    return (
        <section id="projects" className="py-24 px-4 max-w-5xl mx-auto w-full">
            <h2 className="headline-lg mb-12 text-center md:text-left text-on-surface">
                {t("title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                {PROJECTS_METADATA.map((project, index) => {
                    const isLastOdd = index === PROJECTS_METADATA.length - 1 && PROJECTS_METADATA.length % 2 !== 0;
                    const colSpanClass = isLastOdd
                        ? "md:col-span-12 flex flex-col"
                        : index % 2 === 0
                        ? "md:col-span-7 flex flex-col"
                        : "md:col-span-5 flex flex-col";

                    return (
                        <div key={index} className={colSpanClass}>
                            <ProjectCard
                                index={index}
                                tech={project.tech}
                                github={project.github}
                                preview={project.preview}
                                live={project.live}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
