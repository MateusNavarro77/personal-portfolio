"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Hero = () => {
    const t = useTranslations("Hero");

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* <span className="text-zinc-500 font-medium mb-4 block tracking-widest uppercase text-xs">{t("status")}</span> */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
                    {t("title")}
                </h1>
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                    {t("description")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/#projects" className="h-12 px-8 bg-zinc-900 cursor-pointer dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group text-sm">
                        {t("viewProjects")}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href={"https://github.com/MateusNavarro77/curriculum/releases/download/latest/Mateus_Navarro_CV_PT.pdf"} className="h-12 px-8 border border-zinc-200 cursor-pointer dark:border-zinc-800 rounded-full font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all flex items-center justify-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {t("downloadCv")}
                        <Download size={18} />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
