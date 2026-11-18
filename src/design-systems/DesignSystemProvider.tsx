"use client";

import React, { createContext, useCallback, useContext, useSyncExternalStore } from "react";
import {
    DEFAULT_DESIGN_SYSTEM,
    DESIGN_SYSTEMS,
    DESIGN_SYSTEM_LIST,
    isDesignSystemId,
    type DesignSystemDefinition,
    type DesignSystemId,
} from "./index";

export const DESIGN_SYSTEM_STORAGE_KEY = "design-system";

type Listener = () => void;
const listeners = new Set<Listener>();

function subscribe(listener: Listener) {
    listeners.add(listener);
    const onStorage = (event: StorageEvent) => {
        if (event.key === DESIGN_SYSTEM_STORAGE_KEY && isDesignSystemId(event.newValue)) {
            document.documentElement.dataset.designSystem = event.newValue;
            listener();
        }
    };
    window.addEventListener("storage", onStorage);
    return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", onStorage);
    };
}

function getSnapshot(): DesignSystemId {
    if (typeof document !== "undefined") {
        const attr = document.documentElement.dataset.designSystem;
        if (isDesignSystemId(attr)) {
            return attr;
        }
    }
    if (typeof window !== "undefined") {
        try {
            const stored = window.localStorage.getItem(DESIGN_SYSTEM_STORAGE_KEY);
            if (isDesignSystemId(stored)) {
                return stored;
            }
        } catch {
            // Ignore storage access errors
        }
    }
    return DEFAULT_DESIGN_SYSTEM;
}

function getServerSnapshot(): DesignSystemId {
    return DEFAULT_DESIGN_SYSTEM;
}

interface DesignSystemContextValue {
    designSystem: DesignSystemId;
    setDesignSystem: (id: DesignSystemId) => void;
    activeSystem: DesignSystemDefinition;
    allSystems: DesignSystemDefinition[];
}

const DesignSystemContext = createContext<DesignSystemContextValue>({
    designSystem: DEFAULT_DESIGN_SYSTEM,
    setDesignSystem: () => {},
    activeSystem: DESIGN_SYSTEMS[DEFAULT_DESIGN_SYSTEM],
    allSystems: DESIGN_SYSTEM_LIST,
});

export function DesignSystemProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const designSystem = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
    );

    const setDesignSystem = useCallback((nextId: DesignSystemId) => {
        if (typeof document !== "undefined") {
            document.documentElement.dataset.designSystem = nextId;
        }
        if (typeof window !== "undefined") {
            try {
                window.localStorage.setItem(DESIGN_SYSTEM_STORAGE_KEY, nextId);
            } catch {
                // Ignore storage quota/privacy mode errors
            }
        }
        listeners.forEach((listener) => listener());
    }, []);

    const activeSystem = DESIGN_SYSTEMS[designSystem];

    return (
        <DesignSystemContext.Provider
            value={{
                designSystem,
                setDesignSystem,
                activeSystem,
                allSystems: DESIGN_SYSTEM_LIST,
            }}
        >
            {children}
        </DesignSystemContext.Provider>
    );
}

export function useDesignSystem() {
    return useContext(DesignSystemContext);
}
