---
title: "Sparklite — World structure & loop"
type: game
game: sparklite
patterns:
  - permalife
  - handcrafted-pcg-hybrid
  - tile-shuffled-world
  - bounded-roguelite
---

# World structure & loop

<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <img src="/images/sparklite/vinelands-biome.jpg" alt="Vinelands biome" style="max-width: 49%; border-radius: 4px;">
  <img src="/images/sparklite/shifting-sands-biome.jpg" alt="Shifting Sands biome" style="max-width: 49%; border-radius: 4px;">
</div>

*Two of Sparklite's five biomes — Vinelands (left) and Shifting Sands (right). Each biome is hand-authored at the tile level, then procedurally shuffled into a fresh layout on each descent. Source: [Steam](https://store.steampowered.com/app/943140/Sparklite/).*

## Two layers: persistent hub, shifting frontier

- **Refuge** — persistent hub. NPCs accumulate as you rescue them. Facility upgrades stay upgraded across deaths.
- **Geodia** (the surface) — procedurally *arranged*, not procedurally *generated*.

This is the key distinction. The devs explicitly rejected procedural dungeons because *"very few puzzles work well in a repeated context and procedurally reproducing the elegant progression of puzzles you see in a Zelda dungeon is not something we wanted to tackle."* Instead: hand-author tiles at the room level, randomize the layout.

Result: every descent feels like a fresh map, but the *moments* in it (a particular trap gauntlet, a vault puzzle, a furnace mini-dungeon) are still hand-tuned.

## Five biomes, five Titans

Each biome has:
- One **Titan** (area boss, gates the next biome).
- One **Vault** (one-time gadget unlock).
- A handful of **Furnaces** (mini-dungeons that respawn but eventually downgrade to plain Sparklite).
- **Chests, mine-shaft trap gauntlets, NPC encounters** seeded across tiles.

![Mine-shaft trap-gauntlet tile interior](/images/sparklite/trap-gauntlet.jpg)
*A mine-shaft trap-gauntlet tile — one of the hand-authored unit types shuffled into biome layouts each descent. Source: [Steam](https://store.steampowered.com/app/943140/Sparklite/).*

Reviewers note that each biome is always positioned in a fixed direction relative to the central grasslands, so map-marker patches are useful but not strictly required.

## Permalife

The defining choice. When the player dies:

- The character keeps everything: Sparklite, patches, gadgets, NPCs, facility upgrades.
- The world fractures and reshuffles: tile layout changes, chests respawn, NPCs sometimes relocate.

This is the **roguelite-without-the-cruelty** pattern. The replay structure (every run is a fresh map) is preserved, but progress isn't punished. It also makes Sparklite friendlier to narrative: dying isn't a story break, it's a story beat.

Trade-off the design accepts: the reshuffle has lower replay variety than full PCG. Reviewers noted that the same enemies/puzzles appear in the same room types, just in different positions. The randomness feels superficial to players coming from Spire / Hades / Isaac.

## Reward / retention loops

- **Per-run (~10–30 min)** — explore biome, gather Sparklite + patches, die or beat the Titan, return.
- **Mid-loop (~hours)** — accumulate enough Sparklite to upgrade a facility tier, or unlock a new gadget that opens a new biome.
- **Macro (~the campaign)** — five Titans → endgame → credits.

The devs explicitly **rejected the "thousands of hours" roguelite model.** Sparklite is one of the few roguelites with a real conclusion rather than infinite escalation. That's an unusual call worth flagging on its own — see [`bounded-roguelite`](/concepts/bounded-roguelite).

## Patterns this exemplifies

- [`permalife`](/patterns/permalife)
- [`handcrafted-pcg-hybrid`](/concepts/handcrafted-pcg-hybrid)
- [`bounded-roguelite`](/concepts/bounded-roguelite)
