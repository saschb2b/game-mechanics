---
title: "Slay the Spire — Relics"
type: game
game: slay-the-spire
patterns:
  - rule-breaking-relics
  - bonus-with-drawback
---

# Relics

*Passive permanent effects* for the run. You start with 1 (character-specific starter) and accumulate ~10–20 by the end of a successful run.

![Council of Ghosts event — Accept gain 5 Apparition lose 50 percent max HP, or Refuse](/images/slay-the-spire/event-council-ghosts.jpg)
*The Council of Ghosts event — a textbook bonus-with-drawback choice: gain 5 Apparition (a powerful run-defining buff) at the cost of 50% max HP. Most game-warping rewards in Spire pair upside with real cost. Source: [Steam](https://store.steampowered.com/app/646570/Slay_the_Spire/).*

## Where relics come from

| Source | Guaranteed? |
|---|---|
| Elites | ✅ every elite |
| Treasure rooms | ✅ |
| Bosses | ✅ choice of 3 |
| Shops | purchasable |
| Events | sometimes |
| Acts 3 & 4 transitions | special |

## Rarities

- **Common / Uncommon / Rare / Boss / Special / Shop** tiers.
- Default odds: ~50% / 33% / 17% (Common / Uncommon / Rare). Chests skew differently.
- Each character has its own relic *pool* plus a shared pool. Some relics only drop for one character.

## Why relics are the deepest design lever

Relics fundamentally **break rules.** A few examples:

| Relic | Effect |
|---|---|
| Snecko Eye | All card costs are randomized 0–3 each time you draw them, and you draw +2 cards per turn |
| Runic Pyramid | Never discard your hand at end of turn |
| Velvet Choker | You can only play 6 cards per turn, but you start with +1 energy |
| Calling Bell | Gain a curse, gain 3 specific relics |
| Ectoplasm | +1 energy, you can't gain gold |
| Coffee Dripper | +1 energy, you can no longer Rest |
| Sozu | +1 energy, can no longer get potions |
| Pandora's Box | Transform every Strike and Defend in your deck |

Each relic is a small *modifier* that turns a normal run into a specific puzzle. **Combined with deck composition, relics produce hundreds of distinct "this run is about X" identities.** Snecko Eye + Runic Pyramid is a wildly different game from Velvet Choker + Calling Bell.

See [`rule-breaking-relics`](/patterns/rule-breaking-relics).

## Boss relics — the highest-stakes choice

After each act boss, pick 1 of 3 boss relics. These are the **most game-warping options in the game.** Most have a real **drawback** alongside a powerful bonus:

- Pandora's Box → transform every Strike and Defend.
- Sozu → +1 energy / no potions.
- Coffee Dripper → +1 energy / no Rest.
- Black Star → Elites drop a powerful Boss-tier relic / common-tier act 1 relic gone.

The drawback is the design point. **Boss relics force you to commit to a strategy direction.** They make the run "about" something — and they prevent you from picking up the most-broken option without a real cost.

See [`bonus-with-drawback`](/concepts/bonus-with-drawback).

## What this teaches

If your game has run-defining loot, **give it costs.** Uncosted upgrades flatten variety because every "great" run has the same shape. Costed upgrades create distinct "this is what the run is about" identities — and force the player to commit to a path rather than collect everything.

## Patterns this exemplifies

- [`rule-breaking-relics`](/patterns/rule-breaking-relics)
- [`bonus-with-drawback`](/concepts/bonus-with-drawback)
