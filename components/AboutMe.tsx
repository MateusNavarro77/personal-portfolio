"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { githubAvatarFaviconUrl } from "@/constants";
const AboutMe = () => {
    const t = useTranslations("About");

    return (
        <section id="about" className="py-24 px-4 max-w-5xl mx-auto w-full">

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                <div className="relative aspect-square max-w-sm mx-auto w-full rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src={githubAvatarFaviconUrl}
                        alt="Profile picture"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-8">{t("title")}</h2>
                    <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400">
                        <p>
                            {t("p1")}
                        </p>
                        <p>
                            {t("p2")}
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
