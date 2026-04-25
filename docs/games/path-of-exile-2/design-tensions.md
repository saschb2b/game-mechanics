---
title: "Path of Exile 2 — Design tensions"
type: game
game: path-of-exile-2
patterns:
  - vision-driven-iteration
  - parallel-products
---

# Design tensions

PoE2 inherits PoE1's [five recurring dialectics](/games/path-of-exile/design-tensions) (friction vs convenience, complexity vs accessibility, trade vs SSF, deterministic vs RNG crafting, player power vs balance) and re-runs them at higher resolution. Plus three sequel-specific tensions of its own.

## 1. Speed vs. weight

The biggest single re-litigation. PoE1 drifted toward screen-clearing combat; PoE2 explicitly walks back. Paraphrased from Jonathan Rogers (ExileCon 2023):

> We want every monster to feel like an encounter, not a particle. PoE1 became about clearing screens. PoE2 is about killing things.

This is *the* design tension PoE2 was greenlit to address. The tension doesn't fully resolve in EA — at high build power the screen-clearing returns — but the campaign and bosses are universally cited as a step up.

The cost: PoE1 fans who *liked* the speed-meta find PoE2 plodding. There's a real audience PoE2 is choosing to disappoint.

## 2. Build space vs. legibility

PoE1's "any skill on any class on any weapon" was the maximum build space. PoE2's "your weapon is your build" is more legible.

GGG's stated reasoning: most players never used PoE1's full build space anyway — they stuck to "best skill for this archetype." The *theoretical* freedom was nominal for the median player. PoE2 narrows to what people actually played, while still giving theorycrafters two weapon sets per character.

The cost: rare creative builds (Witch with melee, Marauder with spells) are gone. The "build that surprises everyone" is harder to construct.

## 3. Death stakes vs. flow

PoE1's 10% XP penalty made death matter without making it permadeath. PoE2's one-death maps make death matter *much* more — the whole map is gone.

This is the most-debated change. EA discourse is split: purists love it, casual players bounce off it. The split is roughly the same fault line as the speed-vs-weight one: players who want consequence vs. players who want flow.

GGG's likely position: this is calibrating to where they want PoE2's audience to be. The audience that wanted soulslike-style consequence is being served. The audience that wanted PoE1 speed-clear maps... should play PoE1, which is still running.

## 4. Parallel products as a strategy

The most unusual decision GGG made. PoE2 is **not a replacement** for PoE1.

> PoE2 is not a replacement. PoE1 keeps its team, keeps its leagues, and keeps shipping. They're parallel games for parallel players.
> — paraphrased from Chris Wilson, ExileCon 2023 opening

In practice this means:
- PoE1 continues with its own league cadence.
- PoE2 has its own EA cycle, separate balance.
- They share assets, lore, currency philosophy, but not players.

This is unusual in F2P because it's *expensive* — two games, two teams, two sets of servers, two communities. The cost showed during PoE2 EA crunch when PoE1's league cadence slowed (Settlers of Kalguur was extended) and the PoE1 community complained loudly.

The benefit: GGG didn't have to betray either audience. The PoE1 player who hates one-death maps doesn't have to play PoE2; the new player who wants soulslike-leaning ARPG doesn't have to learn PoE1's surface area.

This is its own concept — see `parallel-products`.

## What's preserved

The Vision is unchanged.

- Friction is still load-bearing.
- Trade is still frictional (the trade UX in PoE2 is, if anything, slightly worse at EA — partly because the launch-day site couldn't keep up with the player count).
- Deterministic crafting is still aspirational; Recombinators look like the next Harvest.
- Player power is still managed via "ship and nerf" cycles — EA league 0.2.0 already had a major balance manifesto.

The dialectics didn't change. **The implementation did.**

## EA-specific tension: the Sekhemas / Trial of Chaos discourse

PoE2's ascendancy is gated behind one of two trials: **Trial of the Sekhemas** (a multi-floor dungeon with stacking debuffs) or **Trial of Chaos** (RNG-based reward selection). Both have been controversial:

- Sekhemas is too long and too punishing for casual players, particularly at the third ascendancy point.
- Trial of Chaos is too RNG — your run can be sabotaged by a bad afflictions roll.

Neither delivers PoE1's clean "earn it via skill (Izaro)" design. EA patches have repeatedly addressed this, and the design hasn't fully landed.

This is the rare case where PoE2 walked back a *good* PoE1 design — the Labyrinth was disliked but the ascendancy payoff was loved. Replacing the Lab with two new trials lost some of what worked.

## Patterns this exemplifies

- [`vision-driven-iteration`](/concepts/vision-driven-iteration) — PoE2 is GGG's Vision applied to a new canvas. Same balance philosophy, same nerf-cycle, same friction stance.
- `parallel-products` — running two games to serve two audiences rather than picking one.
