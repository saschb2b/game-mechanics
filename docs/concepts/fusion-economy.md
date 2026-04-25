---
title: "Fusion economy"
type: concept
patterns:
  - fusion-economy
related_patterns:
  - grid-inventory
  - loadout-as-budget
  - opportunity-cost-loadout
---

# Fusion economy

> **Lemma:** Multiple low-tier items consolidate into one higher-tier item. The result is **fewer pieces, more concentrated value** — solves the "loot drowns the inventory" problem without destroying loot.

## What it solves

Loot games run into a common bind: the longer you play, the more low-tier loot accumulates. Two bad solutions:

- **Cap inventory hard** → players hate it, and you've thrown out hours of farmed loot.
- **Auto-trash low-tier** → players hate it, and it removes meaningful decisions.

Fusion lets the player *opt into* consolidation: low-tier items aren't deleted, they're *upgraded* into higher-tier items. The transformation is in the player's hands, often with a real cost (gold, currency, or quality dilution).

The pattern usually pairs with [`grid-inventory`](./grid-inventory.md) or another finite-budget loadout — fusion is the pressure-release valve that keeps the budget from clogging.

## Variants across games

| Game | What gets fused | What you get | Cost |
|---|---|---|---|
| **[Sparklite](/games/sparklite/patch-board)** | 2× identical bronze patches | 1× silver patch with double effect, smaller footprint | Gold + workshop tier upgrade prerequisite |
| **[Moonlighter 2](/games/moonlighter-2/backpack-puzzle)** | Multiple relics burned/absorbed by adjacency | Quality stacks on the surviving relic; some relics transform into higher-tier "Prince" forms | The burned relics are gone — quality cost vs. quantity cost |

### Two flavors

Sparklite's fusion is **tier promotion**: same effect type, smaller footprint. The trade is "spend gold to compress your inventory."

Moonlighter 2's fusion is **synergy consumption**: relics next to a "burn" / "absorb" relic are consumed for quality boost on the survivor. The trade is "lose those relics to make this one more valuable."

Both achieve the same long-term goal — fewer pieces, more concentrated value — through very different mechanics.

## When to use this pattern

- **Roguelites with grid / hand-size inventory limits.** Fusion is the long-term answer to inventory pressure.
- **RPG / looter games** where low-tier drops become noise late-game.
- **Crafting systems** that already have a tier hierarchy.
- **Wherever loot accumulates faster than a player can use it** — fusion lets old loot stay relevant.

Avoid when:
- Item identity is the point (collecting Pokémon — fusing them away would defeat the fantasy).
- The game is short enough that low-tier drowning never happens.

## Pitfalls

- **Fusion that's strictly better than not fusing** — players just spam-fuse, the choice is gone. Sparklite's fusion costs gold *and* workshop investment; Moonlighter 2's burn destroys the burned relic's value entirely. Both have real costs.
- **Tiers that converge** — if 4× bronze + 1× silver = 1× gold but the silver was already useful, the fusion isn't an upgrade, it's a wash. Tier jumps need to feel meaningful.
- **No discoverability** — fusion rules need to be visible *while* the player is building. Sparklite shows a fuse button when applicable; Moonlighter 2 shows arrows pointing at relics that will be burned.
- **Stacks dilute identity** — at some point a fully-fused build is "just bigger numbers." Sparklite avoids this by keeping fused tiers limited (bronze → silver → gold, no further). Moonlighter 2 keeps it via the placement puzzle still mattering after fusion.

## Adjacent patterns

- [`grid-inventory`](./grid-inventory.md) — fusion is the natural release valve when grid space is the constraint.
- [`loadout-as-budget`](./loadout-as-budget.md) — broader mechanism; fusion is one way to *expand* what fits in a given budget.
- [`opportunity-cost-loadout`](./opportunity-cost-loadout.md) — fusion *is* an opportunity cost: by fusing, you've decided not to use those low-tier items individually.
