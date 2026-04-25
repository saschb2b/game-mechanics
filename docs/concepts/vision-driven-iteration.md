---
title: "Vision-driven iteration"
type: concept
patterns:
  - vision-driven-iteration
related_patterns:
  - metrics-driven-balance
  - aspirational-crafting
---

# Vision-driven iteration

> **Lemma:** Balance and content decisions are driven by a stated design philosophy, not by player metrics. The studio's identity is anchored in *what the game should be*, even when the data says players prefer something else. The cost is short-term player pain; the benefit is long-term coherence.

## What it solves

Long-running live-service games drift. Every patch optimizes for engagement; engagement-optimized patches incrementally erode whatever made the game distinctive in the first place. A game that's been running for ten years and chasing metrics is often unrecognizable from its launch.

Vision-driven iteration is the antidote. The studio has a stated thesis about what the game *is* — articulated in manifestos, GDC talks, dev posts — and balance decisions follow that thesis. **Players who deviate from the thesis (find degenerate builds, exploit feel-bad combinations) get nerfed *because they're outside the thesis*, not because they're popular or unpopular.**

This is a hard stance. Players hate having earned builds nerfed. The studio accepts that pain as the cost of identity preservation.

## Variants — vision vs. metrics

The cleanest contrast is between two long-running studios that pick opposite stances.

| Studio / Game | Stance | Decision-driver | Example |
|---|---|---|---|
| **[Grinding Gear Games — Path of Exile](/games/path-of-exile/design-tensions)** | **Vision-driven** | "What fits the Vision; what feels degenerate; what new content the next league will support" | Harvest crafting nerfed in 3.13/3.14 because it became "near-perfect items easily craftable," even though it was beloved |
| **[Mega Crit — Slay the Spire](/games/slay-the-spire/design-tensions)** | **Metrics-driven** | "Win-rate and pick-rate telemetry across millions of runs" | Cards / relics patched based on whether they're systematically over- or under-picked |

Both studios use telemetry. The difference is what the **decision-driver** is when telemetry conflicts with vision.

For Mega Crit: data wins. If a card has a 70% win rate, it's overpowered, full stop — adjust until it's in the target band.

For GGG: vision wins. A build with 70% win rate isn't necessarily nerfed *because* of that — it's nerfed if it's "degenerate," "feels bad," "trivializes content," or "doesn't fit the Vision." The data informs the decision; the philosophy makes it.

## When to use this pattern

- **Long-running games (5+ years)** where identity drift is the existential threat.
- **Sandbox / sprawling design space** where "right" is a values question, not a number.
- **Games with a clear stated thesis** — GGG's "the Vision," Bungie's "10-year Destiny," Blizzard's "WoW vanilla feel" debates. The thesis must be *articulable* to be applied.
- **When you have a die-hard audience** willing to absorb short-term pain for long-term coherence.

Avoid when:
- The game is a closed-form puzzle with clear right answers (Spire-style — metrics work better).
- Your audience is general-mass and the F2P model depends on individual-build engagement (chase the metrics).
- The studio doesn't have a clearly stated thesis to apply (then you're just nerfing on vibes).

## Pitfalls

- **The thesis must be public and consistent.** If the studio nerfs based on private vision the community can't see, the nerfs feel arbitrary. GGG publishes manifestos before major nerfs explicitly to *show their work*.
- **Visions can be wrong.** GGG's commitment to no-AH friction has costs that have become more visible over a decade. Vision-driven studios are not immune to bad theses; they're just more committed to whatever thesis they hold.
- **Vision-driven studios alienate players who liked what got nerfed.** This is the unavoidable cost. PoE's "Path of Nerfs" community joke is also a community wound — one that GGG accepts as the price of long-term identity.
- **Slow community trust building.** It takes years for a community to internalize "yes, this studio nerfs hard, but they ship coherent design." New players don't have this context and bounce off the first nerf.

## Adjacent patterns

- [`metrics-driven-balance`](/games/slay-the-spire/design-tensions) — the opposing stance. Both work for different game shapes.
- [`aspirational-crafting`](/patterns/aspirational-crafting) — a specific manifestation of vision-driven iteration in PoE: the recurring "ship deterministic crafting → nerf it" cycle is downstream of the thesis that crafting should be aspirational.

## Why this is worth its own concept page

This is one of the most-debated tensions in live-service game design, and it surfaces clearly in two of the games in this knowledge base. **Studios pick a stance early, often implicitly, and reverse rarely.** Knowing which stance a game picks tells you a lot about how it'll evolve.

For my own games: pick a stance deliberately. Don't drift into one or the other by accident. If you ship metrics-driven, build the data pipeline first. If you ship vision-driven, write the manifestos first.
