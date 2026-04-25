---
title: "Path of Exile — Atlas of Worlds"
type: game
game: path-of-exile
patterns:
  - nested-progression-graph
  - atlas-as-build
  - meta-progression-tree
---

# Atlas of Worlds

The post-campaign map system. **The campaign exists to onboard you to mechanics; the Atlas is the actual game.** Atlas of Worlds was added in expansion 2.4 (August 2016) and has been the load-bearing endgame structure ever since.

![PoE1 Atlas of Worlds — over a hundred map nodes connected by paths in a single web](/images/path-of-exile/atlas-of-worlds.jpg)
*The Atlas — ~115 map zones connected in a web. Each circle is a map; you traverse by completing maps to unlock adjacent ones, and each map has its own Atlas-tree affixes that the player can build into. Source: [Steam](https://store.steampowered.com/app/238960/).*

## Structure

- **Tier 1 → Tier 16 maps.** Each map is a self-contained zone (~5–10 minutes). Tier scales monster level and rewards.
- **~115 distinct map archetypes.** Each archetype has its own layout, monster mix, and ambience.
- **Voidstones** (4 in total) — earned from pinnacle bosses; each Voidstone raises the *effective* tier ceiling so all maps scale to T16. Without Voidstones, low-tier maps stay low-tier.
- **Atlas Passive Tree** — a separate ~700-node passive tree that shapes which league mechanics, map mods, and rewards spawn in your maps. Earned by completing maps with bonus objectives.

## Maps as items

Maps are **physical drop items.** They drop from monsters, get rolled with affixes the same way gear is, and get *consumed* when used.

- **Item Quantity (IIQ)** — increases the number of items dropped from monsters in this map.
- **Item Rarity (IIR)** — increases the rarity of those items.
- **Pack Size** — increases the number of monsters in the map.
- **Map mods** — combat-difficulty modifiers ("monsters deal 100% extra damage as fire", "no life regeneration", etc.). Each mod added increases reward but *also* increases the chance you die.

The early endgame is therefore a **sustain puzzle:** you need maps risky enough to drop more maps (and currency), but not so risky that you die in them.

## The Atlas Passive Tree — the meta-build

Introduced as per-region trees in 3.13 (Echoes of the Atlas, 2021), unified into a single global tree in 3.17 (Siege of the Atlas, 2022). It's a separate progression *axis* from the character's own passive tree.

**Players "build" their Atlas like they build a character.** Specialize into Breach, Legion, Essence, Expedition, etc. — or take generalist mass-density nodes. Each league mechanic (Heist, Delve, Sanctum, Expedition, Ritual, Ultimatum, Beyond, Anarchy, Bloodlines …) is exposed to the player as a **knob on the Atlas tree**, not as a standalone system.

This is what makes the Atlas feel like a build instead of a checklist. **You're not just running maps — you're running maps tuned to drop *your* preferred currency stream.**

## Pinnacle bosses

PoE1 has a small constellation of pinnacle bosses gated behind multi-step Atlas progressions:

| Boss | Source | Drop tier |
|---|---|---|
| **Sirus, Awakener of Worlds** | The Conquerors of the Atlas (Citadels) | Awakened gems, Influence orbs |
| **The Maven** | Maven's Invitations | Orbs of Conflict, Maven's Orb |
| **Searing Exarch** | Eldritch Altar progression | Eldritch Embers (implicits) |
| **Eater of Worlds** | Eldritch Altar progression | Eldritch Ichors (implicits) |
| **Uber Elder** | Shaper's Realm | Watcher's Eye, top tier uniques |

Each has an **Uber version** at significantly increased difficulty, sold as a chase fight for endgame characters. Each one's drops feed into specific crafting paths — beating each boss is *also* unlocking a tier of build materials.

![Pinnacle Atlas Boss "Incarnation of Fear" mid-fight, fire boss with phase-rotating area attacks](/images/path-of-exile/pinnacle-boss-fear.jpg)
*Pinnacle Atlas Boss combat — the design role is build-test plus economy tap. Each pinnacle drops a tier of crafting materials specific to its mechanics. Source: [Steam](https://store.steampowered.com/app/238960/).*

## The standard endgame progression

```
Acts 1–10 (campaign, the prologue)
  → unlock Maps (T1–T5, white tier)
  → yellow maps (T6–T10) — first real challenge
  → red maps (T11–T16) — Atlas tree starts mattering
  → Conquerors (4 mini-bosses) → Sirus → first 2 Voidstones
  → Eldritch Altar progression → Searing Exarch + Eater of Worlds → 2 more Voidstones
  → fully scaled T16 Atlas — every map is now max difficulty
  → 8-mod bosses, Maven invitations, Uber pinnacles
```

**The wall is 8-mod content** — invitations rolled with 8 stacked map mods. These require a build that survives gigantic damage spikes plus 5 simultaneous bosses. Casual builds stop here; min-maxed builds clear them efficiently. The cliff between "I beat the campaign" and "I cleared the Feared 8-mod" is roughly the cliff between 50 hours and 500 hours of skilled play.

## What works and what doesn't

**Works:**
- Atlas-as-build is widely loved. Player choice over which league mechanics spawn turns a generic monster-density grind into a personalized loot loop.
- Pinnacle bosses are some of the genre's best fights — multi-phase, mechanically dense, build-testing rather than DPS-checking.
- The Voidstone progression gives endgame an actual finish line (rare in F2P live-service ARPGs).

**Doesn't:**
- **Map sustain** is a perennial complaint. Mid-tier players can stall hard if RNG denies maps.
- The 10% XP penalty at level 95+ feels disproportionate when one-shots exist.
- Layout RNG (Crypt, Burial Chambers vs. open maps like Strand) makes league mechanics inconsistent — some maps support certain mechanics, some don't.
- The sheer surface area (Atlas tree + sextants + scarabs + influence + altars + …) is a wall for returning players.

## Patterns this exemplifies

- [`nested-progression-graph`](/concepts/nested-progression-graph) — the Atlas is one of three orthogonal trees (character passive, ascendancy, atlas). Each is its own progression axis.
- `atlas-as-build` — the meta-game gets its *own* build space, not just a difficulty slider.
- `meta-progression-tree` — earning passive points from completing maps (not character XP) decouples meta-progression from per-character progression.
