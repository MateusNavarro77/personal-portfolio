"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, FolderGit2, Github } from "lucide-react";
import SimpleIcon from "@/components/SimpleIcon";
import { getTechColor, getTechIcon } from "@/utils/techIcons";
import type { DSProjectCardProps } from "../../types";
import {
    DeveloperChip,
    DeveloperSurface,
    getDeveloperButtonClasses,
} from "./DeveloperPrimitives";

export default function DeveloperProjectCard({
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
    const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.25, ease: "easeOut" }}
            className="h-full flex flex-col"
        >
            <DeveloperSurface
                color="surface"
                radius="card"
                className="overflow-hidden flex flex-col h-full hover:border-[#484F58]"
            >
                {/* IDE/Repo Title Strip */}
                <div className="px-4 py-2 bg-[#0D1117] border-b border-[#30363D] flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#8B949E] truncate">
                        <FolderGit2 size={13} className="text-[#58A6FF] shrink-0" />
                        <span className="truncate">~/projects/{slug}</span>
                    </div>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#21262D] text-[#3FB950] border border-[#30363D] shrink-0">
                        main
                    </span>
                </div>

                <div className="aspect-video bg-[#0D1117] overflow-hidden relative border-b border-[#30363D]">
                    <Image
                        src={preview}
                        alt={`${title} preview`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                        <h3 className="font-mono text-lg sm:text-xl font-bold text-[#E6EDF3] mb-2.5">
                            {title}
                        </h3>
                        <p className="text-sm sm:text-[15px] text-[#8B949E] leading-relaxed mb-5">
                            {description}
                        </p>
                    </div>

                    <div>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                            {tech.map((item) => {
                                const icon = getTechIcon(item);
                                const brandColor = getTechColor(item);
                                return (
                                    <DeveloperChip
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
                                    </DeveloperChip>
                                );
                            })}
                        </div>

                        <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[#30363D]">
                            <a
                                href={github}
                                target="_blank"
                                rel="noreferrer"
                                className={getDeveloperButtonClasses({
                                    variant: "primary",
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
                                    className={getDeveloperButtonClasses({
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
            </DeveloperSurface>
        </motion.div>
    );
}
