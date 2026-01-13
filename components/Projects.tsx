"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";
import { githubRootUrl } from "@/constants";

const PROJECTS_METADATA = [
    {
        tech: ["Flutter", "BLoC", "Dart","SQLite","Web3dart"],
        github: `${githubRootUrl}/kriptum`,
        live: "#"
    },
    {
        tech: ["Flutter", "Dart", "BLoC","Material"],
        github: `${githubRootUrl}/metronome`,
        live: "#"
    }
];

const Projects = () => {
    const t = useTranslations("Projects");

    return (
        <section id="projects" className="py-24 px-4 max-w-5xl mx-auto w-full">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center md:text-left">{t("title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS_METADATA.map((project, index) => (
                    <ProjectCard
                        key={index}
                        index={index}
                        tech={project.tech}
                        github={project.github}
                        live={project.live}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
