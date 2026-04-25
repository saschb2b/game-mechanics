---
title: "Path of Exile 2 — Lessons for my own games"
type: game
game: path-of-exile-2
---

# Lessons for my own (Godot) games

Most lessons from PoE1 ([see those](/games/path-of-exile/lessons)) apply identically to PoE2. The PoE2-specific lessons are sequel-shaped — what GGG learned from 12 years of PoE1 and chose to do differently.

## Steal: weapons telling you how to play

The single most-stealable PoE2 design move. **Make the weapon the build identity.** A Crossbow user knows what their build *is*; a "any skill on any weapon" user doesn't. This is more legible, more teachable, more explicit.

Generalises beyond ARPGs. Any game with weapons / equipment / loadouts can ask: should this loadout *say* what kind of player you are, or should the player layer their playstyle on top? PoE2 picked the former; most games pick the latter.

## Steal: one-death-map as a stake-restoration tool — *carefully*

The mechanic itself is portable: any run-based game can adopt "one attempt per encounter." But the cost is high — half your audience may bounce.

**The lesson is when to use it:** when your existing game is drifting toward "no consequence" speed-runs and you want to restore per-encounter meaning. Not as a default — as a corrective. PoE2 is the canonical case: PoE1 had drifted, PoE2 reset.

For my games: if I find players treating death as "free, just retry," ask whether the design is encouraging that. If yes, decide whether to lean in or to add stakes. PoE2's choice is one of two valid answers (Hades' "respawn endlessly" is the other).

## Steal: telegraph + dodge as ARPG combat

PoE2 brought soulslike combat to a top-down ARPG. The result is widely praised at boss-fight scale. **Telegraphed attacks + a universal dodge** turn combat from "stat check" into "skill expression." This generalises beautifully — any real-time combat game can add these.

The cost: at high build power, the telegraphs become meaningless because everything dies before it can attack. Building combat that's *interesting* at low power *and* high power is hard. PoE2 doesn't fully solve this either.

## Steal: parallel products as a way to serve diverging audiences

The unusual one. GGG ran two games to serve two audiences rather than betraying one. Most studios pick — they ship the sequel and let the original wither. GGG's parallel-products approach is expensive but lets each audience get what they want.

For my own games: if you have a beloved game and you want to ship a sequel that significantly diverges, **consider whether the original deserves to keep running.** It's not "PoE2 replaces PoE1" — it's "PoE2 *is also* a PoE."

Cost: you need two teams, or a team that can split focus. For an indie this is rarely possible.

## Steal: removing friction that's outlived its purpose

PoE2 removed a lot of PoE1's accumulated friction:

- Sockets-and-links on gear (gear changes were build-breaking)
- Forced re-crafting on upgraded gear
- Ascendancy respec (ascendancy was meant to be identity)
- Some crafting subsystems that had become required

**The lesson:** if your game has accumulated friction over years, audit which frictions still serve their purpose and which are vestigial. PoE1's gear-sockets friction was load-bearing in 2013; by 2024 it had become "the cost of upgrading gear." PoE2 cut it.

For my games: revisit the original design rationale of each friction point on a regular cadence. Some still earn their slot; others are inertia.

## Cautionary lesson: walking back a beloved mechanic costs

PoE1's Labyrinth was disliked but the ascendancy moment was beloved. PoE2 replaced the Lab with two new trials (Sekhemas, Chaos) — and both have been more controversial than the Lab was. **Replacing a contested-but-functional design is risky.**

For my games: if a mechanic is "the thing players complain about *and* the thing players remember fondly," changing it is dangerous. The complaints tell you it's broken; the fondness tells you it's load-bearing. Hard tradeoff.

## Cautionary lesson: speed creep is hard to walk back

PoE1's combat became fast over 12 years of meta drift. PoE2 walked it back in a single design swing — and the EA reception is split. **The audience that grew up on the speed-meta wants the speed-meta.** They're not wrong — they're just a different audience.

For my own live-service games: speed creep happens. It's emergent. Walking it back requires a *very* clear story to the community, and even then half the audience will leave. Plan for this if you're going to ship a sequel.

## Cautionary lesson: re-platforming with the same engine compounds difficulty

PoE2 launched into EA with extensive technical issues — server load, trade site reliability, lockstep problems, lag. **Live-service sequels with shared infrastructure inherit the original's tech debt and add their own.**

For my games: if I'm going to ship a sequel that uses the same backend / engine / pipelines, plan for the combined tech debt. Don't assume the sequel runs cleanly because the original did.

## What PoE2 teaches about PoE1

The biggest meta-lesson: **PoE2 is GGG's audit of what PoE1 had drifted from.** Reading the two games side-by-side is one of the cleanest case studies of "what the studio kept, what they walked back, what they amplified" you can find. Both games are still running, so the audit is *visible* — you can compare the two systems live.

For my own games: write the design rationale down. PoE1's accumulated drift was hard to see *because* the design rationale wasn't constantly re-examined. PoE2 only happened because GGG could clearly articulate "what did we mean to do, and where did we drift from it."
