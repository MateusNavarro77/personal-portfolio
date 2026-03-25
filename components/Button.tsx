import React from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};

const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
    primary:
        "bg-primary text-white shadow-ambient hover:shadow-interactive hover:-translate-y-0.5",
    secondary:
        "bg-surface-container-high text-foreground border border-outline-variant/15 hover:-translate-y-0.5",
};

const sizes: Record<ButtonSize, string> = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-8 text-sm",
};

export function buttonVariants({
    variant = "primary",
    size = "md",
    className = "",
}: {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}) {
    return [baseClass, variants[variant], sizes[size], className]
        .filter(Boolean)
        .join(" ");
}

export default function Button({
    variant = "primary",
    size = "md",
    className,
    type = "button",
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            className={buttonVariants({ variant, size, className })}
            {...props}
        />
    );
}
