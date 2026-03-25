import React from "react";

type ChipVariant = "default" | "primary";

type ChipProps = React.HTMLAttributes<HTMLSpanElement> & {
    variant?: ChipVariant;
};

const baseClass =
    "inline-flex items-center rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] font-semibold transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]";

const variants: Record<ChipVariant, string> = {
    default:
        "bg-surface-container-high text-foreground border border-outline-variant/15",
    primary: "bg-primary/10 text-primary border border-primary/20",
};

export default function Chip({
    variant = "default",
    className = "",
    ...props
}: ChipProps) {
    return <span className={[baseClass, variants[variant], className].join(" ")} {...props} />;
}
