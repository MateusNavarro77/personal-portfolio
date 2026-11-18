import React from "react";
import { cn } from "@/lib/utils";
import { CartoonSurface } from "./CartoonSurface";

export interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
    as?: "h2" | "h3" | "span";
}

/**
 * Cartoon Blueprint SectionTitle pill matching Flutter SectionTitle.
 */
export function SectionTitle({
    children,
    className,
    as: Tag = "h2",
}: SectionTitleProps) {
    return (
        <div className={cn("mb-8 sm:mb-10 flex justify-start", className)}>
            <CartoonSurface
                color="surface"
                radius="pill"
                border="thick"
                shadow="sm"
                className="inline-flex items-center px-5 py-2"
            >
                <Tag className="text-[13px] sm:text-sm font-black uppercase tracking-[1.4px] text-ink leading-none">
                    {children}
                </Tag>
            </CartoonSurface>
        </div>
    );
}
