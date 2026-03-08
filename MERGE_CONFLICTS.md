# Merge Conflict Quick Guide (without losing code)

If you see lines like:

```txt
<<<<<<< HEAD
...
=======
...
>>>>>>> branch-name
```

you do **not** need to delete real code. You only remove the conflict markers after choosing or combining both sides.

## 1) List unresolved files

```bash
git diff --name-only --diff-filter=U
```

## 2) Open one conflict file and resolve by intent

- **Keep current branch version** (HEAD): keep code between `<<<<<<< HEAD` and `=======`
- **Keep incoming version**: keep code between `=======` and `>>>>>>> branch-name`
- **Keep both**: merge both code blocks into one valid implementation

Then remove only marker lines:
- `<<<<<<< ...`
- `=======`
- `>>>>>>> ...`

## 3) Validate no conflict markers remain

```bash
pnpm check:merge-conflicts
pnpm check:merge-conflicts:critical
```

## 4) Mark as resolved + continue merge

```bash
git add <resolved-file>
git merge --continue
```

---

## File-specific recommendation for this project

For route/page conflicts (e.g. `Navigation.tsx`, `Index.tsx`, `Events.tsx`), prefer keeping the route-based architecture and then merge content changes into it.

For news components (`FeaturedNewsCarousel`, `LatestNewsFeed`, `MonthlyHighlightsSection`) keep the typed data model wiring and merge UI text/labels from both sides.

## Safety tip

Run this before committing:

```bash
pnpm typecheck
pnpm test -- --run
```
