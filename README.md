# hr-consultancy-website
hr-consultancy-website

# hr-consultancy-website
hr-consultancy-website

# HR Consultancy Website

Premium frontend for an HR consultancy (recruitment, training, compliance).

**Stack:** TanStack Start · TanStack Router · React · TypeScript · Tailwind CSS v4 · shadcn-style UI · Netlify adapter

## Prerequisites

- [Bun](https://bun.sh) (recommended) or Node 20+
- Git

## Setup

```bash
bun install
# or: npm install --legacy-peer-deps
```

## Development

```bash
bun run dev
```

Open http://localhost:3000

## Build & preview

```bash
bun run build
bun run preview
```

## Typecheck

```bash
bun run typecheck
```

## Netlify

The project includes `@netlify/vite-plugin-tanstack-start`.

```bash
# optional local Netlify CLI
netlify init   # if needed
netlify deploy
netlify deploy --prod
```

`netlify.toml` (if present) or the plugin configures build output.

## Project structure

```
src/
  components/ui/     # primitives (button, etc.)
  features/          # domain folders (extend as needed)
  lib/               # utils
  routes/            # thin route files
  styles.css         # design tokens + Tailwind
  router.tsx
  routeTree.gen.ts
```

## Routes

- `/` — Home
- `/services` — Services
- `/case-studies` — Case Studies
- `/employer` — Employer
- `/contact` — Contact (form with local states)
- `/project-notes` — Project documentation (rendered)

## Theme

Light / dark toggle in the header. Tokens live in `src/styles.css` only.

## Notes

- No backend. Contact form is frontend-only.
- Design concept: **Precision Trust Lattice**.
- See `/project-notes` or `project-notes.md` for full design & architecture notes.
