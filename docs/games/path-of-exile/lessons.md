---
title: "Path of Exile — Lessons for my own games"
type: game
game: path-of-exile
---

# Lessons for my own (Godot) games

Notes from 1000+ hours. Some patterns are wildly stealable; others only work because PoE has 12 years of context to support them.

## Steal: currency-as-crafting

The single most-stealable PoE design move, and *almost no one steals it*. Most games have gold + materials, where gold has no intrinsic use (only as a trading abstraction). PoE collapses the two: every currency does something, and trade prices are denominated in those same currencies.

This produces:
- Built-in inflation control — trade flows are also sinks.
- Real opportunity cost on every drop.
- Denomination as game design.

If your game has loot and economy, **try this.** Even a small game can have "every currency is a verb." Roguelite deck-builders, looter-action games, factory games, even cozy games — all candidates. Don't give the player gold; give them *materials* that flow through the economy as currency *and* as inputs.

## Steal: shared progression tree where class is a starting position

The 1500-node tree is too big to copy literally. The **principle** generalizes: instead of class-locked trees, give every player the same progression space, with class as a *vector* into it. Marauder's start position is in the south, Witch's in the north — but the geometry is shared.

This solves "every Sorcerer plays the same" without giving up class identity. **You can scale it down dramatically** — even a 100-node shared tree is more interesting than a 30-node-per-class tree. The size is for sustaining a 12-year game; smaller games don't need that.

## Steal: bonus-with-drawback keystones

PoE's keystones are textbook: Chaos Inoculation, Resolute Technique, Mind Over Matter. Each one *flips a fundamental rule* with a real cost. Rules as commits, not as stat bumps.

This pattern works in any progression system. Have ~5 of them; make each transformative; make each bind decisively. They become the moments players talk about ("I'm running CI this league") for years.

## Steal: trade friction as a real choice

This is the contested one, but worth thinking about. Easy trade is a *design choice*, not the default. If your game has any economy, ask: does trade *help* my game, or does it short-circuit it?

For roguelikes, RPGs, and some looter-shooters, **trade friction or trade-as-opt-in** preserves drop excitement. PoE's separate SSF / trade ladders is one model; "trade for premium currency only" (Warframe) is another. Don't add an auction house just because the genre conventionally has one.

## Steal: delegate tooling to the community

GGG ships a filter *language*. NeverSink ships the actual filter. **The community can iterate faster than the studio.** This pattern works wherever "the right configuration" depends on live data the studio can't track in patches.

For my games: ship hooks (mod systems, save format, stat APIs), *not* defaults. If a wiki or forum will inevitably emerge, ship a foothold for it.

## Steal: separate ladders, not difficulty options

PoE's HC and SSF as **separate leagues** rather than a difficulty checkbox. Players who want HC commit; players who don't are unaffected.

For multiplayer / leaderboard games, this is much cleaner than "Hard Mode" toggle. The cost is content duplication — economies, ladders, sometimes balance tuning per ladder. The benefit is that each ladder has its own meta and its own community.

## Steal: meta-progression as a build, not a stat sheet

The Atlas Passive Tree is brilliant. The endgame *gets its own build*. Most games have meta-progression as a stat sheet (perks, levels, points to spend on bonuses); the Atlas tree is a full progression *axis* that's orthogonal to the character.

For roguelites: instead of "+5% damage forever" as your meta-progression reward, give players a *meta-tree* that affects which mechanics spawn. Same time investment, vastly more decision space.

## Cautionary lesson: friction filters out players you may want

PoE's friction is load-bearing for its 1000-hour audience. It also turns away the 10-hour audience. **You're picking which audience you want.** PoE chose its long-tail audience; that's an explicit decision, not an oversight. If you copy the friction without copying the deep end that justifies it, you'll just have a frustrating game.

## Cautionary lesson: aspirational crafting requires careful calibration

The "ship deterministic system → nerf it" cycle is *expensive* — every cycle the community burns. GGG accepts the cost because they think the alternative (build crafted items become baseline) is worse. **You probably can't afford this cycle if your audience isn't already invested.**

For smaller games, pick *one* stance: deterministic-end (you can build perfect items eventually) or RNG-end (perfect items are pure luck). The middle is hard.

## Cautionary lesson: complexity has a tax

PoE's onboarding is famously brutal. Even after 1000 hours I had to look up what some new league mechanics did. The complexity is the depth, but it's also the wall — and PoE2's existence is partly an admission that PoE1's wall got too high. **If you ship complexity, ship onboarding too** — guided builds, in-game tooltips that aren't just stat names, glossaries, build templates.

## Cautionary lesson: nerfs need a clear story

GGG nerfs because of "the Vision." That story is real and consistent, but the community still revolts every league. **The story has to be told constantly.** Without the manifestos and the explanation, nerfs feel arbitrary. With them, they feel like calibration. Be ready to write the manifesto.

## Cautionary lesson: don't ship live-service complexity if you can't sustain it

GGG ships a 3-month league cadence. Each league = new content + balance pass + economy reset. **This is a *huge* engineering and design commitment.** A small team cannot sustain this without burning out. PoE2 EA crunch slowed PoE1 league cadence; the community noticed and complained loudly. **Picking up the live-service treadmill is a one-way decision.**

## Compared to my hours in Warframe

The contrast is the most useful lesson. Both games are F2P, both 2013, both hugely deep. Warframe gives you power *fantasy*; PoE makes you *earn* power. Warframe's economy is "trade premium currency between players"; PoE's is "currency is also crafting." Warframe is "Mastery as breadth"; PoE is "Build identity through commitment." **Both work.** The question for my own games is which player I'm designing for — the one who wants to feel godlike (Warframe) or the one who wants to feel *clever* (PoE). They're different games for different moods.
