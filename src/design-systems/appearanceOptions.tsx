import type { LucideIcon } from "lucide-react";
import { Briefcase, Palette, Terminal } from "lucide-react";
import type { DesignSystemId } from "./types";

export const APPEARANCE_NAV_OPTIONS: ReadonlyArray<{
    id: DesignSystemId;
    Icon: LucideIcon;
}> = [
    { id: "corporate", Icon: Briefcase },
    { id: "developer", Icon: Terminal },
    { id: "cartoon", Icon: Palette },
];
