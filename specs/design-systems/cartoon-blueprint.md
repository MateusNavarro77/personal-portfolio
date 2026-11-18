---
version: alpha
name: Cartoon Blueprint
description: Mesmo estilo cartoon/sticker (contorno preto grosso, sombra dura oblíqua sem blur, cores chapadas) com a paleta azul e laranja, aplicada em modo claro.
colors:
  surface: "#101418"
  surface-dim: "#101418"
  surface-bright: "#36393f"
  surface-container-lowest: "#0b0e13"
  surface-container-low: "#181c21"
  surface-container: "#1c2025"
  surface-container-high: "#272a2f"
  surface-container-highest: "#32353a"
  on-surface: "#e0e2e9"
  on-surface-variant: "#c0c7d3"
  inverse-surface: "#e0e2e9"
  inverse-on-surface: "#2d3136"
  outline: "#8a919c"
  outline-variant: "#404751"
  surface-tint: "#9dcaff"
  primary: "#9dcaff"
  on-primary: "#003258"
  primary-container: "#3f95e4"
  on-primary-container: "#002b4d"
  inverse-primary: "#0061a3"
  secondary: "#aec9ec"
  on-secondary: "#16324e"
  secondary-container: "#2e4866"
  on-secondary-container: "#9db7da"
  tertiary: "#ffb783"
  on-tertiary: "#4f2500"
  tertiary-container: "#d77826"
  on-tertiary-container: "#452000"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#d1e4ff"
  primary-fixed-dim: "#9dcaff"
  on-primary-fixed: "#001d36"
  on-primary-fixed-variant: "#00497c"
  secondary-fixed: "#d1e4ff"
  secondary-fixed-dim: "#aec9ec"
  on-secondary-fixed: "#001d36"
  on-secondary-fixed-variant: "#2e4866"
  tertiary-fixed: "#ffdcc5"
  tertiary-fixed-dim: "#ffb783"
  on-tertiary-fixed: "#301400"
  on-tertiary-fixed-variant: "#703700"
  background: "#101418"
  on-background: "#e0e2e9"
  surface-variant: "#32353a"
  accent: "#60a8ed"
typography:
  display:
    fontFamily: Roboto
    fontSize: 3rem
    fontWeight: 900
  label:
    fontFamily: Roboto
    fontSize: 0.875rem
    fontWeight: 700
rounded:
  pill: 100px
spacing:
  xs: 2.5px
  sm: 8px
  md: 24px
  border-thin: 2.5px
  border-thick: 3.5px
  shadow-x: 7px
  shadow-y: 8px
  nav-item-width: 68px
  nav-item-height: 52px
  icon-size: 26px
  icon-size-selected: 28px
components:
  page:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface-container-lowest}"
    typography: "{typography.display}"
  nav-bar:
    backgroundColor: "{colors.primary-fixed}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm}"
    height: "{spacing.nav-item-height}"
  nav-item:
    width: "{spacing.nav-item-width}"
    height: "{spacing.nav-item-height}"
    textColor: "{colors.surface-container-lowest}"
    size: "{spacing.icon-size}"
  nav-item-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.pill}"
    size: "{spacing.icon-size-selected}"
  app-bar:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.pill}"
    height: 64px
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface-container-lowest}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.surface-container-lowest}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
  button-disabled:
    backgroundColor: "{colors.on-surface-variant}"
    textColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.pill}"
  icon-button:
    backgroundColor: "{colors.primary-fixed}"
    textColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.pill}"
    size: 48px
  icon-button-danger:
    backgroundColor: "{colors.error}"
    textColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.pill}"
    size: 48px
  fab:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.pill}"
    size: 64px
  checkbox:
    backgroundColor: "{colors.primary-fixed}"
    size: 34px
  checkbox-checked:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface-container-lowest}"
    size: 34px
  text-field:
    backgroundColor: "{colors.primary-fixed}"
    textColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.pill}"
  text-field-focused:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.pill}"
  slider-track:
    backgroundColor: "{colors.primary-fixed}"
    height: 16px
    rounded: "{rounded.pill}"
  slider-fill:
    backgroundColor: "{colors.accent}"
    height: 16px
    rounded: "{rounded.pill}"
  slider-thumb:
    backgroundColor: "{colors.primary-fixed}"
    size: 36px
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.primary-fixed}"
    textColor: "{colors.surface-container-lowest}"
    rounded: 28px
    padding: 20px
  card-highlight:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface-container-lowest}"
    rounded: 28px
    padding: 20px
---

## Overview

Cartoon / sticker, agora em **azul-prancheta**. É exatamente a mesma linguagem
visual do estilo original: a interface lembra um adesivo colado sobre uma folha,
com contorno preto grosso, cores chapadas (sem gradientes) e uma sombra preta
dura que dá a impressão de o elemento estar levantado da página. O que muda é a
paleta: o creme e o amarelo dão lugar a um cinza-azulado claro, azul vivo e um
toque de laranja.

Princípios (iguais ao estilo original):

- **Contorno primeiro:** todo elemento interativo tem borda de tinta escura.
- **Sombra dura:** nada de blur. A profundidade vem de um deslocamento sólido.
- **Cor chapada:** uma cor de destaque por vez, sem degradês nem transparências.
- **Movimento elástico:** as transições têm "borracha", com leve overshoot.

## Colors

A paleta fornecida é de um tema escuro (superfícies `#101418`). Ela foi aplicada
em **modo claro** de propósito: o estilo cartoon depende de contornos e sombras
escuros sobre superfícies claras, e uma sombra quase preta some num fundo
escuro. Por isso os tons escuros viram "tinta" e os tons claros viram "papel".

Mapeamento de papéis:

| Papel | Token | Hex |
|:------|:------|:----|
| **Tinta** (contornos, sombras, ícones, textos) | `surface-container-lowest` | #0b0e13 |
| **Papel** (fundo da página) | `on-surface` | #e0e2e9 |
| **Superfície** (barra, cards, campos, thumb) | `primary-fixed` | #d1e4ff |
| **Acento principal** (seleção, botão primário, app bar) | `accent` (primary-container clareado) | #60a8ed |
| **Acento suave** (campo em foco) | `primary` | #9dcaff |
| **Secundário** (botão secundário) | `secondary` | #aec9ec |
| **Pop** (FAB, uma vez por tela) | `tertiary-container` | #d77826 |
| **Perigo** (ação destrutiva) | `error` | #ffb4ab |
| **Desabilitado** | `on-surface-variant` | #c0c7d3 |

- **Tinta (#0b0e13):** o mais próximo de preto puro dentro da paleta. A sombra precisa ser exatamente esta cor, sem opacidade.
- **Acento principal (#60a8ed):** o azul que ocupa o lugar do amarelo. É o `primary-container` (#3f95e4) da paleta original, clareado para dar mais contraste com a tinta: texto e ícones pretos sobre ele chegam a cerca de 7.7:1 (antes ~6:1).
- **Pop (#d77826):** o laranja é o contraponto do azul e fica reservado ao floating action button.
- **Perigo (#ffb4ab):** salmão claro, para que o ícone preto continue legível.

Os demais tokens (superfícies escuras, `*-container`, `on-*`, variantes `fixed`)
foram mantidos por fidelidade à paleta e para um possível tema escuro. Eles não
são usados no modo claro, mas permanecem no arquivo (o linter não os sinaliza).
Num tema escuro seria preciso inverter a lógica: contorno e sombra claros em vez
de pretos.

## Typography

Igual ao estilo original: fonte geométrica e pesada, sempre em negrito alto para
combinar com o traço grosso dos contornos.

- **Display:** títulos de página em peso 900, cor de tinta.
- **Label:** rótulos curtos em peso 700 a 900.

Roboto é a fonte padrão do Flutter e funciona no DartPad. Para reforçar o clima
cartoon, considere Fredoka, Baloo 2 ou Bangers via `google_fonts`.

## Layout

Idêntico ao estilo original.

- A barra flutua, **centralizada horizontalmente**, a 24px do fundo (`spacing.md`), respeitando a SafeArea.
- Largura da barra = `nav-item-width` × número de itens.
- Padding interno de 8px entre o contorno e os itens.
- Cada item mede 68 × 52px, com o ícone centralizado.
- Só ícones na barra, para manter o formato pílula limpo.

## Elevation & Depth

A profundidade é **falsa e gráfica**, nunca realista. Nada mudou aqui.

- **Sombra dura oblíqua:** `BoxShadow` na cor de tinta (#0b0e13), `blurRadius: 0`, `spreadRadius: 0`, deslocamento `(7px, 8px)` (`shadow-x`, `shadow-y`), caindo para baixo e para a direita.
- O deslocamento é levemente assimétrico (8 vertical vs 7 horizontal) para parecer desenhado à mão.
- Elementos apertáveis descem até a posição da sombra quando pressionados, e a sombra some.
- Não usar sombras suaves, elevação do Material, nem transparência na sombra.

## Shapes

Idêntico ao estilo original.

- **Pílula total:** `borderRadius: 100px` (`rounded.pill`) na barra, nos botões e no indicador.
- **Contorno externo:** 3.5px sólido na cor de tinta (`border-thick`).
- **Contorno do indicador:** 2.5px (`border-thin`), um pouco mais fino que o da barra para manter a hierarquia.
- Cards usam raio 28px. Cantos nunca são retos.

## Components

### nav-bar

Contêiner em pílula na cor de superfície (#d1e4ff), com contorno de tinta de
3.5px e a sombra dura oblíqua. Padding de 8px.

### nav-item e nav-item-selected

Área de toque de 68 × 52px com ícone de tinta de 26px. O item selecionado ganha
um indicador azul (#60a8ed) em pílula, com contorno de 2.5px, e o ícone cresce
para 28px.

**Animação do indicador:** um único `AnimatedPositioned` desliza entre os itens
em **800ms** com a curva **`Curves.elasticInOut`**. Use `clipBehavior: Clip.none`
no `Stack` interno para o overshoot "vazar" além da borda da barra.

### app-bar

Pílula flutuante azul (#60a8ed) no topo, com ícones em icon buttons de
superfície.

### button-primary, button-secondary e button-disabled

Pílulas com contorno e sombra. O primário é azul, o secundário usa o azul claro
`secondary`, e o desabilitado é cinza-azulado chapado, sem sombra.

### icon-button e icon-button-danger

Círculos de 48px com sombra pequena (3, 4). O de perigo usa o salmão `error`.

### fab

Círculo de 64px (ou pílula estendida) em laranja `tertiary-container`, com a
sombra grande (7, 8). É o único elemento laranja da tela.

### checkbox

Quadrado arredondado de 34px. Marcado, fica azul, "desce" até a sombra e o
check aparece com `Curves.elasticOut`.

### text-field

Pílula com superfície clara. Em foco, o campo sobe, a sombra se afasta e o fundo
vira o azul suave (#9dcaff).

### slider

Trilho em pílula de superfície, preenchimento azul e thumb circular de
superfície que cresce com elástico ao arrastar.

### card e card-highlight

Raio 28px, padding 20px e sombra grande. O padrão usa a cor de superfície e o
destaque usa o azul principal. Ambos aceitam uma leve inclinação.

## Do's and Don'ts

**Faça**

- Use sempre contorno de tinta grosso em elementos flutuantes.
- Mantenha a sombra 100% na cor de tinta, sólida e sem blur.
- Use o azul como acento principal e o laranja só no FAB.
- Preserve a curva `Curves.elasticInOut` nas transições do indicador.

**Não faça**

- Não use gradientes, glassmorphism ou sombras suaves.
- Não reduza a opacidade da sombra ou do contorno.
- Não use as superfícies escuras (#101418 e afins) como fundo no modo claro: a sombra deixaria de aparecer.
- Não misture cantos retos com a pílula.
- Não use mais de um acento forte além do FAB ao mesmo tempo.