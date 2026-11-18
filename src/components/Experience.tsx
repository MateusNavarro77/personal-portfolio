"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useDesignSystem } from "@/design-systems/DesignSystemProvider";

const Experience = () => {
    const t = useTranslations("Experience");
    const experienceIndices = [0, 1];
    const { activeSystem } = useDesignSystem();
    const { SectionTitle, TimelineContainer, TimelineItem } =
        activeSystem.components;

    return (
        <section id="experience" className="py-20 sm:py-24 px-4 max-w-4xl mx-auto w-full">
            <SectionTitle>{t("title")}</SectionTitle>

            <TimelineContainer>
                {experienceIndices.map((index) => {
                    const rawPoints = (t.raw(`items.${index}.points`) as string[]) || [];
                    const rawTechs =
                        (t.raw(`items.${index}.technologies`) as string[]) || [];

                    return (
                        <TimelineItem
                            key={index}
                            index={index}
                            role={t(`items.${index}.role`)}
                            company={t(`items.${index}.company`)}
                            period={t(`items.${index}.period`)}
                            points={rawPoints}
                            technologies={rawTechs}
                        />
                    );
                })}
            </TimelineContainer>
        </section>
    );
};

export default Experience;
