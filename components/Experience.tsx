"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Experience = () => {
    const t = useTranslations("Experience");

    // We can use an array of indices if we want to iterate properly
    const experienceIndices = [0, 1];

    return (
        <section id="experience" className="py-24 px-4 max-w-3xl mx-auto w-full">
            <h2 className="text-3xl font-bold tracking-tight mb-12">{t("title")}</h2>
            <div className="space-y-12">
                {experienceIndices.map((index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 border-l border-zinc-200 dark:border-zinc-800"
                    >
                        <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] bg-zinc-900 dark:bg-zinc-100 rounded-full" />
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-4">
                            <h3 className="font-bold text-xl">{t(`items.${index}.role`)}</h3>
                            <span className="text-sm font-medium text-zinc-500">{t(`items.${index}.period`)}</span>
                        </div>
                        <p className="font-medium text-zinc-700 dark:text-zinc-300 mb-4">{t(`items.${index}.company`)}</p>
                        <ul className="space-y-2 list-disc list-inside text-zinc-600 dark:text-zinc-400">
                            {/* Assuming we know the number of points or can iterate if next-intl supports it */}
                            {/* For simplicity, let's use t.raw for the points array if we really need to iterate */}
                            {(t.raw(`items.${index}.points`) as string[]).map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
