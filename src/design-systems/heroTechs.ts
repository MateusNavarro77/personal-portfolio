import type { SimpleIcon as SimpleIconType } from "simple-icons";
import {
    siFlutter,
    siNodedotjs,
    siReact,
    siOpenjdk,
    siSpringboot,
    siTypescript,
} from "simple-icons";

export interface HeroTechSpec {
    id: string;
    label: string;
    badge: string;
    category: string;
    color: string;
    icon: SimpleIconType;
    fileName: string;
    command: string;
    snippet: string[];
}

export const HERO_TECH_SPECS: HeroTechSpec[] = [
    {
        id: "flutter",
        label: "Flutter & Dart",
        badge: "Flutter & Dart",
        category: "Cross-Platform Mobile",
        color: "#02569B",
        icon: siFlutter,
        fileName: "app_shell.dart",
        command: "flutter run --release",
        snippet: [
            "class PortfolioTheme extends ThemeExtension<PortfolioTheme> {",
            "  final ColorScheme scheme;",
            "  const PortfolioTheme({required this.scheme});",
            "}",
        ],
    },
    {
        id: "nodejs",
        label: "Node.js",
        badge: "Node.js",
        category: "Backend Runtime",
        color: "#339933",
        icon: siNodedotjs,
        fileName: "server.mjs",
        command: "node --watch server.mjs",
        snippet: [
            "import { createServer } from 'node:http';",
            "const app = createServer((req, res) => {",
            "  res.writeHead(200, { 'content-type': 'application/json' });",
            "});",
        ],
    },
    {
        id: "react",
        label: "React",
        badge: "React",
        category: "UI Architecture",
        color: "#58C4DC",
        icon: siReact,
        fileName: "DesignSystemProvider.tsx",
        command: "next dev --turbopack",
        snippet: [
            "export function useDesignSystem() {",
            "  const ctx = useContext(DesignSystemContext);",
            "  return ctx.activeSystem;",
            "}",
        ],
    },
    {
        id: "java",
        label: "Java",
        badge: "Java",
        category: "Enterprise Systems",
        color: "#E76F00",
        icon: siOpenjdk,
        fileName: "TaskService.java",
        command: "./mvnw verify",
        snippet: [
            "public record TaskDto(UUID id, String title, boolean done) {",
            "  public static TaskDto from(TaskEntity entity) {",
            "    return new TaskDto(entity.getId(), entity.getTitle(), entity.isDone());",
            "  }",
            "}",
        ],
    },
    {
        id: "springboot",
        label: "Spring Boot",
        badge: "Spring Boot",
        category: "REST APIs & Security",
        color: "#6DB33F",
        icon: siSpringboot,
        fileName: "SecurityConfig.java",
        command: "spring-boot:run",
        snippet: [
            "@Bean",
            "SecurityFilterChain apiFilter(HttpSecurity http) throws Exception {",
            "  return http.oauth2ResourceServer(Customizer.withDefaults()).build();",
            "}",
        ],
    },
    {
        id: "typescript",
        label: "TypeScript",
        badge: "TypeScript",
        category: "Type-Safe Web",
        color: "#3178C6",
        icon: siTypescript,
        fileName: "tokens.ts",
        command: "tsc --noEmit",
        snippet: [
            "export type DesignSystemId = 'corporate' | 'developer' | 'cartoon';",
            "export interface ThemeRegistry {",
            "  readonly systems: Record<DesignSystemId, DesignSystemDefinition>;",
            "}",
        ],
    },
];
