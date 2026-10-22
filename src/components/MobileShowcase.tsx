"use client";

import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  ChevronLeft,
  ChevronRight,
  RotateCw,
  ExternalLink,
  Smartphone,
  CheckCircle2,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";
import Button from "./Button";
import Chip from "./Chip";
import { githubRootUrl } from "@/constants";

export interface ShowcaseApp {
  id: string;
  githubUrl: string;
  tech: string[];
  imageUrl?: string;
  iframeUrl?: string;
}

const SHOWCASE_APPS: ShowcaseApp[] = [
  {
    id: "kriptum",
    githubUrl: `${githubRootUrl}/kriptum`,
    imageUrl: "https://raw.githubusercontent.com/MateusNavarro77/kriptum/main/docs/assets/screenshots/send_step1.png",
    iframeUrl: "/demos/app-wallet.html",
    tech: ["Flutter", "Dart", "BLoC", "Web3dart", "SQLite"],
  },
  {
    id: "metronome",
    githubUrl: `${githubRootUrl}/metronome`,
    imageUrl: "https://raw.githubusercontent.com/MateusNavarro77/metronome/refs/heads/main/readme-assets/app-screenshots/light.png",
    iframeUrl: "/demos/app-metronome.html",
    tech: ["Flutter", "Dart", "BLoC", "Audio"],
  },
  // {
  //   id: "cybersec",
  //   githubUrl: `${githubRootUrl}/projeto-cybersec-taskmanager`,
  //   iframeUrl: "/demos/app-tasks.html",
  //   tech: ["Flutter", "Spring Boot", "DevSecOps", "JWT"],
  // },
];

const getRelativeOffset = (index: number, active: number, total: number = 3) => {
  let diff = (index - active) % total;
  if (diff < -1) diff += total;
  if (diff > 1) diff -= total;
  return diff;
};

export default function MobileShowcase() {
  const t = useTranslations("MobileShowcase");
  const [activeIndex, setActiveIndex] = useState(0);

  const [viewModes, setViewModes] = useState<Record<string, "image" | "iframe">>({
    kriptum: "image",
    metronome: "image",
    cybersec: "iframe",
  });

  const [reloadKeys, setReloadKeys] = useState<Record<number, number>>({
    0: 0,
    1: 0,
    2: 0,
  });

  const nextApp = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_APPS.length);
  }, []);

  const prevApp = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? SHOWCASE_APPS.length - 1 : prev - 1));
  }, []);

  const reloadActiveIframe = useCallback(() => {
    setReloadKeys((prev) => ({
      ...prev,
      [activeIndex]: (prev[activeIndex] || 0) + 1,
    }));
  }, [activeIndex]);

  const activeApp = SHOWCASE_APPS[activeIndex];
  const activeMode: "image" | "iframe" =
    viewModes[activeApp.id] || (activeApp.imageUrl ? "image" : "iframe");

  const activeTranslation = useMemo(() => {
    try {
      return {
        title: t(`items.${activeIndex}.title`),
        category: t(`items.${activeIndex}.category`),
        description: t(`items.${activeIndex}.description`),
        features: [
          t(`items.${activeIndex}.features.0`),
          t(`items.${activeIndex}.features.1`),
          t(`items.${activeIndex}.features.2`),
        ],
      };
    } catch {
      return {
        title: SHOWCASE_APPS[activeIndex].id,
        category: "Mobile Application",
        description: "",
        features: [],
      };
    }
  }, [t, activeIndex]);

  const primaryActionUrl =
    activeMode === "image"
      ? activeApp.imageUrl || activeApp.iframeUrl || "#"
      : activeApp.iframeUrl || activeApp.imageUrl || "#";

  return (
    <section
      id="showcase"
      className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full relative overflow-hidden"
    >
      {/* Background ambient lighting accents */}
      {/* <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[radial-gradient(ellipse_at_center,rgba(21,123,200,0.1)_0%,transparent_70%)] pointer-events-none blur-3xl -z-10" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-[radial-gradient(ellipse_at_center,rgba(95,121,153,0.1)_0%,transparent_70%)] pointer-events-none blur-3xl -z-10" /> */}

      {/* Section Header (Compact) */}
      {/* <div className="flex flex-col items-center md:items-start mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 mb-2">
          <Chip variant="primary" className="text-xs py-1 px-3" icon={<Smartphone className="w-3.5 h-3.5 text-primary" />}>
            {t("tag")}
          </Chip>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-on-surface text-center md:text-left mb-2 tracking-tight">
          {t("title")}
        </h2>
        <p className="text-xs sm:text-sm text-on-surface-variant max-w-xl text-center md:text-left">
          {t("subtitle")}
        </p>
      </div> */}

      {/* Split-Screen Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: App Specifications & Metadata (Compact text) */}
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3.5 sm:gap-4"
            >
              {/* Category & Status */}
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                  {activeTranslation.category}
                </span>
                <span className="text-[11px] font-medium text-outline flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t("activeDevice")} ({activeIndex + 1}/{SHOWCASE_APPS.length})
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-on-surface tracking-tight mb-1.5">
                  {activeTranslation.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {activeTranslation.description}
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="flex flex-col gap-1.5 py-0.5">
                {activeTranslation.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2 text-xs text-on-surface">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {activeApp.tech.map((techItem) => (
                  <Chip key={techItem} variant="default" className="text-[11px] py-0.5 px-2.5">
                    {techItem}
                  </Chip>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href={primaryActionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="primary" size="sm" className="h-9 px-4 text-xs gap-1.5">
                    <span>
                      {activeMode === "image"
                        ? t("viewScreenshot")
                        : t("viewLiveDemo")}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </a>

                {activeApp.githubUrl && (
                  <a
                    href={activeApp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button variant="secondary" size="sm" className="h-9 px-4 text-xs gap-1.5">
                      <span>{t("viewSource")}</span>
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 mt-3 border-t border-outline-variant/20">
            <div className="flex items-center gap-1.5">
              {SHOWCASE_APPS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Go to device ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === dotIdx
                      ? "w-6 bg-gradient-to-r from-primary to-primary-container shadow-[0_0_8px_rgba(157,202,255,0.4)]"
                      : "w-2 bg-outline-variant/50 hover:bg-outline"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevApp}
                aria-label="Previous device"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container border border-outline-variant/30 text-on-surface hover:text-primary hover:border-primary/50 hover:bg-surface-container-high transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextApp}
                aria-label="Next device"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container border border-outline-variant/30 text-on-surface hover:text-primary hover:border-primary/50 hover:bg-surface-container-high transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Phone Coverflow Carousel (Fitted for screen) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center order-1 lg:order-2 select-none">
          {/* Top toolbar above active phone */}
          <div className="flex items-center justify-between w-full max-w-[320px] mb-2 px-1 text-[11px] text-on-surface-variant min-h-[28px]">
            <span className="flex items-center gap-1 font-medium">
              {activeMode === "image" ? (
                <>
                  <ImageIcon className="w-3 h-3 text-primary" />
                  {t("screenshotHint")}
                </>
              ) : (
                <>
                  <Sparkles className="w-3 h-3 text-primary" />
                  {t("interactHint")}
                </>
              )}
            </span>

            <div className="flex items-center gap-1">
              {/* Mode Switcher */}
              {activeApp.imageUrl && activeApp.iframeUrl && (
                <div className="flex items-center bg-surface-container p-0.5 rounded-md border border-outline-variant/30">
                  <button
                    type="button"
                    onClick={() =>
                      setViewModes((prev) => ({
                        ...prev,
                        [activeApp.id]: "image",
                      }))
                    }
                    className={`px-1.5 py-0.5 rounded text-[10px] font-medium transition-all cursor-pointer ${
                      activeMode === "image"
                        ? "bg-primary text-on-primary shadow-xs"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    Screenshot
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setViewModes((prev) => ({
                        ...prev,
                        [activeApp.id]: "iframe",
                      }))
                    }
                    className={`px-1.5 py-0.5 rounded text-[10px] font-medium transition-all cursor-pointer ${
                      activeMode === "iframe"
                        ? "bg-primary text-on-primary shadow-xs"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    Demo
                  </button>
                </div>
              )}

              {/* Reload button */}
              {activeMode === "iframe" && (
                <button
                  type="button"
                  onClick={reloadActiveIframe}
                  title={t("reloadApp")}
                  aria-label={t("reloadApp")}
                  className="flex items-center text-outline hover:text-primary transition-colors cursor-pointer p-1 rounded hover:bg-surface-container-high"
                >
                  <RotateCw className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* 3D Perspective Stage */}
          <div
            className="relative w-full flex items-center justify-center"
            style={{
              perspective: "1200px",
              height: "560px",
            }}
          >
            {SHOWCASE_APPS.map((app, index) => {
              const offset = getRelativeOffset(index, activeIndex, SHOWCASE_APPS.length);
              const isActive = offset === 0;
              const mode = viewModes[app.id] || (app.imageUrl ? "image" : "iframe");

              // Motion 3D values based on offset
              const xTranslation =
                offset === 0
                  ? 0
                  : offset === -1
                  ? "-52%"
                  : "52%";

              const scale = offset === 0 ? 1 : 0.82;
              const rotateY = offset === 0 ? 0 : offset === -1 ? 16 : -16;
              const zIndex = offset === 0 ? 30 : 10;
              const opacity = offset === 0 ? 1 : 0.55;

              return (
                <motion.div
                  key={app.id}
                  animate={{
                    x: xTranslation,
                    scale,
                    rotateY,
                    zIndex,
                    opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 30,
                  }}
                  className="absolute cursor-default"
                  style={{
                    transformStyle: "preserve-3d",
                    width: "260px",
                    height: "545px",
                  }}
                >
                  {/* Smartphone Frame Container */}
                  <div
                    className={`relative w-full h-full rounded-[38px] transition-shadow duration-500 ${
                      isActive
                        ? "shadow-[0_20px_50px_-15px_rgba(21,123,200,0.38),0_0_30px_rgba(21,123,200,0.2)]"
                        : "shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
                    }`}
                  >
                    {/* Inner Screen Area */}
                    <div
                      className="absolute overflow-hidden bg-black"
                      style={{
                        top: "3.2%",
                        bottom: "4.2%",
                        left: "5.4%",
                        right: "6.6%",
                        borderRadius: "28px",
                      }}
                    >
                      {mode === "image" && app.imageUrl ? (
                        <div className="relative w-full h-full bg-[#0d1117] flex items-center justify-center">
                          <Image
                            src={app.imageUrl}
                            alt={app.id}
                            fill
                            sizes="(max-width: 768px) 240px, 270px"
                            priority={index === 0}
                            className="object-cover object-top select-none"
                          />
                        </div>
                      ) : (
                        <iframe
                          key={`${app.id}-${reloadKeys[index] || 0}`}
                          src={app.iframeUrl}
                          title={app.id}
                          loading={isActive ? "eager" : "lazy"}
                          sandbox="allow-scripts allow-same-origin allow-forms"
                          className="w-full h-full border-0 bg-[#0d1117]"
                        />
                      )}
                    </div>

                    {/* Phone Frame Overlay Image */}
                    <div className="absolute inset-0 pointer-events-none z-20">
                      <Image
                        src="/images/phone-frame.png"
                        alt="Phone frame mockup"
                        fill
                        sizes="270px"
                        priority={index === 0}
                        className="object-contain pointer-events-none select-none drop-shadow-md"
                      />
                    </div>

                    {/* Non-active overlay */}
                    {!isActive && (
                      <button
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Select ${app.id}`}
                        className="absolute inset-0 z-30 w-full h-full cursor-pointer bg-transparent rounded-[38px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
