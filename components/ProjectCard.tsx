"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Chip from "./Chip";
import { buttonVariants } from "./Button";
import Image from "next/image";

interface ProjectCardProps {
    index: number;
    tech: string[];
    github: string;
    preview: string;
    live: string;
}

const ProjectCard = ({ index, tech, github, preview, live }: ProjectCardProps) => {
    const t = useTranslations("Projects");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group rounded-3xl overflow-hidden bg-surface-container-lowest shadow-ambient hover:shadow-interactive hover:-translate-y-1 transition-all duration-500"
        >
            <div className="aspect-video bg-surface-container-low overflow-hidden relative">
                <Image
                    src={preview}
                    alt={`${t(`items.${index}.title`)} preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10" />
            </div>
            <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-500">
                    {t(`items.${index}.title`)}
                </h3>
                <p className="text-foreground/70 mb-4">
                    {t(`items.${index}.description`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {tech.map((item) => (
                        <Chip key={item}>
                            {item}
                        </Chip>
                    ))}
                </div>
                <div className="flex gap-4">
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className={buttonVariants({ variant: "secondary", size: "sm", className: "px-4" })}
                    >
                        <Github size={16} /> {t("code")}
                    </a>
                    {live !== "#" && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noreferrer"
                            className={buttonVariants({ variant: "secondary", size: "sm", className: "px-4" })}
                        >
                            <ExternalLink size={16} /> {t("live")}
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
