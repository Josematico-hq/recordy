# Gemini Context

This file contains context and instructions for the Gemini agent working on this project.

## Strict Rules
- **No Bypassing Quality/Security Checks**: It is STRICTLY FORBIDDEN to bypass code rules, tests, or any quality system and security mechanisms just "to make something work". If a rule is being violated, you MUST analyze why. If the rule guards security or best practices, it MUST NOT be bypassed or modified. Instead, the feature/code/solution MUST be improved to comply.

## Git Workflow
- **Conventional Commits**: All git commit messages MUST follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
  - Format: `<type>(<scope>): <description>`
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
  - Example: `feat(auth): add login functionality`

## Quality Control
- **Static Analysis**: It is MANDATORY to perform static code analysis (linting/formatting) before marking any code-related task (creation, modification, deletion) as complete.
  - Run `bun check` (or equivalent) to verify.
- **Zero Comments Policy**: Comments in code are FORBIDDEN. Code MUST be self-documenting through strict adherence to Clean Code principles (descriptive naming, single-responsibility functions, early returns).
  - If you feel the need to write a comment, first try to refactor the code to make the comment unnecessary.
  - Exceptions: Documentation comments (JSDoc) for public APIs are allowed.

## Package Manager
- **Bun**: It is MANDATORY to use [Bun](https://bun.sh/) as the package manager.

## Frontend Architecture Standards

### 1. Structure & Organization
- **Feature-Based Slices**: Code MUST be organized by feature (e.g., `src/features/recorder/`), keeping related UI, logic, and services together.
- **Shared UI**: Generic, reusable UI components (like shadcn/ui) reside in `src/shared/ui` or `src/components/ui`.

### 2. UI Composition (Dumb Components)
- **Separation of Concerns**: UI components MUST remain "dumb". They receive data via props and emit events via callbacks.
- **No Business Logic**: UI components MUST NOT contain complex business logic or directly access backend services.
- **Compound Components**: Prefer compound component patterns (e.g., `<Bar><Item /><Item /></Bar>`) over monolithic components with excessive configuration props.

### 3. State & Logic (Smart Hooks)
- **Custom Hooks**: Business logic and state management MUST be encapsulated in custom hooks (e.g., `useRecorder.ts`).
- **Controller Pattern**: Use hooks as "controllers" that link the UI to the service layer.

### 4. Tauri Integration (Service Layer)
- **No Direct Invokes**: UI Components MUST NOT import or call `@tauri-apps/api/*` directly.
- **Service Layer**: All interaction with Rust/Tauri MUST be routed through a typed service layer (e.g., `src/services/recorder-api.ts`).
- **Interfaces**: Define TypeScript interfaces for all data exchanged with the backend.