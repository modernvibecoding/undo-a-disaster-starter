# Disaster Scenario Guide

This repository has been intentionally damaged. There are **4 disaster scenarios** staged in the git history. Each one requires a different Git recovery technique.

---

## How to Start

Run these commands to understand the current state:

```bash
git log --oneline --graph --all
git status
git branch -a
git reflog
```

Read the output carefully. Every commit message, branch name, and reflog entry tells part of the story.

---

## What to Look For

The 4 disasters fall into these categories:

1. **Something is tracked that should not be** — A file that should be in `.gitignore` was committed. How do you remove it from tracking without losing the file?

2. **A bad commit broke the app** — A commit deleted files the app depends on. The commit message may be misleading. How do you undo a commit while preserving history?

3. **A branch was deleted** — Work was done on a branch, then the branch was deleted. The commits still exist somewhere. How do you recover them?

4. **A merge went wrong** — Two branches diverged and were merged, but the wrong version of a file was kept. How do you fix a bad merge resolution?

---

## Rules

- Use Git commands to recover. Do not manually edit source files.
- Do not use `git push --force`.
- Do not delete the repo and start over.
- Preserve the history — show both the mistake and the recovery.

---

## Verification

When all 4 disasters are recovered:

```bash
npm install
npm run build    # should succeed
npm run dev      # should load in browser
```

Run `git log --oneline --graph --all` one final time. The history should tell a clear story.
