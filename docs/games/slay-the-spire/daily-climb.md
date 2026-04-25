---
title: "Slay the Spire — Daily climb & seeds"
type: game
game: slay-the-spire
patterns:
  - shared-seed-daily
---

# Daily Climb & seeds

## Daily Climb

- One run per day, all players get the **same character + same seed + same modifiers.**
- The map, drops, events, enemies are deterministic from the seed.
- Only your *first* attempt counts for the leaderboard (you can replay for fun, but not for score).
- Modifiers are often weird (curse-heavy decks, double bosses, only-rare drafts, Snecko-eye-from-start, etc.).

## Why this works as a community feature

- **Removes the "I just got lucky" excuse** — everyone has the same opportunity.
- **Creates a shared puzzle** ("today's daily is brutal because of X") for community discussion.
- **Skill bar is very visible**: same RNG → score difference is play skill.
- **Daily reset = renewable content forever** — one feature, no ongoing content cost.

This is one of those features that **costs almost nothing to ship** (it's a seeded run with a leaderboard) but produces enormous community engagement. Compare with Wordle's same-puzzle-for-everyone model, which exploded into a phenomenon partly because of this exact design.

See [`shared-seed-daily`](/patterns/shared-seed-daily).

## Custom seeds

- Any run can be started with a **custom seed** for sharing.
- Allows challenging a friend with the same RNG conditions.
- Disables achievements for that run, but otherwise functional.

The combination — daily seed *plus* custom seeds — gives the community two coordination mechanisms: one centralized (everyone plays today's daily) and one decentralized (here's my seed, see if you can do better).

## What this teaches

If your game has any RNG, **a daily-seeded mode with a leaderboard** is one of the highest-value-per-line-of-code features you can ship. Doesn't need to be the focus of the game — it's a community vector that quietly produces engagement.

Core requirements:
- Deterministic seed handling. (Spend the engineering up front to make all your randomness seedable.)
- A way to display scores. (Doesn't need to be a fancy leaderboard — even a personal "your best" with shareable replay is enough.)
- Optional: rotating modifiers to keep dailies feeling fresh.

## Patterns this exemplifies

- [`shared-seed-daily`](/patterns/shared-seed-daily)
