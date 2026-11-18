---
version: "1.0"
name: Developer Terminal
description: Estética dark mode inspirada em IDEs, editores de código e interfaces de terminal (TUI), com superfícies em grafite profundo (#0D1117 / #161B22), bordas técnicas de 1px (#30363D), tipografia monoespaçada e acentos em verde terminal e ciano.
colors:
  background: "#0D1117"
  background-alt: "#090D13"
  surface: "#161B22"
  surface-elevated: "#1C2128"
  surface-muted: "#21262D"
  on-surface: "#E6EDF3"
  on-surface-muted: "#8B949E"
  border: "#30363D"
  border-strong: "#484F58"
  primary: "#238636"
  primary-bright: "#3FB950"
  on-primary: "#FFFFFF"
  accent-cyan: "#58A6FF"
  accent-amber: "#F0883E"
  accent-purple: "#BC8CFF"
  danger: "#F85149"
typography:
  mono:
    fontFamily: JetBrains Mono
    fontWeight: 500
  display:
    fontFamily: JetBrains Mono
    fontSize: 3.25rem
    fontWeight: 700
    letterSpacing: "-0.03em"
  title:
    fontFamily: JetBrains Mono
    fontSize: 1.25rem
    fontWeight: 700
  label:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: 600
  body:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.95rem
    fontWeight: 400
rounded:
  xs: 4px
  sm: 6px
  card: 8px
  pill: 6px
spacing:
  border: 1px
  glow-primary: "0 0 0 1px rgba(63, 185, 80, 0.35), 0 8px 24px rgba(0, 0, 0, 0.45)"
  shadow-card: "0 4px 20px rgba(0, 0, 0, 0.35)"
components:
  app-bar:
    backgroundColor: "rgba(22, 27, 34, 0.92)"
    borderColor: "{colors.border}"
    rounded: "{rounded.card}"
    height: 56px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.card}"
    padding: 20px
  card-highlight:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-surface}"
    borderColor: "#388BFD66"
    rounded: "{rounded.card}"
    padding: 20px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.primary-bright}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.on-surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.sm}"
  button-pop:
    backgroundColor: "#1F6FEB"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.accent-cyan}"
    rounded: "{rounded.sm}"
  chip:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.on-surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.xs}"
---

## Overview

**Developer Terminal** traduz o ambiente diário de engenharia de software (IDE + terminal + git) para a interface do portfólio. Mantém exatamente o mesmo conteúdo e estrutura de layout, vestindo cada componente como um módulo técnico: janelas com barra de título, prefixos de comando (`$`, `~/`, `//`), badges de status em estilo git/CI e tipografia monoespaçada para sinalização técnica.

Princípios:

- **Estética de terminal/IDE moderna:** fundo escuro `#0D1117`, painéis `#161B22` e divisórias nítidas de `1px` em `#30363D`.
- **Sinalização semântica de código:** verde (`#3FB950`) para ações principais e status ativos, ciano (`#58A6FF`) para links/referências, âmbar (`#F0883E`) para metadados e destaques.
- **Legibilidade equilibrada:** `JetBrains Mono` em headings, tags, comandos e chrome de janela; fonte sans limpa (`Plus Jakarta Sans`) nos parágrafos longos.
- **Cantos técnicos:** `4px–8px`, sem sombras cartoon ou inclinações.

## Colors

| Papel | Token | Hex |
|:------|:------|:----|
| **Canvas principal** | `background` | `#0D1117` |
| **Canvas alternado** | `background-alt` | `#090D13` |
| **Superfície (cards/painéis)** | `surface` | `#161B22` |
| **Superfície elevada** | `surface-elevated` | `#1C2128` |
| **Superfície de botões/chips** | `surface-muted` | `#21262D` |
| **Borda técnica** | `border` | `#30363D` |
| **Texto principal** | `on-surface` | `#E6EDF3` |
| **Texto secundário** | `on-surface-muted` | `#8B949E` |
| **Verde terminal** | `primary-bright` | `#3FB950` |
| **Ciano sintaxe** | `accent-cyan` | `#58A6FF` |

## Typography

- **Monospace (`JetBrains Mono`):** display hero, títulos de seção (`$ ...`), nomes de projetos, tags de tecnologia, datas de timeline e botões.
- **Body (`Plus Jakarta Sans`):** descrições de projetos, parágrafos "Sobre Mim" e bullets de experiência para manter leitura confortável.

## Shapes & Elevation

- Cantos retos suaves (`4px` em chips, `6px` em botões, `8px` em cards e janelas).
- Profundidade construída por contraste de camadas escuras (`#0D1117` → `#161B22` → `#21262D`) + bordas `1px solid #30363D` + brilho sutil em hover/foco.

## Components

- **App Bar:** barra fixa escura com indicador de status online (`●`) e prefixo monoespaçado.
- **Section Title:** formato prompt (`$`) + rótulo monoespaçado em caixa alta/técnica + linha divisória sutil.
- **Hero Showcase:** janela estilo terminal/editor interativa exibindo as mesmas 6 tecnologias com metadados técnicos, indicador de arquivo e navegação por teclado/clique/tabs.
- **Timeline (Experience):** linha vertical estilo `git log` com nós quadrados/circulares em verde/ciano e datas em badge monoespaçado.

## Do's and Don'ts

**Faça**
- Use ícones técnicos claros e contraste suficiente no escuro (`#E6EDF3` sobre `#161B22`).
- Use detalhes inspirados em CLI/Git (`$`, `//`, `[merged]`) de forma sutil sem poluir o conteúdo.

**Não faça**
- Não aplique monospace em blocos longos de texto corrido se prejudicar a leitura.
- Não use bordas grossas nem sombras sólidas deslocadas.
