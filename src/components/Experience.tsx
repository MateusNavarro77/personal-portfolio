"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import SimpleIcon from "./SimpleIcon";
import { getTechIcon, getTechColor } from "@/utils/techIcons";
import { CartoonCard, SectionTitle } from "./cartoon";

const Experience = () => {
    const t = useTranslations("Experience");
    const experienceIndices = [0, 1];

    return (
        <section id="experience" className="py-20 sm:py-24 px-4 max-w-4xl mx-auto w-full">
            <SectionTitle>{t("title")}</SectionTitle>

            <div className="relative ml-2.5 sm:ml-4">
                {/* Solid ink cartoon timeline spine */}
                <div className="absolute top-3.5 bottom-4 left-0 w-[3.5px] bg-ink rounded-full" />

                <div className="space-y-10 sm:space-y-12">
                    {experienceIndices.map((index) => {
                        const rawPoints = (t.raw(`items.${index}.points`) as string[]) || [];
                        const rawTechs =
                            (t.raw(`items.${index}.technologies`) as string[]) || [];
                        const tiltDeg = index % 2 === 0 ? -0.55 : 0.55;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.12,
                                    type: "spring",
                                    stiffness: 220,
                                    damping: 20,
                                }}
                                className="relative pl-8 sm:pl-11"
                            >
                                {/* Cartoon Timeline Dot */}
                                <div className="absolute top-1.5 left-[1.75px] h-5 w-5 -translate-x-1/2 rounded-full border-[3px] border-ink bg-accent shadow-cartoon-xs" />

                                {/* Date Badge directly on the timeline next to the dot */}
                                <div className="mb-4">
                                    <Badge variant="default" className="py-1.5 px-3.5 text-xs sm:text-sm">
                                        <Calendar className="h-3.5 w-3.5 stroke-[2.5]" />
                                        <span>{t(`items.${index}.period`)}</span>
                                    </Badge>
                                </div>

                                <CartoonCard
                                    variant="surface"
                                    tiltDeg={tiltDeg}
                                    icon={<Building2 size={20} className="stroke-[2.5]" />}
                                    title={t(`items.${index}.company`)}
                                    className="p-6 sm:p-7"
                                >
                                    <h4 className="text-lg sm:text-xl font-black text-ink mb-3.5">
                                        {t(`items.${index}.role`)}
                                    </h4>

                                    <ul className="space-y-2 list-disc list-inside cartoon-body text-sm sm:text-base mb-5">
                                        {rawPoints.map((point, i) => (
                                            <li key={i} className="text-pretty">
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {rawTechs.length > 0 && (
                                        <div className="flex flex-wrap gap-2 pt-3 border-t-[2.5px] border-ink">
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
                                                                color="#0b0e13"
                                                            />
                                                        ) : (
                                                            <span
                                                                className="w-2 h-2 rounded-full border border-ink"
                                                                style={{
                                                                    backgroundColor:
                                                                        brandColor || "#60a8ed",
                                                                }}
                                                            />
                                                        )}
                                                        <span>{tech}</span>
                                                    </Badge>
                                                );
                                            })}
                                        </div>
                                    )}
                                </CartoonCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
