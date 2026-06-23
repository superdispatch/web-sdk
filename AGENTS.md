# Agents Guide

> Guide for AI coding agents working on this codebase.
> `CLAUDE.md` is a symlink to this file.

---

## 0. Navigation Contract

Agents MUST traverse context in this order:

1. **This file** (`AGENTS.md`) — workflow, structure, key rules
2. **Source files in `src/`** — read the existing module nearest to your change before writing code

---

## 1. Project Overview

`@superdispatch/sdk` — a published TypeScript SDK (`main: src/index.ts`) that
provides shared Super Dispatch domain types, constants, validators, and
formatters (payment methods/terms, customer types, vehicle types, date types).
Each module exports a string union type plus helper functions; everything is
re-exported from `src/index.ts`.

### Prerequisites

| Tool | Version | Source |
|------|---------|--------|
| Node.js | `>=24` | `package.json` `engines` |
| pnpm | `10.25` (CI) | `.github/workflows/main.yml` |
| TypeScript | `5.9.x` | `devDependencies` |

### Key Commands

```bash
pnpm run tsc      # Type-check (tsc, no emit config beyond tsconfig)
pnpm run lint     # Lint via @superdispatch/js-tools (js-tools lint)
pnpm run test     # Run Jest with coverage
pnpm run tdd      # Jest in watch mode
pnpm run build    # Pika build, then scripts/fix-package-json.js
```

CI (`.github/workflows/main.yml`) runs, in order: `tsc`, `lint`, `test`,
Codecov upload, `build`.

### Directory Structure

```
src/
├── index.ts                 # Barrel — re-exports every public module
├── CustomerType.ts          # Domain type + helpers
├── DateType.ts
├── LoadPaymentMethod.ts
├── LoadPaymentTerm.ts
├── PaymentMethod.ts
├── PaymentTerm.ts
├── VehicleType.ts
├── internal/                # Private helpers (not part of public surface)
│   └── toStartCase.ts
└── __tests__/               # Jest specs, one per module (*.spec.ts)
scripts/
└── fix-package-json.js      # Post-build package.json fixup
```

---

## 2. Code Conventions (Key Rules)

Documented from the existing source — follow the patterns already in `src/`.

| Rule | Evidence |
|------|----------|
| Domain values are **string union `type`s**, not enums | `PaymentMethod`, `VehicleType`, etc. |
| **Named exports only** — no default exports | every module + `src/index.ts` |
| Constant arrays are `UPPER_SNAKE_CASE` and typed | `ALL_PAYMENT_METHODS: PaymentMethod[]` |
| Validators are **type guards** named `isValid<Name>` | `isValidPaymentMethod(input): input is PaymentMethod` |
| Formatters named `format<Name>`, accept `unknown`, take a `{ fallback }` option | `formatPaymentMethod(input, { fallback = 'Unknown' })` |
| Deprecations use `@deprecated` JSDoc / comment pointing at the replacement | `PAYMENT_METHODS`, `listPaymentMethods()` |
| Shared internal helpers live in `src/internal/` | `toStartCase.ts` |
| New public modules are re-exported from `src/index.ts` | barrel file |
| Formatting/lint | Prettier (`@superdispatch/prettier-config`) + ESLint (`@superdispatch/eslint-plugin`), enforced on commit via `lint-staged` |

---

## 3. Testing Rules (Key Rules)

| Rule | Evidence |
|------|----------|
| Framework | Jest 28 (`@types/jest`), run with `--coverage` |
| Test match | `**/__tests__/**/*.spec.ts` (`package.json` jest config) |
| Location | One spec per module in `src/__tests__/` |
| Style | `it('...')` blocks, snapshot assertions via `toMatchInlineSnapshot` |
| Ignored paths | `/pkg/`, `/node_modules/` |

Run a single file: `pnpm run test -- PaymentMethod`.

---

## 4. Build & Publish (Key Rules)

- **Build pipeline:** Pika (`@pika/pack`) — standard pkg + node + web + types
  builds, excluding `__tests__/**` and `__testutils__/**` (see `@pika/pack`
  config in `package.json`).
- **Post-build:** `scripts/fix-package-json.js` adjusts the generated package.
- **Release:** `pnpm run release` publishes `./pkg` to the npm registry
  (`publishConfig.registry`). `prerelease` reinstalls, lints, type-checks, builds.
- Package is MIT-licensed and public (`private: false`).

---

## 5. Agent Workflow

1. **Create a branch** — never commit directly to `master`; one branch per logical change.
2. **Read context** — this file first, then the existing module closest to your change.
3. **Find similar code** — mirror an existing module (e.g. `PaymentMethod.ts`) for type + guard + formatter shape; add the matching `*.spec.ts`.
4. **Generate** — follow the conventions in Section 2; re-export new public modules from `src/index.ts`.
5. **Test & type-check** — run `pnpm run test` and `pnpm run tsc`; verify output before claiming done.
6. **Lint** — run `pnpm run lint` (auto-fixed on commit via `lint-staged`); fix all errors.
7. **Self-review & submit** — review `git diff`, commit (never `--no-verify`), open a pull request.

---

## 6. Git Conventions

The repo does not document a commit-message format. Use a clear branch-and-PR flow:

- **Never commit directly to `master`** — work on a dedicated branch.
- **PRs required** — all changes merge through pull requests; CI must pass.
- **`.husky/pre-commit`** runs `pnpm lint-staged`; do not bypass with `--no-verify`.
- **Code ownership:** `@superdispatch/web` (see `.github/CODEOWNERS`).
