# Project Notes — HR Consultancy Website

## Overview

Frontend for an HR consultancy providing recruitment, training and compliance services. Emphasises professionalism, trust and efficiency.

**Project name:** `hr-consultancy-website`  
**Design concept:** Precision Trust Lattice

## Design system

- **Typography:** Inter (body), Instrument Serif (display)
- **Colour:** Semantic CSS variables in `src/styles.css`. Primary is a refined deep teal-indigo.
- **Themes:** Light and dark via `.dark` class on `html`.
- **Radius / spacing:** Consistent token-driven values.
- **No hard-coded colours in components.**

## Architecture

- Feature-oriented folders under `src/features` (extend as needed).
- Thin route files in `src/routes` that only register routes and render page content.
- Shared UI in `src/components`.
- Tokens only in global stylesheet.

## Pages

1. Home — hero, value pillars, CTA
2. Services — service cards with tags
3. Case Studies — outcome stories with metrics
4. Employer — engagement models and outcomes
5. Contact — inquiry form (local success/error) + map + details
6. Project Notes — this documentation rendered at `/project-notes`

## Animation

Restrained fade/hover micro-interactions. No cursor gimmicks.

## Commands

```bash
bun install
bun run dev
bun run build
bun run typecheck
```

## Netlify

Uses `@netlify/vite-plugin-tanstack-start`. Deploy with Netlify CLI after `bun run build`.

## Limitations

No real backend. Form does not persist data.
