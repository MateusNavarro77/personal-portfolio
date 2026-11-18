"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useDesignSystem } from "@/design-systems/DesignSystemProvider";
import { APPEARANCE_NAV_OPTIONS } from "../../appearanceOptions";

export default function CorporateNavAppearanceSwitcher({
    className = "",
}: {
    className?: string;
}) {
    const t = useTranslations("Appearance");
    const { designSystem, setDesignSystem } = useDesignSystem();

    return (
        <div
            role="group"
            aria-label={t("title")}
            className={cn(
                "inline-flex items-center gap-0.5 rounded-lg bg-slate-100 border border-slate-200 p-0.5",
                className
            )}
        >
            {APPEARANCE_NAV_OPTIONS.map(({ id, Icon }) => {
                const isActive = designSystem === id;
                const name = t(`items.${id}.name`);

                return (
                    <button
                        key={id}
                        type="button"
                        onClick={() => setDesignSystem(id)}
                        aria-pressed={isActive}
                        aria-label={t("selectLabel", { name })}
                        title={name}
                        className={cn(
                            "flex items-center justify-center rounded-md p-1.5 transition-all duration-150 cursor-pointer select-none",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
                            isActive
                                ? "bg-white text-slate-900 shadow-xs ring-1 ring-slate-200"
                                : "text-slate-500 opacity-70 hover:opacity-100"
                        )}
                    >
                        <Icon size={15} className="stroke-[2.2]" aria-hidden="true" />
                    </button>
                );
            })}
        </div>
    );
}
