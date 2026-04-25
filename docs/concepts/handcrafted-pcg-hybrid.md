---
title: "Handcrafted-PCG hybrid"
type: concept
patterns:
  - handcrafted-pcg-hybrid
related_patterns:
  - branching-dag-map
  - tile-shuffled-world
---

# Handcrafted-PCG hybrid

> **Lemma:** Hand-author content at the *room/tile* level. Procedurally generate the *layout* connecting them. Players experience variety; you author at fixed cost. Avoids the "procedurally-generated mush" problem without paying full hand-authored content tax.

## What it solves

Two extremes of level design have known problems:

- **Fully hand-authored** — every level is great, but the content cost is massive and replayability dies once you've seen everything.
- **Fully procedural** — infinite content, but the per-moment quality drops because the generator can't match a designer's eye for puzzles, set-pieces, narrative beats.

The hybrid splits the difference: **procedural at one level of abstraction, hand-crafted at another.** Specifically — author the *content units* (rooms, tiles, encounters), procedurally choose *which units appear and how they connect.*

This is now the dominant pattern in modern roguelites. Once you see it, you see it everywhere.

## Variants across games

| Game | What's hand-authored | What's procedural | Why this works |
|---|---|---|---|
| **[Sparklite](/games/sparklite/world-and-loop)** | Individual tiles: vault rooms, furnace mini-dungeons, mine-shaft trap gauntlets, NPC encounters | The biome layout — which tiles get arranged where, on each death-shuffle | Devs explicitly rejected procedural puzzles; author a small library of tiles, shuffle each run |
| **[Warframe](/games/warframe/combat)** | Tile-sets per faction (Grineer asteroid, Corpus ship, Infested ship, Earth forest, …) | Which tiles connect into the mission layout each run | Mission *type* (Survival, Defense, …) defines objective; tile-set defines aesthetic; layout is procedural |
| **[Slay the Spire](/games/slay-the-spire/map-and-nodes)** | Each fight, event, shop, rest is a hand-authored encounter | The DAG map of *which* encounters appear on *which* floor, in what branching pattern | Encounters are individually tuned; the player's path through them is the procedural axis |
| **[Moonlighter 2](/games/moonlighter-2/dungeon-map)** | Hand-tuned encounter rooms (chests, events, blacksmiths, bosses) per biome | The dungeon map DAG — which node types appear in what arrangement | Same trick as Spire's map but in 3D action context; node-type variety drives perceived depth |

### Visual contrast — a hand-authored unit from each game

| Sparklite tile | Warframe tile-set | Slay the Spire encounter | Moonlighter 2 dungeon map |
|---|---|---|---|
| ![Mine-shaft trap-gauntlet](/images/sparklite/trap-gauntlet.jpg) | ![Warframe in-mission HUD on a tile-set level](/images/warframe/in-mission-hud.jpg) | ![Council of Ghosts event](/images/slay-the-spire/event-council-ghosts.jpg) | ![Moonlighter 2 Zephyr Fields map](/images/moonlighter-2/dungeon-map-dag.jpg) |
| One trap-gauntlet tile, hand-authored, dropped into a randomized biome layout | A Corpus tile, hand-authored, connected procedurally with other tiles into a mission | One narrative event encounter, hand-authored, slotted procedurally into a map node | Each map node hand-authored; the DAG arrangement chosen procedurally per descent |

## When to use this pattern

- **Roguelites, roguelikes, and any game where you want runs to feel different.**
- **Live-service games that need to ship infinite content** without infinite content budget.
- **Games where you want player agency over the run's *shape*** but not its *content quality*.
- **Anywhere full PCG would break a critical type of content** (e.g. puzzles, narrative beats, set-piece encounters).

The pattern requires:
- A clean *unit of authoring* — a tile, a room, an encounter — that's small enough to author many of.
- A *layout layer* with rules for how units can be combined (DAG edges, tile-set adjacency, biome zones).
- **Variety at the unit level**, or the procedural shuffling will feel hollow.

## Pitfalls

- **Too few units.** Sparklite gets criticized for this — the same enemy-room types appear in every biome, just rearranged. Players notice. Either author more tile variety up front (expensive) or use **tile modifiers** (different enemy spawns, lighting, hazards on the same base tile) to multiply effective content cheaply.
- **Procedural connections that produce dead-end runs.** Edge case: the layout generator produces an objectively impossible / boring path. Constrain the generator (Spire fixes Floor 6 = Treasure, Floor 9 = Rest in Act 1) so the player always gets *some* shape they can navigate.
- **Inconsistent narrative.** If your hand-authored units have story or character beats, procedural ordering breaks them. Either keep narrative in non-procedural rails (Spire keeps story to bookend cutscenes) or accept that narrative is fragmented (Warframe's mission flavor).
- **Player blindness to the procedural layer.** If the layout shuffle is too subtle (Sparklite's biome reshuffle), players miss the variety entirely. **Show the player that something is randomized** — a visible map (Spire) or visible biome reshuffle effect (Sparklite's "fracture" animation) helps.

## Adjacent patterns

- [`branching-dag-map`](/concepts/branching-dag-map) — Spire's specific layout structure. Visible to the player, partial-info path planning.
- [`tile-shuffled-world`](/concepts/tile-shuffled-world) — Sparklite's specific implementation. Less visible, but cheap to ship.

## Why this matters as a design lesson

The hybrid is the **modern replayability default.** Pure-PCG roguelikes (NetHack, ADOM) feel dated to most players because their generated content can't compete with hand-tuned moments. Pure-handcrafted games (most AAA) burn out quickly because once you've seen the content, you've seen the game.

Three different games — a small indie roguelite, a 12-year live-service shooter, a deckbuilder — converge on the same trick. **That's not a coincidence; it's the pattern winning.**

For any game with a "runs / sessions / playthroughs" shape, the question to answer up front is:

1. What's my **unit of authoring**?
2. What's my **layout layer**?
3. How much **variety per unit** can I afford?

Get those right and the game ships with replay value baked in.
