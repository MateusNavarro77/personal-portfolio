"use client";

import type { DesignSystemDefinition } from "../types";
import {
    DeveloperAboutAvatarFrame,
    DeveloperAppBar,
    DeveloperBadge,
    DeveloperButton,
    DeveloperCard,
    DeveloperChip,
    DeveloperFooter,
    DeveloperIconButton,
    DeveloperMobileMenu,
    DeveloperMobileNavLink,
    DeveloperNavBrand,
    DeveloperNavLink,
    DeveloperPageShell,
    DeveloperSectionBand,
    DeveloperSectionTitle,
    DeveloperSurface,
    getDeveloperButtonClasses,
} from "./components/DeveloperPrimitives";
import DeveloperLanguageSwitcher from "./components/DeveloperLanguageSwitcher";
import DeveloperNavAppearanceSwitcher from "./components/DeveloperNavAppearanceSwitcher";
import DeveloperHeroShowcase from "./components/DeveloperHeroShowcase";
import DeveloperProjectCard from "./components/DeveloperProjectCard";
import {
    DeveloperTimelineContainer,
    DeveloperTimelineItem,
} from "./components/DeveloperTimeline";

export const developerDesignSystem: DesignSystemDefinition = {
    id: "developer",
    meta: {
        id: "developer",
        displayName: "Developer Terminal",
        specFile: "specs/design-systems/developer.md",
        swatches: ["#0d1117", "#161b22", "#3fb950"],
    },
    typography: {
        display:
            "font-mono text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-[-0.03em] leading-[1.08] text-[#E6EDF3]",
        title: "font-mono text-xl sm:text-2xl font-bold text-[#E6EDF3]",
        body: "text-[15px] sm:text-base font-normal leading-relaxed text-[#8B949E]",
        subHeading: "font-mono text-base sm:text-lg font-semibold text-[#58A6FF]",
        dividerTop: "border-t border-[#30363D]",
        linkMuted:
            "inline-flex items-center gap-2 font-mono text-sm font-medium text-[#58A6FF] hover:underline underline-offset-4 transition-colors",
    },
    components: {
        PageShell: DeveloperPageShell,
        SectionBand: DeveloperSectionBand,
        AppBar: DeveloperAppBar,
        NavBrand: DeveloperNavBrand,
        NavLink: DeveloperNavLink,
        MobileMenu: DeveloperMobileMenu,
        MobileNavLink: DeveloperMobileNavLink,
        LanguageSwitcher: DeveloperLanguageSwitcher,
        NavAppearanceSwitcher: DeveloperNavAppearanceSwitcher,
        Surface: DeveloperSurface,
        Card: DeveloperCard,
        Button: DeveloperButton,
        getButtonClasses: getDeveloperButtonClasses,
        IconButton: DeveloperIconButton,
        SectionTitle: DeveloperSectionTitle,
        Chip: DeveloperChip,
        Badge: DeveloperBadge,
        HeroTechShowcase: DeveloperHeroShowcase,
        AboutAvatarFrame: DeveloperAboutAvatarFrame,
        ProjectCard: DeveloperProjectCard,
        TimelineContainer: DeveloperTimelineContainer,
        TimelineItem: DeveloperTimelineItem,
        Footer: DeveloperFooter,
    },
};
