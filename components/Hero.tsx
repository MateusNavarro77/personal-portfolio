"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { buttonVariants } from "./Button";

const Hero = () => {
    const t = useTranslations("Hero");

    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 pt-20 bg-grid-pattern">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-[-0.05em] mb-6 bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                    {t("title")}
                </h1>
                <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mb-10 leading-relaxed">
                    {t("description")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/#projects" className={`${buttonVariants({ variant: "primary", size: "md" })} group`}>
                        {t("viewProjects")}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-500" />
                    </Link>
                    <a
                        href="https://github.com/MateusNavarro77/curriculum/releases/download/latest/Mateus_Navarro_CV_PT.pdf"
                        className={buttonVariants({ variant: "secondary", size: "md" })}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t("downloadCv")}
                        <Download size={18} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
