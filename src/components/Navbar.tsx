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
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-4 w-full z-50 flex items-center px-4"
        >
            <div className="max-w-5xl mx-auto px-5 md:px-6 w-full h-16 flex items-center justify-between kinetic-glass rounded-full shadow-ambient border border-outline-variant/15 relative">

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 lg:gap-8 label-sm">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            href={item.href as any}
                            className="hover:text-primary transition-colors duration-500"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="flex justify-between md:justify-end gap-4 w-full md:w-auto">
                    <LanguageSwitcher />

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors cursor-pointer"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            className="absolute top-20 left-0 right-0 p-6 rounded-3xl shadow-ambient border border-outline-variant/15 md:hidden flex flex-col gap-6 kinetic-glass"
                        >
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    href={item.href as any}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors px-2 py-1"
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
