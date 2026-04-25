---
title: "Slay the Spire — Lessons for my own games"
type: game
game: slay-the-spire
---

# Lessons for my own (Godot) games

Spire's mechanics are some of the most *transferable* in modern indie design. Nothing here is locked to deckbuilders.

## Steal: pick a dialectic, restate it fractally

Spire's whole game is **risk vs reward at every scale**. Every screen presents a tradeoff, and they're all the same shape. New players intuit the principle in 30 minutes because the game shows it to them six different ways.

For my own games: **what's my one phrase?** "Speed vs accuracy"? "Greed vs survival"? "Specialize vs adapt"? Whatever it is, every screen should be a restatement.

## Steal: the Ascension staircase

A 20-step difficulty staircase, **one new constraint per level**, per character. Works for almost any genre with a "did you win?" loop. Hades does it (Heat). RoR2 does it (Eclipse). Could trivially work for an action game, a strategy game, a tower defense, a survival roguelite.

**Way more durable than a "Hard / Hell" slider.** Each level is a digestible new lesson; players self-pace.

## Steal: enemy intent telegraphs

The single most-transferable Spire mechanic. **If your enemies do something next turn / next interval, *show it*.** Removes feel-bad RNG, replaces it with planning skill.

Works for turn-based combat, semi-real-time, even action games (Dark Souls already does this with attack windups). Sparklite even does a softer version with enemy wind-ups. **Make the AI's next move visible.**

## Steal: power as variety, not stats

For replay-heavy games, **meta-progression should unlock variety, not raise base power.** The next run should be more *interesting*, not easier. New cards, new relics, new modifiers, new starter loadouts — yes. Bigger HP, bigger damage — no.

This is a strong default if you want runs to matter long-term. Hades does the opposite (and is great), but Hades is a very different shape — its meta-progression is deliberately a power ramp because the game *wants* you to eventually win. Spire's stance: keep the run's challenge constant; expand what you might encounter.

## Steal: subtractive loadouts

Spire-style "your starting loadout is bad and you carve it down" is a fertile space and **almost no Godot indie has tried it outside the deckbuilder genre.** Could work for spell loadouts (start with a bloated kit, prune to a focused build), ship modules, ability bars, character rosters.

The lesson: thin decks > big decks. **Make removing as rewarding as adding.**

## Steal: the map as a meta-decision layer

Adding a "node map" between fights — even a simple one — turns "string of random encounters" into "**chosen sequence of risks.**" Huge perceived-agency upgrade for very little authoring cost.

Could overlay on top of an action game (Hades' isometric room choice is a softer version of the same idea). Could overlay on top of a level-based platformer. Anywhere the player would otherwise just be handed encounters in a fixed order.

## Steal: card draft with skip

The "pick 1 of 3 *or skip*" pattern. Generalizes far past cards. **Treat 'nothing' as a first-class option in any reward draft.** It changes player decisions from "which is best" to "is *any* of these worth my limited slot."

## Steal: bonus-with-drawback for run-defining loot

Almost every Spire boss relic has a drawback. **This forces commitment.** If your game has run-defining loot, give it costs. Uncosted upgrades flatten variety because every "great" run has the same shape.

## Steal: daily seed = community for free

If your game has any RNG, a **daily-seeded mode with a leaderboard** costs almost nothing and creates community engagement that traditional patches can't. Wordle proved this beyond doubt. Make all your RNG seedable from day one.

## Steal: anti-streak pity systems

Hidden counters that bias drops upward when the player has been unlucky. **Smooths feel-bad runs without telling the player.** Players don't notice the pity system existing; they just notice that the game rarely feels malicious.

This is genuinely worth doing for *any* game with random rewards.

## Cautionary lesson: don't trust playtester preferences over data

Mega Crit's metric-driven patching is what kept Spire from drift over years of updates. Need a way to track *something* — pick rates, win rates, completion rates — even in a small game. **Even a simple analytics layer is more valuable than another playtester opinion round.**

## Cautionary lesson: be ruthless about pruning

Mega Crit generated thousands of card ideas and ruthlessly pruned weak concepts. **Most games ship too much.** Spire shipped what survived testing.

For my own games: design *more than I ship*. Let half of what I prototype get cut. Anything that doesn't earn its slot is noise.

## Cautionary lesson: difficulty cliffs are okay if they're teaching moments

Act 1 → Act 2 in Spire is a real difficulty cliff. The cliff is **the test of "did you learn to take Elites?"** Don't smooth out cliffs that exist for pedagogical reasons. Just make sure the cliff is teaching, not punishing for the sake of difficulty.
