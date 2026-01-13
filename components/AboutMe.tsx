"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AboutMe = () => {
    const t = useTranslations("About");

    return (
        <section id="about" className="py-24 px-4 max-w-3xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-8">{t("title")}</h2>
                <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400">
                    <p>
                        {t("p1")}
                    </p>
                    <p>
                        {t("p2")}
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
