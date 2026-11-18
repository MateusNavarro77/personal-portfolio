"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Chip from "./Chip";
import Image from "next/image";
import SimpleIcon from "./SimpleIcon";
import { getTechIcon, getTechColor } from "@/utils/techIcons";
import { CartoonSurface, cartoonButtonVariants } from "./cartoon";

interface ProjectCardProps {
    index: number;
    tech: string[];
    github: string;
    preview: string;
    live: string;
}

const ProjectCard = ({ index, tech, github, preview, live }: ProjectCardProps) => {
    const t = useTranslations("Projects");
    const tiltDeg = index % 2 === 0 ? -0.75 : 0.65;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, type: "spring", stiffness: 220, damping: 20 }}
            className="h-full flex flex-col"
        >
            <CartoonSurface
                color="surface"
                radius="card"
                border="thick"
                shadow="lg"
                tiltDeg={tiltDeg}
                className="overflow-hidden flex flex-col h-full"
            >
                <div className="aspect-video bg-secondary overflow-hidden relative border-b-[3.5px] border-ink">
                    <Image
                        src={preview}
                        alt={`${t(`items.${index}.title`)} preview`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                        <h3 className="cartoon-title mb-2.5 text-ink">
                            {t(`items.${index}.title`)}
                        </h3>
                        <p className="cartoon-body text-sm sm:text-base mb-5">
                            {t(`items.${index}.description`)}
                        </p>
                    </div>

                    <div>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {tech.map((item) => {
                                const icon = getTechIcon(item);
                                const brandColor = getTechColor(item);
                                return (
                                    <Chip
                                        key={item}
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
                                className={cartoonButtonVariants({
                                    variant: "primary",
                                    size: "sm",
                                    shadow: "sm",
                                })}
                            >
                                <Github size={16} className="stroke-[2.5]" />
                                <span>{t("code")}</span>
                            </a>
                            {live !== "#" && (
                                <a
                                    href={live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cartoonButtonVariants({
                                        variant: "secondary",
                                        size: "sm",
                                        shadow: "sm",
                                    })}
                                >
                                    <ExternalLink size={16} className="stroke-[2.5]" />
                                    <span>{t("live")}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </CartoonSurface>
        </motion.div>
    );
};

export default ProjectCard;
