import React, { useId } from "react";
import { cn } from "@/lib/utils";

export function USFlag({ className = "w-4 h-4" }: { className?: string }) {
    const clipId = useId();
    return (
        <svg
            viewBox="0 0 32 32"
            className={cn("rounded-full shrink-0", className)}
            aria-hidden="true"
        >
            <clipPath id={clipId}>
                <circle cx="16" cy="16" r="16" />
            </clipPath>
            <g clipPath={`url(#${clipId})`}>
                <rect width="32" height="32" fill="#b22234" />
                <rect y="2.46" width="32" height="2.46" fill="#ffffff" />
                <rect y="7.38" width="32" height="2.46" fill="#ffffff" />
                <rect y="12.31" width="32" height="2.46" fill="#ffffff" />
                <rect y="17.23" width="32" height="2.46" fill="#ffffff" />
                <rect y="22.15" width="32" height="2.46" fill="#ffffff" />
                <rect y="27.08" width="32" height="2.46" fill="#ffffff" />
                <rect width="14" height="17.23" fill="#3c3b6e" />
                <g fill="#ffffff">
                    <circle cx="3" cy="3.5" r="0.9" />
                    <circle cx="7" cy="3.5" r="0.9" />
                    <circle cx="11" cy="3.5" r="0.9" />
                    <circle cx="5" cy="6.2" r="0.9" />
                    <circle cx="9" cy="6.2" r="0.9" />
                    <circle cx="3" cy="8.9" r="0.9" />
                    <circle cx="7" cy="8.9" r="0.9" />
                    <circle cx="11" cy="8.9" r="0.9" />
                    <circle cx="5" cy="11.6" r="0.9" />
                    <circle cx="9" cy="11.6" r="0.9" />
                    <circle cx="3" cy="14.3" r="0.9" />
                    <circle cx="7" cy="14.3" r="0.9" />
                    <circle cx="11" cy="14.3" r="0.9" />
                </g>
            </g>
        </svg>
    );
}

export function BrazilFlag({ className = "w-4 h-4" }: { className?: string }) {
    const clipId = useId();
    return (
        <svg
            viewBox="0 0 32 32"
            className={cn("rounded-full shrink-0", className)}
            aria-hidden="true"
        >
            <clipPath id={clipId}>
                <circle cx="16" cy="16" r="16" />
            </clipPath>
            <g clipPath={`url(#${clipId})`}>
                <rect width="32" height="32" fill="#009c3b" />
                <polygon points="16,4.5 28,16 16,27.5 4,16" fill="#ffdf00" />
                <circle cx="16" cy="16" r="6" fill="#002776" />
                <path
                    d="M 10.5 17.5 A 6.5 6.5 0 0 1 21.5 14"
                    stroke="#ffffff"
                    strokeWidth="1.2"
                    fill="none"
                />
            </g>
        </svg>
    );
}
