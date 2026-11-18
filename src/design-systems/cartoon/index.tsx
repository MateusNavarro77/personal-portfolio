"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Calendar, ExternalLink, Github } from "lucide-react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import {
    CartoonAppBar,
    CartoonButton,
    CartoonCard,
    CartoonIconButton,
    CartoonSurface,
    SectionTitle as CartoonSectionTitle,
    cartoonButtonVariants,
} from "@/components/cartoon";
import CartoonTechCarousel from "@/components/CartoonTechCarousel";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Chip from "@/components/Chip";
import { Badge } from "@/components/ui/badge";
import SimpleIcon from "@/components/SimpleIcon";
import { getTechColor, getTechIcon } from "@/utils/techIcons";
import type {
    DSButtonClassOptions,
    DSButtonProps,
    DSCardProps,
    DSChipProps,
    DSBadgeProps,
    DSFooterProps,
    DSIconButtonProps,
    DSProjectCardProps,
    DSSectionTitleProps,
    DSSurfaceProps,
    DSTimelineItemProps,
    DesignSystemDefinition,
} from "../types";

function CartoonPageShell({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <main
            className={cn(
                "flex flex-col items-center w-full bg-paper overflow-x-clip",
                className
            )}
        >
            {children}
        </main>
    );
}

function CartoonSectionBand({
    variant = "primary",
    withTopBorder = true,
    children,
    className,
}: {
    variant?: "primary" | "alt";
    withTopBorder?: boolean;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "w-full",
                variant === "alt" ? "bg-paper-alt" : "bg-paper",
                withTopBorder && "border-t-[3.5px] border-ink",
                className
            )}
        >
            {children}
        </div>
    );
}

function CartoonNavBrand({
    href = "/#",
    children,
}: {
    href?: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            href={href as any}
            className="inline-flex items-center px-3 sm:px-3.5 py-1.5 rounded-[100px] bg-surface border-[2.5px] border-ink shadow-cartoon-xs text-sm sm:text-base font-black tracking-tight text-ink hover:bg-accent-soft transition-colors whitespace-nowrap select-none"
        >
            {children}
        </Link>
    );
}

function CartoonNavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            href={href as any}
            className="px-2.5 xl:px-3 py-1.5 rounded-[100px] text-xs xl:text-sm font-extrabold text-ink hover:bg-surface hover:border-[2.5px] hover:border-ink border-[2.5px] border-transparent transition-all duration-150 whitespace-nowrap"
        >
            {children}
        </Link>
    );
}

function CartoonMobileMenu({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <CartoonSurface
            color="surface"
            radius="card"
            border="thick"
            shadow="lg"
            className={cn("p-4 flex flex-col gap-2", className)}
        >
            {children}
        </CartoonSurface>
    );
}

function CartoonMobileNavLink({
    href,
    onClick,
    children,
}: {
    href: string;
    onClick?: () => void;
    children: React.ReactNode;
}) {
    return (
        <Link
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            href={href as any}
            onClick={onClick}
            className="px-4 py-2.5 rounded-[100px] text-sm font-extrabold text-ink bg-paper border-[2.5px] border-ink shadow-cartoon-xs hover:bg-accent transition-colors"
        >
            {children}
        </Link>
    );
}

function getCartoonButtonClasses(options: DSButtonClassOptions = {}) {
    return cartoonButtonVariants({
        variant: options.variant,
        size: options.size,
        shadow: options.shadow,
        disabled: options.disabled,
        className: options.className,
    });
}

function CartoonAboutAvatarFrame({ children }: { children: React.ReactNode }) {
    return (
        <CartoonSurface
            color="surface"
            radius="card"
            border="thick"
            shadow="lg"
            tiltDeg={-1.1}
            className="relative aspect-square max-w-xs sm:max-w-sm w-full overflow-hidden p-2 bg-surface"
        >
            <div className="relative w-full h-full rounded-[20px] overflow-hidden border-[3px] border-ink bg-secondary">
                {children}
            </div>
        </CartoonSurface>
    );
}

function CartoonProjectCardAdapter({
    index,
    title,
    description,
    tech,
    github,
    preview,
    live,
    codeLabel,
    liveLabel,
}: DSProjectCardProps) {
    const tiltDeg = index % 2 === 0 ? -0.75 : 0.65;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, type: "spring", stiffness: 220, damping: 20 }}
            className="h-full flex flex-col"
        >
            <CartoonSurface
                color="surface"
                radius="card"
                border="thick"
                shadow="lg"
                tiltDeg={tiltDeg}
                className="overflow-hidden flex flex-col h-full"
            >
                <div className="aspect-video bg-secondary overflow-hidden relative border-b-[3.5px] border-ink">
                    <Image
                        src={preview}
                        alt={`${title} preview`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                        <h3 className="cartoon-title mb-2.5 text-ink">{title}</h3>
                        <p className="cartoon-body text-sm sm:text-base mb-5">{description}</p>
                    </div>

                    <div>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {tech.map((item) => {
                                const icon = getTechIcon(item);
                                const brandColor = getTechColor(item);
                                return (
                                    <Chip
                                        key={item}
                                        icon={
                                            icon ? (
                                                <SimpleIcon icon={icon} size={13} color="#0b0e13" />
                                            ) : undefined
                                        }
                                        dot={!icon}
                                        dotColor={brandColor || undefined}
                                    >
                                        {item}
                                    </Chip>
                                );
                            })}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href={github}
                                target="_blank"
                                rel="noreferrer"
                                className={cartoonButtonVariants({
                                    variant: "primary",
                                    size: "sm",
                                    shadow: "sm",
                                })}
                            >
                                <Github size={16} className="stroke-[2.5]" />
                                <span>{codeLabel}</span>
                            </a>
                            {live !== "#" && (
                                <a
                                    href={live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cartoonButtonVariants({
                                        variant: "secondary",
                                        size: "sm",
                                        shadow: "sm",
                                    })}
                                >
                                    <ExternalLink size={16} className="stroke-[2.5]" />
                                    <span>{liveLabel}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </CartoonSurface>
        </motion.div>
    );
}

function CartoonTimelineContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative ml-2.5 sm:ml-4">
            <div className="absolute top-3.5 bottom-4 left-0 w-[3.5px] bg-ink rounded-full" />
            <div className="space-y-10 sm:space-y-12">{children}</div>
        </div>
    );
}

function CartoonTimelineItem({
    index,
    role,
    company,
    period,
    points,
    technologies,
}: DSTimelineItemProps) {
    const tiltDeg = index % 2 === 0 ? -0.55 : 0.55;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.12,
                type: "spring",
                stiffness: 220,
                damping: 20,
            }}
            className="relative pl-8 sm:pl-11"
        >
            <div className="absolute top-1.5 left-[1.75px] h-5 w-5 -translate-x-1/2 rounded-full border-[3px] border-ink bg-accent shadow-cartoon-xs" />

            <div className="mb-4">
                <Badge variant="default" className="py-1.5 px-3.5 text-xs sm:text-sm">
                    <Calendar className="h-3.5 w-3.5 stroke-[2.5]" />
                    <span>{period}</span>
                </Badge>
            </div>

            <CartoonCard
                variant="surface"
                tiltDeg={tiltDeg}
                icon={<Building2 size={20} className="stroke-[2.5]" />}
                title={company}
                className="p-6 sm:p-7"
            >
                <h4 className="text-lg sm:text-xl font-black text-ink mb-3.5">{role}</h4>

                <ul className="space-y-2 list-disc list-inside cartoon-body text-sm sm:text-base mb-5">
                    {points.map((point, i) => (
                        <li key={i} className="text-pretty">
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t-[2.5px] border-ink">
                        {technologies.map((tech) => {
                            const icon = getTechIcon(tech);
                            const brandColor = getTechColor(tech);

                            return (
                                <Badge key={tech} variant="secondary" className="py-1 px-3 text-xs">
                                    {icon ? (
                                        <SimpleIcon icon={icon} size={12} color="#0b0e13" />
                                    ) : (
                                        <span
                                            className="w-2 h-2 rounded-full border border-ink"
                                            style={{
                                                backgroundColor: brandColor || "#60a8ed",
                                            }}
                                        />
                                    )}
                                    <span>{tech}</span>
                                </Badge>
                            );
                        })}
                    </div>
                )}
            </CartoonCard>
        </motion.div>
    );
}

function CartoonFooter({ year, rightsText, builtWithText }: DSFooterProps) {
    return (
        <footer className="w-full py-10 bg-surface border-t-[3.5px] border-ink text-center text-sm text-ink">
            <div className="max-w-5xl mx-auto px-4">
                <p className="font-bold">
                    © {year} <span className="font-black">Mateus Navarro</span>. {rightsText}
                </p>
                <p className="mt-2 text-xs font-bold">{builtWithText}</p>
            </div>
        </footer>
    );
}

export const cartoonDesignSystem: DesignSystemDefinition = {
    id: "cartoon",
    meta: {
        id: "cartoon",
        displayName: "Cartoon Blueprint",
        specFile: "specs/design-systems/cartoon-blueprint.md",
        swatches: ["#e0e2e9", "#60a8ed", "#0b0e13"],
    },
    typography: {
        display: "cartoon-display text-ink",
        title: "cartoon-title text-ink",
        body: "cartoon-body text-ink",
        subHeading: "text-lg sm:text-xl font-black text-ink",
        dividerTop: "border-t-[2.5px] border-ink",
        linkMuted:
            "inline-flex items-center gap-2 text-sm font-extrabold text-ink underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity",
    },
    components: {
        PageShell: CartoonPageShell,
        SectionBand: CartoonSectionBand,
        AppBar: CartoonAppBar,
        NavBrand: CartoonNavBrand,
        NavLink: CartoonNavLink,
        MobileMenu: CartoonMobileMenu,
        MobileNavLink: CartoonMobileNavLink,
        LanguageSwitcher: LanguageSwitcher,
        Surface: CartoonSurface as React.ComponentType<DSSurfaceProps>,
        Card: CartoonCard as React.ComponentType<DSCardProps>,
        Button: CartoonButton as React.ComponentType<DSButtonProps>,
        getButtonClasses: getCartoonButtonClasses,
        IconButton: CartoonIconButton as React.ComponentType<DSIconButtonProps>,
        SectionTitle: CartoonSectionTitle as React.ComponentType<DSSectionTitleProps>,
        Chip: Chip as React.ComponentType<DSChipProps>,
        Badge: Badge as React.ComponentType<DSBadgeProps>,
        HeroTechShowcase: CartoonTechCarousel,
        AboutAvatarFrame: CartoonAboutAvatarFrame,
        ProjectCard: CartoonProjectCardAdapter,
        TimelineContainer: CartoonTimelineContainer,
        TimelineItem: CartoonTimelineItem,
        Footer: CartoonFooter,
    },
};
