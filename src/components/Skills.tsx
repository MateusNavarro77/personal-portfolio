"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import Chip from "./Chip";
import SimpleIcon from "./SimpleIcon";
import { getTechIcon, getTechColor } from "@/utils/techIcons";
import { CartoonCard, SectionTitle } from "./cartoon";

const SKILLS = {
    Languages: ["Dart", "Solidity", "TypeScript", "Java", "JavaScript"],
    Frameworks: ["Flutter", "React", "Express JS", "Hardhat"],
    Tools: ["Git", "Github", "Gitlab", "Jenkins", "Docker"],
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
    Languages: <Code2 size={20} className="stroke-[2.5]" />,
    Frameworks: <Layers size={20} className="stroke-[2.5]" />,
    Tools: <Wrench size={20} className="stroke-[2.5]" />,
};

const Skills = () => {
    const t = useTranslations("Skills");

    return (
        <section id="skills" className="py-20 sm:py-24 px-4 max-w-5xl mx-auto w-full">
            <SectionTitle>{t("title")}</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {Object.entries(SKILLS).map(([category, skills], index) => {
                    const tiltDeg = index === 0 ? -0.9 : index === 1 ? 0.6 : -0.5;

                    return (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.08,
                                type: "spring",
                                stiffness: 220,
                                damping: 20,
                            }}
                            className="h-full"
                        >
                            <CartoonCard
                                variant={index === 1 ? "accent" : "surface"}
                                tiltDeg={tiltDeg}
                                icon={CATEGORY_ICONS[category]}
                                title={category}
                                className="h-full p-6"
                            >
                                <div className="flex flex-wrap gap-2.5 pt-1">
                                    {skills.map((skill) => {
                                        const icon = getTechIcon(skill);
                                        const brandColor = getTechColor(skill);
                                        return (
                                            <Chip
                                                key={skill}
                                                icon={
                                                    icon ? (
                                                        <SimpleIcon
                                                            icon={icon}
                                                            size={14}
                                                            color="#0b0e13"
                                                        />
                                                    ) : undefined
                                                }
                                                dot={!icon}
                                                dotColor={brandColor || undefined}
                                            >
                                                {skill}
                                            </Chip>
                                        );
                                    })}
                                </div>
                            </CartoonCard>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
