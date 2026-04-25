---
title: "Hades — Chamber paths"
type: game
game: hades
patterns:
  - branching-dag-map
  - handcrafted-pcg-hybrid
---

# Chamber paths

How the player navigates a run. Each biome is a **directed acyclic graph of chambers** — pick a door at chamber-end, see what reward it telegraphs, walk through. The graph is shallow (~12–20 chambers per biome) but the *door icons* let the player shape the run.

![Hades II exploration HUD — Melinoë in the Erebus biome with abilities row, Magick + HP bars, gold counter](/images/hades/h2-exploration-hud.jpg)
*Mid-chamber exploration in Erebus. Top-left: gold counter (1) and Magick stack (under it). Left side: ability row showing equipped Cast / Sprint / Magick / Hex slots. Bottom-left: Magick bar (cyan, 30/50) over HP bar (red, 21/30). The HUD itself is minimal — most of the screen is environment art. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2192).*

## Reward door icons — the foreshadowing layer

When the player clears a chamber, the doors leading to the next chamber each show a **reward icon**:

| Icon | Reward |
|---|---|
| ⚡ god symbol | A boon from that specific god |
| 🔨 anvil | Hammer of Daedalus (weapon upgrade) |
| 💰 gold pile | Gold (currency for the in-run shop) |
| 💎 gem | Crystallized Currency (long-term meta-currency) |
| 🍷 nectar | Gift currency for hub characters |
| ❤️ heart | Healing chamber |
| 🌑 ⭐ ✨ | Various biome-specific currencies |
| 👁️ Charon | Shop chamber (spend gold) |
| ⛏️ pickaxe | Encounter sub-type or special chamber |

So when the player picks a door, they're picking the *reward type* they need most right now. Low health → take the heart. Low gold → take the shop. Need build commitment → take the god boon you're stacking.

This is **`branching-dag-map`** — the player picks the run's shape via partially-visible information about node types, exactly Spire's pattern. Hades and Spire share this design language explicitly; the studios were aware of each other.

## Biome structure (Hades 1 reference)

```
Tartarus     (~14 chambers + mini-boss + biome boss)
   ↓
Asphodel    (lava biome, faster-paced enemies)
   ↓
Elysium     (knight enemies, pillar mechanics)
   ↓
Temple of Styx (4 sub-paths leading to final boss)
   ↓
Final boss → ending → start over
```

A typical run is ~20–40 minutes from start to credits-or-death. Hades 2's two-path structure is similar but **branched**: the descent (Tartarus → Erebus → Oceanus → boss) and the ascent (Surface → boss). Players can do either each run.

## Handcrafted-PCG hybrid

Each chamber is a **hand-authored room** — a bespoke arena with set-pieces, traps, and enemy spawn locations. The procedural layer just decides:

- *Which* rooms get connected this run (from a pool of ~30 per biome).
- *Which* enemy spawns trigger.
- *Which* reward type each exit door offers.
- *Which* boons / hammers / shops are available.

So the *moments* are static (this trap room, this boss tell, this elite mini-arena), but the *order* and *rewards* shuffle. Same shape as Sparklite's tile-shuffled biomes or Warframe's tile-set missions — Hades just uses smaller arena-shaped tiles instead of corridor-shaped tiles.

See [`handcrafted-pcg-hybrid`](/concepts/handcrafted-pcg-hybrid).

## Throwing-arc UI — telegraphing the player's own attacks

![Combat in Erebus showing the cast / throwing-arc trajectory line — long arrow indicating direction the cast will travel](/images/hades/h2-throwing-arc.jpg)
*The throwing-arc UI showing the trajectory of an attack. The arc lets the player aim casts before committing — the same insight as `enemy-intent-telegraph` (Slay the Spire's enemy intent), but applied to the player's own moves. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2192).*

Hades 2's UI shows the player's own attack telegraphs — where a Cast will land, the angle a thrown weapon will travel, the AoE of a Hex. This is unusual; many action games hide the player's own range. Hades's framing: **the player should be able to read their own kit as cleanly as they read enemy intent.** Combat becomes a 2-way puzzle.

## Patterns this exemplifies

- [`branching-dag-map`](/concepts/branching-dag-map) — door-icon foreshadowing is the same shape as Spire's map.
- [`handcrafted-pcg-hybrid`](/concepts/handcrafted-pcg-hybrid) — arena-tile authored, run-order shuffled.
