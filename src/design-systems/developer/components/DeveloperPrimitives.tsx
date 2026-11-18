"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import type {
    DSAppBarProps,
    DSBadgeProps,
    DSButtonClassOptions,
    DSButtonProps,
    DSCardProps,
    DSChipProps,
    DSFooterProps,
    DSIconButtonProps,
    DSSectionTitleProps,
    DSSurfaceProps,
} from "../../types";

export function DeveloperPageShell({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <main
            className={cn(
                "flex flex-col items-center w-full bg-[#0D1117] text-[#E6EDF3] overflow-x-clip transition-colors duration-300",
                className
            )}
        >
            {children}
        </main>
    );
}

export function DeveloperSectionBand({
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
                "w-full transition-colors duration-300",
                variant === "alt" ? "bg-[#090D13]" : "bg-[#0D1117]",
                withTopBorder && "border-t border-[#30363D]",
                className
            )}
        >
            {children}
        </div>
    );
}

export function DeveloperAppBar({
    leading,
    center,
    actions,
    className,
}: DSAppBarProps) {
    return (
        <div
            className={cn(
                "w-full rounded-lg bg-[#161B22]/95 backdrop-blur-md border border-[#30363D] shadow-[0_8px_28px_rgba(0,0,0,0.45)] px-3 sm:px-4 py-2 flex items-center justify-between gap-2 sm:gap-3",
                className
            )}
        >
            {leading && <div className="shrink-0 flex items-center">{leading}</div>}
            {center && (
                <div className="hidden lg:flex items-center justify-center min-w-0">
                    {center}
                </div>
            )}
            {actions && (
                <div className="shrink-0 flex items-center gap-2">{actions}</div>
            )}
        </div>
    );
}

export function DeveloperNavBrand({
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
            className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[#0D1117] border border-[#30363D] font-mono text-xs sm:text-sm font-semibold text-[#E6EDF3] hover:border-[#3FB950]/70 transition-colors whitespace-nowrap select-none"
        >
            <span className="w-2 h-2 rounded-full bg-[#3FB950] shadow-[0_0_8px_rgba(63,185,80,0.75)] shrink-0" />
            <span className="text-[#3FB950]">~/</span>
            <span>{children}</span>
        </Link>
    );
}

export function DeveloperNavLink({
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
            className="px-2.5 xl:px-3 py-1.5 rounded-md font-mono text-xs font-medium text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#21262D] border border-transparent hover:border-[#30363D] transition-colors whitespace-nowrap"
        >
            {children}
        </Link>
    );
}

export function DeveloperMobileMenu({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "rounded-lg bg-[#161B22] border border-[#30363D] shadow-[0_12px_32px_rgba(0,0,0,0.6)] p-3 flex flex-col gap-1.5",
                className
            )}
        >
            {children}
        </div>
    );
}

export function DeveloperMobileNavLink({
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
            className="px-3.5 py-2 rounded-md font-mono text-xs font-medium text-[#E6EDF3] bg-[#0D1117] border border-[#30363D] hover:border-[#3FB950] hover:text-[#3FB950] transition-colors"
        >
            <span className="text-[#3FB950] mr-2">$</span>
            {children}
        </Link>
    );
}

export function DeveloperSurface({
    color = "surface",
    radius = "card",
    className,
    children,
    tiltDeg,
    border,
    shadow,
    ...props
}: DSSurfaceProps) {
    void tiltDeg;
    void border;
    void shadow;
    const isAccent = color === "accent";
    const radiusClass =
        radius === "pill" || radius === "sm" ? "rounded-md" : "rounded-lg";

    return (
        <div
            className={cn(
                radiusClass,
                "border transition-colors duration-200",
                isAccent
                    ? "bg-[#1C2128] border-[#58A6FF]/40 text-[#E6EDF3] shadow-[0_8px_28px_rgba(0,0,0,0.4)]"
                    : color === "secondary" || color === "paper"
                    ? "bg-[#0D1117] border-[#30363D] text-[#E6EDF3]"
                    : "bg-[#161B22] border-[#30363D] text-[#E6EDF3] shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function DeveloperCard({
    variant = "surface",
    icon,
    title,
    headerExtra,
    actions,
    className,
    children,
    tiltDeg,
    terminalHeader,
    ...props
}: DSCardProps) {
    void tiltDeg;
    const isAccent = variant === "accent";

    return (
        <DeveloperSurface
            color={variant}
            radius="card"
            className={cn(
                "overflow-hidden flex flex-col hover:border-[#484F58]",
                isAccent && "hover:border-[#58A6FF]/70",
                className
            )}
            {...props}
        >
            {terminalHeader && (
                <div className="px-4 py-2 bg-[#0D1117]/80 border-b border-[#30363D] flex items-center justify-between -mx-5 sm:-mx-6 -mt-5 sm:-mt-6 mb-4">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F85149]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F0883E]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#3FB950]/80" />
                    </div>
                    <span className="font-mono text-[11px] text-[#8B949E]">
                        {terminalHeader}
                    </span>
                </div>
            )}

            {(icon || title || headerExtra) && (
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3 min-w-0 flex-1 basis-52">
                        {icon && (
                            <div
                                className={cn(
                                    "w-9 h-9 rounded-md border flex items-center justify-center shrink-0",
                                    isAccent
                                        ? "bg-[#58A6FF]/10 border-[#58A6FF]/40 text-[#58A6FF]"
                                        : "bg-[#21262D] border-[#30363D] text-[#3FB950]"
                                )}
                            >
                                {icon}
                            </div>
                        )}
                        {title && (
                            <h3 className="font-mono text-lg sm:text-xl font-bold text-[#E6EDF3] wrap-break-word min-w-0">
                                {title}
                            </h3>
                        )}
                    </div>
                    {headerExtra}
                </div>
            )}

            <div className="flex-1 flex flex-col">{children}</div>

            {actions && (
                <div className="mt-5 flex flex-wrap gap-3">{actions}</div>
            )}
        </DeveloperSurface>
    );
}

export function getDeveloperButtonClasses({
    variant = "primary",
    size = "md",
    disabled = false,
    className,
}: DSButtonClassOptions = {}) {
    const sizeClasses =
        size === "sm"
            ? "px-3.5 py-2 text-xs gap-2"
            : "px-5 py-3 text-sm gap-2";

    const variantClasses = disabled
        ? "bg-[#21262D] text-[#484F58] border border-[#30363D] cursor-not-allowed"
        : variant === "primary"
        ? "bg-[#238636] text-white border border-[#3FB950]/70 hover:bg-[#2EA043] shadow-[0_0_0_1px_rgba(63,185,80,0.15)]"
        : variant === "pop"
        ? "bg-[#1F6FEB] text-white border border-[#58A6FF]/70 hover:bg-[#388BFD]"
        : variant === "surface"
        ? "bg-[#0D1117] text-[#E6EDF3] border border-[#30363D] hover:border-[#3FB950] hover:text-[#3FB950]"
        : variant === "danger"
        ? "bg-[#DA3633] text-white border border-[#F85149]"
        : "bg-[#21262D] text-[#E6EDF3] border border-[#30363D] hover:bg-[#30363D] hover:border-[#8B949E]";

    return cn(
        "inline-flex items-center justify-center rounded-md font-mono font-semibold leading-none select-none transition-all duration-150 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FB950] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117]",
        sizeClasses,
        variantClasses,
        className
    );
}

export function DeveloperButton({
    variant = "primary",
    size = "md",
    icon,
    disabled = false,
    type = "button",
    className,
    children,
    shadow,
    ...props
}: DSButtonProps) {
    void shadow;
    return (
        <button
            type={type}
            disabled={disabled}
            className={getDeveloperButtonClasses({
                variant,
                size,
                disabled,
                className,
            })}
            {...props}
        >
            {icon && <span className="shrink-0 flex items-center">{icon}</span>}
            <span>{children}</span>
        </button>
    );
}

export function DeveloperIconButton({
    size = "md",
    type = "button",
    className,
    children,
    color,
    ...props
}: DSIconButtonProps) {
    void color;
    return (
        <button
            type={type}
            className={cn(
                "inline-flex items-center justify-center rounded-md border border-[#30363D] bg-[#21262D] text-[#E6EDF3] hover:border-[#3FB950] hover:text-[#3FB950] transition-colors cursor-pointer shrink-0",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FB950]",
                size === "sm" ? "w-9 h-9" : "w-10 h-10",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export function DeveloperSectionTitle({
    children,
    className,
    as: Tag = "h2",
}: DSSectionTitleProps) {
    return (
        <div className={cn("mb-8 sm:mb-10 flex items-center gap-3", className)}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#161B22] border border-[#30363D]">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#3FB950]">
                    &gt;_
                </span>
                <Tag className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E6EDF3]">
                    {children}
                </Tag>
            </div>
            <span className="h-px flex-1 bg-[#30363D] max-w-32" aria-hidden="true" />
        </div>
    );
}

export function DeveloperChip({
    variant = "default",
    icon,
    dot = false,
    dotColor,
    className,
    children,
    onDarkSurface,
    ...props
}: DSChipProps) {
    void onDarkSurface;
    const variantClass =
        variant === "status"
            ? "bg-[#238636]/20 text-[#7EE787] border-[#3FB950]/40"
            : variant === "primary"
            ? "bg-[#1F6FEB]/20 text-[#79C0FF] border-[#58A6FF]/40"
            : "bg-[#21262D] text-[#E6EDF3] border-[#30363D]";

    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded border px-2.5 py-1 font-mono text-xs font-medium select-none",
                variantClass,
                className
            )}
            {...props}
        >
            {icon ? (
                <span className="shrink-0 flex items-center justify-center text-[#8B949E]">
                    {icon}
                </span>
            ) : dot ? (
                <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: dotColor || "#3FB950" }}
                />
            ) : null}
            <span>{children}</span>
        </span>
    );
}

export function DeveloperBadge({
    variant = "secondary",
    className,
    children,
    onDarkSurface,
    ...props
}: DSBadgeProps) {
    void onDarkSurface;
    const variantClass =
        variant === "default"
            ? "bg-[#238636]/20 text-[#7EE787] border-[#3FB950]/40"
            : variant === "destructive"
            ? "bg-[#F85149]/15 text-[#FF7B72] border-[#F85149]/40"
            : "bg-[#21262D] text-[#C9D1D9] border-[#30363D]";

    return (
        <div
            className={cn(
                "inline-flex items-center gap-1.5 rounded border px-2.5 py-1 font-mono text-xs font-medium select-none",
                variantClass,
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function DeveloperAboutAvatarFrame({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative aspect-square max-w-xs sm:max-w-sm w-full rounded-lg bg-[#161B22] border border-[#30363D] shadow-[0_14px_36px_rgba(0,0,0,0.45)] overflow-hidden flex flex-col">
            <div className="px-3.5 py-2 bg-[#0D1117] border-b border-[#30363D] flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F85149]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F0883E]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3FB950]/80" />
                </div>
                <span className="font-mono text-[11px] text-[#8B949E]">
                    profile.png
                </span>
            </div>
            <div className="relative flex-1 w-full bg-[#0D1117]">{children}</div>
        </div>
    );
}

export function DeveloperFooter({
    year,
    rightsText,
    builtWithText,
}: DSFooterProps) {
    return (
        <footer className="w-full py-10 bg-[#090D13] border-t border-[#30363D] text-center text-sm text-[#8B949E]">
            <div className="max-w-5xl mx-auto px-4">
                <p className="font-mono text-xs sm:text-sm">
                    <span className="text-[#3FB950] mr-2">[200 OK]</span>© {year}{" "}
                    <span className="font-bold text-[#E6EDF3]">Mateus Navarro</span>.{" "}
                    {rightsText}
                </p>
                <p className="mt-2 font-mono text-xs text-[#6E7681]">
                    {"// "}
                    {builtWithText}
                </p>
            </div>
        </footer>
    );
}
