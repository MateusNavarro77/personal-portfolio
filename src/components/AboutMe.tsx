"use client";

import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { githubAvatarFaviconUrl } from "@/constants";
import { cn } from "@/lib/utils";
import { useDesignSystem } from "@/design-systems/DesignSystemProvider";

const AboutMe = () => {
    const t = useTranslations("About");
    const { activeSystem } = useDesignSystem();
    const { Card, AboutAvatarFrame, SectionTitle } = activeSystem.components;
    const { typography } = activeSystem;

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
                    <AboutAvatarFrame>
                        <Image
                            src={githubAvatarFaviconUrl}
                            alt="Profile picture"
                            fill
                            className="object-cover"
                        />
                    </AboutAvatarFrame>
                </div>

                <div className="md:col-span-7">
                    <Card
                        variant="surface"
                        tiltDeg={0.7}
                        icon={<User size={22} className="stroke-[2.5]" />}
                        title={t("title")}
                        className="p-6 sm:p-8"
                    >
                        <div className={cn("space-y-4", typography.body)}>
                            <p>{t("p1")}</p>
                            <p>{t("p2")}</p>
                        </div>
                    </Card>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
