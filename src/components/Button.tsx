import React from "react";
import {
    CartoonButton,
    cartoonButtonVariants,
    type CartoonButtonSize,
    type CartoonButtonVariant,
} from "./cartoon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: CartoonButtonVariant;
    size?: CartoonButtonSize;
};

export function buttonVariants({
    variant = "primary",
    size = "md",
    className = "",
}: {
    variant?: CartoonButtonVariant;
    size?: CartoonButtonSize;
    className?: string;
}) {
    return cartoonButtonVariants({ variant, size, className });
}

export default function Button({
    variant = "primary",
    size = "md",
    className,
    type = "button",
    ...props
}: ButtonProps) {
    return (
        <CartoonButton
            type={type}
            variant={variant}
            size={size}
            className={className}
            {...props}
        />
    );
}
