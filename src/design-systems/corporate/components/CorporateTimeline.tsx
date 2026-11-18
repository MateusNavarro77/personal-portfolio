"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import SimpleIcon from "@/components/SimpleIcon";
import { getTechColor, getTechIcon } from "@/utils/techIcons";
import type { DSTimelineItemProps } from "../../types";
import { CorporateBadge, CorporateCard } from "./CorporatePrimitives";

export function CorporateTimelineContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative ml-2.5 sm:ml-4">
            <div className="absolute top-3 bottom-4 left-0 w-px bg-slate-300" />
            <div className="space-y-10 sm:space-y-12">{children}</div>
        </div>
    );
}

export function CorporateTimelineItem({
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
            transition={{ delay: index * 0.08, duration: 0.3, ease: "easeOut" }}
            className="relative pl-8 sm:pl-11"
        >
            <div className="absolute top-2 left-[0.5px] h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-[#0F172A] ring-2 ring-blue-700/25" />

            <div className="mb-3.5">
                <CorporateBadge variant="default" className="py-1 px-3 text-xs">
                    <Calendar className="h-3.5 w-3.5 stroke-[2]" />
                    <span>{period}</span>
                </CorporateBadge>
            </div>

            <CorporateCard
                variant="surface"
                icon={<Building2 size={19} className="stroke-[2]" />}
                title={company}
                className="p-6 sm:p-7"
            >
                <h4 className="text-base sm:text-lg font-semibold text-blue-700 mb-3.5">
                    {role}
                </h4>

                <ul className="space-y-2 list-disc list-inside text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                    {points.map((point, i) => (
                        <li key={i} className="text-pretty">
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3.5 border-t border-slate-100">
                        {technologies.map((tech) => {
                            const icon = getTechIcon(tech);
                            const brandColor = getTechColor(tech);

                            return (
                                <CorporateBadge
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
                                                backgroundColor: brandColor || "#1d4ed8",
                                            }}
                                        />
                                    )}
                                    <span>{tech}</span>
                                </CorporateBadge>
                            );
                        })}
                    </div>
                )}
            </CorporateCard>
        </motion.div>
    );
}
