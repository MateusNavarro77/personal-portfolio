"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    AnimatePresence,
    motion,
    useReducedMotion,
    type PanInfo,
} from "framer-motion";
import { useTranslations } from "next-intl";
import SimpleIcon from "@/components/SimpleIcon";
import { HERO_TECH_SPECS } from "../../heroTechs";

const AUTOPLAY_INTERVAL_MS = 5000;
const SWIPE_OFFSET_THRESHOLD = 40;
const SWIPE_VELOCITY_THRESHOLD = 280;

export default function CorporateHeroShowcase() {
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
                className="w-full max-w-sm rounded-xl bg-[#0F172A] border border-slate-800 shadow-[0_20px_48px_rgba(15,23,42,0.18)] overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
                {/* Corporate Navy Header */}
                <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/70">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Core Stack
                    </span>
                    <span className="text-xs font-medium text-blue-300">
                        0{index + 1} / 0{HERO_TECH_SPECS.length}
                    </span>
                </div>

                {/* Main Viewport */}
                <div className="p-8 sm:p-10 bg-white flex flex-col items-center justify-center min-h-[270px] sm:min-h-[300px]">
                    <AnimatePresence mode="wait" custom={direction} initial={false}>
                        <motion.div
                            key={activeTech.id}
                            custom={direction}
                            initial={
                                shouldReduceMotion
                                    ? { opacity: 0 }
                                    : { opacity: 0, x: direction * 18 }
                            }
                            animate={{ opacity: 1, x: 0 }}
                            exit={
                                shouldReduceMotion
                                    ? { opacity: 0 }
                                    : { opacity: 0, x: direction * -18 }
                            }
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            drag={shouldReduceMotion ? false : "x"}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.18}
                            onDragStart={() => {
                                didDragRef.current = true;
                            }}
                            onDragEnd={handleDragEnd}
                            className="flex flex-col items-center text-center touch-pan-y cursor-grab active:cursor-grabbing"
                        >
                            <div
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center mb-6 shadow-[0_4px_12px_rgba(15,23,42,0.05)]"
                                style={{ color: activeTech.color }}
                            >
                                <SimpleIcon
                                    icon={activeTech.icon}
                                    size={56}
                                    color={activeTech.color}
                                />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 mb-1.5">
                                {activeTech.category}
                            </span>
                            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                                {activeTech.badge}
                            </h3>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Clean Corporate Indicators */}
            <div className="mt-6 flex items-center justify-center gap-2">
                {HERO_TECH_SPECS.map((tech, techIndex) => {
                    const isActive = techIndex === index;
                    return (
                        <button
                            key={tech.id}
                            type="button"
                            onClick={() => goTo(techIndex)}
                            aria-label={t("carousel.goToSlide", { tech: tech.label })}
                            aria-current={isActive ? "true" : undefined}
                            className={`h-2 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                                isActive
                                    ? "w-8 bg-[#0F172A]"
                                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                            }`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
