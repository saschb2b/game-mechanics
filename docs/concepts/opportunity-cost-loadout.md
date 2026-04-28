---
title: "Opportunity-cost loadout"
type: concept
patterns:
  - opportunity-cost-loadout
related_patterns:
  - loadout-as-budget
  - grid-inventory
  - bonus-with-drawback
---

# Opportunity-cost loadout

> **Lemma:** Equipping power for X means *not* equipping power for Y. Every loadout choice forecloses other choices. The forecast is forced — there's no "take all of it."

## What it solves

When loadout is purely additive (more upgrades = more power), the design slowly drowns:

- Every run accumulates more bonuses; difficulty has to chase.
- Choices feel cosmetic — "they're all good, I'll just take them all later."
- Identity flattens — every player ends up with the same kitchen-sink build.

Opportunity-cost loadout fixes this by **making the player explicitly trade.** Take more health, take less damage. Take the map-vision relic, lose the slot for an attack relic. The constraint can be space, energy, slots, hand size — what matters is that *commit one thing → close another.*

This is closely related to [`loadout-as-budget`](./loadout-as-budget.md) — opportunity cost is what budgets *create*. The lemma here is the player-experience side: every loadout decision is felt as a sacrifice.

## Variants across games

| Game | The forced trade | What's being chosen between |
|---|---|---|
| **[Sparklite](/games/sparklite/patch-board)** | Every cell on the patch board holds one effect; bigger patches eat more cells | Damage vs. HP vs. defense vs. map markers vs. energy |
| **[Moonlighter 2](/games/moonlighter-2/backpack-puzzle)** | Every backpack cell can only hold one relic; placement triggers one synergy | Which 3–4 target relics to stack quality on; everything else is fuel |
| **[Hollow Knight](/games/hollow-knight/charms-and-notches)** | Every charm slotted is a charm not slotted; 11-notch budget vs. ~45 charms with integer costs | Damage vs. healing speed vs. soul economy vs. movement vs. compass / map markers |
| **[Nier: Automata](/games/nier-automata/chip-system)** | Every chip equipped is a chip not equipped; the HUD is in the same budget | Combat power vs. accessibility (Auto-*) vs. **the HUD itself** — show the minimap or take an Auto-Heal? |

Three of these are spatial (grid-based), the others are numeric. Nier: Automata is the unusual case where the trade includes UI elements — the player decides whether seeing the HUD is worth the storage cost.

## When to use this pattern

- **Run-based games** where each run wants its own identity.
- **Build-defining loot** where you want commitment, not collection.
- **Boss-tier rewards** that should warp the run rather than just add to it.
- **Class / archetype designs** that should feel different to play, not just stat-different.

Avoid when:
- The fantasy is power accumulation (Diablo-style "I want all the items").
- The game is short enough that trades don't get to pay off.

## Pitfalls

- **One option strictly dominates** — if there's a "best" trade, the choice is illusory. Spire's metrics-driven balance is what keeps cards/relics from settling into a single optimal path.
- **Trades feel arbitrary** — the player has to *understand* what they're giving up. Synergies need to be visible (Sparklite shows you the patch you couldn't fit; Moonlighter 2 shows arrows pointing at the relics that would have triggered).
- **Reverse-engineerable optimum** — if the best build is mathematically derivable, the choice flattens after one online guide. Some randomness in what's *offered* per run helps.
- **Punishing first-time players** — if you have to know the meta to make good trades, new players are excluded. Spire's drafts always include a skip option to soften this.

## Adjacent patterns

- [`loadout-as-budget`](./loadout-as-budget.md) — the broader budget mechanic that creates opportunity cost.
- [`grid-inventory`](./grid-inventory.md) — the spatial-budget version.
- [`bonus-with-drawback`](./bonus-with-drawback.md) — extreme version: one item carries explicit upside *and* downside.
