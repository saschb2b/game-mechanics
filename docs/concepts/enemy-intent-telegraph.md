---
title: "Enemy intent telegraph"
type: concept
patterns:
  - enemy-intent-telegraph
related_patterns:
  - anti-screen-clear-combat
  - expiring-block
---

# Enemy intent telegraph

> **Lemma:** The enemy **shows what they're about to do** before the player commits to a response. This converts combat from "RNG fight" into a **complete-information optimization puzzle** at the per-turn (or per-encounter) timescale. Randomness moves out of *what the enemy will do* and into *what resources the player has to respond.*

## What it solves

A combat system where the enemy's next action is hidden has two failure modes:

1. **It's pure reaction.** Players just spam defense and hope. There's no deliberate planning.
2. **It's pure pattern memorization.** Players who've seen the encounter before know what to do; everyone else dies.

Telegraphing the next attack solves both. **Each engagement becomes a decision: given what's coming, what's the best response with what I have right now?** That's a puzzle, not a coin flip. And the puzzle is fresh each turn because the *resources you have to solve it* — the cards in your hand, the cooldowns up, the position you're in — keep changing even when the enemy intent shape is familiar.

## Variants across games

| Game | Telegraph form | Timescale | What the player solves |
|---|---|---|---|
| **[Slay the Spire](/games/slay-the-spire/combat)** | Icon above each enemy: attack (with damage number), buff, debuff, defend, special, multi-hit count | Turn-based, before the player's turn | Allocate energy: attack now? block exactly the incoming damage? buff for sustained combat? Block expires next turn, so over-blocking wastes energy. |
| **[Path of Exile 2](/games/path-of-exile-2/combat-philosophy)** | Boss/elite wind-ups, cone tells, ground markers, animation commits | Real-time, mid-combat | Dodge-roll *now*, position before the swing, choose between reactive defense and offense. The "build" doesn't dodge — the player does. |

The two cases sit on opposite ends of the timescale axis but use the same insight: **show the player what's coming and let them solve.** Spire telegraphs *which action* on a turn cadence; PoE2 telegraphs *which animation* on a frame cadence.

This pattern is **the most-imitated single mechanic in the modern roguelike-deckbuilder** — every Spire-like ships intent icons. It's also the keystone of the soulslike combat tradition (Souls / Elden Ring / Sekiro) — wind-up + tell + dodge window. PoE2's adoption of the soulslike telegraph in an ARPG is the bridge between the two traditions in this knowledge base.

## When to use this pattern

- **Combat designs where the player has *limited* per-turn or per-encounter resources** (energy, dodge stamina, cooldowns) that need allocation against known incoming damage.
- **Games that want skill expression to come from *decision quality* rather than reflexes alone** (Spire) or *both* (Souls).
- **Roguelikes / roguelites** where re-fighting a slightly different encounter shape benefits from the "same monsters, different draw" puzzle texture.

Avoid when:
- Combat is meant to be hidden-information (poker-shaped, fog-of-war PvP). The whole point of telegraph is removing surprise.
- Encounters are too dense to legibly telegraph. PoE1's screen-clearing combat made telegraphing *every* monster impossible — there are 80 monsters on screen. Telegraph requires combat slow enough that the player can read the tells. (See `anti-screen-clear-combat`.)

## Pitfalls

- **Telegraphs that lie or omit are worse than no telegraph.** If a "defend" intent sometimes does damage, players stop trusting the system and revert to spam-defense. Spire's intent icons are *gospel* — they tell the truth deterministically. Honesty in the telegraph is non-negotiable.
- **Telegraphs that are too dense become noise.** A boss with 12 simultaneous tells produces a screen of icons that no one parses. PoE2 has been criticized at high build power when so many telegraphs overlap that none are readable.
- **Telegraph + screen-clearing combat is incompatible.** If the player kills the enemy before the wind-up resolves, the telegraph is decorative. PoE2 explicitly slowed combat to make telegraphs matter; Spire enforces it via turn structure.
- **In real-time variants, telegraph + RNG damage variance can feel cheap.** If you dodged the tell but *still* take damage from an unannounced second hit, the telegraph contract is broken. Souls/PoE2 enforce: if you dodged the tell, you took zero from that attack.

## Adjacent patterns

- `anti-screen-clear-combat` — the *upstream* design choice that makes telegraphing readable. PoE1 vs. PoE2 is the canonical case — same studio, same engine, same genre, opposite combat philosophies.
- `expiring-block` — Spire's specific "use this turn or lose it" defense. Telegraph + expiring block is what forces the per-turn allocation puzzle: too much block wastes the energy, too little and the announced damage gets through.
- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — many keystone-style passives in ARPGs interact with the telegraph contract (e.g. "you can't dodge but +damage" turns combat into pure resource math instead of reaction).

## Why this matters as a design lesson

The pattern moves randomness **off the enemy and onto the player**. The enemy is deterministic-in-intent; what's random is which cards drew, which cooldowns are up, which positions are open. That inversion is what lets a fight feel both **deterministic-tactical** (you know what's coming this turn) and **replayable-strategic** (your kit varies run to run).

For your own designs: if combat feels like a coin flip, ask whether the player can *see* what they're solving. If the answer is "no, they just react," telegraphing is the cheapest fix to convert reactions into decisions.
