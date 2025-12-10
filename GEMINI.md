# Gemini Context

This file contains context and instructions for the Gemini agent working on this project.

## Git Workflow
- **Conventional Commits**: All git commit messages MUST follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
  - Format: `<type>(<scope>): <description>`
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
  - Example: `feat(auth): add login functionality`

## Quality Control
- **Static Analysis**: It is MANDATORY to perform static code analysis (linting/formatting) before marking any code-related task (creation, modification, deletion) as complete.
  - Run `bun check` (or equivalent) to verify.
