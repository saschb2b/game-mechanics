# Open questions / decisions to make

Real ongoing decisions, not historical. Resolve as they come up.

## Process
- [ ] **Editor workflow** — VS Code only, or Obsidian on top of the same folder for graph view while drafting?
- [ ] **Cadence** — write up only games being actively played, or revisit older games from memory? (Lean: yes to both, but mark `status: research-only` or `status: shelved` in frontmatter so source quality is visible.)
- [ ] **Public from day one?** Lean yes — research dumps don't publish, only polished entries do.

## Content
- [ ] **Concept-page minimum bar.** Default: don't publish a concept page until it has ≥2 games or ≥1 game and a strong unique angle.
- [ ] **Top-level "lessons forward" page?** Lessons live inside each game entry (decided), but is there also a cumulative "what I'm taking into my Godot games" page? Or per-Godot-project pages?
- [ ] **Sequels.** Slay the Spire 2 — separate entry, or sub-page under the original?
- [ ] **Personal play context.** Hours, mains, what made me stop/restart — required for any non-research-only entry?

## Stack
- [ ] **Custom theme** — default for now. Reconsider if visual identity feels weak after a few more entries.
- [ ] **Search provider** — local for MVP. Algolia option once content scales.
- [ ] **Comments / community feedback** — out of scope; revisit if/when others want to contribute.

## Visuals — missing screenshots

The current image set is sourced from Steam screenshot CDNs + gameuidatabase. A few iconic shots are missing because the upstream sources don't include them. Each game's `docs/public/images/<game>/CREDITS.md` lists its own wishlist; the headline gaps:

- **Sparklite — patch board UI itself** (3×3 / 4×4 / 5×5 grid with placed Tetris patches). The iconic mechanic; we currently only have the Adventure Log inventory view. Try Fandom wiki, Steam community screenshots, or capture from own play.
- **Slay the Spire — the map (DAG view)**. The most visually iconic Spire screen. Steam carousel doesn't include it. Wiki has it (CC-BY-SA), or capture from own play.
- **Slay the Spire — card draft post-fight, Ascension select, character select.**
- **Warframe — Foundry timer screen, Riven mod screen.** gameuidatabase has more shots than the 12 we picked; can mine more.

## Pattern-graph follow-ups
- [ ] **Parent/child pattern hierarchy?** Currently `loadout-as-budget` and its specific flavors (`grid-inventory`, `tight-energy-budget`) sit flat in the index. Some kind of grouping might be useful once there are 50+ patterns — defer until friction is felt.
- [ ] **Tags index.** A separate, lighter-weight axis from patterns. Same generator pattern. Defer until tag friction is felt.
- [ ] **Frontmatter linting.** The generator could fail-build when a game `index.md` is missing `iconic_mechanic` or `core_dialectic`. Defer until the first time we forget one.
