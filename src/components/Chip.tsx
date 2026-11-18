import React from "react";
import { cn } from "@/lib/utils";

type ChipVariant = "default" | "primary" | "status";

type ChipProps = React.HTMLAttributes<HTMLSpanElement> & {
    variant?: ChipVariant;
    icon?: React.ReactNode;
    dot?: boolean;
    dotColor?: string;
};

const baseClass =
    "inline-flex items-center gap-1.5 rounded-[100px] px-3 py-1 border-[2.5px] border-ink text-xs font-extrabold tracking-wide text-ink shadow-cartoon-xs select-none";

const variants: Record<ChipVariant, string> = {
    default: "bg-secondary",
    primary: "bg-accent",
    status: "bg-accent",
};

export default function Chip({
    variant = "default",
    icon,
    dot = false,
    dotColor,
    className = "",
    children,
    ...props
}: ChipProps) {
    return (
        <span className={cn(baseClass, variants[variant], className)} {...props}>
            {icon ? (
                <span className="shrink-0 flex items-center justify-center text-ink">
                    {icon}
                </span>
            ) : dot ? (
                <span
                    className={cn(
                        "w-2 h-2 rounded-full shrink-0 border border-ink",
                        !dotColor && "bg-accent"
                    )}
                    style={dotColor ? { backgroundColor: dotColor } : undefined}
                />
            ) : null}
            <span>{children}</span>
        </span>
    );
}
