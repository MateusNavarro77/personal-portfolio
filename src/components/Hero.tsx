"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { buttonVariants } from "./Button";
import dynamic from "next/dynamic";

const FlutterLogo3D = dynamic(() => import("./FlutterLogo3D"), { ssr: false });

const Hero = () => {
    const t = useTranslations("Hero");

    return (
        <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 bg-grid-pattern relative overflow-hidden">
            {/* Ambient Cyan Radial Glow in background */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(21,123,200,0.14)_0%,transparent_70%)] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
                {/* Left Column: Hero Content */}
                <motion.div
                    className="lg:col-span-7 flex flex-col items-start text-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >


                    <h1 className="display-hero mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#54C5F8] to-secondary">
                        {t("title")}
                    </h1>
                    <p className="body-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
                        {t("description")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="/#projects" className={`${buttonVariants({ variant: "primary", size: "md" })} group`}>
                            {t("viewProjects")}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
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

                {/* Right Column: Interactive 3D Flutter Logo with Scroll Animation */}
                <motion.div
                    className="lg:col-span-5 w-full h-[360px] sm:h-[450px] lg:h-[550px] flex items-center justify-center relative"
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Concentrated glow under 3D model */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,123,200,0.22)_0%,transparent_65%)] pointer-events-none -z-10" />
                    <FlutterLogo3D />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
