# Undo a Disaster Cleanly — Validation Checklist

**Project ID:** vibe-gp-02

---

## Required (all must pass)

| # | Check | How to verify |
|---|-------|---------------|
| 1 | App builds | `npm run build` completes without errors |
| 2 | App runs | `npm run dev` → app loads at `localhost:3000` |
| 3 | All pages render | Visit every route — no broken imports or blank pages |
| 4 | Components restored | All originally deleted components exist and render |
| 5 | Bad commits reverted | `git log` shows revert commits (not erased history) |
| 6 | No force-push | `git reflog` shows no `push --force` operations |
| 7 | Sensitive files handled | No real secrets remain tracked in git |
| 8 | Clean history | `git log --oneline` tells a readable story of disaster + recovery |

## Post-Mortem Checklist

Your post-mortem should address each disaster scenario:

| # | Section | Content |
|---|---------|---------|
| 1 | What happened | One-sentence description of the problem |
| 2 | How you found it | Which Git command revealed the issue |
| 3 | How you fixed it | Which Git command(s) you used to recover |
| 4 | Why it works | Brief explanation of why that approach is correct |

## Self-Assessment

After completing all recoveries, answer:

1. Which disaster was the hardest to identify? Why?
2. Which Git command did you use most? Why is it useful?
3. How would you prevent each disaster from happening in a real project?

## Stretch (optional)

- [ ] Run `git log --oneline --graph --all` and confirm the graph looks clean
- [ ] Add a `.gitignore` rule to prevent the sensitive file scenario from recurring
- [ ] Write a one-paragraph "what I learned" reflection
