"use client";
import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    const t = useTranslations("Navbar");
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { href: "/#about", label: t("about") },
        { href: "/#projects", label: t("projects") },
        { href: "/#skills", label: t("skills") },
        { href: "/#experience", label: t("experience") },
        { href: "/#contact", label: t("contact") },
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-4 w-full z-50 flex items-center px-4"
        >
            <div className="max-w-5xl mx-auto px-5 md:px-7 w-full h-16 flex items-center justify-between kinetic-glass rounded-full shadow-ambient border border-[rgba(95,121,153,0.22)] relative">

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8 label-sm">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            href={item.href as any}
                            className="text-on-surface-variant hover:text-primary transition-colors duration-300 tracking-wider font-semibold"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 w-full md:w-auto">
                    <LanguageSwitcher />

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer rounded-full hover:bg-[rgba(95,121,153,0.15)]"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.25 }}
                            className="absolute top-20 left-0 right-0 p-6 rounded-3xl shadow-glass-hover border border-[rgba(95,121,153,0.25)] md:hidden flex flex-col gap-4 kinetic-glass-elevated"
                        >
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    href={item.href as any}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-semibold text-on-surface-variant hover:text-primary transition-colors px-3 py-2 rounded-xl hover:bg-[rgba(95,121,153,0.1)]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
