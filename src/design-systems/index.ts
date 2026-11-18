import { corporateDesignSystem } from "./corporate";
import { developerDesignSystem } from "./developer";
import { cartoonDesignSystem } from "./cartoon";
import type { DesignSystemDefinition, DesignSystemId } from "./types";

export const DESIGN_SYSTEMS: Record<DesignSystemId, DesignSystemDefinition> = {
    corporate: corporateDesignSystem,
    developer: developerDesignSystem,
    cartoon: cartoonDesignSystem,
};

export const DESIGN_SYSTEM_LIST: DesignSystemDefinition[] = [
    DESIGN_SYSTEMS.corporate,
    DESIGN_SYSTEMS.developer,
    DESIGN_SYSTEMS.cartoon,
];

export function isDesignSystemId(value: unknown): value is DesignSystemId {
    return value === "corporate" || value === "developer" || value === "cartoon";
}

export * from "./types";
