---
title: "Moonlighter 2 — Dual-life loop"
type: game
game: moonlighter-2
patterns:
  - dual-life-loop
  - bounded-roguelite
---

# Dual-life loop

Moonlighter 2 inherits and refines the original Moonlighter's signature: **the same character lives two distinct lives that feed each other.**

- **By day** (or really, "during a run"), Will is a dungeon-crawler. Combat, traversal, relic-hunting.
- **At night** (or "between runs"), Will is a shopkeeper. Pricing, decoration, customer interaction.

The two halves are not parallel — they're **serial and dependent**. Loot from the dungeon is the *only* supply for the shop. Gold from the shop is the *only* funding for dungeon upgrades. **Neither half stands alone.**

## Why this is a strong genre primitive

Most action-roguelites treat shopkeeping as a tiny side-feature (a vendor in Hades, a card-removal stall in Spire). Moonlighter inverts that: **the shop is half the game.** What loot you pick up matters less than what you can *sell* for, which is dictated by a different system entirely — the backpack puzzle and the showcase pricing minigame.

This produces design tension the original was famous for: when you find a great relic with five rooms left to explore, do you go deeper (more loot, more risk) or run home (cash out the haul that's already valuable)? The answer is rarely obvious, because dungeon depth and salability scale on different axes.

## Endless Vault — the 2025 evolution

The "Endless Vault" framing is new for the sequel. The original had hand-authored dungeons; Moonlighter 2 leans roguelike with a **dungeon map (DAG of nodes)** that varies each run, and the run terminates either when you die, escape with a portal, or beat the area boss.

This is the game's most explicit Hades-inspiration. See [dungeon-map](./dungeon-map.md).

## Investment loop on the village

Above both day and night sits the persistent meta:

- Sales gold funds **NPC establishments** — Blacksmith, alchemist, recipes vendor, etc.
- Each upgrade unlocks better gear for dungeons *and* better fixtures for the shop.
- The village physically grows as you progress.

Same shape as Hades' House of Hades — a permanent settlement that visibly improves as a payoff for runs.

## Patterns this exemplifies

- [`dual-life-loop`](/patterns/dual-life-loop) — the same character toggles between two distinct mini-games, each feeding the other.
- [`bounded-roguelite`](/patterns/bounded-roguelite) — the campaign has a clear arc (Early Access has 3 biomes leading toward final-release content), not infinite escalation.
