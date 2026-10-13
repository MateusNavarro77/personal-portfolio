import React from "react";
import type { SimpleIcon as SimpleIconType } from "simple-icons";

interface SimpleIconProps extends React.SVGProps<SVGSVGElement> {
    icon: SimpleIconType;
    size?: number | string;
    className?: string;
    color?: string;
}

export default function SimpleIcon({
    icon,
    size = 16,
    className = "",
    color,
    ...props
}: SimpleIconProps) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color || "currentColor"}
            className={`inline-block shrink-0 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <title>{icon.title}</title>
            <path d={icon.path} />
        </svg>
    );
}

