<!-- Copilot instructions for AI coding agents working on this repo -->
# Copilot instructions — Next.js + Sanity monorepo

Purpose: short, actionable guidance so AI agents can be immediately productive.

- **Big picture**: This is a two-workspace monorepo (root `workspaces`: `frontend`, `studio`).
  - `frontend` is a Next.js 15 App Router site (`frontend/app`) that consumes Sanity content.
  - `studio` is a Sanity Content Studio (schemas in `studio/src/schemaTypes`) used to model content.
  - Content flows from Sanity -> Live Content API -> `frontend` via `frontend/sanity/lib` helpers.

- **Key locations**:
  - **Frontend app**: `frontend/app` and `frontend/app/components` (UI + PortableText renderer: `PortableText.tsx`).
  - **Sanity client + config**: `frontend/sanity/lib/client.ts`, `frontend/sanity/lib/api.ts`, `frontend/sanity/lib/token.ts`.
  - **Sanity schemas**: `studio/src/schemaTypes/*` (documents, objects, singletons).
  - **Portable Text schema**: `studio/src/schemaTypes/objects/blockContent.tsx` and renderer `frontend/app/components/PortableText.tsx`.

- **Dev workflows / important scripts** (run from repo root unless noted):
  - **Start both**: `npm run dev` — runs `frontend` + `studio` in parallel (uses workspaces).
  - **Frontend only**: `npm run dev --workspace=frontend` or from `frontend`: `npm run dev` (uses Turbopack).
  - **Studio only**: `npm run dev --workspace=studio` or from `studio`: `npm run dev` (uses `sanity dev`).
  - **Build frontend**: run `npm run build` in `frontend` (prebuild runs `sanity typegen`).
  - **Build studio**: run `npm run build` in `studio` (invokes `sanity build`).
  - **Deploy studio**: `npm run deploy` from `studio`.
  - **Import sample data**: `npm run import-sample-data` (root — runs `sanity dataset import` in `studio`).
  - **Type checks / lint**: `npm run type-check` (root runs across workspaces), `npm run lint` (frontend).

- **Environment & secrets** (must be present for local dev & CI):
  - `NEXT_PUBLIC_SANITY_DATASET` — dataset name (see `frontend/sanity/lib/api.ts`).
  - `NEXT_PUBLIC_SANITY_PROJECT_ID` — Sanity project id (see `frontend/sanity/lib/api.ts`).
  - `NEXT_PUBLIC_SANITY_API_VERSION` — optional API version; defaults in `api.ts`.
  - `NEXT_PUBLIC_SANITY_STUDIO_URL` — URL used for edit links / presentation mode.
  - `SANITY_API_READ_TOKEN` — used by server-only Sanity client (`frontend/sanity/lib/token.ts`).

- **Patterns & conventions (project-specific)**:
  - **Keep `frontend` bundles small**: `frontend/sanity/lib/api.ts` intentionally avoids heavy imports — follow this when adding helpers used in client bundles.
  - **Schema-first flow**: Update `studio` schemas in `studio/src/schemaTypes` and then run typegen/extract commands:
    - `frontend` relies on `sanity typegen generate` (`frontend` `predev`/`prebuild` hooks).
    - `studio` runs `sanity schema extract` via `npm run extract-types` (`prebuild`).
  - **Portable Text**: Portable Text schema lives in studio and is rendered in `frontend/app/components/PortableText.tsx`. When editing block schema, update renderer accordingly.
  - **Server-only code**: files that import secrets use `server-only` (see `frontend/sanity/lib/token.ts`). Avoid moving secret access into client bundles.
  - **Presentation / Live editing**: Edit links rely on `NEXT_PUBLIC_SANITY_STUDIO_URL` and `studioUrl` in `frontend/sanity/lib/api.ts`.

- **Integration points to watch**:
  - `next-sanity` client in `frontend/sanity/lib/client.ts` — configuration changes affect published vs draft perspectives.
  - Live Content API / Presentation Tool usage — changes to edit link logic or preview routes may require updating both `frontend` and `studio` (search for `studioUrl`).

- **What AI agents should not change without verification**:
  - Do not rename schema types or fields without updating any `groq` queries in `frontend/sanity/lib/queries.ts` and usages in `frontend/app`.
  - Avoid moving or removing `sanity typegen` or `schema extract` steps; CI and dev rely on these.
  - Do not expose `SANITY_API_READ_TOKEN` to client-side code.

If something above is unclear or you want more examples (e.g., common GROQ queries, or how Presentation Mode links are built), tell me which area to expand and I will iterate.
