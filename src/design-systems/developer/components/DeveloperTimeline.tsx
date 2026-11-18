"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, GitCommitHorizontal } from "lucide-react";
import SimpleIcon from "@/components/SimpleIcon";
import { getTechColor, getTechIcon } from "@/utils/techIcons";
import type { DSTimelineItemProps } from "../../types";
import { DeveloperBadge, DeveloperCard } from "./DeveloperPrimitives";

export function DeveloperTimelineContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative ml-2.5 sm:ml-4">
            <div className="absolute top-3 bottom-4 left-0 w-px bg-[#30363D]" />
            <div className="space-y-10 sm:space-y-12">{children}</div>
        </div>
    );
}

export function DeveloperTimelineItem({
    index,
    role,
    company,
    period,
    points,
    technologies,
}: DSTimelineItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.25, ease: "easeOut" }}
            className="relative pl-8 sm:pl-11"
        >
            <div className="absolute top-2 left-[0.5px] h-3.5 w-3.5 -translate-x-1/2 rounded-sm border border-[#3FB950] bg-[#0D1117] shadow-[0_0_8px_rgba(63,185,80,0.45)]" />

            <div className="mb-3.5">
                <DeveloperBadge variant="default" className="py-1 px-2.5 text-xs">
                    <GitCommitHorizontal className="h-3.5 w-3.5 stroke-[2]" />
                    <span>{period}</span>
                </DeveloperBadge>
            </div>

            <DeveloperCard
                variant="surface"
                icon={<Building2 size={18} className="stroke-[2]" />}
                title={company}
                className="p-6 sm:p-7"
            >
                <h4 className="font-mono text-base sm:text-lg font-semibold text-[#58A6FF] mb-3.5">
                    {role}
                </h4>

                <ul className="space-y-2 list-disc list-inside text-[#8B949E] text-sm sm:text-base leading-relaxed mb-5">
                    {points.map((point, i) => (
                        <li key={i} className="text-pretty">
                            <span className="text-[#C9D1D9]">{point}</span>
                        </li>
                    ))}
                </ul>

                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3.5 border-t border-[#30363D]">
                        {technologies.map((tech) => {
                            const icon = getTechIcon(tech);
                            const brandColor = getTechColor(tech);

                            return (
                                <DeveloperBadge
                                    key={tech}
                                    variant="secondary"
                                    className="py-1 px-2.5 text-xs"
                                >
                                    {icon ? (
                                        <SimpleIcon icon={icon} size={12} />
                                    ) : (
                                        <span
                                            className="w-2 h-2 rounded-full"
                                            style={{
                                                backgroundColor: brandColor || "#3FB950",
                                            }}
                                        />
                                    )}
                                    <span>{tech}</span>
                                </DeveloperBadge>
                            );
                        })}
                    </div>
                )}
            </DeveloperCard>
        </motion.div>
    );
}
