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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
                <div className="relative aspect-square max-w-sm mx-auto w-full rounded-2xl overflow-hidden kinetic-glass shadow-ambient hover:shadow-glass-hover transition-all duration-500 md:col-span-5 group">
                    <Image
                        src={githubAvatarFaviconUrl}
                        alt="Profile picture"
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,20,24,0.4)] via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="md:col-span-7 kinetic-glass rounded-2xl p-8 md:p-10 shadow-ambient">
                    <h2 className="headline-lg mb-6 text-on-surface">
                        {t("title")}
                    </h2>
                    <div className="space-y-5 body-lg text-on-surface-variant">
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
