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
            <h2 className="font-display text-4xl md:text-[2.25rem] font-bold tracking-tight mb-12">{t("title")}</h2>
            <div className="space-y-12">
                {experienceIndices.map((index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 bg-surface-container-low rounded-3xl p-6"
                    >
                        <div className="absolute left-3 top-8 h-[calc(100%-3rem)] w-px bg-outline-variant/15" />
                        <div className="absolute left-2.5 top-8 w-2.25 h-2.25 bg-primary rounded-full" />
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-4">
                            <h3 className="font-bold text-xl">{t(`items.${index}.role`)}</h3>
                            <span className="text-sm font-medium text-foreground/55">{t(`items.${index}.period`)}</span>
                        </div>
                        <p className="font-medium text-foreground/75 mb-4">{t(`items.${index}.company`)}</p>
                        <ul className="space-y-2 list-disc list-inside text-foreground/70">
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
