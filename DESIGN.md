---
name: Kinetic Obsidian
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#414751'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#727783'
  outline-variant: rgba(0, 93, 172, 0.15)
  surface-tint: '#065fae'
  primary: '#004583'
  on-primary: '#ffffff'
  primary-container: '#005dac'
  on-primary-container: '#bfd7ff'
  inverse-primary: '#a6c8ff'
  secondary: '#005db7'
  on-secondary: '#ffffff'
  secondary-container: '#64a1ff'
  on-secondary-container: '#003670'
  tertiary: '#0e4a61'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e627a'
  on-tertiary-container: '#aadcf8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a6c8ff'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#004786'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#a9c7ff'
  on-secondary-fixed: '#001b3d'
  on-secondary-fixed-variant: '#00468c'
  tertiary-fixed: '#c1e8ff'
  tertiary-fixed-dim: '#9bcde9'
  on-tertiary-fixed: '#001e2b'
  on-tertiary-fixed-variant: '#124c64'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  surface-lowest: '#ffffff'
  accent-fidelity: '#005eb8'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.05em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.05em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.3'
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 1.5rem
  margin-desktop: 3rem
  margin-mobile: 1.25rem
  grid-unit: 4px
---

## Brand & Style
The design system is centered on the "Kinetic Architect" north star—a fusion of high-performance technical clarity and editorial sophistication. It targets a professional audience that values precision, motion, and architectural depth. 

The aesthetic is a sophisticated blend of **Modern Minimalism** and **Glassmorphism**, characterized by intentional asymmetry and a "built" rather than "templated" feel. The interface rejects standard dashboard rigidness in favor of fluid layouts, using subtle grid-based background patterns to suggest blueprinting and engineering precision. The emotional response is one of trust, innovation, and deliberate craftsmanship.

## Colors
The palette utilizes a high-fidelity blue spectrum to communicate expertise. The structural core is built on the primary blue, while secondary tones provide depth for container accents.

A "No-Line" rule is strictly enforced: sectioning must be achieved through background transitions (shifting between surface tiers) rather than solid borders. If a boundary is functionally required, use the `outline-variant` at 15% opacity. Surfaces follow a hierarchy where `surface-lowest` (#FFFFFF) is used for floating cards to maximize contrast against the `background` (#F8F9FA). Glassmorphic elements, such as navigation, utilize a 70% white opacity fill with a 20px backdrop blur.

## Typography
This design system employs a dual-font strategy: **Plus Jakarta Sans** for high-impact, geometric headlines and **Inter** for technical body and label text. 

Asymmetry and motion are introduced typographically through the selective use of *italics* within headlines to break rigid structures. Large display text uses tight tracking (-0.05em) to appear "locked" and architectural. Metadata and chips utilize the `label-sm` style, which is uppercase with wide tracking to ensure clarity at small scales without cluttering the visual field.

## Layout & Spacing
The layout philosophy is rooted in **intentional asymmetry**. Instead of centered or perfectly mirrored columns, use off-balance splits (e.g., a 5-column vs 7-column division) to create dynamic tension. 

The system utilizes a 12-column fluid grid for desktop with 24px gutters. For hero sections, a radial-gradient grid pattern is layered into the background to establish the technical "architect" theme. On mobile, the layout reflows to a single column with 20px side margins, maintaining the large typographic anchors. Vertical spacing should follow a strict 4px/8px rhythm to reinforce the precision-engineered feel.

## Elevation & Depth
Depth is established through **Tonal Layering** rather than heavy shadows. The hierarchy is created by stacking lighter surfaces (`surface-lowest`) onto slightly darker backgrounds (`background`).

When shadows are necessary for floating elements, they must be highly diffused and ambient: `0 20px 25px -5px rgba(0, 0, 0, 0.1)`. Interactive elements like buttons and cards should "lift" upon hover using a primary-tinted shadow (a 20% opacity primary color) to signal state changes. Glassmorphic layers provide a final tier of elevation, used exclusively for persistent navigation and overlays.

## Shapes
The shape language is defined by significant roundedness to offset the technical "grid" nature of the layout. 

While the base roundedness is 8px (0.5rem), the design system leans heavily into `rounded-xl` (24px) for cards and `rounded-full` (pill-shaped) for interactive components like buttons and navigation bars. Sharp 90-degree corners are strictly prohibited; every element must feel "machined" and smooth.

## Components
- **Buttons:** Use fully rounded (pill-shaped) geometry. Primary buttons feature a solid fill; secondary buttons use a high-tier surface background with a subtle 15% opacity outline.
- **Cards:** Defined by 24px (3xl) corner radii and `surface-lowest` backgrounds. Transition effects for hover states must be long (500ms) and fluid to match the "kinetic" theme.
- **Chips:** Highly technical; use 10px uppercase text with wide tracking. These are used sparingly for categorization.
- **Navigation:** A floating, glassmorphic bar with internal padding and full-pill rounding. It should blur the content beneath it to maintain focus.
- **Input Fields:** Minimalist with soft 8px corners. Focus states should transition the border color to primary or use a subtle tinted inner glow rather than a heavy outer stroke.
- **Visuals:** Grayscale image filters should be applied by default, transitioning to full color on hover for a sophisticated "reveal" effect.