import React from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};

const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-bold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed select-none";

const variants: Record<ButtonVariant, string> = {
    primary:
        "bg-gradient-to-r from-[#157BC8] to-[#5F7999] text-white shadow-button-downward hover:shadow-button-glow hover:-translate-y-0.5 active:translate-y-0",
    secondary:
        "bg-[rgba(95,121,153,0.08)] text-[#F8F9FA] border border-[rgba(95,121,153,0.3)] hover:bg-[rgba(21,123,200,0.16)] hover:border-primary/50 hover:text-white hover:-translate-y-0.5 active:translate-y-0",
};

const sizes: Record<ButtonSize, string> = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-7 text-sm",
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
