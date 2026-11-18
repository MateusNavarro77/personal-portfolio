"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    AnimatePresence,
    motion,
    useReducedMotion,
    type PanInfo,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { CartoonSurface } from "./cartoon";
import { TECH_STICKERS } from "./TechStickerSvgs";

const AUTOPLAY_INTERVAL_MS = 5000;
const SWIPE_OFFSET_THRESHOLD = 40;
const SWIPE_VELOCITY_THRESHOLD = 280;

const slideVariants = {
    enter: (direction: number) => ({
        opacity: 0,
        x: direction * 28,
        scale: 0.88,
        rotate: direction * 6,
    }),
    center: {
        opacity: 1,
        x: 0,
        scale: 1,
        rotate: 0,
    },
    exit: (direction: number) => ({
        opacity: 0,
        x: direction * -28,
        scale: 0.88,
        rotate: direction * -6,
    }),
};

const reducedSlideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
};

/**
 * Interactive Cartoon Sticker carousel for the Hero section.
 * Cycles automatically every 5 seconds, pauses on hover/focus,
 * and supports manual switching via indicator pills, click, drag, or arrow keys.
 */
export default function CartoonTechCarousel() {
    const t = useTranslations("Hero");
    const shouldReduceMotion = useReducedMotion();
    const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
    const [isPaused, setIsPaused] = useState(false);
    const didDragRef = useRef(false);

    const activeTech = TECH_STICKERS[index];

    const step = useCallback((delta: number) => {
        setSlide(([current]) => [
            (current + delta + TECH_STICKERS.length) % TECH_STICKERS.length,
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
        const timer = window.setTimeout(() => {
            step(1);
        }, AUTOPLAY_INTERVAL_MS);
        return () => window.clearTimeout(timer);
    }, [index, isPaused, step]);

    const handleCardClick = () => {
        if (didDragRef.current) return;
        step(1);
    };

    const handleCardKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
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
            <motion.div
                initial={
                    shouldReduceMotion
                        ? { opacity: 0, rotate: -3 }
                        : { opacity: 0, scale: 0.9, rotate: -6 }
                }
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                whileHover={
                    shouldReduceMotion ? undefined : { rotate: 1.5, scale: 1.03 }
                }
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                className="relative"
            >
                <CartoonSurface
                    color="surface"
                    radius="card"
                    border="thick"
                    shadow="lg"
                    role="button"
                    tabIndex={0}
                    aria-label={`${activeTech.badge} — ${t("carousel.nextHint")}`}
                    onClick={handleCardClick}
                    onKeyDown={handleCardKeyDown}
                    className="p-8 sm:p-11 flex flex-col items-center justify-center relative cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent"
                >
                    {/* Decorative corner sticker badge */}
                    <div className="absolute -top-4 -right-4 z-10">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={activeTech.id}
                                initial={
                                    shouldReduceMotion
                                        ? { opacity: 0 }
                                        : { opacity: 0, scale: 0.75, y: -6, rotate: 2 }
                                }
                                animate={{ opacity: 1, scale: 1, y: 0, rotate: 6 }}
                                exit={
                                    shouldReduceMotion
                                        ? { opacity: 0 }
                                        : { opacity: 0, scale: 0.75, y: 6, rotate: 10 }
                                }
                                transition={
                                    shouldReduceMotion
                                        ? { duration: 0.15 }
                                        : { type: "spring", stiffness: 360, damping: 20 }
                                }
                                className="inline-flex items-center whitespace-nowrap px-3.5 py-1.5 rounded-[100px] bg-accent border-[3px] border-ink shadow-cartoon-sm text-xs font-black uppercase tracking-wider text-ink"
                            >
                                {activeTech.badge}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    {/* Fixed-size viewport so card dimensions stay stable across slides */}
                    <div className="w-48 h-48 sm:w-64 sm:h-64 relative flex items-center justify-center overflow-visible">
                        <AnimatePresence
                            mode="wait"
                            custom={direction}
                            initial={false}
                        >
                            <motion.div
                                key={activeTech.id}
                                custom={direction}
                                variants={
                                    shouldReduceMotion
                                        ? reducedSlideVariants
                                        : slideVariants
                                }
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={
                                    shouldReduceMotion
                                        ? { duration: 0.18 }
                                        : {
                                              type: "spring",
                                              stiffness: 320,
                                              damping: 22,
                                          }
                                }
                                drag={shouldReduceMotion ? false : "x"}
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.22}
                                onDragStart={() => {
                                    didDragRef.current = true;
                                }}
                                onDragEnd={handleDragEnd}
                                className="flex items-center justify-center touch-pan-y cursor-grab active:cursor-grabbing"
                            >
                                {activeTech.renderSvg()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </CartoonSurface>
            </motion.div>

            {/* Manual pill/dot indicators */}
            <div className="mt-7 flex items-center justify-center gap-2.5">
                {TECH_STICKERS.map((tech, techIndex) => {
                    const isActive = techIndex === index;
                    return (
                        <button
                            key={tech.id}
                            type="button"
                            onClick={() => goTo(techIndex)}
                            aria-label={t("carousel.goToSlide", {
                                tech: tech.label,
                            })}
                            aria-current={isActive ? "true" : undefined}
                            className={`h-4 rounded-[100px] border-[2.5px] border-ink shadow-cartoon-xs transition-all duration-300 cursor-pointer active:translate-x-[2px] active:translate-y-[3px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 ${
                                isActive
                                    ? "w-9 bg-accent"
                                    : "w-4 bg-surface hover:bg-accent-soft"
                            }`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
