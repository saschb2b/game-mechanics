---
title: "Branching DAG map"
type: concept
patterns:
  - branching-dag-map
related_patterns:
  - handcrafted-pcg-hybrid
  - bonus-with-drawback
og_image: images/moonlighter-2/dungeon-map-dag.jpg
---

# Branching DAG map

> **Lemma:** A directed acyclic graph of node types between start and end. The player picks a path from a *partially visible* graph at the start of a run and commits to a sequence of risks. Replaces "string of random encounters" with "chosen route through encounter types."

## What it solves

The default roguelite shape is "random encounters in sequence." Hades' early prototypes worked that way; so did the original Moonlighter. The problem: each encounter feels like an independent dice roll, and the run feels like things *happening to* the player.

A branching DAG makes the run feel like the player **chose its shape.** Every node-choice is a small risk/reward call — take the elite for a relic, skip a rest to hit a shop, detour for the perk you need before the boss. The map turns "what's next?" into "what's *my* path?"

This is one of the most-imitated patterns in modern roguelites. Slay the Spire popularized it; Monster Train, Inscryption, Across the Obelisk, Wildfrost, Hades (in its softer way), Moonlighter 2 all use variants.

## Variants across games

| Game | Map shape | Node types | What's revealed |
|---|---|---|---|
| **[Slay the Spire](/games/slay-the-spire/map-and-nodes)** | Vertical DAG, 15 floors per act | Monster, Elite, Event, Shop, Rest, Treasure, Boss | Whole act visible from floor 1 |
| **[Moonlighter 2](/games/moonlighter-2/dungeon-map)** | Horizontal DAG per biome | Chest, Event, Potion, Blacksmith, Recipe, Elite, Miniboss, Boss, Ice/Thunder Perk | Full biome path visible at start |
| **[Hades](/games/hades/chamber-and-paths)** | Per-biome chamber DAG, *one chamber visible ahead* | Boon (per god), Hammer, Gold, Healing, Charon shop, Nectar, biome-specific currencies | Just the next chamber's reward — no whole-biome view; the player commits chamber-by-chamber |

### Visual contrast

Spire's map (DAG node graph) isn't yet captured locally; see the [wiki](https://slaythespire.wiki.gg/wiki/Map_Locations).

| Moonlighter 2 — Zephyr Fields biome map |
|---|
| ![Moonlighter 2 dungeon map showing DAG of node types](/images/moonlighter-2/dungeon-map-dag.jpg) |
| Full DAG visible at the start of the descent. Legend (left) shows the node-type vocabulary. |

Both games make the map a single screen, with all node types in a legend. **The player plans the run shape before the first encounter.**

## When to use this pattern

- **Any game with sequential encounters** — turn-based, action, deckbuilder, even narrative.
- **When you want player agency over the run *shape*** without committing to per-encounter procedural generation.
- **Genre-fusion games** that need to give players a hook into the structure (Moonlighter 2 used the Hades-style map specifically to make the dungeon half feel "chosen" again).

Avoid when:
- The game is open-world or non-linear by design.
- Run length is short enough that route-planning doesn't pay off (~5 minutes or less).

## Pitfalls

- **All paths are equivalent** — if the optimal route is "always take the rightmost path," the choice is illusory. Spire and Moonlighter 2 both use procedural variation in node placement to keep this from happening.
- **One node type strictly dominates** — if Elites are always worth taking, the DAG collapses to "find Elites." Cost-balance Elites with HP cost or relic-quality variance.
- **Map too readable** — if every run's optimal path is computable in 10 seconds, the puzzle is shallow. Random small variations (which Elite, which event resolves to what) reintroduce uncertainty.
- **Map too noisy** — if there's no signal, players just rush forward. Some node types should be obvious wins, some should be obvious traps, and the rest should be *interesting* trades.
- **Forced backtracking** — DAGs should mostly enforce forward motion. Allowing backtracking complicates UX and undermines the "this is your path" framing.

## Adjacent patterns

- [`handcrafted-pcg-hybrid`](./handcrafted-pcg-hybrid.md) — DAG maps are the canonical example of "hand-author the units, randomize the layout."
- [`bonus-with-drawback`](./bonus-with-drawback.md) — node choices that lock in a build direction (Moonlighter 2's Ice vs. Thunder perk nodes; Spire's act bosses with their relic choices).
