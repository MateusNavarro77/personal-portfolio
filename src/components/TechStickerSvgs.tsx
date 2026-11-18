import React from "react";

export interface TechStickerItem {
    id: string;
    badge: string;
    label: string;
    renderSvg: () => React.ReactNode;
}

const SVG_CLASS = "w-48 h-48 sm:w-64 sm:h-64 overflow-visible";

function FlutterStickerSvg() {
    return (
        <svg
            viewBox="0 0 240 240"
            className={SVG_CLASS}
            role="img"
            aria-label="Cartoon Flutter Logo Sticker"
        >
            {/* Solid Ink Hard Offset Shadow Silhouette (zero blur) */}
            <g
                transform="translate(9, 10)"
                fill="#0b0e13"
                stroke="#0b0e13"
                strokeWidth="10"
                strokeLinejoin="round"
                strokeLinecap="round"
            >
                <polygon points="134,26 42,118 70,146 190,26" />
                <polygon points="134,114 84,164 134,214 190,214 140,164 190,114" />
            </g>

            {/* Top Wing (Soft Accent Blue #9dcaff) */}
            <polygon
                points="134,26 42,118 70,146 190,26"
                fill="#9dcaff"
                stroke="#0b0e13"
                strokeWidth="10"
                strokeLinejoin="round"
                strokeLinecap="round"
            />

            {/* Bottom Wing Main (Accent Blue #60a8ed) */}
            <polygon
                points="134,114 84,164 112,192 190,114"
                fill="#60a8ed"
                stroke="#0b0e13"
                strokeWidth="10"
                strokeLinejoin="round"
                strokeLinecap="round"
            />

            {/* Bottom Fold Shadow (Deep Blueprint Blue #3f95e4) */}
            <polygon
                points="112,192 134,214 190,214 140,164"
                fill="#3f95e4"
                stroke="#0b0e13"
                strokeWidth="10"
                strokeLinejoin="round"
                strokeLinecap="round"
            />

            {/* Middle Intersection Diamond */}
            <polygon
                points="84,164 112,136 140,164 112,192"
                fill="#9dcaff"
                stroke="#0b0e13"
                strokeWidth="10"
                strokeLinejoin="round"
                strokeLinecap="round"
            />

            {/* Cartoon Sparkle Accents */}
            <path
                d="M 38 54 L 43 66 L 55 71 L 43 76 L 38 88 L 33 76 L 21 71 L 33 66 Z"
                fill="#60a8ed"
                stroke="#0b0e13"
                strokeWidth="5"
                strokeLinejoin="round"
            />
            <circle
                cx="198"
                cy="68"
                r="8"
                fill="#d77826"
                stroke="#0b0e13"
                strokeWidth="5"
            />
        </svg>
    );
}

function NodeJsStickerSvg() {
    return (
        <svg
            viewBox="0 0 240 240"
            className={SVG_CLASS}
            role="img"
            aria-label="Cartoon Node.js Logo Sticker"
        >
            {/* Solid Ink Hard Offset Shadow */}
            <g
                transform="translate(9, 10)"
                fill="#0b0e13"
                stroke="#0b0e13"
                strokeWidth="10"
                strokeLinejoin="round"
                strokeLinecap="round"
            >
                <polygon points="120,26 200,72 200,168 120,214 40,168 40,72" />
            </g>

            {/* Main Hexagon (Node Green #6CC24A) */}
            <polygon
                points="120,26 200,72 200,168 120,214 40,168 40,72"
                fill="#6CC24A"
            />

            {/* Lower-Right Geometric Bevel (#468A3E) */}
            <polygon
                points="40,168 58,158 120,194 182,158 182,82 200,72 200,168 120,214"
                fill="#468A3E"
            />

            {/* Outer Ink Outline */}
            <polygon
                points="120,26 200,72 200,168 120,214 40,168 40,72"
                fill="none"
                stroke="#0b0e13"
                strokeWidth="10"
                strokeLinejoin="round"
                strokeLinecap="round"
            />

            {/* Chunky Cartoon "JS" Monogram (Double-stroke for crisp ink outline) */}
            <g
                fill="none"
                stroke="#0b0e13"
                strokeWidth="26"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M 103 88 L 103 136 C 103 152 88 158 75 149" />
                <path d="M 164 96 C 162 84 128 84 128 101 C 128 117 166 117 166 136 C 166 154 130 156 125 142" />
            </g>
            <g
                fill="none"
                stroke="#F5FBF2"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M 103 88 L 103 136 C 103 152 88 158 75 149" />
                <path d="M 164 96 C 162 84 128 84 128 101 C 128 117 166 117 166 136 C 166 154 130 156 125 142" />
            </g>

            {/* Cartoon Sparkle Accents */}
            <path
                d="M 32 30 L 37 42 L 49 47 L 37 52 L 32 64 L 27 52 L 15 47 L 27 42 Z"
                fill="#6CC24A"
                stroke="#0b0e13"
                strokeWidth="5"
                strokeLinejoin="round"
            />
            <circle
                cx="206"
                cy="192"
                r="8"
                fill="#84D45E"
                stroke="#0b0e13"
                strokeWidth="5"
            />
        </svg>
    );
}

function ReactStickerSvg() {
    const orbits = [0, 60, -60];

    return (
        <svg
            viewBox="0 0 240 240"
            className={SVG_CLASS}
            role="img"
            aria-label="Cartoon React Logo Sticker"
        >
            {/* Solid Ink Hard Offset Shadow */}
            <g transform="translate(9, 10)">
                {orbits.map((angle) => (
                    <ellipse
                        key={`shadow-${angle}`}
                        cx="120"
                        cy="120"
                        rx="88"
                        ry="34"
                        transform={`rotate(${angle} 120 120)`}
                        fill="none"
                        stroke="#0b0e13"
                        strokeWidth="22"
                    />
                ))}
                <circle
                    cx="120"
                    cy="120"
                    r="20"
                    fill="#0b0e13"
                    stroke="#0b0e13"
                    strokeWidth="10"
                />
            </g>

            {/* Interlocking Cartoon Orbital Rings (React Cyan #58C4DC) */}
            {orbits.map((angle) => (
                <g key={`orbit-${angle}`} transform={`rotate(${angle} 120 120)`}>
                    <ellipse
                        cx="120"
                        cy="120"
                        rx="88"
                        ry="34"
                        fill="none"
                        stroke="#0b0e13"
                        strokeWidth="22"
                    />
                    <ellipse
                        cx="120"
                        cy="120"
                        rx="88"
                        ry="34"
                        fill="none"
                        stroke="#58C4DC"
                        strokeWidth="11"
                    />
                </g>
            ))}

            {/* Center Nucleus */}
            <circle
                cx="120"
                cy="120"
                r="19"
                fill="#58C4DC"
                stroke="#0b0e13"
                strokeWidth="9"
            />
            <circle cx="114" cy="114" r="5" fill="#BFF3FF" />

            {/* Cartoon Sparkle Accents */}
            <path
                d="M 34 36 L 39 48 L 51 53 L 39 58 L 34 70 L 29 58 L 17 53 L 29 48 Z"
                fill="#58C4DC"
                stroke="#0b0e13"
                strokeWidth="5"
                strokeLinejoin="round"
            />
            <circle
                cx="204"
                cy="188"
                r="8"
                fill="#087EA4"
                stroke="#0b0e13"
                strokeWidth="5"
            />
        </svg>
    );
}

function JavaStickerSvg() {
    return (
        <svg
            viewBox="0 0 240 240"
            className={SVG_CLASS}
            role="img"
            aria-label="Cartoon Java Logo Sticker"
        >
            {/* Solid Ink Hard Offset Shadow */}
            <g transform="translate(9, 10)" strokeLinecap="round" strokeLinejoin="round">
                <path
                    d="M 102 84 C 86 64 118 50 102 28"
                    fill="none"
                    stroke="#0b0e13"
                    strokeWidth="22"
                />
                <path
                    d="M 138 84 C 122 66 152 54 136 34"
                    fill="none"
                    stroke="#0b0e13"
                    strokeWidth="22"
                />
                <path
                    d="M 164 112 C 198 112 198 152 158 152"
                    fill="none"
                    stroke="#0b0e13"
                    strokeWidth="22"
                />
                <path
                    d="M 64 100 L 166 100 L 154 166 C 150 182 80 182 76 166 Z"
                    fill="#0b0e13"
                    stroke="#0b0e13"
                    strokeWidth="10"
                />
                <path
                    d="M 48 188 Q 115 206 184 188"
                    fill="none"
                    stroke="#0b0e13"
                    strokeWidth="20"
                />
                <path
                    d="M 64 206 Q 115 220 168 206"
                    fill="none"
                    stroke="#0b0e13"
                    strokeWidth="18"
                />
            </g>

            {/* Rising Steam Waves (Java Flame Orange #F89820) */}
            <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path
                    d="M 102 84 C 86 64 118 50 102 28"
                    stroke="#0b0e13"
                    strokeWidth="22"
                />
                <path
                    d="M 102 84 C 86 64 118 50 102 28"
                    stroke="#F89820"
                    strokeWidth="10"
                />
                <path
                    d="M 138 84 C 122 66 152 54 136 34"
                    stroke="#0b0e13"
                    strokeWidth="22"
                />
                <path
                    d="M 138 84 C 122 66 152 54 136 34"
                    stroke="#E76F00"
                    strokeWidth="10"
                />
            </g>

            {/* Cup Handle (Java Blue #5382A1) */}
            <path
                d="M 164 112 C 198 112 198 152 158 152"
                fill="none"
                stroke="#0b0e13"
                strokeWidth="22"
                strokeLinecap="round"
            />
            <path
                d="M 164 112 C 198 112 198 152 158 152"
                fill="none"
                stroke="#5382A1"
                strokeWidth="10"
                strokeLinecap="round"
            />

            {/* Cup Body (#5382A1 with #3B6684 lower shade) */}
            <path
                d="M 64 100 L 166 100 L 154 166 C 150 182 80 182 76 166 Z"
                fill="#5382A1"
            />
            <path
                d="M 73 146 Q 115 158 157 146 L 154 166 C 150 182 80 182 76 166 Z"
                fill="#3B6684"
            />
            <path
                d="M 64 100 L 166 100 L 154 166 C 150 182 80 182 76 166 Z"
                fill="none"
                stroke="#0b0e13"
                strokeWidth="10"
                strokeLinejoin="round"
            />

            {/* Saucer Swooshes */}
            <g fill="none" strokeLinecap="round">
                <path
                    d="M 48 188 Q 115 206 184 188"
                    stroke="#0b0e13"
                    strokeWidth="20"
                />
                <path
                    d="M 48 188 Q 115 206 184 188"
                    stroke="#5382A1"
                    strokeWidth="8"
                />
                <path
                    d="M 64 206 Q 115 220 168 206"
                    stroke="#0b0e13"
                    strokeWidth="18"
                />
                <path
                    d="M 64 206 Q 115 220 168 206"
                    stroke="#E76F00"
                    strokeWidth="7"
                />
            </g>

            {/* Cartoon Sparkle Accents */}
            <path
                d="M 38 48 L 43 60 L 55 65 L 43 70 L 38 82 L 33 70 L 21 65 L 33 60 Z"
                fill="#F89820"
                stroke="#0b0e13"
                strokeWidth="5"
                strokeLinejoin="round"
            />
            <circle
                cx="198"
                cy="72"
                r="8"
                fill="#5382A1"
                stroke="#0b0e13"
                strokeWidth="5"
            />
        </svg>
    );
}

function SpringBootStickerSvg() {
    return (
        <svg
            viewBox="0 0 240 240"
            className={SVG_CLASS}
            role="img"
            aria-label="Cartoon Spring Boot Logo Sticker"
        >
            {/* Solid Ink Hard Offset Shadow */}
            <g
                transform="translate(9, 10)"
                fill="#0b0e13"
                stroke="#0b0e13"
                strokeWidth="10"
                strokeLinejoin="round"
                strokeLinecap="round"
            >
                <polygon points="72,37 168,37 214,120 168,203 72,203 26,120" />
            </g>

            {/* Main Flat-Top Hexagon (Spring Green #6DB33F) */}
            <polygon
                points="72,37 168,37 214,120 168,203 72,203 26,120"
                fill="#6DB33F"
            />

            {/* Lower-Right Geometric Bevel (#4B8A26) */}
            <polygon
                points="72,203 84,184 156,184 192,120 214,120 168,203"
                fill="#4B8A26"
            />

            {/* Outer Ink Outline */}
            <polygon
                points="72,37 168,37 214,120 168,203 72,203 26,120"
                fill="none"
                stroke="#0b0e13"
                strokeWidth="10"
                strokeLinejoin="round"
                strokeLinecap="round"
            />

            {/* Power Emblem (Double-stroke for crisp ink outline) */}
            <g
                fill="none"
                stroke="#0b0e13"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M 93 91 A 44 44 0 1 0 147 91" />
                <path d="M 120 68 L 120 116" />
            </g>
            <g
                fill="none"
                stroke="#F6FBF2"
                strokeWidth="11"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M 93 91 A 44 44 0 1 0 147 91" />
                <path d="M 120 68 L 120 116" />
            </g>

            {/* Cartoon Sparkle Accents */}
            <path
                d="M 32 32 L 37 44 L 49 49 L 37 54 L 32 66 L 27 54 L 15 49 L 27 44 Z"
                fill="#6DB33F"
                stroke="#0b0e13"
                strokeWidth="5"
                strokeLinejoin="round"
            />
            <circle
                cx="206"
                cy="192"
                r="8"
                fill="#8CD15C"
                stroke="#0b0e13"
                strokeWidth="5"
            />
        </svg>
    );
}

function TypeScriptStickerSvg() {
    return (
        <svg
            viewBox="0 0 240 240"
            className={SVG_CLASS}
            role="img"
            aria-label="Cartoon TypeScript Logo Sticker"
        >
            {/* Solid Ink Hard Offset Shadow */}
            <rect
                x="34"
                y="34"
                width="172"
                height="172"
                rx="28"
                transform="translate(9, 10)"
                fill="#0b0e13"
                stroke="#0b0e13"
                strokeWidth="10"
            />

            {/* Main Rounded Square (TypeScript Blue #3178C6) */}
            <rect x="34" y="34" width="172" height="172" rx="28" fill="#3178C6" />

            {/* Bottom Bevel (#235A97) */}
            <path
                d="M 34 176 L 206 176 L 206 178 A 28 28 0 0 1 178 206 L 62 206 A 28 28 0 0 1 34 178 Z"
                fill="#235A97"
            />

            {/* Outer Ink Outline */}
            <rect
                x="34"
                y="34"
                width="172"
                height="172"
                rx="28"
                fill="none"
                stroke="#0b0e13"
                strokeWidth="10"
            />

            {/* Iconic Bottom-Right "TS" Monogram (Double-stroke) */}
            <g
                fill="none"
                stroke="#0b0e13"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M 72 114 L 122 114" />
                <path d="M 97 114 L 97 174" />
                <path d="M 176 122 C 174 110 138 110 138 127 C 138 143 178 143 178 162 C 178 179 140 181 135 168" />
            </g>
            <g
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="11"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M 72 114 L 122 114" />
                <path d="M 97 114 L 97 174" />
                <path d="M 176 122 C 174 110 138 110 138 127 C 138 143 178 143 178 162 C 178 179 140 181 135 168" />
            </g>

            {/* Cartoon Sparkle Accents */}
            <path
                d="M 26 38 L 31 50 L 43 55 L 31 60 L 26 72 L 21 60 L 9 55 L 21 50 Z"
                fill="#60a8ed"
                stroke="#0b0e13"
                strokeWidth="5"
                strokeLinejoin="round"
            />
            <circle
                cx="210"
                cy="42"
                r="8"
                fill="#d77826"
                stroke="#0b0e13"
                strokeWidth="5"
            />
        </svg>
    );
}

export const TECH_STICKERS: TechStickerItem[] = [
    {
        id: "flutter",
        badge: "Flutter & Dart",
        label: "Flutter & Dart",
        renderSvg: () => <FlutterStickerSvg />,
    },
    {
        id: "nodejs",
        badge: "Node.js",
        label: "Node.js",
        renderSvg: () => <NodeJsStickerSvg />,
    },
    {
        id: "react",
        badge: "React",
        label: "React",
        renderSvg: () => <ReactStickerSvg />,
    },
    {
        id: "java",
        badge: "Java",
        label: "Java",
        renderSvg: () => <JavaStickerSvg />,
    },
    {
        id: "springboot",
        badge: "Spring Boot",
        label: "Spring Boot",
        renderSvg: () => <SpringBootStickerSvg />,
    },
    {
        id: "typescript",
        badge: "TypeScript",
        label: "TypeScript",
        renderSvg: () => <TypeScriptStickerSvg />,
    },
];
