---
title: "Bounded roguelite"
type: concept
patterns:
  - bounded-roguelite
---

# Bounded roguelite

> **Lemma:** A roguelite that *ends.* The campaign has a defined arc with a final boss / credits screen, not infinite escalation. Runs are the unit; the game is the journey through a finite number of them.

## What it solves

The default roguelite stance is "thousands of hours of variety." That works for some audiences (Spire, Hades, Isaac, Dead Cells), but it has costs:

- **No real ending** — narrative is fragmented or absent.
- **Engagement collapses for players who don't love the meta** — once they've "seen everything," they leave.
- **No payoff for completion** — there's no "I beat the game."
- **Creates a tension with adventure / story design** — these were already named by Sparklite's Edward Rowe ("progression is one of those things that's required for a fun adventure game but is antithetical to roguelikes").

A bounded roguelite says: **the run-replay structure is the gameplay shape, but the game itself has a beginning, middle, and end.** ~20–40 hour campaign with credits, not a 200+ hour content well.

## Variants across games

| Game | Run length | Campaign length | What ends it |
|---|---|---|---|
| **[Sparklite](/games/sparklite/world-and-loop)** | 10–30 min | ~20-hour campaign | Five Titans defeated → credits |
| **[Moonlighter 2](/games/moonlighter-2/dual-life-loop)** | 30–60 min | Three biomes (EA scope) → final-release content | Final story / biome boss |

### Why these games chose to be bounded

Sparklite devs were explicit about it:

> "Very few puzzles work well in a repeated context. We didn't want to procedurally reproduce the elegant progression of Zelda dungeons." — Lucas Rowe

Translation: they wanted *adventure* design alongside *roguelite* structure. A finite arc lets them author meaningful narrative beats (rescue NPCs, beat Titans, restore the world) while still using procedural layouts for replay.

Moonlighter 2 chose similarly — it's "going full roguelike" structurally but the campaign is bounded by the game's finite biomes and final story.

Compare with Slay the Spire: its 4-act structure has an *ending* (beat the Heart in act 4) but Ascension levels stretch the finishing line out to ~80+ runs. Spire is bounded *but* extended; Sparklite is bounded *and* short.

Compare with Warframe: explicitly *not* bounded. The endgame is meta-progression forever.

## When to use this pattern

- **Narrative-leaning indies** — when story matters and roguelite tempo is the *vehicle*, not the destination.
- **Smaller dev teams** — finite scope is cheaper than perpetual content.
- **Premium one-time pricing** — bounded games match a "you bought it, you finish it" expectation. F2P live-service can't easily be bounded.
- **Audiences burned out on infinite roguelites** — there's a real audience for "good 20 hours, then I'm done."

Avoid when:
- Your business model needs a long tail (live service, season passes).
- The game's identity is the meta-grind (Warframe, Path of Exile).
- The genre fanbase expects infinite content.

## Pitfalls

- **Run replayability post-credits drops to zero** — once the campaign is done, why keep playing? Sparklite was criticized for thin post-game.
- **Bounded scope can feel "small"** in marketing alongside infinite competitors. Expect comparisons.
- **Difficulty curve is harder** — you have to tune for the player who *will* finish, not the player who'll bounce off after 5 hours and never see act 3.
- **Hardcore roguelite fans may dismiss it** as "roguelite-lite." See: every Sparklite review that puts the word in scare quotes.

## Adjacent patterns

- The Sparklite devs use the term "permalife" for their specific stance: world resets on death, character keeps progress. That's a more particular pattern *enabled by* bounded roguelite framing.
