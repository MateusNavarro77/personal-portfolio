"use client";

import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { githubAvatarFaviconUrl } from "@/constants";
import { CartoonCard, CartoonSurface, SectionTitle } from "./cartoon";

const AboutMe = () => {
    const t = useTranslations("About");

    return (
        <section id="about" className="py-20 sm:py-24 px-4 max-w-5xl mx-auto w-full">
            <SectionTitle>{t("title")}</SectionTitle>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center"
            >
                <div className="md:col-span-5 flex justify-center">
                    <CartoonSurface
                        color="surface"
                        radius="card"
                        border="thick"
                        shadow="lg"
                        tiltDeg={-1.1}
                        className="relative aspect-square max-w-xs sm:max-w-sm w-full overflow-hidden p-2 bg-surface"
                    >
                        <div className="relative w-full h-full rounded-[20px] overflow-hidden border-[3px] border-ink bg-secondary">
                            <Image
                                src={githubAvatarFaviconUrl}
                                alt="Profile picture"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </CartoonSurface>
                </div>

                <div className="md:col-span-7">
                    <CartoonCard
                        variant="surface"
                        tiltDeg={0.7}
                        icon={<User size={22} className="stroke-[2.5]" />}
                        title={t("title")}
                        className="p-6 sm:p-8"
                    >
                        <div className="space-y-4 cartoon-body text-ink">
                            <p>{t("p1")}</p>
                            <p>{t("p2")}</p>
                        </div>
                    </CartoonCard>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
