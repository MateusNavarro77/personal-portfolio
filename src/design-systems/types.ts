import type React from "react";

export type DesignSystemId = "corporate" | "developer" | "cartoon";

export const DESIGN_SYSTEM_IDS: readonly DesignSystemId[] = [
    "corporate",
    "developer",
    "cartoon",
] as const;

export const DEFAULT_DESIGN_SYSTEM: DesignSystemId = "corporate";

export type DSButtonVariant =
    | "primary"
    | "secondary"
    | "surface"
    | "pop"
    | "danger";

export type DSButtonSize = "sm" | "md";

export type DSButtonShadow = "lg" | "md" | "sm" | "xs" | "none";

export type DSSurfaceColor =
    | "surface"
    | "accent"
    | "accentSoft"
    | "secondary"
    | "pop"
    | "danger"
    | "paper"
    | "disabled";

export type DSCardVariant = "surface" | "accent" | "secondary";

export type DSChipVariant = "default" | "primary" | "status";

export type DSBadgeVariant = "default" | "secondary" | "destructive" | "outline";

export interface DSButtonClassOptions {
    variant?: DSButtonVariant;
    size?: DSButtonSize;
    shadow?: DSButtonShadow;
    disabled?: boolean;
    onDarkSurface?: boolean;
    className?: string;
}

export interface DSButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
    variant?: DSButtonVariant;
    size?: DSButtonSize;
    shadow?: DSButtonShadow;
    icon?: React.ReactNode;
}

export interface DSIconButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
    color?: DSSurfaceColor;
    size?: "sm" | "md";
}

export interface DSSurfaceProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
    color?: DSSurfaceColor;
    radius?: "pill" | "card" | "surface" | "sm";
    border?: "thick" | "medium" | "thin";
    shadow?: DSButtonShadow;
    tiltDeg?: number;
}

export interface DSCardProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "color"> {
    variant?: DSCardVariant;
    tiltDeg?: number;
    icon?: React.ReactNode;
    title?: React.ReactNode;
    headerExtra?: React.ReactNode;
    actions?: React.ReactNode;
    terminalHeader?: string;
}

export interface DSSectionTitleProps {
    children: React.ReactNode;
    className?: string;
    as?: "h2" | "h3" | "span";
    slug?: string;
}

export interface DSChipProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: DSChipVariant;
    icon?: React.ReactNode;
    dot?: boolean;
    dotColor?: string;
    onDarkSurface?: boolean;
}

export interface DSBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: DSBadgeVariant;
    onDarkSurface?: boolean;
}

export interface DSAppBarProps {
    leading?: React.ReactNode;
    center?: React.ReactNode;
    actions?: React.ReactNode;
    className?: string;
}

export interface DSProjectCardProps {
    index: number;
    title: string;
    description: string;
    tech: string[];
    github: string;
    preview: string;
    live: string;
    codeLabel: string;
    liveLabel: string;
}

export interface DSTimelineItemProps {
    index: number;
    role: string;
    company: string;
    period: string;
    points: string[];
    technologies: string[];
}

export interface DSFooterProps {
    year: number;
    rightsText: string;
    builtWithText: string;
}

export interface DesignSystemMeta {
    id: DesignSystemId;
    displayName: string;
    specFile: string;
    swatches: readonly [string, string, string];
}

export interface DesignSystemTypographyClasses {
    display: string;
    title: string;
    body: string;
    subHeading: string;
    dividerTop: string;
    linkMuted: string;
}

export interface DesignSystemComponents {
    PageShell: React.ComponentType<{ children: React.ReactNode; className?: string }>;
    SectionBand: React.ComponentType<{
        variant?: "primary" | "alt";
        withTopBorder?: boolean;
        children: React.ReactNode;
        className?: string;
    }>;
    AppBar: React.ComponentType<DSAppBarProps>;
    NavBrand: React.ComponentType<{ href?: string; children: React.ReactNode }>;
    NavLink: React.ComponentType<{ href: string; children: React.ReactNode }>;
    MobileMenu: React.ComponentType<{ children: React.ReactNode; className?: string }>;
    MobileNavLink: React.ComponentType<{
        href: string;
        onClick?: () => void;
        children: React.ReactNode;
    }>;
    LanguageSwitcher: React.ComponentType<{ compact?: boolean; className?: string }>;
    Surface: React.ComponentType<DSSurfaceProps>;
    Card: React.ComponentType<DSCardProps>;
    Button: React.ComponentType<DSButtonProps>;
    getButtonClasses: (options?: DSButtonClassOptions) => string;
    IconButton: React.ComponentType<DSIconButtonProps>;
    SectionTitle: React.ComponentType<DSSectionTitleProps>;
    Chip: React.ComponentType<DSChipProps>;
    Badge: React.ComponentType<DSBadgeProps>;
    HeroTechShowcase: React.ComponentType;
    AboutAvatarFrame: React.ComponentType<{ children: React.ReactNode }>;
    ProjectCard: React.ComponentType<DSProjectCardProps>;
    TimelineContainer: React.ComponentType<{ children: React.ReactNode }>;
    TimelineItem: React.ComponentType<DSTimelineItemProps>;
    Footer: React.ComponentType<DSFooterProps>;
}

export interface DesignSystemDefinition {
    id: DesignSystemId;
    meta: DesignSystemMeta;
    typography: DesignSystemTypographyClasses;
    components: DesignSystemComponents;
}
