"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useDesignSystem } from "@/design-systems/DesignSystemProvider";

const Hero = () => {
    const t = useTranslations("Hero");
    const { activeSystem } = useDesignSystem();
    const { getButtonClasses, HeroTechShowcase } = activeSystem.components;
    const { typography } = activeSystem;

    return (
        <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Column: Hero Content */}
                <motion.div
                    className="lg:col-span-7 flex flex-col items-start text-left"
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <h1 className={cn(typography.display, "mb-5")}>
                        {t("title")}
                    </h1>

                    <p
                        className={cn(
                            typography.body,
                            "text-lg sm:text-xl max-w-2xl mb-10"
                        )}
                    >
                        {t("description")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link
                            href="/#experience"
                            className={getButtonClasses({
                                variant: "primary",
                                size: "md",
                                className: "group",
                            })}
                        >
                            <span>{t("viewExperience")}</span>
                            <ArrowRight
                                size={18}
                                className="stroke-[2.5] group-hover:translate-x-1 transition-transform duration-200"
                            />
                        </Link>
                        <a
                            href="https://github.com/MateusNavarro77/curriculum/releases/download/latest/Mateus_Navarro_CV_PT.pdf"
                            className={getButtonClasses({
                                variant: "pop",
                                size: "md",
                            })}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{t("downloadCv")}</span>
                            <Download size={18} className="stroke-[2.5]" />
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Interactive Tech Showcase */}
                <div className="lg:col-span-5 w-full flex items-center justify-center">
                    <HeroTechShowcase />
                </div>
            </div>
        </section>
    );
};

export default Hero;
