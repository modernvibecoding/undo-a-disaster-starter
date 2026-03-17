# Undo a Disaster Cleanly

**Guided Project ID:** vibe-gp-02
**Path Order:** 6
**Prerequisite:** vibe-04 (Git & Version Control Using AI)

---

## Why This Project Exists

AI tools generate code fast. Sometimes they generate the wrong code. Sometimes they delete things you needed. Sometimes a merge goes sideways. The only reliable safety net is Git — but only if you know how to use it under pressure.

This project puts you in the middle of a git disaster and asks you to recover without force-pushing, without deleting your repo, and without panicking.

---

## What You Are Doing

You clone a repository that has already been damaged. The git history contains bad commits, broken merges, deleted files, and possibly leaked secrets. Your job is to use Git commands — not file editing — to recover the codebase to a clean, working state while preserving a readable commit history.

---

## Starting Point

Clone the repo. Run `git log --oneline --graph --all`. You will see a messy history with multiple problems. The app may not build. Files may be missing. The history tells the story of what went wrong — your job is to read it, understand it, and fix it.

---

## Definition of Done

- The app builds and runs correctly (`npm run dev`)
- All intentionally deleted files are restored
- Bad commits are reverted (not erased — the history should show both the mistake and the fix)
- No force-pushes were used
- `git log --oneline` tells a clean story: what happened, when, and how it was fixed
- You have written a short post-mortem explaining each recovery

---

## Non-Goals

- Do not build new features
- Do not rewrite code by hand (recover using Git commands)
- Do not use `git push --force`
- Do not delete the repo and start over
- Do not edit files to fix bugs — this is a Git exercise, not a coding exercise

---

## Complexity Guardrails

- There are 3-4 disaster scenarios in the repo
- Each scenario requires a different Git command (revert, reset, reflog, cherry-pick, restore)
- If you find yourself editing source files, you are solving the wrong problem
- The entire project should take 45-90 minutes

---

## Expected Deliverable

1. A clean, building repository with all disasters recovered
2. A readable `git log` that tells the story of what went wrong and how it was fixed
3. A post-mortem document listing each disaster, the Git command used, and why

---

## Bite-Sized Steps

1. **Orient** — Run `git log --oneline --graph --all`, `git status`, `git branch -a` to understand the damage
2. **Disaster 1** — Identify and revert a bad commit on main (use `git revert`)
3. **Disaster 2** — Recover a deleted/lost branch (use `git reflog` + `git checkout`)
4. **Disaster 3** — Resolve a bad merge that introduced conflicts (use `git reset` + `git cherry-pick`)
5. **Verify** — Confirm the app builds, the history is clean, and write the post-mortem

---

## IMPORTANT: This Starter Requires a Rebuild

See `REWORK-PLAN.md`. The current repository does NOT contain pre-staged disaster scenarios. It is a clean baseline with 3 linear commits and no branches. The entire pedagogical content — the git disasters — must be created before this guided project can be used.

Do NOT use this starter in curriculum production until the rework is complete.
