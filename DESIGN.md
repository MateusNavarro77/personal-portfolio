# Kinetic Obsidian Design System

### 1. Overview & Creative North Star
**Creative North Star: The Kinetic Architect**
Kinetic Obsidian is a design system built for high-performance clarity and editorial sophistication. It rejects the "standard dashboard" aesthetic in favor of a fluid, architectural layout that prioritizes motion and depth. The system is characterized by **intentional asymmetry**, where heavy typographic weights anchor the composition while floating glass elements provide a sense of lightness and technical precision.

The system is designed to feel "built" rather than "templated," utilizing a grid-based background pattern as a subtle nod to blueprinting and precision engineering.

### 2. Colors
Kinetic Obsidian uses a high-fidelity blue palette to communicate trust and technical expertise, complemented by warm tertiary accents for moments of high-intent interaction.

* **Primary (#005dac):** The structural core. Used for main actions and branding.
* **Secondary (#005db7):** Supporting depth, often used for container accents and secondary UI elements.
* **The "No-Line" Rule:** Sectioning is achieved through background transitions (e.g., moving from `surface` to `surface_container_low`) rather than 1px solid borders. If a boundary is absolutely required, use a 15% opacity `outline_variant`.
* **Surface Hierarchy:** Use `surface_container_lowest` (#ffffff) for floating cards to maximize contrast against the `background` (#f8f9fa).
* **Glassmorphism:** Navigation and persistent overlays must use a `backdrop-filter: blur(20px)` with a 70% white opacity fill to maintain context while ensuring legibility.

### 3. Typography
The system employs a dual-font strategy: **Plus Jakarta Sans** for high-impact headlines and **Inter** for precision-focused body and label text.

**Typographic Scale (Derived from Source):**
* **Display/Hero:** 3rem (48px) to 4.5rem (72px) - Extra Bold, Tracking -0.05em.
* **Headlines:** 2.25rem (36px) - Bold, used for section titles.
* **Titles:** 1.5rem (24px) to 1.875rem (30px) - Bold, for card titles.
* **Body:** 1.125rem (18px) - Regular, for primary reading.
* **Labels/Small:** 0.875rem (14px) and 10px - Medium/Bold, for metadata and chips.

The use of **italics** within headlines (e.g., "Kinetic") is encouraged to break the rigid structure and suggest movement.

### 4. Elevation & Depth
Depth is created through "Tonal Layering" rather than traditional drop shadows.

* **The Layering Principle:** Stack `surface_container_lowest` on top of `surface_container_low` to create natural depth.
* **Ambient Shadows:** Based on the source's `shadow-xl`, shadows should be highly diffused: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`.
* **Interactive Elevation:** Elements like buttons and cards should "lift" via a primary-tinted shadow (e.g., `shadow-primary/20`) upon hover to signal interactivity.

### 5. Components
* **Buttons:** Fully rounded (pill-shaped). Primary buttons use a solid fill with no border; secondary buttons use `surface_container_high` with a subtle `outline-variant/15` border.
* **Cards:** 3xl rounded corners (24px). Backgrounds should be `surface_container_lowest`. Transitions must be long (500ms) and fluid.
* **Chips:** Tiny (10px) text, uppercase, tracking-widest. Used to categorize without cluttering the visual field.
* **Navigation:** Floating, glass-morphic bar with internal padding and rounded-full geometry.

### 6. Do's and Don'ts
**Do:**
* Use asymmetric grid layouts (e.g., 5-column vs 7-column splits).
* Incorporate the `bg-grid-pattern` (radial-gradient) in hero sections to establish a technical theme.
* Use grayscale image filters that transition to color on hover for a sophisticated "reveal" effect.

**Don't:**
* Never use sharp 90-degree corners; the minimum roundedness is 8px (0.5rem).
* Avoid standard "Material Blue" defaults; stick to the refined `fidelity` palette.
* Do not use heavy, dark borders for containers; let the color shifts do the work.