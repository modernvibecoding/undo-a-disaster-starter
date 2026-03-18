# Undo a Disaster Cleanly — Student Guide

**Project ID:** vibe-gp-02
**Time estimate:** 45-90 minutes
**Prerequisite:** vibe-04 (Git & Version Control Using AI)
**Repo:** `undo-a-disaster-starter`

---

## Overview

You inherit a repository that has already been damaged. The git history contains bad commits, broken merges, deleted files, and leaked configuration. Your job is to use Git commands to recover the codebase to a clean, working state — without force-pushing, without deleting the repo, and without manually editing files.

This is a Git exercise, not a coding exercise.

---

## Why This Project Exists

AI tools generate code fast. Sometimes they generate the wrong code. Sometimes they delete things you needed. Sometimes a merge goes sideways and nobody notices until production breaks. Git is the only reliable safety net — but only if you know how to use it under pressure.

This project puts you in that pressure situation. You will learn more about Git recovery in 90 minutes of hands-on work than in hours of reading documentation.

---

## What You Are Expected to Do

1. Clone the starter repo
2. Investigate the damage using Git commands (`git log`, `git status`, `git reflog`, `git branch`, `git diff`)
3. Identify each disaster scenario
4. Recover from each one using the appropriate Git command
5. Verify the app builds and runs
6. Write a post-mortem documenting each recovery

---

## Starting Point

```bash
git clone https://github.com/modernvibecoding/undo-a-disaster-starter.git
cd undo-a-disaster-starter
npm install
```

Then run these commands to understand the situation:

```bash
git log --oneline --graph --all
git status
git branch -a
git reflog
```

The history will look messy. That is intentional. Read it carefully — every commit message and branch tells part of the story.

The app will NOT build in its current state. That is expected.

---

## Steps

### Step 1: Orient (10 min)
Run the diagnostic commands above. Draw a mental map of what happened. How many branches exist? What does the commit graph look like? Are any files missing? Is anything tracked that should not be?

### Step 2: Identify the disasters (15 min)
There are 4 disaster scenarios in this repo. Each one requires a different recovery technique. Do not start fixing until you understand all of them. Write down what you think each problem is.

### Step 3: Recover — one at a time (30-45 min)
Work through each disaster independently. For each one:
- Identify the problem
- Choose the right Git command
- Execute the recovery
- Verify the recovery worked before moving to the next one

**Important:** The order you tackle them matters less than being methodical. Fix one thing completely before starting the next.

### Step 4: Verify (10 min)
After all recoveries:
```bash
npm install
npm run build
npm run dev
```
The app should build without errors and display correctly in the browser.

### Step 5: Post-mortem (10 min)
Write a brief document listing each disaster:
- What was the problem?
- What Git command did you use?
- Why did that command work?

---

## Definition of Done

- [ ] The app builds and runs correctly (`npm run dev`)
- [ ] All intentionally deleted files are restored
- [ ] Bad commits are reverted (not erased — the history shows both the mistake and the fix)
- [ ] No force-pushes were used
- [ ] `git log --oneline` tells a clean story: what happened, when, and how it was fixed
- [ ] Post-mortem document is written

---

## Non-Goals

- Do not build new features
- Do not rewrite code by hand — recover using Git commands
- Do not use `git push --force`
- Do not delete the repo and start over
- Do not edit source files to fix bugs — this is a Git exercise

---

## Common Failure Points

1. **Jumping straight to fixes** — You start reverting things before understanding the full picture. Always orient first.
2. **Using force-push** — This destroys history. The whole point is recovering while preserving what happened.
3. **Editing files manually** — If you are opening a `.tsx` file and typing code, you are solving the wrong problem. Use Git.
4. **Forgetting the reflog** — `git reflog` is your most powerful recovery tool. It shows operations that `git log` does not.
5. **Fixing in the wrong order** — Some recoveries depend on others. If you get stuck, reconsider the order.

---

## Useful Git Commands

These are the tools available to you. You will not need all of them, but each disaster requires at least one:

| Command | What it does |
|---------|-------------|
| `git log --oneline --graph --all` | Visualize the full commit history |
| `git reflog` | Show all recent HEAD movements (including deleted branches) |
| `git revert <hash>` | Create a new commit that undoes a previous commit |
| `git reset --soft <hash>` | Move HEAD back, keep changes staged |
| `git checkout <hash> -- <file>` | Restore a specific file from a specific commit |
| `git branch <name> <hash>` | Create a branch at a specific commit |
| `git cherry-pick <hash>` | Apply a specific commit to the current branch |
| `git diff <hash1> <hash2>` | Compare two commits |
| `git show <hash>` | Show what a specific commit changed |

---

## Final Deliverable

1. A clean, building repository with all disasters recovered
2. A readable `git log` that tells the story of what went wrong and how it was fixed
3. A post-mortem document (can be a simple `.md` file in the repo)
