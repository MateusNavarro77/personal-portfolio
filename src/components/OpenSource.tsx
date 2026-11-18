"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitPullRequest, Github, ExternalLink, GitMerge } from "lucide-react";
import { useTranslations } from "next-intl";
import SimpleIcon from "./SimpleIcon";
import { getTechIcon, getTechColor } from "@/utils/techIcons";
import { cn } from "@/lib/utils";
import { useDesignSystem } from "@/design-systems/DesignSystemProvider";

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
    const { designSystem, activeSystem } = useDesignSystem();
    const { Card, SectionTitle, Chip, getButtonClasses } =
        activeSystem.components;
    const { typography } = activeSystem;

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
                            <Card
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
                                        variant={
                                            designSystem === "cartoon" && isAccent
                                                ? "default"
                                                : "status"
                                        }
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
                                        className={typography.linkMuted}
                                    >
                                        <Github className="w-4 h-4 stroke-[2.5]" />
                                        <span>{item.repository}</span>
                                    </a>
                                </div>

                                <p
                                    className={cn(
                                        typography.body,
                                        "text-sm sm:text-base mb-6"
                                    )}
                                >
                                    {item.description}
                                </p>

                                <div
                                    className={cn(
                                        "pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                                        typography.dividerTop
                                    )}
                                >
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
                                        className={getButtonClasses({
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
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default OpenSource;
