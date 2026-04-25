---
title: "Sparklite — Patch board"
type: game
game: sparklite
patterns:
  - loadout-as-budget
  - grid-inventory
  - power-creep-mitigation
  - fusion-economy
  - opportunity-cost-loadout
---

# Patch board

The single most-stealable design idea in Sparklite, and the reason the game shows up in design-pattern conversations more than its size would predict.

![Adventure Log showing Sparklite currency and the patches inventory list](/images/sparklite/adventure-log-ui.jpg)
*Adventure Log: Sparklite currency (394) plus the patches inventory list, which feeds into the Med Bay patch board. Source: [Steam](https://store.steampowered.com/app/943140/Sparklite/). The patch board UI itself is in the Refuge's Medical Bay; this view shows the patches the player has *collected* but not yet placed.*

## Structure

Patches drop from enemies and the world. They're applied on a **grid** inside the Refuge's Medical Bay. The board has three tiers, expanded by spending Sparklite on med-bay upgrades:

| Med-bay tier | Grid |
|---|---|
| 1 (start) | 3×3 (9 cells) |
| 2 | 4×4 (16 cells) |
| 3 (max) | 5×5 (25 cells) |

You can leave the descent to rearrange patches, but you can't change them mid-fight.

## Patches have *footprint*

Patches occupy 1–4 cells with Tetris-shaped outlines. **Stronger effects take more cells.** The damage-up patch (which also upgrades the 2-hit combo to a 3-hit combo) takes **4 cells** — that's nearly half a starter board for a single effect.

This footprint is the design move. It's not "better stats cost more gold" — it's "better stats cost *space you can't use for anything else.*"

Categories the player chooses between:

- Health (max HP)
- Defense (damage reduction per hit)
- Wrench damage (close combat)
- Energy (powers gadgets / sub-weapons)
- Gadget damage
- "Map marker" patches (reveal Titan / Vault / Furnace locations on the map)

## Fusion: the pressure-release valve

Buy a workshop upgrade and small patches **fuse**. Two identical bronze patches → one silver patch with double effect at smaller footprint. Two silvers → one gold.

```
4× ¼-heart bronze patches (4 cells)
       ↓ fuse pairs
2× ½-heart silver patches (2 cells)
       ↓ fuse again
1× full-heart gold patch (1 cell)
```

This is **the load-bearing piece of the design.** Without fusion, low-tier patches would clog the board faster than the player can upgrade it. With fusion, the player has a clean conversion: more time → smaller footprint per unit of effect.

## Why it works as a design pattern

It's a **deliberate anti-power-creep mechanism that doesn't actually prevent power growth** — it forces a constant choice about *what kind* of power.

- More health → less damage-up.
- Map markers → less defense.
- Damage-up means giving up four cells you can't use for anything else.

Every descent is a small archetype declaration: am I a tank this run, a glass cannon, a navigator? The grid forces commit.

It also creates a **second-order loop**: collect patches → outgrow board → invest Sparklite in tier or fusion → re-arrange → descend again. The grid isn't just inventory — it's a puzzle the player solves between runs.

## Patterns this exemplifies

- [`grid-inventory`](/concepts/grid-inventory)
- [`power-creep-mitigation`](/patterns/power-creep-mitigation)
- [`fusion-economy`](/concepts/fusion-economy)
- [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout)

## Compare with

- **Warframe modding** — a numeric+categorical version of the same idea: 60-point capacity + matching polarities. Read [/games/warframe/modding](/games/warframe/modding).
- **Slay the Spire decks** — a combinatorial version: tighter deck = stronger draws. Read [/games/slay-the-spire/deckbuilding](/games/slay-the-spire/deckbuilding).
