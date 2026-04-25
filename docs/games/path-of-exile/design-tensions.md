---
title: "Path of Exile — Design tensions"
type: game
game: path-of-exile
patterns:
  - vision-driven-iteration
---

# Design tensions

GGG is unusually open about their design philosophy. Almost every PoE community thread eventually touches one of the same five recurring dialectics. They aren't bugs — they're the *load-bearing positions* GGG has held for 12 years.

## The five recurring dialectics

| Tension | GGG's stance | Community position |
|---|---|---|
| **Friction vs convenience** | Friction is part of the design (no AH, awkward trade, sockets need crafting). | New players bounce off; even veterans want better trade UX. |
| **Complexity vs accessibility** | Complexity is the depth that retains players for years. | Onboarding is famously brutal; PoE2 walks back some of this. |
| **Trade vs SSF** | Both ladders should exist; trade friction is load-bearing. | Trade UX is bad; an in-game AH would help most players. |
| **Deterministic vs RNG crafting** | Crafting should be aspirational; perfect items should feel earned, not built. | Aspirational becomes "buy from the top 1% via trade," because the top 1% has the time the rest don't. |
| **Player power vs balance** | Anything degenerate gets nerfed in the next league. | "Path of Nerfs" — players hate having earned builds taken away. |

GGG consistently picks the friction / complexity / RNG / nerf side. **Their stated thesis: triviality is the enemy of an ARPG that retains players for years.**

## Anchor quotes

From the verified [Trade Manifesto (2017)](https://www.pathofexile.com/forum/view-thread/2025870):

> "Easy trade reduces the number of times a character improves their items."

> "We believe that it is more fun to slowly and iteratively upgrade a character over time and to have a longer journey to gear a character up."

From Chris Wilson, Esports Edition interview (2017):

> "Philosophically, we're opposed to trade being too easy, as it makes Path of Exile into a trading game rather than a monster-killing game."

From the [Harvest crafting changes manifesto (2021)](https://www.pathofexile.com/forum/view-thread/3034317):

> "We were concerned by how deterministic some Harvest Crafts are and how easily players can craft near-perfect items."

From Chris Wilson's GDC 2019 talk, ["Designing Path of Exile to Be Played Forever"](https://www.gdcvault.com/play/1025784/Designing-Path-of-Exile-to):

The talk's thesis is the title — every design decision in PoE points at "this game runs for years, not seasons." Deep systems + multiple overlapping axes of randomness + procedural content as the antidote to seasonal-content burn.

## "The Vision" — the GGG idiom

Chris Wilson and Jonathan Rogers refer to "the Vision" half-jokingly, half-seriously when discussing what PoE is *supposed* to be. The Vision is, roughly:

- Deep build expression earned through complexity, not given.
- Crafting as aspiration, not entitlement.
- Trade as friction, not convenience.
- Friction that filters players who *don't* want this game from players who *do*.
- Nerfs are tools, not mistakes — they're how the design stays itself.

The community uses "Vision" sometimes seriously, sometimes ironically (especially after a popular build is nerfed). The fact that the term is in common use is itself a sign that GGG's design philosophy is clearly enough articulated to be argued *with*.

## The Harvest cycle — the canonical case study

The recurring pattern: **GGG ships a high-determinism crafting subsystem → top 1% wealth balloons → drop rates and content scale up to assume that wealth → GGG nerfs the subsystem → community revolts → meta resets.**

Harvest 3.11 → 3.13/3.14 is the textbook case. Wilson's stated concern (above) was that "near-perfect items" became trivially craftable. The Reddit revolt that followed was the largest in PoE history. *Other* deterministic systems followed the same arc on slightly different timelines: Recombinator, Aisling T4, Eldritch Altars at high tiers.

The cycle isn't a bug — it's how GGG calibrates "the appropriate average time-to-perfect-item for the top 0.1%." Each cycle re-tunes that target.

## Vision-driven iteration vs. metrics-driven balance

GGG's stance is interesting alongside [Slay the Spire's metrics-driven balance](/games/slay-the-spire/design-tensions). Mega Crit balances cards by win-rate / pick-rate telemetry across millions of runs. **GGG balances by what GGG considers "right"** — what fits the Vision, what feels degenerate, what new content the next league will support. They use telemetry, but the stated decision-driver is the design intent, not the data.

Both approaches work, for different games. Spire is a closed-form puzzle where "right" is computable; PoE is a sprawling sandbox where "right" is a values question. Worth its own concept page — see [`vision-driven-iteration`](/concepts/vision-driven-iteration).

## What this teaches

- **A clearly stated design philosophy is itself a feature.** PoE's Vision is contested, criticized, and meme'd — but it's *clear enough* to be argued with. That clarity is what makes PoE feel coherent over 12 years.
- **Frictions can be identity.** Removing the trade friction would arguably make a worse PoE — even though every individual interaction would be easier. The whole has the friction baked in.
- **Nerfs are not betrayals; they are calibration.** GGG accepts the community pain of nerfs as the cost of long-term design integrity. This is unusual in F2P and works only because their model doesn't depend on individual-build engagement.

## Patterns this exemplifies

- [`vision-driven-iteration`](/concepts/vision-driven-iteration) — design decisions driven by a stated philosophy, not by data. Long-term coherent identity at the cost of short-term player satisfaction.
