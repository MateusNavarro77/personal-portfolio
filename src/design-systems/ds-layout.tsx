"use client";

import React from "react";
import { useDesignSystem } from "./DesignSystemProvider";

export function DSPageShell({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const { activeSystem } = useDesignSystem();
    const { PageShell } = activeSystem.components;
    return <PageShell className={className}>{children}</PageShell>;
}

export function DSSectionBand({
    variant = "primary",
    withTopBorder = true,
    children,
    className,
}: {
    variant?: "primary" | "alt";
    withTopBorder?: boolean;
    children: React.ReactNode;
    className?: string;
}) {
    const { activeSystem } = useDesignSystem();
    const { SectionBand } = activeSystem.components;
    return (
        <SectionBand
            variant={variant}
            withTopBorder={withTopBorder}
            className={className}
        >
            {children}
        </SectionBand>
    );
}
