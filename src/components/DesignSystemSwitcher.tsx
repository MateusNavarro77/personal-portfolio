"use client";

import React from "react";
import { Briefcase, Check, Palette, Terminal } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useDesignSystem } from "@/design-systems/DesignSystemProvider";
import type { DesignSystemId } from "@/design-systems/types";

const DS_ICONS: Record<DesignSystemId, React.ReactNode> = {
    corporate: <Briefcase size={18} className="stroke-[2.2]" />,
    developer: <Terminal size={18} className="stroke-[2.2]" />,
    cartoon: <Palette size={18} className="stroke-[2.2]" />,
};

export default function DesignSystemSwitcher() {
    const t = useTranslations("Appearance");
    const { designSystem, setDesignSystem, activeSystem, allSystems } =
        useDesignSystem();

    const { SectionTitle, Surface, Chip } = activeSystem.components;
    const { typography } = activeSystem;

    return (
        <section
            id="appearance"
            aria-label={t("title")}
            className="py-14 sm:py-16 px-4 max-w-5xl mx-auto w-full"
        >
            <SectionTitle className="mb-4 sm:mb-5">{t("title")}</SectionTitle>

            <p className={cn(typography.body, "mb-7 max-w-2xl")}>
                {t("subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
                {allSystems.map((system) => {
                    const isSelected = designSystem === system.id;
                    const name = t(`items.${system.id}.name`);
                    const tag = t(`items.${system.id}.tag`);
                    const description = t(`items.${system.id}.description`);

                    return (
                        <button
                            key={system.id}
                            type="button"
                            onClick={() => setDesignSystem(system.id)}
                            aria-pressed={isSelected}
                            aria-label={t("selectLabel", { name })}
                            className="text-left w-full h-full flex flex-col cursor-pointer group focus-visible:outline-none"
                        >
                            <Surface
                                color={isSelected ? "accent" : "surface"}
                                radius="card"
                                border="thick"
                                shadow={isSelected ? "lg" : "md"}
                                className={cn(
                                    "w-full h-full p-5 flex flex-col justify-between gap-4 transition-all duration-200",
                                    !isSelected &&
                                        designSystem !== "cartoon" &&
                                        "group-hover:-translate-y-0.5",
                                    !isSelected &&
                                        designSystem === "cartoon" &&
                                        "group-hover:-translate-x-[1px] group-hover:-translate-y-[1px]",
                                    designSystem === "corporate" &&
                                        "group-focus-visible:ring-2 group-focus-visible:ring-blue-600 group-focus-visible:ring-offset-2",
                                    designSystem === "developer" &&
                                        "group-focus-visible:ring-2 group-focus-visible:ring-[#3FB950]",
                                    designSystem === "cartoon" &&
                                        "group-focus-visible:ring-3 group-focus-visible:ring-ink"
                                )}
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <div className="flex items-center gap-2.5 min-w-0">
                                            <span
                                                className={cn(
                                                    "w-9 h-9 flex items-center justify-center shrink-0",
                                                    designSystem === "cartoon"
                                                        ? cn(
                                                              "rounded-full border-[2.5px] border-ink shadow-cartoon-xs text-ink",
                                                              isSelected
                                                                  ? "bg-surface"
                                                                  : "bg-accent"
                                                          )
                                                        : designSystem === "developer"
                                                        ? cn(
                                                              "rounded-md border",
                                                              isSelected
                                                                  ? "bg-[#238636]/20 border-[#3FB950]/50 text-[#3FB950]"
                                                                  : "bg-[#21262D] border-[#30363D] text-[#8B949E]"
                                                          )
                                                        : cn(
                                                              "rounded-lg border",
                                                              isSelected
                                                                  ? "bg-slate-800 border-slate-700 text-blue-400"
                                                                  : "bg-slate-50 border-slate-200 text-slate-900"
                                                          )
                                                )}
                                            >
                                                {DS_ICONS[system.id]}
                                            </span>
                                            <div className="min-w-0">
                                                <h3
                                                    className={cn(
                                                        "text-base font-bold leading-tight truncate",
                                                        designSystem === "cartoon" &&
                                                            "font-display text-lg text-ink",
                                                        designSystem === "developer" &&
                                                            "font-mono text-[#E6EDF3]",
                                                        designSystem === "corporate" &&
                                                            (isSelected
                                                                ? "text-white"
                                                                : "text-slate-900")
                                                    )}
                                                >
                                                    {name}
                                                </h3>
                                                <p
                                                    className={cn(
                                                        "text-xs mt-0.5 truncate",
                                                        designSystem === "cartoon" &&
                                                            "font-bold text-ink/80",
                                                        designSystem === "developer" &&
                                                            "font-mono text-[#8B949E]",
                                                        designSystem === "corporate" &&
                                                            (isSelected
                                                                ? "text-blue-300"
                                                                : "text-slate-500")
                                                    )}
                                                >
                                                    {tag}
                                                </p>
                                            </div>
                                        </div>

                                        {isSelected && (
                                            <Chip
                                                variant={
                                                    designSystem === "cartoon"
                                                        ? "default"
                                                        : "status"
                                                }
                                                icon={
                                                    <Check
                                                        size={12}
                                                        className="stroke-[2.5]"
                                                    />
                                                }
                                                onDarkSurface={
                                                    designSystem === "corporate" &&
                                                    isSelected
                                                }
                                                className="shrink-0"
                                            >
                                                {t("active")}
                                            </Chip>
                                        )}
                                    </div>

                                    <p
                                        className={cn(
                                            "text-xs sm:text-[13px] leading-relaxed",
                                            designSystem === "cartoon" &&
                                                "font-semibold text-ink/90",
                                            designSystem === "developer" &&
                                                "text-[#8B949E]",
                                            designSystem === "corporate" &&
                                                (isSelected
                                                    ? "text-slate-300"
                                                    : "text-slate-600")
                                        )}
                                    >
                                        {description}
                                    </p>
                                </div>

                                {/* Mini palette preview */}
                                <div className="flex items-center justify-between pt-2">
                                    <div
                                        className="flex items-center gap-1.5"
                                        aria-hidden="true"
                                    >
                                        {system.meta.swatches.map((hex) => (
                                            <span
                                                key={hex}
                                                className={cn(
                                                    "w-4 h-4 rounded-full",
                                                    designSystem === "cartoon"
                                                        ? "border-[2px] border-ink"
                                                        : "border border-slate-400/40"
                                                )}
                                                style={{ backgroundColor: hex }}
                                            />
                                        ))}
                                    </div>
                                    <span
                                        className={cn(
                                            "text-[11px] font-mono",
                                            designSystem === "cartoon" &&
                                                "font-extrabold text-ink/75",
                                            designSystem === "developer" &&
                                                "text-[#6E7681]",
                                            designSystem === "corporate" &&
                                                (isSelected
                                                    ? "text-slate-400"
                                                    : "text-slate-400")
                                        )}
                                    >
                                        {system.id}
                                    </span>
                                </div>
                            </Surface>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
