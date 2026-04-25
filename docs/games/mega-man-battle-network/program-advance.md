---
title: "Mega Man Battle Network — Program Advance"
type: game
game: mega-man-battle-network
patterns:
  - card-combo-recipes
  - hidden-knowledge-depth
---

# Program Advance (PA)

The combo layer. **Specific chips in specific letter sequences trigger unique fused super-attacks** — and the recipes are largely undocumented in-game. The community recipe lists are part of the metagame.

## How it works

Selecting **3 chips** (or 5 in some recipes) at the chip-draw screen in a specific *name + code* pattern triggers a **Program Advance** instead of three individual attacks. The PA fires a single, much more powerful, often elaborate attack with bespoke animation.

Two main families:

### Numerical PAs

Three chips of the same family in consecutive codes:

- **CannonA + CannonB + CannonC** → ZetaCannon (rapid burst of cannon shots)
- **HiCannonA + HiCannonB + HiCannonC** → ZetaHiCannon (stronger version)
- **Sword* + WideSword* + LongSword*** of the same code → LifeSword (a giant sword that hits the entire enemy field in a + shape)

Same name, sequential codes → "stacking" PAs. Same family, mixed names with one shared code → "fusion" PAs.

### Special PAs

Hidden recipes that don't follow the sequential-code pattern. Examples:

- **GutsImpact + GutsShoot + GutsPunch** (BN2) → super-Guts ultimate
- **MasterStyle** in BN5 — recipe-only ultimate combining specific signature chips
- **BugCharge** in later games

Special PAs are *deliberately not telegraphed* by the in-game UI. You discover them through:
- In-game NPC hints (occasionally)
- Magazine/strategy guide recipes (originally)
- Community wiki recipe lists (now)

## What PAs do to deckbuilding

PAs are **why folders look the way they do.** A folder built around the LifeSword PA needs:
- 1× Sword of code A
- 1× WideSword of code A
- 1× LongSword of code A
- Plus 27 other chips that don't conflict with that code-A spine

So a "LifeSword folder" is built backwards from the recipe. The PA is the goal; the rest of the folder feeds the goal.

This converts deckbuilding into **recipe-shaped optimization.** You're not stacking damage cards in general — you're trying to make a specific 3-chip combo *appear in the same opening Hand* often enough that the PA is reliable.

## What this teaches as a design pattern

PAs are the cleanest "**hidden knowledge depth**" pattern I've seen in any card-based game. The mechanic itself is in the manual; the *list of recipes* is genuinely emergent + community-curated.

This shape — the game ships a system, the community ships the canonical reference for it — is the same shape as PoE's [community-driven loot filter culture](/games/path-of-exile/trade-and-economy). GGG ships the filter language; NeverSink ships the filter. Capcom shipped the PA system; community wikis ship the recipes.

The cost: new players don't discover most PAs by themselves. The benefit: experienced players have a constant *learning surface* — there's always one more recipe to find. Twenty years on, niche PA recipes are still being documented in retrospective guides.

## BN5's one-PA-per-battle restriction

BN5 added a controversial limit: **you can only fire one Program Advance per battle.** This was meant to balance PAs that had become defining — by BN4, players who knew the recipes were one-shotting bosses with PA stacking. BN5's cap forced PA use into a "save it for the right moment" decision.

BN6 partially walked this back: multi-PA returned, but boss damage was rebalanced so PAs weren't an automatic win.

This is a textbook iterative-balance moment — see [series evolution](./series-evolution.md).

## Patterns this exemplifies

- `card-combo-recipes` — multi-card combos that produce unique fused effects, distinct from sum-of-parts.
- `hidden-knowledge-depth` — recipes that aren't fully documented in-game; community knowledge is a meta-game layer.
