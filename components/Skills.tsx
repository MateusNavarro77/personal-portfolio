"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const SKILLS = {
    "Languages": ["Dart", "Java", "Python", "TypeScript", "JavaScript"],
    "Frameworks": ["Flutter", "Next.js", "React"],
    "Tools": ["Git", "Firebase", "REST APIs", "PostgreSQL"],
    "Concepts": ["Clean Architecture", "MVC", "State Management", "Scrum"]
};

const Skills = () => {
    const t = useTranslations("Skills");

    return (
        <section id="skills" className="py-24 px-4 max-w-5xl mx-auto w-full">
            <h2 className="text-3xl font-bold tracking-tight mb-12">{t("title")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(SKILLS).map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {/* Note: We could translate categories if we add them to messages */}
                        <h3 className="font-bold text-lg mb-4 text-zinc-900 dark:text-zinc-100">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm bg-white dark:bg-black hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
