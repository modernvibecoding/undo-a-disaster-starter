# Plan — Undo a Disaster Cleanly

> Next.js 15 starter kit

---

## Project Goal

Practice real-world Git recovery workflows: diagnose broken history, revert bad commits, recover deleted work, and restore a codebase to a clean state — all without panicking or force-pushing over team history.

---

## Current Phase

> Update this section as you progress through the course.

- [ ] **Phase 1 — Orient**: Understand the current broken git state (log, diff, status)
- [ ] **Phase 2 — Diagnose**: Identify what went wrong and when it was introduced
- [ ] **Phase 3 — Recover**: Apply the correct recovery strategy (revert, reset, restore, stash)
- [ ] **Phase 4 — Verify**: Confirm app is functional after recovery
- [ ] **Phase 5 — Document**: Write a short post-mortem explaining what happened and how it was fixed

**Active phase:** Phase 1 — Orient

---

## Todo List

### Orient
- [ ] Run `git log --oneline` and identify the last known-good commit
- [ ] Run `git status` and `git diff` to understand current changes
- [ ] Map out which files are broken and why

### Diagnose
- [ ] Identify the commit(s) that introduced the problem
- [ ] Determine whether the issue is: bad commit, deleted file, merge conflict, or corrupted state
- [ ] Choose the correct recovery approach before touching anything

### Recover
- [ ] Apply recovery (use one of: `git revert`, `git reset`, `git restore`, `git stash pop`)
- [ ] Confirm the app runs correctly after recovery
- [ ] Verify no good work was lost

### Post-mortem
- [ ] Write a brief explanation: what broke, why, how it was fixed
- [ ] Note which Git command was the right tool for this situation
- [ ] Commit the fix with a clear, descriptive message

---

## Notes

> Add decisions, blockers, or context here as you work.
