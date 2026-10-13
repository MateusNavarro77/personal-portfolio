"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Chip from "./Chip";
import { buttonVariants } from "./Button";
import Image from "next/image";
import SimpleIcon from "./SimpleIcon";
import { getTechIcon, getTechColor } from "@/utils/techIcons";

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
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group rounded-2xl overflow-hidden kinetic-glass shadow-ambient hover:shadow-glass-hover hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col h-full"
        >
            <div className="aspect-video bg-surface-container-low overflow-hidden relative border-b border-[rgba(95,121,153,0.15)]">
                <Image
                    src={preview}
                    alt={`${t(`items.${index}.title`)} preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,20,24,0.6)] via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                    <h3 className="title-md mb-2 group-hover:text-primary transition-colors duration-300 text-on-surface">
                        {t(`items.${index}.title`)}
                    </h3>
                    <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6">
                        {t(`items.${index}.description`)}
                    </p>
                </div>

                <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tech.map((item) => {
                            const icon = getTechIcon(item);
                            const brandColor = getTechColor(item);
                            return (
                                <Chip
                                    key={item}
                                    icon={icon ? <SimpleIcon icon={icon} size={13} color={brandColor || undefined} /> : undefined}
                                    dot={!icon}
                                    dotColor={brandColor || undefined}
                                >
                                    {item}
                                </Chip>
                            );
                        })}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className={buttonVariants({ variant: "secondary", size: "sm", className: "px-4 gap-2" })}
                        >
                            <Github size={16} /> {t("code")}
                        </a>
                        {live !== "#" && (
                            <a
                                href={live}
                                target="_blank"
                                rel="noreferrer"
                                className={buttonVariants({ variant: "secondary", size: "sm", className: "px-4 gap-2" })}
                            >
                                <ExternalLink size={16} /> {t("live")}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
