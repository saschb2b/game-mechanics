# Working in this repo

## Always split markdown into multiple files

Any non-trivial markdown deliverable (research synthesis, planning doc, multi-section writeup) must be a **folder with a `README.md` index + numbered topic files**, never one large file.

**Why:** Sascha edits these files later and finds it more efficient to work on small focused files than to scroll a long one.

**How to apply:**
- Default for any doc longer than ~3 sections: split into a folder with one file per major section + an index.
- Numeric prefixes (`01-`, `02-`, …) enforce reading order. `99-sources.md` always last.
- The index file is a one-line-per-link table of contents, not a content page.
- If a section grows past ~150 lines, split it further.

## Research-before-publishing workflow

When kicking off a new game entry, the workflow is **research → polish → integrate**:

1. Produce a multi-file research synthesis (web research + dev interviews + reception analysis), split per section per the rule above.
2. Critique the synthesis to refine entry format and surface cross-game patterns.
3. Polish the synthesis into the published `docs/games/<game>/` layout.
4. **Delete the research synthesis** once integrated. It's scaffolding, not permanent reference material.

Don't treat research dumps as long-term content. The published `docs/` is canonical.

## Repo conventions are documented in CONTRIBUTING.md

Frontmatter fields, sub-page split rule, concept-page template, screenshot procedure — all in [CONTRIBUTING.md](./CONTRIBUTING.md).

There are two workflows, both fully documented in CONTRIBUTING.md. Read the relevant one end-to-end before starting:

- **Adding a new game entry** — 11-step checklist (research → folder → frontmatter → screenshots → sidebar → cross-cut concepts → build → cleanup). Don't skip step 8: when a game's `patterns:` includes one that already has a curated concept page, you must hand-edit that concept page to add a row in its variants table.
- **Adding (promoting) a concept page** — 5-step procedure for when ≥2 games tag a pattern and you want to curate it. Covers the standard template (lemma → variants table → visual contrast → when to use → pitfalls → adjacent patterns), updating `docs/concepts/index.md`, and the sidebar.

**`/concepts/` is the canonical curated surface for design patterns.** Game `patterns.md` tables link out to `/concepts/<x>` for curated patterns; uncurated patterns appear as plain `` `pattern-name` `` (no link). There is no `/patterns/` directory — `patterns:` frontmatter is a machine-readable tag list only.

Per-game image wishlists live in each `docs/public/images/<game>/CREDITS.md` (no top-level TODO).
