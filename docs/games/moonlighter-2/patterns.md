---
title: "Moonlighter 2 — Patterns"
type: game
game: moonlighter-2
---

# Patterns Moonlighter 2 exemplifies

| Pattern | How Moonlighter 2 uses it |
|---|---|
| [`dual-life-loop`](/patterns/dual-life-loop) | Same character toggles between dungeon-roguelite (day) and shopkeeper-sim (night). The two halves share *items* but evaluate them differently. |
| [`loadout-as-budget`](/patterns/loadout-as-budget) | The backpack is a fixed-grid loadout where placement determines value. Adjacency-driven, not footprint-driven. |
| [`grid-inventory`](/patterns/grid-inventory) | Spatial layout of the backpack matters: corners, rows, columns, "pointed" effects. |
| [`opportunity-cost-loadout`](/patterns/opportunity-cost-loadout) | Placing a relic in one slot precludes the synergies of every other placement. |
| [`backpack-puzzle`](/patterns/backpack-puzzle) | The lemma. Loot value is a *placement* problem, not a quantity problem. Likely the most original mechanic in the game. |
| [`fusion-economy`](/patterns/fusion-economy) | "Burn" and "absorb" relics consolidate loot at quality cost — same insight as Sparklite patch fusion, different math. |
| [`branching-dag-map`](/patterns/branching-dag-map) | Hades/Spire-style DAG of node types: chest, event, blacksmith, perk, boss, etc. |
| [`bonus-with-drawback`](/patterns/bonus-with-drawback) | Perk node choices on the map (Ice or Thunder, not both) force commitment. |
| [`handcrafted-pcg-hybrid`](/patterns/handcrafted-pcg-hybrid) | Encounters & arenas hand-authored; map layout procedurally arranged. |
| [`meta-as-variety-not-power`](/patterns/meta-as-variety-not-power) | Mostly variety unlocks (recipes, perks, decorations). Some permanent power exists (blacksmith stat bumps), unlike Spire's stricter stance. |
| [`bounded-roguelite`](/patterns/bounded-roguelite) | Three biomes leading to a final-game arc, not infinite escalation. (EA scope; full release will add more.) |
