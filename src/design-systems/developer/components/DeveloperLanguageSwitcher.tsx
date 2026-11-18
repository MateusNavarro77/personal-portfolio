"use client";

import React, { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { BrazilFlag, USFlag } from "@/components/Flags";

const locales = [
    { code: "en", label: "EN", Flag: USFlag, title: "English" },
    { code: "pt-br", label: "PT-BR", Flag: BrazilFlag, title: "Português (Brasil)" },
] as const;

export default function DeveloperLanguageSwitcher({
    compact = false,
    className = "",
}: {
    compact?: boolean;
    className?: string;
}) {
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

    return (
        <div
            role="group"
            aria-label="Language selection"
            className={cn(
                "inline-flex items-center gap-0.5 rounded-md bg-[#0D1117] border border-[#30363D] p-0.5",
                isPending && "opacity-70 pointer-events-none",
                className
            )}
        >
            {locales.map((item) => {
                const isActive = locale === item.code;
                const FlagComponent = item.Flag;

                return (
                    <button
                        key={item.code}
                        type="button"
                        onClick={() =>
                            isActive
                                ? switchLocale(locale === "en" ? "pt-br" : "en")
                                : switchLocale(item.code)
                        }
                        disabled={isPending}
                        aria-pressed={isActive}
                        aria-label={`Switch to ${item.title}`}
                        title={item.title}
                        className={cn(
                            "flex items-center justify-center gap-1.5 rounded font-mono text-xs transition-colors duration-150 cursor-pointer select-none",
                            compact ? "p-1" : "px-2 py-1",
                            isActive
                                ? "bg-[#21262D] text-[#3FB950] border border-[#3FB950]/50"
                                : "text-[#8B949E] border border-transparent opacity-70 hover:opacity-100"
                        )}
                    >
                        <FlagComponent className="w-4 h-4 border border-[#30363D]" />
                        {!compact && <span className="font-semibold">{item.label}</span>}
                    </button>
                );
            })}
        </div>
    );
}
