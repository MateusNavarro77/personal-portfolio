"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import SimpleIcon from "./SimpleIcon";
import { getTechIcon, getTechColor } from "@/utils/techIcons";

const Experience = () => {
    const t = useTranslations("Experience");
    const experienceIndices = [0, 1];

    return (
        <section id="experience" className="py-24 px-4 max-w-4xl mx-auto w-full">
            <h2 className="headline-lg mb-16 text-on-surface">
                {t("title")}
            </h2>

            <div className="relative ml-2 sm:ml-4">
                {/* Continuous Timeline spine */}
                <div className="absolute top-5 bottom-4 left-0 w-0.5 bg-gradient-to-b from-primary via-[rgba(95,121,153,0.35)] to-transparent" />

                <div className="space-y-12">
                    {experienceIndices.map((index) => {
                        const rawPoints = (t.raw(`items.${index}.points`) as string[]) || [];
                        const rawTechs = (t.raw(`items.${index}.technologies`) as string[]) || [];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="relative pl-7 sm:pl-10"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute top-3.5 left-px h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-primary bg-background ring-4 ring-primary/25 shadow-[0_0_12px_rgba(157,202,255,0.7)]" />

                                {/* Experience Card with Kinetic Glass */}
                                <div className="kinetic-glass rounded-2xl p-6 sm:p-8 shadow-ambient hover:shadow-glass-hover hover:-translate-y-1 transition-all duration-400">
                                    {/* Company & Period Row */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                                        <div className="flex items-center gap-2.5">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-container/50 border border-secondary/20 shadow-[0_0_12px_rgba(21,123,200,0.15)]">
                                                <Building2 className="h-4 w-4 text-primary" />
                                            </div>
                                            <span className="font-semibold text-base sm:text-lg text-on-surface">
                                                {t(`items.${index}.company`)}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-secondary bg-[rgba(21,123,200,0.12)] border border-primary/25 px-3 py-1 rounded-full w-fit">
                                            <Calendar className="h-3.5 w-3.5 text-primary" />
                                            <span>{t(`items.${index}.period`)}</span>
                                        </div>
                                    </div>

                                    {/* Role Title */}
                                    <h3 className="title-md text-primary font-bold mb-4 tracking-[-0.01em]">
                                        {t(`items.${index}.role`)}
                                    </h3>

                                    {/* Points / Description */}
                                    <ul className="space-y-2.5 list-disc list-inside text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6">
                                        {rawPoints.map((point, i) => (
                                            <li key={i} className="text-pretty">
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    {rawTechs.length > 0 && (
                                        <div className="flex flex-wrap gap-2 pt-2 border-t border-[rgba(95,121,153,0.15)]">
                                            {rawTechs.map((tech) => {
                                                const icon = getTechIcon(tech);
                                                const brandColor = getTechColor(tech);

                                                return (
                                                    <Badge
                                                        key={tech}
                                                        variant="secondary"
                                                        className="py-1 px-3 text-xs"
                                                    >
                                                        {icon ? (
                                                            <SimpleIcon
                                                                icon={icon}
                                                                size={12}
                                                                color={brandColor || undefined}
                                                            />
                                                        ) : (
                                                            <span
                                                                className="w-1.5 h-1.5 rounded-full bg-primary"
                                                                style={brandColor ? { backgroundColor: brandColor } : undefined}
                                                            />
                                                        )}
                                                        <span>{tech}</span>
                                                    </Badge>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
