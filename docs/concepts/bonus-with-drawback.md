---
title: "Bonus with drawback"
type: concept
patterns:
  - bonus-with-drawback
related_patterns:
  - opportunity-cost-loadout
  - branching-dag-map
---

# Bonus with drawback

> **Lemma:** Game-defining items pair real upside with real cost. Players cannot quietly accumulate them; they must *commit* to a strategy direction.

## What it solves

When upgrades are uncosted, every "great" run starts to feel the same: the player picks up everything, ends with the kitchen-sink build, and the last hour of the run is autopilot. **Drawback-paired bonuses force commitment** — taking the relic that doubles damage means giving up something concrete (HP, mobility, an entire system).

Result:
- Each run gets a *direction*. "This is the no-potions run." "This is the all-Strength run."
- Players reread their build mid-run because the costs are real.
- Different runs feel different — variety emerges from forced trades, not just from RNG.

The pattern is most powerful at **boss-tier rewards** — the rare, run-defining picks where commitment is the point.

## Variants across games

| Game | The bonus | The drawback | Where it appears |
|---|---|---|---|
| **[Slay the Spire — boss relics](/games/slay-the-spire/relics)** | +1 energy / draw / damage / etc. | Lose potions, lose Rest, lose strikes, gain a curse | One of 3 picks after each act boss; usually game-defining |
| **[Slay the Spire — events](/games/slay-the-spire/relics)** | Powerful relic ("5 Apparition") | Real HP cost ("Lose 50% Max HP") | Event nodes throughout the run |
| **[Moonlighter 2 — perk nodes](/games/moonlighter-2/dungeon-map)** | Ice damage scaling, Thunder damage scaling, etc. | Picking one closes off the other tracks for that run | Perk nodes on the dungeon DAG |
| **[Path of Exile — keystones](/games/path-of-exile/passive-tree)** | Game-warping rule changes (Chaos Inoculation = no chaos damage; Resolute Technique = always hit; Mind Over Matter = mana absorbs damage) | Equally game-warping cost (max life set to 1; cannot crit; mana becomes a defence pool) | Notable nodes on the passive tree; one passive point each |

### Visual reference

| Slay the Spire — Council of Ghosts event |
|---|
| ![Council of Ghosts event — gain 5 Apparition, lose 50% Max HP, or refuse](/images/slay-the-spire/event-council-ghosts.jpg) |
| The textbook example. Real upside. Real cost. Refuse is a valid third option. |

### Two grades of drawback

- **Soft drawback** (Sparklite-style): "this patch is bigger so it costs more grid space." The drawback is opportunity cost, not a debuff.
- **Hard drawback** (Spire boss relics): "you literally cannot rest anymore." The drawback is a permanent ban on a system you rely on.

Hard drawbacks are scarier and more memorable. Use sparingly — too many and the player's run is more debuff than buff.

## When to use this pattern

- **Run-defining loot tiers** — boss relics, ultimate items, story-progression rewards.
- **Mid-run pivot points** — events, choice nodes, faction-aligned rewards.
- **Any time you want a player to commit** rather than collect.
- **Especially in roguelites** — the run is bounded, so a hard drawback expires when the run ends.

Avoid when:
- The drawback would impact long-term meta-progression (frustrating, since the player can't recover).
- The game is short enough that drawbacks don't have time to bite.
- Drawbacks would require complex UI to track ("you can no longer use cards with X tag during boss fights").

## Pitfalls

- **Drawback is so harsh nobody picks the item** — Spire's Calling Bell and Pandora's Box are sometimes accused of this.
- **Drawback is cosmetic** ("you lose 1 max HP") — defeats the point. The drawback should be felt every run.
- **Drawback is non-obvious** — players need to *understand* what they're losing before they pick. Spire shows the curse text plainly; obscure drawbacks feel like punishment.
- **Drawback is system-incompatible with build** — if the drawback locks out a system the player wasn't using, it's a free upgrade. Drawbacks need to bite at the *current* build, ideally.

## Adjacent patterns

- [`opportunity-cost-loadout`](./opportunity-cost-loadout.md) — broader mechanism. Bonus-with-drawback is the explicit, costed version of opportunity cost.
- [`branching-dag-map`](./branching-dag-map.md) — DAG maps often *contain* bonus-with-drawback choices (perk forks, elite-vs-shop tradeoffs).
