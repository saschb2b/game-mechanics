---
title: "Moonlighter 2 — Backpack puzzle"
type: game
game: moonlighter-2
patterns:
  - loadout-as-budget
  - grid-inventory
  - opportunity-cost-loadout
  - backpack-puzzle
  - fusion-economy
---

# Backpack puzzle

The most original mechanic in the game and the reason it shows up in design-pattern conversations. **The loot bag is a placement puzzle that determines its own price.**

![Backpack with relic synergies — Soldier Doll selected, showing POINTED + ABSORB markers](/images/moonlighter-2/backpack-puzzle.jpg)
*The backpack puzzle. Each cell holds a relic with a quality multiplier (e.g. +18, +34). The selected relic — Soldier Doll — has POINTED + ABSORB tags: "Absorbs all the pointed Dolls or Crystals of the same rarity and transforms into a Prince Doll." Source: [Steam](https://store.steampowered.com/app/2350790/Moonlighter_2_The_Endless_Vault/).*

## Structure

You loot relics in the dungeon. Each relic is a tile with:

- **A base type** (Doll, Crystal, Lantern, Charm, Spade, …).
- **A rarity** (common → epic).
- **A set of placement tags**: `Once Placed`, `Corner`, `Left-Right`, `Top-Bottom`, `Pointed`, `Row`, `Column`, `Adjacent`, etc.
- **A conditional ability** that triggers based on placement: bonus quality, transform into a higher-tier relic, burn neighboring relics for stat conversion, etc.

The backpack itself is a fixed-size grid. **Where you place each relic determines what triggers.**

## Why footprint isn't the constraint — placement is

In Sparklite the constraint is *space*: bigger patches eat more cells. In Moonlighter 2, every relic is one cell — so the constraint is **adjacency.** A relic at a corner triggers different effects than the same relic in the middle. A relic placed next to specific other relics absorbs them or boosts them.

This is a more *combinatorial* version of the [`loadout-as-budget`](/patterns/loadout-as-budget) pattern. Sparklite is spatial-shape Tetris; Spire is deck-thinning combinatorics; Moonlighter 2 is **grid-adjacency optimization** — a kind of Tetris-meets-Sudoku for loot.

## Quality stacking → price multiplier

Each placed relic accumulates a **quality multiplier** (e.g. +5%, +18%, +33%) from its own tags + neighbors. A common relic with +12 quality stacks can sell for *more than a raw epic relic with no synergy.*

![Showcase pricing UI — "Modest Display Case" with Quality +525%, customer reaction faces on the right](/images/moonlighter-2/showcase-pricing.jpg)
*The sell-side view. Note the **+525% Quality** multiplier stacked on the displayed relic — that's the backpack puzzle's payoff arriving at the showcase. Customer reaction faces on the right tell you whether the price is right. Source: [Steam](https://store.steampowered.com/app/2350790/Moonlighter_2_The_Endless_Vault/).*

So the loop is:

```
loot relic → place it adjacent to synergy targets in backpack
  → quality multiplier accumulates
    → showcase → quality × popularity = sale price
      → gold → invest in shop / village
```

## "Burn" relics — fusion as space-management

Some relics **burn** other relics on placement: arrows show what gets consumed, trading those relics for a quality boost on the survivor. *"Burn all common relics and add 4 Quality to this relic for each burnt relic."*

This is functionally a **fusion economy** ([cf. Sparklite patches](/games/sparklite/patch-board), where two ¼-heart bronze patches fuse to one ½-heart silver). Same insight, different implementation: in Sparklite you fuse to *reduce footprint*; in Moonlighter 2 you fuse to *amplify quality*.

## The strategic shape

Players quickly converge on a strategy: **center your layout around 3–4 target relics whose quality you intend to stack as high as possible.** Everything else is fuel — placed deliberately to feed those targets via adjacency or burn effects.

This is the same instinct as deck-thinning in Spire: **don't try to optimize all your loot, optimize a small core of it.**

## Patterns this exemplifies

- [`loadout-as-budget`](/patterns/loadout-as-budget) — the budget is grid-adjacency rather than total cells / total points.
- [`grid-inventory`](/patterns/grid-inventory) — explicit spatial layout matters.
- [`opportunity-cost-loadout`](/patterns/opportunity-cost-loadout) — placing a relic in one slot precludes the synergies of every other placement.
- [`backpack-puzzle`](/patterns/backpack-puzzle) — the specific lemma. Loot value is a function of placement, not just quantity.
- [`fusion-economy`](/patterns/fusion-economy) — burn / absorb / transform mechanics consolidate loot at quality cost.
