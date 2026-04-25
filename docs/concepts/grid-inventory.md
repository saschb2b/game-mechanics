---
title: "Grid inventory"
type: concept
patterns:
  - grid-inventory
related_patterns:
  - loadout-as-budget
  - opportunity-cost-loadout
  - fusion-economy
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

| Game | Grid | Item geometry | Driving constraint |
|---|---|---|---|
| **[Sparklite](/games/sparklite/patch-board)** | 3×3 → 4×4 → 5×5 | **Tetris-shaped patches** (1–4 cells per patch) | Footprint: bigger patches eat more cells |
| **[Moonlighter 2](/games/moonlighter-2/backpack-puzzle)** | Fixed-size backpack grid | **One cell per relic**; tags trigger on placement | Adjacency: corners, rows, "POINTED at" rules |

### Visual contrast

| Sparklite — patches awaiting placement | Moonlighter 2 — backpack with synergy markers |
|---|---|
| ![Sparklite adventure log with patches](/images/sparklite/adventure-log-ui.jpg) | ![Moonlighter 2 backpack puzzle](/images/moonlighter-2/backpack-puzzle.jpg) |
| Different patches have different *shapes*; the puzzle is fitting them. | All relics are 1×1; the puzzle is *what's next to what*. |

The two games solve nearly opposite versions of the same idea:

- **Sparklite** — items have non-uniform *shape*, the grid is what's fixed. Power per cell is the thing being optimized.
- **Moonlighter 2** — items are uniform 1×1, but their *behavior* depends on neighbors. Adjacency synergy is the thing being optimized.

Both are valid. Both produce hours of "okay, but what if I move *this* over here…" between-runs play.

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
- **Grid that's too big** — defeats the point; the puzzle stops biting.
- **Item shapes / tags too uniform** — if every item plays the same with the grid, the spatial layer adds nothing.
- **Synergy rules too complex to read** — players need to *see* whether a placement is good. Sparklite shows footprint visually; Moonlighter 2 shows arrows pointing at affected relics. Without that visual feedback, the puzzle becomes opaque.

## Adjacent patterns

- [`loadout-as-budget`](./loadout-as-budget.md) — broader pattern; grid inventory is one specific budget shape.
- [`opportunity-cost-loadout`](./opportunity-cost-loadout.md) — what the grid forces.
- [`fusion-economy`](./fusion-economy.md) — both games pair grid inventory with a fusion mechanic to keep the grid from clogging up.
