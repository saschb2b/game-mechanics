---
title: "Aspirational crafting"
type: concept
patterns:
  - aspirational-crafting
related_patterns:
  - random-perfect-roll-economy
  - currency-as-crafting
  - vision-driven-iteration
---

# Aspirational crafting

> **Lemma:** A "perfect" craftable item must be **reachable but rarely reached**. Determinism in crafting is a *bug* the design tolerates only in regulated doses; whenever a crafting subsystem makes top-tier items easy, it gets nerfed. The chase *is* the game.

![PoE Incarnation of Fear pinnacle boss with fire mechanics](/images/path-of-exile/pinnacle-boss-fear.jpg)
*PoE pinnacle-boss combat — the wall the perfect-rolled gear is *for*. Aspirational crafting only earns its keep if there's a chase tall enough to need the asymptote-tier item. Pinnacle bosses are that wall. Source: [Steam](https://store.steampowered.com/app/238960/).*

## What it solves

The naive design move for crafting is: *"give players control over their items."* Add deterministic mods, targeted reforges, copy-paste affixes. Players celebrate.

Three months later, every player has the same near-perfect item. The chase is gone. Trade volume collapses (everyone crafts their own). The endgame is solved.

Aspirational crafting refuses this drift. The thesis: **the asymptote — a mirror-tier item — should exist, but reaching it should require *real* effort, not just gold.** Crafting subsystems get a calibrated "deterministic ceiling" — how close to perfect you can get with effort vs. luck — and that ceiling is held intentionally below "trivial."

When a new subsystem ships at too-high a ceiling, the design accepts the short-term player joy and the long-term fix is a nerf. The cycle ("ship deterministic system → 6–18 months → nerf it") is treated as the design pattern, not a bug.

## Variants across games

| Game | The asymptote | Cycle that protects it | Player position |
|---|---|---|---|
| **[Path of Exile](/games/path-of-exile/crafting-and-currency)** | A 6-mod rare with 4 influence-exclusive T1 affixes; mirror-tier items as the absolute ceiling | Harvest (3.11 → nerfed 3.13/3.14); Recombinator nerfs; Aisling/Veiled tightenings; Bench restrictions. Roughly 18-month ship-and-nerf rhythm. | Top 1% reaches near-perfect items via real currency investment; mid-tier players buy crafted items rather than crafting them. The 99% interact with crafting as a *price tag.* |
| **[Path of Exile 2](/games/path-of-exile-2/crafting-pulled-back)** | Same asymptote (mirror-tier items). EA-stage simplification removed Bench, Vorici, sockets/links. | Ships with fewer subsystems; Recombinators and rune-sockets fill the deterministic-craft slot but are constrained. GGG has stated the nerf cycle will continue. | Sequel reset of the deterministic-creep that PoE1 accumulated over 12 years. |

The distinguishing feature of aspirational crafting vs. ordinary crafting RNG is the **explicit philosophy** — GGG has stated the position multiple times in manifestos and interviews:

> "We were concerned by how deterministic some Harvest Crafts are and how easily players can craft near-perfect items."
> — [Harvest crafting changes manifesto](https://www.pathofexile.com/forum/view-thread/3034317)

This isn't accidental friction. The design is articulated, defended publicly, and nerfs are timed to protect it.

## When to use this pattern

- **Long-running ARPGs / looters** where the chase is the engine of replay.
- **Trade-economy games** where personal crafting and player-to-player trade compete for the same currency.
- **Games with a stated thesis** — see [`vision-driven-iteration`](/concepts/vision-driven-iteration). Aspirational crafting is *downstream* of a vision-driven studio; you can't run the nerf cycle without taking community pain on philosophy grounds.

Avoid when:
- The game is closed-form (no live patches). A single-player puzzle game can ship deterministic crafting and call it done.
- The audience is general-mass and engagement metrics dominate. Nerfing beloved crafts is a metrics catastrophe; it's defensible only with a vision-driven studio willing to absorb the hit.

## Pitfalls

- **The cycle alienates players who learned the nerfed system.** Harvest's nerf produced one of the largest community revolts in PoE history. The studio accepts this as the cost of the philosophy; that doesn't make the pain less real.
- **Difficult for new players to grok.** "This crafting layer used to do X but was nerfed in 3.13" is fan-wiki vocabulary. New players show up to a labyrinth of subsystems with implicit ceilings they have to learn through community lore.
- **Pushes mid-tier players toward trading instead of crafting.** A frictioned craft system means the median player buys the crafted item rather than crafting it; this concentrates crafting expertise in the top 1%, which can feel hostile to anyone trying to learn.
- **Requires a parallel trade economy that *works.*** If trade is also frictioned (PoE's lack of in-game auction house), buying a crafted item is itself a hassle. Aspirational crafting + trade friction stacks the friction.

## Adjacent patterns

- [`random-perfect-roll-economy`](/concepts/random-perfect-roll-economy) — the *natural endpoint* of aspirational crafting: per-item uniqueness becomes a market commodity. PoE's mirror-tier items + Warframe's god-roll Rivens are the same shape.
- [`currency-as-crafting`](/concepts/currency-as-crafting) — currencies ARE the crafting verbs in PoE; preserving the asymptote keeps every currency drop meaningful instead of inflationary.
- [`vision-driven-iteration`](/concepts/vision-driven-iteration) — the upstream philosophy. Aspirational crafting requires a studio willing to nerf beloved systems; that requires a stated thesis the community can debate.

## Why this matters as a design lesson

The studio's stance is **the chase IS the game**, not a bridge to "the game." If you ship a system that closes the chase, you've removed the game's engine. Aspirational crafting is the discipline of *holding the asymptote in place* even when players (and engagement metrics) ask you to move it closer.

For your own designs: pick a stance early. If you want a frictionless "gear for everyone" experience (Diablo 3 era), don't ship a 12-year ARPG — the math will catch up. If you want a long chase, the cycle of "ship determinism → nerf it" is the price.
