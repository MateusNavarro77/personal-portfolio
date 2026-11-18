"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitPullRequest, Github, ExternalLink, GitMerge } from "lucide-react";
import { useTranslations } from "next-intl";
import Chip from "./Chip";
import SimpleIcon from "./SimpleIcon";
import { getTechIcon, getTechColor } from "@/utils/techIcons";
import { CartoonCard, SectionTitle, cartoonButtonVariants } from "./cartoon";

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
        <section id="opensource" className="py-20 sm:py-24 px-4 max-w-5xl mx-auto w-full">
            <SectionTitle>{t("title")}</SectionTitle>

            <div className="space-y-8">
                {rawItems.map((item, index) => {
                    const isAccent = index % 2 === 1;
                    const tiltDeg = index % 2 === 0 ? -0.6 : 0.6;

                    return (
                        <motion.div
                            key={item.prUrl}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 220,
                                damping: 20,
                            }}
                        >
                            <CartoonCard
                                variant={isAccent ? "accent" : "surface"}
                                tiltDeg={tiltDeg}
                                icon={<GitPullRequest size={22} className="stroke-[2.5]" />}
                                title={
                                    <span className="flex items-baseline gap-2 flex-wrap">
                                        <span>{item.title}</span>
                                        <span className="text-sm font-black opacity-80">
                                            #{item.prNumber}
                                        </span>
                                    </span>
                                }
                                headerExtra={
                                    <Chip
                                        variant={isAccent ? "default" : "status"}
                                        icon={<GitMerge size={13} className="stroke-[2.5]" />}
                                        className="shrink-0"
                                    >
                                        {t("merged")}
                                    </Chip>
                                }
                                className="p-6 sm:p-7"
                            >
                                <div className="mb-3">
                                    <a
                                        href={`https://github.com/${item.repository}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-extrabold text-ink underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
                                    >
                                        <Github className="w-4 h-4 stroke-[2.5]" />
                                        <span>{item.repository}</span>
                                    </a>
                                </div>

                                <p className="cartoon-body text-sm sm:text-base mb-6">
                                    {item.description}
                                </p>

                                <div className="pt-4 border-t-[2.5px] border-ink flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech) => {
                                            const icon = getTechIcon(tech);
                                            const brandColor = getTechColor(tech);
                                            return (
                                                <Chip
                                                    key={tech}
                                                    icon={
                                                        icon ? (
                                                            <SimpleIcon
                                                                icon={icon}
                                                                size={13}
                                                                color="#0b0e13"
                                                            />
                                                        ) : undefined
                                                    }
                                                    dot={!icon}
                                                    dotColor={brandColor || undefined}
                                                >
                                                    {tech}
                                                </Chip>
                                            );
                                        })}
                                    </div>

                                    <a
                                        href={item.prUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={cartoonButtonVariants({
                                            variant: isAccent ? "surface" : "primary",
                                            size: "sm",
                                            shadow: "sm",
                                            className: "w-full sm:w-auto",
                                        })}
                                    >
                                        <Github size={16} className="stroke-[2.5]" />
                                        <span>{t("viewPr")}</span>
                                        <ExternalLink size={14} className="stroke-[2.5]" />
                                    </a>
                                </div>
                            </CartoonCard>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default OpenSource;
