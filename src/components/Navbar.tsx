"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Menu, X, Download } from "lucide-react";
import { useDesignSystem } from "@/design-systems/DesignSystemProvider";

const Navbar = () => {
    const t = useTranslations("Navbar");
    const [isOpen, setIsOpen] = useState(false);
    const { activeSystem } = useDesignSystem();
    const {
        AppBar,
        NavBrand,
        NavLink,
        MobileMenu,
        MobileNavLink,
        LanguageSwitcher,
        IconButton,
        getButtonClasses,
    } = activeSystem.components;

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
                    <AppBar
                        leading={<NavBrand href="/#">Mateus Navarro</NavBrand>}
                        center={
                            <div className="flex items-center gap-0.5 xl:gap-1.5">
                                {menuItems.map((item) => (
                                    <NavLink key={item.href} href={item.href}>
                                        {item.label}
                                    </NavLink>
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
                                    className={getButtonClasses({
                                        variant: "pop",
                                        size: "sm",
                                        shadow: "sm",
                                        className: "hidden sm:inline-flex whitespace-nowrap",
                                    })}
                                >
                                    <Download size={15} className="stroke-[2.5]" />
                                    <span>{t("downloadCv")}</span>
                                </a>

                                <IconButton
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
                                </IconButton>
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
                            <MobileMenu>
                                {menuItems.map((item) => (
                                    <MobileNavLink
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </MobileNavLink>
                                ))}

                                <div className="pt-2 mt-1 sm:hidden">
                                    <a
                                        href={cvUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsOpen(false)}
                                        className={getButtonClasses({
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
                            </MobileMenu>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;
