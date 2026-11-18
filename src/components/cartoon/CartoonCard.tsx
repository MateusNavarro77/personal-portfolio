import React from "react";
import { cn } from "@/lib/utils";
import { CartoonSurface } from "./CartoonSurface";

export interface CartoonCardProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "color"> {
    variant?: "surface" | "accent" | "secondary";
    tiltDeg?: number;
    icon?: React.ReactNode;
    title?: React.ReactNode;
    headerExtra?: React.ReactNode;
    actions?: React.ReactNode;
}

/**
 * Cartoon Blueprint Card: radius 28px, thick 3.5px ink border, hard shadowLg,
 * optional sticker tilt, and optional circular icon badge.
 */
export function CartoonCard({
    variant = "surface",
    tiltDeg = 0,
    icon,
    title,
    headerExtra,
    actions,
    className,
    children,
    ...props
}: CartoonCardProps) {
    const onAccent = variant === "accent";

    return (
        <CartoonSurface
            color={variant}
            radius="card"
            border="thick"
            shadow="lg"
            tiltDeg={tiltDeg}
            className={cn("p-5 sm:p-6 flex flex-col", className)}
            {...props}
        >
            {(icon || title || headerExtra) && (
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3.5 min-w-0 flex-1 basis-52">
                        {icon && (
                            <div
                                className={cn(
                                    "w-[46px] h-[46px] rounded-full border-[3px] border-ink shadow-cartoon-sm flex items-center justify-center shrink-0 text-ink",
                                    onAccent ? "bg-surface" : "bg-accent"
                                )}
                            >
                                {icon}
                            </div>
                        )}
                        {title && (
                            <h3 className="cartoon-title text-ink wrap-break-word min-w-0">
                                {title}
                            </h3>
                        )}
                    </div>
                    {headerExtra}
                </div>
            )}

            <div className="flex-1 flex flex-col">{children}</div>

            {actions && (
                <div className="mt-5 flex flex-wrap gap-3.5">{actions}</div>
            )}
        </CartoonSurface>
    );
}
