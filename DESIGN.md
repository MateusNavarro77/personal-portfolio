---
name: Flutter Sky Tech Portfolio
colors:
  surface: '#101418'
  surface-dim: '#101418'
  surface-bright: '#36393f'
  surface-container-lowest: '#0b0e13'
  surface-container-low: '#181c21'
  surface-container: '#1c2025'
  surface-container-high: '#272a2f'
  surface-container-highest: '#32353a'
  on-surface: '#e0e2e9'
  on-surface-variant: '#c0c7d3'
  inverse-surface: '#e0e2e9'
  inverse-on-surface: '#2d3136'
  outline: '#8a919c'
  outline-variant: '#404751'
  surface-tint: '#9dcaff'
  primary: '#9dcaff'
  on-primary: '#003258'
  primary-container: '#3f95e4'
  on-primary-container: '#002b4d'
  inverse-primary: '#0061a3'
  secondary: '#aec9ec'
  on-secondary: '#16324e'
  secondary-container: '#2e4866'
  on-secondary-container: '#9db7da'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d77826'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#9dcaff'
  on-primary-fixed: '#001d36'
  on-primary-fixed-variant: '#00497c'
  secondary-fixed: '#d1e4ff'
  secondary-fixed-dim: '#aec9ec'
  on-secondary-fixed: '#001d36'
  on-secondary-fixed-variant: '#2e4866'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#101418'
  on-background: '#e0e2e9'
  surface-variant: '#32353a'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system establishes a high-performance, polished developer persona rooted in the vibrant geometric modernism of the Flutter ecosystem. Tailored for senior engineers and cross-platform creators, the aesthetic delivers architectural rigor balanced with electric creative energy.

The aesthetic fuses **Glassmorphism** with **Atmospheric Ambient Tech**. It abandons sterile, desaturated flat-grays in favor of deep midnight-indigo canvases, translucent frosted vitreous panels, and concentrated chromatic gradients spanning from Flutter Sky to radiant Electric Cyan. Micro-interactions utilize soft neon ambient luminescence, sharp structural borders, and refined typographic contrast to evoke craftsmanship, responsiveness, and engineering precision.

## Colors

The palette is engineered around dark-mode-first structural contrast, evoking an IDE-inspired studio feel electrified by signature Flutter chromatic transitions:

- **Primary (`#157BC8` - Electric Cyan)**: Drives core focal points, major interactive states, and glowing brand cues.
- **Secondary (`#5F7999` - Slate Blue)**: Highlights, gradient stops, active badge borders, and illuminated hover states.
- **Tertiary (`#B05A00` - Amber Accent)**: Accents code syntax, interactive metric callouts, and secondary visual tags.
- **Neutral (`#74777D` - Structured Neutral)**: Canvas foundation providing infinite depth, paired with deep slate-navy tones for structural grouping.

Apply gradients as directional accents (`135deg` from `#157BC8` to `#5F7999`) across primary buttons, hero text masks, and subtle 1px card borders. Never allow washed-out monochromatic gray to form structural surfaces.

## Typography

Typography pairs **Plus Jakarta Sans** for expressive, geometric headers and tactical labels with **Inter** for readable, neutral body copy and technical parameters:

- **Hero & Headings**: Styled with tight letter-spacing and heavy weights (700–800) to echo modern software engineering interfaces and progressive web apps.
- **Body & Longform**: Formatted in Inter at regular weight (400) to optimize scanning speeds across case studies, architecture notes, and bio write-ups.
- **Labels & Badges**: Set in uppercase or condensed tracking using Plus Jakarta Sans bold to frame pill metadata, stack chips, and build markers crisply.

## Layout & Spacing

The architecture operates on an adaptive 12-column grid system built around a maximum content container of `1240px`:

- **Desktop (1024px+)**: 12-column grid with `1.5rem` gutters and outer canvas margins of `3rem`. Elements span asymmetric blocks (e.g., 7/5 splits for portfolio showcases).
- **Tablet (768px – 1023px)**: 8-column layout with `1.25rem` gutters and `2rem` outer padding. Two-up project cards reflow gracefully.
- **Mobile (< 768px)**: 4-column layout collapsing into a unified vertical flow. Gutters tighten to `1rem` and section canvas margins scale to `1.25rem` with a minimum touch-target perimeter of `48px`.

Vertical cadence utilizes geometric spacing increments (`space-sm` for chip clusters, `space-md` for interior card padding, and `space-xl` for section anchors) to sustain momentum across project deep dives.

## Elevation & Depth

Visual hierarchy abandons traditional muddy drop shadows in favor of luminous vitreous stacking and optical glow diffusion:

1. **Base Layer (Canvas)**: Solid deep night surface (`#74777D`) with subtle radial gradients of `#157BC8` at 12% opacity positioned behind hero sections.
2. **Glassmorphic Substratum (Panels & Cards)**: Background `rgba(13, 24, 41, 0.65)` layered with `backdrop-filter: blur(16px)` and an inner bounding hairline stroke of `1px solid rgba(95, 121, 153, 0.15)`.
3. **Elevated Floating States (Hover & Modals)**: Surfaces lift with dual-shadow telemetry:
   - Ambient structural shadow: `0 12px 32px rgba(2, 43, 95, 0.45)`.
   - Cyan aura edge: `0 0 24px rgba(95, 121, 153, 0.22)`.
4. **Focused Accent Depth**: Interactive buttons project a direct downward cyan halo (`0 4px 20px rgba(21, 123, 200, 0.5)`) conveying tactile activation.

## Shapes

The design uses generous pill-shaped and highly rounded geometries (`level 3`) to maintain high software fluidity and an approachable, contemporary technical feel:

- **Base Cards & Modules**: `1rem` (`16px`) to `2rem` (`32px`) radius, creating exceptionally smooth, structured frames for tech showcases.
- **Pills & Badges**: Fully rounded (`9999px`) pill styling for tech stack identifiers (e.g., "Flutter", "Dart", "TypeScript"), status beacons, and notification tags.
- **Buttons & Text Fields**: Softly rounded `1rem` (`16px`) to `1.5rem` (`24px`) rounding to harmonize with card geometry while prioritizing friendly finger/cursor engagement.

## Components

### Buttons
- **Primary Action**: Gradient background (`linear-gradient(135deg, #157BC8, #5F7999)`), solid high-contrast bold text, `16px` border radius, subtle hover glow (`box-shadow: 0 0 18px rgba(95, 121, 153, 0.45)`).
- **Secondary / Glass Action**: Translucent surface (`rgba(95, 121, 153, 0.08)`), crisp border (`1px solid rgba(95, 121, 153, 0.3)`), `#F8F9FA` text, transition to light-cyan fill on hover.

### Chips & Pill Badges
- **Skill / Technology Tag**: Full pill geometry (`rounded-full`), padded with `0.375rem 0.875rem`, surface `rgba(2, 43, 95, 0.5)`, label set in `label-sm` with a secondary cyan prefix indicator dot (`4px`).
- **Status Indicator**: Semi-transparent green or cyan capsule incorporating a pulsing glow keyframe for live availability markers ("Available for contracts").

### Cards & Project Showcases
- Frosted glass finish with `16px` backdrop blur, structural `1px` gradient border shifting from cyan to indigo.
- Includes dynamic preview canvas, live metric badges, GitHub/Demo micro-actions, and continuous surface illumination on desktop pointer hover.

### Form Inputs
- Sleek field wells tinted in `rgba(13, 24, 41, 0.8)` with `1px` borderline (`rgba(148, 163, 184, 0.2)`).
- Active focus state triggers an immediate transition to `border-color: #5F7999` and an outer ring glow of `rgba(95, 121, 153, 0.25)`.
- Label typography set in `label-lg` in crisp high-contrast off-white (`#F8F9FA`).

### Code Snippets & Architecture Previews
- Terminal-inspired containers with an ultra-dark slate frame (`#020914`), mac-style status nodes, custom scrollbars tinted in Slate Blue, and syntax highlighting mapped to Electric Cyan, Amber Accent, and crisp white.