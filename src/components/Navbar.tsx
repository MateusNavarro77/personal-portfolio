"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Menu, X, Download } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    const t = useTranslations("Navbar");
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { href: "/#about", label: t("about") },
        { href: "/#projects", label: t("projects") },
        { href: "/#opensource", label: t("openSource") },
        { href: "/#skills", label: t("skills") },
        { href: "/#experience", label: t("experience") },
        { href: "/#contact", label: t("contact") },
    ];

    const cvUrl = "https://github.com/MateusNavarro77/curriculum/releases/download/latest/Mateus_Navarro_CV_PT.pdf";

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none"
        >
            <div className="w-full max-w-5xl xl:max-w-6xl flex flex-col items-center pointer-events-auto">
                {/* Dynamic Island Notch Bar */}
                <nav
                    aria-label="Main Navigation"
                    className="w-full sm:w-auto min-w-0 max-w-full flex items-center justify-between gap-3 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6 py-2.5 bg-[#0b0e14] border-b border-x sm:border-x-0 border-white/10 rounded-b-2xl sm:rounded-b-[24px] shadow-[0_12px_32px_rgba(0,0,0,0.65)] relative z-20"
                >
                    {/* Top-left concave curve ("curva superior") */}
                    <svg
                        className="absolute -left-[24px] top-0 w-[24px] h-[24px] pointer-events-none hidden sm:block text-[#0b0e14]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M 24 0 L 0 0 A 24 24 0 0 1 24 24 Z" />
                        <path
                            d="M 0 0 A 24 24 0 0 1 24 24"
                            stroke="rgba(255, 255, 255, 0.1)"
                            strokeWidth="1"
                            fill="none"
                        />
                    </svg>

                    {/* Top-right concave curve ("curva superior") */}
                    <svg
                        className="absolute -right-[24px] top-0 w-[24px] h-[24px] pointer-events-none hidden sm:block text-[#0b0e14]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M 0 0 L 24 0 A 24 24 0 0 0 0 24 Z" />
                        <path
                            d="M 24 0 A 24 24 0 0 0 0 24"
                            stroke="rgba(255, 255, 255, 0.1)"
                            strokeWidth="1"
                            fill="none"
                        />
                    </svg>

                    {/* Left: Text Branding */}
                    <Link
                        href="/#"
                        className="text-sm md:text-base font-bold tracking-tight text-white hover:text-primary transition-colors whitespace-nowrap select-none shrink-0"
                    >
                        Mateus Navarro
                    </Link>

                    {/* Center: Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-3.5 md:gap-4 lg:gap-6 shrink-0">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                href={item.href as any}
                                className="text-xs lg:text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right: Actions (Language Switcher + Download CV CTA) */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <LanguageSwitcher compact />

                        {/* Desktop Pill Download CTA */}
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-neutral-900 hover:bg-neutral-200 font-semibold text-xs transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
                        >
                            <Download size={13} className="stroke-[2.5]" />
                            <span>{t("downloadCv")}</span>
                        </a>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-1.5 text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            aria-label="Toggle Menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="w-full max-w-sm mt-2 p-4 rounded-2xl bg-[#0b0e14]/95 backdrop-blur-xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.7)] flex flex-col gap-2 md:hidden z-10"
                        >
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    href={item.href as any}
                                    onClick={() => setIsOpen(false)}
                                    className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <div className="pt-2 mt-1 border-t border-white/10">
                                <a
                                    href={cvUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white text-neutral-900 font-semibold text-xs shadow hover:bg-neutral-200 transition-colors"
                                >
                                    <Download size={14} className="stroke-[2.5]" />
                                    <span>{t("downloadCv")}</span>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;
