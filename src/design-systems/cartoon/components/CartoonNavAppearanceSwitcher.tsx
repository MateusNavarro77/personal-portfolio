"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useDesignSystem } from "@/design-systems/DesignSystemProvider";
import { APPEARANCE_NAV_OPTIONS } from "../../appearanceOptions";

export default function CartoonNavAppearanceSwitcher({
    className = "",
}: {
    className?: string;
}) {
    const t = useTranslations("Appearance");
    const { designSystem, setDesignSystem } = useDesignSystem();
    const instanceId = useId();

    return (
        <div
            role="group"
            aria-label={t("title")}
            className={cn(
                "relative inline-flex items-center gap-1 rounded-[100px] bg-surface border-[2.5px] border-ink shadow-cartoon-xs p-1",
                className
            )}
        >
            <div className="flex items-center gap-1 relative">
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
                                "relative z-10 flex items-center justify-center rounded-[100px] p-1.5 text-ink transition-transform duration-200 cursor-pointer select-none",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink",
                                isActive
                                    ? "scale-105"
                                    : "opacity-65 hover:opacity-100"
                            )}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId={`activeDsPill-${instanceId}`}
                                    className="absolute inset-0 bg-accent border-[2.5px] border-ink rounded-[100px] -z-10"
                                    transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 18,
                                    }}
                                />
                            )}
                            <Icon size={15} className="stroke-[2.5]" aria-hidden="true" />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
