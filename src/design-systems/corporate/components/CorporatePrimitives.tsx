"use client";

import React, { createContext, useContext } from "react";
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

const CorporateNavySurfaceContext = createContext(false);

export function CorporatePageShell({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <main
            className={cn(
                "flex flex-col items-center w-full bg-white text-slate-900 overflow-x-clip transition-colors duration-300",
                className
            )}
        >
            {children}
        </main>
    );
}

export function CorporateSectionBand({
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
                variant === "alt" ? "bg-slate-50" : "bg-white",
                withTopBorder && "border-t border-slate-200",
                className
            )}
        >
            {children}
        </div>
    );
}

export function CorporateAppBar({
    leading,
    center,
    actions,
    className,
}: DSAppBarProps) {
    return (
        <div
            className={cn(
                "w-full rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.06)] px-3 sm:px-4 xl:px-5 py-2.5 flex items-center justify-between gap-2 xl:gap-4",
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
                <div className="shrink-0 flex items-center gap-1.5 xl:gap-2.5">
                    {actions}
                </div>
            )}
        </div>
    );
}

export function CorporateNavBrand({
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
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm sm:text-base font-bold tracking-tight text-slate-900 hover:bg-slate-100 transition-colors whitespace-nowrap select-none"
        >
            <span className="w-2 h-2 rounded-sm bg-[#0F172A] ring-2 ring-blue-600/30 shrink-0" />
            <span>{children}</span>
        </Link>
    );
}

export function CorporateNavLink({
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
            className="px-2 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors whitespace-nowrap"
        >
            {children}
        </Link>
    );
}

export function CorporateMobileMenu({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "rounded-xl bg-white border border-slate-200 shadow-[0_12px_28px_rgba(15,23,42,0.1)] p-3 flex flex-col gap-1.5",
                className
            )}
        >
            {children}
        </div>
    );
}

export function CorporateMobileNavLink({
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
            className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
        >
            {children}
        </Link>
    );
}

export function CorporateSurface({
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
    const isNavy = color === "accent";
    const radiusClass =
        radius === "pill"
            ? "rounded-full"
            : radius === "sm"
            ? "rounded-lg"
            : "rounded-xl";

    return (
        <div
            data-navy-card={isNavy ? "true" : undefined}
            className={cn(
                radiusClass,
                "border transition-all duration-200",
                isNavy
                    ? "bg-[#0F172A] border-[#1E293B] text-white shadow-[0_10px_28px_rgba(15,23,42,0.18)]"
                    : color === "secondary" || color === "paper"
                    ? "bg-slate-50 border-slate-200 text-slate-900 shadow-[0_1px_3px_rgba(15,23,42,0.04)]"
                    : "bg-white border-slate-200 text-slate-900 shadow-[0_2px_10px_rgba(15,23,42,0.05)]",
                className
            )}
            {...props}
        >
            <CorporateNavySurfaceContext.Provider value={isNavy}>
                {children}
            </CorporateNavySurfaceContext.Provider>
        </div>
    );
}

export function CorporateCard({
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
    void terminalHeader;
    const isNavy = variant === "accent";

    return (
        <CorporateSurface
            color={variant}
            radius="card"
            className={cn(
                "p-5 sm:p-6 flex flex-col",
                isNavy
                    ? "hover:border-slate-700"
                    : "hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.07)]",
                className
            )}
            {...props}
        >
            {(icon || title || headerExtra) && (
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 min-w-0 flex-1 basis-52">
                        {icon && (
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-lg border flex items-center justify-center shrink-0",
                                    isNavy
                                        ? "bg-slate-800 border-slate-700 text-blue-400"
                                        : "bg-slate-50 border-slate-200 text-[#0F172A]"
                                )}
                            >
                                {icon}
                            </div>
                        )}
                        {title && (
                            <h3
                                className={cn(
                                    "text-lg sm:text-xl font-bold tracking-tight wrap-break-word min-w-0",
                                    isNavy ? "text-white" : "text-slate-900"
                                )}
                            >
                                {title}
                            </h3>
                        )}
                    </div>
                    {headerExtra}
                </div>
            )}

            <div className="flex-1 flex flex-col">{children}</div>

            {actions && (
                <div className="mt-6 flex flex-wrap gap-3">{actions}</div>
            )}
        </CorporateSurface>
    );
}

export function getCorporateButtonClasses({
    variant = "primary",
    size = "md",
    disabled = false,
    className,
}: DSButtonClassOptions = {}) {
    const sizeClasses =
        size === "sm"
            ? "px-3.5 py-2 text-xs sm:text-sm gap-2"
            : "px-5 py-3 text-sm sm:text-base gap-2";

    const variantClasses = disabled
        ? "bg-slate-200 text-slate-400 border border-slate-200 cursor-not-allowed"
        : variant === "primary"
        ? "bg-blue-700 text-white border border-blue-700 hover:bg-blue-800 shadow-[0_1px_2px_rgba(15,23,42,0.08)]"
        : variant === "pop"
        ? "bg-[#0F172A] text-white border border-[#0F172A] hover:bg-slate-800 shadow-[0_1px_2px_rgba(15,23,42,0.12)] [[data-navy-card=true]_&]:bg-blue-600 [[data-navy-card=true]_&]:border-blue-500 [[data-navy-card=true]_&]:hover:bg-blue-500"
        : variant === "surface"
        ? "bg-white text-slate-900 border border-slate-200 hover:bg-slate-100 shadow-[0_1px_2px_rgba(15,23,42,0.05)]"
        : variant === "danger"
        ? "bg-red-600 text-white border border-red-600 hover:bg-red-700"
        : "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 [[data-navy-card=true]_&]:bg-slate-800 [[data-navy-card=true]_&]:text-white [[data-navy-card=true]_&]:border-slate-700 [[data-navy-card=true]_&]:hover:bg-slate-700";

    return cn(
        "inline-flex items-center justify-center rounded-lg font-semibold leading-none select-none transition-all duration-150 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2",
        sizeClasses,
        variantClasses,
        className
    );
}

export function CorporateButton({
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
            className={getCorporateButtonClasses({
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

export function CorporateIconButton({
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
                "inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition-colors cursor-pointer shrink-0",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
                size === "sm" ? "w-9 h-9" : "w-10 h-10",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export function CorporateSectionTitle({
    children,
    className,
    as: Tag = "h2",
}: DSSectionTitleProps) {
    return (
        <div className={cn("mb-8 sm:mb-10 flex items-center gap-3", className)}>
            <span className="w-1 h-5 rounded-full bg-blue-700 shrink-0" aria-hidden="true" />
            <Tag className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-slate-900">
                {children}
            </Tag>
            <span className="h-px flex-1 bg-slate-200 max-w-24" aria-hidden="true" />
        </div>
    );
}

export function CorporateChip({
    variant = "default",
    icon,
    dot = false,
    dotColor,
    onDarkSurface,
    className,
    children,
    ...props
}: DSChipProps) {
    const isNavyCtx = useContext(CorporateNavySurfaceContext);
    const dark = onDarkSurface ?? isNavyCtx;

    const variantClass =
        variant === "status" || variant === "primary"
            ? dark
                ? "bg-blue-500/20 text-blue-200 border-blue-400/30"
                : "bg-blue-50 text-blue-800 border-blue-200"
            : dark
            ? "bg-slate-800 text-slate-200 border-slate-700"
            : "bg-slate-100 text-slate-700 border-slate-200";

    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium select-none",
                variantClass,
                className
            )}
            {...props}
        >
            {icon ? (
                <span className="shrink-0 flex items-center justify-center opacity-85">
                    {icon}
                </span>
            ) : dot ? (
                <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: dotColor || "#1d4ed8" }}
                />
            ) : null}
            <span>{children}</span>
        </span>
    );
}

export function CorporateBadge({
    variant = "secondary",
    onDarkSurface,
    className,
    children,
    ...props
}: DSBadgeProps) {
    const isNavyCtx = useContext(CorporateNavySurfaceContext);
    const dark = onDarkSurface ?? isNavyCtx;

    const variantClass =
        variant === "default"
            ? "bg-[#0F172A] text-white border-[#0F172A]"
            : variant === "destructive"
            ? "bg-red-50 text-red-700 border-red-200"
            : dark
            ? "bg-slate-800 text-slate-200 border-slate-700"
            : "bg-slate-100 text-slate-700 border-slate-200";

    return (
        <div
            className={cn(
                "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-semibold select-none",
                variantClass,
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CorporateAboutAvatarFrame({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative aspect-square max-w-xs sm:max-w-sm w-full rounded-xl bg-[#0F172A] p-2 border border-slate-800 shadow-[0_14px_32px_rgba(15,23,42,0.14)]">
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-900">
                {children}
            </div>
        </div>
    );
}

export function CorporateFooter({
    year,
    rightsText,
    builtWithText,
}: DSFooterProps) {
    return (
        <footer className="w-full py-10 bg-[#0F172A] border-t border-slate-800 text-center text-sm text-slate-300">
            <div className="max-w-5xl mx-auto px-4">
                <p className="font-medium">
                    © {year}{" "}
                    <span className="font-semibold text-white">Mateus Navarro</span>.{" "}
                    {rightsText}
                </p>
                <p className="mt-2 text-xs text-slate-400">{builtWithText}</p>
            </div>
        </footer>
    );
}
