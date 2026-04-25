---
title: "Warframe — Combat"
type: game
game: warframe
patterns:
  - damage-type-matrix
  - damage-archetype-via-tags
  - handcrafted-pcg-hybrid
  - tile-shuffled-world
---

# Combat

Less novel than the meta systems, but worth a page because it's the *fun* — and because the damage-type matrix is a genuinely strong combat-design pattern.

![In-mission HUD: shields, energy, ability bar, minimap, weapon reticle](/images/warframe/in-mission-hud.jpg)
*In-mission HUD. Shields (blue), health (red), energy (yellow), 4-ability bar (bottom-left), minimap, waypoint markers. Tile-set procedural levels under the action layer. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=192).*

## Movement is its own minigame

Crouch + jump = a directional **bullet jump** dash. Aim-glide, wall-latch, slide. Movement feels closer to Tribes / Quake than to most looter-shooters.

Combat that asks for fast movement *plus* big AoE *plus* power-fantasy abilities = a kinaesthetic pull most loot games don't have.

## Three weapons + abilities

- **Primary** (rifle, bow, sniper, etc.).
- **Secondary** (pistols, throwing weapons).
- **Melee** (sword, hammer, polearm, gunblade, whip-claw, …).
- **4 frame abilities** consuming Energy.

Cycle freely between them. Most missions reward switching — heavy gunners for crowd, melee for heat-wave room clears, abilities for boss debuff windows.

## Damage type matrix

The actual combat-design depth lives here.

**Physical damage types:**
- Impact (best vs Shields)
- Puncture (best vs Armor)
- Slash (bleed status, ignores armor)

**Elemental:**
- Heat, Cold, Electric, Toxin

**Combined elements** (mix two basics):
- Heat + Cold = Blast
- Toxin + Cold = Viral (4× damage to Flesh)
- Toxin + Electric = Corrosive (strips Armor)
- Heat + Electric = Radiation (best vs Alloy Armor)
- Heat + Toxin = Gas
- Cold + Electric = Magnetic (best vs Shields)

Each enemy faction (Grineer / Corpus / Infested / Sentient / Murmur) has its own armor/flesh/shield distribution with rock-paper-scissors weaknesses.

**Build crafting is partly choosing which elements to layer.** A weapon with Toxin + Cold mods does Viral, ignores armor scaling, and demolishes Grineer flesh — but is mediocre against Corpus shields. So players carry multiple builds or pick the loadout per mission.

The depth isn't *raw damage* — it's *damage type*. See `damage-type-matrix`.

## Status effects as build-defining tags

Each damage type has its own **status effect**:

- Slash → bleed (DoT, ignores armor).
- Heat → ignite (DoT + strips armor).
- Viral → 4× damage multiplier to flesh.
- Corrosive → strips armor stacks.
- Electric → chain damage + AoE proc.

Many builds chase a *status* not a *damage number*. "Slash priming" or "Viral spam" are recognized playstyles. The pattern: **status effects become an alternative scaling axis** to raw damage. Players tag a build by its status, not by its DPS.

See `damage-archetype-via-tags` (concept page TBD).

## Tile-set procedural levels

Hand-authored tile-sets, procedurally connected.

The exact same trick Sparklite uses for its biomes — Warframe shipped it 6 years earlier. Mission types (Survival, Defense, Disruption, Capture, …) define objectives; tile-sets (Grineer asteroid, Corpus ship, Infested ship, Earth forest, …) define aesthetic and layout vocabulary. The procedural piece is *which* tiles get connected this run; the hand-crafted piece is *what's inside* each tile.

See [`handcrafted-pcg-hybrid`](/concepts/handcrafted-pcg-hybrid).

## 4-player co-op

Up to 4 players per mission. Enemy stats scale with player count. Friendly fire off. No PvP in core loop (Conclave exists but is largely abandoned).

The **power fantasy** intent is explicit. Maxed builds melt entire rooms — by design — but DE periodically nerfs frames whose room-clearing removes other players' ability to *participate*. Tension between "I'm a god" and "I'm part of a squad" is unresolved and likely permanent. See [design tensions](./design-tensions.md).

## Patterns this exemplifies

- `damage-type-matrix`
- [`handcrafted-pcg-hybrid`](/concepts/handcrafted-pcg-hybrid)
