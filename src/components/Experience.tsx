"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Experience = () => {
    const t = useTranslations("Experience");
    const experienceIndices = [0, 1];

    return (
        <section id="experience" className="py-24 px-4 max-w-3xl mx-auto w-full">
            <h2 className="headline-lg mb-12 text-on-surface">
                {t("title")}
            </h2>
            <div className="space-y-8">
                {experienceIndices.map((index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        className="relative kinetic-glass rounded-2xl p-6 sm:p-8 shadow-ambient hover:shadow-glass-hover hover:-translate-y-1 transition-all duration-400 pl-10 sm:pl-12"
                    >
                        {/* Timeline Node & Line */}
                        <div className="absolute left-4 top-8 w-3 h-3 bg-primary rounded-full ring-4 ring-primary/25 shadow-[0_0_12px_rgba(157,202,255,0.7)]" />
                        <div className="absolute left-[21px] top-12 h-[calc(100%-4.5rem)] w-px bg-gradient-to-b from-primary/30 to-transparent" />

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                            <h3 className="title-md text-on-surface font-bold">{t(`items.${index}.role`)}</h3>
                            <span className="inline-block text-xs font-semibold text-primary bg-[rgba(21,123,200,0.15)] border border-primary/30 px-3 py-1 rounded-full w-fit">
                                {t(`items.${index}.period`)}
                            </span>
                        </div>
                        <p className="font-semibold text-secondary text-sm sm:text-base mb-4">{t(`items.${index}.company`)}</p>
                        <ul className="space-y-2.5 list-disc list-inside text-on-surface-variant text-sm sm:text-base leading-relaxed">
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
