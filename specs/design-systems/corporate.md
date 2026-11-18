---
version: "1.0"
name: Corporate Navy
description: Minimalista corporativo com blocos de alto contraste em azul marinho escuro (#0F172A) intercalados com superfícies brancas e slate (#FFFFFF / #F8FAFC), bordas finas, cantos contidos e tipografia executiva.
colors:
  background: "#FFFFFF"
  background-alt: "#F8FAFC"
  surface: "#FFFFFF"
  surface-subtle: "#F1F5F9"
  surface-navy: "#0F172A"
  surface-navy-elevated: "#1E293B"
  on-surface: "#0F172A"
  on-surface-muted: "#475569"
  on-navy: "#F8FAFC"
  on-navy-muted: "#CBD5E1"
  primary: "#1D4ED8"
  primary-hover: "#1E40AF"
  on-primary: "#FFFFFF"
  primary-soft: "#DBEAFE"
  secondary: "#F1F5F9"
  on-secondary: "#0F172A"
  border: "#E2E8F0"
  border-strong: "#CBD5E1"
  border-navy: "#1E293B"
  danger: "#DC2626"
  on-danger: "#FFFFFF"
typography:
  display:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: 700
    letterSpacing: "-0.03em"
  title:
    fontFamily: Inter
    fontSize: 1.375rem
    fontWeight: 700
    letterSpacing: "-0.02em"
  label:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 600
  body:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 6px
  button: 8px
  card: 12px
  pill: 9999px
spacing:
  border: 1px
  shadow-sm: "0 1px 2px rgba(15, 23, 42, 0.05)"
  shadow-md: "0 4px 12px rgba(15, 23, 42, 0.07), 0 1px 3px rgba(15, 23, 42, 0.05)"
  shadow-lg: "0 12px 28px rgba(15, 23, 42, 0.09), 0 2px 6px rgba(15, 23, 42, 0.04)"
components:
  app-bar:
    backgroundColor: "rgba(255, 255, 255, 0.92)"
    borderColor: "{colors.border}"
    rounded: "{rounded.card}"
    height: 60px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.card}"
    padding: 24px
  card-highlight:
    backgroundColor: "{colors.surface-navy}"
    textColor: "{colors.on-navy}"
    borderColor: "{colors.border-navy}"
    rounded: "{rounded.card}"
    padding: 24px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
  button-pop:
    backgroundColor: "{colors.surface-navy}"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.button}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    borderColor: "{colors.border-strong}"
    rounded: "{rounded.button}"
  chip:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.on-surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.sm}"
---

## Overview

**Corporate Navy** é uma linguagem visual executiva e minimalista pensada para transmitir maturidade profissional, clareza hierárquica e confiança em ambientes corporativos. Superfícies brancas (`#FFFFFF`) e slate suave (`#F8FAFC`) são intercaladas com blocos de alto contraste em azul marinho escuro (`#0F172A`), mantendo o layout limpo, alinhado e sem ornamentos excessivos.

Princípios:

- **Hierarquia por contraste limpo:** cartões claros para leitura densa e blocos `#0F172A` para destaque estratégico.
- **Bordas finas e precisas:** `1px solid` substitui contornos grossos; profundidade vem de sombras suaves e sutis.
- **Geometria estável:** zero inclinação (`0deg`), alinhamento rigoroso e raios contidos (`8px` em botões, `12px` em cartões).
- **Acento contido:** azul cobalto (`#1D4ED8`) reservado para ações primárias, foco e marcadores editoriais.

## Colors

| Papel | Token | Hex |
|:------|:------|:----|
| **Canvas principal** | `background` | `#FFFFFF` |
| **Canvas alternado** | `background-alt` | `#F8FAFC` |
| **Bloco de alto contraste** | `surface-navy` | `#0F172A` |
| **Texto principal** | `on-surface` | `#0F172A` |
| **Texto secundário** | `on-surface-muted` | `#475569` |
| **Texto sobre Navy** | `on-navy` | `#F8FAFC` |
| **Acento primário** | `primary` | `#1D4ED8` |
| **Borda padrão** | `border` | `#E2E8F0` |

## Typography

- **Família principal:** `Inter` (com fallback `Plus Jakarta Sans` / system sans).
- **Display:** peso `700`, tracking `-0.03em`, cor `#0F172A`.
- **Títulos de seção:** rótulo uppercase discreto acompanhado de barra vertical cobalto ou filete horizontal limpo.
- **Corpo:** peso `400–500`, `line-height: 1.65`, alto conforto de leitura em `#475569` / `#334155`.

## Elevation & Depth

- Sombras difusas suaves de baixa opacidade (`rgba(15, 23, 42, 0.05–0.09)`).
- Hover sutil com elevação discreta (`-1px` ou transição de borda `#CBD5E1`) sem saltos bruscos.

## Shapes

- **Botões e controles:** `8px` (`rounded-lg`).
- **Cards e App Bar:** `12px` (`rounded-xl`).
- **Chips / Tags técnicas:** `6px` (`rounded-md`) ou pílula compacta para status (`Merged`).
- Sem inclinação (`rotate(0deg)`).

## Do's and Don'ts

**Faça**
- Alterne blocos claros (`#FFFFFF`) com blocos Navy (`#0F172A`) para criar ritmo visual corporativo.
- Mantenha contraste WCAG AA+ tanto em superfícies claras quanto nos blocos escuros em `#0F172A`.
- Use micro-transições sóbrias (`150ms–200ms`, `ease-out`).

**Não faça**
- Não use contornos grossos, sombras duras ou inclinações nos cartões.
- Não use cores saturadas múltiplas competindo com o azul marinho e o cobalto.
