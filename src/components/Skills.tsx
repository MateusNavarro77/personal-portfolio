"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Chip from "./Chip";
import SimpleIcon from "./SimpleIcon";
import { getTechIcon, getTechColor } from "@/utils/techIcons";

const SKILLS = {
    "Languages": ["Dart", "Solidity", "TypeScript", "Java", "JavaScript"],
    "Frameworks": ["Flutter", "React", "Express JS", "Hardhat"],
    "Tools": ["Git", "Github", "Gitlab", "Jenkins", "Docker"],
};

const Skills = () => {
    const t = useTranslations("Skills");

    return (
        <section id="skills" className="py-24 px-4 max-w-5xl mx-auto w-full">
            <h2 className="headline-lg mb-12 text-on-surface">
                {t("title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {Object.entries(SKILLS).map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="kinetic-glass rounded-2xl p-6 md:p-7 shadow-ambient hover:shadow-glass-hover hover:-translate-y-1 transition-all duration-400 flex flex-col"
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <h3 className="title-md text-on-surface font-bold tracking-tight">{category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                            {skills.map((skill) => {
                                const icon = getTechIcon(skill);
                                const brandColor = getTechColor(skill);
                                return (
                                    <Chip
                                        key={skill}
                                        icon={icon ? <SimpleIcon icon={icon} size={14} color={brandColor || undefined} /> : undefined}
                                        dot={!icon}
                                        dotColor={brandColor || undefined}
                                    >
                                        {skill}
                                    </Chip>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
