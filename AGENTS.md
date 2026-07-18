# AGENTS.md

## Project purpose

This is a standalone Vite and TypeScript index for university-facing interactive differential
equations resources. It must remain a static, backend-free site that deploys safely at a GitHub
Pages repository subpath.

## Catalog invariants

- Keep explorer data in the typed catalog in `src/catalog.ts`.
- Preserve the current card order: Scalar ODE Explorer, then Phase Portrait Explorer.
- Use the canonical destinations already recorded in the catalog. Each complete card is a semantic
  same-tab link to its corresponding visualization.
- Maintain a formal academic tone suitable for university students.
- Keep the site light-only. Do not add theme persistence, dark variables, or a theme toggle.
- Preserve visible keyboard focus, reduced-motion support, and layouts down to 320 px.

## Architecture and assets

- Keep page construction, the About disclosure, and MathML/KaTeX rendering in `src/app.ts`.
- Keep visual styling and responsive behavior in `src/styles/main.css`.
- Preserve Vite's relative `base: "./"` so the build works beneath `/ExploreDifferentialEquations/`.
- Card previews live in `public/previews/` as 960 × 540 WebP files. Keep them local and optimized.
- Add future applications through `src/catalog.ts`; the grid will adopt a third desktop column
  automatically when enough cards are present.

## Development and verification

- Use Node.js `>=22.12 <25`.
- Install reproducibly with `npm ci` and start locally with
  `npm run dev -- --host 127.0.0.1 --port 4173`.
- Run `npm test` for catalog invariants and `npm run build` for strict TypeScript plus production build.
- Run `npm run test:browser` for link, image, layout, disclosure, motion, overflow, and browser-error checks.
- Store temporary browser-review artifacts under `output/playwright/`.

