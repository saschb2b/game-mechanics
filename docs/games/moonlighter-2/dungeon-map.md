---
title: "Moonlighter 2 — Dungeon map"
type: game
game: moonlighter-2
patterns:
  - branching-dag-map
  - handcrafted-pcg-hybrid
  - bonus-with-drawback
---

# Dungeon map

Moonlighter 2's biggest single departure from the original: **the dungeon is now a Hades/Spire-style map** rather than a procedural maze.

![Zephyr Fields dungeon map — DAG of node icons with a legend](/images/moonlighter-2/dungeon-map-dag.jpg)
*"Zephyr Fields" — the Aeolia biome's dungeon map. Pick your path through the DAG; the legend (left) shows node types: Chest, Event, Potion, Blacksmith, Recipe, Elite Enemy, Miniboss, Boss, Ice Perk, Thunder Perk. Source: [Steam](https://store.steampowered.com/app/2350790/Moonlighter_2_The_Endless_Vault/).*

## Node types

Read off the in-game legend:

- **Chest** — fight an encounter, claim a relic.
- **Event** — narrative + decision (often costs/benefits).
- **Potion** — consumable refill.
- **Blacksmith** — mid-run gear adjustment.
- **Recipe** — unlock a new craftable / shop item.
- **Elite Enemy** — harder fight, better reward.
- **Miniboss** — sub-boss.
- **Boss** — biome's final encounter.
- **Ice Perk / Thunder Perk** — branch your damage profile.

## Why the map is the design fulcrum

The same logic as Slay the Spire: **the map is the meta-decision layer that wraps the combat layer.** Every node-choice is a small risk/reward call:

- Chase the boss path for completion.
- Detour for a perk to make the boss easier.
- Take the Elite for a better relic but burn HP.
- Visit a Blacksmith to fix a broken build.

Critically, paths are visible from the start of the run — so you plan the *shape* of the run before the first encounter.

This is a deliberate Hades-inspiration. Devs cite it explicitly:

> "The progression is clearly inspired by Hades in terms of choosing your path, choosing which upgrade you want."

## Perk choices on the map

Two of the node types — **Ice Perk** and **Thunder Perk** — are explicit damage-profile choices. Picking one closes off the other for that run. This is a **bonus-with-drawback** in disguise: the bonus is more damage in one element, the drawback is opportunity cost (no synergy with the other element this run).

In Hades terms, these are equivalent to the gods you accept boons from.

## Procedural arrangement, hand-authored encounters

Same trick as Sparklite, Warframe, and Spire: **author content at the unit level, randomize the layout.** Each Chest / Event / Boss is hand-tuned; *which* of them appears at *which* floor of the map is procedural.

See [`handcrafted-pcg-hybrid`](/concepts/handcrafted-pcg-hybrid).

## What this teaches

The Moonlighter 2 map is a **strong endorsement of the DAG-map pattern even outside roguelike-deckbuilders.** The original Moonlighter had hand-authored dungeons — and one of the most-cited improvements in the sequel is "you now feel like you're choosing a run shape, not just walking through one."

For any game with sequential encounters, the cost of adding a node-map is small (one extra UI screen) and the perceived-agency upgrade is huge.

## Patterns this exemplifies

- [`branching-dag-map`](/patterns/branching-dag-map)
- [`handcrafted-pcg-hybrid`](/patterns/handcrafted-pcg-hybrid)
- [`bonus-with-drawback`](/patterns/bonus-with-drawback) — perk node choices.
