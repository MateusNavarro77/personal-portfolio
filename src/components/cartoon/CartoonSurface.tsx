import React from "react";
import { cn } from "@/lib/utils";
import {
    CARTOON_BG,
    CARTOON_BORDER,
    CARTOON_RADIUS,
    CARTOON_SHADOW,
    type CartoonBorder,
    type CartoonColor,
    type CartoonRadius,
    type CartoonShadow,
} from "./tokens";

export interface CartoonSurfaceProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
    color?: CartoonColor;
    radius?: CartoonRadius;
    border?: CartoonBorder;
    shadow?: CartoonShadow;
    tiltDeg?: number;
}

/**
 * Static Cartoon Blueprint surface: flat fill, solid ink outline, hard oblique shadow.
 */
export function CartoonSurface({
    color = "surface",
    radius = "surface",
    border = "thick",
    shadow = "md",
    tiltDeg,
    className,
    style,
    children,
    ...props
}: CartoonSurfaceProps) {
    const mergedStyle =
        tiltDeg !== undefined
            ? { ...style, transform: `rotate(${tiltDeg}deg)` }
            : style;

    return (
        <div
            className={cn(
                CARTOON_BG[color],
                CARTOON_RADIUS[radius],
                CARTOON_BORDER[border],
                CARTOON_SHADOW[shadow],
                "text-ink",
                className
            )}
            style={mergedStyle}
            {...props}
        >
            {children}
        </div>
    );
}
