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
                className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
            >
                <div className="relative aspect-square max-w-sm mx-auto w-full rounded-xl overflow-hidden shadow-ambient md:col-span-5 group">
                    <Image
                        src={githubAvatarFaviconUrl}
                        alt="Profile picture"
                        fill
                        className="object-cover filter grayscale group-hover:grayscale-0 transition-[filter] duration-500"
                    />
                </div>
                <div className="md:col-span-7 rounded-xl p-8 md:p-10">
                    <h2 className="headline-lg mb-8 text-foreground">
                        {t("title")}
                    </h2>
                    <div className="space-y-6 body-lg text-foreground/75">
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
