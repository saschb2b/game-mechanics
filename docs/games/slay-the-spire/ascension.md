---
title: "Slay the Spire — Ascension & meta-progression"
type: game
game: slay-the-spire
patterns:
  - cumulative-modifier-staircase
  - meta-as-variety-not-power
---

# Ascension & meta-progression

## How Ascension works

- Every character has **20 Ascension levels.**
- A1 unlocks when you beat Act 3 (or 4) with that character once.
- Each level adds **one cumulative modifier** that stacks with all previous levels.
- Win at level N → unlock N+1. **Lose → no progress lost** (the level stays unlocked).
- Progression is **per-character.** Maxing Ironclad doesn't help Silent's Ascension count.

## Sample modifiers

A1: stronger normal enemies. A2: stronger Elites. A3: stronger Bosses. A4: heavier curses. A5: less HP healed at Rest. … A10: starter HP -% applied. … A15: encounter unfavorable starting decks. … A18: bosses gain extra mechanics. … A20: act 4 has two bosses in a row.

The exact list isn't the point. The point is: **the difficulty is a staircase you climb deliberately, in chunks of one new constraint per level.** Players can stop at any rung. A20 is the "true" end-state — clearing all four characters at A20 is the recognized "complete" achievement.

## Why this is so much better than a slider

- **Slider:** "Easy / Medium / Hard / Hell" — pick once, the game scales. Linear, motivation flat, no learning curve respected.
- **Ascension staircase:** *one* new lesson per level. You learn how to deal with stronger Elites, *then* you face stronger Bosses, *then* you face curses. Each level is digestible.

This pattern is now widely copied:
- **Hades** — Heat system.
- **Risk of Rain 2** — Eclipse modes.
- **Monster Train** — Covenants.
- **Inscryption, Wildfrost, Across the Obelisk** — variations.

See [`cumulative-modifier-staircase`](/patterns/cumulative-modifier-staircase).

## Card / relic unlocks layer

A separate, smaller meta-progression: each character has ~3 tiers of cards/relics that get unlocked as you accumulate score across runs (regardless of win/loss). Once unlocked, the full pool is available forever.

**This is the *only* unlock-based meta in the original Spire.** No permanent stat upgrades. No currencies you spend on between-run power-ups.

## Meta as variety, not power

Mega Crit explicitly rejected the "Hades model" where each run permanently increases your starting power. The team's stance: **meta-progression that makes you stronger dilutes the integrity of the run.**

Their meta-progression is *unlocking variety*, not unlocking strength:
- New cards added to the pool → more possible synergies.
- New relics added to the pool → more possible run identities.
- Base stats and starter deck never change.

This is a strong, opinionated design call worth its own concept page. **The next run is more *interesting*, not easier.**

See [`meta-as-variety-not-power`](/concepts/meta-as-variety-not-power).

## Patterns this exemplifies

- [`cumulative-modifier-staircase`](/patterns/cumulative-modifier-staircase)
- [`meta-as-variety-not-power`](/concepts/meta-as-variety-not-power)
