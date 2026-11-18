export type CartoonColor =
    | "surface"
    | "accent"
    | "accentSoft"
    | "secondary"
    | "pop"
    | "danger"
    | "paper"
    | "disabled";

export type CartoonShadow = "lg" | "md" | "sm" | "xs" | "none";

export type CartoonBorder = "thick" | "medium" | "thin";

export type CartoonRadius = "pill" | "card" | "surface" | "sm";

export const CARTOON_BG: Record<CartoonColor, string> = {
    surface: "bg-surface",
    accent: "bg-accent",
    accentSoft: "bg-accent-soft",
    secondary: "bg-secondary",
    pop: "bg-pop",
    danger: "bg-danger",
    paper: "bg-paper",
    disabled: "bg-disabled",
};

export const CARTOON_SHADOW: Record<CartoonShadow, string> = {
    lg: "shadow-cartoon-lg",
    md: "shadow-cartoon-md",
    sm: "shadow-cartoon-sm",
    xs: "shadow-cartoon-xs",
    none: "shadow-none",
};

export const CARTOON_PRESS_TRANSLATE: Record<CartoonShadow, string> = {
    lg: "translate-x-[7px] translate-y-[8px]",
    md: "translate-x-[5px] translate-y-[6px]",
    sm: "translate-x-[3px] translate-y-[4px]",
    xs: "translate-x-[2px] translate-y-[3px]",
    none: "",
};

export const CARTOON_ACTIVE_PRESS: Record<CartoonShadow, string> = {
    lg: "active:translate-x-[7px] active:translate-y-[8px] active:shadow-none",
    md: "active:translate-x-[5px] active:translate-y-[6px] active:shadow-none",
    sm: "active:translate-x-[3px] active:translate-y-[4px] active:shadow-none",
    xs: "active:translate-x-[2px] active:translate-y-[3px] active:shadow-none",
    none: "",
};

export const CARTOON_BORDER: Record<CartoonBorder, string> = {
    thick: "border-[3.5px] border-ink",
    medium: "border-[3px] border-ink",
    thin: "border-[2.5px] border-ink",
};

export const CARTOON_RADIUS: Record<CartoonRadius, string> = {
    pill: "rounded-[100px]",
    card: "rounded-[28px]",
    surface: "rounded-[24px]",
    sm: "rounded-[12px]",
};
