"use client";

import React, { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function USFlag({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 32 32"
            className={`rounded-full shrink-0 border-[1.5px] border-ink ${className}`}
            aria-hidden="true"
        >
            <clipPath id="us-flag-circle">
                <circle cx="16" cy="16" r="16" />
            </clipPath>
            <g clipPath="url(#us-flag-circle)">
                <rect width="32" height="32" fill="#b22234" />
                <rect y="2.46" width="32" height="2.46" fill="#ffffff" />
                <rect y="7.38" width="32" height="2.46" fill="#ffffff" />
                <rect y="12.31" width="32" height="2.46" fill="#ffffff" />
                <rect y="17.23" width="32" height="2.46" fill="#ffffff" />
                <rect y="22.15" width="32" height="2.46" fill="#ffffff" />
                <rect y="27.08" width="32" height="2.46" fill="#ffffff" />
                <rect width="14" height="17.23" fill="#3c3b6e" />
                <g fill="#ffffff">
                    <circle cx="3" cy="3.5" r="0.9" />
                    <circle cx="7" cy="3.5" r="0.9" />
                    <circle cx="11" cy="3.5" r="0.9" />
                    <circle cx="5" cy="6.2" r="0.9" />
                    <circle cx="9" cy="6.2" r="0.9" />
                    <circle cx="3" cy="8.9" r="0.9" />
                    <circle cx="7" cy="8.9" r="0.9" />
                    <circle cx="11" cy="8.9" r="0.9" />
                    <circle cx="5" cy="11.6" r="0.9" />
                    <circle cx="9" cy="11.6" r="0.9" />
                    <circle cx="3" cy="14.3" r="0.9" />
                    <circle cx="7" cy="14.3" r="0.9" />
                    <circle cx="11" cy="14.3" r="0.9" />
                </g>
            </g>
        </svg>
    );
}

function BrazilFlag({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 32 32"
            className={`rounded-full shrink-0 border-[1.5px] border-ink ${className}`}
            aria-hidden="true"
        >
            <clipPath id="br-flag-circle">
                <circle cx="16" cy="16" r="16" />
            </clipPath>
            <g clipPath="url(#br-flag-circle)">
                <rect width="32" height="32" fill="#009c3b" />
                <polygon points="16,4.5 28,16 16,27.5 4,16" fill="#ffdf00" />
                <circle cx="16" cy="16" r="6" fill="#002776" />
                <path
                    d="M 10.5 17.5 A 6.5 6.5 0 0 1 21.5 14"
                    stroke="#ffffff"
                    strokeWidth="1.2"
                    fill="none"
                />
            </g>
        </svg>
    );
}

const locales = [
    { code: "en", label: "EN", Flag: USFlag, title: "English" },
    { code: "pt-br", label: "PT-BR", Flag: BrazilFlag, title: "Português (Brasil)" },
] as const;

interface LanguageSwitcherProps {
    compact?: boolean;
    className?: string;
}

export default function LanguageSwitcher({
    compact = false,
    className = "",
}: LanguageSwitcherProps) {
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
            className={cn(
                "relative inline-flex items-center gap-1 rounded-[100px] bg-surface border-[2.5px] border-ink shadow-cartoon-xs p-1",
                isPending && "opacity-70 pointer-events-none",
                className
            )}
        >
            <div className="flex items-center gap-1 relative">
                {locales.map((item) => {
                    const isActive = locale === item.code;
                    const FlagComponent = item.Flag;

                    return (
                        <button
                            key={item.code}
                            type="button"
                            onClick={() => (isActive ? toggleLanguage() : switchLocale(item.code))}
                            disabled={isPending}
                            aria-pressed={isActive}
                            aria-label={`Switch to ${item.title}`}
                            title={item.title}
                            className={cn(
                                "relative z-10 flex items-center justify-center gap-1.5 rounded-[100px] transition-transform duration-200 cursor-pointer select-none",
                                compact ? "p-1" : "px-2.5 py-1",
                                isActive ? "scale-105" : "opacity-65 hover:opacity-100"
                            )}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="activeLocalePill"
                                    className="absolute inset-0 bg-accent border-[2.5px] border-ink rounded-[100px] -z-10"
                                    transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 18,
                                    }}
                                />
                            )}
                            <FlagComponent className={compact ? "w-5 h-5" : "w-4 h-4"} />
                            {!compact && (
                                <span className="text-xs font-extrabold text-ink">
                                    {item.label}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
