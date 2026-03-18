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

This repo contains a deliberately damaged git history. Your job:

1. Run `git log --oneline --graph --all` — read the history and understand what went wrong
2. Identify each of the 4 disaster scenarios staged in the repo
3. Recover each one cleanly using Git commands — no manual file editing
4. Write a post-mortem documenting what you found and how you fixed it

See `docs/disaster-scenario.md` for the full scenario guide.
