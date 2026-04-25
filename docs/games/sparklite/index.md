---
title: "Sparklite"
type: game
status: research-only
studio: Red Blue Games
released: 2019
genre: action-adventure-roguelite
business_model: premium
iconic_mechanic: "Patch-board grid inventory + permalife"
core_dialectic: "Power growth vs spatial budget"
patterns:
  - grid-inventory
  - power-creep-mitigation
  - permalife
  - handcrafted-pcg-hybrid
  - bounded-roguelite
  - fusion-economy
  - opportunity-cost-loadout
tags: [roguelite, zelda-like, indie, single-player]
---

# Sparklite

> 16-bit top-down action-adventure × roguelite. Top-of-mind because of two things: a **Tetris-style "patch board"** that turns power upgrades into a spatial puzzle, and **"permalife"** — death reshuffles the world but the character keeps progress.

![Refuge hub overview, the persistent home base](/images/sparklite/refuge-hub.jpg)
*The Refuge — Sparklite's persistent hub. NPCs and facility upgrades accumulate across deaths. Source: [Steam](https://store.steampowered.com/app/943140/Sparklite/).*

## Snapshot

| | |
|---|---|
| **Studio** | Red Blue Games (Edward + Lucas Rowe, Kevin Mabie) |
| **Released** | November 2019 |
| **Platforms** | PC, PS4, Xbox One, Switch, mobile |
| **Run length** | 10–30 min per descent; ~20-hour campaign |
| **Iconic mechanic** | Patch-board grid inventory + permalife |
| **Core dialectic** | Power growth vs spatial budget |
| **Inspirations** | Link's Awakening, Binding of Isaac |
| **Setting** | Planet Geodia. Steampunk + fantasy. Anti-industrialism / climate-change allegory. |

## Macro loop

```
Refuge (hub, persistent)
  → choose loadout: weapons, gadgets, patches arranged on grid
  → descend to Geodia surface (procedurally arranged tiles)
    → explore biome, fight enemies, find vaults/furnaces/chests
    → collect Sparklite, patches, gadget schematics
    → either: defeat the area's Titan (boss) → progression beat
    → or: die → world re-fractures and rearranges
  ← return to Refuge
    → spend Sparklite on facility upgrades
    → fuse / rearrange patches on the grid
    → talk to NPCs (some give repeatable quests)
  → next descent
```

The hook: **the world rearranges on death, but the character doesn't.** The devs call this "permalife" instead of "permadeath" — the replay structure of a roguelite without its hostility to narrative or to less-skilled players.

## Mechanic deep-dives

- [**Patch board**](./patch-board.md) — the headline mechanic. Tetris-style power placement with footprint as opportunity cost.
- [**World structure & loop**](./world-and-loop.md) — Refuge hub, tile-shuffled biomes, what brings you back.
- [**Combat**](./combat.md) — wrench, gadgets, sub-weapons; pattern recognition over reflex.

## What this game teaches

- A small grid is a brutal forcing function for choice.
- "Permalife" is a friendlier alternative to permadeath that retains roguelite tempo.
- Hand-authored tiles + procedurally chosen layout is a great cost/value point if full PCG is out of reach.
- **Don't let meta-progression solve the early game *too* well — you'll trivialize the mid-game.** The patch board solves the start so cleanly that, once stacked, mid-game becomes a victory lap.

See [lessons](./lessons.md) for the longer take and [design tensions](./design-tensions.md) for what the devs themselves said about the choices.

## See also

- [Patterns this exemplifies](./patterns.md)
- [Design tensions](./design-tensions.md)
- [Sources](./sources.md)
