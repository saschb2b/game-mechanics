---
title: "Mina the Hollower — Hollowing (the burrow verb)"
type: game
game: mina-the-hollower
patterns:
  - burrow-dodge
---

# Hollowing — the burrow verb

Mina is a *Hollower*: she can burrow into the ground for a short beat, travelling beneath the surface and surfacing wherever she chooses. The whole game is authored around this one input. It is, simultaneously:

1. **The dodge.** While Hollowed, Mina is invincible and passes *under* enemies, projectiles, spikes, and pits. It is the i-frame roll of a Souls game, re-skinned as digging.
2. **The traversal verb.** Burrowing crosses gaps, slips beneath gates and grates, and covers short distances quickly. Much of the level geometry is gated on "can you burrow across this?"
3. **The opener.** Pop up *inside* an enemy's guard, behind a shield, or under a telegraphed swing, and you surface already in attack position.

> Lead designer David D'Angelo: *"It was in the game from the start! It didn't evolve during development, but every enemy or object or NPC that went into the game, we often had to think of it in the context of the burrow."*

That last quote is the design thesis. The combat, the enemies, and the level design all rotate around the burrow. It was there from the start, so every system had to account for it: each enemy is partly defined by *how it answers a burrow*, each room by *what a burrow lets you skip or reach.*

## Why a burrow instead of a roll

A dodge-roll moves you *across* the surface; a burrow moves you *under* it. The difference matters:

- **It changes the plane.** A roll stays in the same 2D contact layer as the threat. A burrow drops Mina out of that layer entirely — under floor spikes, under a charging enemy, under a sweep of bullets — and that reads instantly in a top-down game because the sprite literally vanishes into the ground.
- **It doubles as level grammar.** Designers can place grates, narrow gaps, and shallow trenches that *only* a burrow clears, reusing the dodge input as a traversal key without teaching a second control.
- **It is legible at a Game Boy resolution.** The "Mina sinks, dirt puffs, Mina rises" animation is unmistakable even at chunky pixel sizes — important when [the whole game runs in a GBC-style palette](./world-and-newspaper.md#the-constraint-as-a-feature) and telegraphs have to read at a glance.

![The manual's Basic Controls page: 8-direction movement, the attack button, and the note that holding attack performs other moves](/images/mina-the-hollower/manual-basic-controls.jpg)
*The control surface is tiny — 8-way movement, one attack button, one Hollow. Holding attack performs additional moves. A small input set is the point: depth comes from how the burrow recombines with everything else, not from a fat moveset. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

## Surfacing is the skill

The risky half of Hollowing is **when to surface.** Underground you're safe but you aren't attacking; the moment you rise you re-enter the threat layer. Expert play is a tight loop:

```
read the wind-up → burrow (vanish under the attack) → reposition under/behind the enemy
              → surface → land the hit in the recovery window → burrow back out
```

It is the burrow→surface→strike cadence that gives Mina its identity — the same role the dodge-roll-into-punish plays in Bloodborne, which the developers cite directly. Surface too early and you eat the attack you just dodged; stay under too long and the opening closes. Because [the weapons themselves commit you](./combat-and-weapons.md) — attacks have real recovery — the discipline of *not* surfacing until the window is open is most of the difficulty curve.

## Sidearms and trinkets bend the verb

Hollowing isn't a fixed ability; it's an upgrade surface. Tools and passives change *what burrowing does*:

![A sidearm vendor selling the Seismic Belt: "Press B while burrowing to emit a damaging pulse"](/images/mina-the-hollower/sidearm-shop-seismic-belt.jpg)
*The Seismic Belt turns the burrow from a pure defensive verb into an offensive one — "Press B while burrowing to emit a damaging pulse." Now the safe state deals damage, and a defensive dodge becomes an AoE opener. This is the template for how [sidearms](./sidearms-and-joules.md) and [trinkets](./trinkets.md) extend the core verb instead of adding parallel ones. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

Other examples the game builds on the same hook:

- **Wallower's Gauntlets** (trinket) — lets Mina burrow directly *into walls*, not just floor, turning the dodge into a Metroidvania traversal key that opens previously sealed rooms.
- **Burrow-duration / surfacing trinkets** — extend the safe window or add an on-emerge effect (damage, a brief buff), nudging builds toward burrow-centric play.

Every one of these is the same design move: **don't add a new verb, deepen the one verb.** A player who has mastered Hollowing keeps that mastery and just gains new *expressions* of it — the opposite of a game that teaches a roll and then makes it irrelevant once you unlock a better movement option.

## Why it works as the spine

- **It collapses three tutorials into one.** Players learn dodge, traversal, and openers from a single input, so the early game is uncluttered and the late game is deep.
- **It gives enemies a shared design question.** "How does this enemy punish a lazy burrow?" yields ground-pounders, delayed attacks, and surface-readers — a coherent bestiary instead of a grab-bag.
- **It scales with the player, not the stats.** Because Hollowing is execution, not a number, the same ability that saves you in the first hour is still carrying you in the boss rush — the engagement curve rides skill, not gear.

## Patterns this exemplifies

- `burrow-dodge` *(uncurated)* — a single input that is the i-frame dodge, the traversal key, *and* the attack opener. Adjacent to the dodge-roll lineage but distinguished by changing the *plane* (under-surface), which is what lets it double as level grammar. Candidate for a curated concept page once a second game on the site exemplifies a plane-shifting dodge.
