---
title: "Path of Exile — Passive tree"
type: game
game: path-of-exile
patterns:
  - loadout-as-budget
  - bonus-with-drawback
  - nested-progression-graph
---

# Passive tree

The single most-iconic visual in PoE. ~1500 nodes on a shared web that *every* class sees. Class only determines your starting position. Within a few rings of Witch's start you can cross into Templar territory; within enough investment you can build a Marauder who ends up in the deep Shadow keystones.

## Structure

| Layer | What it does |
|---|---|
| **Small nodes** (1 pt) | Flat stat: +10 strength, +8% increased fire damage, etc. The connective tissue. |
| **Notable nodes** (1 pt, larger) | Themed clusters: "Heart of Flame: 30% more fire damage, 30% increased fire damage." Often build-defining. |
| **Keystones** | Binary game-changers — flip a fundamental rule. See below. |
| **Jewel sockets** | Empty slots that hold jewels (drop items): +stats in radius, alter nodes around them, or run **timeless jewels** that *rewrite every node within 1500 units* based on a historical seed. |
| **Mastery clusters** (2022+) | Each character can pick one mastery option per cluster they've connected to; another lever for build identity. |

Pathing is itself a budget — you spend points to *traverse* to the nodes you want, not just to take them.

## Keystones — the genre's cleanest bonus-with-drawback

Keystones flip a rule of the game. Each is universally available; each is a hard commit.

| Keystone | Bonus | Drawback |
|---|---|---|
| **Chaos Inoculation** | Take no chaos damage | Maximum life set to 1 |
| **Resolute Technique** | Cannot miss with attacks | Cannot crit |
| **Mind Over Matter** | 30% of damage taken before life is taken from mana first | Mana becomes a defense pool you actively manage |
| **Vaal Pact** | Life leech is instant | Cannot regenerate life |
| **Iron Reflexes** | Convert all evasion to armour | Lose evasion's utility entirely |
| **Eldritch Battery** | Spend energy shield before mana | Energy shield no longer protects life |
| **Pain Attunement** | 30% more spell damage at low life | Locked into low-life build |

**Every keystone is a textbook [`bonus-with-drawback`](/concepts/bonus-with-drawback)** — game-warping upside, real cost, no recovery short of paying respec currency. Chaos Inoculation alone is responsible for an entire endgame meta (CI energy-shield builds) and forecloses ~30 other meta options simultaneously.

## Why class-shared rather than class-locked

The cleanest phrasing of the design intent comes from comparing PoE to its peers:

| Game | Tree size | Tree shape |
|---|---|---|
| Diablo 2 | ~30 skills × 3 trees per class | Class-locked, skill-tree |
| Diablo 3 | n/a | Skills with rune slots, no tree |
| Diablo 4 | ~100 nodes per class | Class-locked, modest tree |
| Last Epoch | ~50 nodes per class + per-skill specialization | Class-locked tree, per-skill trees |
| Grim Dawn | Two masteries per character | Class-paired tree |
| **Path of Exile** | **~1500 nodes shared** | **Class is a vector into shared geometry** |

**No other ARPG has tried "shared tree."** GGG's positioning, recurring across interviews and the GDC 2019 talk: a shared tree means the same Resolute Technique node is reachable from Marauder *and* Shadow *and* Duelist; how you path there *is* your build. Class-locked trees flatten by genre — every Sorcerer plays the same. Class-as-vector means a Marauder who pathed left is a different character from a Marauder who pathed up.

The cost is **size and intimidation.** GGG has explicitly acknowledged the tree is impenetrable for new players; PoE2's UI ships with a tightened default tree view in response.

## Respec — the real cost of pathing

Each refunded passive point costs **1 Orb of Regret** (a tradable currency). Quest rewards give ~24 free refund points across the campaign. Endgame respec is *expensive* — full re-spec of a level-95 character can cost more currency than a top-tier weapon.

This means **build commits matter.** You don't experiment lightly post-campaign; you commit to a build, farm the gear that supports it, and only respec into a different build when you've earned enough Orbs of Regret to do so. The respec cost is friction-as-feature.

## Patterns this exemplifies

- [`loadout-as-budget`](/concepts/loadout-as-budget) — the tree is a *very* large numeric budget (≈122 points at level 100). Every point is an opportunity cost.
- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — keystones are the canonical genre example; every keystone closes off other build directions.
- [`nested-progression-graph`](/patterns/nested-progression-graph) — the passive tree is one axis; ascendancy, the Atlas tree, gear, and skill gems are orthogonal axes. PoE's progression is a graph, not a line.
