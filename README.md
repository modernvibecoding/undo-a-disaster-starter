# undo-a-disaster-starter

A Next.js starter for practising real-world Git recovery workflows.

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- Git

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What to Practice

This repo has a working app and a staged git history. Your job:

1. Run `git log --oneline` — understand the current state
2. Introduce a "bad" commit (broken code, wrong merge, deleted file)
3. Recover cleanly using the correct Git command — no manual file editing
4. Document what you used and why

## Git Recovery Reference

| Situation | Command |
|---|---|
| Undo last commit, keep changes | `git reset --soft HEAD~1` |
| Undo last commit, discard changes | `git reset --hard HEAD~1` |
| Safely undo a published commit | `git revert <hash>` |
| Recover a deleted file | `git checkout <hash> -- <file>` |
| Discard unstaged changes | `git restore <file>` |
