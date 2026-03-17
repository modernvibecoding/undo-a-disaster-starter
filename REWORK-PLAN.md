# Rework Plan — Undo a Disaster Cleanly Starter

**Status:** NOT CURRICULUM-READY
**Blocker:** The repository contains no disaster scenarios. It is a clean baseline with 3 linear commits on `main` and no branches.

---

## The Problem

The guided project promises that students will recover from git disasters. But the repo has:
- 3 clean, linear commits
- No branches (only `main`)
- No bad merges, deleted files, or committed secrets

There is nothing to recover from. The learning value is in the recovery, not the destruction. A firefighting exercise needs a fire.

---

## Phase 1: Build the App (before disasters)

The app must be rich enough that the disasters feel realistic. Currently it is too thin (1 component, 1 page). Expand to:

### Files to create

| File | Content |
|------|---------|
| `components/navbar.tsx` | Logo + links to `/`, `/dashboard`, `/status` |
| `components/hero.tsx` | Welcome section with heading + description |
| `components/dashboard-card.tsx` | Reusable stat card (title, value, icon) |
| `components/status-badge.tsx` | Colored badge showing system health |
| `app/page.tsx` | Home page using `<Hero>` and feature list |
| `app/dashboard/page.tsx` | Dashboard with 4 `<DashboardCard>` components |
| `app/status/page.tsx` | Status page with `<StatusBadge>` components |
| `app/layout.tsx` | Root layout wrapping `<Navbar>` + `{children}` |
| `app/api/health/route.ts` | `GET` → `{ status: "ok" }` |

This gives 4 components, 3 pages, 1 API route — enough surface to break meaningfully.

### Commit history after Phase 1

```
commit 1: chore: initial project scaffold
commit 2: feat: add navbar, hero, and home page
commit 3: feat: add dashboard with stat cards
commit 4: feat: add status page and health endpoint
```

All 4 commits on `main`. App builds and runs cleanly at this point.

---

## Phase 2: Stage the Disasters

Build each disaster scenario as real git operations on top of the clean baseline. The order matters — later disasters depend on earlier commits existing.

### Scenario 1: Committed Secret

**Create:**
```bash
# Add a .env file with clearly fake credentials
cat > .env << 'EOF'
DATABASE_URL=postgresql://admin:FAKE_PASSWORD_12345@db.example.com:5432/production
API_SECRET=sk-FAKE-12345-DO-NOT-USE-IN-PRODUCTION
STRIPE_KEY=sk_test_FAKE_abcdef123456
EOF

git add .env
git commit -m "chore: add environment config"
```

**Recovery technique:** `git rm --cached .env` + add `.env` to `.gitignore` + commit. Optionally discuss history rewriting with `git filter-branch` or BFG.

**Why this is NOT in `.gitignore`:** The `.gitignore` file exists but does NOT include `.env`. This is the mistake.

---

### Scenario 2: Bad Commit on Main

**Create:**
```bash
# Delete the components directory and add a broken API route
rm -rf components/
mkdir -p app/api/broken
cat > app/api/broken/route.ts << 'EOF'
export async function GET() {
  // This endpoint references a deleted module
  const { StatusBadge } = await import("@/components/status-badge");
  return Response.json({ status: "broken" });
}
EOF

git add -A
git commit -m "feat: ship new auth system"
```

**Recovery technique:** `git revert <hash>`

**Key teaching moment:** The commit message is misleading — "ship new auth system" — but the actual change deletes components and adds a broken route. Students learn to read diffs, not commit messages.

---

### Scenario 3: Lost Branch via Accidental Deletion

**Create:**
```bash
# Create a feature branch with valuable work
git checkout -b feature/payment-dashboard

# Add a payment dashboard component
mkdir -p components
cat > components/payment-chart.tsx << 'EOF'
export function PaymentChart({ data }: { data: number[] }) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">Payment Volume</h3>
      <div className="flex items-end gap-1 h-32">
        {data.map((value, i) => (
          <div
            key={i}
            className="bg-blue-500 rounded-t w-8"
            style={{ height: `${(value / Math.max(...data)) * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}
EOF

git add components/payment-chart.tsx
git commit -m "feat: add payment volume chart component"

# Add a payment dashboard page
cat > app/payments/page.tsx << 'EOF'
import { PaymentChart } from "@/components/payment-chart";

export default function PaymentsPage() {
  const sampleData = [45, 72, 38, 91, 56, 83, 67];
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Payment Dashboard</h1>
      <PaymentChart data={sampleData} />
    </main>
  );
}
EOF

git add app/payments/page.tsx
git commit -m "feat: add payment dashboard page with chart"

# Go back to main and delete the branch
git checkout main
git branch -D feature/payment-dashboard
```

**Recovery technique:** `git reflog` → find the branch tip → `git checkout -b feature/payment-dashboard <hash>`

**Key teaching moment:** `git branch -D` does not destroy commits. Reflog retains them for ~90 days. Students learn Git almost never loses work.

---

### Scenario 4: Bad Merge with Wrong Resolution

**Create:**
```bash
# Create a feature branch that modifies the status page
git checkout -b feature/status-page-v2

# Rewrite the status page on the branch
cat > app/status/page.tsx << 'EOF'
import { StatusBadge } from "@/components/status-badge";

export default function StatusPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">System Status — v2</h1>
      <div className="grid grid-cols-3 gap-4">
        <StatusBadge service="API Gateway" status="healthy" />
        <StatusBadge service="Database" status="healthy" />
        <StatusBadge service="CDN" status="degraded" />
      </div>
    </main>
  );
}
EOF

git add app/status/page.tsx
git commit -m "feat: redesign status page with grid layout"

# Go back to main and make a CONFLICTING change
git checkout main

cat > app/status/page.tsx << 'EOF'
export default function StatusPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Status</h1>
      <p className="text-red-500">All systems offline. Contact support.</p>
    </main>
  );
}
EOF

git add app/status/page.tsx
git commit -m "refactor: simplify status page"

# Merge with intentionally wrong resolution
# (Accept main's version, discarding the branch's better v2)
git merge feature/status-page-v2 --no-ff -m "Merge branch 'feature/status-page-v2'"
# During conflict resolution: keep main's broken "all systems offline" version
# (Use git checkout --ours app/status/page.tsx && git add && git commit)
```

**Recovery technique:** `git reset --soft HEAD~1` (undo the merge) → `git stash` → `git cherry-pick` the good commits from the feature branch

**Key teaching moment:** Merge conflicts resolved carelessly can discard valuable work. Students learn to inspect merge results before moving on.

---

## Expected Final State

### `git log --oneline --graph --all` should show:

```
*   abc1234 (HEAD -> main) Merge branch 'feature/status-page-v2'
|\
| * def5678 feat: redesign status page with grid layout
* | ghi9012 refactor: simplify status page
|/
* jkl3456 feat: ship new auth system        ← BAD COMMIT (deletes components)
* mno7890 chore: add environment config      ← COMMITTED SECRET
* pqr1234 feat: add status page and health endpoint
* stu5678 feat: add dashboard with stat cards
* vwx9012 feat: add navbar, hero, and home page
* yza3456 chore: initial project scaffold
```

### Branch state:
- `main` — exists, HEAD points to bad merge
- `feature/status-page-v2` — exists (merged, can be deleted after merge)
- `feature/payment-dashboard` — DOES NOT EXIST in `git branch`, only in `git reflog`

### Build state:
- `npm run build` **FAILS** — the bad commit (Scenario 2) deleted `components/` and the bad merge (Scenario 4) left a broken status page. The app is broken.
- After recovering all 4 scenarios, `npm run build` **SUCCEEDS**.

---

## Implementation Order

1. Build the app (Phase 1 commits 1-4) — verify `npm run build` passes
2. Stage Scenario 1 (committed secret) — verify `.env` is tracked
3. Stage Scenario 2 (bad commit) — verify `npm run build` fails
4. Stage Scenario 3 (lost branch) — verify `git branch` does NOT show `feature/payment-dashboard`
5. Stage Scenario 4 (bad merge) — verify merge exists with wrong resolution
6. Full verification pass (see checklist below)

---

## What NOT To Do

- Do not make the disasters trivially obvious (no comments saying `// BUG HERE`)
- Do not make the disasters impossible to recover from
- Do not use `git push --force` to create the scenarios
- Do not require Git knowledge beyond what vibe-04 (Git & Version Control) teaches
- Do not add a `.env` entry to `.gitignore` — the missing entry IS the bug

---

## Estimated Effort

3-4 hours. Most time is spent constructing the git history carefully so each scenario is independently recoverable and the order is realistic.

---

## Verification

After rework, confirm:

- [ ] `npm run dev` fails (app is broken due to Scenario 2 + Scenario 4)
- [ ] `git log --oneline --graph --all` shows a messy but comprehensible history
- [ ] `.env` file is tracked by git (not in `.gitignore`)
- [ ] `components/` directory does not exist on `main` HEAD
- [ ] `git branch` does NOT show `feature/payment-dashboard`
- [ ] `git reflog` DOES show `feature/payment-dashboard` commits
- [ ] Scenario 1 is recoverable: `git rm --cached .env` + `.gitignore` update
- [ ] Scenario 2 is recoverable: `git revert <hash>` restores components
- [ ] Scenario 3 is recoverable: `git reflog` + `git checkout -b` restores the branch
- [ ] Scenario 4 is recoverable: `git reset --soft HEAD~1` + re-merge with correct resolution
- [ ] After recovering all scenarios, `npm run build` succeeds
- [ ] The recovery adds clean commits to the history (no force-push needed)
