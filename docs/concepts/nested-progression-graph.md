---
title: "Nested progression graph"
type: concept
patterns:
  - nested-progression-graph
related_patterns:
  - meta-progression-tree
  - atlas-as-build
  - mastery-as-meta-currency
og_image: images/warframe/star-chart-1.jpg
---

# Nested progression graph

> **Lemma:** Long-running games stack **multiple orthogonal progression axes** instead of one big track. Each axis is its own graph (tree, chart, currency rank); the player picks an edge each session. Adding a new system *layers in* rather than replacing — old axes keep their meaning.

![Warframe Star Chart — solar system overview with planet nodes](/images/warframe/star-chart-1.jpg)
*Warframe's Star Chart — one of nine progression axes. Beating Junctions unlocks new planets *and* new sub-systems (Archwing, Operator, Railjack), each of which is its own separate graph layered alongside this one. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=192).*

## What it solves

Linear XP is a thin treadmill. Once a player hits the cap, the game has nothing left to give except harder content. Live-service games solve this by exploding "progression" into a **graph of progressions** — character XP is one axis among many, and the others stay productive long after the level cap is hit.

The discipline is **orthogonality**. New systems must do something the old systems can't already do, otherwise they just compete with the old ones and force deprecation. When done right, a 12-year-old game can ship a new system that genuinely opens new ground without invalidating existing builds.

## Variants across games

| Game | Axes | How they layer | Headline orthogonality |
|---|---|---|---|
| **[Path of Exile](/games/path-of-exile/passive-tree)** | Character passive tree (~1500 nodes) · Ascendancy (~8 dense nodes) · Atlas tree (~700 nodes) · gear / sockets / links · skill gem levels | Each is a separate respec / earn / spend loop. Atlas points come from completing maps, *not* character XP. | Atlas-as-build: the meta-game has its own tree, not just a difficulty slider. |
| **[Path of Exile 2](/games/path-of-exile-2/atlas-one-death)** | Same shape as PoE1 but tightened: passive tree · ascendancy · atlas overworld · gear · weapon-set passives | Each weapon set carries its own subset of the passive tree, swapped mid-combat — a *fifth* axis layered on top | Weapon-set swap as an in-combat progression axis |
| **[Warframe](/games/warframe/progression-layers)** | Star Chart · Mastery Rank · Quest progression · Focus (5 trees) · Syndicates (6 factions) · Helminth (subsume) · Steel Path · Incarnon · Arcanes | Each layer was added in a different year (2013–2024). Every new system added a parallel axis, never deprecated an old one. | Mastery Rank rewards *breadth* (rank everything to 30), making time-played proportional to content-experienced rather than to power. |
| **[Xenoblade Chronicles X](/games/xenoblade-chronicles/skells-and-frontiernav)** | Character XP · Class mastery (17 branching classes) · BLADE division rank · FrontierNav probe placement · Skell licensing → Flight Module · Heart-to-Heart affinity | All six axes operate independently; FrontierNav probes generate resources in real-time even when offline | Single-player JRPG running an MMO-shape progression graph; the *idle-game* layer (FrontierNav) underneath the action layer is unusual outside of live-service. |
| **[Hollow Knight](/games/hollow-knight/charms-and-notches)** | Charms (notch budget) · Mask Shards (max HP) · Vessel Fragments (Soul cap) · Pale Ore (Nail damage) · Spells (3 base + upgrades) · Dream Nail (charges + lore-reading) | Each axis is a separate collectible scattered in the world; each has different commitment timescales (resettable charms vs. permanent HP) | Six axes from a 30-hour metroidvania — proves the pattern works at *small* scope, not just live-service. |

The cleanest test of the pattern: **what does a player do once they hit the level cap?** Single-axis games have nothing. Nested-graph games have a dozen edges to follow.

### Visual contrast — three games, three meta-graphs

| Warframe — Star Chart | Path of Exile — Atlas of Worlds | Path of Exile 2 — Endgame World Map |
|---|---|---|
| ![Warframe Star Chart](/images/warframe/star-chart-1.jpg) | ![PoE Atlas of Worlds](/images/path-of-exile/atlas-of-worlds.jpg) | ![PoE2 Endgame World Map](/images/path-of-exile-2/endgame-world-map.jpg) |
| Solar system overview: planets gated by Junctions. Each planet hosts mission types and entire sub-systems (Operator, Railjack). | ~115 map nodes connected in a web. Each map has its own affixes; the *Atlas tree* is a separate ~700-node passive tree on top. | Continuous overworld where corruption visibly spreads through completed nodes. Same role as PoE1's Atlas, different topology. |

These are three different shapes (radial chart, web, contiguous overworld), but each is **a meta-progression axis the player builds out alongside the character**. None of them are character XP; all three are productive long after the level cap.

## When to use this pattern

- **Live-service games** that need to keep producing meaningful work for thousand-hour players.
- **ARPGs / looters / MMOs** where the post-campaign is the actual game.
- **Sequels and expansions** that want to add depth without invalidating existing builds.

Avoid when:
- The game is a closed-form 20–40 hour campaign. A nested graph is overhead with no payoff if the player will never see the third axis.
- Onboarding budget is tight. Each axis adds a UI surface, a vocabulary, and a tutorial moment. Nested graphs are *brutal* on new players (PoE's reputation).

## Pitfalls

- **Lack of orthogonality.** If the new system is just "another way to get +damage," it competes with the old systems and forces deprecation. Helminth in Warframe works *because* slot-overwrite is a different decision from mod-fitting; if it had been "+10% damage per subsume," it would've replaced modding.
- **Surface-area bloat.** Each axis costs a UI, a tutorial, and a community wiki page. PoE1 currently has Atlas tree + scarabs + sextants + influence + altars + …; the EA reception of PoE2 partly reflects players wanting fewer axes, not more.
- **Veteran walls.** Returning players bounce off the cumulative complexity. Each axis added is also each axis a player who left in 2019 has to relearn.
- **Cross-axis dead ends.** Designing axes in isolation can produce combinations that are mechanically degenerate. PoE's Atlas mods × map mods × scarabs occasionally compose into "free loot" loopholes that get patched out post-hoc.

## Adjacent patterns

- `meta-progression-tree` — when a meta-axis (Atlas, Forma, etc.) is itself a tree, not just a counter. The Atlas tree is the canonical example.
- `atlas-as-build` — a specific case where the *content* axis (which maps spawn what) gets its own build space.
- `mastery-as-meta-currency` — Warframe's specific implementation of a breadth-rewarding meta axis.
- [`loadout-as-budget`](/concepts/loadout-as-budget) — usually orthogonal to the progression graph: each axis has its own budget. The character passive tree is one budget; the Atlas tree is a different one.

## Why this matters as a design lesson

The pattern's discipline is harder than it looks. **Saying "we'll add a new system" is easy; saying "we'll add a new system that's orthogonal to everything we've already shipped" is a real design constraint.** Warframe has held the line for over a decade — every major expansion added an axis, none deprecated an old one. PoE shipped 12 years of league mechanics and only a handful (Synthesis, original Bestiary) were actually retired.

For a game intended to run for 5+ years, picking orthogonality as a constraint upfront is cheaper than mass-deprecating systems later.
