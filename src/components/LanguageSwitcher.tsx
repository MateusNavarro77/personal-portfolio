"use client";

import React, { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Languages } from "lucide-react";
import { motion } from "framer-motion";

const locales = [
    { code: "en", label: "EN", title: "English" },
    { code: "pt-br", label: "PT-BR", title: "Português (Brasil)" },
] as const;

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const switchLocale = (nextLocale: string) => {
        if (nextLocale === locale) return;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale, scroll: false });
        });
    };

    const toggleLanguage = () => {
        const nextLocale = locale === "en" ? "pt-br" : "en";
        switchLocale(nextLocale);
    };

    return (
        <div
            role="group"
            aria-label="Language selection"
            className={`relative inline-flex items-center gap-1 p-1 rounded-full bg-surface-container/70 hover:bg-surface-container-high/80 border border-outline-variant/25 shadow-sm transition-all duration-300 ${
                isPending ? "opacity-70 pointer-events-none" : ""
            }`}
        >
            {/* Interactive Icon Button */}
            <motion.button
                type="button"
                onClick={toggleLanguage}
                disabled={isPending}
                whileHover={{ rotate: 180, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center justify-center w-7 h-7 rounded-full text-foreground/70 hover:text-primary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50"
                title="Toggle language / Mudar idioma"
                aria-label="Toggle language"
            >
                <Languages size={15} />
            </motion.button>

            {/* Segmented Locale Buttons */}
            <div className="flex items-center relative">
                {locales.map((item) => {
                    const isActive = locale === item.code;

                    return (
                        <button
                            key={item.code}
                            type="button"
                            onClick={() => switchLocale(item.code)}
                            disabled={isPending}
                            aria-pressed={isActive}
                            aria-label={`Switch to ${item.title}`}
                            className={`relative z-10 px-3 py-1.5 label-sm rounded-full transition-colors duration-300 cursor-pointer select-none ${
                                isActive
                                    ? "text-white font-bold"
                                    : "text-foreground/60 hover:text-foreground"
                            }`}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="activeLocalePill"
                                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary-container rounded-full shadow-sm -z-10"
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30,
                                    }}
                                />
                            )}
                            <span className="relative z-10">{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

