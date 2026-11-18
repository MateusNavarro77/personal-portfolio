import React from "react";
import { cn } from "@/lib/utils";
import {
    getCartoonPressableClasses,
    CartoonPressable,
} from "./CartoonPressable";
import type { CartoonColor, CartoonShadow } from "./tokens";

export type CartoonButtonVariant =
    | "primary"
    | "secondary"
    | "surface"
    | "pop"
    | "danger";

export type CartoonButtonSize = "sm" | "md";

const VARIANT_TO_COLOR: Record<CartoonButtonVariant, CartoonColor> = {
    primary: "accent",
    secondary: "secondary",
    surface: "surface",
    pop: "pop",
    danger: "danger",
};

const SIZE_CLASSES: Record<CartoonButtonSize, string> = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3.5 text-base gap-2",
};

export function cartoonButtonVariants({
    variant = "primary",
    size = "md",
    shadow = "md",
    disabled = false,
    className,
}: {
    variant?: CartoonButtonVariant;
    size?: CartoonButtonSize;
    shadow?: CartoonShadow;
    disabled?: boolean;
    className?: string;
}) {
    return getCartoonPressableClasses({
        color: VARIANT_TO_COLOR[variant],
        radius: "pill",
        border: "thick",
        shadow,
        disabled,
        className: cn(SIZE_CLASSES[size], "leading-none", className),
    });
}

export interface CartoonButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
    variant?: CartoonButtonVariant;
    size?: CartoonButtonSize;
    shadow?: CartoonShadow;
    icon?: React.ReactNode;
}

export function CartoonButton({
    variant = "primary",
    size = "md",
    shadow = "md",
    icon,
    disabled = false,
    className,
    children,
    ...props
}: CartoonButtonProps) {
    return (
        <CartoonPressable
            color={VARIANT_TO_COLOR[variant]}
            radius="pill"
            border="thick"
            shadow={shadow}
            disabled={disabled}
            className={cn(SIZE_CLASSES[size], "leading-none", className)}
            {...props}
        >
            {icon && <span className="shrink-0 flex items-center">{icon}</span>}
            <span>{children}</span>
        </CartoonPressable>
    );
}
