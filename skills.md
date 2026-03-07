# Skills & Context — Undo a Disaster Cleanly

> Next.js 15 starter kit

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.2.4 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | v4 |
| Runtime | React | 19 |
| Version Control | Git | — |

**Key constraint:** The primary skill being practiced is Git history management, not feature development. Resist the urge to fix things by rewriting files directly — always recover through Git commands.

---

## Git Recovery Reference

| Situation | Correct Command |
|---|---|
| Undo the last commit (keep changes) | `git reset --soft HEAD~1` |
| Undo the last commit (discard changes) | `git reset --hard HEAD~1` |
| Safely undo a published commit | `git revert <commit-hash>` |
| Discard unstaged changes to a file | `git restore <file>` |
| Recover a deleted file from history | `git checkout <commit-hash> -- <file>` |
| Find when a line was introduced | `git log -S "search term"` |
| See the full history with graph | `git log --oneline --graph --all` |

---

## Coding Standards

### File & Folder Structure
- Pages in `app/` (App Router), components in `components/`, utilities in `lib/`
- Do not reorganize files unless the course explicitly instructs it
- `docs/` contains course reference material — read-only

### Naming Conventions
- Components: `PascalCase`
- Functions and variables: `camelCase`
- Git commit messages: imperative mood, present tense (e.g., `fix: restore missing nav component`)

### Commit Message Format
```
<type>: <short description>

<optional body explaining why>
```
Types: `fix`, `feat`, `revert`, `chore`, `docs`

---

## AI Instructions

When assisting with this project, follow these rules:

1. **Git-first mindset** — Always recommend a Git-based recovery over manually editing files to patch the symptom.
2. **Explain the command** — Before suggesting any `git reset`, `revert`, or `restore` command, explain what it does and whether it is destructive.
3. **No force-push suggestions** — Never suggest `git push --force` unless the developer explicitly owns the branch alone and understands the consequences.
4. **Preserve existing structure** — Do not reorganize `app/`, `components/`, or `lib/` unless instructed.
5. **TypeScript strictness** — All props typed, no `any`.
6. **Tailwind only** — No new CSS files or inline styles.
7. **Minimal changes** — When recovering, make the smallest possible change that restores correct behavior.
