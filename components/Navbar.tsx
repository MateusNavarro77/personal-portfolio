"use client";
import React from "react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    const t = useTranslations("Navbar");

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-4 w-full z-50 flex items-center px-4"
        >
            <div className="max-w-5xl mx-auto px-5 md:px-6 w-full h-16 flex items-center justify-between kinetic-glass rounded-full shadow-ambient border border-outline-variant/15">

                <div className="hidden md:flex gap-6 lg:gap-8 text-[11px] font-semibold uppercase tracking-[0.14em]">
                    <Link href="/#about" className="hover:text-primary transition-colors duration-500">{t("about")}</Link>
                    <Link href="/#projects" className="hover:text-primary transition-colors duration-500">{t("projects")}</Link>
                    <Link href="/#skills" className="hover:text-primary transition-colors duration-500">{t("skills")}</Link>
                    <Link href="/#experience" className="hover:text-primary transition-colors duration-500">{t("experience")}</Link>
                    <Link href="/#contact" className="hover:text-primary transition-colors duration-500">{t("contact")}</Link>
                </div>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
