# AGENTS.md

## Project overview
This repository is a Next.js portfolio site for a developer profile, using the App Router and locale-based routing for English and Brazilian Portuguese.

- App entry points: `src/app/`
- Locale config: `src/i18n/routing.ts`, `src/i18n/request.ts`
- Shared content: `src/messages/*.json`
- UI components: `src/components/`
- Design tokens: `DESIGN.md`
- Global styling: `src/app/globals.css`

## Commands
Use these commands from the project root:

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — validate code quality with ESLint

## Architecture and conventions
- Prefer the App Router patterns already used in `src/app/[locale]/layout.tsx` and `src/app/[locale]/page.tsx`.
- Keep locale-aware navigation and path generation using the wrappers from `src/i18n/routing.ts` instead of raw `next/link` for localized routes.
- Most page sections are composed from server components in `src/components/`; add `"use client"` only when interactivity is actually required.
- Content copy is usually stored in `src/messages/*.json` and loaded through `next-intl`, so update translations together when changing visible text.
- Styling is driven by Tailwind classes plus the design tokens documented in `DESIGN.md`; preserve the established visual hierarchy and blue/neutral palette.

## Design system guidance
- Follow the system described in `DESIGN.md`

## Safe editing patterns
- Before changing route behavior or locale handling, inspect `src/i18n/routing.ts` and `src/i18n/request.ts`.
- When adding or renaming a component, keep imports aligned with the existing alias setup (`@/*`), and keep the section structure consistent with the existing landing page layout.
- Use the existing component names and composition patterns rather than creating a parallel structure.

## When working in this repo
- Keep changes scoped to the feature or section being edited.
- Prefer small, idiomatic updates over broad refactors.
- If a task touches copy, navigation, or page structure, verify both the English and Portuguese versions remain coherent.

## Useful references
- [README.md](README.md)
- [DESIGN.md](DESIGN.md)
- [src/i18n/routing.ts](src/i18n/routing.ts)
- [src/app/[locale]/layout.tsx](src/app/[locale]/layout.tsx)
- [src/app/[locale]/page.tsx](src/app/[locale]/page.tsx)
