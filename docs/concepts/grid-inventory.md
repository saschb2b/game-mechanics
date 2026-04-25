---
title: "Grid inventory"
type: concept
patterns:
  - grid-inventory
related_patterns:
  - loadout-as-budget
  - opportunity-cost-loadout
  - fusion-economy
  - bonus-with-drawback
---

# Grid inventory

> **Lemma:** Items live on an explicit 2D grid. *Where* you place them — not just *how many* — determines what they do or how much they're worth.

## What it solves

A flat list inventory ("you have 23 items") is the most boring loadout possible. **Adding spatial structure** to inventory turns "having items" into "arranging items," which:

- Creates real opportunity cost without needing item counts.
- Surfaces synergies through adjacency / row / column rules.
- Gives the player a between-runs puzzle that scales with items collected.
- Makes raw quantity stop mattering past a point — placement is the cap.

Grid inventories are a special case of [`loadout-as-budget`](./loadout-as-budget.md) where the budget shape is explicitly spatial.

## Variants across games

| Game | Released | Grid | Item geometry | Driving constraint |
|---|---|---|---|---|
| **[Mega Man Battle Network](/games/mega-man-battle-network/navicust)** (NaviCust) | 2002 (BN3) | 4×4 → 5×5 (later doubled in BN6) | **Tetris-shaped programs** + **Command Line constraint** + **same-color non-adjacency** | Violations = **Bugs** (opt-in debuffs, not failures) |
| **[Sparklite](/games/sparklite/patch-board)** (patch board) | 2019 | 3×3 → 4×4 → 5×5 | **Tetris-shaped patches** (1–4 cells per patch) | Footprint: bigger patches eat more cells |
| **[Moonlighter 2](/games/moonlighter-2/backpack-puzzle)** (backpack) | 2025 | Fixed-size backpack grid | **One cell per relic**; tags trigger on placement | Adjacency: corners, rows, "POINTED at" rules |

### The lineage matters

**MMBN3 shipped this in 2002.** Sparklite's patch board (2019) and Moonlighter 2's backpack puzzle (2025) are independent re-discoveries of the same core idea — Tetris-shaped buff blocks on a small grid with adjacency rules — but Capcom got there first by 17–23 years.

This isn't a "BN was a precursor" trivia note. It's a **pattern stability indicator.** When three teams independently land on the same shape over two decades, the pattern is genuinely strong. Each one tunes the rules differently:

- **NaviCust** — adjacency violations cause Bugs (debuffs you live with).
- **Sparklite** — the grid is *the* constraint; items don't conflict with neighbors.
- **Moonlighter 2** — adjacency *triggers* synergies; placement is positive, not negative.

### Visual contrast

| Mega Man Battle Network — NaviCust 4×4 grid | Sparklite — patches awaiting placement | Moonlighter 2 — backpack with synergy markers |
|---|---|---|
| ![NaviCust 4x4 grid with pink, white, and grey programs placed; NormStyl on the left, RUN on the right](/images/mega-man-battle-network/navicust-grid.png) | ![Sparklite adventure log with patches](/images/sparklite/adventure-log-ui.jpg) | ![Moonlighter 2 backpack puzzle](/images/moonlighter-2/backpack-puzzle.jpg) |
| Tetris programs on a 4×4 grid; the third row is the Command Line. Solid programs must touch it; striped programs must not. Violations cause **Bugs** (debuffs) — opt-in to bend the rules. | Different patches have different *shapes*; the puzzle is fitting them. | All relics are 1×1; the puzzle is *what's next to what*. |

Three teams, three slightly different rule schemes, the same core insight: **spatial packing > flat lists.**

## When to use this pattern

- **Roguelites** where you want loadout to be a between-runs puzzle, not just a stat sheet.
- **Looter games** where item count would otherwise be the whole game.
- **Crafting / shopkeeping** where item value can be made placement-dependent.
- **Squad / party games** where unit positions matter.

Avoid when:
- Items are too numerous to fit a meaningful grid (Diablo-style hundreds of items per run drowns the pattern).
- The action layer demands fast loadout swaps (grid puzzles take time).

## Pitfalls

- **Grid that's too small** — feels punishing, players can't fit anything they want.
- **Grid that's too big** — defeats the point; the puzzle stops biting. **A 4×4 is genuinely enough** (NaviCust ships with 4×4 in BN3).
- **Item shapes / tags too uniform** — if every item plays the same with the grid, the spatial layer adds nothing.
- **Synergy / constraint rules too complex to read** — players need to *see* whether a placement is good. NaviCust shows the Command Line and color clashes. Sparklite shows footprint visually. Moonlighter 2 shows arrows. Without that visual feedback, the puzzle is opaque.
- **Strict failure on rule violations** — if breaking the rule rejects the placement, the system feels punishing. NaviCust's Bug-as-cost approach is more forgiving and produces more interesting decisions.

## Adjacent patterns

- [`loadout-as-budget`](./loadout-as-budget.md) — broader pattern; grid inventory is one specific budget shape.
- [`opportunity-cost-loadout`](./opportunity-cost-loadout.md) — what the grid forces.
- [`fusion-economy`](./fusion-economy.md) — Sparklite and Moonlighter 2 both pair grid inventory with a fusion mechanic to keep the grid from clogging up. NaviCust uses **Compression Codes** (BN6) for the same purpose.
- [`bonus-with-drawback`](./bonus-with-drawback.md) — NaviCust's Bug system is a textbook example: opt into chaos for a buff slot.
