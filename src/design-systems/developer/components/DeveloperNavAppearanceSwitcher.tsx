"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useDesignSystem } from "@/design-systems/DesignSystemProvider";
import { APPEARANCE_NAV_OPTIONS } from "../../appearanceOptions";

export default function DeveloperNavAppearanceSwitcher({
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
                "inline-flex items-center gap-0.5 rounded-md bg-[#0D1117] border border-[#30363D] p-0.5",
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
                            "flex items-center justify-center rounded p-1.5 transition-colors duration-150 cursor-pointer select-none",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FB950]",
                            isActive
                                ? "bg-[#21262D] text-[#3FB950] border border-[#3FB950]/50"
                                : "text-[#8B949E] border border-transparent opacity-70 hover:opacity-100"
                        )}
                    >
                        <Icon size={15} className="stroke-[2.2]" aria-hidden="true" />
                    </button>
                );
            })}
        </div>
    );
}
