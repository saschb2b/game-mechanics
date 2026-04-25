---
title: "Path of Exile — Death & difficulty"
type: game
game: path-of-exile
patterns:
  - xp-loss-penalty
---

# Death & difficulty

PoE's death model is the classic ARPG-souls-like-but-with-XP-loss design. Below level 67 there is no XP penalty — you're in the campaign, and the game treats levelling as a tutorial. From level 67 onwards (Maps), every death costs **10% of your current XP bar.**

## The 10% XP penalty

Specifically:

- Death in a Map causes the player to lose 10% of the experience needed to reach the next level.
- Below area level 67, no penalty.
- Hardcore (HC) leagues replace this with permadeath — a dead character is moved to Standard with all gear.

Why this number? GGG never said publicly, but the consequence is widely known: **at level 95+, a single death can erase 30 minutes to several hours of farming.** This is felt very heavily by builds that aim for level 100 (which is a chase target, not assumed endgame).

The community calls level 95–100 "the death-cliff." Some builds are explicitly designed around *not dying once* (max-block, pure-defence, "tank" builds) specifically because level 100 is otherwise mathematically impossible without it.

## Hardcore (HC)

A separate set of leagues where death is permadeath. The HC ladder is small but devoted. Notably:

- Top-tier streamers race HC for prestige (Quin69, Imexile, Ben Funny Astronaut).
- Builds for HC are different — survivability over DPS, never-trade-life-for-mana, multiple defensive layers.
- The first HC death of a league ladder is community content.

GGG runs HC leagues *as separate leagues* — not as a difficulty option. Standard and HC have different ladders, different economies, different metas.

## SSF + Hardcore (the canonical fairness test)

**SSF + HC** combines no-trade with permadeath. The community treats this as the "is the game actually fair?" test. If you can't get through PoE without trade *and* you can't recover from a death, you must rely entirely on what drops, what you craft, and your own skill. SSFHC leaderboard runs are mechanical proof that PoE's drop rates and crafting aren't *fundamentally* gated on trade.

## The implicit difficulty curve

PoE has no *explicit* difficulty selector — there's no Easy / Hard option. But the implicit curve is steep:

| Phase | Effective difficulty |
|---|---|
| Campaign (Acts 1–10) | Tutorial. A reasonably-built character clears at any level. |
| White maps (T1–T5) | Mild. Most builds clear easily. |
| Yellow maps (T6–T10) | Real difficulty starts. Resists must be capped, your build must function. |
| Red maps (T11–T16) | Builds that aren't designed properly die here. |
| 8-mod bosses, Ubers, deep Delve | Endgame. Most builds cannot reach this phase. Min-maxers clear it routinely. |

The "Ascension staircase" pattern from [Slay the Spire](/games/slay-the-spire/ascension) is conceptually applicable but explicit there. PoE's version is *the maps themselves* — players choose which mods to roll on each map, which is the same opt-in escalation as Spire's Ascension levels but more granular.

## What this teaches

- **XP loss in a live-service ARPG is unusual** — most games have moved away from it. PoE retains it as a real cost on death without going full-permadeath.
- **Separate hardcore ladders work better than hardcore difficulty options.** Players who want HC commit; players who don't are unaffected.
- **Implicit difficulty (player rolls map mods) > explicit difficulty (slider).** Map mods are a *budget* the player allocates — accept harder mods for higher rewards. This is the same shape as Spire's Ascension but at per-encounter granularity.

## Patterns this exemplifies

- `xp-loss-penalty` — a soft permadeath penalty that creates real death stakes without going full HC.
