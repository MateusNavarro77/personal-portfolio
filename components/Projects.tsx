"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
    {
        title: "Project One",
        description: "A mobile application built with Flutter that solves a specific user problem.",
        tech: ["Flutter", "Firebase", "Dart"],
        github: "#",
        live: "#"
    },
    {
        title: "Project Two",
        description: "Web application dashboard for personal finance tracking.",
        tech: ["Next.js", "Tailwind CSS", "TypeScript"],
        github: "#",
        live: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 max-w-5xl mx-auto w-full">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center md:text-left">Selected Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                    >
                        <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative">
                            {/* Image placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-medium">
                                Preview Placeholder
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs font-medium px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:underline">
                                    <Github size={16} /> Code
                                </a>
                                <a href={project.live} className="flex items-center gap-2 text-sm font-medium hover:underline">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
