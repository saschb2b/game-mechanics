---
title: "Path of Exile 2 — Combat philosophy"
type: game
game: path-of-exile-2
patterns:
  - anti-screen-clear-combat
  - enemy-intent-telegraph
---

# Combat philosophy

The single biggest mechanical departure from PoE1. **PoE2's combat is slower, more deliberate, and explicitly soulslike-leaning.**

![PoE2 Act 1 boss Cualli, Kamasan Smith — close combat with a multi-armed forge boss](/images/path-of-exile-2/boss-cualli.jpg)
*Cualli, Kamasan Smith — Act 1 boss. PoE2's bosses are slower, denser, and more telegraph-driven than PoE1's campaign equivalents. Source: [Steam](https://store.steampowered.com/app/2694490/).*

## What changed

| Element | PoE1 | PoE2 |
|---|---|---|
| Combat speed | Screen-clearing; whole packs vanish per second | Per-encounter, per-monster |
| Movement | Whirling Blades, Flame Dash, Shield Charge — fast traversal skills | **Universal dodge roll**; movement skills exist but are slower |
| Animation lock | Limited; many skills cancellable | **More animation-locked** by default |
| Defensive rotation | Stack Suppression / Block / Recovery | Active dodging + blocking |
| Boss fights | Fast — most bosses dead in 5–10 seconds with endgame builds | Multi-phase, mechanically dense |
| "Build dodges" | Common (auto-suppress, ranged kiting) | Penalised; the player dodges, not the build |

## The stated rationale

The recurring framing in GGG's PoE2 reveal coverage and Jonathan Rogers interviews is that PoE1 *drifted* to screen-clearing — over twelve years, builds got faster and faster, monsters became visual noise, and individual encounters lost meaning. PoE2 was greenlit partly to restore that meaning.

Paraphrased from Jonathan Rogers (ExileCon 2023 keynote):

> We want every monster to feel like an encounter, not a particle. PoE1 became about clearing screens. PoE2 is about killing things.

This is the cleanest single articulation of the design intent. PoE2's combat decisions are reverse-engineered from the goal of making *killing one monster* feel like a deliberate act.

## How the slowdown is achieved

Several mechanisms compose:

1. **Universal dodge roll** — every character has dodge by default. This makes mechanical skill the answer to telegraphed attacks, rather than a gear-stacking calculation.
2. **Animation locks** — many attacks commit you, so you must *position* before swinging. Punishes mash-and-pray.
3. **Monsters with bigger health pools relative to player damage** — kills take seconds, not frames.
4. **Bosses with attack telegraphs** — wind-ups, cones, ground markers. Same shape as Souls / Elden Ring tells.
5. **Less stat-stacked DPS scaling** — gear matters but doesn't carry runs the way endgame PoE1 gear does.
6. **Mana cost scaling that matters** — you can't just spam your strongest skill forever; managing resources is part of combat.

Combined, the effect is a per-encounter game. You enter a room, you assess the monsters, you commit to engagement.

## Weapon-swap mid-combat

A new mechanic: each character carries **two weapon sets** with separately-allocated passive points (a small subset of the tree). Swap between them mid-combat.

Practical use: a Mercenary might carry a Crossbow (ranged) and a Quarterstaff (melee), swap based on distance. A Sorceress might carry Fire/Ice staves and switch based on the encounter's resistance profile.

This is a clean *encounter-shaping* mechanic — the player adapts to what the room is, rather than running one build through every encounter.

## Where the soulslike comparison lands

PoE2 is **not** Dark Souls. The genre is still ARPG, the player still scales massively over the course of a build, the loot is still the engine. But the per-encounter feel — telegraph + dodge + commit + recover — is closer to Souls than to Diablo.

The comparison some streamers and reviewers settled on: **PoE2 campaign is soulslike-leaning; the endgame goes back toward PoE1 territory** as builds scale up and monsters die faster. The slowdown is *most* present in early acts and bosses; less so in endgame mapping at high build power.

## EA reception

- **Praise:** boss fights universally cited as a step up. Telegraph-and-dodge feel is genuinely new for the genre. Combat early-game has weight that PoE1's never did.
- **Critique:** at high build power the slowdown evaporates and the screen-clearing returns. Some PoE1 fans find the early game too slow ("I want to feel powerful, not careful"). The dodge roll has been called both the best new mechanic in the genre and "Souls cosplay that doesn't fit ARPG combat" depending on who you ask.

## Patterns this exemplifies

- `anti-screen-clear-combat` — design pattern: deliberately slow combat to restore per-encounter meaning. PoE2 is the canonical case study.
- [`enemy-intent-telegraph`](/concepts/enemy-intent-telegraph) — same family as Spire's intent system, but real-time: bosses telegraph their next attack visually, so dodging is a reaction not a roll.
