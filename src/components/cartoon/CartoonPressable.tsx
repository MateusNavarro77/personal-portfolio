"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
    CARTOON_ACTIVE_PRESS,
    CARTOON_BG,
    CARTOON_BORDER,
    CARTOON_PRESS_TRANSLATE,
    CARTOON_RADIUS,
    CARTOON_SHADOW,
    type CartoonBorder,
    type CartoonColor,
    type CartoonRadius,
    type CartoonShadow,
} from "./tokens";

export function getCartoonPressableClasses({
    color = "accent",
    radius = "pill",
    border = "thick",
    shadow = "md",
    disabled = false,
    className,
}: {
    color?: CartoonColor;
    radius?: CartoonRadius;
    border?: CartoonBorder;
    shadow?: CartoonShadow;
    disabled?: boolean;
    className?: string;
}) {
    return cn(
        "inline-flex items-center justify-center select-none text-ink font-extrabold transition-[transform,box-shadow,background-color] duration-110 ease-out",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        CARTOON_RADIUS[radius],
        CARTOON_BORDER[border],
        disabled
            ? cn(CARTOON_BG.disabled, CARTOON_PRESS_TRANSLATE[shadow], "shadow-none cursor-not-allowed")
            : cn(
                  CARTOON_BG[color],
                  CARTOON_SHADOW[shadow],
                  CARTOON_ACTIVE_PRESS[shadow],
                  "cursor-pointer hover:-translate-x-[1px] hover:-translate-y-[1px]"
              ),
        className
    );
}

export interface CartoonPressableProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
    color?: CartoonColor;
    radius?: CartoonRadius;
    border?: CartoonBorder;
    shadow?: CartoonShadow;
}

/**
 * Base pressable element: when pressed or disabled, translates to the shadow offset
 * and drops the hard shadow to zero, mimicking a physical button pushed down.
 */
export function CartoonPressable({
    color = "accent",
    radius = "pill",
    border = "thick",
    shadow = "md",
    disabled = false,
    type = "button",
    className,
    children,
    ...props
}: CartoonPressableProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={getCartoonPressableClasses({
                color,
                radius,
                border,
                shadow,
                disabled,
                className,
            })}
            {...props}
        >
            {children}
        </button>
    );
}
