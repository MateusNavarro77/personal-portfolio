"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useDesignSystem } from "@/design-systems/DesignSystemProvider";

interface ProjectCardProps {
    index: number;
    tech: string[];
    github: string;
    preview: string;
    live: string;
}

const ProjectCard = ({ index, tech, github, preview, live }: ProjectCardProps) => {
    const t = useTranslations("Projects");
    const { activeSystem } = useDesignSystem();
    const { ProjectCard: DSProjectCard } = activeSystem.components;

    return (
        <DSProjectCard
            index={index}
            title={t(`items.${index}.title`)}
            description={t(`items.${index}.description`)}
            tech={tech}
            github={github}
            preview={preview}
            live={live}
            codeLabel={t("code")}
            liveLabel={t("live")}
        />
    );
};

export default ProjectCard;
