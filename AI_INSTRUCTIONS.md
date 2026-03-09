# AI Instructions — Universal Development Rules

These instructions apply to every AI model working in this repository.
**Read this file before generating any code.**

---

## Architecture Rules

1. **Server-first** — Default to React Server Components. Only use `"use client"` when strictly required: event handlers, browser APIs, or interactive state that cannot live on the server.
2. **Server Actions for mutations** — All data writes must go through `app/actions/` using `"use server"` directives. No client-side `fetch` for mutations.
3. **No `useEffect` for data fetching** — Fetch data in Server Components or via Server Actions only. `useEffect` is for side effects (subscriptions, DOM measurements), not data loading.
4. **Co-locate by feature** — Components live next to the route that owns them. Only move to `components/` when shared across two or more routes.

## Code Quality Rules

5. **TypeScript strict mode** — `tsconfig.json` has `"strict": true`. Never use `any` without an explicit comment explaining why it is unavoidable.
6. **Biome over ESLint** — Use `biome check .` for linting and `biome format --write .` for formatting. Do not install ESLint, Prettier, or any other formatter.
7. **Path aliases** — Use `@/` for all internal imports. Never use relative paths like `../../../components`.
8. **No barrel files** — Import directly from the source file, not via `index.ts` re-exports.

## Tailwind v4 Rules

9. **No `tailwind.config.ts`** — All theme configuration lives in `app/globals.css` via the `@theme {}` block.
10. **CSS variables for design tokens** — Define all colors, radii, and shadows in `:root {}`. Reference them in `@theme {}` to generate Tailwind utility classes.
11. **No hardcoded hex colors in `className`** — Use token classes (`text-gold`, `bg-surface`) or CSS variables via `style={{ color: "var(--gold)" }}`.

## File Structure

```
app/
  layout.tsx          ← root layout with font loading
  page.tsx            ← home route
  actions/            ← server actions ("use server")
  api/                ← API routes (webhooks, health checks only)
  (feature)/          ← feature route groups

components/
  ui/                 ← primitive, reusable UI components
  [feature]/          ← feature-specific components

lib/
  db.ts               ← database client (singleton)
  auth.ts             ← auth helpers
  utils.ts            ← shared pure utilities
```

## Security Rules

12. **Validate all inputs** — Use Zod schemas for all form and API input validation. Never trust user-supplied data.
13. **No secrets in the client** — Variables prefixed with `NEXT_PUBLIC_` are public. All sensitive API keys must be server-only (no `NEXT_PUBLIC_` prefix).
14. **RLS on all tables** — Every Supabase table must have Row Level Security enabled before the project ships.

## What NOT To Do

- ❌ Do not use the `any` type
- ❌ Do not use `useEffect` for data fetching
- ❌ Do not leave `console.log` statements in production code
- ❌ Do not install Prettier — Biome handles formatting
- ❌ Do not create `index.ts` barrel files
- ❌ Do not hardcode colors or spacing values that should be design tokens
- ❌ Do not add `"use client"` to a component just because it is easier

