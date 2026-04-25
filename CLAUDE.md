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

Frontmatter fields, sub-page split rule, concept-page template, patterns generator contract, screenshot procedure — all in [CONTRIBUTING.md](./CONTRIBUTING.md).

**Before adding a new game entry**, read the **"Adding a new game entry"** section of CONTRIBUTING.md end-to-end. It's a numbered 11-step checklist covering research → folder layout → frontmatter → screenshots → sidebar → cross-cutting concept-page updates → build verification → cleanup. Don't skip steps; in particular don't forget step 8 (updating curated concept pages with the new game's variant — the auto-generated patterns index updates itself, but `docs/concepts/<pattern>.md` does not).

Open decisions are in [TODO.md](./TODO.md).
