"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Menu, X, Download } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import {
    CartoonAppBar,
    CartoonIconButton,
    CartoonSurface,
    cartoonButtonVariants,
} from "./cartoon";

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

    const cvUrl =
        "https://github.com/MateusNavarro77/curriculum/releases/download/latest/Mateus_Navarro_CV_PT.pdf";

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 pointer-events-none"
        >
            <div className="w-full max-w-6xl flex flex-col items-center pointer-events-auto">
                <nav aria-label="Main Navigation" className="w-full">
                    <CartoonAppBar
                        leading={
                            <Link
                                href="/#"
                                className="inline-flex items-center px-3 sm:px-3.5 py-1.5 rounded-[100px] bg-surface border-[2.5px] border-ink shadow-cartoon-xs text-sm sm:text-base font-black tracking-tight text-ink hover:bg-accent-soft transition-colors whitespace-nowrap select-none"
                            >
                                Mateus Navarro
                            </Link>
                        }
                        center={
                            <div className="flex items-center gap-0.5 xl:gap-1.5">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        href={item.href as any}
                                        className="px-2.5 xl:px-3 py-1.5 rounded-[100px] text-xs xl:text-sm font-extrabold text-ink hover:bg-surface hover:border-[2.5px] hover:border-ink border-[2.5px] border-transparent transition-all duration-150 whitespace-nowrap"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        }
                        actions={
                            <>
                                <LanguageSwitcher compact />

                                <a
                                    href={cvUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cartoonButtonVariants({
                                        variant: "pop",
                                        size: "sm",
                                        shadow: "sm",
                                        className: "hidden sm:inline-flex whitespace-nowrap",
                                    })}
                                >
                                    <Download size={15} className="stroke-[2.5]" />
                                    <span>{t("downloadCv")}</span>
                                </a>

                                <CartoonIconButton
                                    onClick={() => setIsOpen(!isOpen)}
                                    size="sm"
                                    color="surface"
                                    className="lg:hidden"
                                    aria-label="Toggle Menu"
                                    aria-expanded={isOpen}
                                >
                                    {isOpen ? (
                                        <X size={20} className="stroke-[2.5]" />
                                    ) : (
                                        <Menu size={20} className="stroke-[2.5]" />
                                    )}
                                </CartoonIconButton>
                            </>
                        }
                    />
                </nav>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -12, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -12, scale: 0.96 }}
                            transition={{ type: "spring", stiffness: 360, damping: 22 }}
                            className="w-full max-w-sm mt-3 lg:hidden"
                        >
                            <CartoonSurface
                                color="surface"
                                radius="card"
                                border="thick"
                                shadow="lg"
                                className="p-4 flex flex-col gap-2"
                            >
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        href={item.href as any}
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2.5 rounded-[100px] text-sm font-extrabold text-ink bg-paper border-[2.5px] border-ink shadow-cartoon-xs hover:bg-accent transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ))}

                                <div className="pt-2 mt-1 sm:hidden">
                                    <a
                                        href={cvUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsOpen(false)}
                                        className={cartoonButtonVariants({
                                            variant: "pop",
                                            size: "md",
                                            shadow: "sm",
                                            className: "w-full",
                                        })}
                                    >
                                        <Download size={16} className="stroke-[2.5]" />
                                        <span>{t("downloadCv")}</span>
                                    </a>
                                </div>
                            </CartoonSurface>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;
