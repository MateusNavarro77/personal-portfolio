"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
    index: number;
    tech: string[];
    github: string;
    live: string;
}

const ProjectCard = ({ index, tech, github, live }: ProjectCardProps) => {
    const t = useTranslations("Projects");

    return (
        <motion.div
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
                    {t(`items.${index}.title`)}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {t(`items.${index}.description`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {tech.map((item) => (
                        <span key={item} className="text-xs font-medium px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                            {item}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <a href={github} className="flex items-center gap-2 text-sm font-medium hover:underline">
                        <Github size={16} /> {t("code")}
                    </a>
                    <a href={live} className="flex items-center gap-2 text-sm font-medium hover:underline">
                        <ExternalLink size={16} /> {t("live")}
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
