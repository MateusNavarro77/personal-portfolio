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
};

export function getTechIcon(name: string): SimpleIconType | null {
    const key = name.trim().toLowerCase();
    return TECH_ICONS[key] || null;
}

