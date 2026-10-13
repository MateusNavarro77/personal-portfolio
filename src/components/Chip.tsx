import React from "react";

type ChipVariant = "default" | "primary" | "status";

type ChipProps = React.HTMLAttributes<HTMLSpanElement> & {
    variant?: ChipVariant;
    icon?: React.ReactNode;
    dot?: boolean;
};

const baseClass =
    "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 label-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] select-none";

const variants: Record<ChipVariant, string> = {
    default:
        "bg-[rgba(13,24,41,0.7)] text-on-surface border border-[rgba(95,121,153,0.25)] hover:border-primary/50 hover:bg-[rgba(21,123,200,0.1)]",
    primary:
        "bg-[rgba(2,43,95,0.55)] text-primary border border-primary/30 hover:border-primary hover:bg-[rgba(2,43,95,0.8)]",
    status:
        "bg-[rgba(21,123,200,0.12)] text-primary border border-primary/30 shadow-[0_0_12px_rgba(21,123,200,0.2)]",
};

export default function Chip({
    variant = "default",
    icon,
    dot = false,
    className = "",
    children,
    ...props
}: ChipProps) {
    return (
        <span className={[baseClass, variants[variant], className].join(" ")} {...props}>
            {icon ? (
                <span className="shrink-0 flex items-center justify-center text-primary">{icon}</span>
            ) : dot ? (
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 animate-pulse" />
            ) : null}
            <span>{children}</span>
        </span>
    );
}
