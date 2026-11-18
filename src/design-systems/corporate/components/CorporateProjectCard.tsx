"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import SimpleIcon from "@/components/SimpleIcon";
import { getTechColor, getTechIcon } from "@/utils/techIcons";
import type { DSProjectCardProps } from "../../types";
import {
    CorporateChip,
    CorporateSurface,
    getCorporateButtonClasses,
} from "./CorporatePrimitives";

export default function CorporateProjectCard({
    index,
    title,
    description,
    tech,
    github,
    preview,
    live,
    codeLabel,
    liveLabel,
}: DSProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.3, ease: "easeOut" }}
            className="h-full flex flex-col"
        >
            <CorporateSurface
                color="surface"
                radius="card"
                className="overflow-hidden flex flex-col h-full hover:border-slate-300 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]"
            >
                <div className="aspect-video bg-slate-100 overflow-hidden relative border-b border-slate-200">
                    <Image
                        src={preview}
                        alt={`${title} preview`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                        <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2.5">
                            {title}
                        </h3>
                        <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-5">
                            {description}
                        </p>
                    </div>

                    <div>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                            {tech.map((item) => {
                                const icon = getTechIcon(item);
                                const brandColor = getTechColor(item);
                                return (
                                    <CorporateChip
                                        key={item}
                                        icon={
                                            icon ? (
                                                <SimpleIcon icon={icon} size={13} />
                                            ) : undefined
                                        }
                                        dot={!icon}
                                        dotColor={brandColor || undefined}
                                    >
                                        {item}
                                    </CorporateChip>
                                );
                            })}
                        </div>

                        <div className="flex flex-wrap gap-2.5 pt-4 border-t border-slate-100">
                            <a
                                href={github}
                                target="_blank"
                                rel="noreferrer"
                                className={getCorporateButtonClasses({
                                    variant: "pop",
                                    size: "sm",
                                })}
                            >
                                <Github size={15} className="stroke-[2]" />
                                <span>{codeLabel}</span>
                            </a>
                            {live !== "#" && (
                                <a
                                    href={live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={getCorporateButtonClasses({
                                        variant: "secondary",
                                        size: "sm",
                                    })}
                                >
                                    <ExternalLink size={15} className="stroke-[2]" />
                                    <span>{liveLabel}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </CorporateSurface>
        </motion.div>
    );
}
