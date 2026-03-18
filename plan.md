# Plan — Undo a Disaster Cleanly

> Next.js 15 starter kit

---

## Project Goal

Practice real-world Git recovery workflows: diagnose broken history, revert bad commits, recover deleted work, and restore a codebase to a clean state — all without panicking or force-pushing over team history.

---

## Current Phase

> Update this section as you progress through the course.

- [ ] **Phase 1 — Orient**: Understand the full broken git state (log --graph --all, reflog, branch -a)
- [ ] **Phase 2 — Diagnose**: Identify all 4 disaster scenarios and the correct recovery approach for each
- [ ] **Phase 3 — Recover**: Apply the correct recovery strategy for each scenario, one at a time
- [ ] **Phase 4 — Verify**: Confirm app builds and all scenarios are resolved
- [ ] **Phase 5 — Document**: Write a post-mortem for each disaster: what broke, why, which command fixed it

**Active phase:** Phase 1 — Orient

---

## Todo List

### Orient
- [ ] Run `git log --oneline --graph --all` — map the full commit graph including branches
- [ ] Run `git branch -a` — note all branches (including deleted ones that only appear in reflog)
- [ ] Run `git reflog` — this shows operations `git log` does not; look for lost commits and branches
- [ ] Run `git status` — note current HEAD state and any uncommitted changes

### Diagnose
- [ ] Identify all 4 disaster scenarios before fixing any of them
- [ ] For each: determine the category (tracked secret, bad commit, lost branch, bad merge)
- [ ] For each: choose the correct recovery command before touching anything

### Recover
- [ ] Fix each disaster one at a time; verify each fix before moving to the next
- [ ] Recovery commands (each disaster requires a different one): `git revert`, `git revert -m 1`, `git branch <name> <hash>`, `git rm --cached`
- [ ] After all recoveries: run `npm run build` — it must pass

### Post-mortem
- [ ] For each disaster: write one sentence describing what broke, why, and which command fixed it
- [ ] Commit the post-mortem with a clear message

---

## Notes

> Add decisions, blockers, or context here as you work.
