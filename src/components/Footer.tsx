"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useDesignSystem } from "@/design-systems/DesignSystemProvider";

const Footer = () => {
    const t = useTranslations("Footer");
    const { activeSystem } = useDesignSystem();
    const { Footer: DSFooter } = activeSystem.components;

    return (
        <DSFooter
            year={new Date().getFullYear()}
            rightsText={t("rights")}
            builtWithText={t("builtWith", {
                designSystem: activeSystem.meta.displayName,
            })}
        />
    );
};

export default Footer;
