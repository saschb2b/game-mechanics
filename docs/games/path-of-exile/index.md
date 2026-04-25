---
title: "Path of Exile"
type: game
studio: Grinding Gear Games
released: 2013
genre: f2p-action-rpg
business_model: f2p
iconic_mechanic: "1500-node passive tree + skill gems as gear"
core_dialectic: "Friction over convenience — at every layer"
patterns:
  - loadout-as-budget
  - nested-progression-graph
  - bonus-with-drawback
  - currency-as-crafting
  - trade-friction-as-feature
  - vision-driven-iteration
  - community-driven-tooling
  - aspirational-crafting
  - random-perfect-roll-economy
tags: [arpg, looter, f2p, live-service, hardcore, deep-builds]
---

# Path of Exile

> Twelve+ years of refusing to make anything easier. Almost every design choice in PoE is a deliberate friction point — no auction house, no gold, sockets you can fail to colour, expansions you can fail to clear, builds you can fail to plan. The trade-off is that **when something works, it's *yours*** in a way no other ARPG replicates. The companion piece is [Warframe](/games/warframe/) — same era, both F2P, opposite philosophy on almost everything. PoE is what Warframe could have been if DE had decided that *everything* was load-bearing.

![PoE1 Atlas of Worlds — 100+ map nodes connecting endgame zones in a single web](/images/path-of-exile/atlas-of-worlds.jpg)
*The Atlas of Worlds — PoE1's endgame structure. ~115 map zones, traversed in any order, gated by Voidstone progression. The campaign exists to teach you mechanics so the Atlas can use them. Source: [Steam](https://store.steampowered.com/app/238960/).*

## Snapshot

| | |
|---|---|
| **Studio** | Grinding Gear Games (Auckland, NZ; Tencent-owned since 2018) |
| **Released** | October 2013 (still in active development as of 2026) |
| **Platforms** | PC, Mac, PS4/5, Xbox |
| **Run length** | Endgame map: ~5–10 min. Pinnacle bosses: 5–30 min. League race: ~80–200 hours |
| **Iconic mechanic** | The 1500-node shared passive tree + skill gems as gear |
| **Core dialectic** | Friction over convenience — at every layer |
| **Business model** | F2P, cosmetics + stash tabs only; expansions free; supporter packs fund development |
| **Sibling project** | [Path of Exile 2](/games/path-of-exile-2/) (Early Access since Dec 2024); shipped as a *parallel* game, not a replacement |

## Macro loop — the long arc

```
Campaign (Acts 1–10, ~10 hours skilled, ~30 hours new) — 1× per character
  → Maps (Atlas, T1–T16) — the actual game starts here
    → Maps drop maps; you sustain your own pool
    → Atlas Passive Tree shapes which league mechanics spawn in your maps
    → 4 Voidstones from pinnacle bosses raise the Atlas effective tier ceiling
    → Pinnacle bosses (Sirus, Maven, Searing Exarch, Eater of Worlds) gate currency tiers
    → Uber bosses gate prestige + chase rewards
  → Crafting cycle — the actual *actual* game
    → currency dropped from maps is fed into the affix-modifying engine
    → 2-mod rare → 4-mod rare → 6-mod rare → influenced rare → ...
    → mirror-tier item is the asymptote
  → Trade — the meta-meta-game
    → pathofexile.com/trade is the marketplace; in-game whispers complete the trade
    → currency you hold *is* your craft budget, in real time
  ← death in a map → 10% XP loss above level 67, map gone, loot lost
```

The campaign is the **prologue.** The Atlas is the game. Crafting is the meta-game. Trade is the meta-meta-game. **Each layer wraps the previous one with another budget to optimize.**

## Mechanic deep-dives

- [**Passive tree**](./passive-tree.md) — 1500 nodes shared across classes; class is a *vector into shared geometry*.
- [**Skill gems**](./skill-gems.md) — skills as items, socketed into gear, linked to support gems; the 6-link as the canonical chase.
- [**Ascendancy**](./ascendancy.md) — sub-class chosen mid-campaign via the Labyrinth; the *only* major gating that's a skill check, not RNG.
- [**Crafting & currency**](./crafting-and-currency.md) — there is no gold; every "currency" is a crafting reagent.
- [**Trade & economy**](./trade-and-economy.md) — no auction house, deliberately. SSF, loot filters, the Vision.
- [**Atlas of Worlds**](./atlas.md) — the post-campaign map system; maps as items; pinnacle bosses; the Atlas tree.
- [**Death & difficulty**](./death-and-difficulty.md) — 10% XP loss; HC; SSF; the cliff at level 95.

## What this game teaches

- **Friction can be the product.** PoE's lack of convenience is what makes its rewards feel earned. Most games run from this; PoE leans in.
- **One currency for everything beats gold + materials.** When trade currency *is* crafting reagent, every transaction is a tradeoff between "buy" and "craft." Inflation has a built-in sink.
- **Class as a starting position, not a class.** The shared passive tree is the antidote to the "every Sorcerer plays the same" problem.
- **Build power lives in the seams** — skill + support + keystone + unique + ascendancy interactions. Not in stat bumps.
- **Aspirational crafting > guaranteed crafting.** GGG nerfs deterministic crafting subsystems on a 12–18 month cycle, on purpose.
- **Delegate tooling to the community.** GGG ships a filter *language*, not a default filter. NeverSink/FilterBlade are the de facto standard, updated weekly.
- **Iteration over polish.** 3-month league cadence, willingness to ship, willingness to nerf. The "Path of Nerfs" community joke is also the design.
- **Two games are a valid response to design tension.** PoE2 wasn't a sequel — it was a parallel canvas for re-examining decisions PoE1 had drifted from.

See [lessons](./lessons.md) for the longer take and [design-tensions](./design-tensions.md) for GGG's stated philosophy.

## See also

- [Patterns this exemplifies](./patterns.md)
- [Design tensions](./design-tensions.md)
- [Sources](./sources.md)
- Sibling: [**Path of Exile 2**](/games/path-of-exile-2/)
