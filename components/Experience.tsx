"use client";
import React from "react";
import { motion } from "framer-motion";

const EXPERIENCE = [
    {
        role: "Software Development Intern",
        company: "Company Name",
        period: "2023 - Present",
        description: [
            "Developed Flutter features used by X users",
            "Improved app performance by optimising state management",
            "Collaborated with cross-functional teams in an agile environment"
        ]
    },
    {
        role: "Computer Engineering Student",
        company: "University Name",
        period: "2021 - 2025",
        description: [
            "Focusing on systems architecture, data structures, and algorithms",
            "Participating in multiple academic projects and coding challenges"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-4 max-w-3xl mx-auto w-full">
            <h2 className="text-3xl font-bold tracking-tight mb-12">Experience & Education</h2>
            <div className="space-y-12">
                {EXPERIENCE.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 border-l border-zinc-200 dark:border-zinc-800"
                    >
                        <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] bg-zinc-900 dark:bg-zinc-100 rounded-full" />
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-4">
                            <h3 className="font-bold text-xl">{exp.role}</h3>
                            <span className="text-sm font-medium text-zinc-500">{exp.period}</span>
                        </div>
                        <p className="font-medium text-zinc-700 dark:text-zinc-300 mb-4">{exp.company}</p>
                        <ul className="space-y-2 list-disc list-inside text-zinc-600 dark:text-zinc-400">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
