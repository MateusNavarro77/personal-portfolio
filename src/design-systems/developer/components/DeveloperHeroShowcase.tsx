"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    AnimatePresence,
    motion,
    useReducedMotion,
    type PanInfo,
} from "framer-motion";
import { Terminal } from "lucide-react";
import { useTranslations } from "next-intl";
import SimpleIcon from "@/components/SimpleIcon";
import { HERO_TECH_SPECS } from "../../heroTechs";

const AUTOPLAY_INTERVAL_MS = 5000;
const SWIPE_OFFSET_THRESHOLD = 40;
const SWIPE_VELOCITY_THRESHOLD = 280;

export default function DeveloperHeroShowcase() {
    const t = useTranslations("Hero");
    const shouldReduceMotion = useReducedMotion();
    const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
    const [isPaused, setIsPaused] = useState(false);
    const didDragRef = useRef(false);

    const activeTech = HERO_TECH_SPECS[index];

    const step = useCallback((delta: number) => {
        setSlide(([current]) => [
            (current + delta + HERO_TECH_SPECS.length) % HERO_TECH_SPECS.length,
            delta >= 0 ? 1 : -1,
        ]);
    }, []);

    const goTo = useCallback((targetIndex: number) => {
        setSlide(([current]) => {
            if (targetIndex === current) return [current, 1];
            return [targetIndex, targetIndex > current ? 1 : -1];
        });
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = window.setTimeout(() => step(1), AUTOPLAY_INTERVAL_MS);
        return () => window.clearTimeout(timer);
    }, [index, isPaused, step]);

    const handleCardClick = () => {
        if (didDragRef.current) return;
        step(1);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowRight") {
            e.preventDefault();
            step(1);
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            step(-1);
        } else if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            step(1);
        }
    };

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        if (
            info.offset.x < -SWIPE_OFFSET_THRESHOLD ||
            info.velocity.x < -SWIPE_VELOCITY_THRESHOLD
        ) {
            step(1);
        } else if (
            info.offset.x > SWIPE_OFFSET_THRESHOLD ||
            info.velocity.x > SWIPE_VELOCITY_THRESHOLD
        ) {
            step(-1);
        }
        window.setTimeout(() => {
            didDragRef.current = false;
        }, 0);
    };

    return (
        <div
            className="relative flex flex-col items-center justify-center w-full py-6 select-none"
            role="region"
            aria-roledescription="carousel"
            aria-label={t("carousel.regionLabel")}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    setIsPaused(false);
                }
            }}
        >
            <div
                role="button"
                tabIndex={0}
                aria-label={`${activeTech.badge} — ${t("carousel.nextHint")}`}
                onClick={handleCardClick}
                onKeyDown={handleKeyDown}
                className="w-full max-w-md rounded-lg bg-[#161B22] border border-[#30363D] shadow-[0_20px_50px_rgba(0,0,0,0.55)] overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FB950]"
            >
                {/* Terminal Window Top Chrome */}
                <div className="px-4 py-2.5 bg-[#0D1117] border-b border-[#30363D] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F85149]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F0883E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#3FB950]" />
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#8B949E]">
                        <Terminal size={12} className="text-[#3FB950]" />
                        <span>{activeTech.fileName}</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#6E7681]">
                        {index + 1}/{HERO_TECH_SPECS.length}
                    </span>
                </div>

                {/* Terminal Body */}
                <div className="p-5 sm:p-6 min-h-[290px] flex flex-col justify-between bg-[#0D1117]/60">
                    <AnimatePresence mode="wait" custom={direction} initial={false}>
                        <motion.div
                            key={activeTech.id}
                            custom={direction}
                            initial={
                                shouldReduceMotion
                                    ? { opacity: 0 }
                                    : { opacity: 0, y: direction * 8 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            exit={
                                shouldReduceMotion
                                    ? { opacity: 0 }
                                    : { opacity: 0, y: direction * -8 }
                            }
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            drag={shouldReduceMotion ? false : "x"}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.18}
                            onDragStart={() => {
                                didDragRef.current = true;
                            }}
                            onDragEnd={handleDragEnd}
                            className="flex flex-col gap-4 touch-pan-y cursor-grab active:cursor-grabbing"
                        >
                            {/* Prompt + Tech Header */}
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-md bg-[#161B22] border border-[#30363D] flex items-center justify-center shrink-0">
                                        <SimpleIcon
                                            icon={activeTech.icon}
                                            size={24}
                                            color={activeTech.color}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-mono text-base sm:text-lg font-bold text-[#E6EDF3]">
                                            {activeTech.badge}
                                        </h3>
                                        <p className="font-mono text-xs text-[#8B949E]">
                                            {activeTech.category}
                                        </p>
                                    </div>
                                </div>
                                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#238636]/20 text-[#7EE787] border border-[#3FB950]/40">
                                    ready
                                </span>
                            </div>

                            {/* Command Line */}
                            <div className="px-3 py-2 rounded bg-[#0D1117] border border-[#30363D] font-mono text-xs text-[#E6EDF3] flex items-center gap-2 overflow-hidden">
                                <span className="text-[#3FB950] font-bold shrink-0">$</span>
                                <span className="truncate">{activeTech.command}</span>
                            </div>

                            {/* Code Snippet with line numbers */}
                            <div className="rounded bg-[#0D1117] border border-[#30363D] p-3 font-mono text-[11px] sm:text-xs leading-relaxed overflow-hidden">
                                {activeTech.snippet.map((line, lineIdx) => (
                                    <div key={lineIdx} className="flex gap-3">
                                        <span className="text-[#484F58] select-none w-4 text-right shrink-0">
                                            {lineIdx + 1}
                                        </span>
                                        <span className="text-[#C9D1D9] truncate">
                                            {line}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Footer status bar */}
                    <div className="mt-4 pt-2.5 border-t border-[#30363D] flex items-center justify-between font-mono text-[11px] text-[#8B949E]">
                        <span>UTF-8 · LF</span>
                        <span className="text-[#58A6FF]">{t("carousel.nextHint")}</span>
                    </div>
                </div>
            </div>

            {/* Terminal Tab Indicators */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5">
                {HERO_TECH_SPECS.map((tech, techIndex) => {
                    const isActive = techIndex === index;
                    return (
                        <button
                            key={tech.id}
                            type="button"
                            onClick={() => goTo(techIndex)}
                            aria-label={t("carousel.goToSlide", { tech: tech.label })}
                            aria-current={isActive ? "true" : undefined}
                            className={`h-2 rounded-sm transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FB950] ${
                                isActive
                                    ? "w-8 bg-[#3FB950]"
                                    : "w-3 bg-[#30363D] hover:bg-[#484F58]"
                            }`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
