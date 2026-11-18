"use client";

import type { DesignSystemDefinition } from "../types";
import {
    CorporateAboutAvatarFrame,
    CorporateAppBar,
    CorporateBadge,
    CorporateButton,
    CorporateCard,
    CorporateChip,
    CorporateFooter,
    CorporateIconButton,
    CorporateMobileMenu,
    CorporateMobileNavLink,
    CorporateNavBrand,
    CorporateNavLink,
    CorporatePageShell,
    CorporateSectionBand,
    CorporateSectionTitle,
    CorporateSurface,
    getCorporateButtonClasses,
} from "./components/CorporatePrimitives";
import CorporateLanguageSwitcher from "./components/CorporateLanguageSwitcher";
import CorporateHeroShowcase from "./components/CorporateHeroShowcase";
import CorporateProjectCard from "./components/CorporateProjectCard";
import {
    CorporateTimelineContainer,
    CorporateTimelineItem,
} from "./components/CorporateTimeline";

export const corporateDesignSystem: DesignSystemDefinition = {
    id: "corporate",
    meta: {
        id: "corporate",
        displayName: "Corporate Navy",
        specFile: "specs/design-systems/corporate.md",
        swatches: ["#ffffff", "#0f172a", "#1d4ed8"],
    },
    typography: {
        display:
            "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.06] text-slate-900",
        title: "text-xl sm:text-2xl font-bold tracking-tight text-slate-900 [[data-navy-card=true]_&]:text-white",
        body: "text-[15px] sm:text-base font-normal leading-relaxed text-slate-600 [[data-navy-card=true]_&]:text-slate-300",
        subHeading: "text-base sm:text-lg font-semibold text-blue-700",
        dividerTop: "border-t border-slate-200 [[data-navy-card=true]_&]:border-slate-700/80",
        linkMuted:
            "inline-flex items-center gap-2 text-sm font-semibold text-blue-700 [[data-navy-card=true]_&]:text-blue-300 hover:underline underline-offset-4 transition-colors",
    },
    components: {
        PageShell: CorporatePageShell,
        SectionBand: CorporateSectionBand,
        AppBar: CorporateAppBar,
        NavBrand: CorporateNavBrand,
        NavLink: CorporateNavLink,
        MobileMenu: CorporateMobileMenu,
        MobileNavLink: CorporateMobileNavLink,
        LanguageSwitcher: CorporateLanguageSwitcher,
        Surface: CorporateSurface,
        Card: CorporateCard,
        Button: CorporateButton,
        getButtonClasses: getCorporateButtonClasses,
        IconButton: CorporateIconButton,
        SectionTitle: CorporateSectionTitle,
        Chip: CorporateChip,
        Badge: CorporateBadge,
        HeroTechShowcase: CorporateHeroShowcase,
        AboutAvatarFrame: CorporateAboutAvatarFrame,
        ProjectCard: CorporateProjectCard,
        TimelineContainer: CorporateTimelineContainer,
        TimelineItem: CorporateTimelineItem,
        Footer: CorporateFooter,
    },
};
