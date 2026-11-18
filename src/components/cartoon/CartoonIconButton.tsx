import React from "react";
import { cn } from "@/lib/utils";
import { CartoonPressable } from "./CartoonPressable";
import type { CartoonColor } from "./tokens";

export interface CartoonIconButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
    color?: CartoonColor;
    size?: "sm" | "md";
}

const ICON_SIZES = {
    sm: "w-11 h-11",
    md: "w-12 h-12",
};

/**
 * Circular icon button matching Flutter CartoonIconButton (44px/48px, 3px border, shadowSm).
 */
export function CartoonIconButton({
    color = "surface",
    size = "md",
    className,
    children,
    ...props
}: CartoonIconButtonProps) {
    return (
        <CartoonPressable
            color={color}
            radius="pill"
            border="medium"
            shadow="sm"
            className={cn(ICON_SIZES[size], "p-0 shrink-0", className)}
            {...props}
        >
            {children}
        </CartoonPressable>
    );
}
