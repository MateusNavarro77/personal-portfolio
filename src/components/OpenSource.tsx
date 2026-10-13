"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitPullRequest, Github, ExternalLink, GitMerge } from "lucide-react";
import { useTranslations } from "next-intl";
import Chip from "./Chip";
import SimpleIcon from "./SimpleIcon";
import { getTechIcon, getTechColor } from "@/utils/techIcons";
import { buttonVariants } from "./Button";

interface OpenSourceItem {
    repository: string;
    prNumber: number;
    prUrl: string;
    title: string;
    description: string;
    technologies: string[];
}

const OpenSource = () => {
    const t = useTranslations("OpenSource");
    const rawItems = (t.raw("items") as OpenSourceItem[]) || [];

    return (
        <section id="opensource" className="py-24 px-4 max-w-5xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <h2 className="headline-lg text-center md:text-left text-on-surface">
                        {t("title")}
                    </h2>
                </div>
            </div>

            <div className="space-y-8">
                {rawItems.map((item, index) => (
                    <motion.div
                        key={item.prUrl}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="group rounded-2xl kinetic-glass p-6 sm:p-8 shadow-ambient hover:shadow-glass-hover hover:-translate-y-1 transition-all duration-400 flex flex-col justify-between relative overflow-hidden"
                    >
                        {/* Subtle background glow accent */}
                        <div className="absolute -right-24 -top-24 w-60 h-60 bg-[#8957e5]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8957e5]/15 transition-colors duration-500" />

                        <div>
                            {/* Header: Repo identifier & Merged badge */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                                <a
                                    href={`https://github.com/${item.repository}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-on-surface hover:text-primary transition-colors"
                                >
                                    <Github className="w-4 h-4 text-primary" />
                                    <span>{item.repository}</span>
                                </a>

                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#8957e5]/15 text-[#a371f7] border border-[#8957e5]/30 shadow-[0_0_12px_rgba(137,87,229,0.2)]">
                                    <GitMerge className="w-3.5 h-3.5" />
                                    <span>{t("merged")}</span>
                                </span>
                            </div>

                            {/* PR Title and Number */}
                            <div className="mb-4">
                                <h3 className="title-md text-on-surface group-hover:text-primary transition-colors duration-300 font-bold flex items-baseline gap-2 flex-wrap">
                                    <GitPullRequest className="w-5 h-5 text-primary shrink-0 self-center" />
                                    <span>{item.title}</span>
                                    <span className="text-secondary text-sm font-normal">
                                        #{item.prNumber}
                                    </span>
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6">
                                {item.description}
                            </p>
                        </div>

                        {/* Footer: Tech Chips & View PR button */}
                        <div className="pt-4 border-t border-[rgba(95,121,153,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech) => {
                                    const icon = getTechIcon(tech);
                                    const brandColor = getTechColor(tech);
                                    return (
                                        <Chip
                                            key={tech}
                                            icon={icon ? <SimpleIcon icon={icon} size={13} color={brandColor || undefined} /> : undefined}
                                            dot={!icon}
                                            dotColor={brandColor || undefined}
                                        >
                                            {tech}
                                        </Chip>
                                    );
                                })}
                            </div>

                            <div>
                                <a
                                    href={item.prUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={buttonVariants({
                                        variant: "secondary",
                                        size: "sm",
                                        className: "px-4 gap-2 w-full sm:w-auto"
                                    })}
                                >
                                    <Github size={16} />
                                    <span>{t("viewPr")}</span>
                                    <ExternalLink size={14} className="opacity-70" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default OpenSource;

