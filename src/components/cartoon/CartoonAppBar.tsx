import React from "react";
import { cn } from "@/lib/utils";
import { CartoonSurface } from "./CartoonSurface";

export interface CartoonAppBarProps {
    leading?: React.ReactNode;
    center?: React.ReactNode;
    actions?: React.ReactNode;
    className?: string;
}

/**
 * Floating pill App Bar in primary accent (#60a8ed), thick ink border, hard shadowMd.
 */
export function CartoonAppBar({
    leading,
    center,
    actions,
    className,
}: CartoonAppBarProps) {
    return (
        <CartoonSurface
            color="accent"
            radius="pill"
            border="thick"
            shadow="md"
            className={cn(
                "px-3.5 sm:px-5 py-2 flex items-center justify-between gap-3",
                className
            )}
        >
            {leading && <div className="shrink-0 flex items-center">{leading}</div>}
            {center && (
                <div className="hidden md:flex items-center justify-center min-w-0">
                    {center}
                </div>
            )}
            {actions && (
                <div className="shrink-0 flex items-center gap-2 sm:gap-2.5">
                    {actions}
                </div>
            )}
        </CartoonSurface>
    );
}
