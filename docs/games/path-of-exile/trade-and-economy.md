---
title: "Path of Exile — Trade & economy"
type: game
game: path-of-exile
patterns:
  - trade-friction-as-feature
  - community-driven-tooling
---

# Trade & economy

PoE famously has **no in-game auction house.** This is one of GGG's single most-debated decisions and the cleanest expression of their friction-as-feature philosophy.

## How trade works in practice

1. Player A lists items for sale on **pathofexile.com/trade** (the official third-party-style site, run by GGG).
2. Player B searches, filters, and sees Player A's offer.
3. Player B clicks "whisper" — generates an in-game whisper to Player A: *"Hi, I would like to buy your X for Y in Z (stash tab : (left, top))."*
4. Player A invites Player B to their party, both load into a hideout, the trade window opens, currency for item, click confirm.
5. The trade is complete. ~30–90 seconds elapsed if Player A is online and responsive.

Most listings get *no whisper at all* (price too high, or seller AFK). The friction of the lookup → whisper → invite → trade flow is the design.

## GGG's stated philosophy — verified quotes

From the [Trade Manifesto (2017)](https://www.pathofexile.com/forum/view-thread/2025870):

> "Easy trade reduces the number of times a character improves their items."

> "Easy trade means reducing drop rates. Compare two hypothetical games. In the first game, trade is very difficult... In the second game, trade is very easy... it means that the second game either receives reduced drop rates relative to the first, or ends up being a whole lot easier."

> "We believe that it is more fun to slowly and iteratively upgrade a character over time and to have a longer journey to gear a character up. Knowing that a monster could drop something that improves your character is a great motivator."

> "Easy trade allows for greater abuse by automation... it would be hard to completely eliminate the damage caused by a few trade bots with access to a fast trade system."

In a 2017 Esports Edition interview, Chris Wilson:

> "Philosophically, we're opposed to trade being too easy, as it makes Path of Exile into a trading game rather than a monster-killing game."

This is the **most cited quote in PoE discourse.** The whole design is downstream of "if trade gets too easy, the game becomes 'pricecheck items,' not 'kill monsters.'"

## Standard vs SSF (Solo Self Found)

PoE ships **separate ladders** for trade and SSF:

- **Standard / Trade leagues** — trade enabled, all the friction described above.
- **SSF (Solo Self Found)** — trade *disabled at the account level* for that character. Cannot trade. Cannot party with strangers. Drops, crafts, and grinds are the only paths to gear.

SSF is opt-in hard mode. The community treats SSF + Hardcore as the canonical "is the game actually fair?" test. SSF is also where most build innovation happens — players have to use what they find, not what they buy.

## Loot filter culture — community-driven tooling

The base loot stream is intentionally overwhelming. PoE's identification mechanic forces every magic+ item to be examined — but Tier 1 maps drop ~1000 items per run. Without filtering, the floor is unreadable.

**GGG ships an in-client filter language (Item Filter syntax) but no curated default.** The de-facto standard is **NeverSink's filter**, an open-source filter maintained on GitHub (https://github.com/NeverSinkDev/NeverSink-Filter) and customisable through the FilterBlade web tool (https://www.filterblade.xyz/). NeverSink's filter is updated weekly based on live economy prices — what's trash this league may be worth picking up next league.

GGG has integrated NeverSink's filter as the default on console, and the filter author is credited in-game.

**Why is this delegated?** Because filter "correctness" depends on live economy data — Chaos prices on specific bases shift weekly. GGG cannot ship a patch fast enough to track the market; NeverSink's release cadence (sometimes daily during a fresh league) can.

This is a clear case of **community-driven tooling as design feature.** GGG ships hooks (the filter language); the community ships the actual product. See [`community-driven-tooling`](/patterns/community-driven-tooling).

## What the trade philosophy actually produces

| Effect | How it shows up |
|---|---|
| Slower gear progression | A 1000-hour character has not solved gear; high-end items remain aspirational. |
| Real opportunity cost | Every drop is a "use it / sell it / trash it" decision. |
| A player-driven economy with deep liquidity | Specific items have known prices; price-checking is a skill. |
| Bot mitigation | Manual trade flow is hostile to RMT bot networks. |
| New-player friction | The trade site is famously bad UX. Mobile is unsupported. The whole "whisper, party, hideout, trade" flow is genuinely worse than D3's auction house was in 2012. |

The last row is the cost. PoE's trade UX is **deliberately bad**, not accidentally bad — but new players consistently bounce off it. PoE2 has not (yet) addressed this; it's an EA complaint thread that runs continuously.

## Patterns this exemplifies

- [`trade-friction-as-feature`](/patterns/trade-friction-as-feature) — the explicit position that friction in trading is part of the game design, not a UX failure.
- [`community-driven-tooling`](/patterns/community-driven-tooling) — GGG ships the language, the community ships the tool. Same pattern as text editors with package ecosystems.
