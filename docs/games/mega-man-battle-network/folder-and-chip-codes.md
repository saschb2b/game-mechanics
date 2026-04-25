---
title: "Mega Man Battle Network — Folder & chip codes"
type: game
game: mega-man-battle-network
patterns:
  - subtractive-deckbuilding
  - code-constrained-deckbuilding
  - opportunity-cost-loadout
---

# Folder & chip codes

The deckbuilding layer. **30 chips per Folder, constrained by letter codes that determine what plays well together.**

![Folder edit screen showing Cannon A (×2), Cannon B (×2), Shotgun N (×3) and a chip preview tile reading "A nice, big cannon!"](/images/mega-man-battle-network/folder-cannon-shotgun.jpg)
*The Folder editor. Each chip carries a name and a letter code (A, B, N, ★…). Code-coherence between chips is what determines hand-stack play, so deckbuilding converges on archetypes — "mono-A folder," "mono-★ defensive suite." Source: [Steam](https://store.steampowered.com/app/1798010/).*

## Structure

- A Folder is exactly **30 chips.**
- Each chip is identified by **name + letter code** (A–Z, plus the ★ wildcard added in BN2).
- **Standard chips:** cap of 4 of any one chip name (codes don't matter for the cap).
- **Mega Chips** (BN3+): cap of 5 in a folder, max 1 of each name.
- **Giga Chips** (BN3+): cap of 1 per folder.
- **Sub-chips** (HP recovery, escape) are inventory-based, not folder-based.
- Some Navis you ally with **seal a "Regular Chip" slot** — this chip is auto-included in your opening Hand every battle, the only deterministic anchor in the otherwise random draw.

## The code rule — the actual deckbuilding lever

At the chip-draw screen, you can pick **multiple chips per turn only if** they share:

- The same **name** (any code), OR
- The same **letter code** (any name)
- The ★ wildcard counts as any code.

So a Hand of:
- Cannon A, Cannon B, Cannon C → all three playable (same name)
- Cannon A, Sword A, FireBurn A → all three playable (same code)
- Cannon A, Sword B, FireBurn C → only one of these is playable per turn

**This is the constraint that makes BN deckbuilding distinctive.** Hearthstone and MTG let any cards combine; BN's letter-code rule is a *combinatorial constraint on co-play*. Folders converge on:

- **Mono-code folders** ("mono-B", "mono-C") — many different chips all sharing one code, so the random hand is full of co-playable chips.
- **Name-stacked folders** — 4 of one chip + supporting variants → reliable spam pattern.
- **★-heavy folders** — wildcards as flex slots.
- **Hybrid folders** — a code spine + signature chips with code variants.

The result is closer to **drafting a poker hand** than building a Magic deck.

## The opening Hand as an anchor in randomness

Each battle, you draw the first 5 chips from a shuffled Folder. The opening Hand is *random*, but:

- **Regular Chip** (1 slot) is auto-included.
- **PA recipes** ([see Program Advance](./program-advance.md)) are *targets* — folders are deliberately stuffed with the chips needed to hit a specific PA.
- **Custom+1 / Custom+2** programs in [NaviCust](./navicust.md) increase Hand size to 7+, which dramatically improves draw consistency.

This converts deckbuilding into a **probability puzzle** — given my Folder of 30, what's the chance my opening 5 contains a co-playable triple? More chips of one code = better probability of usable Hands.

## Subtractive thinking, but at the seams

Spire's deckbuilding is **subtractive** — fewer cards = better draws. BN's Folder is fixed at 30, so subtraction doesn't apply directly. **What's subtractive is the *code spread*:**

- Spread your codes across A–Z and your hand will be uncoordinated more often.
- Concentrate codes and your hand will frequently have 2-3 co-playable chips.

So the design lever is "cohesion within fixed size" rather than "shrink the deck." Same effect as Spire's deck thinning, achieved differently.

## What this teaches

- **A simple rule (letter codes) can carry a whole deckbuilding game.** No life points to track, no mana curve, no resource progression. Just: "do these chips share a code or a name?"
- **Constraints should compose with the random draw.** BN's Folder uses random Hand draws *and* the code rule together — neither would be interesting alone.
- **Anchors in randomness ease the friction.** The Regular Chip slot guarantees one always-available chip per battle. Without it, low-coherence opening Hands would be too punishing.

## Patterns this exemplifies

- [`subtractive-deckbuilding`](/patterns/subtractive-deckbuilding) — different shape (cohesion vs. count) but same insight: tighter focus = stronger draws.
- [`code-constrained-deckbuilding`](/patterns/code-constrained-deckbuilding) — BN's specific lever. Letter codes as a co-play constraint.
- [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) — every chip slot taken by a B-code chip is a slot not held by an A-code chip. Folder commits matter.
