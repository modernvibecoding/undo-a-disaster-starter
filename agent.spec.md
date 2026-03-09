# Undo a Disaster Cleanly — Agent Specification

## What This Project Teaches

A Git disaster recovery exercise. Students learn to intentionally break a codebase via a commit,
then reverse the disaster using `git revert` or `git reset` — keeping the commit history clean and intact.
This is not a build project. The "output" is a readable git log that tells a story.

## Stack

Next.js 15 · TypeScript · Git · GitHub

## Student Prompt

Copy and paste this into Claude Code (or your AI tool of choice):

---

I have a Next.js 15 starter with a clean baseline commit. I need to practice Git disaster recovery.

Help me run through this exercise step by step:

**Step 1 — Verify the baseline:**
Check that the repo is clean with `git status` and `git log --oneline`. The first commit message should read `feat: clean baseline`.

**Step 2 — Introduce a disaster commit:**
Create a new branch called `disaster/bad-deploy`. Make a commit that simulates a production disaster:
- Delete the `components/` directory entirely
- Add a broken API route at `app/api/broken/route.ts` that `throw new Error("💥 fatal: auth tokens expired")` on every request
- Commit with message: `feat: ship new auth system` (intentionally misleading, like a real bad deploy)

**Step 3 — Reverse it cleanly:**
Without force-pushing or rewriting history, reverse the disaster commit so the `main` branch is clean again.
Use `git revert` (not `git reset --hard`) so the history shows both the bad commit and the revert.

**Step 4 — Verify the result:**
Run `git log --oneline` and confirm the output shows three commits:
1. `revert: revert bad auth deploy`
2. `feat: ship new auth system`
3. `feat: clean baseline`

That is a clean git log that tells the whole story. That is the goal.

---

## Checklist

- [ ] Clean baseline commit created
- [ ] Breaking change introduced in a new commit
- [ ] Disaster reversed cleanly — history intact

## Key Files

- `app/page.tsx` — Exercise progress tracker
- `docs/disaster-scenario.md` — Step-by-step exercise guide
- `README.md` — Quick start guide
