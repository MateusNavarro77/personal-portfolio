import type { SimpleIcon as SimpleIconType } from "simple-icons";
import {
    siFlutter,
    siDart,
    siSqlite,
    siWeb3dotjs,
    siSolidity,
    siTypescript,
    siOpenjdk,
    siJavascript,
    siReact,
    siExpress,
    siEthereum,
    siGit,
    siGithub,
    siGitlab,
    siJenkins,
    siDocker,
    siSpringboot,
    siPostgresql,
    siFlyway,
    siOwasp,
    siPrometheus,
    siGrafana,
    siJunit5,
    siMaterialdesign,
} from "simple-icons";

export const TECH_ICONS: Record<string, SimpleIconType> = {
    flutter: siFlutter,
    dart: siDart,
    sqlite: siSqlite,
    web3dart: siWeb3dotjs,
    web3: siWeb3dotjs,
    solidity: siSolidity,
    typescript: siTypescript,
    java: siOpenjdk,
    javascript: siJavascript,
    react: siReact,
    "express js": siExpress,
    express: siExpress,
    hardhat: siEthereum,
    ethereum: siEthereum,
    git: siGit,
    github: siGithub,
    gitlab: siGitlab,
    jenkins: siJenkins,
    docker: siDocker,
    "spring boot": siSpringboot,
    springboot: siSpringboot,
    spring: siSpringboot,
    postgresql: siPostgresql,
    postgres: siPostgresql,
    flyway: siFlyway,
    owasp: siOwasp,
    devsecops: siOwasp,
    prometheus: siPrometheus,
    grafana: siGrafana,
    junit: siJunit5,
    junit5: siJunit5,
    material: siMaterialdesign,
    "material design": siMaterialdesign,
};

export const TECH_COLORS: Record<string, string> = {
    flutter: "#47C5FB",
    dart: "#0175C2",
    javascript: "#F7DF1E",
    typescript: "#3178C6",
    java: "#ED8B00",
    react: "#61DAFB",
    "spring boot": "#6DB33F",
    springboot: "#6DB33F",
    spring: "#6DB33F",
    postgresql: "#4169E1",
    postgres: "#4169E1",
    docker: "#2496ED",
    git: "#F05032",
    github: "#FFFFFF",
    gitlab: "#FC6D26",
    jenkins: "#D24939",
    solidity: "#627EEA",
    ethereum: "#627EEA",
    hardhat: "#FFF100",
    sqlite: "#3CA5E8",
    web3: "#F16822",
    web3dart: "#F16822",
    material: "#7986CB",
    "material design": "#7986CB",
    "express js": "#FFFFFF",
    express: "#FFFFFF",
    devsecops: "#00A3E0",
    owasp: "#00A3E0",
    flyway: "#CC0200",
    prometheus: "#E6522C",
    grafana: "#F46800",
    junit: "#25A162",
    junit5: "#25A162",
    bloc: "#53C1DE",
};

export function getTechIcon(name: string): SimpleIconType | null {
    const key = name.trim().toLowerCase();
    return TECH_ICONS[key] || null;
}

export function getTechColor(name: string): string | null {
    const key = name.trim().toLowerCase();
    if (TECH_COLORS[key]) return TECH_COLORS[key];
    const icon = TECH_ICONS[key];
    if (icon && icon.hex && icon.hex !== "000000" && icon.hex !== "0A0A0A" && icon.hex !== "181717") {
        return `#${icon.hex}`;
    }
    return null;
}

